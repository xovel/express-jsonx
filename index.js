'use strict'

module.exports = function jsonx({codeKey = 'code', dataKey = 'data', msgKey = 'msg', defaultCode = 0} = {}) {
  return function (req, res, next) {
    res.jsonx = function (code, data, msg) {
      const body = {}
      if (arguments.length === 1) {
        body[codeKey] = defaultCode
        body[dataKey] = code
      } else {
        body[codeKey] = isNaN(code) ? defaultCode : +code
        body[dataKey] = data
      }
      if (msg) {
        body[msgKey] = msg
      }
      res.json(body)
    }
    next()
  }
}
