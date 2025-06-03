<template>
  <Form @submit.prevent="handleSubmit">
    <h1 class="text-lg underline decoration-wavy underline-offset-4">
      Register
    </h1>
    <input
      id="email"
      v-model="form.email" required class="
        w-full rounded-xs px-2 outline outline-offset-2 outline-indigo-200
      " type="text" name="email" placeholder="E-mail"
    >
    <input
      id="name"
      v-model="form.name" required class="
        w-full rounded-xs px-2 outline outline-offset-2 outline-indigo-200
      " type="text" name="name" placeholder="Name"
    >
    <input
      id="password"
      v-model="form.password" required class="
        w-full rounded-xs px-2 outline outline-offset-2 outline-indigo-200
      " type="password" name="password" placeholder="Password"
    >
    <button
      class="
        cursor-pointer rounded-sm bg-indigo-600 p-2 shadow
        hover:bg-indigo-400 hover:text-indigo-100
      "
    >
      Register
    </button>
  </Form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Form from '@/components/ui/Form.vue'
import useAuth from '@/composables/useAuth'

const { postRegister } = useAuth()

const form = ref({
  email: '',
  password: '',
  name: '',
})

async function handleSubmit() {
  try {
    await postRegister(form.value)
  }
  catch (error) {
    console.error('Registration failed:', error)
  }
}
</script>
