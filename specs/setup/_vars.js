process.env.NODE_ENV = 'testing';

require('../../config/globals');
require('../../config/pb/pbinit');

require('mongoose').connect($config.mongo.uri, $config.mongo.options);


global.chai = require('chai');

global.expect = chai.expect;
global.sinon = require('sinon');

/*
 * Chai plugins
*/
chai.use(require('sinon-chai'));
// chai.use(require('chai-as-Promised'));
chai.use(require('chai-factories'));

