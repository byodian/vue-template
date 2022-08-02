<script>
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
export default {
  name: 'SiteLayout',
  components: { AppHeader, AppFooter }
}
</script>

<template>
  <div id="app">
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>

<style lang="scss">
#app {
  width: 85%;
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2C3E50;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
