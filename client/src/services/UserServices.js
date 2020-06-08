import { api } from './Api'

const login = params => {
  return api.post('/login', params)
}

const register = params => {
  return api.post('/register', params)
}

const account = params => {
  return api.get('/account/settings', {
    params: params
  })
}

export { login, register, account }
