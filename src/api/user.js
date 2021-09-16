import Request from '@/utils/request.js'

export function login(data) {
  return Request({
    url: '',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return Request({
    url: '',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return Request({
    url: '',
    method: 'post'
  })
}
