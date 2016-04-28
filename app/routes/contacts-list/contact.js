import Ember from 'ember';
import { hasMany } from 'ember-data/relationships';

export default Ember.Route.extend({
  model(params) {
    var post = this.store.peekRecord('contact', params.id);
    return post;
  },
  actions: {
    savePhoneNumber(newPhone) {
      var newPhone = this.store.createRecord('phoneNumber', newPhone);
      newPhone.save().then((function() {
        this.transitionTo('contacts-list');
      }).bind(this));
    }
  }
});
