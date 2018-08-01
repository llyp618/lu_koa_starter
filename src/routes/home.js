'use strict'
const router = require('koa-router')()
const homeCtrl = require('../controller/homeCtrl')

router
  .get('/', homeCtrl.index)

module.exports = router
