import Vue from "vue";
import VueRouter from "vue-router";

import Dashboard from "@/components/Dashboard.vue";
import Signin from "@/components/Signin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/signin",
    component: Signin,
  },
];

export default new VueRouter({
    mode: 'history',
    routes,
});
