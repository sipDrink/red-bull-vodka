'use strict';

describe('PubNub', function(){

  it('should have a $Dispatcher constructor', function(){
    expect($Dispatcher).to.be.a('function');
  });

  describe('$Dispatcher', function(){
    var $dispatcher;
    before(function(){
      $dispatcher = new $Dispatcher();
    });

    it('should have a pub method', function(){
      expect($dispatcher.pub).to.be.a('function');
    });

    it('should have a sub method', function(){
      expect($dispatcher.sub).to.be.a('function');
    });

    it('should have a grant method', function(){
      expect($dispatcher.grant).to.be.a('function');
    });

    it('should have a oneByOnePub method', function(){
      expect($dispatcher.oneByOnePub).to.be.a('function');
    });
  });
});
