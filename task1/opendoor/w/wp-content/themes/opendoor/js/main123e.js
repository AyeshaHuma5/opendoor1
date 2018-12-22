// --------------------------------------------------------- //
// DOCUMENT READY
// --------------------------------------------------------- //
$(document).ready(function() {

});

// --------------------------------------------------------- //
// STICKY INPUT
// --------------------------------------------------------- //
$('.cta-line-more').click(function(){
  $('.cta-line-more').hide();
  $('.more-press').show();
});

// --------------------------------------------------------- //
// FAQ
// --------------------------------------------------------- //
$('.one-faq-item__question').click(function(){
  $(this).parent().toggleClass("active");
  $(this).next().slideToggle();
});

// --------------------------------------------------------- //
// STICKY INPUT
// --------------------------------------------------------- //
$(window).scroll(function() {
  var height = $(window).scrollTop();
  if(height > 80) {
    $('.sticky-header').addClass('active');
  }
  else {
    $('.sticky-header').removeClass('active');
  }
});

// --------------------------------------------------------- //
// HOMEPAGE
// --------------------------------------------------------- //
$('.testimonials-slider').slick({
  dots: false,
  autoplay: true,
});


// --------------------------------------------------------- //
// SUBMENU MAIN MENU
// --------------------------------------------------------- //
$('.primary-nav-item.dropdown').click(function(){
  $(this).toggleClass('clicked');
});

// --------------------------------------------------------- //
// BUY PAGE
// --------------------------------------------------------- //
$('.value-props-carousel').slick({
  dots: false,
  autoplay: false,
  arrows: false,
});

// --------------------------------------------------------- //
// STORIES LANDER
// --------------------------------------------------------- //
$('.new-stories-slider').slick({
  dots: false,
  autoplay: true,
  fade: true,
  arrows: false,
});

$('.slider-video-testimonials').slick({
  dots: false,
  autoplay: true,
  fade: false,
  arrows: true,
});

$('.new-stories-slider').on('click', function(e) {
  $(this).slick('slickNext');
});

$('.glance-1').click(function(){
  $('.value-props-carousel').slick('slickGoTo',0);
});
$('.glance-2').click(function(){
  $('.value-props-carousel').slick('slickGoTo',1);
});
$('.glance-3').click(function(){
  $('.value-props-carousel').slick('slickGoTo',2);
});
$('.glance-4').click(function(){
  $('.value-props-carousel').slick('slickGoTo',3);
});
$('.slide-left-side-nav').click(function(){
  $('.value-props-carousel').slick('slickNext');
});

// --------------------------------------------------------- //
// Activate WOW.js
// --------------------------------------------------------- //
new WOW().init();

// --------------------------------------------------------- //
// FAQ FILTERS
// --------------------------------------------------------- //

$('.faq-filter').click(function(){
  $(this).siblings().removeClass('active');
  $(this).addClass('active');
});

$('.faq-filter.faq-all').click(function(){
  $('.one-faq').show();
});

$('.faq-filter.faq-general').click(function(){
  $('.one-faq.general').show();
  $('.one-faq.sellers').hide();
  $('.one-faq.buyers').hide();
  $('.one-faq.agents').hide();
  $('.one-faq.trade-ins').hide();
});

$('.faq-filter.faq-sellers').click(function(){
  $('.one-faq.general').hide();
  $('.one-faq.sellers').show();
  $('.one-faq.buyers').hide();
  $('.one-faq.agents').hide();
  $('.one-faq.trade-ins').hide();
});

$('.faq-filter.faq-buyers').click(function(){
  $('.one-faq.general').hide();
  $('.one-faq.sellers').hide();
  $('.one-faq.buyers').show();
  $('.one-faq.agents').hide();
  $('.one-faq.trade-ins').hide();
});

$('.faq-filter.faq-agents').click(function(){
  $('.one-faq.general').hide();
  $('.one-faq.sellers').hide();
  $('.one-faq.buyers').hide();
  $('.one-faq.agents').show();
  $('.one-faq.trade-ins').hide();
});

$('.faq-filter.faq-trade-ins').click(function(){
  $('.one-faq.general').hide();
  $('.one-faq.sellers').hide();
  $('.one-faq.buyers').hide();
  $('.one-faq.agents').hide();
  $('.one-faq.trade-ins').show();
});


// --------------------------------------------------------- //
// SMOOTH SCROLL
// --------------------------------------------------------- //
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1500);
      }
    }
  });

var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
if (iOS === true) {
  $('.route-minneapolis.riverside figure.bg-image').css({'background-attachment': 'scroll'});
}

$('.repair-examples .repair').click(function() {
  $(this).toggleClass('active');
  $(this).find('.circle-plus').toggleClass('opened');
})


$('.filter-nav a').on('click', function(e) {
  e.preventDefault();
  var dataTerm = $(this).data('term');

  if ($(this).parent().hasClass('active')) {
    return false;

  } else if(dataTerm === 'all-terms') {
    $('.filter-nav li.active').removeClass('active');
    $(this).parent().addClass('active');
    $('.filter-stories .stories-wrap .story').removeClass('hidden');

  } else {
    $('.filter-nav li.active').removeClass('active');
    $(this).parent().addClass('active');
    $('.filter-stories .stories-wrap .story').addClass('hidden');
    $('.filter-stories .stories-wrap .story[data-cat*="' + dataTerm +'"]').removeClass('hidden');
  }
})
