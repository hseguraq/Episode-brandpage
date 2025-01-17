document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1025: { slidesPerView: 5, slidesPerGroup: 5, enabled: false }, /* Desktop: No carousel */
        768: { slidesPerView: 3, slidesPerGroup: 1, enabled: true },  /* Tablet: 3 items, moves 1 */
        0: { slidesPerView: 1, slidesPerGroup: 1, enabled: true }     /* Mobile: 1 item, moves 1 */
    }
  });
}); 