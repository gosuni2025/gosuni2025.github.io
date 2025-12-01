import './style.css'

// Simple scroll effect for header
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.background = 'rgba(10, 10, 10, 0.95)';
    header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
  } else {
    header.style.background = 'rgba(10, 10, 10, 0.9)';
    header.style.boxShadow = 'none';
  }
});

console.log('Zombie Defense Landing Page Loaded');
