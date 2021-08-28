window.addEventListener('DOMContentLoaded', () => {

    let menuOpener = document.querySelector('.fas.fa-bars');
    let menuResponsive = document.querySelector(".responsive_menu");

    menuOpener.addEventListener('click', () => {

        if (menuResponsive.classList.contains("active")) {
            
            menuResponsive.style.display = "none";
            menuResponsive.classList.remove('active');

        } else {

            menuResponsive.style.display = "block";
            menuResponsive.classList.add('active');

        }

    });

})