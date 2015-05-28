//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function(){
  $('#donw-link').click(function(){
      $('body').animate(
        {scrollTop: $('#main-content').scrollHeight}, 1500);
  });
});
