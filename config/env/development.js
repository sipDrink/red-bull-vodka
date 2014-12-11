// Development config for server (config/env/development.js)
// -----------------------------------------------
'use strict';

module.exports = {

  mongo: {
    uri: 'mongodb://localhost/sip-dev'
  },

  seedDB: true,
  logging: true
};
