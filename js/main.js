// ════════════════════════════════════════════════════════════════
// Mobile nav toggle
// ════════════════════════════════════════════════════════════════
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a, .lang-toggle').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ════════════════════════════════════════════════════════════════
// Scroll-reveal animation for sections
// ════════════════════════════════════════════════════════════════
const revealTargets = document.querySelectorAll(
  '.stack-card, .project-card, .timeline-item, .contact-card, .stat'
);

if ('IntersectionObserver' in window && revealTargets.length) {
  revealTargets.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  revealTargets.forEach((el) => observer.observe(el));
}

// ════════════════════════════════════════════════════════════════
// Active nav link highlighting on scroll
// ════════════════════════════════════════════════════════════════
const sections = document.querySelectorAll('main .section, .hero');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

if (sections.length && navAnchors.length) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navAnchors.forEach((a) => {
            a.classList.toggle('is-active', a.getAttribute('href') === `#${id}`);
          });
        }
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach((s) => sectionObserver.observe(s));
}

// ════════════════════════════════════════════════════════════════
// Nav background intensifies after scrolling past hero
// ════════════════════════════════════════════════════════════════
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 40);
  }, { passive: true });
}

// ════════════════════════════════════════════════════════════════
// Project category filter
// ════════════════════════════════════════════════════════════════
const filterBtns = document.querySelectorAll('.filter-btn');
const projectGroups = document.querySelectorAll('.projects-group');

if (filterBtns.length && projectGroups.length) {
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      filterBtns.forEach((b) => {
        const active = b === btn;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-selected', String(active));
      });

      projectGroups.forEach((group) => {
        const category = group.dataset.category;
        group.classList.toggle('is-hidden', filter !== 'all' && filter !== category);
      });
    });
  });
}

// ════════════════════════════════════════════════════════════════
// Project screenshot gallery
// ════════════════════════════════════════════════════════════════
document.querySelectorAll('[data-gallery]').forEach((gallery) => {
  const mainImg = gallery.querySelector('[data-gallery-main]');
  const thumbs = gallery.querySelectorAll('.project-gallery-thumb');

  thumbs.forEach((thumb) => {
    thumb.addEventListener('click', () => {
      const thumbImg = thumb.querySelector('img');
      if (!mainImg || !thumbImg) return;

      mainImg.src = thumbImg.src;
      mainImg.alt = thumbImg.alt || mainImg.alt;
      thumbs.forEach((t) => t.classList.toggle('is-active', t === thumb));
    });
  });
});
