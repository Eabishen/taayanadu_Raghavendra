window.onload = function () {
    document.getElementById("loadingscreen").style.display = "none";
};

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".videoSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 2000
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }, breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 50,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1450: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});
