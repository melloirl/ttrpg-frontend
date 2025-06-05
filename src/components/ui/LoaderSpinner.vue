<template>
  <div
    role="status"
    class="inline-flex items-center justify-center"
  >
    <Spinner
      :width="size"
      :height="size"
    />

    <span class="sr-only">...</span>
  </div>
</template>

<script lang="ts" setup>
import Spinner from '@/assets/icons/IconSpinner.svg'

withDefaults(
  defineProps<{
    size?: number
  }>(),
  {
    size: 16,
  },
)
</script>
