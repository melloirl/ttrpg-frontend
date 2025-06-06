import { ApiResponse, ApiService } from '@/api'
import { mockAuthData } from './mocks/auth.mock'

const isMocking = Boolean(import.meta.env.VITE_MOCK_ENABLED) || true

const api = new ApiService('users')

export async function register(
  payload: { email: string, password: string, name: string },
): Promise<unknown> {
  if (isMocking) {
    await new Promise(resolve => setTimeout(resolve, 1000))

    const user = mockAuthData.users.find(
      u => u.email === payload.email,
    )

    if (user) {
      return ApiResponse.fail('This e-mail is already in use.', 'USER_ALREADY_EXISTS')
    }
  }
  const response = await api.post('register', payload)

  return response
}
