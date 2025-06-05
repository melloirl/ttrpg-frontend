import type { IPostLoginPayload } from '@/api/auth'
import type { IPostRegisterPayload } from '@/api/user'
import { ref } from 'vue'
import { login } from '@/api/auth'
import { register } from '@/api/user'
// Global value. This is shared between all composable calls.
const isAuthenticated = ref<boolean | null>(null)

export default function useAuth() {
  async function tryLogin(payload: IPostLoginPayload) {
    try {
      const token = await login({
        email: payload.email,
        password: payload.password,
      })

      if (token) {
        isAuthenticated.value = true
        localStorage.setItem('jwtToken', token)
      }
      else {
        isAuthenticated.value = false
      }
    }
    catch (error) {
      console.error('Error during login:', error)
      isAuthenticated.value = false
    }
  }

  async function tryRegister(payload: IPostRegisterPayload) {
    await register(payload)
  }
  return { tryLogin, tryRegister, isAuthenticated }
}
