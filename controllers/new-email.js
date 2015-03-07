DirectConnect.NewEmailController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newEmail = this.store.createRecord('email', {
        from: this.get('from'),
        to: this.get('to'),
        subject: this.get('subject'),
        message: this.get('message')
      });

      this.set('from', "");
      this.set('to', "");
      this.set('subject', "");
      this.set('message', "");

      newEmail.save();
      this.transitionToRoute('emails');
    }
  }
});