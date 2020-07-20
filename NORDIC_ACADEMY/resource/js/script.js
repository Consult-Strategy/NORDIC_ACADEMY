$(document).ready(function()
{
  // for sticky naigation
  $('.js--section-features').waypoint(function(direction) {
      if (direction == "down") {
          $('nav').addClass('sticky');
      } else {
          $('nav').removeClass('sticky');
      }
  }, {
    offset: '60px;'
  });

  // Scroll on button-khud code likha

  $('.js--scroll-to-plans').click(function () {
     $('html, body').animate({scrollTop: $('.js--section-plans').offset().top},1000);
  });

  $('.js--scroll-to-start').click(function () {
     $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
  });



   // Animations on scroll
   $('.js--wp-1').waypoint(function(direction) {
       $('.js--wp-1').addClass('animated fadeIn');
   }, {
       offset: '50%'
   });

   $('.js--wp-2').waypoint(function(direction) {
       $('.js--wp-2').addClass('animated fadeInUp');
   }, {
       offset: '50%'
   });

   $('.js--wp-3').waypoint(function(direction) {
       $('.js--wp-3').addClass('animated fadeIn');
   }, {
       offset: '50%'
   });

   $('.js--wp-4').waypoint(function(direction) {
       $('.js--wp-4').addClass('animated pulse');
   }, {
       offset: '50%'
   });

   /* Mobile navigation */
   $('.js--nav-icon').click(function() {
       var nav = $('.js--main-nav');
       var icon = $('.js--nav-icon i');

       nav.slideToggle(200);

       if (icon.hasClass('ion-navicon-round')) {
           icon.addClass('ion-close-round');
           icon.removeClass('ion-navicon-round');
       } else {
           icon.addClass('ion-navicon-round');
           icon.removeClass('ion-close-round');
       }
   });

   $('.control-button1').click(function() {

       if ($(this).hasClass('control-btn-active')) {
           $('.content1').show();
           $('.content2').hide();
       }
       else {
         if($('.control-button2').hasClass('control-btn-active')){
           $('.control-button2').removeClass('control-btn-active');
         }
           $(this).addClass('control-btn-active');
           $('.content1').show();
           $('.content2').hide();
       }
   });

   $('.control-button2').click(function() {

       if ($(this).hasClass('control-btn-active')) {
           $('.content2').show();
           $('.content1').hide();
       }
       else {
         if($('.control-button1').hasClass('control-btn-active')){
           $('.control-button1').removeClass('control-btn-active');
         }
           $(this).addClass('control-btn-active');
           $('.content2').show();
           $('.content1').hide();
       }
   });












  // practice
  // $('h1').click(function(){
  //   $(this).css('background-color','rgb(138, 62, 159)');
  // });
});
