const authCard = document.getElementById("auth-card");
const showSignupButton = document.getElementById("show-signup-button");
const showLoginButton = document.getElementById("show-login-button");

showSignupButton.addEventListener("click", () => {
  authCard.classList.toggle("flipped");
});

showLoginButton.addEventListener("click", () => {
  authCard.classList.toggle("flipped");
});
