import { api } from './Api'

const get = params => {
  return api.post('/categories', {
    data: params
  })
}

export { get }
