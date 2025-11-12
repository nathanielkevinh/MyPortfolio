// Theme toggle
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light");
  const isLight = body.classList.contains("light");
  toggleBtn.textContent = isLight ? "☀️" : "🌙";
});
