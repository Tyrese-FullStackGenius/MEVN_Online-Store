<template>
  <div>
    <h1>{{ $route.params.name }} games</h1>
    <products :products="products" :show-skeleton-loaders="showSkeletonLoaders"/>
  </div>
</template>

<script>
import Products from './Products'
import {get as getProducts} from '../services/ProductServices'

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
      }).then(products => {
        this.showSkeletonLoaders = false
        this.products = products
      })
    }
  },
  beforeMount () {
    getProducts({
      category: this.$route.params.name
    }).then(products => {
      this.showSkeletonLoaders = false
      this.products = products
    })
  }
}
</script>

<style scoped>

</style>
