<template>
  <div class="app-main flex flex-col items-center">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div class="flex gap-x-4">
      <BaseIcon name="spinner" prefix="fas" pulse />
      <BaseIcon name="align-left" prefix="fas" flip="both" />
      <BaseIcon name="android" prefix="fab" size="lg" />
    </div>
    <BaseSvgIcon icon-class="car" width="200px" />
    <div class="svg-img">
      <img src="~@/assets/svg/calaveraflatoca.svg" alt="">
    </div>
    <div class="svg-background" />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
.svg {
  &-img {
    width: 200px;
  }

  &-background {
    background-image: url(~@/assets/svg/grimreaper-isolated.svg);
    background-repeat: no-repeat;
    background-position: center;
    width: 300px;
    height: 300px;
    background-size: contain;
  }
}
</style>
