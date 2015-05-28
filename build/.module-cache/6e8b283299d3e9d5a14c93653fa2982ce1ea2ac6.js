//jQuery for page scrolling feature - requires jQuery Easing plugin
$(document).ready(function(){
  $('#down-link').click(function(){
    alert($('#main-content').position().top.toString() + 'px');
      $("html, body").animate(
        {scrollTop: $('#main-content').position().top.toString()+'px'}, 1500);
  });
});
