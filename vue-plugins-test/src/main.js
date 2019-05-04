import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from "./routers.js"
import Notice from './components/notice/index.js'

Vue.use(Notice)
import myloading from './components/loading/index.js'

Vue.use(myloading)
Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
