<template>
  <Form @submit.prevent="handleSubmit">
    <div class="relative w-full items-center">
      <span
        class="absolute inset-y-0 start-0 flex items-center justify-center px-2"
      >
        <Icon
          icon="ph:user-circle" class="text-lich-50 size-5"
        />
      </span>
      <BaseInput
        id="name"
        v-model="form.name"
        autocomplete="username"
        class="h-[40px] pl-10" required type="text" :placeholder="t('form.register.username')"
      />
    </div>
    <div class="relative w-full items-center">
      <span
        class="absolute inset-y-0 start-0 flex items-center justify-center px-2"
      >
        <Icon
          icon="ph:envelope" class="text-lich-50 size-5"
        />
      </span>
      <BaseInput
        id="email"
        v-model="form.email"
        autocomplete="email"
        class="h-[40px] pl-10" required type="email" :placeholder="t('form.register.email')"
      />
    </div>
    <div class="relative w-full items-center">
      <span
        class="absolute inset-y-0 start-0 flex items-center justify-center px-2"
      >
        <Icon
          icon="ph:lock" class="text-lich-50 size-5"
        />
      </span>
      <BaseInput
        id="password"
        v-model="form.password"
        autocomplete="new-password"
        class="h-[40px] pl-10" required type="password" :placeholder="t('form.register.password')"
      />
    </div>
    <Btn stretch :size="BTN_SIZE.LARGE" :disabled="loading">
      {{ t('ui.buttons.submit') }}
    </Btn>
  </Form>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import BaseInput from '@/components/ui/BaseInput.vue'
import Btn from '@/components/ui/Btn.vue'
import Form from '@/components/ui/Form.vue'
import useAuth from '@/composables/useAuth'
import { BTN_SIZE } from '@/enums/btn'

const { tryRegister, tryLogin } = useAuth()
const { t } = useI18n()

const loading = ref(false)
const form = ref({
  email: '',
  password: '',
  name: '',
})

async function handleSubmit() {
  loading.value = true
  try {
    await tryRegister(form.value)
    await tryLogin({
      email: form.value.email,
      password: form.value.password,
    })
  }
  catch (error) {
    console.error('Registration or login failed:', error)
  }
  finally {
    loading.value = false
  }
}
</script>
