import { api } from './Api'

const login = params => {
  return api.post('/login', params)
}

const register = params => {
  return api.post('/register', params)
}

const account = params => {
  return api.post('/account/settings', params)
}

export { login, register, account }
