// Swiper JS Start
const swiper = new Swiper('.swiper', {
  // Default parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,

  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
  },
  
  // Navigation arrows
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  
  // And if we need scrollbar
  scrollbar: {
   el: '.swiper-scrollbar',
  },

  //AutoPlay
  autoplay: {
      delay: 2000,
      reverseDirection: false, //Enables autoplay in reverse direction
      pauseOnMouseEnter: true, // Pause on Mouse Over
      disableOnInteraction: false,
  },
  
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
})

// jQuery start
$(document).ready(function(){
    
    // Owl Carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    });

    // Slick Carousel
    $('.slick_responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

      // Curved Text
      var arc = function (t)
      {
        return {
            x: 500.0 + 300.0 * Math.cos(2.0 * Math.PI * t - 0.5 * Math.PI),
            y: 400.0 + 300.0 * Math.sin(2.0 * Math.PI * t - 0.5 * Math.PI)
        };
      };
  
      $('#text1').curvedText({
        curve:    arc,
        domain:   [-0.2, 0.2],
        viewport: { x: 0.0, y: 0.0, width: 1000.0, height: 400.0 }
      });

});