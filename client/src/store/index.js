import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// eslint-disable-next-line no-unused-vars
export default new Vuex.Store({
  state: {
    alert: {
      isVisible: false,
      messages: []
    }
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
    }
  },
  getters: {
    alert: state => {
      return state.alert
    }
  }
})
