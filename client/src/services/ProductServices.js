import { api } from './Api'

const get = params => {
  return api.post('/products', {
    data: params
  })
}

export { get }
