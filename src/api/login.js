import request from '@/utils/request';
import App from '@/config/app.json'
export function loginByUsername(username, password) {
    return request({
        method:"post",
        url:'/login',
        data:{
            username:username,
            password:password
        }
    })
}

export function loginSignup(username, password) {
    return request({
        method:"post",
        url:'/signup',
        data:{
            username:username,
            password:password
        },
    })
}

export function getSMS(phone) {
    return request({
        method:"get",
        url:'/getsms',
        params:{
            appName: App.name,
            phone:phone,
        },
    })
}


export function loginBySMS(username) {
    return request({
        method:"post",
        url:'/loginbysms',
        data:{
            username:username,
        }
    })
}
