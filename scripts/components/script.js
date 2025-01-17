document.addEventListener("DOMContentLoaded", function() {
    new Swiper(".swiper", {
      loop: false, /* Infinite loop */
      centeredSlides: false,
      pagination: { el: ".swiper-pagination",
         clickable: true,
         bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active", },
      navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
      breakpoints: {
        1025: { slidesPerView: 5, slidesPerGroup: 5, enabled: false },
        821: { slidesPerView: 3, slidesPerGroup: 1, enabled: true },
        768: { slidesPerView: 2, slidesPerGroup: 1, enabled: true },  /* Tablet: 3 items, moves 1 */
        0: { slidesPerView: 1, slidesPerGroup: 1, enabled: true }     /* Mobile: 1 item, moves 1 */
      }
    });


    new Swiper(".swiper-episode", {
      loop: false, /* Infinite loop */
      centeredSlides: false,
      pagination: { el: ".swiper-pagination-episode",
         clickable: true,
         bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active", },
      navigation: { nextEl: ".swiper-episode .swiper-button-next-episode", prevEl: ".swiper-episode .swiper-button-prev-episode" },
      breakpoints: {
        1025: { slidesPerView: 3, slidesPerGroup: 1, enabled: false },
        821: { slidesPerView: 2, slidesPerGroup: 1, enabled: true },
        768: { slidesPerView: 2, slidesPerGroup: 1, enabled: true },  /* Tablet: 3 items, moves 1 */
        0: { slidesPerView: 1, slidesPerGroup: 1, enabled: true }     /* Mobile: 1 item, moves 1 */
      }
    });


  });

