<template>
  <button
    v-bind="$attrs"
    :class="twMerge(btnClass, $attrs.class as string)"
    :disabled="loading || $attrs.disabled as boolean"
  >
    <span
      v-if="loading"
      class="absolute inset-0 flex items-center justify-center"
    >
      <LoaderSpinner />
    </span>
    <span
      :class="[btnContentClass, { 'invisible opacity-0': loading }]"
    >
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import LoaderSpinner from '@/components/ui/LoaderSpinner.vue'
import useBtnClass from '@/composables/useBtnClass'
import { BTN_SIZE, BTN_VARIANT } from '@/enums/btn'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    variant?: BTN_VARIANT
    size?: BTN_SIZE
    stretch?: boolean
    loading?: boolean
  }>(),
  {
    variant: BTN_VARIANT.PRIMARY,
    size: BTN_SIZE.MEDIUM,
  },
)

const { btnClass, btnContentClass } = useBtnClass(props)
</script>
