<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import useSearchKeywords from '@/stores/homePage'
import type { SearchSongsDto, SearchSongsResDto } from '@/model/search'
import searchApi from '@/api/Search/search'
import musicApi from '@/api/MusicApi/music'
import type { Ref } from 'vue'
import { useGlobalStore } from '@/stores/global'
import { useMusicDetail } from '@/stores/music'
import type { MusicInfoDto, MusicUrlDto } from '@/model/music'
import router from '@/router'
import { handleMusicTime } from '@/plugins/utils'
import { ClickMusicAndPlay } from '@/hook/music/index'
const SearchKeywords = useSearchKeywords()
const globalStore = useGlobalStore()
const MusicDetail = useMusicDetail()
// 展示在表格里的数据
const SearchRequest: Ref<SearchSongsDto[]> = ref([])
// 搜索歌曲
async function getSearchSongByKeyword(keyword: string) {
  const SearchSongs = ref<SearchSongsDto[]>([])
  SearchSongs.value = await searchApi.goSearch(keyword)
  getShowSearchSongs(SearchSongs.value)
}
// 将搜索结果转换为可以在表格中使用的数据test
function getShowSearchSongs(data: SearchSongsDto[]) {
  SearchRequest.value = []
  data.forEach((item) => {
    SearchRequest.value.push({
      name: item.name,
      id: item.id,
      singer: item.ar[0].name,
      album: item.al.name,
      long: '1000',
      ar: [],
      al: {
        id: item.al.id,
        name: item.al.name,
        picUrl: item.al.picUrl
      }
    })
  })
}
const scrollStyle = computed(() => {
  return {
    height: `${globalStore.windowHeight - 140}px`,
    'overflow-y': 'auto',
    'overflow-x': 'hidden'
  }
})

onMounted(async () => {
  if (SearchKeywords.searchKeyword != '') {
    getSearchSongByKeyword(SearchKeywords.searchKeyword)
  } else {
    router.push('discover')
  }
})

watch(
  () => SearchKeywords.searchKeyword,
  (newValue, oldValue) => {
    console.log('aaaaaaa')
    getSearchSongByKeyword(newValue)
  }
)
// 表格列表
const columns = [
  {
    title: '音乐标题',
    dataIndex: 'name',
    slotName: 'name'
  },
  {
    title: '歌手',
    dataIndex: 'singer',
    slotName: 'singer'
  },
  {
    title: '专辑',
    dataIndex: 'album',
    slotName: 'album'
  }
]
const pagination = { pageSize: 30 }
async function getMusicUrlAndPlay(record: SearchSongsDto) {
  let musicUrl: Ref<MusicUrlDto[]> = ref([])
  musicUrl.value[0] = await musicApi.getMusicUrl(record.id)
  let time = handleMusicTime(musicUrl.value[0].time)
  let MusicInfo: Ref<MusicInfoDto> = ref({
    name: record.name,
    singer: record.singer,
    musicUrl: musicUrl.value[0].url,
    musicTime: musicUrl.value[0].time,
    musicTimeFormat: time,
    picUrl: record.al.picUrl
  })
  MusicDetail.updateMusicInfo(MusicInfo.value)
}
async function test(record: SearchSongsDto) {}
</script>
<template>
  <div class="h-full">
    <a-scrollbar :style="scrollStyle">
      <div>
        <!-- 搜索关键词 -->
        <div class="ml-20px">
          <h1>搜索：{{ SearchKeywords.searchKeyword }}</h1>
        </div>
        <div class="p-20px">
          <a-table
            :columns="columns"
            :data="SearchRequest"
            :bordered="false"
            :pagination="pagination"
            :scroll="{ x: '100%' }"
          >
            <!-- y:globalStore.windowHeight-330  -->
            <template #name="{ record }">
              <div class="flex items-center cursor-pointer">
                <span @click="" @dblclick="ClickMusicAndPlay(record)">
                  {{ record.name }}
                </span>
              </div>
            </template>
            <template #singer="{ record }">
              <div class="flex items-center cursor-pointer">
                <span @click="">
                  {{ record.singer }}
                </span>
              </div>
            </template>

            <template #album="{ record }">
              <div class="flex items-center cursor-pointer">
                <span @click="">
                  {{ record.album }}
                </span>
              </div>
            </template>
          </a-table>
        </div>
      </div>
    </a-scrollbar>
  </div>
</template>
<style scoped></style>
