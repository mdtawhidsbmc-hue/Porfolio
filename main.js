/**
 * ALEX RIVERA | PROFESSIONAL PORTFOLIO
 * Main Application Orchestrator & UI Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const siteHeader = document.getElementById('siteHeader');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const themeToggle = document.getElementById('themeToggle');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const particlesCanvas = document.getElementById('particlesCanvas');

  // --- 1. Sticky Navigation & Scroll Spy ---
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }

    updateActiveNavLink();
  });

  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // --- 2. Mobile Drawer Navigation ---
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('open');
      navLinks.classList.toggle('open');
      document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    });

    // Close mobile menu when clicking any nav link
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('open');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // --- 3. Back to Top Button ---
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- 4. Theme Switcher (Dark / Light) ---
  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    updateThemeIcon(true);
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isLight = document.body.classList.toggle('light-theme');
      localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
      updateThemeIcon(isLight);
    });
  }

  function updateThemeIcon(isLight) {
    if (!themeToggle) return;
    if (isLight) {
      themeToggle.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      `;
      themeToggle.setAttribute('title', 'Switch to Dark Mode');
    } else {
      themeToggle.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      `;
      themeToggle.setAttribute('title', 'Switch to Light Mode');
    }
  }

  // --- 5. Render Dynamic Services Cards ---
  const servicesContainer = document.getElementById('servicesGrid');
  if (servicesContainer && PORTFOLIO_DATA.services) {
    servicesContainer.innerHTML = '';
    const badgeColors = ['purple', 'cyan', 'emerald'];

    PORTFOLIO_DATA.services.forEach((service, index) => {
      const card = document.createElement('div');
      card.className = 'service-card';
      const badgeClass = badgeColors[index % badgeColors.length];

      // Service icon
      let iconSvg = '';
      if (service.icon === 'palette') {
        iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>`;
      } else if (service.icon === 'film') {
        iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>`;
      } else {
        iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>`;
      }

      card.innerHTML = `
        <span class="service-badge ${badgeClass}">${service.badge}</span>
        <div class="service-icon-box">${iconSvg}</div>
        <h3 class="service-title">${service.title}</h3>
        <p class="service-tagline">${service.tagline}</p>
        
        <h4 class="service-deliverables-title">Deliverables & Scope</h4>
        <ul class="service-feature-list">
          ${service.features.map(f => `
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>${f}</span>
            </li>
          `).join('')}
        </ul>

        <div class="service-meta-footer">
          <div class="service-turnaround">
            <span>Avg. Turnaround:</span>
            <strong>${service.turnaround}</strong>
          </div>
          <button class="btn btn-secondary btn-full" onclick="selectServiceAndScroll('${service.id}')">
            Request Service →
          </button>
        </div>
      `;

      servicesContainer.appendChild(card);
    });
  }

  // --- 6. Render Dynamic Skills & Progress Bars ---
  const skillsColumn = document.getElementById('skillsColumn');
  if (skillsColumn && PORTFOLIO_DATA.skills) {
    skillsColumn.innerHTML = '';

    PORTFOLIO_DATA.skills.forEach(cat => {
      const card = document.createElement('div');
      card.className = 'skill-category-card';

      card.innerHTML = `
        <div class="skill-cat-header">
          <div class="skill-cat-title-wrap">
            <h3 class="skill-cat-name">${cat.category}</h3>
          </div>
        </div>
        <p style="font-size: 0.885rem; color: var(--text-muted); margin-bottom: 1rem;">${cat.description}</p>
        
        <div class="tool-tags-wrap">
          ${cat.tools.map(tool => `<span class="tool-tag">${tool}</span>`).join('')}
        </div>

        <div class="skill-bars-list">
          ${cat.items.map(item => `
            <div class="skill-bar-row">
              <div class="skill-meta">
                <span class="skill-name">${item.name}</span>
                <span class="skill-percent">${item.level}%</span>
              </div>
              <div class="progress-track">
                <div class="progress-fill" data-progress="${item.level}"></div>
              </div>
            </div>
          `).join('')}
        </div>
      `;

      skillsColumn.appendChild(card);
    });

    // Animate Progress Bars when in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fills = entry.target.querySelectorAll('.progress-fill');
          fills.forEach(f => {
            const width = f.getAttribute('data-progress');
            f.style.width = `${width}%`;
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.skill-category-card').forEach(card => observer.observe(card));
  }

  // --- 7. Render Achievements & Certifications Banner ---
  const achievementsContainer = document.getElementById('achievementsGrid');
  if (achievementsContainer && PORTFOLIO_DATA.achievements) {
    achievementsContainer.innerHTML = '';
    PORTFOLIO_DATA.achievements.forEach(ach => {
      const el = document.createElement('div');
      el.className = 'achievement-card';
      el.innerHTML = `
        <div class="achievement-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
        </div>
        <div class="achievement-info">
          <h4>${ach.title}</h4>
          <p>${ach.org} • <strong>${ach.year}</strong></p>
        </div>
      `;
      achievementsContainer.appendChild(el);
    });
  }

  // --- 8. Interactive Hero Particle Canvas ---
  if (particlesCanvas) {
    const ctx = particlesCanvas.getContext('2d');
    let width = particlesCanvas.width = window.innerWidth;
    let height = particlesCanvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = particlesCanvas.width = window.innerWidth;
      height = particlesCanvas.height = window.innerHeight;
    });

    const particles = [];
    const particleCount = Math.min(Math.floor(window.innerWidth / 22), 60);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        color: Math.random() > 0.5 ? 'rgba(139, 92, 246, 0.4)' : 'rgba(6, 182, 212, 0.35)'
      });
    }

    function renderParticles() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Connect nearby particles with subtle line
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.15 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(renderParticles);
    }

    renderParticles();
  }
});
