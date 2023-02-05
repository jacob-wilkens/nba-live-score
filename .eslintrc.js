/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:unicorn/recommended',
    'plugin:sonarjs/recommended',
    'plugin:promise/recommended',
    'prettier',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  plugins: ['react', '@typescript-eslint', 'unicorn', 'autofix'],
  rules: {
    'unicorn/filename-case': ['error', { cases: { camelCase: true, pascalCase: true } }],
    'arrow-body-style': ['error', 'as-needed'],
    'react/self-closing-comp': ['error', { component: true, html: true }],
    'autofix/no-unused-vars': ['error', { argsIgnorePattern: '^_', ignoreRestSiblings: true, destructuredArrayIgnorePattern: '^_' }],
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
    'no-restricted-imports': ['error', { patterns: ['../'] }],
  },
  overrides: [{ files: '*vite-env.d.ts', rules: { 'unicorn/prevent-abbreviations': 'off', 'unicorn/filename-case': 'off' } }],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
