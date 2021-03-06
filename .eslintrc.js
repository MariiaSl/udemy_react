module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'airbnb/hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 'off',
    // 'react/function-component-definition': [
    //   (2, { namedComponents: 'arrow-function' }),
    // ],
    'react/function-component-definition': 0,
    'arrow-body-style': 'off',
    'object-curly-newline': 'off',
  },
};
