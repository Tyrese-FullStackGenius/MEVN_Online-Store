<template>
  <v-app id="app">
    <navbar></navbar>
    <v-content>
      <Alert/>
      <NavigationDrawer/>
      <div class="mx-4 mt-4">
        <router-view/>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import Alert from './components/UI/Alert'
import Navbar from './components/UI/Navbar'
import {get as getCart} from './services/CartServices'
import NavigationDrawer from './components/UI/NavigationDrawer'

export default {
  name: 'App',
  components: {NavigationDrawer, Navbar, Alert},
  props: {
    source: String
  },
  methods: {
  },
}
</script>
<style>
  .theme--light.v-btn--active:before {
    opacity: 0
  }
  .theme--dark.v-btn--active:before {
    opacity: 0
  }
</style>
