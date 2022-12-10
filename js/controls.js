"use strict";

(() => {
  /* --- FOOTER CONTACT BUTTON --- */
  const contactButton = document.getElementById("contact-button");
  contactButton.addEventListener("click", function () {
    this.children.item(0).classList.toggle("fa-times");
    this.classList.toggle("open");
  });
})();