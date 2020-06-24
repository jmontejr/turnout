<template>
  <div id="dashboard" class="dashboard">
    <h2>Dashboard</h2>
    <div>
        <button class="btn btn-danger btn-sm" @click="signOut">Sign Out</button>
        {{ $store.state }}
    </div>
  </div>
</template>

<script>
import firebaseApp from '@/firebaseApp.js';

export default {
    methods: {
        signOut() {
            this.$store.dispatch('SIGN_OUT');
            firebaseApp.auth().signOut();
        }
    },
};
</script>