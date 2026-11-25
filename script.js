const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
}, { threshold: 0.12 });
revealItems.forEach((item) => observer.observe(item));

const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '☾' : '☼';
});

document.querySelectorAll('.nav a').forEach((link) => link.addEventListener('click', () => {
  document.querySelector('.nav').classList.remove('open');
}));

