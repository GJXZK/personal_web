<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useGlobalStore } from '@/stores/global'
import homeHeader from '@/components/HomePage/home-header.vue'
import { computed } from 'vue'
const globalStore = useGlobalStore()
const RouterViewStyle = computed(() => {
  return {
    height: `${globalStore.windowHeight - 140}px`,
    width: `${globalStore.windowWidth - 200}px`
  }
})
</script>

<template>
  <homeHeader></homeHeader>
</template>
