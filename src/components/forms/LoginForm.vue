<template>
  <Form @submit.prevent="handleLogin">
    <input
      id="email"
      v-model="form.email" required class="
        outline-moss-200 w-full rounded-[4px] px-2 outline outline-offset-2
      " type="text" placeholder="E-mail"
    >
    <input
      id="password"
      v-model="form.password" required class="
        outline-moss-200 w-full rounded-[4px] px-2 outline outline-offset-2
      " type="password" placeholder="Password"
    >
    <Btn stretch class="text-h-md">
      Login
    </Btn>
  </Form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Btn from '@/components/ui/Btn.vue'
import Form from '@/components/ui/Form.vue'
import useAuth from '@/composables/useAuth'

const emit = defineEmits(['submit'])

const { tryLogin } = useAuth()

const form = ref({
  email: '',
  password: '',
})

async function handleLogin() {
  await tryLogin(form.value)
  emit('submit')
}
</script>
