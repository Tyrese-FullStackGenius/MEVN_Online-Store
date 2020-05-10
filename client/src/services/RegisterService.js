import Api from '@/services/Api'

export default {
  register (params) {
    return Api().post('register', params)
  }
}
