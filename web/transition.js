document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const linkRect = link.getBoundingClientRect();
      const linkText = link.textContent;
      const href = link.getAttribute('href');
      
      // Get the current title element
      const currentTitle = document.querySelector('.title');
      const titleRect = currentTitle.getBoundingClientRect();
      const titleText = currentTitle.textContent;
      const titleFontSize = window.getComputedStyle(currentTitle).fontSize;
      
      // Create clone of the nav link text (moving to header position)
      const navClone = document.createElement('div');
      navClone.textContent = linkText;
      navClone.style.cssText = `
        position: fixed;
        top: ${linkRect.top}px;
        left: ${linkRect.left}px;
        font-family: "patchy-robots", sans-serif;
        font-size: 1.1rem;
        color: #f5f5f5;
        padding: 12px 24px;
        z-index: 1000;
        pointer-events: none;
        transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        letter-spacing: 0.05em;
      `;
      
      // Create clone of the title text (moving to nav position)
      const titleClone = document.createElement('div');
      titleClone.textContent = titleText;
      titleClone.style.cssText = `
        position: fixed;
        top: ${titleRect.top}px;
        left: 50%;
        transform: translateX(-50%);
        font-family: "patchy-robots", sans-serif;
        font-size: ${titleFontSize};
        color: #f5f5f5;
        z-index: 1000;
        pointer-events: none;
        transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        letter-spacing: 0.05em;
        text-align: center;
      `;
      
      document.body.appendChild(navClone);
      document.body.appendChild(titleClone);
      
      // Force a reflow to ensure the initial positions are set
      navClone.offsetHeight;
      titleClone.offsetHeight;
      
      // Fade out the body content
      document.body.style.transition = 'opacity 0.3s ease-out';
      
      // Animate both clones simultaneously
      requestAnimationFrame(() => {
        // Animate nav link to title position
        navClone.style.top = `${titleRect.top}px`;
        navClone.style.left = '50%';
        navClone.style.transform = 'translateX(-50%)';
        navClone.style.fontSize = titleFontSize;
        navClone.style.padding = '0';
        navClone.style.textAlign = 'center';
        
        // Animate title to nav position
        titleClone.style.top = `${linkRect.top}px`;
        titleClone.style.left = `${linkRect.left}px`;
        titleClone.style.transform = 'none';
        titleClone.style.fontSize = '1.1rem';
        titleClone.style.padding = '12px 24px';
        titleClone.style.textAlign = 'left';
        
        // Start fading out body after a small delay
        setTimeout(() => {
          document.body.style.opacity = '0.3';
        }, 200);
      });
      
      // Navigate after animation
      setTimeout(() => {
        window.location.href = href;
      }, 600);
    });
  });
});