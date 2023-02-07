/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    node: true,
    es2022: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:unicorn/recommended', 'plugin:sonarjs/recommended', 'plugin:promise/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'unicorn', 'autofix'],
  rules: {
    'unicorn/filename-case': ['error', { cases: { camelCase: true, pascalCase: true } }],
    'autofix/no-unused-vars': ['error', { argsIgnorePattern: '^_', ignoreRestSiblings: true, destructuredArrayIgnorePattern: '^_' }],
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
    'no-restricted-imports': ['error', { patterns: ['../'] }],
    'unicorn/prefer-node-protocol': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/prevent-abbreviations': 'off',
  },
  ignorePatterns: ['.eslintrc.js'],
};
