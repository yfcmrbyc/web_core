import Swiper from 'swiper/bundle';

const buttonShowDevices = document.querySelector('.devices__button--show');
const buttonHideDevices = document.querySelector('.devices__button--hide');
const cardContainerDevices = document.querySelector('.devices__wrapper');
const deviceCard = cardContainerDevices.querySelectorAll('.device-card');

const breakpointSwiperDevices = window.matchMedia( '(min-width:768px)' );
const breakpointDesktopDevices = window.matchMedia( '(min-width:1444px)' );
const breakpointLargeDesctopDevices = window.matchMedia ( '(min-width:1717px)' );



document.addEventListener("DOMContentLoaded", function() {
  
    let devicesSwiper;
  
    const breakpointChecker = function() {
  
      if (breakpointSwiperDevices.matches && !breakpointDesktopDevices.matches && !breakpointLargeDesctopDevices.matches) {

        hideCardDevices(deviceCard, 3);

        if ( devicesSwiper !== undefined ) {
          devicesSwiper.destroy( true, true );
        }

      } else if (breakpointSwiperDevices.matches && breakpointDesktopDevices.matches && !breakpointLargeDesctopDevices.matches) {
        
        hideCardDevices(deviceCard, 4);
        showCardDevices(deviceCard, [3] );

        return;

     } else if (breakpointSwiperDevices.matches && breakpointDesktopDevices.matches && breakpointLargeDesctopDevices.matches) {
        hideCardDevices(deviceCard, 5);
        showCardDevices(deviceCard, [4] );

        return;

      } else if (!breakpointSwiperDevices.matches && !breakpointDesktopDevices.matches && !breakpointLargeDesctopDevices.matches) {

          showCardDevices(deviceCard, [3, 4, 5, 6, 7]);

          enableSwiper();

          return;

      } 
  
    };
  
    const enableSwiper = function() {
  
      devicesSwiper = new Swiper (".devices__swiper", {
        slidesPerView: "auto",
        spaceBetween: 16,
        slideClass: 'device-card',
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
  
    };

    window.addEventListener('resize', breakpointChecker);

    breakpointChecker();
  });


function hideCardDevices (card, cardNumber) {
      for (let i = cardNumber; i < card.length; i++) {
        card[i].remove();
      }

      return;
    }

function showCardDevices (card, numbersElement) {
  for (let i = 0; i < numbersElement.length; i++) {
    cardContainerDevices.appendChild(card[numbersElement[i]]);
  }
  return;
}


  buttonShowDevices.addEventListener('click', function () {

    showCardDevices(deviceCard, [3, 4, 5, 6, 7]);
    
    buttonShowDevices.classList.add('change__hide');
    buttonHideDevices.classList.remove('change__hide');

  });

  buttonHideDevices.addEventListener('click', function () {

    if (breakpointSwiperDevices.matches && !breakpointDesktopDevices.matches && !breakpointLargeDesctopDevices.matches) {
      hideCardDevices(deviceCard, 3);
    } else if (breakpointSwiperDevices.matches && breakpointDesktopDevices.matches && !breakpointLargeDesctopDevices.matches) {
      hideCardDevices(deviceCard, 4);
    } else if (breakpointSwiperDevices.matches && breakpointDesktopDevices.matches && breakpointLargeDesctopDevices.matches) {
        hideCardDevices(deviceCard, 5);
    }
    
    buttonShowDevices.classList.remove('change__hide');

    buttonHideDevices.classList.add('change__hide');

  });
