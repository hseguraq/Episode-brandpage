document.addEventListener("DOMContentLoaded", function () {
    const footerTitles = document.querySelectorAll(".footer-title");

    footerTitles.forEach(title => {
        title.addEventListener("click", function () {
            this.nextElementSibling.classList.toggle("active");
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const footerTitles = document.querySelectorAll(".footer-title");

    footerTitles.forEach(title => {
        title.addEventListener("click", function () {
            this.classList.toggle("active"); 
        });
    });
});