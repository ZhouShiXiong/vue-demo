import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
  
    {
      path: '/personal',
      name: 'personal',
      component: () => import('./views/Personal.vue')
    },
  
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/loginpassword',
      name: 'login-password',
      component: () => import('./views/LoginByPassword.vue')
    },
    {
      path: '/loginsignup',
      name: 'login-signup',
      component: () => import('./views/LoginSignup.vue')
    },
    
    {
      path: '/404',
      name: 'notfound',
      component: () => import('./views/NotFound.vue')
    },
   
    {
      path: '*',
      redirect: '404',
    }
  ]
})
