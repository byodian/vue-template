import Vue from 'vue'
// @ts-ignore
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

// 引入 tailwind CSS
import 'tailwindcss/tailwind.css'
import '@/styles/index.scss'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

import { globalComponent } from '@/plugins'
Vue.use(globalComponent) // 全局注册名称以 `Base` 为前缀的组件

// 结合 Webpack loader - svg-sprite-loader, 引入 SVG Sprit
import './icons'

import router from './router'
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
