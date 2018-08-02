'use strict'
const path = require('path')

// env
const env = process.env.NODE_ENV || 'development'

// port

const port = process.env.PORT || 3000

// 根路径 
const rootPath = path.resolve(__dirname, '..')

// 视图路径
const viewsPath = rootPath + '/src/views'

// 静态公共资源路径
const publicPath = rootPath + '/src/public'

// 模板引擎默认nunjucks
const viewsConf = {
  map: {
    html: 'nunjucks',
    nj: 'nunjucks'
  },
  extension: 'nj',
  options: {
    nunjucksEnv: (() => {
      const nunjucks = require('nunjucks')
      const env = new nunjucks.Environment(
        new nunjucks.FileSystemLoader(viewsPath)
      )
      // nunjucks 自定义过滤器配置
      // env.addFilter('shorten', (str, count) => {
      //   return str.slice(0, count || 5)
      // })
      require('./nunjucksFilter')(env)
      return env
    })()
  }
}

// 404页面
const notFoundPage = '/'

// 错误页面
const errorPage = '/error'

// 后台接口

const API_URL = '/'


const COOKIEKEY = ['lulu']


const sessionConfig = {
  key: 'lulu', 
  maxAge: 3600000,
  overwrite: true,
  httpOnly: true, 
  signed: true,
  rolling: false
}
module.exports = {
  env,
  // 监听端口
  port, 
  // 根目录
  rootPath,
  // 视图目录 
  viewsPath, 
  // 静态文件目录
  publicPath,
  // 模板引擎配置
  viewsConf,
  // 404页面路由
  notFoundPage,
  // 错误页面路由
  errorPage,
  // 接口地址
  API_URL,
  // cookie加密key
  COOKIEKEY,
  // session 配置
  sessionConfig
}