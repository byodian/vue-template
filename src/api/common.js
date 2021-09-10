import Request from '@/utils/request.js'

export function getLocationApi(types) {
  return Request({
    url: `/location/${types}`
  })
}
