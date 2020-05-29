<template>
  <v-app-bar app dense elevate-on-scroll dark color="teal darken-1">
    <v-btn text small to="/">
      Gaming store
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn icon small circle @click.stop="toggleShowDrawerRight" class="float-right">
      <i class="fas fa-shopping-basket"></i>
    </v-btn>
    <template v-if="isLoggedIn">
      <v-btn text small class="float-right" to="/account/settings">
        My account
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
  </v-app-bar>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    isLoggedIn () {
      return this.$store.getters.isLoggedIn
    },
    showDrawerRight () {
      return this.$store.getters.showDrawerRight
    }
  },
  methods: {
    toggleShowDrawerRight () {
      this.$store.dispatch('toggleShowDrawerRight')
    }
  }
}
</script>

<style scoped>

</style>
