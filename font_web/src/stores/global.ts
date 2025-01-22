import { computed, ref, type ComputedRef, type Ref, watchEffect } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', () => {
  const windowWidth = ref(window.innerWidth)
  const windowHeight = ref(window.innerHeight)
  window.addEventListener('resize', function () {
    windowWidth.value = window.innerWidth
    windowHeight.value = window.innerHeight
  })

  return { windowHeight, windowWidth }
})
