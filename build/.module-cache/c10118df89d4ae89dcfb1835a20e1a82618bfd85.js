//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $("#down-link").bind('click', function(event) {
      var position = $("#main-content").position().top.toString();
        $("#down-link").animate(
          {scrollTop: $("#main-content").position().top.toString()}, 2000);
        event.preventDefault();
    });
});
