import Api from '@/services/Api'

export default {
  account (params) {
    return Api().post('/account/settings', params).then(res => {
      console.log(res)
    })
  }
}
