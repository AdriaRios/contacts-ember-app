import Ember from 'ember';

export default Ember.Component.extend({
  init(){
    this.set('newPhone', {
      'nameFirst':'',
      'nameLast':'',
      'email':''
    });
    this._super(...arguments);
  },
  //Actions
  actionClick: 'click',
  actionAddContact: 'addContact',
  //Actions Handlers
  actions: {
    click(params) {
      this.sendAction('actionClick', params);
    },
    addContact() {
      this.sendAction('actionAddContact');
    }
  }
});
