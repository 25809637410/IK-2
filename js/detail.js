/* --------  detail_swiper -------- */
let detailSwiper = new Swiper('.detail_swiper', {
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + '</span>';
    },
  }, //pagination

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }, //navigation arrows
});

/* -------- sticky_tab -------- */

/* -------- add_swiper -------- */
let addSwiper = new Swiper('.add_swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

})