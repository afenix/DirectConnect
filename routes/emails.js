DirectConnect.EmailsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('email');
  }
});

