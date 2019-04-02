import {
  getAppuser,editNickname,editSex,editPassword,editCover
} from '@/api/appuser'
import {setUser,setAgencyRole,setLoginSMS,setLoginSmsTime,setSenior,setPasswordSMS,setSignupSMS,setSignupSmsTime,setVipCard} from '@/utils/auth'
const state = {
    user:null,
    roles:[],
    userId:null,
    products:'unloaded',
    shopId:null,
    agencyRole:null,
    shop:null,
    platfromId:null,
    sms:null,
    signupsms:null,
    passwordsms:null,
  }

  // getters
  const getters = {
  }

  // actions
  const actions = {
    GetAppuser({ commit },userId) {
        return new Promise((resolve, reject) => {
          getAppuser(userId).then(response => {
            let data = response.data
            setUser(data.user)
            if (data.status==200) {
              commit('SET_APPUSER', data)
              console.log(data.role);
              setSenior(data.senior)
              setVipCard(data.vipcard)
              setAgencyRole(data.role)
              resolve(data)
            }
            else {
              resolve(data)
            }
          }).catch(error => {
            reject(error)
          })
        })
      },

      LogOut({commit}){
        return new Promise(() => {
          commit('SET_LOGOUT')
        })
      },

      EditNickname({},userInfo){
        return new Promise((resolve) => {
          editNickname(userInfo.userId,userInfo.value).then(response=>{
            let data = response.data;
            resolve(data)
          })
        })
      },
      EditSex({},userInfo){
        return new Promise((resolve) => {
          editSex(userInfo.userId,userInfo.value).then(response=>{
            let data = response.data;
            resolve(data)
          })
        })
      },
      EditCover({},userCover){
        return new Promise((resolve) => {
          editCover(userCover).then(response=>{
            let data = response.data;
            resolve(data)
          })
        })
      },
      EditPassword({},userInfo){
        return new Promise((resolve) => {
          editPassword(userInfo.userId,userInfo.newpassword).then(response=>{
            let data = response.data;
            resolve(data)
          })
        })
      },
      SetSMS({commit},num){
        commit('SET_SMS',num)
        setLoginSMS(num)
        let time = new Date()
        setLoginSmsTime(time)
      },
      SetSignupSMS({commit},num){
        commit('SET_SIGNUPSMS',num)
        setSignupSMS(num)
        let time = new Date()
        setSignupSmsTime(time)
      },
      SetPasswordSMS({commit},num){
        commit('SET_PASSWORDSMS',num)
        setPasswordSMS(num)
      },
  }

  // mutations
  const mutations = {
    SET_APPUSER:(state, data) => {
        state.userId=data.user._id
        state.user = data.user
        state.roles=data.roles
        state.agencyRole=data.role
        state.shop=data.shop
        state.shopId=data.shopId
        state.platfromId=data.platfromId
        state.senior = data.senior
      },
    SET_LOGOUT:(state)=>{
        state.user = null
        state.userId=null
        state.roles=[]
        state.agencyRole=null
        state.shop=null
        state.shopId=null
        state.platfromId=null
        state.sms=null
        state.signupsms=null
        state.sms=null
        state.passwordsms=null
      },
      SET_SMS:(state,data)=>{
        state.sms=data
        },
      SET_SIGNUPSMS:(state,data)=>{
        state.signupsms=data
        },
      SET_PASSWORDSMS:(state,data)=>{
        state.passwordsms=data
        },
    }

  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }
