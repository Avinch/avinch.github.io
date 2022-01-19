// Enable strict mde
'use strict';

// Initialize AOS
AOS.init();
AOS.init({
  duration: 1000
});

//
const exploreBtn = document.getElementById('exploreBtn');
const scrollHere = document.getElementById('scrollHere');

exploreBtn.addEventListener('click', (e) => {
  scrollHere.scrollIntoView({
    behavior: 'smooth',
  });
});

$("#exploreBtn").click(function () {
  $('html, body').animate({
    scrollTop: $("#scrollHere").offset().top
  }, 1400);
});

VanillaTilt.init({
  max: 15,
  reset: false
});