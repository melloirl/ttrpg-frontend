<template>
  <div
    class="bg-moss-950/50 fixed inset-x-0 top-0 z-10 border-b border-white/10"
  >
    <div
      class="
        flex items-center justify-between px-4
        sm:px-6
      "
    >
      <div
        class="flex h-16 items-center gap-8"
      >
        <RouterLink :to="{ name: Routes.HOME }">
          <div class="flex items-center gap-2">
            <p
              class="font-wdxl text-lich-700 text-3xl"
            >
              Philactery
            </p>
            <Icon
              icon="game-icons:warlock-eye"
              class="text-lich-700"
              width="32"
              height="32"
            />
          </div>
        </RouterLink>
      </div>
      <nav>
        <ul
          v-if="Object.keys(navigationLinks).length > 0" class="
            text-moss-400 flex items-center justify-center gap-4
          "
        >
          <li v-for="(link, key) in navigationLinks" :key="key">
            <RouterLink
              :to="{ name: link.name }"
              class="hover:text-moss-200"
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
import { Icon } from '@iconify/vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import Routes from '@/enums/routes'

const { t } = useI18n()

interface NavigationLinks {
  [key: string]: {
    name: Routes
    label: string
  }
}

const navigationLinks = computed<NavigationLinks>(() => ({
  home: { name: Routes.HOME, label: t('home.title') },
  about: { name: Routes.ABOUT, label: t('about.title') },
}))
</script>
