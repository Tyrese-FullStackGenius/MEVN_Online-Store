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

export { login, register, account }
