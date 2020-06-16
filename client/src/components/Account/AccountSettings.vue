<template>
  <div>
    <p>this page should be available only for logged in users</p>
    <p>Your email is: {{ userEmail }}</p>
  </div>
</template>

<script>
import { account as accountService } from '../../services/UserServices'

export default {
  name: 'AccountSettings',
  computed: {
    userEmail () {
      return this.$store.getters.userEmail
    }
  },
  beforeCreate () {
    accountService().then(res => {
      this.$store.dispatch('setUserEmail', res.data.email)
    }).catch(err => {
      this.$store.dispatch('logout')
      localStorage.removeItem('token')
      this.$router.push({name: 'Login'}).then(res => {
        this.$store.commit('showAlert', ['You\'ve been logged out.'])
      })
    })
  }
}
</script>

<style scoped>

</style>
