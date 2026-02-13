// includes/include.js
// Component loader for header and footer

document.addEventListener('DOMContentLoaded', function() {
  // Load header component
  const headerContainer = document.getElementById('header');
  if (headerContainer) {
    fetch('/includes/header.html')
      .then(response => {
        if (!response.ok) {
          console.warn('Header load failed:', response.status);
          return;
        }
        return response.text();
      })
      .then(data => {
        if (data) {
          headerContainer.innerHTML = data;
          // Initialize header functionality after loading
          initializeDropdown();
          initializeDarkToggle();
        }
      })
      .catch(error => console.warn('Header fetch error:', error));
  }

  // Load footer component
  const footerContainer = document.getElementById('footer');
  if (footerContainer) {
    fetch('/includes/footer.html')
      .then(response => {
        if (!response.ok) {
          console.warn('Footer load failed:', response.status);
          return;
        }
        return response.text();
      })
      .then(data => {
        if (data) {
          footerContainer.innerHTML = data;
        }
      })
      .catch(error => console.warn('Footer fetch error:', error));
  }
});

// Initialize dropdown functionality
function initializeDropdown() {
  const dropdownBtn = document.getElementById('toolsDropdownBtn');
  const dropdownContent = document.getElementById('toolsDropdown');

  if (dropdownBtn && dropdownContent) {
    dropdownBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      dropdownContent.classList.toggle('show');
    });

    // Close dropdown when clicking on a link
    const dropdownLinks = dropdownContent.querySelectorAll('a');
    dropdownLinks.forEach(link => {
      link.addEventListener('click', function() {
        dropdownContent.classList.remove('show');
      });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.dropdown')) {
        dropdownContent.classList.remove('show');
      }
    });
  }
}

// Initialize dark mode toggle
function initializeDarkToggle() {
  const darkToggleBtn = document.getElementById('darkToggle');
  
  if (darkToggleBtn) {
    // Load saved preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      document.documentElement.classList.add('dark');
      darkToggleBtn.textContent = '☀️';
    } else {
      darkToggleBtn.textContent = '🌙';
    }

    // Toggle dark mode on click
    darkToggleBtn.addEventListener('click', function() {
      document.documentElement.classList.toggle('dark');
      const isDark = document.documentElement.classList.contains('dark');
      localStorage.setItem('darkMode', isDark);
      darkToggleBtn.textContent = isDark ? '☀️' : '🌙';
    });
  }
}
