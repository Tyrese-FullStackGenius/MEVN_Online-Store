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
    userEmail: '',
    showDrawerRight: false,
    cart: []
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
    toggleShowDrawerRight (state) {
      state.showDrawerRight = !state.showDrawerRight
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
    },
    setCart (state, payload) {
      state.cart = payload
    }
  },
  getters: {
    alert: state => state.alert,
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    token: state => state.token,
    userEmail: state => state.userEmail,
    showDrawerRight: state => state.showDrawerRight,
    cart: state => state.cart
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
    },
    toggleShowDrawerRight ({ commit }) {
      commit('toggleShowDrawerRight')
    },
    setCart ({ commit }, payload) {
      commit('setCart', payload)
    }
  }
})
