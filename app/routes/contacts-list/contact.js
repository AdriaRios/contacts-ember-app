import Ember from 'ember';
import { hasMany } from 'ember-data/relationships';

export default Ember.Route.extend({
  model(params) {
    var post = this.store.peekRecord('contact', params.id);
    return post;
  }
});
