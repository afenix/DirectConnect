DirectConnect.NewEmail = DS.Model.extend({
  from: DS.attr(),
  to: DS.attr(),
  subject: DS.attr(),
  message: DS.attr()
})
