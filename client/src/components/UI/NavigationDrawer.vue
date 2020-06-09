<template>
  <v-navigation-drawer
    class="grey lighten-4 float-right"
    v-model="showDrawerRight"
    disable-resize-watcher
    clipped
    right
  >
    <v-list dense>
      <v-list-item v-for="(product, index) in cart" :key="product._id + index">
        {{ product.name}} - {{ product.price }} <v-btn text class="red--text" @click="destroy(product._id)">-</v-btn>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import {get as getCart, destroy as destroyCartItem} from '../../services/CartServices'

export default {
  name: 'NavigationDrawer',
  computed: {
    cart () {
      return this.$store.getters.cart
    },
    showDrawerRight () {
      return this.$store.getters.showDrawerRight
    }
  },
  methods: {
    destroy (id) {
      destroyCartItem({
        id: id
      }).then(res => {
        this.$store.dispatch('setCart', res.data.cart)
      })
    }
  },
  beforeCreate () {
    getCart({
      token: this.$store.getters.token
    }).then(res => {
      this.$store.dispatch('setCart', res.data.cart)
    })
  }
}
</script>

<style scoped>

</style>
