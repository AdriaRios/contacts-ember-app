import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    var posts = this.store.findAll('contact');
    return posts;
  },
  actions: {
    click(params) {
      console.log('TEST');
      this.transitionTo('contacts-list.contact', params.id);
    },
    addContact() {
      console.log('TEST2');
      this.transitionTo('contacts-list.add-contact');
    }
  }
});
