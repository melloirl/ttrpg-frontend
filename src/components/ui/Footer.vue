<template>
  <footer
    class="
      bg-moss-950/50 inset-x-0 z-50 flex h-[48px] items-center justify-end
      border-t border-white/10 p-8
    "
  >
    <h1 class="text-lich-400">
      {{ t('footer.made') }} <span
        class="
          bg-gradient-to-b from-teal-500 to-teal-50 bg-clip-text
          text-transparent
        "
      >♥</span> {{ t('footer.by') }} <a
        target="_blank" rel="noreferrer noopener"
        href="https://github.com/melloirl" class="
          hover:text-lich-200
          underline decoration-wavy underline-offset-4
        "
      >melloirl</a>
    </h1>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
