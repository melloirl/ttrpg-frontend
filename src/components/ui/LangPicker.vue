<template>
  <Btn
    :variant="BTN_VARIANT.TRANSPARENT"
    :size="BTN_SIZE.SMALL"
    class="p-2 uppercase"
    @click="cycleLocale"
  >
    <div class="flex items-center gap-1">
      <Icon icon="ph:translate" />
      {{ trimName(cached) }}
    </div>
  </Btn>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useStorage } from '@vueuse/core'
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import Btn from '@/components/ui/Btn.vue'
import { BTN_SIZE, BTN_VARIANT } from '@/enums/btn'

const { locale, availableLocales } = useI18n({ useScope: 'global' })

const cached = useStorage('lang', locale.value)

onMounted(() => {
  if (availableLocales.includes(cached.value)) {
    locale.value = cached.value
  }
  else {
    locale.value = availableLocales[0]
    cached.value = locale.value
  }
})

function cycleLocale() {
  const idx = availableLocales.findIndex(l => l === locale.value)
  const nextIdx = (idx + 1) % availableLocales.length
  locale.value = availableLocales[nextIdx]
  cached.value = locale.value
}

function trimName(name: string) {
  return name.split('-')[0].slice(0, 2)
}
</script>
