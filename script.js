document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger-menu');
    const navbarMenu = document.querySelector('.navbar_menu');

    hamburger.addEventListener('click', function () {
        navbarMenu.classList.toggle('active');
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const hiringToggle = document.querySelector('.hiring-toggle');
    const hiringMenu = document.querySelector('.hiring-menu');

    hiringToggle.addEventListener('click', function () {
        hiringMenu.classList.toggle('active');
    });
});


let btnBio = document.querySelector('.btn-bio')
let containerBio = document.querySelector('.div-bio')
containerBio.style.display = 'block'

let btnLineup = document.querySelector('.btn-lineup')
let containerLineup = document.querySelector('.div-lineup')
containerLineup.style.display = 'none'



function changeBio() {
    containerBio.style.display = 'block'
    containerLineup.style.display = 'none'
}

function changeLineup() {
    containerBio.style.display = 'none'
    containerLineup.style.display = 'block'
}

