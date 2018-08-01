'use strict'
const router = require('koa-router')()
const errorCtrl = require('../controller/errorCtrl')

router
  .get('/', errorCtrl.index)

module.exports = router
