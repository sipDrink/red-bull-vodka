'user strict';
/*
  Default Actions
    - All resources use these default actions for incoming events

    @model
      - The resource model ex: User || Drink
*/
module.exports = function(model) {
  var queryBuilder = function(method, criteria, opts, update) {
    var options = {
      limit: 20
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
      $log('options', option);
      query = query[option](args);
    });

    return query;
  };

  return {
    // Action for getting a list of instances
    // for a specific model

    'get': function(params, $dispatcher, res) {

      // var options = {
      //   limit: 20
      // };

      // _.extend(options, params.options || {});

      // var search = _.extend({}, params.query || {});

      // var query = model.find(search);

      // _.forEach(options, function(args, option) {
      //   query = query[option](args);
      // });

      var query = queryBuilder('find', params.query, params.options);

      query.exec(function(err, results) {
        if (err) {
          $log(err);
          return;
        }

        var message = {
          actions: {}
        };

        $log('Got results from get');
        message.actions[res.action] = results;
        $dispatcher.pub(message, res.channel);
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
