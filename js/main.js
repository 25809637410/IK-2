let mainSwiper = new Swiper('.vmSwiper', {
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + '</span>';
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});




const instaSlider = new Swiper(".insta_slider", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 10,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".insta_pagination",
    type: "progressbar",
    clickable: true,
  },
})
// swiper_insta_slider