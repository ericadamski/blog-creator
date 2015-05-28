//jQuery for page scrolling feature - requires jQuery Easing plugin
$(document).ready(function(){
  $('#down-link').click(function(){
    $("#main-inner").animate(
      { scrollTop: $('#main-inner').position().top }, 1500);
  });
});
