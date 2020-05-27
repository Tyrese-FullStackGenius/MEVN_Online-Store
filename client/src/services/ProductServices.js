import Api from '@/services/Api'

const get = params => {
  return Api().get('/products', params).then(res => {
    return res.data.products
  })
}

export { get }
