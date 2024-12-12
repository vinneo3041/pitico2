const carouselImages = document.querySelector('.carousel-images');
const indicators = document.querySelectorAll('.indicator');
let currentIndex = 0;
const totalImages = carouselImages.children.length;

function updateCarousel(index) {
 
    const offset = -index * 100; 
    carouselImages.style.transform = `translateX(${offset}%)`;

    indicators.forEach((indicator, i) => {
        if (i === index) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

function autoSlide() {
    currentIndex = (currentIndex + 1) % totalImages; 
    updateCarousel(currentIndex);
}

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel(currentIndex);
    });
});

let interval = setInterval(autoSlide, 3000); 

carouselImages.addEventListener('mouseover', () => {
    clearInterval(interval);
});

carouselImages.addEventListener('mouseout', () => {
    interval = setInterval(autoSlide, 3000);
});

updateCarousel(currentIndex);
