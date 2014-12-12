'use strict';

describe('Events', function(){

  it('should create a $Dipatcher for each channel', function(){
    var callCount = $channels.length;
    var Spy = sinon.spy($Dispatcher);
    require('../../../api/events');

    expect(Spy).to.have.callCount(callCount);
  });
});
