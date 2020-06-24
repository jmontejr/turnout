<template>
  <div id="app" class="app">
      <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: process.env.VUE_APP_TITLE,
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/style.scss';
</style>
