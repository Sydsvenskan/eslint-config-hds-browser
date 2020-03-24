'use strict';

// Hack around the fact that environment sisn't overrideable in ESLint

const config = Object.assign({}, require('eslint-config-standard'));

config.plugins = [].concat(config.plugins || [], [
  'compat'
]);

config.extends = [].concat(config.extends || [], [
  '@hdsydsvenskan/eslint-config-hds-core'
]);

config.env = {
  es6: true,
  browser: true
};

config.parserOptions = {
  ecmaVersion: 2020,
  sourceType: 'module'
};

config.rules = Object.assign({}, config.rules, {
  'compat/compat': 'error',

  'unicorn/no-fn-reference-in-iterator': 0,
  'unicorn/prefer-includes': 1,
  'unicorn/prefer-node-append': 1,
  'unicorn/prefer-node-remove': 1,
  'unicorn/prefer-query-selector': 0,
  'unicorn/prefer-reflect-apply': 0
});

module.exports = config;
