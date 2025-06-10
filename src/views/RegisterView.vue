<template>
  <main
    class="
      bg-moss-950 text-lich-50 flex min-h-screen flex-col items-center
      justify-center px-6 pb-16
    "
  >
    <div
      class="
        flex w-full max-w-7xl flex-col items-center gap-16
        md:flex-row md:items-start md:justify-between
      "
    >
      <aside
        class="
          relative flex max-w-xl flex-col gap-6 overflow-hidden
          md:gap-10
        "
      >
        <IconWarlockEye
          class="
            text-lich-600 pointer-events-none absolute bottom-0 left-1/2 size-96
            -translate-x-1/2 opacity-10
          "
        />
        <h1
          class="
            font-wdxl text-lich-700 text-5xl leading-tight
            md:text-7xl
            lg:text-8xl
          "
        >
          {{ t('join.title') }}
        </h1>
        <p class="text-h-lg text-lich-300">
          {{ t('join.subtitle') }}
        </p>
        <ul class="relative z-10 flex flex-col gap-4">
          <li
            v-for="(item, index) in listItems"
            :key="index"
            class="text-b-xl flex items-start gap-3"
          >
            <Icon :icon="item.icon" class="text-lich-500 mt-1 size-5 shrink-0" />
            <span>{{ t(item.key) }}</span>
          </li>
        </ul>
      </aside>
      <RegisterForm class="self-center" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useI18n } from 'vue-i18n'
import IconWarlockEye from '@/assets/icons/IconWarlockEye.svg'
import RegisterForm from '@/components/forms/RegisterForm.vue'

const { t } = useI18n()

const listItems = [
  {
    key: 'join.perks.character',
    icon: 'ph:scroll',
  },
  {
    key: 'join.perks.maps',
    icon: 'ph:globe-stand',
  },
  {
    key: 'join.perks.notes',
    icon: 'ph:archive',
  },
  {
    key: 'join.perks.stats',
    icon: 'ph:heart',
  },
  {
    key: 'join.perks.collab',
    icon: 'ph:handshake',
  },
]
</script>
