import router from './router'
import store from './store'
import {
  Toast
} from 'vant'
import {
  getToken,
  getUserId,
  setPath
} from '@/utils/auth'


router.beforeEach((to,from, next) => {
  store.dispatch('footer/selected', to.path)
  if (getToken()) {
    store.dispatch('appuser/GetAppuser', getUserId()).then((res) => {
      if (res.status === 200) {} else {
        // Toast.fail({
        //   duration: 3000,
        //   message: '用户出错请重新登录'
        // });


        const toast = Toast.loading({
              duration: 0,       // 持续展示 toast
              forbidClick: true, // 禁用背景点击
              loadingType: 'spinner',
              message: '用户出错请重新登录 3秒后重新登录'
            });
            let second = 3;
            const timer = setInterval(() => {
              second--;
              if (second) {
                toast.message = `用户出错请重新登录 ${second} 秒后重新登录`;
              } else {
                clearInterval(timer);
                Toast.clear();
                store.dispatch('user/LogOut')
                store.dispatch('appuser/LogOut')
                next('/login')
              }
            }, 1000);



      }
    })
    if (to.path == '/login' || to.path == '/loginpassword' || to.path == '/loginsignup') {
      next('/')
    }
    next()
  } else {

    if (to.path != '/login' && to.path != '/loginpassword' && to.path != '/loginsignup' && to.path != '/') {
      let path = to.path
      setPath(path)
    }
    if (to.path == '/login' || to.path == '/loginpassword' || to.path == '/loginsignup' || to.path == '/' || to.matched[0].path == '/goods/:id') {
      next()
    } else {
      next('/login')
    }
  }
})
