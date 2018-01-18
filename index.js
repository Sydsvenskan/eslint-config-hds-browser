'use strict';

// Hack around the fact that the es6 environment isn't overrideable in ESLint

const config = Object.assign({}, require('eslint-config-semistandard'));

config.env = {
  browser: true,
  commonjs: true
};

config.parserOptions = {
  ecmaVersion: 5,
  sourceType: 'script'
};

module.exports = config;
