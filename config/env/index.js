'use strict';

var _ = require('lodash');

// default config for server

var all = {
  env: process.env.NODE_ENV,
  alias: 'API',

  port: process.env.PORT || 9000,
  // populate db with some data
  seedDB: false,
  // any and all secrets
  secrets: {
    pb: {
      publish_key: process.env.PUBNUB_PUBLISH_KEY,
      subscribe_key: process.env.PUBNUB_SUBSCRIBE_KEY,
      secret_key: process.env.PUBNUB_SECRET_KEY
    }
  },
  mongo: {
    options: {
      db: {
        safe: true
      }
    }
  }
};
// merge config file with default config based off env
module.exports = _.merge(all, require('./' + process.env.NODE_ENV) || {} );
