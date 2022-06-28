/* #Header
  ======================================================= */
const header = document.querySelector('.header');
const hamburgerBtn = document.querySelector('.header-hamburger');

if (hamburgerBtn) {
  hamburgerBtn.addEventListener('click', (e) => {
    header.classList.toggle('show');
    body.classList.toggle('no-scroll');
  });
}

/* #Reviews Slider
  ======================================================= */
if (document.querySelector('.reviews-slider .slider-1 .swiper') && document.querySelector('.reviews-slider .slider-2 .swiper')) {
  const slider2 = new Swiper(".reviews-slider .slider-2 .swiper", {
    loop: true,
    slidesPerView: 1.3,
    allowTouchMove: false,
  });

  const slider1 = new Swiper(".reviews-slider .slider-1 .swiper", {
    loop: true,
    slidesPerView: 1,
    controller: {
      control: slider2
    },
    navigation: {
      nextEl: ".reviews-slider .slider-1 .next",
      prevEl: ".reviews-slider .slider-1 .prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
}

/* #Home Banner
  ======================================================= */
if (document.querySelector('.home-banner .swiper')) {
  new Swiper(".home-banner .swiper", {
    navigation: {
      nextEl: ".home-banner .next",
      prevEl: ".home-banner .prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    slidesPerView: 1
  });
}

/* #Card Slider 1
  ======================================================= */
if (document.querySelector('.card-slider-1 .swiper')) {
  new Swiper(".card-slider-1 .swiper", {
    loop: true,
    navigation: {
      nextEl: ".card-slider-1 .next",
      prevEl: ".card-slider-1 .prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1.23,
      },
      1024: {
        slidesPerView: 3.75,
      }
    }
  });
}

/* #Card Slider 2
  ======================================================= */
if (document.querySelector('.card-slider-2 .swiper')) {
  new Swiper(".card-slider-2 .swiper", {
    navigation: {
      nextEl: ".card-slider-2 .next",
      prevEl: ".card-slider-2 .prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        loop: true
      },
      1024: {
        slidesPerView: 4,
        loop: false
      }
    }
  });
}