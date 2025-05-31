<template>
  <Header />
  <div class="min-h-dvh pt-16.25">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>
