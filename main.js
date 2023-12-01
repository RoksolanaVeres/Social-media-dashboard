import "./style.css";

// DOM elements
const body = document.getElementById("body");
const lightTopBg = document.querySelector(".light-top-bg");
const toggleButton = document.getElementById("toggle");
const toggleBody = document.querySelector(".toggle-label");
const themeName = document.querySelector(".theme-name");
const mainHeader = document.querySelector(".header-main");
const cards = document.querySelectorAll(".card");
const statistics = document.querySelectorAll(".statistics-num");
const textColor = document.querySelectorAll(".text-color");

// functions
function changeClassesInArray(arr, classToAdd, classToRemove) {
  arr.forEach((el) => {
    el.classList.add(classToAdd);
    el.classList.remove(classToRemove);
  });
}

function setDarkTheme() {
  toggleButton.classList.remove("right-0", "bg-veryPaleBlue");
  toggleBody.classList.add(
    "bg-gradient-to-r",
    "from-toggleFrom",
    "to-toggleTo"
  );
  toggleBody.classList.remove("bg-gray-400");
  body.classList.add("bg-veryDarkBlueBg");
  lightTopBg.classList.add("hidden");
  themeName.textContent = "Dark Mode";
  mainHeader.classList.add("text-white");

  changeClassesInArray(cards, "bg-darkDesaturatedBlue", "bg-lightGrayishBlue");
  changeClassesInArray(
    cards,
    "hover:bg-darkCardHover",
    "hover:bg-lightCardHover"
  );
  changeClassesInArray(statistics, "text-white", "text-black");
  changeClassesInArray(
    textColor,
    "text-desaturatedBlue",
    "text-darkGrayishBlue"
  );
}

function setLightTheme() {
  toggleButton.classList.add("right-0", "bg-veryPaleBlue");
  toggleBody.classList.remove(
    "bg-gradient-to-r",
    "from-toggleFrom",
    "to-toggleTo"
  );
  toggleBody.classList.add("bg-gray-400");
  body.classList.remove("bg-veryDarkBlueBg");
  lightTopBg.classList.remove("hidden");
  themeName.textContent = "Light Mode";
  mainHeader.classList.remove("text-white");

  changeClassesInArray(cards, "bg-lightGrayishBlue", "bg-darkDesaturatedBlue");
  changeClassesInArray(
    cards,
    "hover:bg-lightCardHover",
    "hover:bg-darkCardHover"
  );
  changeClassesInArray(statistics, "text-black", "text-white");
  changeClassesInArray(
    textColor,
    "text-darkGrayishBlue",
    "text-desaturatedBlue"
  );
}

function handleTheme(e) {
  e.target.checked ? setLightTheme() : setDarkTheme();
}

function init() {
  setDarkTheme();
}

// init
init();

// event listeners
toggleButton.addEventListener("click", handleTheme);
