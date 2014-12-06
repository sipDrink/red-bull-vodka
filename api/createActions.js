'user strict';
/**
 * Module used to define basic crud methods on all resources, ready to be used with channels
 * @module createActions
 * @params {object} model - A mongoose model
 *
*/
module.exports = function createActions(model) {
  var queryBuilder = function(method, criteria, opts, update) {
    var options = {
      limit: 40
    };
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

    return query;
  };

  return {
    // Action for getting a list of instances
    // for a specific model

    'get': function(params, $dispatcher, res) {

      var query = queryBuilder('find', params.query, params.options);

      query.exec(function(err, results) {
        if (err) {
          $handleError(err);
          return;
        }

        // _.forEach(results, function(result) {
        //   var message = {
        //     actions: {}
        //   };
        //   message.actions[res.action] = result;
        //   $dispatcher.pub(message, res.channel);
        // });
        $dispatcher.oneByOnePub(_.map(results, function(result){
          var message = {
            actions: {}
          };
          message.actions[res.action] = result;
        }), res.channel);
      });
    },

    'getOne': function(params, $dispatcher, res) {
      var query = queryBuilder('findOne', params.query, params.options);

      query.exec(function(err, results) {
        if (err){
          $handleError(err);
          return;
        }

        var message = {
          actions: {}
        };

        if (!results || _.isEmpty(results)) {
          results = {};
        }

        $log('Got results from getOne');
        message.actions[res.action] = results;
        $dispatcher.pub(message, res.channel);
      });
    },

    'update': function(params, $dispatcher, res) {
      var query = queryBuilder('findOneAndUpdate', params.query, params.options, params.update);

      query.exec(function(err, result){
        if (err) {
          $handleError(err);
          return;
        }

        var message = {
          actions: {}
        };

        if (!result || _.isEmpty(result)) {
          result = {};
        }

        $log('Got results from update');
        message.actions[res.action] = result;
        $dispatcher.pub(message, res.channel);
      });
    },


    'destroy': function(params, $dispatcher, res) {
      var query = queryBuilder('findOneAndRemove', params.query, params.options);

      query.exec(function(err, deleted) {
        if (err) {
          $handleError(err);
          return;
        }

        var message = {
          actions: {}
        };

        if (!deleted || _.isEmpty(deleted)) {
          deleted = {};
        }
        message[res.action] = deleted;
        $dispatcher.pub(message, res.channel);
      });
    }
  };
};
