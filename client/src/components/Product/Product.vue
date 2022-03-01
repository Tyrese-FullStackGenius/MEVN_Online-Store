<template>
  <div>
    <v-btn to="/">Go back</v-btn>
    <v-btn @click="addItemToCart">Add to cart</v-btn>
    <h1>{{ product.name }}</h1>
    <v-container fluid>
      <v-row>
        <div class="col-12 col-sm-6 col-lg-3">
          <v-img :src="product.image_url"></v-img>
        </div>
        <div class="col-12 col-sm-6 col-lg-9">
          <p>Category: {{ product.category_id }}</p>
          <p>Price: &#163;{{ product.price }}</p>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import {get as getProducts} from '../../services/ProductServices'
import {add as addToCart} from '../../services/CartServices'

export default {
  name: 'Product',
  data () {
    return {
      product: {}
    }
  },
  methods: {
    addItemToCart () {
      addToCart({
        token: this.$store.getters.token,
        product: this.product
      }).then(res => {
        this.$store.dispatch('setCart', res.data.cart)
      })
    }
  },
  beforeMount () {
    getProducts({
      id: this.$route.params.id
    }).then(res => {
      this.product = res.data.product
    })
  }
}
</script>

<style scoped>

</style>
