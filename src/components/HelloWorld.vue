<template>
  <div>
    <h1 class="h1 p-0.5">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style lang="scss">
.h1 {
  color: red;
}
</style>
