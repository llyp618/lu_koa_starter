module.exports = {
  "extends": "standard",
  "env": {
    "node": true
  },
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'eol-last': 0,
    'space-before-function-paren': 0,
    'no-trailing-spaces':0,
    'no-multiple-empty-lines':0,
    'key-spacing':0,
    'no-unreachable':0,
    'no-unused-vars':0,
    'space-before-blocks':0,
    'keyword-spacing':0,
    'comma-spacing':0,
    'handle-callback-err':0
  }
};