'use strict';

describe('Base actions', function(){
  var createActions, messageList, messageOne, res, params, paramsUpdate;

  before(function(){
    messageList = chai.create('message-list');
    messageOne = chai.create('message-one');

    params = chai.create('params');
    paramsUpdate = chai.create('params-update');
    res = chai.create('res');
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

      actions.get(params, new $Dispatcher(), {action:'', channel: 'sdjfklsa'});

      expect(find).to.have.been.calledOnce;
      expect(find).to.have.been.calledWith(params.query);
    });

    it('should properly publish the results from model.find', function(done) {
      var $dispatcher = new $Dispatcher();
      var pub = sinon.spy($dispatcher, 'pub');

      var actions = createActions(Bar);

      actions.get(params, $dispatcher, res)
        .then(function(){
          expect(pub).to.have.been.calledOnce;
          expect(pub.args[0][0]).to.deep.equals(messageList);
          done();
      });
    });
  });

  describe('action: getOne', function(){
    it('should have a getOne action', function(){
      var actions = createActions(Order);
      expect(actions).to.have.property('getOne');
    });

    it('should use the findOne method on the model', function(){
      var findOne = sinon.spy(User, 'findOne');

      var actions = createActions(User);


      actions.getOne(params, new $Dispatcher(), {action:'', channel: 'sdjfklsa'});

      expect(findOne).to.have.been.calledOnce;
      expect(findOne).to.have.been.calledWith(params.query);
    });

    it('should properly publish the results from model.findOne', function(done) {
      var $dispatcher = new $Dispatcher();
      var pub = sinon.spy($dispatcher, 'pub');

      var actions = createActions(Bar);

      actions.getOne(params, $dispatcher, res)
      .then(function(){
        expect(pub).to.have.been.calledOnce;
        expect(pub.args[0][0]).to.deep.equals(messageOne);
        done();
      });
    });
  });

  describe('action: update', function(){

    it('should have a update action', function(){
      var actions = createActions(Order);
      expect(actions).to.have.property('update');
    });

    it('should use the findOneAndUpdate method on the model', function(){
      var findOneAndUpdate = sinon.spy(User, 'findOneAndUpdate');

      var actions = createActions(User);


      actions.update(paramsUpdate, new $Dispatcher(), {action:'', channel: 'sdjfklsa'});

      expect(findOneAndUpdate).to.have.been.calledOnce;
      expect(findOneAndUpdate).to.have.been.calledWith(params.query);
    });

    it('should properly publish the results from model.findOneAndUpdate', function(done) {
      var $dispatcher = new $Dispatcher();
      var pub = sinon.spy($dispatcher, 'pub');

      var actions = createActions(Bar);

      actions.update(params, $dispatcher, res)
      .then(function(){
        expect(pub).to.have.been.calledOnce;
        expect(pub.args[0][0]).to.deep.equals(messageOne);
        done();
      });
    });
  });

  describe('action: destroy', function(){

    it('should have a destroy action', function(){
      var actions = createActions(Order);
      expect(actions).to.have.property('destroy');
    });

    it('should use the findOneAndRemove method on the model', function(){
      var findOneAndRemove = sinon.spy(User, 'findOneAndRemove');

      var actions = createActions(User);

      actions.destroy(params, new $Dispatcher(), {action:'', channel: 'sdjfklsa'});

      expect(findOneAndRemove).to.have.been.calledOnce;
      expect(findOneAndRemove).to.have.been.calledWith(params.query);
    });

    it('should properly publish the results from model.findOneAndRemove', function(done) {
      var $dispatcher = new $Dispatcher();
      var pub = sinon.spy($dispatcher, 'pub');

      var actions = createActions(Bar);

      actions.destroy(params, $dispatcher, res)
      .then(function(){
        expect(pub).to.have.been.calledOnce;
        expect(pub.args[0][0]).to.deep.equals(messageOne);
        done();
      });
    });
  });
});
