<template>
  <v-app id="app">
    <Alert/>
    <v-navigation-drawer
      class="orange lighten-2"
      dark
      v-model="showDrawerRight"
      app
      clipped
      right
    >
      <v-list dense>
      </v-list>
    </v-navigation-drawer>
    <navbar></navbar>
    <v-content class="mx-4 mt-4">
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Alert from './components/UI/Alert'
import Navbar from './components/UI/Navbar'

export default {
  name: 'App',
  components: {Navbar, Alert},
  props: {
    source: String
  },
  methods: {
    logout () {
      localStorage.removeItem('token')
      this.$store.dispatch('logout')
      this.$router.push({ name: 'Login' })
      this.$store.commit('showAlert', ['You\'ve been logged out.'])
    }
  },
  computed: {
    showDrawerRight () {
      return this.$store.getters.showDrawerRight
    }
  }
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
