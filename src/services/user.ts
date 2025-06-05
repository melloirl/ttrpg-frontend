import type { USER_ROLE } from '@/enums/user-role'
import { ApiService } from '@/services/api'

const api = new ApiService('users')

export interface IPostRegisterPayload {
  name: string
  email: string
  password: string
}

interface IRegistrationData {
  id: number
  email: string
  name: string
  role: USER_ROLE
}

export async function register(
  payload: IPostRegisterPayload,
): Promise<IRegistrationData | undefined> {
  const response = await api.post('register', payload) as IRegistrationData | undefined

  return response
}
