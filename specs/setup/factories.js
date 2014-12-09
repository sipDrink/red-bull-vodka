/*
 * Chai factories (mocks) for testing
*/

chai.factory('params', {
  query: {}
});

chai.factory('params-update', {
  query: {},
  update: {}
});

chai.factory('res', {
  action: 'reciveBars',
  channel: 'private-sadfsljaflks'
});

chai.factory('message-list', {
  actions:{
    'reciveBars': []
  },
  from: $config.alias,
  to: 'mobile'
});

chai.factory('message-one', {
  actions:{
    'reciveBars': {}
  },
  from: $config.alias,
  to: 'mobile'
});
