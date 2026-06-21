// Year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const sideNav = document.getElementById('sideNav');
const toggle = document.getElementById('navToggle');
if (toggle && sideNav) {
  toggle.addEventListener('click', () => {
    const open = sideNav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}

const sideLinks = document.querySelectorAll('#sideNavLinks a');
sideLinks.forEach(a => {
  a.addEventListener('click', () => {
    sideNav?.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

const currentPath = window.location.pathname.replace(/.*\//, '');
sideLinks.forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPath || (href === 'index.html' && currentPath === '')) {
    link.classList.add('active');
  }
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
if (form && submitBtn) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitBtn.textContent = "Thank you — we'll be in touch";
    submitBtn.disabled = true;
    form.reset();
  });
}
