// Default config for server (config/env/index.js)
// -----------------------------------------------
// WIll be overwritten and or extended dependent on whatever the **NODE_ENV** is

'use strict';

var all = {
  // **env** the **NODE_ENV** of the server
  env: process.env.NODE_ENV,

  // **alias** used with **Dispatcher** to identify where the message comes from
  alias: 'API',

  // **port** used to create basic server, defaults to 8080
  port: process.env.PORT || 8080,

  // **seedDB** if true, will seed the mongo db with the data in seed.js
  seedDB: false,

  // **secrets** all secret shit used in the server, shhhh
  secrets: {
    pb: {
      publish_key: process.env.PUBNUB_PUBLISH_KEY,
      subscribe_key: process.env.PUBNUB_SUBSCRIBE_KEY,
      secret_key: process.env.PUBNUB_SECRET_KEY
    }
  },
  // **mongo** options passed into mongo connection
  mongo: {
    options: {
      db: {
        safe: true
      }
    }
  }
};

// Extend or override default config based off **NODE_ENV**. There is a
// different file for each env; testing, development, production
module.exports = _.merge(all, require('./' + process.env.NODE_ENV) || {} );
