import { api } from './Api'

const get = params => {
  return api.post('/products', params)
}

export { get }
