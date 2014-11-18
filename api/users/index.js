'use strict';

// var express = require('express');
// var controller = require('./userController');
// // var config = require('../../config/env');
// var auth = require('../../auth/auth');

// var router = express.Router();
// router.get('/me', auth.isAuth(), controller.me);

// var userEvents = require('./userEvents');
// var _ = require('lodash');

// module.exports = function(PN, user){

//   PN.subscribe({
//     channel: channel,
//     message: function(actions){
//       _.forEach(actions, function(args, action) {
//         console.log(action);
//         userEvents[action](args, PN);
//       });
//     },
//     error: function(e){
//       console.error(e);
//     }
//   });

//   // PN.publish({
//   //   channel: channel,
//   //   message: { updated: 'yess sir' }
//   // });
// };
