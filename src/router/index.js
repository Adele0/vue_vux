import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Login = resolve => {require.ensure(['../views/Login.vue'], () => {resolve(require('../views/Login.vue'));});}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
