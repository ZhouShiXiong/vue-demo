import { loginByUsername,loginSignup,getSMS,loginBySMS } from '@/api/login'
import { getToken, setToken, removeToken ,setUserId,setPath,removeSenior,removeVipCard,removeUserId,removeUser,removeAgencyRole,removeLoginSMS,removeLoginSmsTime} from '@/utils/auth'
import axios from 'axios'
// initial state
// shape: [{ id, quantity }]
const state = {
  user: '',
      status: '',
      code: '',
      token: getToken(),
      name: '',
      avatar: '',
      introduction: '',
      roles: [],
}

// getters
const getters = {
}

// actions
const actions = {



  GetSMS({}, phone) {
      return new Promise((resolve, reject) => {
        getSMS(phone).then(response => {
          const data = response.data
          console.log(data);
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },

    LoginBySMS({ commit }, username) {
        return new Promise((resolve, reject) => {
          loginBySMS(username).then(response => {
            const data = response.data
            commit('SET_TOKEN', data.token)
            setToken(response.data.token)
            setUserId(response.data.userId)
            resolve(data)
          }).catch(error => {
            reject(error)
          })
        })
      },
  LoginSignup({},userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        loginSignup(username, userInfo.password).then(response => {
          const data = response.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        loginByUsername(username, userInfo.password).then(response => {
          const data = response.data
          if (data.status==200) {
            commit('SET_TOKEN', data.token)
            setToken(response.data.token)
            setUserId(response.data.userId)
          }
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    LogOut({commit}){
      return new Promise(() => {
        let path = '/'
        setPath(path)
        removeToken();
        removeUserId();
        removeUser();
        removeSenior();
        removeAgencyRole();
        removeLoginSMS();
        removeLoginSmsTime();
        removeVipCard();
        delete axios.defaults.headers.common['authorization']
        commit('SET_NAME', '')
      })
    }

}

// mutations
const mutations = {
      SET_TOKEN: (state, token) => {
        state.token = token
      },
      SET_STATUS: (state, status) => {
        state.status = status
      },
      SET_NAME: (state, name) => {
        state.name = name
      },
      SET_AVATAR: (state, avatar) => {
        state.avatar = avatar
      },
      SET_ROLES: (state, roles) => {
        state.roles = roles
      }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
