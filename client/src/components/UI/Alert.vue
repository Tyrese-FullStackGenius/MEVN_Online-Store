<template>
  <div>
    <v-alert
      v-model="alert.isVisible"
      close-text="Close Alert"
      color="deep-purple accent-4"
      class="py-1"
      dark
      dismissible
      tile
      clipped
    >
      <p v-for="(message, index) in alert.messages" :key="index" class="ma-0 my-2">
        {{ message }}
      </p>
    </v-alert>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  data () {
    return {}
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
