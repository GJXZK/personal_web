import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { MusicInfoDto, SingerDto } from '@/model/music'
export const useMusicDetail = defineStore('PlayingMusicUrl', () => {
  let musicId = ref('')
  let PlayingMusicUrl = ref("")
  let musicTimeFormat = ref("")
  let musicTime = ref(0)
  let picUrl = ref("")
  let musicName = ref("我想睡觉")
  let musicSinger = ref("")
  function updateMusicInfo(data: MusicInfoDto) {
    PlayingMusicUrl.value = data.musicUrl
    picUrl.value = data.picUrl
    musicTime.value = data.musicTime
    musicTimeFormat.value = data.musicTimeFormat
    musicName.value = data.name
    musicSinger.value = data.singer

  }
  function updateMusicTimeFormat(time: string) {
    musicTimeFormat.value = time
  }
  function updateMusic(url: string) {
    PlayingMusicUrl.value = url
  }
  function updateMusicTime(time: number) {
    musicTime.value = time
  }
  function updateMusicId(id: string) {
    musicId.value = id
  }


  return {musicId, musicName, musicSinger, PlayingMusicUrl, musicTime, musicTimeFormat, picUrl, updateMusic, updateMusicTime, updateMusicTimeFormat, updateMusicInfo, updateMusicId }
})
