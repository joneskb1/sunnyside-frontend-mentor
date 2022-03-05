const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const yellowDiv = document.querySelector(".yellow");
const yellowLink = document.querySelector(".yellow-link");
const pinkDiv = document.querySelector(".pink");
const pinkLink = document.querySelector(".pink-link");
const social = document.querySelectorAll(".social-link");
const moreInfoLinks = document.querySelectorAll(".more-info-link");

// toggle nav with hamburger click & change image
hamburger.addEventListener("click", function () {
  nav.classList.toggle("hidden");
  if (!nav.classList.contains("hidden")) {
    hamburger.src = "images/icon-hamburger-active.svg";
  } else {
    hamburger.src = "images/icon-hamburger.svg";
  }
});

// change color of divs on hover for learn more links
const links = [yellowLink, pinkLink];
links.forEach((el) => {
  el.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("yellow-link")) {
      yellowDiv.style.backgroundColor = "#fad401";
    } else if (e.target.classList.contains("pink-link")) {
      pinkDiv.style.backgroundColor = "#fe7766";
    }
  });

  el.addEventListener("mouseout", (e) => {
    if (e.target.classList.contains("yellow-link")) {
      yellowDiv.style.backgroundColor = "#fef2b9";
    } else if (e.target.classList.contains("pink-link")) {
      pinkDiv.style.backgroundColor = "#ffdbd4";
    }
  });
});

// change color of divs on hover for learn more links
// yellowLink.addEventListener("mouseover", (e) => {
//   yellowDiv.style.backgroundColor = "#fad401";
// });

// yellowLink.addEventListener("mouseout", () => {
//   yellowDiv.style.backgroundColor = "#fef2b9";
// });

// pinkLink.addEventListener("mouseover", () => {
//   pinkDiv.style.backgroundColor = "#fe7766";
// });

// pinkLink.addEventListener("mouseout", () => {
//   pinkDiv.style.backgroundColor = "#ffdbd4";
// });

// on hover, change imgs for social logos
social.forEach((el) => {
  el.addEventListener("mouseover", function (e) {
    const platform = e.target.src.slice(34).replace(".svg", "");
    e.target.src = `images/icon-${platform}-active.svg`;
  });

  el.addEventListener("mouseout", function (e) {
    const platform = e.target.src.slice(34).replace("-active.svg", "");
    e.target.src = `images/icon-${platform}.svg`;
  });
});

// touch events
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
});

// yellowLink.addEventListener("touchstart", addHighlight);
// yellowLink.addEventListener("touchend", removeHighlight);
// yellowLink.addEventListener("touchmove", removeHighlight);
// yellowLink.addEventListener("touchcancel", removeHighlight);

// yellowLink.addEventListener("click", addHighlight);
// yellowLink.addEventListener("click", removeHighlight);

// pinkLink.addEventListener("touchstart", addHighlight);
// pinkLink.addEventListener("touchend", removeHighlight);
// pinkLink.addEventListener("touchmove", removeHighlight);
// pinkLink.addEventListener("touchcancel", removeHighlight);
// pinkLink.addEventListener("click", addHighlight);
// pinkLink.addEventListener("click", removeHighlight);

// more info links
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

//social imgs
social.forEach((el) => {
  el.addEventListener("touchstart", function (e) {
    const platform = e.target.src.slice(34).replace(".svg", "");
    e.target.src = `images/icon-${platform}-active.svg`;
  });

  el.addEventListener("touchend", function (e) {
    const platform = e.target.src.slice(34).replace("-active.svg", "");
    e.target.src = `images/icon-${platform}.svg`;
  });

  el.addEventListener("touchmove", function (e) {
    const platform = e.target.src.slice(34).replace("-active.svg", "");
    e.target.src = `images/icon-${platform}.svg`;
  });
  el.addEventListener("touchcancel", function (e) {
    const platform = e.target.src.slice(34).replace("-active.svg", "");
    e.target.src = `images/icon-${platform}.svg`;
  });
});
