$(function () {
  // Adjust Header Height

  var myHeader = $(".header");
  var mySlider = $(".slider");

  myHeader.height($(window).height());

  $(window).resize(function () {
    myHeader.height($(window).height());

    mySlider.each(function () {
      $(this).css(
        "paddingTop",
        ($(window).height() - $(".bxslider div").height()) / 2
      );
    });
  });

  // Add Links Active
  $(".links li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  // Adust Bxslider List Item Center
  mySlider.each(function () {
    $(this).css(
      "paddingTop",
      ($(window).height() - $(".bxslider li").height()) / 2
    );
  });

  // Trigger The Bx Slider
  $(".slider").bxSlider({
    pager: false,
  });
});
