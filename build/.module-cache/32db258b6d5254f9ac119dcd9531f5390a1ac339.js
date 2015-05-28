//jQuery for page scrolling feature - requires jQuery Easing plugin
$(document).ready(function(){
  $('#donw-link').bind('click',function(){
      $('body').animate(
        {scrollTop: $('#main-content').scrollHeight}, 1500);
  });
});
