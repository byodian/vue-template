import axios from 'axios'
import Qs from 'qs'

export class RequestError extends Error {
  constructor(message) {
    super()
    this.message = message
    this.name = this.constructor.name
  }
}

// 在类上定义默认值
axios.defaults.headers['Content-Type'] = 'application/json'
// 接口请求是否绕过300ms内不可重复请求。开启时，请确认代码的可用性。
axios.defaults.unique = false
// 对get请求传递数组情况下的处理
axios.defaults.paramsSerializer = function(params) {
  return Qs.stringify(params, { arrayFormat: 'comma' })
}
// 创建axios实例
const service = axios.create({
  baseURL: '/subdist_qidu',
  // 请求超时时间
  timeout: 15000
})

// 请求缓存
const requestKey = {}

// 获取请求内容字符串
const generateDataStr = config => {
  const { method, data, params } = config
  let dataStr = ''
  if (method === 'get' && params) {
    dataStr = typeof params !== 'string' ? JSON.stringify(params) : params
  }
  if (method === 'post' && data) {
    dataStr = typeof data !== 'string' ? JSON.stringify(data) : data
  }
  return dataStr
}

// request拦截器
service.interceptors.request.use(config => {
  // 如果当前网络有问题，直接报错
  if (!window.navigator.onLine) {
    throw new RequestError('请检查您的网络情况')
  }
  // 清除无用的cache
  Object.keys(requestKey).forEach(item => {
    const { isResponse, timestamp } = requestKey[item]
    if (isResponse && Date.now() - timestamp >= 300) {
      delete requestKey[item]
    }
  })
  // 阻止频繁请求和重复请求
  const { method, url, data, unique } = config
  const dataStr = generateDataStr(config)
  const hash = `${method}${url}${dataStr}${unique ? Math.random() : ''}`
  // 重复请求
  if (requestKey[hash]) {
    const { timestamp, isResponse, method, url } = requestKey[hash]
    // 距离上次请求不足300毫秒
    if (Date.now() - timestamp < 300) {
      console.warn('请求过于频繁', method, url)
      throw new RequestError('请求过于频繁')
    }
    // 请求尚未返回
    if (!isResponse) {
      console.warn('请勿重复提交', method, url)
      throw new RequestError('请勿重复提交')
    }
  }
  // 新请求初始化
  requestKey[hash] = {
    method,
    url,
    data,
    isResponse: false,
    timestamp: Date.now()

  }
  config.headers = {
    ...config.headers,
    // 防止接口请求缓存。https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control
    'Cache-Control': 'no-cache, no-store, max-age=0, must-revalidate'
  }
  return config
}, error => {
  throw new RequestError(error)
})

// response拦截器
service.interceptors.response.use(response => {
  // 如果请求返回，对应的requestKey.isResponse设置为true
  const { method, url } = response.config
  const dataStr = generateDataStr(response.config)
  const hash = `${method}${url}${dataStr}`
  if (requestKey[hash]) {
    requestKey[hash].isResponse = true
  }

  // 数据处理
  const { status, data, message } = response.data
  let customMessage
  if (status === '00000') {
    return data
  } else if (status === '40001') {
    customMessage = '用户未登录！'
    window.location.href = '/login'
  } else if (status === '99999') {
    // if (message && /^\s+##/g.test(message)) {
    //   message = '数据库异常，请稍后再重试'
    // } else if (!message){
    //   message = '服务器异常，请稍后重试！'
    // } else {
    //   message = message
    // }
    // message = message
  } else if (status === '40003') {
    customMessage = '没有权限！'
  }

  return Promise.reject(new RequestError(customMessage || message))
}, error => {
  // 自定义错误类直接抛出
  if (error instanceof RequestError) {
    throw error
  } else {
    // 如果请求返回，无论错误失败，对应的requestKey.isResponse设置为true
    const { config: { method, url }, code } = error
    const dataStr = generateDataStr(error.config)
    const hash = `${method}${url}${dataStr}`
    if (requestKey[hash]) {
      requestKey[hash].isResponse = true
    }
    // 超时
    if (code === 504) {
      throw new RequestError('服务端响应超时')
    }
    // 处理HTTP 错误 如404
    throw new RequestError(error.message)
  }
})

export default service
