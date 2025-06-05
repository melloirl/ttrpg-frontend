<template>
  <main
    class="flex h-screen flex-col items-center justify-center gap-16 px-14"
  >
    <div class="flex items-center gap-8">
      <LoginForm @submit="handleFeedback" />
      <RegisterForm @submit="handleFeedback" />
    </div>
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
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LoginForm from '@/components/forms/LoginForm.vue'
import RegisterForm from '@/components/forms/RegisterForm.vue'
import useAuth from '@/composables/useAuth'

const { isAuthenticated } = useAuth()

const showFeedback = ref(false)

function handleFeedback() {
  showFeedback.value = true
  setTimeout(clearFeedback, 3000)
}

function clearFeedback() {
  showFeedback.value = false
}
</script>
