import Ember from 'ember';

export default Ember.Component.extend({
  savePhoneNumber : 'savePhoneNumber',
  init(){
    this.set('newPhone', {
      'phoneNumber':'',
      'name':''
    });
    this._super(...arguments);
  },

  addContactClass: 'hidden',
  //Actions Handlers

  setContactClass(){
    return this.get('addContactClass') ==='input-group' ? 'hidden' : 'input-group';
  },

  actions: {
    togglePhoneForm() {
      let newContactClass = this.get('addContactClass') ==='input-group' ? 'hidden' : 'input-group';
      this.set('addContactClass', newContactClass);
    },
    savePhoneNumber() {
      var contact = this.get('currentContact');
      this.set('newPhone.contact', contact);
      this.sendAction('savePhoneNumber', this.get('newPhone'));
    }
  }
});
