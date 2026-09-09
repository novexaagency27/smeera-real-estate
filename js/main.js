/**
 * S. MEERA REAL ESTATE — MAIN JAVASCRIPT
 * Simple, Fast, Zero Dependencies
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileDrawer();
  initYear();
  initContactPageForm();
});

// Sticky Header Detection
function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

// Mobile Navigation Drawer
function initMobileDrawer() {
  const toggleBtn = document.querySelector('.menu-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const overlay = document.querySelector('.mobile-drawer-overlay');
  const closeBtn = document.querySelector('.mobile-drawer-close');
  const drawerLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !drawer || !overlay) return;

  const openDrawer = () => {
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    toggleBtn.setAttribute('aria-expanded', 'true');
  };

  const closeDrawer = () => {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    toggleBtn.setAttribute('aria-expanded', 'false');
  };

  toggleBtn.addEventListener('click', openDrawer);
  closeBtn?.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);
  drawerLinks.forEach(link => link.addEventListener('click', closeDrawer));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });
}

// Year Helper
function initYear() {
  const yearEls = document.querySelectorAll('.current-year');
  const currentYear = new Date().getFullYear();
  yearEls.forEach(el => {
    el.textContent = currentYear;
  });
}

// WhatsApp URL Creator
function createWhatsAppUrl(message) {
  const phone = '919737035770';
  const encodedMsg = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMsg}`;
}

// Contact Page Simple Form
function initContactPageForm() {
  const form = document.getElementById('simple-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name')?.value.trim();
    const phone = document.getElementById('contact-phone')?.value.replace(/\D/g, '');
    const service = document.getElementById('contact-service')?.value || 'General Property Guidance';
    const message = document.getElementById('contact-message')?.value.trim();

    if (!name) {
      alert('Please enter your name.');
      return;
    }

    if (!phone || phone.length < 10) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }

    const waText = `Hello S. Meera Real Estate,

I would like to get in touch regarding:
• Requirement / Query: ${service}

Name: ${name}
Mobile: ${phone}
${message ? 'Message:\n' + message : ''}

Please contact me.`;

    window.open(createWhatsAppUrl(waText), '_blank');
  });
}
