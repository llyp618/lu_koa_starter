const moment = require('moment')
module.exports = function(env){
  // 时间戳转时间
  env.addFilter('dateFormat', (stamp, rule) => {
    return moment(stamp).format(rule)
  })

  return env
}