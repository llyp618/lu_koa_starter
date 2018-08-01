'use strict'

module.exports = {
  isLogin: async (ctx, next) => {
    if(!ctx.session.user){
      await ctx.redirect('/manage/login')
    }else {
      return next()
    }
  },
  isNotLogin: async (ctx, next) => {
    if(ctx.session.user){
      await ctx.redirect('/manage/backend')
    }else {
      return next()
    }
  }
}
