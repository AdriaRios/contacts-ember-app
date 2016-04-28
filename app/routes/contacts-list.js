import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    var posts = this.store.findAll('contact');
    return posts;
  },
  actions: {
    click(params) {
      this.transitionTo('contacts-list.contact', params.id);
    },
    addContact() {
      this.transitionTo('contacts-list.add-contact');
    }
  }
});
