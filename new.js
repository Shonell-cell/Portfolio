
  const MIN_BOOT_TIME = 2500; // milliseconds (2.5 seconds)
  const startTime = Date.now();

  window.addEventListener("load", () => {
    const elapsed = Date.now() - startTime;
    const remaining = Math.max(MIN_BOOT_TIME - elapsed, 0);

    setTimeout(() => {
      clearInterval(dotInterval);
      bootScreen.style.opacity = "0";
      bootScreen.style.pointerEvents = "none";
    }, remaining);
  });

  // greeting handled by the typewriter section below


const heroText = document.getElementById("pp");

// Time-based greeting
const hour = new Date().getHours();
let greeting;

if (hour < 12) {
  greeting = "Good morning";
} else if (hour < 18) {
  greeting = "Good Afternoon";
} else {
  greeting = "Good Evening";
}
const fullText = `${greeting} Welcome To My Portfolio.`;

// Typewriter effect
let index = 0;
const speed = 60; // typing speed (ms)

function typeWriter() {
  if (index < fullText.length) {
    heroText.textContent += fullText.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

// Start typing AFTER boot screen fades 
window.addEventListener("load", () => {
  setTimeout(typeWriter, 600); // sync with boot screen duration
});


const nav = document.getElementById('nav')
nav.addEventListener('mouseenter', (e) => {
  document.getElementById('navlist').style.display = 'grid';
  document.getElementById('nav').style.height = '330px';
  document.getElementById("ptag").style.display ="none";
 
});

nav.addEventListener('mouseleave', (e) => {
  document.getElementById('navlist').style.display = 'none';
   document.getElementById('nav').style.height = '70px';
  document.getElementById("ptag").style.display ="block";
 
});


