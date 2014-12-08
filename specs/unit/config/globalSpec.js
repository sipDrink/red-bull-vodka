'use strict';


describe('Global variables', function(){

  it('should have global lodash', function() {
    expect(global._).to.deep.equal(require('lodash'));
  });

  it('should have global $q promise', function() {
    expect(global.$q).to.deep.equal(require('q'));
  });

  it('should have global $config', function() {
    expect(global.$config).to.deep.equal(require('../../../config/env'));
  });

  it('should have global $log', function(){
    expect(global.$log).to.be.a('function');
  });

  it('should have global $handleError', function(){
    expect(global.$handleError).to.be.a('function');
  });

  it('should have global $channels', function(){
    expect(global.$channels).to.be.an('array');
  });

  it('should have global models', function() {
    _.forEach($channels, function(channel) {

      if (/ies\b/g.test(channel)) {
        channel = channel.replace(/ies\b/g, 'y');
      }

      if (channel[channel.length - 1] === 's') {
        channel = channel.slice(0, channel.length - 1);
      }

      channel = channel.capitalize();
      expect(global[channel]).to.be.ok;
    });
  });
});
