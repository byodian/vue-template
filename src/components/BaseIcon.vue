<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAlignLeft, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faAndroid } from '@fortawesome/free-brands-svg-icons'
library.add(faSpinner, faAlignLeft, faAndroid)

export default {
  name: 'BaseIcon',
  components: {
    FontAwesomeIcon
  },
  props: {
    type: {
      type: String,
      default: 'font-awesome'
    },
    // font-awesome icon name
    // or svg file name
    name: {
      type: String,
      required: true
    },
    // svg-inline class name
    className: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    },
    prefix: {
      type: String,
      required: true
    },
    fontSize: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    }
  },
  computed: {
    // The value of a xlink:href attribute of a <use> tag
    iconName() {
      return `#${this.prefix}-${this.name}`
    },
    // svg-inline class
    svgClass() {
      if (this.className) { return `svg-icon ${this.className}` } else { return 'svg-icon' }
    },
    // svg-inline style
    svgStyle() {
      return {
        width: this.width,
        height: this.width,
        color: this.color,
        ...this.$attrs
      }
    },
    // font class 图标 class
    fontIconClass() {
      const constantClasses = `iconfont font-class-icon ${this.prefix}-${this.name}`
      if (this.className) { return constantClasses } else { return constantClasses + this.className }
    },
    fontIconStyle() {
      return {
        fontSize: this.fontSize,
        color: this.color
      }
    }
  }
}
</script>

<template>
  <FontAwesomeIcon
    v-if="type === 'font-awesome'"
    v-bind="$attrs"
    :icon="[prefix, name]"
    v-on="$listeners"
  />
  <span
    v-else-if="type === 'font-class'"
    v-bind="$attrs"
    :class="fontIconClass"
    :style="fontIconStyle"
    v-on="$listeners"
  />
  <svg
    v-else-if="type === 'svg-inline'"
    :class="svgClass"
    :style="svgStyle"
    aria-hidden="true"
    v-on="$listeners"
  >
    <use :xlink:href="iconName" />
  </svg>
</template>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  overflow: hidden;
  vertical-align: -.15em;
  fill: currentColor;
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.font-class-icon {
  display: block;
  min-height: 1rem;
  line-height: 1;
  font-size: 1rem;
}
</style>
