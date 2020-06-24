import Vue from "vue";
import VueRouter from "vue-router";

import Dashboard from "@/components/Dashboard.vue";
import SignIn from "@/components/SignIn.vue";
import SignUp from "@/components/SignUp.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/signin",
    component: SignIn,
  },
  {
    path: "/signup",
    component: SignUp,
  },
];

export default new VueRouter({
    mode: 'history',
    routes,
});
