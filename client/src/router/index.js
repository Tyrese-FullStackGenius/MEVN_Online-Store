import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register'
import AccountSettings from '../components/Account/AccountSettings'
import store from '../store/index'
import Category from '../components/Category'
import Product from '../components/Product'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/account/settings',
      name: 'AccountSettings',
      component: AccountSettings,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/categories/:name',
      name: 'Category',
      component: Category
    },
    {
      path: '/products/:id',
      name: 'Product',
      component: Product
    }
  ]
})

router.beforeEach((to, from, next) => {
  store.commit('hideAlert')
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    store.commit('showAlert', ['Page available only for logged in users.'])
    next('/')
  } else {
    next()
  }
})

export default router
