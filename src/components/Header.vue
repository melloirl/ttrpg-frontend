<template>
  <div
    class="fixed inset-x-0 top-0 z-10 border-b border-white/10"
  >
    <div
      class="
        flex items-center justify-between px-4
        sm:px-6
      "
    >
      <div
        class="flex h-14 items-center gap-8"
      >
        <img :src="Logo" alt="Logo" class="h-8">
        <p
          class="
            font-grover bg-gradient-to-b from-[#3F2481] to-[#AB1C4D]
            bg-clip-text text-3xl font-bold text-transparent
          "
        >
          Philactery
        </p>
      </div>
      <nav>
        <ul class="flex items-center justify-center gap-4 text-sky-200">
          <li v-for="(link, key) in navigationLinks" :key="key">
            <RouterLink
              :to="toRouterObject(link.name)"
              class="hover:text-white"
            >
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Logo from '@/assets/phil.svg'
import Routes from '@/enums/routes'

const navigationLinks = {
  home: { name: Routes.HOME, label: 'Home' },
  about: { name: Routes.ABOUT, label: 'About' },
}

function toRouterObject(name: string) {
  return {
    name,
  }
}
</script>
