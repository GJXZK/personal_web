export interface MusicUrlDto{
    id:string ;
    url:string;
    time:number;
}

export interface MusicInfoDto {
    id:string;
    name:string;
    singer:string;
    musicUrl:string;
    musicTimeFormat:string;
    musicTime:number;
    picUrl:string;
}
export interface SingerDto{
    name:string;
    id:string;
}
export interface AlbumDto{
    name:string;
    picUrl:string;
    id:string;
}
export interface GeneralMusicDto{
    name:string;
    singer:string;
    id:string;
}
export interface MusicDetailDto {
    
}