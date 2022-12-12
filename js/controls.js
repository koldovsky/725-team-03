"use strict";

(() => {
  /* --- FOOTER CONTACT BUTTON --- */
  const contactButton = document.getElementById("contact-button");
  contactButton.addEventListener("click", function () {
    this.classList.toggle("open");
  });
})();
