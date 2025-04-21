
$(function(){
  
  $(window).on('load',function(){
    $('body').addClass('action');
  });
  // $('.aniObj').on('inview', function(event, isInView) {
  //   if (isInView) {
  //     $(this).addClass("fade");
  //   } else {
  //     $(this).removeClass("fade");
  //   }
  // });

  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
  if(isMobile) {
    $('.nav-list').addClass('sp');
   }else {
    TweenMax.from('.header',1.2,{y:'-100'});
    TweenMax.from('.title',.6,{y:30,autoAlpha:0,delay:.8,ease: Power2.easeOut});
    TweenMax.staggerFrom('.section01 p',1,{y:25,autoAlpha:0,delay:1,ease:Power3.easeOut},.2);
   }


  var hmenu  = $('.header--m-menu');
  var menuSrc = hmenu.children('img').attr('src');
  var navList = $('.nav-list');

  hmenu.on('click',function(e){
    e.preventDefault();
    $(this).toggleClass('open');
    if($(this).hasClass('open')){
      menuSrc = menuSrc.replace('btn_menu.png','btn_menu_close.png');
      hmenu.children('img').attr('src', menuSrc);
      navList.fadeIn();
    }else {
      menuSrc = menuSrc.replace('btn_menu_close.png','btn_menu.png');
      hmenu.children('img').attr('src', menuSrc);
      navList.fadeOut();
    }
  });

  //네비게이션
  $('.nav-list a[href^="#"]').on("click", function(e) {
      e.preventDefault();
      var n = $(e.currentTarget).attr("href")
          , t = $("#" == n || "" == n ? "html" : n).offset().top - 100;
        $("body,html").animate({
          scrollTop: t           
      }, 400,function(){
        $('.nav-list.sp').fadeOut();
        menuSrc = menuSrc.replace('btn_menu_close.png','btn_menu.png');
        hmenu.children('img').attr('src', menuSrc);
        hmenu.removeClass('open');
      });
      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');
  });

  //select 
  $('#lang_select').on('change',function(){
    var url = $(this).val();
    if(url){
      window.location = url;
    }
    return false;
  });

  //공연소개
  $('.section02-list a[href^="#"]').on("click", function(e) {
    e.preventDefault();
      var n = $(e.currentTarget).attr("href")
        , t = $("#" == n || "" == n ? "html" : n).offset().top -100;
      return $("body,html").animate({
          scrollTop: t           
      }, 400);      
  });

  //animation
  TweenMax.set('.aniObj',{autoAlpha: 0,y:'40'});

  //TweenMax.from('.header',1.2,{y:'-100'});
  // TweenMax.from('.title',.6,{y:30,autoAlpha:0,delay:.8,ease: Power2.easeOut});
  // TweenMax.staggerFrom('.section01 p',1,{y:25,autoAlpha:0,delay:1,ease:Power3.easeOut},.2);

  var $animation_elements = $('.aniObj');
  var $window = $(window);
  
  function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
  
    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top + 100;
      var element_bottom_position = (element_top_position + element_height);
  
      if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
        TweenMax.to($element,1,{y:0,autoAlpha:1});
      } else {
      TweenMax.to($element,1,{y:'40',autoAlpha:0});
      }
    });
  }
  
  $window.on('scroll resize', check_if_in_view);
  $window.trigger('scroll');
  
});

