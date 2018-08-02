'use strict'

const deepExtend = require('deep-extend')
const defaultConfig = require('./defaultConfig')
const myConfig = require('./myConfig')

module.exports = deepExtend(defaultConfig, myConfig)