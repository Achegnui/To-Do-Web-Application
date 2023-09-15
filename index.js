const userName = document.getElementById("Username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const message = document.getElementById("message");
const strength = document.getElementById("strength");
const create = document.getElementById("create");
const login = document.getElementById("Login");
const usernameLogin = document.getElementById("usernameLogin");
const passwordLogin = document.getElementById("passwordLogin");

password.addEventListener("input", function () {
  passwordStrength();
});
create.addEventListener("click", function (e) {
  e.preventDefault();
  if(fieldCheck() && checkSpecialCharacter()){
    redirect();
  }

});
login.addEventListener("click", function (e) {
  e.preventDefault();
  fieldCheckLogin();
});

function fieldCheckLogin() {
  userValue = usernameLogin.value;
  psdValue = passwordLogin.value;
  if (userValue == "" || psdValue == "") {
    alert("Fill all fields");
  } else {
    redirect();
  }
}

function passwordStrength() {
  let passwordValue = password.value;
  let passLength = passwordValue.length;
  if (passLength > 0) {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }
  if (passLength < 4) {
    strength.innerHTML = "weak";
    password.style.borderColor = "#ff5925";
    message.style.color = "#ff5925";
  } else if (passLength >= 4 && passLength < 8) {
    strength.innerHTML = "medium";
    password.style.borderColor = "yellow";
    message.style.color = "yellow";
  } else if (passLength >= 8) {
    strength.innerHTML = "strong";
    password.style.borderColor = "#26d730";
    message.style.color = "#26d730";
  }
}

function checkSpecialCharacter() {
  let passValue = password.value;
  passwordStrength();
  if (strength.innerHTML == "weak") {
    alert("Password is weak");
    return false;
  }
  const specialCharacters =
    "! @ # $ % ^ & * - + _ ~ = |   / : ; \" ' < > , . ?";
  if (!passValue.match(/[^A-Za-z0-9]/)) {
    // Password does not contain special characters
    alert("Must contain: " + specialCharacters);
    return false;
  } else {
    return true;
  }
}

function fieldCheck() {
  let userValue = userName.value;
  let emailValue = email.value;
  let passwordValue = password.value;
  let confirmPasswordValue = confirmPassword.value;

  if (
    userValue == "" ||
    emailValue == "" ||
    passwordValue == "" ||
    confirmPasswordValue == ""
  ) {
    alert("Fill all fields");
    return false;
  } 
  if (passwordValue !== confirmPasswordValue) {
    alert("Your Passwords don't match");
    return false;
  }
  return true;
}

function redirect() {
  window.location.href = "to-do.html";
}
