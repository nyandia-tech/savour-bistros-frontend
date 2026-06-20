// Year
document.getElementById('year').textContent = new Date().getFullYear();
// Mobile nav toggle
const nav = document.getElementById('nav');
const toggle = document.getElementById('navToggle');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
// Close menu when a link is tapped
document.querySelectorAll('#navLinks a').forEach(a => {
  a.addEventListener('click', () => nav.classList.remove('open'));
});
// Scroll-reveal animation
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
// Contact form (demo)
const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  submitBtn.textContent = "Thank you — we'll be in touch";
  submitBtn.disabled = true;
  form.reset();
});
