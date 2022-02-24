const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const yellowDiv = document.querySelector(".yellow");
const yellowLink = document.querySelector(".yellow-link");
const pinkDiv = document.querySelector(".pink");
const pinkLink = document.querySelector(".pink-link");
const social = document.querySelectorAll(".social-link");

hamburger.addEventListener("click", function () {
  nav.classList.toggle("hidden");
});

const toggleNav = () => {
  if (window.innerWidth >= 750) {
    nav.classList.remove("hidden");
  } else {
    nav.classList.add("hidden");
  }
};

window.addEventListener("resize", toggleNav);
window.addEventListener("load", toggleNav);

yellowLink.addEventListener("mouseover", () => {
  yellowDiv.style.backgroundColor = "#fad401";
});

yellowLink.addEventListener("mouseout", () => {
  yellowDiv.style.backgroundColor = "#fef2b9";
});

pinkLink.addEventListener("mouseover", () => {
  pinkDiv.style.backgroundColor = "#fe7766";
});

pinkLink.addEventListener("mouseout", () => {
  pinkDiv.style.backgroundColor = "#ffdbd4";
});

social.forEach((el) =>
  el.addEventListener("mouseover", function (e) {
    const platform = e.target.src.slice(34).replace(".svg", "");
    e.target.src = `images/icon-${platform}-active.svg`;
  })
);

social.forEach((el) =>
  el.addEventListener("mouseout", function (e) {
    const platform = e.target.src.slice(34).replace("-active.svg", "");
    e.target.src = `images/icon-${platform}.svg`;
  })
);
