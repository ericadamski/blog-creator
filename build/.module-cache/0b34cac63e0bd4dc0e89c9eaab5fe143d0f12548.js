//jQuery for page scrolling feature - requires jQuery Easing plugin
$(document).ready(function(){
  $('#down-link').click(function(){
    $("body").scroll();
    $("body").animate(
      { scrollTop: $('#main-content').position().top }, 1500);
  });
});
