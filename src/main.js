import Vue from 'vue'

// 引入 tailwind CSS
import 'tailwindcss/tailwind.css'
import '@/styles/index.scss'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App.vue'
import store from './store'

import router from './router'

import { globalComponent } from '@/plugins' // 全局注册名称以 `Base` 为前缀的组件

// 结合 Webpack loader - svg-sprite-loader, 引入 SVG Sprit
import './icons'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(globalComponent)
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
