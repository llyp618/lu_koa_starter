const Koa = require('koa')
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const helmet = require('koa-helmet')
const session = require('koa-session')
const favicon = require('koa-favicon')
const config = require('../config')




const Router = require('./routes')

const app = new Koa()

app.keys = config.COOKIEKEY
// error handler
onerror(app, {
  redirect: config.errorPage ? config.errorPage : null
})
// 安全
app.use(helmet())

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())

// 日志
if(config.env === 'development') {
  app.use(require('koa-logger')())
}
// 404
app.use(require('./middlewares/notFound'))

// fav
app.use(favicon(config.publicPath + '/img/favicon.ico'))
// 静态资源
app.use(require('koa-static')(config.publicPath))

// 模板引擎
app.use(views(config.viewsPath, config.viewsConf))

app.use(session(config.sessionConfig, app))
// routes
app.use(Router.routes(), Router.allowedMethods())


// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

module.exports = app
