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

// require(['models/slide', 'views/slide'], function(SlideModel, SlideView) {
//     var slide = new SlideModel({ title: 'Testing!' });
//     var slideView = new SlideView({ model: slide });
//     slideView.render();
//     console.log( slideView.el );
// });