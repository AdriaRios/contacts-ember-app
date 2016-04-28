import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      'nameFirst':'',
      'nameLast':'',
      'email':''
    };
  },
  actions: {
    confirmAddContact() {
      console.log('****', this.get('currentModel'));
      let test = this.get('currentModel');
      var newContact = this.store.createRecord('contact', test);
      newContact.save();
    }
  }
});
