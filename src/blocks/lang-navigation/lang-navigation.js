const menuContainerLinks = document.querySelectorAll('.lang-navigation__link');

for (i = 0; i < menuContainerLinks.length; i++) {
    const menuLink = menuContainerLinks[i];
    menuLink.addEventListener('click', function (evt) {

       const activeLinks = document.querySelectorAll('.lang-navigation__link--active');
       if (activeLinks.length > 0) {
           for (let i = 0; i < activeLinks.length; i++) {
               let activeLink = activeLinks[i];
               activeLink.classList.remove('lang-navigation__link--active');
           }
       } 

       menuLink.classList.add('lang-navigation__link--active');
       evt.preventDefault();
    });
}