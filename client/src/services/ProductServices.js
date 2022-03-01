import {api} from './Api'

const get = params => {
  return api.get('/products', {
    params: params
  })
}

export {get}
