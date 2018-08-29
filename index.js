'use strict';

// Hack around the fact that the es6 environment isn't overrideable in ESLint

const config = Object.assign({}, require('eslint-config-standard'));

config.plugins = [].concat(config.plugins || [], ['unicorn', 'compat']);
config.extends = [].concat(config.extends || [], 'plugin:unicorn/recommended');

config.env = {
  browser: true,
  commonjs: true
};

config.settings = Object.assign({}, config.settings || {}, {
  browsers: [
    'last 2 Android versions',
    'last 5 Chrome versions',
    'ChromeAndroid >= 54',
    'last 3 Edge versions',
    'Explorer >= 11',
    'last 2 ExplorerMobile versions',
    'last 3 Firefox versions',
    'last 2 FirefoxAndroid versions',
    'iOS >= 8',
    'Safari >= 8',
    'Samsung >= 4'
  ]
});

config.parserOptions = {
  ecmaVersion: 5,
  sourceType: 'script'
};

config.rules = Object.assign({}, config.rules, {
  'semi': [2, 'always'],
  'no-extra-semi': 2,
  'no-multi-spaces': ['error', { 'ignoreEOLComments': true }],
  // TODO: Make this warning an error in next major version
  'no-plusplus': ['warn', { 'allowForLoopAfterthoughts': true }],
  // TODO: Make this warning an error in next major version
  'no-console': 'warn',
  'unicorn/explicit-length-check': 0,
  'unicorn/no-fn-reference-in-iterator': 0,
  'unicorn/catch-error-name': ['error', { 'name': 'err' }],
  'compat/compat': 'error'
});

module.exports = config;
