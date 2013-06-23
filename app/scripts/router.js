define(['backbone'], function(Backbone) {
  var Main = Backbone.Router.extend({
    routes: {
      '': 'home'
    },

    home: function() {
      alert('Home route');
    }
  });

  return Main;
});