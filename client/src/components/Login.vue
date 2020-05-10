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
          <v-btn color="primary" @click="login">Login</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import LoginService from '@/services/LoginService';

export default {
  name: 'Login',
  data () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    async login () {
      await LoginService.login({
        email: this.email,
        password: this.password
      })
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style scoped>

</style>
