<template>
  <div
    class="bg-moss-950/50 border-lich-50/10 fixed inset-x-0 top-0 z-50 border-b"
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
            <IconWarlockEye
              class="text-lich-700"
              width="32"
              height="32"
            />
          </div>
        </RouterLink>
      </div>
      <div class="flex items-center justify-center gap-2">
        <LangPicker />
        <nav id="header-nav" class="relative">
          <ul
            v-if="Object.keys(navigationLinks).length > 0" class="
              ml-2 flex items-center justify-center gap-4
            "
          >
            <li v-for="(link, key) in navigationLinks" :key="key">
              <RouterLink
                :to="{ name: link.name }"
              >
                <Btn
                  class="p-2"
                  :variant="BTN_VARIANT.TRANSPARENT" :size="BTN_SIZE.SMALL
                  "
                >
                  {{ link.label }}
                </Btn>
              </RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import IconWarlockEye from '@/assets/icons/IconWarlockEye.svg'
import Btn from '@/components/ui/Btn.vue'
import LangPicker from '@/components/ui/LangPicker.vue'
import { BTN_SIZE, BTN_VARIANT } from '@/enums/btn'
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
  // about: { name: Routes.ABOUT, label: t('about.title') },
}))
</script>

<style scoped>
#header-nav::after {
  content: "";
  background: var(--color-moss-800);
  position: absolute;
  top: 50%;
  left: 0;
  height: 60%;
  width: 1px;
  transform: translateY(-50%);
}
</style>
