const portfolio = (function () {
  // innit
  // cache DOM
  const portfolioSection = document.querySelector("#section-three");
  const contactsSection = document.querySelector("#section-four");
  const aboutSection = document.querySelector("#section-one");

  const toTopArrow = contactsSection.querySelector("#to-top-arrow");
  const getInTouchBtn = aboutSection.querySelector("#to-contacts");
  const contactsHeader = contactsSection.querySelector("#contact");
  const sendMessage = contactsSection.querySelector("#send-msg");
  const inputs = contactsSection.querySelectorAll("input, textarea");

  // bind events
  toTopArrow.addEventListener("click", scrollToTop);
  getInTouchBtn.addEventListener("click", scrollToContacts);
  sendMessage.addEventListener("click", onSendClicked);
  inputs.forEach((input) =>
    input.addEventListener(
      "keyup",
      (ev) => {
        removeError(input);
      },
      { once: true }
    )
  );

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

  function onSendClicked(ev) {
    ev.preventDefault();

    if (checkInputs()) {
      const formData = getFormData();
      contactsSection.querySelector("#form").reset();
      sendMail(formData);
    }
  }

  function checkInputs() {
    const form = contactsSection.querySelector("#form");
    const inputsToCheck = [
      { id: "#name", errorId: "#error" },
      { id: "#email", errorId: "#error2" },
      { id: "#message", errorId: "#error3" },
    ];

    let isValid = true;

    inputsToCheck.forEach(({ id, errorId }) => {
      const input = form.querySelector(id);
      if (input.value.trim() === "") {
        showError(form.querySelector(errorId));
        isValid = false;
      }
      if (input.id === "email") {
        isValid = validateEmail(input.value.trim());
        isValid === false
          ? showError(form.querySelector(errorId))
          : removeError(input);
      }
    });
    return isValid;
  }

  function validateEmail(email) {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(email);
  }

  function showError(errorDiv) {
    errorDiv.setAttribute("visible", "");
  }

  function removeError(input) {
    if (input.nextElementSibling.hasAttribute("visible")) {
      input.nextElementSibling.removeAttribute("visible");
    }
  }

  function getFormData() {
    const formData = new FormData(contactsSection.querySelector("#form"));
    const formObj = {};
    formData.forEach((value, key) => (formObj[key] = value));
    return formObj;
  }

  function sendMail(formData) {
    // emailjs.init({ publicKey: "3_vbJ8AfiDmEixZkD" });
    console.log(formData);
  }

  // support functions
})();
