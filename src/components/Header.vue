<template>
  <div
    class="fixed inset-x-0 top-0 z-10 border-b border-white/10"
  >
    <div
      class="
        flex h-14 items-center gap-8 px-4
        sm:px-6
      "
    >
      <img :src="Logo" alt="Logo" class="h-8">
      <p
        class="
          bg-gradient-to-b from-[#3F2481] to-[#AB1C4D] bg-clip-text text-xl
          font-bold text-transparent
        "
      >
        Philactery
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from '@/assets/phil.svg'
</script>
