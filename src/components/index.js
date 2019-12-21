import LayoutAside from './home/layout-aside.vue'
import LayoutHeader from './home/layout-header.vue'
export default {
  install (Vue) {
    Vue.component('layout-aside', LayoutAside)
    Vue.component('layout-header', LayoutHeader)
  }
}
