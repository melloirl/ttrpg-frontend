import { ref } from 'vue'
import { login } from '@/api/auth'
import { register } from '@/api/user'
// Global value. This is shared between all composable calls.
const isAuthenticated = ref<boolean | null>(null)

export default function useAuth() {
  async function tryLogin(payload: { email: string, password: string }) {
    try {
      const response = await login({
        email: payload.email,
        password: payload.password,
      })

      if (response) {
        isAuthenticated.value = true
        localStorage.setItem('jwtToken', response.token)
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

  async function tryRegister(payload: { email: string, password: string, name: string }) {
    await register(payload)
  }
  return { tryLogin, tryRegister, isAuthenticated }
}
