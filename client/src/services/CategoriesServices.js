import { api } from './Api'

const get = params => {
  return api.post('/categories', params)
}

export { get }
