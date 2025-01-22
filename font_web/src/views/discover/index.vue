<script setup lang="ts">
import discoverApi from '@/api/Discover/index'
import { onMounted, ref } from 'vue'
import type{ BannerDto } from '@/model/discover'
import type { Ref } from 'vue'
let banners:Ref<BannerDto[]> = ref([])
async function getBannerLists() {
  const res = await discoverApi.getBannerList()
  banners.value = res
  console.log(banners.value);
  
}
onMounted(() => {
  getBannerLists()
})
</script>
<template>
  <div class="h-full">
    <!-- 轮播图 -->
    
    <div class="w-full h-40% flex justify-center mt-10px">
      <a-carousel
        :autoPlay="true"
        animation-name="card"
        show-arrow="never"
        indicator-position="outer"
        :style="{
          width: '90%',
          height: '100%'
        }"
      >
        <a-carousel-item v-for="image in banners" :style="{ width: '60%' }">
          <img
            :src="image.imageUrl"
            :style="{
              width: '100%',
              borderRadius:'10px',
            }"
          />
        </a-carousel-item>
      </a-carousel>
    </div>
    <div class="flex"></div>
  </div>
</template>
<style scoped></style>
