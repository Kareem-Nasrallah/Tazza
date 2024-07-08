// hide and show menu button
const menuIcon = document.getElementById("menuIcon");
const navbarBtn = document.querySelector(".navbar-toggler");
let clicked = false;
navbarBtn.onmouseenter = (_) => {
  if (!clicked) {
    menuIcon.classList.add("fa-bars-staggered");
  }
};
navbarBtn.onmouseleave = (_) => {
  if (!clicked) {
    menuIcon.classList.remove("fa-bars-staggered");
  }
};
navbarBtn.onclick = (_) => {
  clicked = !clicked;
};

// hide and show the menu ul
const menuNav = document.querySelector(".navbar-collapse");
const menulinks = document.querySelectorAll("a.nav-link");
const header = document.querySelector("header");
let hideMenu = (_) => {
  menuNav.classList.remove("show");
};

menulinks.forEach((menulink) => {
  menulink.onclick = (_) => {
    hideMenu();
  };
});

const sections = document.getElementsByTagName("section");
let changActive = (_) => {
  let sectionsLength = sections.length;
  while (
    --sectionsLength &&
    window.scrollY + 97 < sections[sectionsLength].offsetTop
  ) {}
  menulinks.forEach((alllink) => {
    alllink.classList.remove("active");
  });
  menulinks[sectionsLength].classList.add("active");
};
changActive();

onscroll = (_) => {
  hideMenu();
  changActive();
};
document.onclick = (event) => {
  if (!header.contains(event.target)) {
    hideMenu();
  }
};

// nav link and active class
// menulinks.forEach((menulink, index) => {
//   menulink.onclick = (_) => {
//     menulinks.forEach((alllink) => {
//       alllink.classList.remove("active");
//     });
//     menulinks[index].classList.add("active");
//   };
// });

// lightbox options
// lightbox.option({
//   'alwaysShowNavOnTouchDevices': true,
// });
