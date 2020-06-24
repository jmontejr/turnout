import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebaseApp from "./firebaseApp";

firebaseApp.auth().onAuthStateChanged((user) => {
  user ? router.push("/dashboard") : router.replace("/signin");
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
