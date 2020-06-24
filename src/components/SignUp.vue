<template>
  <div id="signup" class="signup">
    <div class="from-inline">
      <h3>Sign Up</h3>
      <div class="form-group">
        <input type="email" placeholder="email" class="form-control" v-model="email" />
        <input type="password" placeholder="password" class="form-control" v-model="password" />
        <button class="btn btn-primary" @click="signUp">Sign Up</button>
      </div>
    </div>
    <p class="text-danger">{{ error.message }}</p>
    <router-link to="/signin">Already have an account? Sign in here!</router-link>
  </div>
</template>

<script>
import { firebaseApp } from "@/firebaseApp.js";

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
    signUp() {
      firebaseApp
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .catch(error => (this.error = error));
    }
  }
};
</script>
