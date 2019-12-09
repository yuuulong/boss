import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'reset.css'
// 使用vuex
// import store from './store'
// 移动端1px边框问题
import 'border.css'
import fastClick from 'fastclick'
Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
