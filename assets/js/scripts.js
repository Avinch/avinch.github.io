// Enable strict mde
'use strict';

// Initialize AOS
AOS.init();
AOS.init({
  duration: 1000
});

// Vanilla Tilt options
VanillaTilt.init({
  max: 15,
  reset: false
});

//
const exploreBtn = document.getElementById('exploreBtn');
const scrollHere = document.getElementById('scrollHere');

$("#exploreBtn").click(function () {
  $('html, body').animate({
    scrollTop: $("#scrollHere").offset().top
  }, 1000);
});

$("#contactLink").click(function () {
  $('html, body').animate({
    scrollTop: $("footer").offset().top
  }, 1000);
});