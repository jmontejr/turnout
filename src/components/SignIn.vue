<template>
  <div id="signin" class="signin container vh-100 vw-100">
    <div class="row justify-content-center align-items-center vh-100">
      <div class="col-5">

        <div class="from-inline">
          <h3 class="mb-4">Sign In</h3>
          <div class="form-group">
            <input type="email" placeholder="email" class="form-control mb-3" v-model="email" />
            <input type="password" placeholder="password" class="form-control mb-3" v-model="password" />
            <button class="btn btn-primary" @click="signIn">Sign In</button>
          </div>
        </div>

        <p class="text-danger">{{error.message}}</p>
        
        <router-link to="/signup">Don't have an account? Create here!</router-link>
      </div>

      </div>
  </div>
</template>

<script>
import { firebaseApp } from "@/firebaseApp";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: {
        message: ""
      }
    };
  },
  methods: {
    signIn() {
      firebaseApp
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .catch(error => (this.error = error));
    }
  }
};
</script>
