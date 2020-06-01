<template>
  <v-app id="app">
    <navbar></navbar>
    <v-content>
      <Alert/>
      <v-navigation-drawer
        class="grey lighten-4 float-right"
        dark
        v-model="showDrawerRight"
        disable-resize-watcher
        clipped
        right
      >
        <v-list dense>
        </v-list>
      </v-navigation-drawer>
      <div class="mx-4 mt-4">
        <router-view/>
      </div>
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
