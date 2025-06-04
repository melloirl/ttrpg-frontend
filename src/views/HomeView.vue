<template>
  <div class="relative min-h-screen">
    <div
      ref="vantaRef"
      class="absolute inset-0 -z-10 opacity-30"
    />
    <main
      class="
        relative z-10 flex flex-col items-center justify-start gap-16 px-6 py-8
      "
    >
      <div
        class="
          flex w-full max-w-6xl flex-col items-center justify-between gap-12
          md:flex-row
        "
      >
        <div class="text-lich-700 flex w-full flex-col gap-6 text-left">
          <h1
            class="
              font-wdxl text-5xl leading-tight
              md:text-7xl
              lg:text-8xl
            "
          >
            Simplify your online tabletop RPG sessions.
          </h1>
          <h2
            class="
              text-lich-500 text-2xl leading-snug
              md:text-3xl
              lg:text-4xl
            "
          >
            Manage character sheets, maps, notes, and player stats — all in one place.
          </h2>
        </div>
        <img
          :src="LichImage"
          alt="A lich holding a phylactery"
          class="
            w-72
            md:w-80
            lg:w-96
          "
        >
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, useTemplateRef } from 'vue'
import LichImage from '@/assets/illustrations/lich_philactery.png'

const vantaRef = useTemplateRef('vantaRef')
let vantaEffect: { destroy: () => void } | null = null

onMounted(async () => {
  // Script setup forces us to dynamically import Vanta.js
  const { default: FOG } = await import('vanta/dist/vanta.fog.min.js')

  if (vantaRef.value) {
    vantaEffect = FOG({
      el: vantaRef.value,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      highlightColor: 0x22FF88,
      midtoneColor: 0x0D0D0D,
      lowlightColor: 0x050505,
      baseColor: 0x000000,
      blurFactor: 0.4,
      speed: 1.2,
      zoom: 1.1,
    })
  }
})

onBeforeUnmount(() => {
  if (vantaEffect) {
    vantaEffect.destroy()
  }
})
</script>
