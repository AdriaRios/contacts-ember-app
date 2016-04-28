import Ember from 'ember';

export default Ember.Component.extend({
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
