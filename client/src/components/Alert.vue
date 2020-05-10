<template>
  <v-alert
    v-model="alert.isVisible"
    close-text="Close Alert"
    color="deep-purple accent-4"
    dark
    dismissible
    tile
    clipped
  >
  {{ alert.message }}
  </v-alert>
</template>

<script>
export default {
  name: 'Alert',
  data () {
    return {
    }
  },
  computed: {
    alert () {
      return this.$store.getters.alert
    }
  }
}
</script>

<style scoped>

</style>
