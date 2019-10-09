import Vue from 'vue';
import Router from 'vue-router';
import SimpleVueValidator from 'simple-vue-validator';
import Home from './pages/Home.vue';
import PageNotFound from './pages/PageNotFound.vue';

import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';

import Accsess from './utils/access';

Vue.use(Router);
Vue.use(SuiVue);
Vue.use(SimpleVueValidator);


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
        import(/* webpackChunkName: "about" */ './pages/About.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () =>
        import(/* webpackChunkName: "login" */ './pages/Login.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () =>
        import(/* webpackChunkName: "register" */ './pages/Register.vue'),
    },
    {
      path: '/account',
      name: 'account',
      component: () =>
        import(/* webpackChunkName: "account" */ './pages/Account.vue'),
      beforeEnter: (_to, _from, next) => Accsess.hasPremissions(next),
    },
    {
      path: '*',
      name: 'fof',
      component: PageNotFound,
    }
  ],
});
