define(['backbone',
        'views/slides',
        'collections/slides',
        'router'
        ],
    function(Backbone, SlidesView, SlidesCollection, MainRouter) {
    var AppView = Backbone.View.extend({
        el: 'body',

        initialize: function() {
            var testCollection = [
                { title: 'My Slide' },
                { title: 'My 2nd Slide' }
            ];

            new SlidesView({
                collection: new SlidesCollection(testCollection)
            });

            App.router = new MainRouter();
            Backbone.history.start();
        },

        events: {
            'keyup': 'keyUp'
        },

        keyUp: function(e) {
            if ( e.keyCode === 37 || e.keyCode === 39 ) {
                App.Vent.trigger('changeSlide', {
                    direction: e.keyCode === 39 ? 'nex' : 'prev'
                });
            }
        }
    });

    return AppView;
});