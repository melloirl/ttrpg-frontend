<template>
  <input v-model="modelValue" :class="twMerge(baseClass, props.class)" v-bind="$attrs">
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { useVModel } from '@vueuse/core'
import { twMerge } from 'tailwind-merge'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<{
  defaultValue?: string | number
  modelValue?: string | number
  class?: HTMLAttributes['class']
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const baseClass = 'outline-moss-200 w-full rounded-xs px-2 outline outline-offset-2'

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})
</script>
