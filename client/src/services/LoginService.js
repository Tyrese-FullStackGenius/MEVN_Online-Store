import Api from '@/services/Api'
import store from '../store/index'

export default {
  login (params) {
    return Api().post('login', params).then(res => {
      localStorage.setItem('token', res.data.token)
      store.dispatch('authSuccess', [res.data.token, res.data.user])
    })
  }
}
