const swiper1 = new Swiper('.swiper1', {
    // loop: true,
    slidesPerView: 5,

    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
    breakpoints: {

        1440: {
            slidesPerView: 5,
            spaceBetween: 30,

            centeredSlides: true,
        },

        300: {
            slidesPerView: "auto",
            centeredSlides: true,
            slidesPerView: 1,
            spaceBetween: 30,
        },
    },
    on: {
        slideChange: function (e) {
            setTimeout(() => {
                for (let i = 0; i < textInfo.length; i++) {
                    if (teamSlide[i].classList.contains('swiper-slide-active')) {
                        for (let j = 0; j < textInfo.length; j++) {
                            textInfo[j].classList.remove('active');
                        }
                        textInfo[i].classList.add('active');
                    }
                }
            }, 200);
            console.log('swiper initialized');
        },
    },
});


