document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.carousel-slide img');
    
    let counter = 0;
    const size = carouselImages[0].clientWidth;

    function updateCarousel() {
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    nextButton.addEventListener('click', () => {
        if (counter >= carouselImages.length - 1) counter = -1;
        counter++;
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        if (counter <= 0) counter = carouselImages.length;
        counter--;
        updateCarousel();
    });

    setInterval(() => {
        nextButton.click();
    }, 3000); // Change slide every 3 seconds
});
