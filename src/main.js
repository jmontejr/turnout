import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { firebaseApp } from "./firebaseApp";
import store from './store';

firebaseApp.auth().onAuthStateChanged((user) => {
  if(user) {
        store.dispatch('SIGN_IN', user);
        router.push("/dashboard");
    } else {
        router.replace("/signin");
    }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
