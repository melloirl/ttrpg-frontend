import type { AxiosRequestConfig, CancelTokenSource } from 'axios'
import axios from 'axios'
import ApiError from '@/types/error.types'

export function configureAxios(
  configFn: (axiosInstance: typeof axios) => void,
) {
  configFn(axios)
}

function removeSlashes(str: string) {
  return str.replace(/^\/?(.+?)\/?$/, '$1')
}

export class ApiService {
  baseURL: string
  basePath: string
  source: CancelTokenSource | null = null

  constructor(basePath = '') {
    const rawPort = import.meta.env.VITE_API_PORT
    const port = Number(rawPort) || 3000

    this.baseURL = `http://localhost:${port}`

    this.basePath = basePath ? `/${removeSlashes(basePath)}` : ''
  }

  list(params: AxiosRequestConfig['params'] = undefined) {
    return this.request('', 'GET', undefined, params)
  }

  get(
    idOrPath: string,
      params: AxiosRequestConfig['params'] = undefined,
      headers: AxiosRequestConfig['headers'] = undefined,
  ) {
    return this.request(idOrPath, 'GET', undefined, params, headers)
  }

  update(id: string, data: Record<string, unknown> = {}) {
    return this.request(id, 'PUT', data)
  }

  delete(id: string) {
    return this.request(id, 'DELETE')
  }

  create(data: Record<string, unknown> = {}) {
    return this.request('', 'POST', data)
  }

  post(path: string, data: object = {}) {
    const ans = this.request(path, 'POST', data)
    return ans
  }

  put(path: string, data: Record<string, unknown> | File = {}) {
    return this.request(path, 'PUT', data)
  }

  patch(path: string, data: Record<string, unknown> = {}) {
    return this.request(path, 'PATCH', data)
  }

  getUri(path = '') {
    const resultPath
          = path === ''
            ? this.basePath
            : `${this.basePath}/${removeSlashes(path)}`

    return resultPath
  }

  cancel(reason = 'Request cancelled') {
    if (this.source) {
      this.source.cancel(reason)
    }
  }

  async request(
      path = '',
      method: AxiosRequestConfig['method'] = 'GET',
      data: AxiosRequestConfig['data'] = undefined,
      params: AxiosRequestConfig['params'] = null,
      headers: AxiosRequestConfig['headers'] = undefined,
  ) {
    const relativeUri = this.getUri(path)

    const url = `${this.baseURL}${relativeUri}`

    const { CancelToken } = axios
    this.source = CancelToken.source()

    const options: AxiosRequestConfig = {
      url,
      method,
      data,
      cancelToken: this.source.token,
    }

    if (params) {
      options.params = params
    }
    if (headers) {
      options.headers = headers
    }

    let response
    try {
      response = await axios.request(options)
      this.source = null
    }
    catch (err) {
      this.source = null

      if (`${err}`.includes('Network Error')) {
        throw new ApiError(null, -1, 'NETWORK_ERROR')
      }

      if (axios.isCancel(err)) {
        throw new ApiError(null, 499, 'Request cancelled')
      }

      if (axios.isAxiosError(err)) {
        const {
          data: errData,
          status,
          statusText,
        } = err.response || {}
        throw new ApiError(errData, status, statusText)
      }

      throw err
    }

    if (!response) {
      return {}
    }

    return response.data
  }
}
