import Ember from 'ember';

export default Ember.Component.extend({
  init(){
    this.set('newContact', {
      'nameFirst':'',
      'nameLast':'',
      'email':''
    });
    this._super(...arguments);
  },
  //Actions
  actionConfirmAddContact: 'confirmAddContact',
  //Actions Handlers
  actions: {
    confirmAddContact() {
      this.sendAction('actionConfirmAddContact', this.get('newContact'));
    }
  }
});
