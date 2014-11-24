'use strict';

// Production specific config
module.exports = {
  ip: process.env.IP || undefined,

  port: process.env.PORT || 8080,

  mongo: {
    uri: process.env.MONGO_URL ||
         process.env.MONGOLAB_URI ||
         process.env.MONGOHQ_URL ||
         'mongodb://localhost/sip'
  },

  logging: true
};
