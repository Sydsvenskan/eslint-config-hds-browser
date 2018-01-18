'use strict';

// Hack around the fact that the es6 environment isn't overrideable in ESLint

const config = Object.assign({}, require('eslint-config-semistandard'));

config.plugins = [].concat(config.plugins || [], ['unicorn', 'compat']);
config.extends = [].concat(config.extends || [], 'plugin:unicorn/recommended');

config.env = {
  browser: true,
  commonjs: true
};

config.parserOptions = {
  ecmaVersion: 5,
  sourceType: 'script'
};

config.rules = Object.assign({}, config.rules, {
  'no-multi-spaces': ['error', {'ignoreEOLComments': true}],
  'unicorn/explicit-length-check': 0,
  'unicorn/no-fn-reference-in-iterator': 0,
  'compat/compat': 'error'
});

module.exports = config;
