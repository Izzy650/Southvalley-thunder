/* ============================================
   SOUTHVALLEY THUNDER — MAIN JS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* === NAV SCROLL === */
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });

  /* === MOBILE MENU === */
  const toggle = document.querySelector('.nav-toggle');
  const menu   = document.querySelector('.nav-menu');
  if (toggle) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
      const [a, b, c] = toggle.querySelectorAll('span');
      const open = menu.classList.contains('open');
      a.style.transform = open ? 'rotate(45deg) translate(5px,5px)' : '';
      b.style.opacity   = open ? '0' : '1';
      c.style.transform = open ? 'rotate(-45deg) translate(5px,-5px)' : '';
    });
    document.querySelectorAll('.nav-link, .nav-btn').forEach(l =>
      l.addEventListener('click', () => menu.classList.remove('open'))
    );
  }

  /* === ACTIVE NAV === */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(l => {
    if (l.getAttribute('href') === page) l.classList.add('active');
  });

  /* === SCROLL REVEALS === */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 70);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  /* === COUNT-UP === */
  const counters = document.querySelectorAll('[data-count]');
  const cio = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { countUp(e.target); cio.unobserve(e.target); }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => cio.observe(c));

  function countUp(el) {
    const target = +el.dataset.count;
    const dur = 1600;
    const start = performance.now();
    (function tick(now) {
      const p = Math.min((now - start) / dur, 1);
      el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target);
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = target;
    })(start);
  }

  /* === SCHEDULE AGE FILTER === */
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const bar = btn.closest('.filter-bar');
      bar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const age = btn.dataset.age;
      document.querySelectorAll('.game-row').forEach(row => {
        row.style.display = (age === 'all' || row.dataset.age === age) ? '' : 'none';
      });
    });
  });

  /* === CONTACT FORM === */
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('[type=submit]');
      btn.textContent = 'Message Sent!';
      btn.style.background = '#1a7a4a';
      btn.style.borderColor = '#2ac47a';
      setTimeout(() => {
        btn.textContent = 'Send Message';
        btn.style.background = '';
        btn.style.borderColor = '';
        form.reset();
      }, 3000);
    });
  }

  /* === COUNTDOWN === */
  const cd = document.getElementById('countdown');
  if (cd) {
    const target = new Date('2026-04-19T15:00:00');
    function tick() {
      const diff = target - new Date();
      if (diff <= 0) return;
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      ['d','h','m','s'].forEach((k,i) => {
        const el = document.getElementById('cd-'+k);
        if (el) el.textContent = String([d,h,m,s][i]).padStart(2,'0');
      });
    }
    tick(); setInterval(tick, 1000);
  }

});
