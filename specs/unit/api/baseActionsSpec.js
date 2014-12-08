'use strict';

describe('Base actions', function(){
  var createActions;
  before(function(){
    createActions = require('../../../api/createActions');
  });

  describe('action: get', function(){
    it('should have a get action', function(){
      var actions = createActions(User);
      expect(actions).to.have.property('get');
    });

    it('should use the find method on the model', function(){
      var find = sinon.spy(User, 'find');

      var actions = createActions(User);
      var params = {query: {}};

      actions.get(params, new $Dispatcher(), {action:'', channel: ''});

      expect(find).to.have.been.calledOnce;
      expect(find).to.have.been.calledWith(params.query);
    });

    it('should properly publish the results from find', function(done) {
      var $dispatcher = new $Dispatcher();
      var pub = sinon.spy($dispatcher, 'pub');

      var actions = createActions(Bar);
      var params = {query: {}};
      var res = {
        action: 'recieveBars',
        channel: 'private-asdf93ur9'
      };

      actions.get(params, $dispatcher, res);

      setTimeout(function(){
        expect(pub).to.have.been.called;
        done();
      }, 200);
    });
  });
});
