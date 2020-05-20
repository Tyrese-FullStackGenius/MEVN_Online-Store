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
    userEmail: ''
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
    authSuccess (state, payload) {
      state.token = payload[0]
    },
    setUserEmail (state, payload) {
      state.userEmail = payload
    },
    logout (state) {
      state.token = ''
      state.userEmail = ''
    }
  },
  getters: {
    alert: state => state.alert,
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    token: state => state.token,
    userEmail: state => state.userEmail
  },
  actions: {
    authSuccess ({ commit }, payload) {
      commit('authSuccess', payload)
    },
    setUserEmail ({ commit }, payload) {
      commit('setUserEmail', payload)
    },
    logout ({ commit }) {
      commit('logout')
    }
  }
})
