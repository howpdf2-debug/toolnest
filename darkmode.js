document.addEventListener('DOMContentLoaded', () => {
    const htmlElement = document.documentElement;
    const toggleBtn = document.querySelector('.dark-toggle');

    // Load saved preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        htmlElement.classList.add('dark');
        toggleBtn.textContent = '☀️';
    } else {
        toggleBtn.textContent = '🌙';
    }

    // Toggle function
    toggleBtn.addEventListener('click', () => {
        htmlElement.classList.toggle('dark');
        if (htmlElement.classList.contains('dark')) {
            localStorage.setItem('darkMode', 'enabled');
            toggleBtn.textContent = '☀️';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            toggleBtn.textContent = '🌙';
        }
    });
});
