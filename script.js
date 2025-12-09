const nav = document.getElementById('nav');
const toggle = document.getElementById('navToggle');

toggle.addEventListener('click', () => {
  const shown = nav.style.display === 'flex';
  nav.style.display = shown ? 'none' : 'flex';
  if (!shown) {
    nav.style.position = 'fixed';
    nav.style.top = '56px';
    nav.style.right = '12px';
    nav.style.flexDirection = 'column';
    nav.style.background = 'linear-gradient(180deg, rgba(8,10,12,0.92), rgba(8,10,12,0.96))';
    nav.style.padding = '10px';
    nav.style.borderRadius = '12px';
    nav.style.gap = '8px';
  } else {
    // reset to desktop styles
    nav.removeAttribute('style');
  }
});

