
const state = {
    active: 0,
 }
  
  // getters
  const getters = {
  }
  
  // actions
  const actions = {
      selected ({commit}, path) {
        console.log(path)
          switch(path) {
              case '/':
                commit('changeActive',0)
                break;
              // case '/about':
              //   commit('changeActive',1)
              //   break;
              // case '/cart':
              //   commit('changeActive',2)
              //   break;
              case '/personal':
                commit('changeActive',1)
                break
              default:
                commit('changeActive',0)

          }
      }
  }
  
  // mutations
  const mutations = {
      changeActive (state, index) {
          state.active = index
      }
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }
  