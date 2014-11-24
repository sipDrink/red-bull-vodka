'user strict';

module.exports = function(model) {
  return {
    // Action for getting a list of instances
    // for a specific model

    'get': function(params, $dispatcher, res) {

      var options = {
        limit: 20
      };

      _.extend(options, params.options || {});

      var query = model.find();

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
