//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $("#down-link").click(function() {
    var position = $("#main-content").position().top.toString();
    $("#down-link").animate({scrollTop: position}, 2000);
  });
});
