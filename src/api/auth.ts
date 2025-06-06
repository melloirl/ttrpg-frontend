import type { USER_ROLE } from '@/enums/user-role'
import { ApiResponse, ApiService } from '@/api'
import { mockAuthData } from './mocks/auth.mock'

const isMocking = Boolean(import.meta.env.VITE_MOCK_ENABLED) || true

const api = new ApiService('auth')

interface UserData {
  id: number
  name: string
  email: string
  role: USER_ROLE
}

interface UserWithToken { user: UserData, token: string }

export async function login(
  payload: { email: string, password: string },
): Promise<UserWithToken> {
  if (isMocking) {
    await new Promise(resolve => setTimeout(resolve, 1000))

    const user = mockAuthData.users.find(
      u => u.email === payload.email && u.password === payload.password,
    )

    if (user) {
      const { password: _, ...userData } = user
      return ApiResponse.ok<UserWithToken>({
        user: userData,
        token: mockAuthData.generateToken(user.id),
      }).data
    }

    ApiResponse.fail('Invalid credentials.', 'USER_INVALID_CREDENTIALS')
  }

  const response = await api.post('login', payload)
  return response as UserWithToken
}
