// SHRINK HEADER
const elements1 = document.querySelectorAll('css_selector');
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementsByClassName('header_log')[0].style.height = "60px";
  } else {
    document.getElementsByClassName('header_log')[0].style.height = "80px";
  }
}


// SLIDER

let offset =0; //pa kreisi
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function(){
  offset = offset + 850;
  if (offset > 2550) {
    offset = 0;
  }
  sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function(){
  offset = offset -850;
  if (offset < 0) {
    offset = 2550;
  }
  sliderLine.style.left = -offset + 'px';
});


// Autoplay  7 sec
const intervalid = setInterval(function() {
  offset = offset + 850;
  if (offset > 2550) {
    offset = 0;

  }
  sliderLine.style.left = -offset + 'px';

}, 5000)
