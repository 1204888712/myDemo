import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueRouter from 'vue-router'
// import './assets/js/key' //引入bmob js-sdk
import {routes}  from './routes.js'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.prototype.$http = axios

// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


// axios.defaults.headers.post["X-Bmob-Application-Id"] = 'application/x-www-form-urlencoded';
//钩子函数
// Vue.directive('rainbow',{
//   bind(el,binding,vnode){
//     el.style.color="#"+Math.random().toString(16).slice(2,8)
//   }
// })
Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value == 'wide'){
      el.style.maxWidth = "1260px"
    }else if(binding.value == 'narrow'){
      el.style.maxWidth = "720px"
    }
    if(binding.arg == 'column'){
      el.style.background = "#6677cc"
      el.style.padding = '20px'
    }
  }
})

// Vue.filter('to-uppercase', function (value) {
//   // 返回处理后的值
//   return value.toUpperCase()
// })
Vue.filter('snippet', function (value) {
  // 返回处理后的值
  return value.slice(0,100)+"..."
})

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes,
})
/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
