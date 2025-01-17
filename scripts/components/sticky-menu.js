document.addEventListener("DOMContentLoaded", function () {
  const stickyNav = document.getElementById("sticky-nav");
  const hero = document.getElementById("hero-banner");
  const header = document.getElementById("main-header");

  const headerBottom = header.offsetHeight;
  const height = window.innerHeight;
  const limitHeight = height * 0.57;

  window.addEventListener("scroll", function () {
      const scrollPosition = window.scrollY;

      if (scrollPosition >= limitHeight) {
          stickyNav.classList.add("fixed");
          stickyNav.style.top = `${headerBottom}px`; // Set to headerBottom to stick below header
      } else {
          stickyNav.classList.remove("fixed");
          stickyNav.style.top = "initial";
      }
  });
});