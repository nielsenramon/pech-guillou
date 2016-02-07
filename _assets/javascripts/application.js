//= require_self

// Smooth scrolling.

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
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
