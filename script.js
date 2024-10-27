
const navbar = document.querySelector('.navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY && window.scrollY >= 56) {
        // User is scrolling down, hide the navbar
        navbar.classList.add('navbar-hidden');
    } else {
        // User is scrolling up, show the navbar
        navbar.classList.remove('navbar-hidden');
        if (window.scrollY >= 56) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    }

    // Update the last scroll position
    lastScrollY = window.scrollY;
});


// AOS Js
AOS.init();


// Siwper JS

let swiperCard = new Swiper(".card-content", {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        600: { slidesPerView: 2 },
        968: { slidesPerView: 3 },
    },
});

// timer
var count = 60;

var interval = setInterval(function () {

    if (count == 0) {
        clearInterval(interval);
    }
    else {
        count = count - 1;
    }
    document.getElementById("countdown-timer").innerHTML = count;
}, 1000);



