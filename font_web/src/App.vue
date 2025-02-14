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
  <div class="mt-70px">
    <router-view></router-view>
  </div>
  
</template>

<style lang="css" scoped>
  .bgc{
    background-color:var(--color-bg-1); 
  }
</style>
