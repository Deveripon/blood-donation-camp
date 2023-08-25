//get the dom elements
const loginSection = document.querySelector(".login-section");
const registrationSection = document.querySelector(".registration-section");
const signupButton = document.getElementById("signupButton")
const signinButton = document.getElementById("signinButton")
const passwordInput = document.querySelectorAll(".password")
const confPasswordInput = document.querySelector(".conf-password")



//show the registration page
function showRegistrationArea() {
  registrationSection.style.display = "block";
  loginSection.style.display = "none";
  signupButton.classList.add("active");
  signinButton.classList.remove("active");
}

//show the login page
function showLoginInArea() {
  registrationSection.style.display = "none";
  loginSection.style.display = "block";
  signupButton.classList.remove("active");
  signinButton.classList.add("active");
}

//show password functionality
function passShowFunction() {
  let confPassattr = confPasswordInput.getAttribute("type");
  // password input attr change
  passwordInput.forEach((item) => {
    let passAttr = item.getAttribute("type")
    if (passAttr === "password") {
      item.setAttribute("type", "text");
    } else {
      item.setAttribute("type", "password");
    }
  });

  // confirm passwor attr change
  if (confPassattr === "password") {
    confPasswordInput.setAttribute("type", "text");
  } else {
    confPasswordInput.setAttribute("type", "password");
  }
}