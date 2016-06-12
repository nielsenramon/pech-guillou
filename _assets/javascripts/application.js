//= require_self

// Fixed navigation

$(window).on('scroll', function() {
  var scroll = $(window).scrollTop();
  var windowsize = $(window).width();
  if (windowsize > 767) {
    if (scroll >= 250) {
      $(".navigation-appear").fadeIn();
    } else {
      $(".navigation-appear").fadeOut();
    }
  }
});

$('.navigation-trigger').on('click', function () {
  $('.navigation ul').toggleClass('is-open');
  $('.navigation-trigger').toggleClass('is-open');
});

// Fade in animation

window.sr = ScrollReveal({
  delay: 200,
  duration: 1000,
  distance: '5px',
  easing: 'ease-out',
  scale: 1,
  origin: 'top'
});
sr.reveal('.fade-in');

// Weather service

$(function() {
  $.simpleWeather({
    location: 'Cauzac, Fance',
    unit: 'c',
    success: function(weather) {
      $(".weather").html('<h2><span class="weather-icon weather-' + weather.code + '"></span><span>'+weather.temp+'&deg;'+weather.units.temp+'</span></h2>');
    }
  });
});
