import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import goods from '@/components/goods/goods'
import ratings from '@/components/ratings/ratings'
import seller from '@/components/seller/seller'

Vue.config.productionTip = false

Vue.use(VueRouter)
const routes = [
  {path:'/',redirect:'/goods'},
  {path:'/goods',component:goods},
  {path:'/ratings',component:ratings},
  {path:'/seller',component:seller}
]
const router = new VueRouter({

  mode:'history',
  routes,
  linkActiveClass:"active"
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
