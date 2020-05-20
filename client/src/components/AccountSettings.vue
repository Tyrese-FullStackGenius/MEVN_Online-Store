<template>
  <div>
    <p>this page should be available only for logged in users</p>
  </div>
</template>

<script>
import { account as accountService } from '../services/AuthServices'

export default {
  name: 'AccountSettings',
  beforeCreate () {
    accountService({
      token: this.$store.getters.token
    })
  }
}
</script>

<style scoped>

</style>
