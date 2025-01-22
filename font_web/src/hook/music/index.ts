import type { MusicInfoDto, MusicUrlDto } from '@/model/music'
import type { SearchSongsDto } from "@/model/search"
import { handleMusicTime } from "@/plugins/utils"
import type { Ref } from "vue"
import {ref} from "vue"
import musicApi from '@/api/MusicApi/music'
import { useMusicDetail } from '@/stores/music'
const MusicDetail = useMusicDetail()

export async function ClickMusicAndPlay(record: SearchSongsDto) {
    let musicUrl: Ref<MusicUrlDto[]> = ref([])
    musicUrl.value[0] = await musicApi.getMusicUrl(record.id)
    let time = handleMusicTime(musicUrl.value[0].time)
    let MusicInfo: Ref<MusicInfoDto> = ref({
        id: record.id,
        name: record.name,
        singer: record.singer,
        musicUrl: musicUrl.value[0].url,
        musicTime: musicUrl.value[0].time,
        musicTimeFormat: time,
        picUrl: record.al.picUrl
    })
    MusicDetail.updateMusicInfo(MusicInfo.value)
}