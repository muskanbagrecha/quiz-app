// // Toggle theme
// function toggleTheme() {
//   const theme = document.querySelector("link");
//   console.log(theme);
//   if (
//     theme.getAttribute("href") ===
//     "https://card-input.netlify.app/lighttheme.css"
//   ) {
//     console.log("light");
//     theme.setAttribute("href", "https://card-input.netlify.app/darktheme.css");
//   } else {
//     theme.setAttribute("href", "https://card-input.netlify.app/lighttheme.css");
//   }
// }

/* Theme toggle */
const themeStyle = document.querySelector(".themestyle");
let activeSheet = document.querySelector("#active-stylesheet");
let themeToggle = document.querySelector(".theme-toggle");
let themeIcon = document.querySelector(".theme-toggle i");

if (localStorage.getItem("lastActiveSheet")) {
  activeSheet.setAttribute("href", localStorage.getItem("lastActiveSheet"));
}

function switchStyle() {
  let selectedSheet = this.getAttribute("data-stylesheet");
  console.log(selectedSheet);
  if (
    selectedSheet ===
    "https://deploy-preview-5--card-input.netlify.app/lighttheme.css"
  ) {
    selectedSheet =
      "https://deploy-preview-5--card-input.netlify.app/darktheme.css";
  } else {
    selectedSheet =
      "https://deploy-preview-5--card-input.netlify.app/lighttheme.css";
  }
  this.setAttribute("data-stylesheet", selectedSheet);
  activeSheet.setAttribute("href", selectedSheet);
  localStorage.setItem("lastActiveSheet", selectedSheet);
  if (themeIcon.classList.contains("fa-moon")) {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }
}

themeToggle.addEventListener("click", switchStyle);
