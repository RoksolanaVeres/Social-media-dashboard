import "./style.css";

// DOM elements
const htmlTag = document.getElementsByTagName("html")[0];
const toggleButton = document.getElementById("toggle");
const themeName = document.querySelector(".theme-name");

// functions
function setDarkTheme() {
  htmlTag.classList.add("dark");
  themeName.textContent = "Dark Mode";
}

function setLightTheme() {
  htmlTag.classList.remove("dark");
  themeName.textContent = "Light Mode";
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
