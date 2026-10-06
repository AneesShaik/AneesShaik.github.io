// ── Navbar scroll effect ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ── Burger menu ──
const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');

burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  const spans = burger.querySelectorAll('span');
  if (mobileMenu.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    burger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  });
});

// ── Scroll-reveal animations ──
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.12 }
);

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Also animate section children on scroll
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.querySelectorAll('.chapter, .cert-card, .decision-card, .skill-category, .competency-card').forEach((card, i) => {
        card.style.transitionDelay = `${i * 0.08}s`;
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        requestAnimationFrame(() => {
          card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        });
      });
      sectionObserver.unobserve(e.target);
    });
  },
  { threshold: 0.05 }
);

document.querySelectorAll('#about, #skills, #competencies, #certifications, #decisions').forEach(s => sectionObserver.observe(s));

// ── Patch cycle before/after bar ──
const patchBarObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in-view');
      patchBarObserver.unobserve(e.target);
    });
  },
  { threshold: 0.4 }
);

document.querySelectorAll('.patch-bar').forEach(el => patchBarObserver.observe(el));

// ── Stat counters (nightly tests, servers migrated) ──
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const valueEl = el.querySelector('.stat-counter-value');
  if (prefersReducedMotion) {
    valueEl.textContent = target.toLocaleString();
    return;
  }
  const duration = 1100;
  const start = performance.now();
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    valueEl.textContent = Math.round(target * eased).toLocaleString();
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const statCounterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      animateCounter(e.target);
      statCounterObserver.unobserve(e.target);
    });
  },
  { threshold: 0.4 }
);

document.querySelectorAll('.stat-counter').forEach(el => statCounterObserver.observe(el));

// ── Active nav link highlight ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const activeLinkObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(a => {
          a.style.color = a.getAttribute('href') === `#${e.target.id}` ? 'var(--accent)' : '';
        });
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach(s => activeLinkObserver.observe(s));

// ── Trigger hero fade-ups on load ──
window.addEventListener('load', () => {
  document.querySelectorAll('#hero .fade-up').forEach(el => {
    el.classList.add('visible');
  });
});
