// @ts-ignore
// 加载 iconfont 资源
import './iconfont'

// 加载本地 svg 资源
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)

