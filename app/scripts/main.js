require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone'
    },
    shim: {
        'backbone': {
            deps: ['../bower_components/underscore/underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});

require(['views/app'], function(AppView) {
    window.App = {
        Vent: _.extend({}, Backbone.Events)
    };

    new AppView();
});