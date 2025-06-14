const toggleSwitch = document.getElementById('darkModeSwitch');
const root = document.documentElement;


  // Only use time-based logic if no saved theme
  const now = new Date();
  if (now.getHours() >= 6 && now.getHours() < 18) {
    // Between 6am and 6pm: light mode
    root.setAttribute('data-theme', 'light');
    document.body.classList.remove('dark');
    toggleSwitch.checked = false;
  } else {
    // Between 6pm and 6am: dark mode
    root.setAttribute('data-theme', 'dark');
    document.body.classList.add('dark');
    toggleSwitch.checked = true;
  }




// ...your scroll percent code...
const content = document.getElementById('CONTENT');
const scrollPercent = document.getElementById('scroll-percent');

// Show and update scroll percent on scroll
content.addEventListener('scroll', function(e) {
    const percent = Math.round(
        (content.scrollTop / (content.scrollHeight - content.clientHeight)) * 100
    );
    scrollPercent.textContent = percent + '%';
    scrollPercent.style.display = 'block';
    // Optionally, hide after a short delay
    clearTimeout(scrollPercent._hideTimeout);
    scrollPercent._hideTimeout = setTimeout(() => {
        scrollPercent.style.display = 'none';
    }, 1000);
});

// Move scroll percent to cursor position inside #CONTENT
content.addEventListener('mousemove', function(e) {
    const rect = content.getBoundingClientRect();
    scrollPercent.style.left = (e.clientX + 15) + 'px';
    scrollPercent.style.top = (e.clientY - 10) + 'px';
});