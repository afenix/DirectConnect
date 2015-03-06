DirectConnect.Router.map(function() {
  this.resource('home', {path: '/'});
  this.resource('emails');
  this.resource('email', {path: '/:email_id'})
  this.resource('new-email');
});