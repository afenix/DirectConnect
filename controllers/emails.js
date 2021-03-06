DirectConnect.EmailsController = Ember.ObjectController.extend({
  sortProperties: ['from'],
  sortProperties: ['to'],
  actions: {
    sortByFrom: function() {
      this.set('sortProperties', ['from']);
    },

    sortByTo: function() {
      this.set('sortProperties', ['to']);
    },

    save: function() {
      var newEmail = this.store.createRecord('emails', {
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
    },
  }
});
