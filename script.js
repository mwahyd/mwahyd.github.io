const portfolio = (function () {
  // innit
  // cache DOM
  const portfolioSection = document.querySelector("#section-three");
  const contactsSection = document.querySelector("#section-four");
  const aboutSection = document.querySelector("#section-one");

  const toTopArrow = contactsSection.querySelector("#to-top-arrow");
  const getInTouchBtn = aboutSection.querySelector("#to-contacts");
  const contactsHeader = contactsSection.querySelector("#contact");

  // bind events
  toTopArrow.addEventListener("click", scrollToTop);
  getInTouchBtn.addEventListener("click", scrollToContacts);

  // handler functions
  function scrollToTop(ev) {
    const btn = ev.target;
    console.log(btn);
    btn.setAttribute("scrolling", "");
    window.scroll({ top: 0, behavior: "smooth" });
    btn.addEventListener("animationend", () => btn.removeAttribute("scrolling"), {
      once: true,
    });
  }

  function scrollToContacts(ev) {
    contactsHeader.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  // support functions
})();
