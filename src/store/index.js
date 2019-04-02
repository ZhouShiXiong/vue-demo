import Vue from 'vue'
import Vuex from 'vuex'
import model from './modules/model'
import footer from './modules/footer'
import user from './modules/user'
import appuser from './modules/appuser'
import createLogger from '../plugins/logger'
import getters from './getters'


Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
const store =  new Vuex.Store({
  getters,
  modules: {
    model,
    footer,
    user,
    appuser,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
export default store
