import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  render: h => h(App)
}).$mount('#app');