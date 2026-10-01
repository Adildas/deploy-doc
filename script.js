// Dark mode

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀️";
  } else {
    themeBtn.textContent = "🌙";
  }
});


// Get Started button

const learnBtn = document.getElementById("learnBtn");

learnBtn.addEventListener("click", () => {
  document.getElementById("services").scrollIntoView({
    behavior: "smooth"
  });
});


// Contact button

const contactBtn = document.getElementById("contactBtn");

contactBtn.addEventListener("click", () => {
  alert("Thanks for reaching out! We'll get back to you soon.");
});
