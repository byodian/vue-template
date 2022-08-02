<script>
import Heading from '@/components/Heading.vue'

export default {
  name: 'AppHome',
  components: {
    Heading
  }
}
</script>

<template>
  <div class="app-main flex flex-col items-center gap-y-8">
    <Heading msg="Using Icon" />
    <div id="font-awesome" class="flex gap-x-4 items-center">
      <BaseIcon name="spinner" prefix="fas" pulse />
      <BaseIcon name="align-left" prefix="fas" flip="both" />
      <BaseIcon name="android" prefix="fab" size="lg" />
    </div>
    <div
      id="svg-inline"
      class="flex gap-x-4 items-center"
    >
      <BaseIcon
        prefix="icon"
        name="mercedes"
        type="svg-inline"
        width="2em"
      />
      <BaseIcon
        prefix="icon"
        name="bmw"
        type="svg-inline"
        width="2em"
        color="#2a64ab"
      />
    </div>
    <div class="flex gap-x-4 items-center">
      <BaseIcon
        prefix="icon"
        name="bmw"
        type="font-class"
        font-size="2em"
        color="#2a64ab"
      />
      <BaseIcon
        prefix="icon"
        name="bing"
        type="font-class"
        font-size="2em"
        color="#007DAA"
      />
    </div>
    <BaseSvgIcon icon-class="car" width="200px" />
    <div class="svg-img">
      <img src="~@/assets/svg/calaveraflatoca.svg" alt="">
    </div>
    <div class="svg-background" />
  </div>
</template>

<style lang="scss" scoped>
.svg {
  &-img {
    width: 200px;
  }

  &-background {
    width: 300px;
    height: 300px;
    background-image: url('~@/assets/svg/grimreaper-isolated.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
}
</style>
