'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/ReactSwiper.production.js');
} else {
  module.exports = require('./dist/ReactSwiper.development.js');
}
