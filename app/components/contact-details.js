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
    var currentClass = (this.get('addContactClass') ==='input-group')?'hidden':'input-group';
    return currentClass;
  },

  actions: {
    addPhoneNumber() {
      this.set('addContactClass', this.setContactClass())
    },
    savePhoneNumber() {
      var contact = this.get('currentContact');
      this.set('newPhone.contact', contact);
      this.sendAction('savePhoneNumber', this.get('newPhone'));
    }
  }
});
