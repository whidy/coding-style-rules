module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    indent: ['error', 2],
    'func-names': ['error', 'never'],
    'no-unused-vars': ['error', { args: 'none' }],
    quotes: [2, 'single'],
    semi: [2, 'never'],
    'max-len': 'off',
    'no-underscore-dangle': ['error', { allow: ['_form', '_queries'] }],
    'no-param-reassign': ['error', { props: false }],
    'consistent-return': 'off',
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'vue/max-len': ['error', {
      code: 140,
      template: 999,
      tabWidth: 2,
      comments: 999,
      ignorePattern: '',
      ignoreComments: false,
      ignoreTrailingComments: false,
      ignoreUrls: false,
      ignoreStrings: false,
      ignoreTemplateLiterals: false,
      ignoreRegExpLiterals: false,
      ignoreHTMLAttributeValues: false,
      ignoreHTMLTextContents: false
    }],
    'comma-dangle': ['error', 'never'],
    'no-multiple-empty-lines': ['error', { max: 8, maxEOF: 1 }],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-unused-vars': ['off', {
      ignorePattern: 'scope'
    }],
    'vue/html-closing-bracket-newline': [
      2,
      {
        singleline: 'never',
        multiline: 'never'
      }
    ],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 3,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ]
  }
}
