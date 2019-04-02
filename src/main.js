import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './assets/commen.scss'
import './assets/rem'
import VueLazyload from 'vue-lazyload'
import './permission'
Vue.use(VueLazyload)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
