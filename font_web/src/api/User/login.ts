import { request } from "..";

//二维码 key 生成接口
const getKey = async():Promise<string> =>{
    const resp = await request(`/login/qr/key`)
    return resp.data.data.unikey
}
// 二维码生成接口
 const getQrCode = async(key:string):Promise<string> => {
    const resp = await request(`/login/qr/create?key=${key}&qrimg=true&&timestamp=${Date.now()}`)
    return resp.data.data.qrimg
}
 // 二维码状态查询接口
 const checkQrCode = async(key:string): Promise<number> => {
    // let time = getTime
    const resp = await request(`/login/qr/check?key=${key}&timestamp=${Date.now()}`)
    return resp.data.code
}
export default {
    getKey,
    getQrCode,
    checkQrCode
}