import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // start progress bar
  NProgress.start()
  NProgress.done()
  next()
})

router.afterEach((to, from) => {
  // finish progress bar
  NProgress.done()
})

export default router
