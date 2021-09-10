import defaultSettings from '@/settings'

const title = defaultSettings.title || 'qidu admin'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}

/**
 * @param {Function} fn 防抖函数
 * @param {Number} delay 延迟时间
 */
export function debounce(fn, delay) {
  var timer
  return function() {
    var context = this
    var args = arguments
    clearTimeout(timer)
    timer = setTimeout(function() {
      fn.apply(context, args)
    }, delay)
  }
}
