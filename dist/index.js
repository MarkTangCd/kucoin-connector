
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./kucoin-connector.cjs.production.min.js')
} else {
  module.exports = require('./kucoin-connector.cjs.development.js')
}
