import Api from '@/services/Api'
import store from '../store/index'

const login = params => {
  return Api().post('login', params).then(res => {
    localStorage.setItem('token', res.data.token)
    store.dispatch('authSuccess', [res.data.token, res.data.user])
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

export { login, register, account }
