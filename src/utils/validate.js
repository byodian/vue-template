// 验证数字
export const isNumber = (rule, value, callback) => {
  if (!/^[0-9]*$/.test(value)) {
    callback(new Error('请输入数字'))
  } else {
    callback()
  }
}

// 验证IP
export const isValidIP = (rule, value, callback) => {
  const reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
  if (!reg.test(value)) {
    callback(new Error('请输入正确IP'))
  } else {
    callback()
  }
}

// 验证用户名
export const checkInputBlank = (rule, value, callback) => {
  if (value && value.indexOf(' ') > -1) {
    return callback(new Error('存在空格符'))
  }
  return callback()
}

// 验证手机
export const validatePhone = (rule, value, callback) => {
  const regExp = /^[1][0-9]{10}$/
  if (value && regExp.test(value) === false) {
    callback(new Error('非法的号码格式'))
  } else {
    callback()
  }
}
/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

