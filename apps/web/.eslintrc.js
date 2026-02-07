module.exports = {
  extends: ['../../packages/config/eslint-config.js'],
  parserOptions: {
    project: './tsconfig.json'
  },
  env: {
    browser: true,
    node: true
  }
};
