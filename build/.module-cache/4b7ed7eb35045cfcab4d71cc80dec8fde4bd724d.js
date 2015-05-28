//jQuery for page scrolling feature - requires jQuery Easing plugin
$(document).ready(function(){
  $('#down-link').click(function(){
    $("#page-scroll").scroll();
    $("#page-scroll").animate(
      { scrollTop: $('#main-content').position().top }, 1500);
  });
});
