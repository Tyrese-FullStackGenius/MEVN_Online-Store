import { api } from './Api'

const get = params => {
  return api.get('/categories', {
    params: params
  })
}

export { get }
