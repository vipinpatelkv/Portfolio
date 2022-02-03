$(document).ready(function() {
  $(window).scroll(function() {
    if (this.scrollY > 20)
      $(".navbar").addClass("sticky");
    else
      $(".navbar").removeClass("sticky");
  });
});

$.fn.myfunc = function() {
  $(".menu-toggler").toggleClass("active");
  $(".navbar-menu").toggleClass("active");
}
$.fn.mytoggle = function() {
  toggle = $(".navbar").find(".inner-width").find("div");
  if (toggle.hasClass("active")) {
    $.fn.myfunc();
  }

}
