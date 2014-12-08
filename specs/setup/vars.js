process.env.NODE_ENV = 'testing';

require('../../config/globals');
require('../../config/pb/pbinit');

var chai = require('chai');

global.expect = chai.expect;
global.sinon = require('sinon');
chai.use(require('sinon-chai'));
