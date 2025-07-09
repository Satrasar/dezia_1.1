// Daha akıcı ve kontrollü scroll
export function smoothScrollTo(target: HTMLElement, duration: number = 2500) {
  const targetPosition = target.offsetTop - 80; // Header yüksekliği için offset
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    // Easing function - daha yumuşak geçiş
    const ease = easeInOutCubic(progress);
    
    window.scrollTo(0, startPosition + (distance * ease));
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }
  
  requestAnimationFrame(animation);
}

// Easing function
function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}

// Scroll to section by ID
export function scrollToSection(sectionId: string, duration: number = 2500) {
  const target = document.getElementById(sectionId.replace('#', ''));
  if (target) {
    smoothScrollTo(target, duration);
  }
}