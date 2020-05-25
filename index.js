module.exports = {
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'func-names': 'off',
    'no-param-reassign': 'off',
    'no-restricted-syntax': 'off',
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'one-var': 'off',
    'comma-dangle': [
      'error',
      'never'
    ],
    'arrow-body-style': 'off',
    'no-nested-ternary': 'off',
    'guard-for-in': ['off'],
    'no-continue': 'off',
    radix: 'off',
    'no-console': 'off'
  }
};
