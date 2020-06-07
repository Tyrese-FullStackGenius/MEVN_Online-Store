import axios from 'axios'
import store from '../store/index'

const api = axios.create({
  baseURL: `http://localhost:8081`
})

const authorization = {
  Authorization: 'Bearer ' + store.getters.token
}

api.interceptors.response.use(response => {
  store.commit('hideAlert')
  return response
}, res => {
  let errors = []

  if (res.response.data.errors) {
    res.response.data.errors.forEach(e => errors.push(e.msg))
  } else if (res.response.data.message) {
    errors = [res.response.data.message]
  } else {
    errors = [res.response.statusText]
  }
  store.commit('showAlert', errors)
  return Promise.reject(res)
})

export {api, authorization}
