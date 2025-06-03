import { ref } from 'vue'

export interface PostLoginPayload {
  email: string
  password: string
}

export interface PostRegisterPayload extends PostLoginPayload {
  name: string
}

export interface PostLoginResponse {
  success: boolean
  message: string
  token: string
}

// Global value. This is shared between all composable calls.
const isAuthenticated = ref<boolean | null>(null)

export default function useAuth() {
  async function postLogin(payload: PostLoginPayload) {
    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: payload.email, password: payload.password }),
      })

      if (response.ok) {
        isAuthenticated.value = true
        const jsonResponse: PostLoginResponse = await response.json()
        localStorage.setItem('jwtToken', jsonResponse.token)
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

  async function postRegister(payload: PostRegisterPayload) {
    try {
      const response = await fetch('http://localhost:3000/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: payload.name,
          email: payload.email,
          password: payload.password,
        }),
      })

      if (response.ok) {
        return true
      }
      else {
        return false
      }
    }
    catch (error) {
      console.error('Error during registration:', error)
      isAuthenticated.value = false
    }
  }

  async function heartbeat() {
    try {
      const response = await fetch('http://localhost:3000/users/hello', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      })

      return `Authentication ${response.ok ? '' : 'not'} successful`
    }
    catch (error) {
      console.error('Error during hello request:', error)
      return 'Error during heartbeat'
    }
  }

  return { postLogin, postRegister, heartbeat, isAuthenticated }
}
