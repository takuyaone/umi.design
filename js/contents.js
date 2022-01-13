var $target = $('.js-splash-animation');
var offset = 1000;

$(window).on('scroll', function () {

  var scroll = $(window).scrollTop();
  var h = $(window).height();

  $target.each(function () {
    var pos = $('.js-splash-animation').offset().top;
    if (scroll > pos - h + offset) {

      $('.js-splash-animation').addClass('appear');
    }
  });

}).trigger('scroll');



if (window.matchMedia('(min-width: 767px)').matches) {
  var $target = $('.js-content-animation');
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
}
