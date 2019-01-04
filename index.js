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
  ecmaVersion: 2017,
  sourceType: 'module'
};

config.rules = Object.assign({}, config.rules, {
  'semi': [2, 'always'],
  'no-extra-semi': 2,
  'func-style': [1, 'expression', { 'allowArrowFunctions': true }],
  'no-multi-spaces': ['error', { 'ignoreEOLComments': true }],
  'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
  'no-console': 'warn',
  'no-var': 2,
  'object-shorthand': [2, 'properties'],
  'unicorn/catch-error-name': [1, { 'name': 'err' }],
  'unicorn/explicit-length-check': 0,
  'unicorn/no-fn-reference-in-iterator': 0,
  'unicorn/prefer-exponentiation-operator': 0,
  'unicorn/prefer-add-event-listener': 1,
  'unicorn/prefer-spread': 1,
  'compat/compat': 'error'
});

module.exports = config;
