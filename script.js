// Toggle between Login and Sign Up forms
function toggleForm() {
  const loginForm = document.querySelector(".form");
  const signUpText = loginForm.querySelector(".link a");

  signUpText.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Sign Up form is not yet implemented.");
  });
}

// Form validation for login
function validateLoginForm() {
  const emailField = document.querySelector('input[type="email"]');
  const passwordField = document.querySelector('input[type="password"]');
  const loginButton = document.querySelector(".btnn");

  loginButton.addEventListener("click", (event) => {
    const email = emailField.value;
    const password = passwordField.value;

    if (email === "" || password === "") {
      alert("Please fill in both fields");
      event.preventDefault();
    } else {
      alert(`Logging in as ${email}`);
    }
  });
}

// Smooth scrolling for menu links
function smoothScroll() {
  const menuItems = document.querySelectorAll(".menu li a");

  menuItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();

      const targetId = item.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
}

// Toggle hamburger menu
// function toggleHamburger() {
//   const hamburger = document.querySelector(".hamburger");
//   const navMenu = document.querySelector(".menu");

//   hamburger.addEventListener("click", () => {
//     navMenu.classList.toggle("active");
//     hamburger.classList.toggle("toggle");
//   });
// }
function toggleHamburger() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".menu");
  const content = document.querySelector(".content"); // Select the content element

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("toggle");

    // Add or remove a class to shift content down when menu is active
    if (navMenu.classList.contains("active")) {
      content.classList.add("shift-down");
    } else {
      content.classList.remove("shift-down");
    }
  });
}

// Initialize functions on page load
window.onload = function () {
  toggleForm();
  validateLoginForm();
  smoothScroll();
  toggleHamburger();
};
