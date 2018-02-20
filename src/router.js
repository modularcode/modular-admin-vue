import Vue from "vue";
import Router from "vue-router";

// Components
import Auth from "./Auth/Auth.vue";
import Dashboard from "./Dashboard/Dashboard.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "main",
      component: Dashboard
    },
    {
      path: "/auth",
      name: "auth",
      component: Auth
    }
  ]
});
