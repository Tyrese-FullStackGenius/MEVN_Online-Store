import Api from '@/services/Api'
import store from '../store/index'

const login = params => {
  return Api().post('login', params).then(res => {
    localStorage.setItem('token', res.data.token)
    store.dispatch('authSuccess', [res.data.token, res.data.user])
    store.dispatch('setCart', res.data.cart)
  })
}

const register = params => {
  return Api().post('register', params)
}

const account = params => {
  return Api().post('/account/settings', params).then(res => {
    store.dispatch('setUserEmail', res.data.email)
  })
}

const addToCart = params => {
  return Api().post('/cart/add', params).then(res => {
    store.dispatch('setCart', res.data.cart)
  })
}

const getCart = params => {
  return Api().post('/cart/get', params).then(res => {
    store.dispatch('setCart', res.data.cart)
  })
}

export { login, register, account, addToCart, getCart }
