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
    accountService({
      token: this.$store.getters.token
    }).then(res => {
      this.$store.dispatch('setUserEmail', res.data.email)
    })
  }
}
</script>

<style scoped>

</style>
