"use strict";

(() => {
  /*HEADER NAV-MENU BURGER BUTTON*/
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

  /* --- FOOTER CONTACT BUTTON --- */
  const contactButton = document.getElementById("contact-button");
  contactButton.addEventListener("click", function () {
    this.classList.toggle("open");
  });
})();