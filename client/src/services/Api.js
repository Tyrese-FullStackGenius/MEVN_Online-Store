import axios from 'axios'
import store from '../store/index'

const api = axios.create({
  baseURL: `http://localhost:8081`
})

api.interceptors.response.use(response => {
  store.commit('hideAlert')
  return response
}, res => {
  let errors = []
  if (res.response.data.errors) {
    res.response.data.errors.forEach(e => errors.push(e.msg))
  } else if (res.response.message) {
    errors = [res.response.message]
  } else {
    errors = [res.response.statusText]
  }
  store.commit('showAlert', errors)
  return Promise.reject(res)
})

export default () => {
  return api
}
