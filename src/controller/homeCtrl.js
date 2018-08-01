'user strict'

const homeModel = require('../model/homeModel')

exports.index = async(ctx, next) => {
  let data = await homeModel.index(ctx)
  await ctx.render('home', data)
}
