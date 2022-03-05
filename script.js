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

// touch events for learn more links
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

function changeSrc(e) {
  // console.log(e.target.src);
  // const platform = e.target.src.slice(34).replace(".svg", "");
  // e.target.src = `images/icon-${platform}-active.svg`;
}

//social imgs touch events
social.forEach((el) => {
  el.addEventListener("touchstart", changeSrc);

  // el.addEventListener("touchend", function (e) {
  //   const platform = e.target.src.slice(34).replace("-active.svg", "");
  //   e.target.src = `images/icon-${platform}.svg`;
  // });

  // el.addEventListener("touchmove", function (e) {
  //   const platform = e.target.src.slice(34).replace("-active.svg", "");
  //   e.target.src = `images/icon-${platform}.svg`;
  // });
  // el.addEventListener("touchcancel", function (e) {
  //   const platform = e.target.src.slice(34).replace("-active.svg", "");
  //   e.target.src = `images/icon-${platform}.svg`;
  // });
});
