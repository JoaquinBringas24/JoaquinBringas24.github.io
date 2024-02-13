$( window ).on('scroll', function(){

    var scrollTop = $(this).scrollTop();
    $( '.experience-div' ).css({
      transform: 'translateX('+  (-300 + 0.07 * scrollTop ) +'px)',
    });

  });
