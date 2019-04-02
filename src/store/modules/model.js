
// initial state
// shape: [{ id, quantity }]
const state = {
    productDetail: false,
  }
  
  // getters
  const getters = {
  }
  
  // actions
  const actions = {
      changeState ({commit}) {
        commit('showModel')
      }
  }
  
  // mutations
  const mutations = {
      showModel (state) {
          state.productDetail = !state.productDetail
      }
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }
  