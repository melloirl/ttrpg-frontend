<template>
  <main
    class="
      bg-moss-950 text-lich-50 flex min-h-screen flex-col items-center
      justify-center px-6 py-16
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
          flex max-w-xl flex-col gap-6
          md:gap-10
        "
      >
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
        <ul class="flex flex-col gap-4">
          <li
            v-for="(item, index) in listItems"
            :key="index"
            class="text-b-xl flex items-start gap-3"
          >
            <IconCandleSkull class="text-lich-500 mt-1 size-5 shrink-0" />
            <span>{{ t(item) }}</span>
          </li>
        </ul>
      </aside>
      <RegisterForm class="self-center" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import IconCandleSkull from '@/assets/icons/IconCandleSkull.svg'
import RegisterForm from '@/components/forms/RegisterForm.vue'

const { t } = useI18n()

const listItems = [
  'join.perks.character',
  'join.perks.maps',
  'join.perks.notes',
  'join.perks.stats',
  'join.perks.collab',
]
</script>
