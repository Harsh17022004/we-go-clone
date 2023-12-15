
function loader() {
  window.addEventListener("load", () => {
    gsap.to("#loader", {
      height: 0,
      duration: 1,
    });
    gsap.to("#loader img", {
      opacity: 0,
    });
  });
}
 loader();

function boxColor() {
  gsap.from("#page2 .box", {
    scrollTrigger: {
      trigger: "#page2",
      start: "top 70%",
    },
    y: 120,
    stagger: 0.2,
  });
  gsap.to("#page2 .box-color", {
    scrollTrigger: {
      trigger: "#page2",
      start: "top 70%",
    },
    height: 0,
    duration: 2,
  });
  gsap.from("#page3 .box", {
    scrollTrigger: {
      trigger: "#page3",
      start: "top 70%",
    },
    y: 120,
    stagger: 0.2,
  });
  gsap.to("#page3 .box-color", {
    scrollTrigger: {
      trigger: "#page3",
      start: "top 70%",
    },
    height: 0,
    duration: 2,
  });
}
boxColor();

function imageMover() {
  gsap.to("#page4 .top", {
    scrollTrigger: {
      trigger: "#page4",
      start: "top 90%",
      scrub: 1,
    },
    x: 500,
  });
  gsap.to("#page4 .bottom", {
    scrollTrigger: {
      trigger: "#page4",
      start: "top 70%",
      scrub: 1,
    },
    x: -400,
    rotation: -17,
  });
}
imageMover();

function logoFixer() {
  const logo = document.querySelector(".logo");
  var lastScrollTop = 0;
  window.addEventListener(
    "scroll",
    function () {
      var st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        logo.style.opacity = "0";
      } else if (st < lastScrollTop) {
        logo.style.opacity = "1";
      }
      lastScrollTop = st <= 0 ? 0 : st;
    },
    false
  );
}
logoFixer();

function menuToggle() {
  const btn = document.querySelector("#menu");
  const btn2 = document.querySelector("#menu2");
  const navMenu = document.querySelector(".navMenu");
  btn.addEventListener("click", () => {
    btn.style.display = "none";
    btn2.style.display = "block";
    let tl = gsap.timeline();
    tl.to(navMenu, {
      display: "block",
      height: 500,
    });
    tl.to(navMenu, {
      height: "100%",
      width: "100%",
      top: 0,
      padding: "6vw",
    });
    tl.to(".navMenu a", {
      display: "block",
    });
    tl.to(".navMenu a", {
      x: 100,
      stagger: 0.1,
    });
  });
  btn2.addEventListener("click", () => {
    btn2.style.display = "none";
    btn.style.display = "block";
    let tl = gsap.timeline();
    tl.to(".navMenu a", {
      display: "none",
    });
    tl.to(navMenu, {
      height: 0,
      duration: 1,
      padding: 0,
    });
    tl.to(navMenu, {
      width: "60%",
      display: "none",
      top: "10vh",
    });
  });
}
menuToggle();
