"use strict";

(() => {
    
    /* CLOCK */
    function updateClock() {
      const clockContainer = document.querySelector(".header-clock");
      const options = {
        year: "numeric",
        month: "short",
        day: "numeric",
      };
      clockContainer.innerText = new Date().toLocaleTimeString("en-GB", options);
    }
    setInterval(updateClock, 1000);

})();
