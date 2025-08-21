const text = document.getElementById("name");
const hero = document.getElementById("hero");
const maxScroll = 600;
const minSize = 2.5;
const maxSize = 10;

window.addEventListener('scroll', () => {
  const scrollTop = Math.min(window.scrollY, maxScroll);
  const scaleFactor = scrollTop / maxScroll;
  const newSize = minSize + (maxSize - minSize) * scaleFactor;
  text.style.fontSize = `${newSize}rem`;
  text.style.color = `rgba(0, 0, 0, ${1 - scaleFactor})`;

  if (window.scrollY > maxScroll) {
    hero.classList.add("absolute");
    hero.style.position = "absolute";
  
  } else {
    hero.classList.remove("absolute");
    hero.style.position = "fixed";
 
  }
});

window.addEventListener('scroll', () => {
      if (window.scrollY > 1000) { 
        document.body.classList.add('scrolled');
      } else {
        document.body.classList.remove('scrolled');
      }
    });




    const scrollPercent = document.getElementById('scroll-percent');
    window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = Math.round((scrollTop / docHeight) * 100);
    scrollPercent.textContent = percent + '%';
    scrollPercent.style.display = 'block';
    clearTimeout(scrollPercent._hideTimeout);
    scrollPercent._hideTimeout = setTimeout(() => {
        scrollPercent.style.display = 'none';
    }, 1000);
});
window.addEventListener('mousemove', function(e) {
    scrollPercent.style.left = (e.clientX + 15) + 'px';
    scrollPercent.style.top = (e.clientY - 10) + 'px';
});
const services = document.getElementById("block");
services.addEventListener("click",function(){



  
})
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

  // Scroll to section on nav link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));

      gsap.to(window, {
        duration: 0.2,
        scrollTo: {
          y: target,
          offsetY: 0
        },
        ease: "power1.out"
      });
    });
  });

  

  
  gsap.registerPlugin(ScrollToPlugin);

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));

      // Create a GSAP timeline
      const tl = gsap.timeline();

      tl.to(window, {
        duration: 1,  // longer for visible animation
        scrollTo: {
          y: target,
          offsetY: 0
        },
        ease: "power2.out", // smooth, natural ease
      });

      // Optional: add a visual effect (e.g. section flash)
      tl.fromTo(target, 
        { backgroundColor: "#ffff99" }, 
        { backgroundColor: "", duration: 0.5, ease: "none" }, "<");
        
    });
  });




