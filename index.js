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
  'semi': [2, 'always'],
  'no-extra-semi': 2,

  'compat/compat': 'error',

  'import/no-deprecated': 1,

  'jsdoc/check-types': 0,
  'jsdoc/no-undefined-types': 0,
  'jsdoc/require-jsdoc': 0,
  'jsdoc/require-param-description': 0,
  'jsdoc/require-property-description': 0,
  'jsdoc/require-returns-description': 0,
  'jsdoc/valid-types': 0,

  'comma-dangle': [2, {
    'arrays': 'ignore',
    'objects': 'ignore',
    'imports': 'ignore',
    'exports': 'ignore',
    'functions': 'never'
  }],
  'func-style': [1, 'expression', { 'allowArrowFunctions': true }],
  'no-console': 1,
  'no-multi-spaces': [2, { 'ignoreEOLComments': true }],
  'no-plusplus': [2, { 'allowForLoopAfterthoughts': true }],
  'no-unused-vars': [2, { 'args': 'after-used', 'ignoreRestSiblings': true }],
  'no-var': 2,
  'no-warning-comments': [1, { 'terms': ['fixme'] }],
  'object-shorthand': [2, 'properties'],
  'quote-props': [2, 'as-needed', { 'keywords': true, 'numbers': true, 'unnecessary': false }],
  'quotes': [2, 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
  'require-atomic-updates': 2,

  'unicorn/catch-error-name': [1, { 'name': 'err' }],
  'unicorn/consistent-function-scoping': 0,
  'unicorn/expiring-todo-comments': [1, {
    'allowWarningComments': true,
    'ignoreDatesOnPullRequests': true
  }],
  'unicorn/explicit-length-check': 0,
  'unicorn/no-fn-reference-in-iterator': 0,
  'unicorn/prefer-add-event-listener': 1,
  'unicorn/prefer-includes': 1,
  'unicorn/prefer-modern-dom-apis': 1,
  'unicorn/prefer-node-append': 1,
  'unicorn/prefer-node-remove': 1,
  'unicorn/prefer-query-selector': 0,
  'unicorn/prefer-reflect-apply': 0,
  'unicorn/prefer-replace-all': 0,
  'unicorn/prefer-spread': 1,
  'unicorn/prevent-abbreviations': 0,
  'unicorn/better-regex': [1, { 'sortCharacterClasses': false }]
});

module.exports = config;
