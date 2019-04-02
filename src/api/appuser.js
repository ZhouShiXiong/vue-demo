import request from '@/utils/request'
import App from '@/config/app.json'

export const getAppuser = (userId) => {
    return request({
        method: 'get',
        url: '/appuser',
        params:{
          userId:userId,
          appName: App.name
        }
    })
}


export const editNickname = (userId,value) => {
    return request({
        method: 'patch',
        url: '/appuser/editnickname',
        params:{
          userId:userId,
          value:value,
          appName: App.name
        }
    })
}


export const editCover = (userCover) => {
    return request({
        method: 'patch',
        url: '/appuser/editcover',
        params:{
          userId:userCover.userId,
          imgfile:userCover.cover
        }
    })
}


export const editSex = (userId,value) => {
    return request({
        method: 'patch',
        url: '/appuser/editsex',
        params:{
          userId:userId,
          value:value,
          appName: App.name
        }
    })
}
export const editPassword = (userId,newpassword) => {
    return request({
        method: 'patch',
        url: '/appuser/editpassword',
        params:{
          userId:userId,
          newpassword:newpassword,
          appName: App.name
        }
    })
}
