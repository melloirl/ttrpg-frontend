<template>
  <main
    class="flex h-screen flex-col items-center justify-center gap-16 px-14"
  >
    <form
      class="
        flex w-[500px] flex-col items-center justify-center gap-4 rounded-sm
        border bg-gray-900 px-8 py-4 text-sky-200
      "
      @submit.prevent="handleLogin"
    >
      <h1 class="text-lg underline decoration-wavy underline-offset-4">
        Login
      </h1>
      <input
        id="email"
        v-model="form.email" required class="
          w-full rounded-xs px-2 outline outline-offset-2 outline-sky-200
        " type="text" name="email" placeholder="E-mail"
      >
      <input
        id="password"
        v-model="form.password" required class="
          w-full rounded-xs px-2 outline outline-offset-2 outline-sky-200
        " type="password" name="password" placeholder="Password"
      >
      <button
        class="
          cursor-pointer rounded-sm bg-sky-600 p-2 shadow
          hover:bg-sky-400 hover:text-sky-100
        "
      >
        Login
      </button>
    </form>
    <Transition enter-from-class="transform-translate-x-[20px]" enter-to-class="transform-translate-x-[20px]">
      <p
        v-if="isAuthenticated !== null && showFeedback"
        class="rounded-md border border-gray-900 p-2 text-lg font-semibold" :class="[isAuthenticated ? `
          bg-green-500/10 text-green-500
        ` : `bg-red-500/10 text-red-500`]"
      >
        {{ isAuthenticated ? 'Login succeeded!' : 'Login failed. Try again.' }}
      </p>
    </Transition>

    <div class="flex flex-col gap-2">
      <button
        class="
          cursor-pointer rounded-sm bg-sky-600 p-2 text-sky-100 shadow
          hover:bg-sky-400
        "
        @click="handleHeartbeat"
      >
        Test JWT Token
      </button>
      <button
        class="
          cursor-pointer rounded-sm bg-red-600 p-2 text-red-100 shadow
          hover:bg-red-400
        "
        @click="clearLocalStorage"
      >
        Clear JWT Token
      </button>
      <p
        v-if="heartbeatMessage"
        class="
          rounded-md border border-gray-900 bg-gray-900/50 p-2 text-lg
          font-semibold text-gray-100
        "
      >
        {{ heartbeatMessage }}
      </p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useAuth from '@/composables/useAuth'

const { postLogin, isAuthenticated, heartbeat } = useAuth()

const form = ref({
  email: '',
  password: '',
})

const showFeedback = ref(false)
const heartbeatMessage = ref('Heartbeat not yet triggered')

function clearFeedback() {
  showFeedback.value = false
}

async function handleLogin() {
  await postLogin(form.value)
  showFeedback.value = true
  setTimeout(clearFeedback, 3000)
}

async function handleHeartbeat() {
  const response = await heartbeat()
  heartbeatMessage.value = response
}

function clearLocalStorage() {
  localStorage.removeItem('jwtToken')
}
</script>
