// NAVBAR BACKGROUND COLOR EFFECT
var navbar = document.querySelector(".navbar");

window.onscroll = function () {
  if (window.pageYOffset > 40) {
    this.navbar.classList.add("navbar-home-bg");
  } else {
    this.navbar.classList.remove("navbar-home-bg");
  }
};

// ABOUT CARD EFFECT
const chevronBtn = document.querySelectorAll(".chevron-btn");
let card;

chevronBtn.forEach((btn) =>
  btn.addEventListener("click", function () {
    card = this.parentNode;
    card.classList.toggle("expanded");
  })
);

// PORTFOLIO IMAGE DISPLAY WITH SIMPLE-LIGHT-BOX PLUGIN
const gallery = new SimpleLightbox(".gallery a", {});

const msg = document.querySelector(".msg");

msg.innerHTML = "Click an image to see it's full quality";
setTimeout(() => msg.remove(), 5000);
