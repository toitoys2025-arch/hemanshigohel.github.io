const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const themeToggle = document.querySelector(".theme-toggle");

menuToggle?.addEventListener("click", () => nav.classList.toggle("open"));

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

themeToggle?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("hemanshi-theme", document.body.classList.contains("dark") ? "dark" : "light");
});

if (localStorage.getItem("hemanshi-theme") === "dark") {
  document.body.classList.add("dark");
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
document.getElementById("year").textContent = new Date().getFullYear();
