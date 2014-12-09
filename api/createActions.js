'user strict';
/**
 * Module used to define basic crud methods on all resources, ready to be used with channels
 * @module createActions
 * @params {object} model - A mongoose model
 *
*/
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

  return {
    // Action for getting a list of instances
    // for a specific model

    'get': function(params, $dispatcher, res) {

      var query = queryBuilder('find', params.query, params.options);

      return query.$exec()
      .then(function(results) {
        if (res.oneByOne) {
          $dispatcher.oneByOnePub(_.map(results, function(result){
            var message = {
              actions: {}
            };
            message.actions[res.action] = result;
            message.format = 'oneByOne';
            return message;
          }), res.channel);
        } else {
          var message = {
            actions: {}
          };
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
    }
  };
};
