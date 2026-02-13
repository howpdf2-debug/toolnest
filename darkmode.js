// darkmode.js
// Dark mode toggle functionality

document.addEventListener('DOMContentLoaded', function() {
  // Check if dark mode is already enabled
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  
  if (isDarkMode) {
    document.documentElement.classList.add('dark');
  }
});

// Listen for dark toggle button
document.addEventListener('click', function(e) {
  if (e.target.id === 'darkToggle') {
    e.preventDefault();
    toggleDarkMode();
  }
});

function toggleDarkMode() {
  const html = document.documentElement;
  const isDarkMode = html.classList.toggle('dark');
  
  // Save preference to localStorage
  localStorage.setItem('darkMode', isDarkMode);
  
  // Update button emoji
  const darkToggle = document.getElementById('darkToggle');
  if (darkToggle) {
    darkToggle.textContent = isDarkMode ? '☀️' : '🌙';
  }
}

// Handle system preference changes
if (window.matchMedia) {
  window.matchMedia('(prefers-color-scheme: dark)').addListener(e => {
    if (e.matches && localStorage.getItem('darkMode') === null) {
      document.documentElement.classList.add('dark');
    }
  });
}
