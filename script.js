const email = document.getElementById("email");
const password = document.getElementById("password");
const background = document.getElementById("background");
const button = document.getElementById("submitBtn");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const successMessage = document.getElementById("success-message");
const togglePassword = document.getElementById("togglePassword");
const form = document.getElementById("login-form");

password.addEventListener("input", (e) => {
  const input = e.target.value;
  const length = input.length;
  const blurValue = Math.max(0, 20 - length * 2);
  background.style.filter = `blur(${blurValue}px)`;

  if (button.textContent === "Submitted") {
    button.textContent = "Submit";
    button.classList.remove("bg-green-600", "hover:bg-green-700");
    button.classList.add("bg-black", "hover:bg-gray-800");
  }

  if (length < 6) {
    password.classList.add("border-red-500");
    password.classList.remove("border-yellow-500", "border-green-500");
    passwordError.classList.remove("hidden");
  } else if (length < 10) {
    password.classList.add("border-yellow-500");
    password.classList.remove("border-red-500", "border-green-500");
    passwordError.classList.add("hidden");
  } else {
    password.classList.add("border-green-500");
    password.classList.remove("border-red-500", "border-yellow-500");
    passwordError.classList.add("hidden");
  }
});

email.addEventListener("blur", () => {
  const value = email.value.trim();
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!validEmail.test(value)) {
    email.classList.add("border-red-500");
    emailError.classList.remove("hidden");
  } else {
    email.classList.remove("border-red-500");
    emailError.classList.add("hidden");
  }
});

togglePassword.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    togglePassword.textContent = "Hide";
  } else {
    password.type = "password";
    togglePassword.textContent = "Show";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
  const passwordValid = passwordValue.length >= 6;

  if (!emailValid) {
    email.classList.add("border-red-500");
    emailError.classList.remove("hidden");
  } else {
    email.classList.remove("border-red-500");
    emailError.classList.add("hidden");
  }

  if (!passwordValid) {
    password.classList.add("border-red-500");
    passwordError.classList.remove("hidden");
  } else {
    passwordError.classList.add("hidden");
    if (password.classList.contains("border-red-500")) {
      password.classList.remove("border-red-500");
    }
  }

  if (!emailValid || !passwordValid) {
    alert(
      "Please enter a valid email and a password with at least 6 characters."
    );
    return;
  }

  button.textContent = "Submitted";
  button.classList.remove("bg-black", "hover:bg-gray-800");
  button.classList.add("bg-green-600", "hover:bg-green-700", "transition");

  successMessage.classList.remove("hidden");

  email.value = "";
  password.value = "";
  background.style.filter = "blur(20px)";

  email.classList.remove("border-red-500");
  password.classList.remove(
    "border-red-500",
    "border-yellow-500",
    "border-green-500"
  );
  emailError.classList.add("hidden");

  setTimeout(() => {
    successMessage.classList.add("hidden");
    button.textContent = "Submit";
    button.classList.remove("bg-green-600", "hover:bg-green-700");
    button.classList.add("bg-black", "hover:bg-gray-800");
    button.disabled = false;
  }, 3000);
});
