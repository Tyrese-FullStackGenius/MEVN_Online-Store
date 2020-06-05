import Api from '@/services/Api'

const get = params => {
  return Api().get('/categories', params)
}

export { get }
