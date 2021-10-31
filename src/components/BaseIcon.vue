<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner, faAlignLeft } from '@fortawesome/free-solid-svg-icons'
import { faAndroid } from '@fortawesome/free-brands-svg-icons'
library.add(faSpinner, faAlignLeft, faAndroid)

export default {
  name: 'BaseIcon',
  components: {
    FontAwesomeIcon
  },
  props: {
    source: {
      type: String,
      default: 'font-awesome'
    },
    name: {
      type: String,
      required: true
    },
    prefix: {
      type: String,
      required: true
    }
  },
  computed: {
    customIconClass() {
      return `icon-custom-${this.name}`
    }
  }
}
</script>

<template>
  <FontAwesomeIcon
    v-if="source === 'font-awesome'"
    v-bind="$attrs"
    :icon="[prefix, name]"
  />
  <span
    v-else-if="source === 'custom'"
    v-bind="$attrs"
    :class="customIconClass"
  />
</template>
