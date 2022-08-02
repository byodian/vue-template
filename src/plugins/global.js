// Globally register all base components for convenience, because they
// will be used very frequently. Components are registered using the
// PascalCased version of their file name.
// https://github.com/bencodezen/vue-enterprise-boilerplate/blob/main/src/components/_globals.js

// https://webpack.js.org/guides/dependency-management/#require-context
// @ts-expect-error

const install = function(Vue) {
  const requireComponent = require.context(
    // Look for files in the src/components directory
    '@/components',
    // Do not look in subdirectories
    false,
    // Only include "Base-" prefixed .vue|js files
    /(Base)\w+\.(vue|js)$/
  )

  // For each matching file name...
  requireComponent.keys().forEach((fileName) => {
    // Get the component config
    const componentConfig = requireComponent(fileName)
    // Get the PascalCase version of the component name
    const componentName = fileName
      // Remove the "./_" from the beginning
      .replace(/^\.\//, '')
      // Remove the file extension from the end
      .replace(/\.\w+$/, '')
      // Split up kebabs
      .split('-')
      // Upper case
      .map(kebab => kebab.charAt(0).toUpperCase() + kebab.slice(1))
      // Concatenated
      .join('')

    // Globally register the component
    Vue.component(componentName, componentConfig.default || componentConfig)
  })
}

export default {
  install
}
