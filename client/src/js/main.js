import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
window.$ = $;

$(function () {

  var spinner = () => {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    });
  };
  spinner();

  // Sticky Navbar
  $(window).on("scroll", () => {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").addClass("bg-primary shadow-sm").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("bg-primary shadow-sm").css("top", "-150px");
    }
  });

  // Back to top button
  $(window).on("scroll", () => {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });

  $(".back-to-top").on("click", () => {
    $(".back-to-top").fadeOut("slow");
    $("html, body").animate({ scrollTop: 0 }, 400);
    return false;
  });

});
