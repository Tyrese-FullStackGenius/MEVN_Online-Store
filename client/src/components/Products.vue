<template>
  <div>
    <v-container fluid>
      <v-row v-if="showSkeletonLoaders">
        <div v-for="loader in 12" :key="loader" class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <v-skeleton-loader
            class="mx-4"
            type="card"
            elevation="2"
            loading
          ></v-skeleton-loader>
        </div>
      </v-row>
      <v-row v-else>
        <div v-for="product in products" :key="product._id" class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <v-card class="d-flex mx-4" :to="`/products/${product._id}`">
            <v-container fluid>
              <v-row>
                <v-col class="col-lg-12 col-xl-6">
                  <v-img
                    height="200px"
                    contain
                    :src="product.image_url"
                  ></v-img>
                </v-col>
                <v-col class="col-lg-12 col-xl-6">
                  <v-card-title class="text-break">{{ product.name }}</v-card-title>
                  <v-card-text>&#163;{{ product.price.toFixed(2) }}</v-card-text>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Products',
  props: {
    products: Array,
    showSkeletonLoaders: Boolean
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
