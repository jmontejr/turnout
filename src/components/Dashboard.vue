<template>
  <div id="dashboard" class="dashboard container">
    <div class="row">
      <div class="col-12">
        <h2>Dashboard</h2>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-12">
        <button class="btn btn-danger btn-sm" @click="signOut">Sign Out</button>
      </div>
    </div>
    <div class="row mt-3 justify-content-center">
      <div class="col-8">
        <add-event class="mb-5" />
      </div>
    </div>

    <div class="row justify-content-around align-items-start">
      <div class="col-md-4" v-for="(event, index) in $store.state.events" :key="index">
        <event-item :event="event" />
      </div>
    </div>
  </div>
</template>

<script>
import { firebaseApp, eventsRef } from "@/firebaseApp.js";
import AddEvent from "@/components/AddEvent.vue";
import EventItem from "@/components/EventItem.vue";

export default {
  methods: {
    signOut() {
      this.$store.dispatch("SIGN_OUT");
      firebaseApp.auth().signOut();
    }
  },
  components: {
    AddEvent,
    EventItem
  },
  mounted() {
    eventsRef.on("value", snap => {
      const events = [];

      snap.forEach(event => {
        events.push(event.val());
      });
      this.$store.dispatch("SET_EVENTS", events);
    });
  }
};
</script>