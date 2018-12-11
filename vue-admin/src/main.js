import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router"
// import VueResource from "vue-resource"
import {routes} from "./routes.js"
import axios from 'axios'


Vue.config.productionTip = false

Vue.use(VueRouter)
// Vue.use(VueResource)
// 注意
Vue.prototype.$http = axios

const router = new VueRouter({
  mode:'history',
  base:__dirname,
  routes
})



/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
