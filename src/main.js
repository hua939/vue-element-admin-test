import Vue from 'vue'
// import Cookies from 'js-cookie'
import App from './App.vue'
import Element from 'element-ui'
import './styles/element-variables.scss'
import '@/styles/index.scss'
import './permission'

Vue.config.productionTip = false
Vue.use(Element)

import router from './router'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

