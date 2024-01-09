// eslint.config.js
const antfu = require('@antfu/eslint-config').default
const { FlatCompat } = require('@eslint/eslintrc')

const compat = new FlatCompat()

module.exports = antfu(
  {
    ignores: [],
    overrides: {
      typescript: {
        'ts/explicit-function-return-type': 'error',
      },
      vue: {
        'no-extra-parens': 'off',
        'vue/no-extra-parens': 'off',
        'vue/custom-event-name-casing': [
          'error',
          'camelCase',
          {
            ignores: [
              '/^[a-z]+(?:-[a-z]+)*:[a-z]+(?:-[a-z]+)*$/u',
            ],
          },
        ],
        'vue/no-undef-components': [
          'error',
          {
            ignorePatterns: [
              'HstText',
              'HstButton',
              'HstInput',
              'HstSelect',
              'HstCheckbox',
              'HstNumber',
              'HstDate',
              'HstJson',
              'Story',
              'Variant',
            ],
          },
        ],
      },
    },
  },
  {
    // Remember to specify the file glob here, otherwise it might cause the vue plugin to handle non-vue files
    files: ['**/*.vue'],
    rules: {
      'vue/no-extra-parens': 'off',
    },
  },
  ...compat.config({
    extends: [
      'plugin:tailwindcss/recommended',
    ],
    rules: {
      'tailwindcss/migration-from-tailwind-2': 'off',
    },
    overrides: [
      {
        files: [
          '*.vue',
        ],
        parser: 'vue-eslint-parser',
      },
    ],
  }),
)
