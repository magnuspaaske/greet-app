// Generated by CoffeeScript 1.8.0
(function() {
  define(['backbone', 'views/NavigationView'], function(Backbone) {
    return Backbone.Router.extend({
      initialize: function(app) {
        return console.log('yo', app);
      },
      routes: {
        'login': 'showLoginView',
        'auth/account': 'showAccountView'
      },
      showLoginView: function() {},
      showAccountView: function() {}
    });
  });

}).call(this);
