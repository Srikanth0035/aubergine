$(document).ready(function () {
  $(window).scroll(function () {
    var sc = $(window).scrollTop();
    var sy = window.scrollY;
    var count = sc;

    console.log(sy);
    console.log(sc);
    if (count--) {
      $(".navbar").addClass("navbar-scroll");
    } else if (count++) {
      $(".navbar").removeClass("navbar-scroll");
    }
  });
});
