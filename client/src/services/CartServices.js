import { api } from './Api'

const add = params => {
  return api.post('/cart/add', params)
}

const get = params => {
  return api.get('/cart', params)
}

export { add, get }
