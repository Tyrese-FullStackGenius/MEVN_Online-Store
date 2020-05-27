<template>
  <div>
    <v-card v-for="product in products" :key="product.id" class="d-inline-block mx-auto">
      <v-container>
        <v-row>
          <v-col class="col-6">
            <v-img
              height="200px"
              contain
              :src="product.image_url"
            ></v-img>
          </v-col>
          <v-col class="col-6">
            <v-card-title>{{ product.name }}</v-card-title>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <ul>
    </ul>
  </div>
</template>

<script>
import {get as getProducts} from '../services/ProductServices'

export default {
  name: 'Products',
  data () {
    return {
      products: []
    }
  },
  beforeCreate () {
    getProducts().then(products => {
      this.products = products
    })
  }
}
</script>

<style scoped>

</style>
