import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Axios from "axios";
import VueAxios from "vue-axios";
import { routes } from "./routes";

Vue.use(VueAxios, Axios);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: routes
});

new Vue({
  el: "#app",
  router: router,
  render: h => h(App)
});
