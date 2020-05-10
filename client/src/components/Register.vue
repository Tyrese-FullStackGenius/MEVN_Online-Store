<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-label for="e-mail">
            E-mail
          </v-label>
          <v-text-field name="e-mail" solo v-model="email"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-label for="password">
            Password
          </v-label>
          <v-text-field name="password" type="password" solo v-model="password"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-btn color="primary" @click="register">Register</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import RegisterService from '@/services/RegisterService'

export default {
  name: 'Register',
  data () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    async register () {
      await RegisterService.register({
        email: this.email,
        password: this.password
      })
      this.$router.push({ name: 'Home' })
      // this.$store.commit('showAlert', 'Account has been created.')
    }
  }
}
</script>

<style scoped>

</style>
