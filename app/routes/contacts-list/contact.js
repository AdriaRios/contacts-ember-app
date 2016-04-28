import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var post = this.store.peekRecord('contact', params.id);
    return post;
  }
});
