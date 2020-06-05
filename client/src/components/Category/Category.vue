<template>
  <div>
    <h1>{{ $route.params.name }} games</h1>
    <products :products="products" :show-skeleton-loaders="showSkeletonLoaders"/>
  </div>
</template>

<script>
import Products from '../Product/Products'
import {get as getProducts} from '../../services/ProductServices'

export default {
  name: 'Category',
  components: {Products},
  data () {
    return {
      products: [],
      showSkeletonLoaders: true
    }
  },
  watch: {
    $route () {
      getProducts({
        category: this.$route.params.name
      }).then(res => {
        this.showSkeletonLoaders = false
        this.products = res.data.products
      })
    }
  },
  beforeMount () {
    getProducts({
      category: this.$route.params.name
    }).then(res => {
      this.showSkeletonLoaders = false
      this.products = res.data.products
    })
  }
}
</script>

<style scoped>

</style>
