/**
 * javascript
 */

    'use strict';
  // Smooth Scroll
  // -----------------------------------
  var scrollAnimationTime = 1000,
      scrollAnimationFunc = 'easeInOutExpo',
      transparent = true,
      $root = $('html, body'),
      $body = $('body');
  $(function(){
    $.material.init();

    if($('.navbar-color-on-scroll').length != 0){
      $(window).on('scroll', materialKit.checkScrollForTransparentNavbar)
    }

    /**
     *
     */
    $('[data-toggle="scrollTo"]').on('click.smoothscroll', function (event) {
      event.preventDefault();
      var target = this.hash;
      console.log($(target).offset().top);
      $root.stop().animate({
          'scrollTop': ($(target).offset().top - 96)
      }, scrollAnimationTime, scrollAnimationFunc, function () {
          window.location.hash = target;
      });
    });


  });
  var materialKit = {
    misc:{
      navbar_menu_visible: 0
    },
    checkScrollForTransparentNavbar: debounce(function() {
      if($(document).scrollTop() > 90 ) {
        if(transparent) {
          transparent = false;
          $('.navbar-color-on-scroll').removeClass('navbar-transparent');
        }
      } else {
        if( !transparent ) {
          transparent = true;
          $('.navbar-color-on-scroll').addClass('navbar-transparent');
        }
      }
    }, 17)
  };
  var materialKitDemo = {
    checkScrollForParallax: debounce(function(){
      var current_scroll = $(this).scrollTop();
      var oVal = ($(window).scrollTop() / 3);
      big_image.css({
        'transform':'translate3d(0,' + oVal +'px,0)',
        '-webkit-transform':'translate3d(0,' + oVal +'px,0)',
        '-ms-transform':'translate3d(0,' + oVal +'px,0)',
        '-o-transform':'translate3d(0,' + oVal +'px,0)'
      });
    }, 6)
  };
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      }, wait);
      if (immediate && !timeout) func.apply(context, args);
    };
  }
