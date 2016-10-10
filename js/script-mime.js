/**
 * javascript
 */

(function ($) {
    'use strict';
  // Smooth Scroll
  // -----------------------------------
  var scrollAnimationTime = 1000,
      scrollAnimationFunc = 'easeInOutExpo',
      $root               = $('html, body'),
      $win  = $(window),
      $doc  = $(document),
      $body = $('body');
  $(function(){
    /**
     *
     */
    $('[data-toggle="scrollTo"]').on('click.smoothscroll', function (event) {
      event.preventDefault();
      var target = this.hash;
      // console.log($(target).offset().top);
      $root.stop().animate({
          'scrollTop': $(target).offset().top - 100
      }, scrollAnimationTime, scrollAnimationFunc, function () {
          window.location.hash = target;
      });
    });


  });

})(window.jQuery);