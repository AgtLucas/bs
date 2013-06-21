define(['backbone', 'views/slides', 'collections/slides'], function(Backbone, SlidesView, SlidesCollection) {
    var AppView = Backbone.View.extend({
        el: 'body',

        initialize: function() {
            new SlidesView({
                collection: new SlidesCollection([])
            });
        }
    });

    return AppView;
});