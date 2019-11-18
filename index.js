'use strict';

// Hack around the fact that environment sisn't overrideable in ESLint

const config = Object.assign({}, require('eslint-config-standard'));

config.plugins = [].concat(config.plugins || [], [
  'unicorn',
  'compat',
  'promise',
  'es'
]);
config.extends = [].concat(config.extends || [], [
  'plugin:unicorn/recommended',
  'plugin:promise/recommended'
]);

config.env = {
  es6: true,
  browser: true
};

config.parserOptions = {
  ecmaVersion: 2020,
  sourceType: 'module'
};

config.settings = Object.assign({}, config.settings, {
  jsdoc: Object.assign(
    {},
    (config.settings || {}).jsdoc || {},
    { mode: 'typescript' }
  )
});

config.rules = Object.assign({}, config.rules, {
  'compat/compat': 'error',

  'jsdoc/check-types': 0,
  'jsdoc/no-undefined-types': 0,
  'jsdoc/require-jsdoc': 0,
  'jsdoc/require-param-description': 0,
  'jsdoc/require-returns-description': 0,
  'jsdoc/valid-types': 0,

  'func-style': [1, 'expression', { 'allowArrowFunctions': true }],
  'import/no-deprecated': 1,
  'no-console': 'warn',
  'no-extra-semi': 2,
  'no-multi-spaces': ['error', { 'ignoreEOLComments': true }],
  'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
  'no-unused-vars': [2, { 'args': 'after-used', 'ignoreRestSiblings': true }],
  'no-var': 2,
  'object-shorthand': [2, 'properties'],
  'quote-props': [2, 'as-needed', { 'keywords': true, 'numbers': true, 'unnecessary': false }],
  'semi': [2, 'always'],

  'unicorn/catch-error-name': [1, { 'name': 'err' }],
  'unicorn/consistent-function-scoping': 0,
  'unicorn/explicit-length-check': 0,
  'unicorn/no-fn-reference-in-iterator': 0,
  'unicorn/prefer-add-event-listener': 1,
  'unicorn/prefer-exponentiation-operator': 0,
  'unicorn/prefer-includes': 1,
  'unicorn/prefer-node-append': 1,
  'unicorn/prefer-node-remove': 1,
  'unicorn/prefer-reflect-apply': 0,
  'unicorn/prefer-spread': 1,
  'unicorn/prevent-abbreviations': 0
});

module.exports = config;
