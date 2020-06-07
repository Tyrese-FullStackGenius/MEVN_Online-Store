import { api, authorization } from './Api'

const login = params => {
  return api.post('/login', {
    data: params
  })
}

const register = params => {
  return api.post('/register', {
    data: params
  })
}

const account = params => {
  return api.post('/account/settings', {
    headers: authorization,
    data: params
  })
}

export { login, register, account }
