const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle?.addEventListener('click', () => {
  nav.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

document.querySelectorAll('.copy-btn').forEach((btn) => {
  btn.addEventListener('click', async () => {
    const text = btn.dataset.copy;
    try {
      await navigator.clipboard.writeText(text);
      btn.classList.add('copied');
      setTimeout(() => btn.classList.remove('copied'), 2000);
    } catch {
      const input = document.createElement('input');
      input.value = text;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      btn.classList.add('copied');
      setTimeout(() => btn.classList.remove('copied'), 2000);
    }
  });
});

document.querySelectorAll('.price-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;
    document.querySelectorAll('.price-tab').forEach((t) => t.classList.remove('active'));
    document.querySelectorAll('.price-panel').forEach((p) => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(`tab-${target}`)?.classList.add('active');
  });
});

const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const current = window.scrollY;
  if (current > 80) {
    header.style.boxShadow = '0 4px 24px rgba(0,0,0,0.3)';
  } else {
    header.style.boxShadow = 'none';
  }
  lastScroll = current;
});
