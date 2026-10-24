/**
 * Testimonials Carousel Module
 * Handles touch-enabled responsive reviews slider with auto-play & pagination dots
 */

document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('testimonialsTrack');
  const prevBtn = document.getElementById('sliderPrevBtn');
  const nextBtn = document.getElementById('sliderNextBtn');
  const dotsContainer = document.getElementById('sliderDots');

  if (!track || !PORTFOLIO_DATA.testimonials) return;

  let currentIndex = 0;
  const testimonials = PORTFOLIO_DATA.testimonials;
  const totalSlides = testimonials.length;
  let autoplayTimer = null;

  // Render Testimonial Slides
  function initTestimonials() {
    track.innerHTML = '';
    if (dotsContainer) dotsContainer.innerHTML = '';

    testimonials.forEach((item, index) => {
      // Slide element
      const slide = document.createElement('div');
      slide.className = 'testimonial-slide';
      
      // Star SVGs
      const starsHtml = Array(item.rating).fill(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      `).join('');

      slide.innerHTML = `
        <div class="testimonial-card">
          <div class="testimonial-stars">
            ${starsHtml}
          </div>
          <p class="testimonial-quote">"${item.quote}"</p>
          <div class="testimonial-author-row">
            <div class="author-profile">
              <div class="author-avatar">
                <img src="${item.avatar}" alt="${item.name}" loading="lazy" />
              </div>
              <div class="author-info">
                <h4>${item.name}</h4>
                <p>${item.role} • <strong>${item.company}</strong></p>
              </div>
            </div>
            <span class="testimonial-project-pill">${item.project}</span>
          </div>
        </div>
      `;

      track.appendChild(slide);

      // Pagination dot
      if (dotsContainer) {
        const dot = document.createElement('button');
        dot.className = `slider-dot ${index === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Go to testimonial slide ${index + 1}`);
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
      }
    });

    updateSlider();
    startAutoplay();
  }

  function updateSlider() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update dots
    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.slider-dot');
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentIndex);
      });
    }
  }

  function goToSlide(index) {
    currentIndex = (index + totalSlides) % totalSlides;
    updateSlider();
    resetAutoplay();
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  // Button Listeners
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);

  // Autoplay Logic
  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(nextSlide, 6000);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  // Pause on hover
  track.addEventListener('mouseenter', stopAutoplay);
  track.addEventListener('mouseleave', startAutoplay);

  // Touch Swipe Support
  let touchStartX = 0;
  let touchEndX = 0;

  track.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    stopAutoplay();
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
    startAutoplay();
  }, { passive: true });

  function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
      nextSlide();
    } else if (touchEndX > touchStartX + swipeThreshold) {
      prevSlide();
    }
  }

  initTestimonials();
});
