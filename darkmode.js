/* ToolNest Dark Mode Handler */
(function(){
  const H = document.documentElement;
  const K = 'tn-dark';
  const stored = localStorage.getItem(K);
  const sys = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (stored === 'true' || (stored === null && sys)) H.classList.add('dark');

  function sync() {
    const d = H.classList.contains('dark');
    document.querySelectorAll('.btn-dark-toggle').forEach(b => {
      b.textContent = d ? '☀️' : '🌙';
      b.title = d ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    });
  }

  document.addEventListener('click', function(e) {
    if (e.target.closest('.btn-dark-toggle')) {
      const d = H.classList.toggle('dark');
      localStorage.setItem(K, d);
      sync();
    }
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', sync);
  } else {
    sync();
  }

  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (localStorage.getItem(K) === null) {
        H.classList.toggle('dark', e.matches);
        sync();
      }
    });
  }
})();
