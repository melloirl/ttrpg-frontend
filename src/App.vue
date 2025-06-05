<template>
  <Header />
  <div class="min-h-dvh pt-16.25">
    <RouterView />
  </div>
  <Footer />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Footer from '@/components/ui/Footer.vue'
import Header from '@/components/ui/Header.vue'
</script>
