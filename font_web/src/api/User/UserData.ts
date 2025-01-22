import { request } from "..";
// /user/account
//获取账号信息
const getAccount = async():Promise<string> =>{
    const resp = await request(`/user/account`)
    return resp.data
}

export default {
    getAccount
}