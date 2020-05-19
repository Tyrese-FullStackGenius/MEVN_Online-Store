<template>
  <div>
    <p>this page should be available only for logged in users</p>
  </div>
</template>

<script>
import SettingsService from '../services/SettingsService'

export default {
  name: 'AccountSettings',
  beforeCreate () {
    SettingsService.account({
      token: this.$store.getters.token
    })
  }
}
</script>

<style scoped>

</style>
