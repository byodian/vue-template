<template>
  <div id="app">
    <app-header />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

export default {
  name: 'App',
  components: {
    AppHeader
  },
  mounted() {
    console.log(123)
  }
}
</script>
