$(window).on('scroll', function () {

  $(".js-ScrollAnimationItem").each(function () {
    var position = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > position - windowHeight) {
      $(this).addClass('isActive');
    }
  });
});

var $target = $('.js-scroll-animation');
var offset = 100;

$(window).on('scroll', function () {

  var scroll = $(window).scrollTop();
  var h = $(window).height();

  $target.each(function () {
    var pos = $(this).offset().top;
    if (scroll > pos - h + offset) {
      $(this).addClass('fade-up');
    }
  })

}).trigger('scroll');




