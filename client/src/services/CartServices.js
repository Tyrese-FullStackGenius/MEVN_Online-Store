import { api } from './Api'

const add = params => {
  return api.post('/cart/add', params)
}

const get = params => {
  return api.get('/cart', params)
}

const destroy = params => {
  return api.delete('/cart/delete', {
    params: params
  })
}

export { add, get, destroy }
