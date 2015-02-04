// Development config for server (config/env/development.js)
// -----------------------------------------------
'use strict';

module.exports = {

  mongo: {
    uri: process.env.MONGO_URL ||
         process.env.MONGOLAB_URI ||
         process.env.MONGOHQ_URL ||
        'mongodb://localhost/sip-dev'
  },

  seedDB: false,
  logging: true
};
