// https://stylelint.io/migration-guide/to-14
module.exports = {
  extends: [
    // Use the Standard config as the base
    // https://github.com/stylelint/stylelint-config-standard
    'stylelint-config-standard',
    // https://github.com/ota-meshi/stylelint-config-html#readme
    'stylelint-config-html',
    // Enforce a standard order for CSS properties
    // https://github.com/stormwarning/stylelint-config-recess-order
    'stylelint-config-recess-order',
    // https://www.npmjs.com/package/stylelint-config-standard-scss
    'stylelint-config-standard-scss',
    // https://www.npmjs.com/package/stylelint-config-recommended-vue
    'stylelint-config-recommended-vue'
  ],
  rules: {
    'comment-empty-line-before': [
      'always',
      {
        ignore: ['stylelint-commands', 'after-comment']
      }
    ],
    'max-empty-lines': 2,
    'color-hex-case': 'upper',
    'max-nesting-depth': 2,
    'number-leading-zero': 'never',
    // Limit the number of universal selectors in a selector,
    // to avoid very slow selectors
    'selector-max-universal': 1,
    // Disallow allow global element/type selectors in scoped modules
    'selector-max-type': [0, { ignore: ['child', 'descendant', 'compounded'] }],
    // BEM 规则
    'selector-class-pattern': '^([a-z][a-z0-9]*)|(--|-|__|\.[a-z0-9]+).*$',
    'string-quotes': 'single',
    // SCSS
    'scss/at-import-partial-extension': 'always'
  }
}
