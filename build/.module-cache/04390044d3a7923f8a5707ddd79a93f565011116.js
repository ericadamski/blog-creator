//jQuery for page scrolling feature - requires jQuery Easing plugin
$(document).ready(function(){
  $('#donw-link').on('click','.page-scroll',function(){
    alert($('#main-content').scrollHeight);
      $('body').animate(
        {scrollTop: $('#main-content').scrollHeight}, 1500);
  });
});

$.on('click', '#down-link', function(){
  alert($('#main-content').scrollHeight);
    $('body').animate(
      {scrollTop: $('#main-content').scrollHeight}, 1500);
});
