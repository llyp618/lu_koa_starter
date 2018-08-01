'use strict'
const Router = require('koa-router')()
const homeIndex = require('../controller/homeCtrl').index


Router
  .get('/',homeIndex)
  .use('/home', require('./home').routes())
  .use('/error', require('./error').routes())

module.exports = Router