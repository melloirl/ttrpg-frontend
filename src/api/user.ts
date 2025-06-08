import { ApiResponse, ApiService } from '@/api'
import { USER_ROLE } from '@/enums/user-role'
import { mockAuthData } from './mocks/auth.mock'

const isMocking = Boolean(import.meta.env.VITE_MOCK_ENABLED) || true

const api = new ApiService('users')

interface RegisterPayload { email: string, password: string, name: string }
interface UserData { id: number, name: string, email: string, role: USER_ROLE }
interface UserWithToken { user: UserData, token: string }

export async function register(
  payload: RegisterPayload,
): Promise<ApiResponse<UserWithToken>> {
  if (isMocking) {
    // simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1_000))

    // check for existing email
    const existing = mockAuthData.users.find(u => u.email === payload.email)
    if (existing) {
      return ApiResponse.fail('This e-mail is already in use.', 'USER_ALREADY_EXISTS')
    }

    // create new user (assign next ID, default to PLAYER role)
    const newId = Math.max(...mockAuthData.users.map(u => u.id)) + 1
    const newUser = {
      id: newId,
      name: payload.name,
      email: payload.email,
      password: payload.password,
      role: USER_ROLE.PLAYER,
    }
    mockAuthData.users.push(newUser)

    // generate & store token
    const token = mockAuthData.generateToken(newId)

    // strip password before returning
    const { password, ...safeUser } = newUser

    return ApiResponse.ok<UserWithToken>({ user: safeUser, token })
  }

  // real network call
  const response = await api.post('register', payload)
  return response as ApiResponse<UserWithToken>
}
