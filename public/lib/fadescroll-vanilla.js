// Modern vanilla JavaScript replacement for fadescroll.js
// No jQuery dependencies

(() => {
  // Flag to track if initial animations have been applied
  let initialAnimationsApplied = false;
  
  // Animation styles are already in the CSS
  const animations = {
    top: {
      "animationName": "fade-top-active",
      "visibility": "visible"
    },
    right: {
      "animationName": "fade-right-active",
      "visibility": "visible"
    },
    left: {
      "animationName": "fade-left-active",
      "visibility": "visible"
    },
    bottom: {
      "animationName": "fade-bottom-active",
      "visibility": "visible"
    },
    none: {
      "animationName": "fade",
      "visibility": "visible"
    }
  };

  // Replacement for jQuery's fadescroll function
  function handleFadeScroll() {
    const fadeElements = document.querySelectorAll('.fade-effect');
    const windowScrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.offsetHeight;

    fadeElements.forEach(element => {
      let animationStyle = null;
      const elementRect = element.getBoundingClientRect();
      const fadeDirection = element.getAttribute('fade-direction');
      
      if (animations[fadeDirection]) {
        animationStyle = animations[fadeDirection];
      } else {
        // Default to 'none' animation if direction not specified
        animationStyle = animations['none'];
      }
      
      // Get animation duration
      const fadeTime = element.getAttribute('fade-time') || '1';

      // Apply animation in any of these cases:
      // 1. On initial page load for elements at the top (hero section)
      // 2. When element is about to enter viewport (with larger threshold for earlier trigger)
      // 3. When at the bottom of the page
      
      // Calculate if element is visible or about to be visible
      // More aggressive threshold: element is within 1.5x viewport height of being visible
      const isAboutToBeVisible = elementRect.top < windowHeight * 1.5;
      
      // Handle initial load - immediately show elements in the initial viewport
      if (!initialAnimationsApplied && elementRect.top < windowHeight) {
        Object.assign(element.style, animationStyle);
        element.style.animationDuration = `${fadeTime}s`;
      }
      // Handle scroll-triggered animations
      else if (isAboutToBeVisible) {
        Object.assign(element.style, animationStyle);
        element.style.animationDuration = `${fadeTime}s`;
      }
      
      // Also handle bottom of page
      if (windowScrollTop > bodyHeight - windowHeight * 1.2) {
        Object.assign(element.style, animationStyle);
        element.style.animationDuration = `${fadeTime}s`;
      }
    });
    
    // Mark initial animations as applied after first run
    initialAnimationsApplied = true;
  }

  // Add scroll event listener with throttling for performance
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    if (!scrollTimeout) {
      scrollTimeout = setTimeout(() => {
        handleFadeScroll();
        scrollTimeout = null;
      }, 20); // Throttle to 50fps max
    }
  });

  // Trigger animations immediately on page load, critical for hero section
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      handleFadeScroll();
    });
  } else {
    // DOM already loaded
    setTimeout(handleFadeScroll, 10);
  }
  
  // Backup in case any animations were missed
  window.addEventListener('load', () => {
    handleFadeScroll();
  });
})();
