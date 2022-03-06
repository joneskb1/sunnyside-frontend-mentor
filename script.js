// fix social imgs

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const yellowDiv = document.querySelector(".yellow");
const yellowLink = document.querySelector(".yellow-link");
const pinkDiv = document.querySelector(".pink");
const pinkLink = document.querySelector(".pink-link");
const social = document.querySelectorAll(".social-link");
const moreInfoLinks = document.querySelectorAll(".more-info-link");
const contactBtn = document.querySelector(".contact-btn");
const links = [yellowLink, pinkLink];

// toggle nav with hamburger click & change image
hamburger.addEventListener("click", function () {
  nav.classList.toggle("hidden");
  if (!nav.classList.contains("hidden")) {
    hamburger.src = "images/icon-hamburger-active.svg";
  } else {
    hamburger.src = "images/icon-hamburger.svg";
  }
});

// contact btn touch
function contactActive(e) {
  e.target.style.backgroundColor = "#3fbfff";
  e.target.style.color = "#ffffff";
}
function contactReg(e) {
  e.target.style.backgroundColor = "#fbd600";
  e.target.style.color = "#24303e";
}
contactBtn.addEventListener("touchstart", contactActive);
contactBtn.addEventListener("touchend", contactReg);
contactBtn.addEventListener("touchmove", contactReg);
contactBtn.addEventListener("touchcancel", contactReg);

// change color of divs on hover/touch for learn more links
function addHighlight(e) {
  if (e.target.classList.contains("yellow-link")) {
    yellowDiv.style.backgroundColor = "#fad401";
  } else if (e.target.classList.contains("pink-link")) {
    pinkDiv.style.backgroundColor = "#fe7766";
  }
}

function removeHighlight(e) {
  if (e.target.classList.contains("yellow-link")) {
    yellowDiv.style.backgroundColor = "#fef2b9";
  } else if (e.target.classList.contains("pink-link")) {
    pinkDiv.style.backgroundColor = "#ffdbd4";
  }
}

links.forEach((el) => {
  el.addEventListener("touchstart", addHighlight);
  el.addEventListener("touchend", removeHighlight);
  el.addEventListener("touchmove", removeHighlight);
  el.addEventListener("touchcancel", removeHighlight);
  el.addEventListener("click", addHighlight);
  el.addEventListener("click", removeHighlight);
  el.addEventListener("mouseover", addHighlight);
  el.addEventListener("mouseout", removeHighlight);
});

// more info links touch events
function moreInfoLinkChange(e) {
  e.target.style.color = "#458d7e";
}
moreInfoLinks.forEach((el) => {
  el.addEventListener("touchstart", function (e) {
    e.target.style.color = "white";
  });
  el.addEventListener("touchend", moreInfoLinkChange);
  el.addEventListener("touchmove", moreInfoLinkChange);
  el.addEventListener("touchcancel", moreInfoLinkChange);
});

// on hover, change imgs for social logos
function changeSrc(e) {
  if (e.target.classList.contains("fb")) {
    e.target.src = `images/icon-facebook-active.svg`;
  } else if (e.target.classList.contains("tw")) {
    e.target.src = `images/icon-twitter-active.svg`;
  } else if (e.target.classList.contains("pin")) {
    e.target.src = `images/icon-pinterest--active.svg`;
  } else if (e.target.classList.contains("insta")) {
    e.target.src = `images/icon-instagram-active.svg`;
  }

  // const platform = e.target.src.slice(34).replace(".svg", "");
  // e.target.src = `images/icon-${platform}-active.svg`;
}

function resetSrc(e) {
  if (e.target.classList.contains("fb")) {
    e.target.src = `images/icon-facebook.svg`;
  } else if (e.target.classList.contains("tw")) {
    e.target.src = `images/icon-twitter.svg`;
  } else if (e.target.classList.contains("pin")) {
    e.target.src = `images/icon-pinterest.svg`;
  } else if (e.target.classList.contains("insta")) {
    e.target.src = `images/icon-instagram.svg`;
  }

  // const platform = e.target.src.slice(34).replace("-active.svg", "");
  // e.target.src = `images/icon-${platform}.svg`;
}

social.forEach((el) => {
  el.addEventListener("touchstart", changeSrc);
  el.addEventListener("touchend", resetSrc);
  el.addEventListener("touchmove", resetSrc);
  el.addEventListener("touchcancel", resetSrc);
});
