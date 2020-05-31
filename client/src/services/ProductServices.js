import Api from '@/services/Api'

const get = params => {
  return Api().post('/products', params).then(res => {
    return res.data.products
  })
}

export { get }
