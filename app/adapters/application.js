import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
  host: 'http://contacts-list.dev/',
  namespace: 'api'
});
