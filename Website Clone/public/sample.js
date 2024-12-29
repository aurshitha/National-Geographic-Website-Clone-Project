/* Search-overlay-show 
   search-defalut-button
   toggleSearch() 
   Search-close-btn
   */

   document.addEventListener("DOMContentLoaded", function() {
      function toggleMain() {
        const searchfn = document.getElementById('Search-overlay-show');
        if(searchfn.style.display === "none" || searchfn.style.display === "") {
           searchfn.style.display = "block";
        } else {
            searchfn.style.display = "none";
        }
      }

    // Add event listener to the menu toggle button
    document.querySelector('.search-defalut-button').addEventListener('click', toggleMain);
    document.querySelector('.Search-close-btn').addEventListener('click', toggleMain);
});


document.addEventListener("DOMContentLoaded", function() {
    // Function to toggle the display of the lightbox section
    function toggleSection() {
        const lightbox = document.getElementById('lightbox-content-show');
        if (lightbox.style.display === "none" || lightbox.style.display === "") {
            lightbox.style.display = "block";
        } else {
            lightbox.style.display = "none";
        }
    }

    // Add event listener to the menu toggle button
    document.querySelector('.menu-toggle').addEventListener('click', toggleSection);
    // Add event listener to the lightbox close button
    document.querySelector('.lightbox-closebtn').addEventListener('click', toggleSection);
});

$(document).ready(function() {
    $(".menu-content-list-item").hover(function() {
        var bgImage = $(this).attr("data-bg-img");
        $("#background-img-display").css("background-image", "url('" + bgImage + "')"); // Added `url()` around the image path
    }, function() {
        $("#background-img-display").css("background-image", "none");
    });
});

function loadMore() {
    // Add dynamic content loading functionality here
    alert("Load more photos...");
}



document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.place-slide');
    const prevButton = document.querySelector('.prev-slide');
    const nextButton = document.querySelector('.next-slide');

    function showSlide(index) {
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }
        slides.forEach((slide) => {
            slide.style.transform = `translateX(-${currentSlide * 100}%)`;
        });
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // Initialize the slider
    showSlide(currentSlide);

    // Attach event listeners
    if (prevButton) {
        prevButton.addEventListener('click', prevSlide);
    }
    if (nextButton) {
        nextButton.addEventListener('click', nextSlide);
    }
});
