$(document).ready(function(){

  $('#menu-button').click(function(){
    if($('.mural-menu').hasClass('menu-visible')){
      $('.mural-menu').removeClass('menu-visible');
    }else{
      $('.mural-menu').addClass('menu-visible');
    }
  })

  $('.mural-menu ul li').click(function(){
    if($('.mural-menu').hasClass('menu-visible')){
      $('.mural-menu').removeClass('menu-visible');
    }else{
      $('.mural-menu').addClass('menu-visible');
    }
  })
});
