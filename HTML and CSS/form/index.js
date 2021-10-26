const loginButton = document.querySelector(".login");
const loginBox = document.querySelector(".login-box");
const overlay = document.querySelector(".overlay");
const closeIcon = document.querySelector(".close-icon");

const selectBtn = document.querySelector(".lang-select");
const langFlag = document.querySelector(".lang-flag");

// Add overlay and login form

const addNoDisplay = () => {
  loginBox.classList.add("no-display");
  overlay.classList.add("no-display");
};

loginButton.addEventListener("click", function () {
  loginBox.classList.remove("no-display");
  overlay.classList.remove("no-display");
});

closeIcon.addEventListener("click", function () {
  addNoDisplay();
});

overlay.addEventListener("click", function () {
  addNoDisplay();
});

// Change flag according to language selected

function changeLogo() {
  const selectedIndex = selectBtn.selectedIndex;
  const selectedValue = selectBtn.options[selectedIndex];

  if (selectedValue.textContent == "Hindi") {
    langFlag.setAttribute("src", "img/india-flag.png");
  } else if (selectedValue.textContent == "English") {
    langFlag.setAttribute("src", "img/us-flag.png");
  }
}

// Change lang

// // function changeLanguage(esp) {
//     // location.hash = lang;
//     location.reload();
// }
