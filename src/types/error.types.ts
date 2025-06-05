export interface ApiErrorData {
  success?: boolean
  message?: string
  data: Record<string, unknown>
  [key: string]: unknown
}

export default class ApiError {
  error: ApiErrorData | null
  statusCode: number | undefined
  statusText: string | undefined

  static defaultMessage() {
    return 'Unknown error occurred'
  }

  constructor(
    error: ApiErrorData | null,
    statusCode: number | undefined,
    statusText: string | undefined,
  ) {
    this.error = error
    this.statusCode = statusCode
    this.statusText = statusText
  }
}
