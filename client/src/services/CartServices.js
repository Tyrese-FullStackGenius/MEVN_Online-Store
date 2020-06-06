import Api from '@/services/Api'

const add = params => {
  return Api().post('/cart/add', params)
}

const get = params => {
  return Api().post('/cart/get', params)
}

export { add, get }
