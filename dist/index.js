'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./ReactSwiper.production.js');
} else {
  module.exports = require('./ReactSwiper.development.js');
}
