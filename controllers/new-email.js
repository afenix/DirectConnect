DirectConnect.NewEmailController = Ember.ArrayController.extend({
  actions: {
    save: function() {
      var newEmail = this.store.createRecord('email', {
        from: this.get('from'),
        to: this.get('to'),
        subject: this.get('subject'),
        message: this.get('message')
      });
      newEmail.save();
      this.transitionToRoute('emails');
    }
  }
});