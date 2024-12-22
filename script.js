document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navbarMenu = document.querySelector('.navbar_menu');

    hamburger.addEventListener('click', function() {
        navbarMenu.classList.toggle('active');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const hiringToggle = document.querySelector('.hiring-toggle');
    const hiringMenu = document.querySelector('.hiring-menu');

    hiringToggle.addEventListener('click', function() {
        hiringMenu.classList.toggle('active');
    });
});
