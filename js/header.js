"use strict";

(() => {
  /*HEADER NAV-MENU BURGER BUTTON*/
  const iconBurger = document.querySelector(".nav-burger");
  const navigationsBody = document.querySelector(".nav-wrapper");
  const clockContainer = document.querySelector(".header-clock");
  const timerUntilChristmas = document.querySelector(".header-christmas");
  const timerDaysOfWar = document.querySelector(".days-of-war");
  const countOfKilledOrks = document.querySelector(".count-of-killed-orks");
  iconBurger.addEventListener("click", function (e) {
    document.body.classList.toggle("lock");
    iconBurger.classList.toggle("active");
    navigationsBody.classList.toggle("active");
    clockContainer.classList.toggle("hidden");
    timerUntilChristmas.classList.toggle("hidden");
    timerDaysOfWar.classList.toggle("hidden");
    countOfKilledOrks.classList.toggle("hidden");
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
      minutes + " min.";
    document.querySelector(".header-christmas-seconds").innerHTML =
      seconds + " sec.";
    setTimeout(calculateChristmasCountdown, 1000);
  }
  calculateChristmasCountdown();

  /* TIMER OF WAR */
  let totalDaysOfWar;
  function calculateDaysOfWar() {
    const dateOfWarStarted = "2022-02-24T00:05:00Z";

    const now = new Date();
    const datefromAPITimeStamp = new Date(dateOfWarStarted).getTime();
    const nowTimeStamp = now.getTime();

    const microSecondsDiff = Math.abs(datefromAPITimeStamp - nowTimeStamp);

    // Math.round is used instead of Math.floor to account for certain DST cases
    // Number of milliseconds per day =
    //   24 hrs/day * 60 minutes/hour * 60 seconds/minute * 1000 ms/second
    totalDaysOfWar = Math.round(microSecondsDiff / (1000 * 60 * 60 * 24));
    return totalDaysOfWar;
  }
  calculateDaysOfWar();
  console.log(totalDaysOfWar);

  function showTotalDaysOfWar() {
    timerDaysOfWar.textContent =
      totalDaysOfWar + " days since full-scale invasion";
  }
  showTotalDaysOfWar();

  /*COUNT OF KILLED ORKS*/
  async function showCountOfKilledOrks() {
    const response = await fetch(
      "https://russianwarship.rip/api/v1/statistics/latest"
    );
    const warStats = await response.json();

    const numberOfKilledOrks = warStats.data.stats["personnel_units"];
    countOfKilledOrks.textContent =
      numberOfKilledOrks + " orks have been killed";
  }
  showCountOfKilledOrks();
})();
