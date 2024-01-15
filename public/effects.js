// function isTouchDevice() {
//   return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
// }

// if (isTouchDevice()) {
//   console.debug('Lo schermo è touch-enabled.');
// } else {
//   console.debug('Lo schermo non è touch-enabled.');

// }

function handler({pageX, pageY}) {
  document.body.style.setProperty('--cursor-x', `${pageX}px`);
  document.body.style.setProperty('--cursor-y', `${pageY}px`);
}
window.addEventListener('mousemove', handler);


const viewportObserver = new IntersectionObserver((entries, obs) => {
  for (const e of entries) {
    if (e.isIntersecting) {
      e.target.classList.remove("animate-on-view");
    } else {
      e.target.classList.add("animate-on-view");
    }
  }
}, { threshold: 0.25 });

const mainSections = document.querySelectorAll("main .animate-on-view");


for (const section of mainSections) {
  viewportObserver.observe(section);
}