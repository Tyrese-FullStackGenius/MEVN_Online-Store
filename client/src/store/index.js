import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// eslint-disable-next-line no-unused-vars
export default new Vuex.Store({
  state: {
    alert: {
      isVisible: false,
      messages: []
    },
    token: localStorage.getItem('token') || '',
    user: {}
  },
  mutations: {
    showAlert (state, messages) {
      state.alert = {
        isVisible: true,
        messages: messages
      }
    },
    hideAlert (state) {
      state.alert = {
        isVisible: false,
        messages: []
      }
    },
    authSuccess (state, token, user) {
      state.token = token
      state.user = user
    },
    logout (state) {
      state.token = ''
      state.user = {}
    }
  },
  getters: {
    alert: state => state.alert,
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status
  },
  actions: {
    authSuccess ({ commit }, token, user) {
      commit('authSuccess', token, user)
    },
    logout ({ commit }) {
      commit('logout')
    }
  }
})
