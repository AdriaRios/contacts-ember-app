import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('contacts-list', function() {
    this.route('contact', {path: '/contact/:id'});
    this.route('add-contact');
  });
});

export default Router;
