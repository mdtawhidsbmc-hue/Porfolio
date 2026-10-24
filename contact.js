/**
 * Contact & Inquiry Module
 * Form validation, dynamic toast notifications, WhatsApp pre-fill, and copy helpers
 */

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const serviceSelect = document.getElementById('serviceSelect');
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const whatsappCtaBtn = document.getElementById('whatsappCtaBtn');
  const hireMeButtons = document.querySelectorAll('.hire-me-trigger');
  const hireModal = document.getElementById('hireModal');
  const hireModalForm = document.getElementById('hireModalForm');

  // Toast System
  window.showToast = function(message, type = 'success') {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    const iconSvg = type === 'success' 
      ? `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`
      : `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;

    toast.innerHTML = `
      <div class="toast-icon">${iconSvg}</div>
      <div class="toast-message">${message}</div>
    `;

    container.appendChild(toast);

    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 20);

    // Auto remove
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 4500);
  };

  // Form Validation & Submission
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = contactForm.querySelector('#contactName').value.trim();
      const email = contactForm.querySelector('#contactEmail').value.trim();
      const service = contactForm.querySelector('#serviceSelect').value;
      const budget = contactForm.querySelector('#budgetSelect').value;
      const message = contactForm.querySelector('#contactMessage').value.trim();
      const submitBtn = contactForm.querySelector('button[type="submit"]');

      // Validation
      if (!name) {
        showToast('Please enter your full name.', 'info');
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showToast('Please provide a valid email address.', 'info');
        return;
      }

      if (!message || message.length < 10) {
        showToast('Please share a brief description (at least 10 characters).', 'info');
        return;
      }

      // Simulate sending state
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="animation: spin 1s linear infinite;"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
        Transmitting inquiry...
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        contactForm.reset();
        showToast(`Thank you, ${name}! Your project inquiry has been received. I will reply within 6-12 hours.`);
      }, 1200);
    });
  }

  // Quick "Hire Me" Modal Submission
  if (hireModalForm) {
    hireModalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const hireName = hireModalForm.querySelector('#hireName').value.trim();
      const hireEmail = hireModalForm.querySelector('#hireEmail').value.trim();

      if (!hireName || !hireEmail) {
        showToast('Please fill in your name and email.', 'info');
        return;
      }

      hireModal.classList.remove('active');
      document.body.style.overflow = '';
      hireModalForm.reset();
      showToast(`Thanks ${hireName}! Consultation requested. Alex will contact you shortly.`);
    });
  }

  // Direct WhatsApp Button Listener
  if (whatsappCtaBtn) {
    whatsappCtaBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const selectedService = serviceSelect ? serviceSelect.value : 'creative project';
      const text = encodeURIComponent(`Hi Alex! I'm interested in discussing a ${selectedService} project with you.`);
      const waUrl = `https://wa.me/15552345678?text=${text}`;
      window.open(waUrl, '_blank');
      showToast('Redirecting to WhatsApp chat...', 'info');
    });
  }

  // Copy Email to Clipboard Helper
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = PORTFOLIO_DATA.profile.social.email;
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email address copied to clipboard! (alex.rivera.creative@example.com)');
      }).catch(() => {
        showToast('Email: alex.rivera.creative@example.com', 'info');
      });
    });
  }

  // Trigger "Hire Me" modal from buttons
  hireMeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (hireModal) {
        hireModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Global helper to select service from services cards
  window.selectServiceAndScroll = function(serviceId) {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    if (serviceSelect) {
      serviceSelect.value = serviceId;
      showToast(`Selected "${serviceId.replace('-', ' ').toUpperCase()}". Fill in your details below!`, 'info');
    }
  };
});
