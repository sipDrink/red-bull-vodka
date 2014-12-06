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
      publish_key: process.env.PUBNUB_PUBLISH_KEY || 'pub-c-e7567c4a-b42c-4a6d-af64-b9e6db79424d',
      subscribe_key: process.env.PUBNUB_SUBSCRIBE_KEY || 'sub-c-e72ce3bc-6960-11e4-8e76-02ee2ddab7fe',
      secret_key: process.env.PUBNUB_SECRET_KEY || 'sub-c-e72ce3bc-6960-11e4-8e76-02ee2ddab7fe'
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
