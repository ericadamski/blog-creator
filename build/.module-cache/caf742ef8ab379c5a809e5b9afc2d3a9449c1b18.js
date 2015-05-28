//jQuery for page scrolling feature - requires jQuery Easing plugin
$(document).ready(function(){
  $('#down-link').click(function(){
    alert($('#main-content').scrollTop());
      $("page-scroll").animate(
        { scrollTop: $('#main-content').position().top }, 1500);
  });
});
