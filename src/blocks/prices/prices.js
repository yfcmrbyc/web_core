import Swiper from 'swiper/bundle';

const breakpointSwiperPrices = window.matchMedia( '(min-width:768px)' );

document.addEventListener("DOMContentLoaded", function() {
  
    let pricesSwiper;
  
    const breakpointChecker = function() {
  
      if (breakpointSwiperPrices.matches) {

        if ( pricesSwiper) {
          pricesSwiper.destroy( true, true );
        }
      } else {

          enableSwiper();

          return;

      } 
  
    };
  
    const enableSwiper = function() {
  
      pricesSwiper = new Swiper (".prices__swiper", {
        slidesPerView: "auto",
        spaceBetween: 16,
        slideClass: 'price-card',
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
  
    };

    window.addEventListener('resize', breakpointChecker);

    breakpointChecker();
  });

