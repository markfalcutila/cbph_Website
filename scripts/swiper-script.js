var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
        slidesPerView: 1,
        },
        // when window width is >= 480px
        480: {
        slidesPerView: 1,
        spaceBetween: 30
        },
        // when window width is >= 640px
        768: {
        slidesPerView: 1,
        spaceBetween: 40
        },
        999: {
        slidesPerView: 2,
        spaceBetween: 40
        }
    }
});

