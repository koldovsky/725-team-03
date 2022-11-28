"use strict";

(() => {
    
    /* CLOCK */
    function updateClock() {
      const clockContainer = document.querySelector(".header-clock");
      const options = {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      };
      clockContainer.innerText = new Date().toLocaleTimeString("en-GB", options);
    }
    setInterval(updateClock, 1000);

    
  /*NAV-MENU BURGER */ 
  const iconBurger = document.querySelector(".nav-burger");
  const navigationsBody = document.querySelector(".nav-wrapper");
  iconBurger.addEventListener("click", function (e) {
    document.body.classList.toggle("lock");
    iconBurger.classList.toggle("active");
    navigationsBody.classList.toggle("active");
  });

  const navLinks = document.querySelectorAll(".nav-menu__item");
  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", (_) => {
      if (iconBurger.classList.contains("active")) {
        document.body.classList.remove("lock");
        iconBurger.classList.remove("active");
        navigationsBody.classList.remove("active");
      }
    });
  });

})();
