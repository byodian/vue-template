import Vue from 'vue'
// @ts-ignore
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 引入所有的 svg icon 资源
import './icons'
// 引入 tailwind CSS
import 'tailwindcss/tailwind.css'
import '@/styles/index.scss'

// 全局注册所有以 `base` 或者 `App` 为前缀的组件
import '@/components/_global.js'

import router from './router'
console.log(process.env)
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
