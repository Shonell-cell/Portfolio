const text = document.querySelector('.port');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  text.style.transform = `translateY(${scrollY * 0.4}px)`;
});
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
        bar.nextElementSibling.style.opacity = 1;
      });
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('#skills').forEach(s => barObserver.observe(s));
function scrollToContact() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}
document.getElementById('footer').querySelector('p').innerHTML = 
  `© ${new Date().getFullYear()} Shonell Shanu. All rights reserved.`;

  const video = document.querySelector('video');
const loader = document.getElementById('loader');

video.addEventListener('canplaythrough', () => {
  loader.style.opacity = '0';
  setTimeout(() => loader.style.display = 'none', 500);
});