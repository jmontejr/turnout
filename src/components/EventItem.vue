<template>
  <div id="event" class="event">
    <h5 class="card-title">{{ event.title }}</h5>
    <p class="card-text">Description: {{ event.description }}</p>
    <ul class="list-group list-group-flush">
        <li class="list-item">Date: {{ event.date }}</li>
        <li class="list-item">Location: {{ event.location }}</li>
        <li class="list-item">Author: {{ event.email }}</li>
    </ul>
  </div>
</template>

<script>
export default {
    props: {
        event: {
            type: Object,
            required: true
        }
    }
}
</script>
