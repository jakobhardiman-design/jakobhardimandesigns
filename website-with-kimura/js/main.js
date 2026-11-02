/* ── Align desktop clock with logo circle ── */
function alignClock() {
  const dot   = document.querySelector('.nav-dot');
  const clock = document.getElementById('clock');
  if (!dot || !clock) return;
  if (window.innerWidth >= 1024) {
    clock.style.paddingLeft = dot.getBoundingClientRect().left + 'px';
  } else {
    clock.style.paddingLeft = '';
  }
}
alignClock();
window.addEventListener('resize', alignClock);

/* ── Clock ── */
function updateClock() {
  const pad = n => String(n).padStart(2, '0');
  const now = new Date();
  const t = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  const desktop = document.getElementById('clock');
  const mobile  = document.getElementById('mobile-clock');
  if (desktop) desktop.textContent = t;
  if (mobile)  mobile.textContent  = t;
}
updateClock();
setInterval(updateClock, 1000);

/* ── Slideshows ── */
document.querySelectorAll('[data-slideshow]').forEach(show => {
  const track       = show.querySelector('.slides-track');
  const slides      = show.querySelectorAll('.slide');
  const prevBtn     = show.querySelector('.arrow-btn.prev');
  const nextBtn     = show.querySelector('.arrow-btn.next');
  const project     = show.closest('.project');
  const counterText = project.querySelector('.counter-text');
  const dots        = project.querySelectorAll('.dot');
  const total       = slides.length;
  let current       = 0;

  function go(i) {
    current = Math.max(0, Math.min(total - 1, i));
    track.style.transform = `translateX(-${current * 100}%)`;
    counterText.textContent = `${current + 1} / ${total}`;
    dots.forEach((d, j) => d.classList.toggle('active', j === current));
    prevBtn.classList.toggle('disabled', current === 0);
    nextBtn.classList.toggle('disabled', current === total - 1);
  }

  prevBtn.addEventListener('click', () => go(current - 1));
  nextBtn.addEventListener('click', () => go(current + 1));
  dots.forEach((d, i) => d.addEventListener('click', () => go(i)));

  /* Touch swipe */
  const vp = show.querySelector('.slides-viewport');
  let touchStartX = 0;
  vp.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  vp.addEventListener('touchend', e => {
    const dx = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(dx) > 40) go(dx > 0 ? current + 1 : current - 1);
  }, { passive: true });

  go(0);
});

