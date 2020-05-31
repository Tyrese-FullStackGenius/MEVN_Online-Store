import Api from '@/services/Api'

const get = params => {
  return Api().get('/categories', params).then(res => {
    return res.data.categories
  })
}

export { get }
