import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('contact');;
  },
  actions: {
    viewContact(params) {
      this.transitionTo('contacts-list.contact', params.id);
    },
    addContact() {
      this.transitionTo('contacts-list.add-contact');
    }
  }
});
