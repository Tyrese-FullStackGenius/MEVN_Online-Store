<template>
  <v-app-bar app dense elevate-on-scroll dark color="teal darken-1">
    <v-btn text to="/">
      Gaming store
    </v-btn>
    <v-menu open-on-hover offset-y>
      <template v-slot:activator="{ on }">
        <v-btn text small v-on="on">
          Categories
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in categories"
          :key="index"
        >
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
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
import {get as getCategories} from '../../services/CategoriesServices'

export default {
  name: 'Navbar',
  data () {
    return {
      categories: [
      ]
    }
  },
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
    },
    logout () {
      localStorage.removeItem('token')
      this.$store.dispatch('logout')
      this.$router.push({name: 'Login'})
      this.$store.commit('showAlert', ['You\'ve been logged out.'])
    }
  },
  beforeCreate () {
    getCategories().then(categories => {
      this.categories = categories
    })
  }
}
</script>

<style scoped>

</style>
