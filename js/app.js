/* #Header
  ======================================================= */
const header = document.querySelector('.header');
const hamburgerBtn = document.querySelector('.header-hamburger');

if (hamburgerBtn) {
  hamburgerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    header.classList.toggle('show');
    body.classList.toggle('no-scroll');
  });
}

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('header-white');
  } else {
    header.classList.remove('header-white');
  }
});

if (window.scrollY > 0) {
  header.classList.add('header-white');
} else {
  header.classList.remove('header-white');
}

// Search
const headerSearch = document.querySelector('.header-search');
const headerSearchIcon = document.querySelector('.header-search-icon');
const headerSearchClose = document.querySelector('.header-search-close');

header.addEventListener('click', (e) => {
  if (e.target.closest('.header-search-icon')) {
    headerSearch.classList.toggle('show');

    header.classList.remove('show');
    body.classList.remove('no-scroll');
  }

  if (e.target.closest('.header-search-close')) {
    headerSearch.classList.remove('show');
  }
});

window.addEventListener('click', (e) => {
  if (!e.target.closest('.header-search') && headerSearch.classList.contains('show')) {
    headerSearch.classList.remove('show');
  }
});

/* #Reviews Slider
  ======================================================= */
if (document.querySelector('.reviews-slider .slider-1 .swiper') && document.querySelector('.reviews-slider .slider-2 .swiper')) {
  const slider3 = new Swiper(".reviews-slider .slider-3 .swiper", {
    loop: true,
    slidesPerView: 1.3,
    allowTouchMove: false,
  });

  const slider2 = new Swiper(".reviews-slider .slider-2 .swiper", {
    loop: true,
    slidesPerView: 1,
    allowTouchMove: false,
  });

  let sliders = [slider2, slider3];

  const slider1 = new Swiper(".reviews-slider .slider-1 .swiper", {
    loop: true,
    slidesPerView: 1,
    controller: {
      control: sliders
    },
    navigation: {
      nextEl: ".reviews-slider .next",
      prevEl: ".reviews-slider .prev",
    },
    pagination: {
      el: ".reviews-slider .swiper-pagination",
    },
    breakpoints: {
      0: {
        allowTouchMove: true
      },
      1024: {
        allowTouchMove: false,
      }
    }
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
        slidesPerView: 1.27,
        loop: true
      },
      1024: {
        slidesPerView: 4,
        loop: false
      }
    }
  });
}

/* #Card Slider 3
======================================================= */
if (document.querySelector('.card-slider-3 .swiper')) {
  new Swiper(".card-slider-3 .swiper", {
    loop: true,
    navigation: {
      nextEl: ".card-slider-3 .next",
      prevEl: ".card-slider-3 .prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.23,
        centeredSlides: true,
      },
      1024: {
        slidesPerView: 2.37,
        centeredSlides: false,
      }
    }
  });
}

/* #Scrollable Box
======================================================= */
if (document.querySelector(".scrollable-box")) {
  document.querySelector(".scrollable-box").addEventListener("scroll", checkScrollHeight, false);
  
  function checkScrollHeight(){
      var scrollableBox = document.querySelector(".scrollable-box"); 
      if ((scrollableBox.scrollTop + scrollableBox.offsetHeight) >= scrollableBox.scrollHeight){
        if (scrollableBox.closest('form')) {
          let form = scrollableBox.closest('form');
          form.querySelector(".checkbox input").disabled = false;
          form.querySelector(".checkbox input").checked = true;
        }
      }
  }
}

/* #Sharing
======================================================= */
const sharing = document.querySelector('.sharing');
const sharingToggler = document.querySelector('.sharing-toggler');
const sharingClose = document.querySelector('.sharing-close');

if (window.innerWidth > 1023) {
  sharingToggler.addEventListener('click', e => {
    e.preventDefault();
    sharing.classList.add('show');
  });
  
  sharingClose.addEventListener('click', (e) => {
    e.preventDefault();
    sharing.classList.remove('show');
  })
} else {
  sharingToggler.addEventListener('click', event => {
    if (navigator.share) { 
     navigator.share({
        title: 'WebShare API Demo',
        url: 'https://codepen.io/ayoisaiah/pen/YbNazJ'
      }).then(() => {
      })
      .catch(console.error);
      } else {
      }
  });
}