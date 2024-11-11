$(function () {
  // ---------- header
  $(".gnb>li").on("mouseenter", function () {
    $(this).children(".menu").show();
  });
  $(".gnb>li").on("mouseleave", function () {
    $(this).children(".menu").hide();
    $(".gnb div").removeClass("on");
  });

  $(".gnb div").on("mouseenter", function () {
    $(".gnb div").removeClass("on");
    $(this).addClass("on");
  });
  $(".menu li").on("mouseenter", function () {
    $(".menu li").removeClass("on");
    $(this).addClass("on");
  });

  // ---------- slide
  let total = $(".slide li").length;
  let i = 1;

  setInterval(function () {
    $(".slide li").stop().fadeOut();
    $(".slide li").eq(i).stop().fadeIn();
    if (i == total - 1) {
      i = 0;
    } else {
      i++;
    }
  }, 2500);

  // ---------- popup
  $(".notice li:first-child").on("click", function () {
    $(".popup").show();
  });
  $("button").on("click", function () {
    $(".popup").hide();
  });
});
