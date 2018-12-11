import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import routes from './routes'
import store from './store/store'
require('./assets/css/bootstrap.min.css')
// require('../index.html')
//https://wd8404463506owhyls.wilddogio.com/
//https://wd8035063481kxzide.wilddogio.com/
// http://localhost:3000

axios.defaults.baseURL = 'https://wd5850362164ghimed.wilddogio.com/'
Vue.prototype.axios = axios
Vue.use(VueRouter)
const router = new VueRouter({
  mode:'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition) {
      return savedPosition
    }else{
      return { x: 0, y: 0 }
    }
  }
})

//全局守卫,一定要放在声明后面
// router.beforeEach((to,from,next)=>{
//   console.log(to)
//   //模拟，判断store.gettes.isLogin === false
//   if(to.path == '/login' || to.path == '/Register'){
//     next()
//   }else{
//     alert('login')
//     next('/login')
//   }
//   // next()
// })

//全局解析守卫
// router.beforeResolve((to, from, next) => {
//   // alert('hh')
// })

//全局后置钩子
// router.afterEach((to,from)=>{
//   alert('hh')
// })

new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})
