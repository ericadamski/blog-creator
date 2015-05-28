//jQuery for page scrolling feature - requires jQuery Easing plugin
$(document).ready(function(){
  $('#down-link').click(function(){
    $("#content").animate(
      { scrollTop: $('#content').position().top }, 1500);
  });
});
