//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $("#down-link").bind('click', function(event) {
        $("#down-link").animate({
          scrollTop: $("#main-content").position()}, 2000)
        event.preventDefault();
    });
});
