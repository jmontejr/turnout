<template>
  <div id="add-event" class="add-event">
    <h4>
        Add Event
        <input type="checkbox" v-model="showForm">
    </h4>
    <div class="form" v-if="showForm">
      <div class="form-group">
        <label>Title</label>
        <input class="form-control" type="text" v-model="event.title" />
      </div>
      <div class="form-group">
        <label>Description</label>
        <textarea class="form-control" v-model="event.description"></textarea>
      </div>
      <div class="form-group">
        <label>Date</label>
        <input class="form-control" type="date" v-model="event.date" />
      </div>
      <div class="form-group">
        <label>Location</label>
        <input class="form-control" type="text" v-model="event.location" />
      </div>
      <button class="btn btn-sm btn-primary" @click="addEvent">Add Event</button>
    </div>
  </div>
</template>

<script>
import { eventsRef } from "@/firebaseApp.js";

export default {
  data() {
    return {
      event: {
        title: "",
        description: "",
        date: "",
        location: "",
        email: ""
      },
      showForm: false,
    };
  },
  methods: {
    addEvent() {
      this.event.email = this.$store.state.user.email;
      eventsRef.push().set({ ...this.event });
    }
  }
};
</script>
