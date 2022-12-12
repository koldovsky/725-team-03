(() => {
  const slides = [
      '<div><img src="img/girl_hides_from_sun.png" alt="Girl hides from the sun"></div>',
      '<div><img src="img/girl_in_a_half_turn.png" alt="A girl in a half turn"></div>',
      '<div><img src="img/beautiful_girl_in_jacket.png" alt="Beatiful girl in a jacket"></div>'
  ]

  let currentSlideInd = 0;

  function renderSlide(){
      const slideContainer = document.querySelector('.latest-work_carousel_slide-container');
      slideContainer.innerHTML = slides[currentSlideInd];
      if (window.innerWidth > 880 ){
        const secondSlideInd = currentSlideInd + 1 >= slides.length ? 0 : currentSlideInd +1;
        slideContainer.innerHTML += slides[secondSlideInd];

      }
  }

  function nextSlide(){
    currentSlideInd++;
    if (currentSlideInd >= slides.length) currentSlideInd = 0;
    renderSlide();
  }
  function prevSlide(){
    currentSlideInd--;
    if (currentSlideInd < 0) currentSlideInd = slides.length-1;
    renderSlide();
  }
  setInterval(nextSlide, 3000);

  renderSlide();

  const nextButton = document.querySelector('.latest-work_carousel_btn-next')
  nextButton.addEventListener('click', nextSlide);
 
  const prevButton = document.querySelector('.latest-work_carousel_btn-prev')
  prevButton.addEventListener('click', prevSlide);

})();