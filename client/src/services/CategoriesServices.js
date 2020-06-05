import Api from '@/services/Api'

const get = params => {
  return Api().post('/categories', params)
}

export { get }
