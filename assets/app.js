$(function() {
  $(window).scroll(function() {
    var headerHeight = $('.name').height() + 590;
    var windowScroll = $(this).scrollTop();

    //header parallax
    if( windowScroll <= headerHeight) {
      $('.name').css({
        'transform' : 'translate(0px, '+ windowScroll /2 +'% )'
      });
    }

    //navbar color change
    if(windowScroll >= headerHeight) {
      $('nav').addClass('navbar-scrolled');
    } else {
      $('nav').removeClass('navbar-scrolled');
    }
  });

  //smooth anchor scrolling
  $('a').click(function(){
      $('html, body').animate({
          scrollTop: $( $(this).attr('href') ).offset().top
      }, 750);
      return false;
  });

  // ensure data is always correct
  $('#year').text(new Date().getFullYear());
});
