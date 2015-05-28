//jQuery for page scrolling feature - requires jQuery Easing plugin
$(document).ready(function(){
  $('#down-link').click(function(){
    $("#page-scroll").scroll();
    $("#main-content").animate(
      { scrollTop: $('#main-content').position().top }, 1500);
  });
});
