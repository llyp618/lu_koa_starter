'use strict'
const notFoundPage = require('../../config').notFoundPage
module.exports = async (ctx, next) => {
  await next()
 
  if(ctx.status === 404 && ctx.accepts()[0] === 'text/html'){
    ctx.redirect(notFoundPage)
  }
} 