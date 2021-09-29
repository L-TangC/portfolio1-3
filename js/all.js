$(document).ready(function () {
    $('.contact-buttom').click(function (e) { 
        e.preventDefault();
        $('.contact').fadeToggle(200);
    });
    $('.cancel_buttom').click(function (e) { 
        e.preventDefault();
        $('.contact').fadeOut(200);
    });
});
$(window).scroll(function() {
  var scrolledY = $(window).scrollTop();
  $('.portfolio-work').css('background-position', 'left ' + ((scrolledY)) + 'px');
});
$(window).scroll(function() {
  var scrolledY = $(window).scrollTop();
  $('.moodapp').css('background-position', 'left ' + ((scrolledY)) + 'px');
});
$(window).scroll(function() {
    var scrolledY = $(window).scrollTop();
    $('.yueda-web').css('background-position', 'left ' + ((scrolledY)) + 'px');
  });
