import Api from '@/services/Api'

const login = params => {
  return Api().post('login', params)
}

const register = params => {
  return Api().post('register', params)
}

const account = params => {
  return Api().post('/account/settings', params)
}

const addToCart = params => {
  return Api().post('/cart/add', params)
}

const getCart = params => {
  return Api().post('/cart/get', params)
}

export { login, register, account, addToCart, getCart }
