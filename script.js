const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");
const subscribeForm = document.querySelector(".subscribe-form");
const formMessage = document.querySelector(".form-message");

document.querySelector("#year").textContent = new Date().getFullYear();

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  primaryNav.classList.toggle("is-open", !isExpanded);
});

primaryNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    primaryNav.classList.remove("is-open");
  }
});

subscribeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!subscribeForm.reportValidity()) return;

  formMessage.textContent = "Thanks for stopping by. You’re on the list.";
  subscribeForm.reset();
});
