import Vue from 'vue'
import Router from 'vue-router'
import SimpleVueValidator from 'simple-vue-validator'
import Accsess from './utils/access'

import SuiVue from 'semantic-ui-vue'
import 'semantic-ui-css/semantic.min.css'

import Home from './views/Index/Home.vue'

Vue.use(Router)
Vue.use(SuiVue)
Vue.use(SimpleVueValidator)


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About/About.vue'),
    },
    {
      path: '/account',
      name: 'account',
      component: () =>
        import(/* webpackChunkName: "account" */ './views/Account/Account.vue'),
      beforeEnter: (_to, _from, next) => Accsess.hasPremissions(next),
    },
    {
      path: '/login',
      name: 'login',
      component: () =>
        import(/* webpackChunkName: "login" */ './views/Membership/Login/Login.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () =>
        import(/* webpackChunkName: "register" */ './views/Membership/Register/Register.vue'),
    },
    {
      path: '/update',
      name: 'update',
      component: () =>
        import(/* webpackChunkName "update" */ './views/Update/Update.vue'),
    },
    {
      path: '*',
      name: 'fof',
      component: () =>
        import(/* webpackChunkName: "fof" */ './views/Error/PageNotFound.vue'),
    }
  ],
})
