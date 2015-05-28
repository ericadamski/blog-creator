//jQuery for page scrolling feature - requires jQuery Easing plugin
$(document).ready(function(){
  $('#donw-link').live('click',function(){
      $('body').animate(
        {scrollTop: $('#main-content').scrollHeight}, 1500);
  });
});
