module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'node'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier'
  ],
  env: {
    node: true,
    browser: true,
    es2021: true
  },
  rules: {
    // your custom rules here
    '@typescript-eslint/no-unused-vars': ['warn'],
    'import/order': ['error', { 'newlines-between': 'always' }]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
