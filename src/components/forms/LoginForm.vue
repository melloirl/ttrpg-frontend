<template>
  <Form @submit.prevent="handleLogin">
    <input
      id="email"
      v-model="form.email" required class="
        outline-moss-200 w-full rounded-[4px] px-2 outline outline-offset-2
      " type="text" :placeholder="t('form.login.title')"
    >
    <input
      id="password"
      v-model="form.password" required class="
        outline-moss-200 w-full rounded-[4px] px-2 outline outline-offset-2
      " type="password" :placeholder="t('form.login.password')"
    >
    <Btn stretch class="text-h-md">
      {{ t('ui.buttons.submit') }}
    </Btn>
  </Form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Btn from '@/components/ui/Btn.vue'
import Form from '@/components/ui/Form.vue'
import useAuth from '@/composables/useAuth'

const emit = defineEmits(['submit'])
const { t } = useI18n()
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
