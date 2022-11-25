(() => {

    const slides = [
        '<div><img class="portfolio__carusel-image" src="img/portfolio-girl-in-lush-dress.png" alt="A girl in a lush dress"></div>',
        '<div><img class="portfolio__carusel-image" src="img/portfolio-girl-with-mirror.png" alt="A girl with a mirror"></div>',
        '<div><img class="portfolio__carusel-image" src="img/portfolio-portrait-with-flower-earring.png" alt="A portrait of the girl in flower earring"></div>',
        '<div><img class="portfolio__carusel-image" src="img/portfolio-portrait-with-hand.png" alt="A portrait of the girl with hand near her face"></div>',
    ]

    let currentSlideIdx = 0;

    function renderSlide() {
        const slideContainer = document.querySelector('.portfolio__carusel .portfolio__carusel-photoes');
        slideContainer.innerHTML = slides[currentSlideIdx];
        if (window.innerWidth > 768) {
            const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
            slideContainer.innerHTML += slides[secondSlideIdx];
            if (window.innerWidth > 992) {
                const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
                slideContainer.innerHTML += slides[thirdSlideIdx];
            }
        }
    }

    function nextSlide() {
        currentSlideIdx++;
        if (currentSlideIdx >= slides.length) currentSlideIdx = 0;
        renderSlide();
    }

    function prevSlide() {
        currentSlideIdx--;
        if (currentSlideIdx < 0) currentSlideIdx = slides.length - 1;
        renderSlide();
    }

    setInterval(nextSlide, 4000);

    renderSlide();

    const nextButton = document.querySelector('.portfolio__carusel .portfolio__carusel-btn-next');
    nextButton.addEventListener('click', nextSlide);

    const prevButton = document.querySelector('.portfolio__carusel .portfolio__carusel-btn-prev');
    prevButton.addEventListener('click', prevSlide);

    window.addEventListener('resize', renderSlide);

})();