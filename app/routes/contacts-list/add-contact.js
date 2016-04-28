import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    confirmAddContact(newContact) {
      var newContact = this.store.createRecord('contact', newContact);
      newContact.save();
    }
  }
});
