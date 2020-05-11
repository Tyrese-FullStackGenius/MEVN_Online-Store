<template>
  <div>
    <v-alert
      v-for="(message, index) in alert.messages"
      :key="index"
      v-model="alert.isVisible"
      close-text="Close Alert"
      color="deep-purple accent-4"
      class="mb-0"
      dark
      dismissible
      tile
      clipped
    >
      {{ message }}
    </v-alert>
  </div>
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
