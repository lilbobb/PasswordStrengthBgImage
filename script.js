const email = document.getElementById("email");
const password = document.getElementById("password");
const background = document.getElementById("background");
const button = document.querySelector("button");

password.addEventListener("input", (e) => {
  const input = e.target.value;
  const length = input.length;
  const blurValue = Math.max(0, 20 - length * 2); 
  background.style.filter = `blur(${blurValue}px)`;

  if (length < 6) {
    password.classList.add("border-red-500");
    password.classList.remove("border-yellow-500", "border-green-500");
  } else if (length < 10) {
    password.classList.add("border-yellow-500");
    password.classList.remove("border-red-500", "border-green-500");
  } else {
    password.classList.add("border-green-500");
    password.classList.remove("border-red-500", "border-yellow-500");
  }
});

email.addEventListener("blur", () => {
  const value = email.value.trim();
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!validEmail.test(value)) {
    email.classList.add("border-red-500");
  } else {
    email.classList.remove("border-red-500");
  }
});

button.addEventListener("click", (e) => {
  e.preventDefault();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
  const passwordValid = passwordValue.length >= 6;

  if (!emailValid || !passwordValid) {
    alert("Please enter a valid email and a password with at least 6 characters.");
    return;
  }

  alert("Form submitted successfully!");
});
