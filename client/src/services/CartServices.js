import { api, authorization } from './Api'

const add = params => {
  return api.post('/cart/add', {
    headers: authorization,
    data: params
  })
}

const get = params => {
  return api.get('/cart', {
    headers: authorization,
    data: params
  })
}

export { add, get }
