const carousel = document.querySelector(".carousel");
let currentSlide = 0;
let slideInterval;

function nextSlide() {
    currentSlide = (currentSlide + 1) % carousel.children.length;
    updateCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + carousel.children.length) % carousel.children.length;
    updateCarousel();
}

function updateCarousel() {
    const slideWidth = carousel.children[0].offsetWidth;
    carousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

const swipeThreshold = 50; // Define um valor de limite para determinar quando um toque é considerado um deslize

let touchStartX = 0;
let touchEndX = 0;

carousel.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
});

carousel.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;

    if (deltaX > swipeThreshold) {
        prevSlide();
    } else if (deltaX < -swipeThreshold) {
        nextSlide();
    }
});

function startSlideInterval() {
    slideInterval = setInterval(() => {
        nextSlide();
    }, 4000); // 4 segundos
}

function stopSlideInterval() {
    clearInterval(slideInterval);
}

startSlideInterval(); // Inicie o intervalo quando a página carregar

const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

prevButton.addEventListener("click", () => {
    prevSlide();
    stopSlideInterval();
    startSlideInterval();
});

nextButton.addEventListener("click", () => {
    nextSlide();
    stopSlideInterval();
    startSlideInterval();
});