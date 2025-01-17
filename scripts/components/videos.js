document.addEventListener("DOMContentLoaded", function () {
    const mainVideoContainer = document.querySelector(".video-display"); // Main container
    const mainVideo = document.getElementById("main-video"); // Main image
    const videoTitle = document.querySelector(".video-title"); // Video title
    const thumbnails = document.querySelectorAll(".thumbnail"); // Thumbnails
    const playIcon = document.querySelector(".play-icon"); // Play icon

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function () {
            // Update the main image
            mainVideo.src = this.src;
            videoTitle.textContent = this.getAttribute("data-title");

            // Remove active class from all thumbnails
            thumbnails.forEach(thumb => thumb.classList.remove("active"));

            // Add active class to clicked thumbnail
            this.classList.add("active");

            // Ensure play icon stays on top of the new image
            mainVideoContainer.appendChild(playIcon);
        });
    });
});