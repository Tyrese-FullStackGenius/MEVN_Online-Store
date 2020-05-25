<template>
  <v-app id="app">
    <Alert/>
    <v-navigation-drawer
      class="orange lighten-2"
      dark
      v-model="drawerRight"
      app
      clipped
      right
    >
      <v-list dense>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-btn text small to="/">
              Online store
            </v-btn>
            <v-btn icon small circle @click.stop="drawerRight = !drawerRight" class="float-right">
              <i class="fas fa-shopping-basket"></i>
            </v-btn>

            <template v-if="isLoggedIn">
              <v-btn text small class="float-right" to="/account/settings">
                Account
              </v-btn>
              <v-btn text small class="float-right" @click="logout">
                Log out
              </v-btn>
            </template>
            <template v-else>
              <v-btn text small class="float-right" to="/register">
                Register
              </v-btn>
              <v-btn text small class="float-right" to="/login">
                Log in
              </v-btn>
            </template>
          </v-col>
        </v-row>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Alert from './components/Alert'

export default {
  name: 'App',
  components: {Alert},
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
    isLoggedIn () {
      return this.$store.getters.isLoggedIn
    }
  },
  data: () => ({
    drawerRight: false
  })
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
