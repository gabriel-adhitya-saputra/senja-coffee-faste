const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

//Form
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwmULvRrel6-Izs1sfHmzWiV9mDQtzHAul5yG7T9HcDQdISJwjiwvw4Z123iHVkZcwv/exec";
const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      form.reset();
      alert("Pesan anda telah terkirim!! Mohon Menunggu 2x24 Jam");

      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
