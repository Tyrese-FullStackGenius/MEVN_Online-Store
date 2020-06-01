<template>
<div>
  {{ product.name }}
</div>
</template>

<script>
import {get as getProducts} from '../services/ProductServices'

export default {
  name: "Product",
  data() {
    return {
      product: {}
    }
  },
  beforeMount() {
    getProducts({
      id: this.$route.params.id
    }).then(data => {
      this.product = data.product
      console.log(this.product);
    })
  }
}
</script>

<style scoped>

</style>
