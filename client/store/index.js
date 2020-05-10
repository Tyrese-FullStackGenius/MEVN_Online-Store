import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// eslint-disable-next-line no-unused-vars
export default new Vuex.Store({
  state: {
    alert: {
      isVisible: false,
      message: ''
    }
  },
  mutations: {
    showAlert (state, message) {
      state.alert = {
        isVisible: true,
        message: message
      }
    },
    hideAlert (state) {
      state.alert = {
        isVisible: false,
        message: ''
      }
    }
  },
  getters: {
    alert: state => {
      return state.alert;
    }
  }
})
