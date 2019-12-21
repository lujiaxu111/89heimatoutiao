import Vue from 'vue'
import App from './App.vue'
import './permission'
import router from './router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import './styles/index.less'
import axios from 'axios'
import Component from './components'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(ElementUi)
Vue.use(Component)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
