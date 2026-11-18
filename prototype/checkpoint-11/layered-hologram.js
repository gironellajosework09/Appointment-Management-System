(() => {
  const stages = [...document.querySelectorAll('[data-hologram]')];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const small = matchMedia('(max-width: 700px)');
  const fine = matchMedia('(pointer: fine)');
  const visible = new Set();
  let paused = false;

  const eligible = () => !reduced.matches && !small.matches && !navigator.connection?.saveData && 'IntersectionObserver' in window;
  function update() {
    for (const stage of stages) {
      const active = eligible() && !paused && !document.hidden && visible.has(stage) && !stage.closest('[hidden]') &&
        !(stage.dataset.hologram === 'login' && document.activeElement.closest('.auth-form'));
      stage.classList.toggle('is-animating', active);
      const button = stage.querySelector('.hologram-pause');
      button.hidden = !eligible();
      const label = paused ? 'Resume illustration' : 'Pause illustration';
      if (button.textContent !== label) button.textContent = label;
      button.dataset.tooltip = label;
      button.setAttribute('aria-label', 'Pause illustration');
      button.setAttribute('aria-pressed', String(paused));
      if (!active) resetPointer(stage);
    }
  }
  function resetPointer(stage) {
    const scene = stage.querySelector('.layered-scene');
    scene.style.removeProperty('--pointer-x');
    scene.style.removeProperty('--pointer-y');
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target);
        else visible.delete(entry.target);
      }
      update();
    }, { threshold: 0.01 });
    stages.forEach(stage => observer.observe(stage));
  }

  stages.forEach(stage => {
    stage.querySelector('.hologram-pause').addEventListener('click', () => { paused = !paused; update(); });
    stage.addEventListener('pointermove', event => {
      if (!fine.matches || !stage.classList.contains('is-animating')) return;
      const box = stage.getBoundingClientRect();
      const scene = stage.querySelector('.layered-scene');
      scene.style.setProperty('--pointer-x', `${((event.clientX - box.left) / box.width - 0.5) * 4}px`);
      scene.style.setProperty('--pointer-y', `${((event.clientY - box.top) / box.height - 0.5) * 4}px`);
    });
    stage.addEventListener('pointerleave', () => resetPointer(stage));
  });
  document.addEventListener('visibilitychange', update);
  document.addEventListener('focusin', update);
  document.addEventListener('focusout', () => setTimeout(update, 0));
  addEventListener('hashchange', () => setTimeout(update, 0));
  addEventListener('blur', () => stages.forEach(resetPointer));
  reduced.addEventListener('change', update);
  small.addEventListener('change', update);
  update();
})();
