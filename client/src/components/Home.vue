<template>
  <div>
    <h1>Homepage</h1>
    <products :products="products" :show-skeleton-loaders="showSkeletonLoaders"/>
  </div>
</template>

<script>
import Products from './Product/Products'
import {get as getProducts} from '../services/ProductServices'

export default {
  name: 'Home',
  components: {Products},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      products: [],
      showSkeletonLoaders: true
    }
  },
  beforeCreate () {
    getProducts().then(res => {
      this.showSkeletonLoaders = false
      this.products = res.data.products
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  height: 2000px;
}
</style>
