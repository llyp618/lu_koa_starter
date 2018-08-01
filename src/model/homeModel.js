'use strict'
const request = require('request-promise-native')
const API_URL = require('../../config').API_URL

exports.index = async (ctx) => {
  const title = ctx.query.title
  return {
    title: title
  }
}