import Vue from "vue"
import VueResource from 'vue-resource'
import router from "./router"
import store from "./store"
import App from "./App"

Vue.use(VueResource);
Vue.config.productionTip = false;

export const eventEmitter = new Vue();

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
