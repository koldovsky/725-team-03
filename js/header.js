"use strict";

(() => {
  /*HEADER NAV-MENU BURGER BUTTON*/
  const iconBurger = document.querySelector(".nav-burger");
  const navigationsBody = document.querySelector(".nav-wrapper");
  const clockContainer = document.querySelector(".header-clock");
  const timerUntilChristmas = document.querySelector(".header-christmas");
  iconBurger.addEventListener("click", function (e) {
    document.body.classList.toggle("lock");
    iconBurger.classList.toggle("active");
    navigationsBody.classList.toggle("active");
    clockContainer.classList.toggle("hidden");
    timerUntilChristmas.classList.toggle("hidden");
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

  /* CLOCK */
  function showClock() {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    clockContainer.innerText =
      "Current time: " + new Date().toLocaleTimeString("en-GB", options);
  }
  setInterval(showClock, 1000);

  /* TIME LEFT UNTIL CHRISTMAS */
  function calculateChristmasCountdown() {
    let now = new Date();
    let currentMonth = now.getMonth() + 1;
    let currentDay = now.getDate();
    let nextChristmasYear = now.getFullYear();
    if (currentMonth == 12 && currentDay > 25) {
      nextChristmasYear = nextChristmasYear + 1;
    }
    let nextChristmasDate = nextChristmasYear + "-12-25T00:00:00.000Z";
    let christmasDay = new Date(nextChristmasDate);
    let diffSeconds = Math.floor(
      (christmasDay.getTime() - now.getTime()) / 1000
    );
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    if (currentMonth == 12 && currentDay != 31) {
      days = Math.floor(diffSeconds / (3600 * 24));
      diffSeconds -= days * 3600 * 24;
      hours = Math.floor(diffSeconds / 3600);
      diffSeconds -= hours * 3600;
      minutes = Math.floor(diffSeconds / 60);
      diffSeconds -= minutes * 60;
      seconds = diffSeconds;
    }
    document.querySelector(".header-christmas-days").innerHTML = days + " days";
    document.querySelector(".header-christmas-hours").innerHTML =
      hours + " hours";
    document.querySelector(".header-christmas-minutes").innerHTML =
      minutes + " minutes";
    document.querySelector(".header-christmas-seconds").innerHTML =
      seconds + " seconds";
    setTimeout(calculateChristmasCountdown, 1000);
  }
  calculateChristmasCountdown();
})();
