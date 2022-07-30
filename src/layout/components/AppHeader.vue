<template>
  <header class="app-header p-12">
    <router-link to="/">
      Home
    </router-link> |
    <router-link to="/about">
      About
    </router-link>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style lang="scss">
 .app-header {
    a {
      font-weight: bold;
      color: #2C3E50;

      &.router-link-exact-active {
        color: #42B983;
      }
    }
 }
</style>
