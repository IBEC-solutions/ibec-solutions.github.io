/* ═══════════════════════════════════════════════════════════════
   IBEC SOLUTIONS — main.js
   ═══════════════════════════════════════════════════════════════ */

/* ── NAV : scroll + burger ─────────────────────────────────────── */
const navbar   = document.getElementById('navbar');
const burger   = document.getElementById('burger');
const navMobile = document.getElementById('navMobile');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

burger.addEventListener('click', () => {
  navMobile.classList.toggle('open');
});

// Fermer le menu mobile au clic sur un lien
navMobile.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', () => navMobile.classList.remove('open'));
});

/* ── SMOOTH SCROLL ──────────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 80;
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - offset,
      behavior: 'smooth'
    });
  });
});

/* ── INTERSECTION OBSERVER : animations au scroll ──────────────── */
const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };

// Cards services
const serviceCards = document.querySelectorAll('.service-card');
const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = parseInt(entry.target.dataset.delay || 0) * 100;
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, delay);
      cardObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

serviceCards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  cardObserver.observe(card);
});

// Team cards
const teamCards = document.querySelectorAll('.team-card');
const teamObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, i * 80);
      teamObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

teamCards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(24px)';
  card.style.transition = 'opacity 0.5s ease, transform 0.5s ease, border-color 0.3s';
  teamObserver.observe(card);
});

/* ── COMPTEURS ANIMÉS ────────────────────────────────────────────── */
function animateCounter(el) {
  const target   = parseInt(el.dataset.target);
  const prefix   = el.dataset.prefix || '';
  const suffix   = el.dataset.suffix || '';
  const duration = 1800;
  const start    = performance.now();

  function update(now) {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Easing : ease-out cubic
    const eased    = 1 - Math.pow(1 - progress, 3);
    const current  = Math.round(eased * target);
    el.textContent = prefix + current + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

const statNums     = document.querySelectorAll('.stat-num');
let   statsAnimated = false;
const statsSection  = document.getElementById('chiffres');

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !statsAnimated) {
      statsAnimated = true;
      statNums.forEach(num => animateCounter(num));
      statsObserver.disconnect();
    }
  });
}, { threshold: 0.3 });
if (statsSection) statsObserver.observe(statsSection);

/* ── BARRES DE CROISSANCE ────────────────────────────────────────── */
const bars       = document.querySelectorAll('.g-fill');
let   barsAnimated = false;
const barsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !barsAnimated) {
      barsAnimated = true;
      setTimeout(() => {
        bars.forEach(bar => bar.classList.add('animate'));
      }, 300);
      barsObserver.disconnect();
    }
  });
}, { threshold: 0.4 });
if (bars.length) barsObserver.observe(document.querySelector('.growth-bars'));

/* ── FORMULAIRE CONTACT ──────────────────────────────────────────── */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Validation simple
    const fname   = document.getElementById('fname').value.trim();
    const lname   = document.getElementById('lname').value.trim();
    const email   = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!fname || !lname || !email || !message) {
      showToast('Merci de remplir tous les champs obligatoires.', 'error');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast('Adresse email invalide.', 'error');
      return;
    }

    // Simulation d'envoi (à remplacer par votre backend / Formspree / EmailJS)
    const btn = contactForm.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Envoi en cours…';

    setTimeout(() => {
      showToast('Message envoyé ! Nous vous répondrons sous 24h. 🎉', 'success');
      contactForm.reset();
      btn.disabled = false;
      btn.textContent = 'Envoyer le message →';
    }, 1500);
  });
}

/* ── TOAST NOTIFICATIONS ─────────────────────────────────────────── */
function showToast(message, type = 'success') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast toast-' + type;
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: ${type === 'success' ? '#1B8A4E' : '#c0392b'};
    color: white;
    padding: 14px 24px;
    border-radius: 10px;
    font-size: 0.9rem;
    font-weight: 500;
    z-index: 9999;
    box-shadow: 0 8px 32px rgba(0,0,0,0.3);
    animation: toastIn 0.4s cubic-bezier(0.22,1,0.36,1) forwards;
    max-width: 360px;
    font-family: 'DM Sans', sans-serif;
  `;

  const style = document.createElement('style');
  style.textContent = `
    @keyframes toastIn  { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
    @keyframes toastOut { from { opacity:1; transform:translateY(0); } to { opacity:0; transform:translateY(20px); } }
  `;
  document.head.appendChild(style);
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'toastOut 0.4s ease forwards';
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

/* ── ACTIVE NAV LINK au scroll ──────────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinksAll = document.querySelectorAll('.nav-links a');

const activeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinksAll.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.style.color = 'var(--pink)';
        }
      });
    }
  });
}, { threshold: 0.5 });

sections.forEach(s => activeObserver.observe(s));

console.log('%c IBEC Solutions 🚀 ', 'background:#E91E8C;color:#fff;padding:6px 12px;border-radius:4px;font-weight:700;font-size:14px;');
console.log('%c La solution IBECable — contact@ibec-solutions.fr ', 'color:#7B2FBE;font-style:italic;');
