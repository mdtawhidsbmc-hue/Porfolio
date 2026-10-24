/**
 * Portfolio Module
 * Handles filterable gallery tabs, image lightbox, video player modal, and case studies
 */

document.addEventListener('DOMContentLoaded', () => {
  const portfolioGrid = document.getElementById('portfolioGrid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const imageModal = document.getElementById('imageModal');
  const videoModal = document.getElementById('videoModal');
  const imageModalContent = document.getElementById('imageModalContent');
  const videoPlayerContainer = document.getElementById('videoPlayerContainer');
  const videoTitleElem = document.getElementById('videoModalTitle');
  const videoSubElem = document.getElementById('videoModalSubtitle');

  let currentCategory = 'all';
  let activeModalItem = null;

  // Initialize Portfolio Grid
  function renderPortfolio(filter = 'all') {
    if (!portfolioGrid) return;
    
    portfolioGrid.innerHTML = '';
    const items = PORTFOLIO_DATA.portfolioItems.filter(item => {
      if (filter === 'all') return true;
      return item.category === filter;
    });

    items.forEach(item => {
      const card = document.createElement('div');
      card.className = `portfolio-card ${item.category}`;
      card.setAttribute('data-id', item.id);

      // Determine badge label
      let badgeLabel = 'Graphic Design';
      let badgeClass = 'graphic';
      let actionIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"></path><path d="M10 14L21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>`;

      if (item.category === 'video-editing') {
        badgeLabel = 'Video & Motion';
        badgeClass = 'video';
        actionIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`;
      } else if (item.category === 'digital-marketing') {
        badgeLabel = 'Digital Marketing';
        badgeClass = 'marketing';
        actionIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`;
      }

      card.innerHTML = `
        <div class="portfolio-media-box">
          <span class="card-category-badge ${badgeClass}">${badgeLabel}</span>
          <img src="${item.image}" alt="${item.title}" loading="lazy" />
          <div class="portfolio-overlay">
            <span class="overlay-action-btn" title="View details">
              ${actionIcon}
            </span>
          </div>
        </div>
        <div class="portfolio-card-body">
          <h3 class="portfolio-card-title">${item.title}</h3>
          <p class="portfolio-card-subtitle">${item.subtitle}</p>
          <div class="portfolio-tag-list">
            ${item.tags.map(t => `<span class="portfolio-tag">${t}</span>`).join('')}
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        openPortfolioItemModal(item);
      });

      portfolioGrid.appendChild(card);
    });
  }

  // Handle Filtering
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter');
      renderPortfolio(currentCategory);
    });
  });

  // Open item modal (Image Lightbox vs Video Player vs Case Study)
  function openPortfolioItemModal(item) {
    activeModalItem = item;

    if (item.category === 'video-editing') {
      openVideoModal(item);
    } else {
      openImageModal(item);
    }
  }

  // Lightbox Modal for Graphic Design & Marketing
  function openImageModal(item) {
    if (!imageModal || !imageModalContent) return;

    let badgeClass = item.category === 'digital-marketing' ? 'emerald' : 'purple';
    let categoryName = item.category === 'digital-marketing' ? 'Digital Marketing Case Study' : 'Graphic Design Showcase';

    imageModalContent.innerHTML = `
      <div class="lightbox-body">
        <div class="lightbox-media-container">
          <img src="${item.image}" alt="${item.title}" />
        </div>
        <div class="lightbox-info-container">
          <span class="modal-badge ${badgeClass}">${categoryName}</span>
          <h2 class="modal-title">${item.title}</h2>
          <p class="modal-subtitle">${item.subtitle}</p>
          <p class="modal-description">${item.description}</p>
          
          <div class="modal-meta-table">
            <div class="modal-meta-row">
              <span class="meta-label">Client</span>
              <span class="meta-val">${item.client}</span>
            </div>
            <div class="modal-meta-row">
              <span class="meta-label">Project Timeline</span>
              <span class="meta-val">${item.duration}</span>
            </div>
            <div class="modal-meta-row">
              <span class="meta-label">Impact Metric</span>
              <span class="meta-val" style="color: var(--accent-cyan);">${item.highlight}</span>
            </div>
          </div>

          <div class="modal-deliverables-box">
            <h4 class="modal-deliverables-title">Key Deliverables & Assets</h4>
            <ul class="modal-deliverables-list">
              ${item.deliverables.map(d => `
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>${d}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <button class="btn btn-primary btn-full" id="inquireThisProjectBtn">
            Inquire About Similar Project →
          </button>
        </div>
      </div>
    `;

    imageModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Hook CTA inside modal to open contact form with pre-selected service
    const inquireBtn = imageModalContent.querySelector('#inquireThisProjectBtn');
    if (inquireBtn) {
      inquireBtn.addEventListener('click', () => {
        closeModals();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
        const serviceSelect = document.getElementById('serviceSelect');
        if (serviceSelect) {
          serviceSelect.value = item.category;
        }
      });
    }
  }

  // Video Player Modal
  function openVideoModal(item) {
    if (!videoModal || !videoPlayerContainer) return;

    if (videoTitleElem) videoTitleElem.textContent = item.title;
    if (videoSubElem) videoSubElem.textContent = `${item.subtitle} • Tools: ${item.tags.join(', ')}`;

    // Interactive video player embedding:
    // We provide a responsive player iframe with fallback HTML5 video simulation
    videoPlayerContainer.innerHTML = `
      <div style="width: 100%; height: 100%; background: #000; position: relative; display: flex; align-items: center; justify-content: center; overflow: hidden;">
        <img src="${item.image}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: cover; filter: brightness(0.7);" />
        
        <!-- Live Interactive Simulation Canvas / Playback Overlay -->
        <div style="position: absolute; inset: 0; background: radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, rgba(0,0,0,0.85) 100%); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1.25rem;">
          <div style="width: 80px; height: 80px; border-radius: 50%; background: var(--gradient-primary); display: flex; align-items: center; justify-content: center; box-shadow: 0 0 35px rgba(139, 92, 246, 0.6); cursor: pointer;" id="simulationPlayBtn">
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="#FFFFFF"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          </div>
          <div style="text-align: center; max-width: 460px; padding: 0 1rem;">
            <p style="color: #FFFFFF; font-weight: 800; font-size: 1.2rem; font-family: var(--font-display);">${item.title}</p>
            <p style="color: #94A3B8; font-size: 0.85rem; margin-top: 0.35rem;">Ultra HD 4K Master • Color Graded &amp; Mixed</p>
          </div>
          <div style="display: flex; gap: 0.75rem; align-items: center;">
            <span style="display: inline-flex; align-items: center; gap: 0.4rem; font-size: 0.75rem; font-weight: 700; color: #10B981; background: rgba(16, 185, 129, 0.2); padding: 0.3rem 0.8rem; border-radius: 999px;">
              ● 60 FPS ProRes Render Ready
            </span>
          </div>
        </div>
      </div>
    `;

    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    const playBtn = videoPlayerContainer.querySelector('#simulationPlayBtn');
    if (playBtn) {
      playBtn.addEventListener('click', () => {
        // Swap to embed video when clicked
        videoPlayerContainer.innerHTML = `
          <iframe 
            src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0&controls=1" 
            title="${item.title}" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen 
            style="width: 100%; height: 100%; border: none;">
          </iframe>
        `;
      });
    }
  }

  // Close Modals
  function closeModals() {
    if (imageModal) imageModal.classList.remove('active');
    if (videoModal) {
      videoModal.classList.remove('active');
      if (videoPlayerContainer) videoPlayerContainer.innerHTML = '';
    }
    const hireModal = document.getElementById('hireModal');
    if (hireModal) hireModal.classList.remove('active');
    
    document.body.style.overflow = '';
    activeModalItem = null;
  }

  // Close buttons and overlay click listeners
  document.querySelectorAll('.modal-close-btn, .modal-overlay').forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target === el || e.target.closest('.modal-close-btn')) {
        closeModals();
      }
    });
  });

  // Keyboard navigation (Escape key)
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModals();
    }
  });

  // Initial render
  renderPortfolio('all');
});
