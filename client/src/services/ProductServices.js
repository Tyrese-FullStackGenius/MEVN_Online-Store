import Api from '@/services/Api'

const get = params => {
  return Api().post('/products', params)
}

export { get }
