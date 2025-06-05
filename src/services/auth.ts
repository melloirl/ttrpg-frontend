import { ApiService } from '@/services/api'

const api = new ApiService('auth')

export interface IPostLoginPayload {
  email: string
  password: string
}

export interface IPostLoginResponse {
  error?: string
  message: string
  statusCode: number
  token?: string
}

export async function login(
  payload: IPostLoginPayload,
): Promise<string | undefined> {
  const response = (await api.post(
    'login',
    payload,
  )) as IPostLoginResponse

  return response.token
}
