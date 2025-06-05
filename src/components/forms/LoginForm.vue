<template>
  <Form @submit.prevent="handleLogin">
    <h1 class="text-lg underline decoration-wavy underline-offset-4">
      Login
    </h1>
    <input
      id="email"
      v-model="form.email" required class="
        outline-moss-200 w-full rounded-xs px-2 outline outline-offset-2
      " type="text" name="email" placeholder="E-mail"
    >
    <input
      id="password"
      v-model="form.password" required class="
        outline-moss-200 w-full rounded-xs px-2 outline outline-offset-2
      " type="password" name="password" placeholder="Password"
    >
    <button
      class="
        bg-moss-600 cursor-pointer rounded-sm p-2 shadow
        hover:bg-moss-400 hover:text-moss-100
      "
    >
      Login
    </button>
  </Form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Form from '@/components/ui/Form.vue'
import useAuth from '@/composables/useAuth'

const emit = defineEmits(['submit'])

const { postLogin } = useAuth()

const form = ref({
  email: '',
  password: '',
})

async function handleLogin() {
  await postLogin(form.value)
  emit('submit')
}
</script>
