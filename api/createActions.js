// Model Actions (api/createActions.js)
// -----------------------------------------------

'use strict';
// Module used to define basic crud methods on all resources, ready to be used with channels
//
// @params
// `{model}`: A mongoose model to be extended w/ these actions

module.exports = function createActions(model) {
  var queryBuilder = function(method, criteria, opts, update) {
    var options = {};

    _.extend(options, opts || {});

    var search = _.extend({}, criteria || {});
    var query;

    // use partial application here instead
    if (/update/gi.test(method) && update) {
      query = model[method](search, update);
    } else {
      query = model[method](search);
    }

    _.forEach(options, function(args, option) {
      query = query[option](args);
    });

    query.$exec = function(){
      var future = $q.defer();
      query.exec(function(err, res){
        err ? future.reject(err) : future.resolve(res);
      });
      return future.promise;
    };
    return query;
  };

  var setMessageReceiver = function(message, channel) {
    // if the channel is prepended with 'auth0', the message is for a vendor
    // otherwise, it SHOULD be prepended with 'facebook' and is thus for mobile
    if (channel.split('|')[0] === 'auth0') {
      message.to = 'vendor';
    }
    return message;
  };

  return {
    // Action for getting a list of instances
    // for a specific model

    'get': function(params, $dispatcher, res) {

      var query = queryBuilder('find', params.query, params.options);

      return query.$exec()
      .then(function(results) {
        $log('found %s results from "get" operation on %s', results.length, model.modelName + 's');

        if (res.oneByOne) {
          $dispatcher.oneByOnePub(_.map(results, function(result){
            var message = {
              actions: {}
            };

            message = setMessageReceiver(message, res.channel);

            message.actions[res.action] = result;
            message.format = 'oneByOne';
            return message;
          }), res.channel);
        } else {
          var message = {
            actions: {}
          };

          message = setMessageReceiver(message, res.channel);

          message.actions[res.action] = results;
          $dispatcher.pub(message, res.channel);

          return message;
        }
      })
      .fail(function(err){
        $handleError(err);
      });
    },

    'getOne': function(params, $dispatcher, res) {
      var query = queryBuilder('findOne', params.query, params.options);

      return query.$exec()
      .then(function(results) {

        var message = {
          actions: {}
        };

        if (!results || _.isEmpty(results)) {
          results = {};
        }

        $log('Got results from getOne');
        message.actions[res.action] = results;
        $dispatcher.pub(message, res.channel);
      })
      .fail(function(e){
        $handleError(e);
      });
    },

    'update': function(params, $dispatcher, res) {
      var query = queryBuilder('findOneAndUpdate', params.query, params.options, params.update);

      return query.$exec()
      .then(function(result){
        var message = {
          actions: {}
        };

        if (!result || _.isEmpty(result)) {
          result = {};
        }

        $log('Got results from update');
        message.actions[res.action] = result;
        $dispatcher.pub(message, res.channel);
      })
      .fail(function(e){
        $handleError(e);
      });
    },

    'destroy': function(params, $dispatcher, res) {
      var query = queryBuilder('findOneAndRemove', params.query, params.options);

      return query.$exec()
      .then(function(deleted) {
        var message = {
          actions: {}
        };

        if (!deleted || _.isEmpty(deleted)) {
          deleted = {};
        }

        $log('Got results from destroy');
        message.actions[res.action] = deleted;
        $dispatcher.pub(message, res.channel);
      })
      .fail(function(err) {
        $handleError(err);
      });
    },

    create: function(params, $dispatcher, res) {
      var $save = function(doc){
        var future = $q.defer();

        doc.save(function(err, saved){
          err ? future.reject(err) : future.resolve(saved);
        });

        return future.promise;
      };

      var values = params.values || params.query;
      $log('params.values:', params.values);

      if (!values || !_.isArray(values) || !values.length) {
        return;
      }

      return $q.all(_.map(values, function(val) {
        if (model.modelName === 'order') {
          // val.code = $helper.createOrderCode();
        }
        return $save(new model(val));
      }))
      .then(function(creations){

        var message = {
          actions: {}
        };

        if (!creations || _.isEmpty(creations)) {
          creations = [];
        }

        $log('Created' + creations.length + ' new ' + model.modelName + '' + 'which looks like: ' + creations);
        message.actions[res.action] = creations;
        $dispatcher.pub(message, res.channel);
      })
      .fail(function(err){
        $handleError(err);
      });
    }
  };
};
