define(['backbone', 'views/slide'], function(Backbone, SlideView) {
    var SlidesView = Backbone.View.extend({
        el: $('.slides'),

        initialize: function() {
            this.currentSlideIndex = 1;
            this.renderAll();

            App.Vent.on('init', this.hideAllButFirst, this);
            App.Vent.on('changeSlide', this.changeSlide, this);
        },

        hideAllButFirst: function() {
            this.$el.children(':nth-child(n+2)').hide();
        },

        changeSlide: function(opts) {
            var newSlide;

            if ( opts.slideIndex ) {
                this.currentSlideIndex = ~~opts.slideIndex;
            } else {
                this.nextSlide(opts.direction);
            }

            newSlide = this.$el.children().eq(this.currentSlideIndex - 1);
            console.log(newSlide);
        },

        nextSlide: function(direction) {

        },

        renderAll: function() {
            this.$el.empty();
            this.collection.each(this.render, this);
        },

        render: function(slide) {
            var slideView = new SlideView({ model: slide });

            this.$el.append(slideView.render().el);

            return this;
        }
    });

    return SlidesView;
});