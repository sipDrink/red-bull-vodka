'use strict';

var _ = require('lodash');

// default config for server

var all = {
  env: process.env.NODE_ENV,

  port: process.env.PORT || 9000,
  // populate db with some data
  seedDB: false,
  // any and all secrets
  secrets: {
    pb: {
      publish_key: process.env.PUBNUB_PUBLISH_KEY || 'demo',
      subscribe_key: process.env.PUBNUB_SUBSCRIBE_KEY ||'demo'
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
module.exports = _.merge(all, require('./' + all.env) || {} );
