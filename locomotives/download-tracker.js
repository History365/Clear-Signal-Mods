let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;
    if (index < 0) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

// Function to go to the next slide
function nextSlide() {
    showSlide(currentIndex + 1);
}

// Function to go to the previous slide
function prevSlide() {
    showSlide(currentIndex - 1);
}

// Auto-advance the carousel every 3 seconds (3000ms)
setInterval(nextSlide, 3000);
