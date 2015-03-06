DirectConnect.NewEmailRoute=Ember.Route.extend({
  model: function(){
    return this.store.find('new-email');
  }
})