(() => {
  'use strict';
  const config = window.MARRON_COCO_C || {};
  const lineLink = document.querySelector('#teacher-line');
  try {
    const lineUrl = config.lineUrl && new URL(config.lineUrl);
    if (lineLink && lineUrl && lineUrl.protocol === 'https:') {
      lineLink.href = lineUrl.href;
      lineLink.target = '_blank';
      lineLink.rel = 'noopener noreferrer';
      lineLink.removeAttribute('aria-disabled');
      lineLink.removeAttribute('role');
      lineLink.classList.remove('social-pending');
      lineLink.setAttribute('aria-label', 'LINE（新しいタブで開く）');
      lineLink.title = 'LINE';
    }
  } catch (_) { /* Keep an unfinished LINE URL inactive. */ }
  const status = document.querySelector('#open-text');
  if (config.openText) status.textContent = config.openText;
  const link = document.querySelector('#booking-link');
  try {
    const url = config.bookingUrl && new URL(config.bookingUrl);
    if (url && url.protocol === 'https:') {
      link.href = url.href;
      link.hidden = false;
      document.querySelector('#pending-note').hidden = true;
    }
  } catch (_) { /* An incomplete URL must never become a broken action. */ }
  const quiet = matchMedia('(prefers-reduced-motion: reduce)');
  const hero = document.querySelector('.hero');
  const heroCake = document.querySelector('.hero-cake');
  const lesson = document.querySelector('#lesson');
  const dock = document.querySelector('.lesson-dock');
  const clamp = v => Math.max(0, Math.min(1, v));
  let pending = false;
  let previousY = scrollY;
  let goingUp = false;
  function draw() {
    pending = false;
    const pastHero = hero.getBoundingClientRect().bottom < 0;
    const beforeLesson = lesson.getBoundingClientRect().top > innerHeight * .8;
    const delta = scrollY - previousY;
    if (Math.abs(delta) > 3) goingUp = delta < 0;
    previousY = scrollY;
    const show = pastHero && beforeLesson && goingUp;
    dock.classList.toggle('is-visible', show);
    dock.tabIndex = show ? 0 : -1;
    dock.setAttribute('aria-hidden', String(!show));
    if (quiet.matches) {
      heroCake.style.transform = '';
      return;
    }
    const p = clamp(-hero.getBoundingClientRect().top / hero.offsetHeight);
    heroCake.style.transform = `translate(-50%, ${p * 7}%) rotate(${-10 + p * 4}deg)`;

  }
  function schedule() { if (!pending) { pending = true; requestAnimationFrame(draw); } }
  addEventListener('scroll', schedule, {passive:true});
  addEventListener('resize', schedule, {passive:true});
  quiet.addEventListener('change', schedule);
  if ('IntersectionObserver' in window && !quiet.matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('motion-in'); observer.unobserve(entry.target); }
    }), {threshold:.2});
    document.querySelectorAll('.inside-title,.inside-note,.berry h2,.share h2,.table-copy').forEach(el => observer.observe(el));
  }
  draw();
})();
