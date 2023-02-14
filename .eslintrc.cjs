module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  parserOptions: {
    ecmaVersion: 14,
    sourceType: 'module',
  },
  rules: {
    semi: [2, 'always'],
    'linebreak-style': 0,
  },
};
