document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navbarMenu = document.querySelector('.navbar_menu');

    hamburger.addEventListener('click', function() {
        navbarMenu.classList.toggle('active');
    });
});
