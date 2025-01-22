<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import useSearchKeyword from '@/stores/homePage'

let searchKeyWord = ref('')
const route = useRoute()
const router = useRouter()
const SearchKeyword = useSearchKeyword()
function SearchFocus() {}
function onSubmit() {
  SearchKeyword.updateKeyword(searchKeyWord.value)
  router.push('search')
}
let threm = "light"
function changeThrme() {
  if(threm == "light"){
    threm = "dark"
    document.body.setAttribute('arco-theme', 'dark')
  }else{
    threm = "light"
    document.body.removeAttribute('arco-theme');
  }
}
</script>
<template>
  <div class="test fixed top-0 w-full h-70px z-100 bg-bgc flex items-center justify-between">
    <div class="flex items-center">
      <!-- 网站名网站logo -->
      <!-- 头部导航栏 左侧 logo-->
      <div class="w-300px flex items-center">
        <div class="w-60px ml-20px">
          <img :style="{ width: '100%' }" src="@/assets/img/logo.png" />
        </div>
        <div class="pl-20px text-20px color-#fff">Insomnia-music</div>
      </div>
    </div>
    <a-button @click="changeThrme">主题</a-button>
  </div>
</template>
<style>
    /* .test{
      background-color:var(--color-bg-2);
    } */
  </style>
