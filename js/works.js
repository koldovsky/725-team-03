(() => {
  const slides = [
      '<div><img src="img/girl_hides_from_sun.png" alt="Girl hides from the sun"></div>',
      '<div><img src="img/girl_in_a_half_turn.png" alt="A girl in a half turn"></div>',
      '<div><img src="img/beautiful_girl_in_jacket.png" alt="Beatiful girl in a jacket"></div>'
  ]

  let currentSlideInd = 0;

  function renderSlide(){
      const slideContainer = document.querySelector('.latest-work_carousel_slide-container');
      slideContainer.innerHTML = currentSlideInd;
  }
})();