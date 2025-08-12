const productContainers = document.querySelectorAll(".beers");

productContainers.forEach((container, i) => {
  const nextBtn = document.querySelector(".next-btn");
  const prevBtn = document.querySelector(".pre-btn");

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      container.scrollLeft += 286;
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      container.scrollLeft -= 286;
    });
  }
});

const yesBtn = document.querySelector(".modal__btn__yes");
const modalWindow = document.querySelector(".modal__hello");
const bodyScroll = document.querySelector(".body");
let isYes = false;

yesBtn.addEventListener("click", () => {
  if (!isYes) {
    modalWindow.classList.add("yes");
    bodyScroll.classList.add("yes");
    isYes = true;
  } else {
    modalWindow.classList.remove("yes");
    bodyScroll.classList.remove("yes");
    isYes = false;
  }
});

const workingBtn = document.querySelector(".banner-btn");
const notWorkingBtn = document.querySelector(".working__icon");
const modalWorking = document.querySelector(".modal__working");
const bodyScroll2 = document.querySelector(".body");
let isYes2 = false;

workingBtn.addEventListener("click", () => {
  console.log(isYes2);
  if (!isYes2) {
    modalWorking.classList.add("working");
    bodyScroll2.classList.add("working");
    isYes2 = true;
  } else {
    modalWorking.classList.remove("working");
    bodyScroll2.classList.remove("working");
    isYes2 = false;
  }
});

notWorkingBtn.addEventListener("click", () => {
  modalWorking.classList.remove("working");
  bodyScroll2.classList.remove("working");
  isYes2 = false;
});

const burgerBtn = document.querySelector(".header__icon");
const mobileMenu = document.querySelector(".header__nav-mobile");
const navLink = document.querySelector(".nav__mobile-item");
let isOpen = false;

burgerBtn.addEventListener("click", openCloseBurgerMenu);
mobileMenu.addEventListener("click", openCloseBurgerMenu);
navLink.addEventListener("click", (event) => {
  event.stopPropagation();
  openCloseBurgerMenu();
});
function openCloseBurgerMenu() {
  if (!isOpen) {
    mobileMenu.classList.add("active");
    burgerBtn.classList.add("cross");
    bodyScroll2.classList.add("working");
    isOpen = true;
  } else {
    mobileMenu.classList.remove("active");
    burgerBtn.classList.remove("cross");
    bodyScroll2.classList.remove("working");
    isOpen = false;
  }
}

const imageBefore = document.querySelector(".banner-img");
const headerColor = document.querySelector(".header");
const bannerBtn = document.querySelector(".banner-btn");
const bannerText = document.querySelector(".banner-text");
const bannerPros1 = document.querySelector(".pros1");
const bannerPros2 = document.querySelector(".pros2");
const navLis = document.querySelectorAll(".nav__li");

let colorTheme = 1;

imageBefore.addEventListener("click", changeImageColor);

function changeImageColor() {
  if (colorTheme === 1) {
    imageBefore.classList.remove("banner-img");
    imageBefore.classList.add("banner-imgRed");
    headerColor.style.backgroundColor = "rgba(73, 31, 50, 0.9)";
    bannerBtn.style.backgroundColor = "rgba(73, 31, 50, 0.9)";
    bannerBtn.style.border = "2px solid rgb(75, 55, 45)";
    bannerText.style.color = "rgb(75, 55, 45)";
    bannerPros1.style.color = "rgb(75, 55, 45)";
    bannerPros2.style.color = "rgb(75, 55, 45)";

    navLis.forEach((elem) => {
      elem.classList.add("nav__li--red");
    });

    colorTheme = 2;
  } else if (colorTheme === 2) {
    imageBefore.classList.remove("banner-imgRed");
    imageBefore.classList.add("banner-img");
    headerColor.style.backgroundColor = "rgba(31, 73, 69, 0.9)";
    bannerBtn.style.backgroundColor = "rgba(31, 73, 69, 0.9)";
    bannerBtn.style.border = "2px solid rgb(55, 75, 55)";
    bannerText.style.color = "rgb(55, 75, 55)";
    bannerPros1.style.color = "rgb(55, 75, 55)";
    bannerPros2.style.color = "rgb(55, 75, 55)";

    navLis.forEach((elem) => {
      elem.classList.remove("nav__li--red");
    });

    colorTheme = 1;
  }
}
