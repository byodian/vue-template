import Vue from 'vue'
// @ts-ignore
import SvgIcon from '@/components/SvgIcon.vue'// svg component

// register globally
Vue.component('SvgIcon', SvgIcon)

// @ts-ignore
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
