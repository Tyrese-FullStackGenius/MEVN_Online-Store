import axios from 'axios'
import store from '../../store/index'
const api = axios.create({
  baseURL: `http://localhost:8081`
})

api.interceptors.response.use(response => {
  store.commit('hideAlert')
  return response
}, error => {
  store.commit('showAlert', error.response.data.message)
  return Promise.reject(error)
})

export default () => {
  return api
}
