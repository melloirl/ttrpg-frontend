<template>
  <dialog
    ref="dialogRef"
    :open="isOpen"
    class="bg-moss-900 text-moss-200 m-auto rounded-[8px] border-2 px-8 py-4"
    @close="isOpen = false"
    @click="handleClick"
  >
    <slot />
  </dialog>
</template>

<script setup lang="ts">
import { ref, useTemplateRef, watch } from 'vue'

const isOpen = ref(false)

const dialogRef = useTemplateRef('dialogRef')

function showModal() {
  isOpen.value = true
  dialogRef.value?.showModal()
}
function closeModal() {
  isOpen.value = false
  dialogRef.value?.close()
}

function handleClick(event: MouseEvent) {
  const dimensions = dialogRef.value?.getBoundingClientRect()
  if (!dimensions)
    return
  if (
    event.clientX < dimensions.left
    || event.clientX > dimensions.right
    || event.clientY < dimensions.top
    || event.clientY > dimensions.bottom
  ) {
    closeModal()
  }
}

watch(isOpen, (val) => {
  val ? dialogRef.value?.showModal() : dialogRef.value?.close()
})

defineExpose({ showModal, closeModal, isOpen })
</script>

<style scoped>
@reference "../../assets/css/main.css";
dialog::backdrop {
  @apply bg-moss-950/50;
}

dialog {
  transition:
    display 200ms allow-discrete,
    overlay 200ms allow-discrete;

  animation: close 200ms forwards;
  &[open] {
    animation: open 200ms forwards;
  }
}

@keyframes open {
  from { transform: (-100,0) }
  to   { opacity: 1 }
}

@keyframes close {
  from { opacity: 1 }
  to   { opacity: 0 }
}
</style>
