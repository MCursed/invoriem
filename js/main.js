// Owl carousel

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      items : 3,
      margin : 48,
      loop : true,
      responsive : {
        // breakpoint from 0 up
        0 : {
            items : 2,
            margin : 32,
            dots : false,
            //stagePadding: 90,
        },
        // breakpoint from 600 up
        601 : {
          items : 3,
          margin : 32,
          dots : false,
        },
        // breakpoint from 768 up
        768 : {
          items : 3,
          margin : 48,
          dots : false,
        }
    }
  });
});


// Video

const videoBtn = document.querySelector('#video-btn'),
      videoPic = document.querySelector('.video__picture'),
      videoWrapper = document.querySelector('.video'),
      video = document.querySelector('#video-file');


videoWrapper.addEventListener('click', function () {
      if(video.paused) {
        videoPic.classList.add('hidden');
        videoWrapper.classList.remove('video-overlay');
        videoBtn.classList.add('none');
        video.play()
      } else {
        videoWrapper.classList.add('video-overlay');
        videoBtn.classList.remove('none');
        video.pause();
      }
});


// Mobile Nav

const openNavBtn = document.querySelector('#openMobileNav'),
      closeNavBtn = document.querySelector('#closeMobileNav'),
      mobileNav = document.querySelector('#mobileNav');

openNavBtn.onclick = function () {
      mobileNav.classList.remove('none')
      document.body.classList.add('no-scroll');
}
closeNavBtn.onclick = function () {
      mobileNav.classList.add('none')
      document.body.classList.remove('no-scroll');
}