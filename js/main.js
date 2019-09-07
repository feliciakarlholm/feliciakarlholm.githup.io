Barba.Pjax.start();
Barba.Prefetch.init();

var FadeTransition = Barba.BaseTransition.extend({
   start: function() {
      Promise
	 .all([this.newContainerLoading, this.fadeOut()])
	 .then(this.fadeIn.bind(this));
   },

   fadeOut: function() {
      return $(this.oldContainer).animate({
	 opacity: 0,
	 top: '15px'
      }).promise();
   },

   fadeIn: function() {
      var _this = this;
      var $el = $(this.newContainer);

      $(this.oldContainer).hide();

      $el.css({
	 visibility : 'visible',
	 opacity : 0
      });

      $el.animate({ opacity: 1 }, 400, function() {

	 _this.done();
      });
   }
});

var Gallery = Barba.BaseView.extend({
   namespace: 'gallery',
   onEnter: function() {
      var enterGallery = new TimelineLite();
      enterGallery.staggerFromTo( '.gallery-menu', 2,
	 { y: 15, opacity: 0 },
	 { y: 0, opacity: 1, ease: Expo.easeOut }, 0.3, 0.3)
   },
});


Barba.Pjax.getTransition = function() {
   Gallery.init();
   return FadeTransition;
};

