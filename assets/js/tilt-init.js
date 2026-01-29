// tilt-init.js — Initialize VanillaTilt on project cards

export function initTilt() {
  if (typeof VanillaTilt === 'undefined') return;

  const cards = document.querySelectorAll('.project-card[data-tilt]');
  cards.forEach(card => {
    VanillaTilt.init(card, {
      max: 12,
      speed: 400,
      glare: true,
      'max-glare': 0.2,
      scale: 1.03,
      transition: true,
      perspective: 1000,
      easing: "cubic-bezier(.03,.98,.52,.99)"
    });
  });
}
