import Swiper from 'swiper/bundle';

const buttonShowBrands = document.querySelector('.brands__button--show');
const buttonHideBrands = document.querySelector('.brands__button--hide');
const cardContainerBrands = document.querySelector('.brands__wrapper');
const brandCard = cardContainerBrands.querySelectorAll('.brand-card');

const breakpointSwiperBrands = window.matchMedia( '(min-width:768px)' );
const breakpointDesktopBrands = window.matchMedia( '(min-width:1444px)' );



document.addEventListener("DOMContentLoaded", function() {
  
    let brandsSwiper;
  
    const breakpointChecker = function() {
  
      if (breakpointSwiperBrands.matches && !breakpointDesktopBrands.matches) {

        hideCardBrands(brandCard, 6);

        if ( brandsSwiper !== undefined ) {
          brandsSwiper.destroy( true, true );
        }

      } else if (breakpointSwiperBrands.matches && breakpointDesktopBrands.matches) {
        
        hideCardBrands(brandCard, 8);
        showCardBrands(brandCard, [6, 7] );

        return;

      } else if (!breakpointSwiperBrands.matches && !breakpointDesktopBrands.matches) {

          showCardBrands(brandCard, [6, 7, 8, 9, 10]);

          enableSwiper();

          return;

      } 
  
    };
  
    const enableSwiper = function() {
  
      brandsSwiper = new Swiper (".brands__swiper", {
        slidesPerView: "auto",
        spaceBetween: 16,
        slideClass: 'brand-card',
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
  
    };

    window.addEventListener('resize', breakpointChecker);

    breakpointChecker();
  });


function hideCardBrands (card, cardNumber) {
      for (let i = cardNumber; i < card.length; i++) {
        card[i].remove();
      }

      return;
    }

function showCardBrands (card, numbersElement) {
  for (let i = 0; i < numbersElement.length; i++) {
    cardContainerBrands.appendChild(card[numbersElement[i]]);
  }
  return;
}


  buttonShowBrands.addEventListener('click', function () {

    showCardBrands(brandCard, [6, 7, 8, 9, 10]);
    
    buttonShowBrands.classList.add('change__hide');
    buttonHideBrands.classList.remove('change__hide');

  });

  buttonHideBrands.addEventListener('click', function () {

    if (breakpointSwiperBrands.matches && !breakpointDesktopBrands.matches) {
      hideCardBrands(brandCard, 6);
    } else {
      hideCardBrands(brandCard, 8);
    }    
    
    buttonShowBrands.classList.remove('change__hide');
    buttonHideBrands.classList.add('change__hide');

  });
