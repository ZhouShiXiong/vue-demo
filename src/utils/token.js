import Axios from 'axios'
import Cookies from 'js-cookie'
import serverConfig from '../config/server'

const uuidv4 = require('uuid/v4');


export async function getToken() {
    if (Cookies.get("token") && Cookies.get("uuid")) {
        return {
            uuid: await Cookies.get("uuid"),
            token: await Cookies.get("payToken")
        }
    } else {
        let uuid = uuidv4();
        let rlt = await Axios.get(`${serverConfig.pay_url}/api/v1/get_token?uuid=${uuid}`)
        let token = rlt.data.msgCiphered;
        await Cookies.set("payToken", token);
        await Cookies.set("uuid", uuid);
        return {
            uuid,
            token,
        }

    }

}