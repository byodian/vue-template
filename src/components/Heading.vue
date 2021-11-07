<template>
  <h1 class="h1 p-0.5 text-green-400">{{ msg }}</h1>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
