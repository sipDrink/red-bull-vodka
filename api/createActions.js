'user strict';
/*
  Default Actions
    - All resources use these default actions for incoming events

    @model
      - The resource model ex: User || Drink
*/
module.exports = function(model) {
  return {
    // Action for getting a list of instances
    // for a specific model

    'get': function(params, $dispatcher, res) {

      var options = {
        limit: 20
      };

      _.extend(options, params.options || {});
      var search = _.extend({}, params.search || {});

      var query = model.find(search);

      _.forEach(options, function(args, option) {
        query = query[option](args);
      });

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

    },

    'update': function(params, $dispatcher, res) {

    },

    'destroy': function(params, $dispatcher, res) {

    }
  };
};
