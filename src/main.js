import Vue from 'vue'
import App from './App.vue'
//import vuetify from './plugins/vuetify';

import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false

import store from "./store";
import router from "./router";

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')

