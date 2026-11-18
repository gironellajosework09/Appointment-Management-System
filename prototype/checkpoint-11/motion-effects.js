(() => {
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const illustrations = document.querySelectorAll('.hero-art img, .auth-art .auth-illustration');
  const sections = document.querySelectorAll('.landing .editorial-section, .landing .closing');

  if (!motion.matches && document.body.classList.contains('home-view')) {
    document.body.classList.add('prototype-hero-entrance');
    window.setTimeout(() => document.body.classList.remove('prototype-hero-entrance'), 600);
  }

  if (!('IntersectionObserver' in window)) return;

  const visibleIllustrations = new Set();
  const updateIllustrations = () => {
    illustrations.forEach(image => {
      image.classList.toggle('motion-visible', !document.hidden && !motion.matches && visibleIllustrations.has(image));
    });
  };
  const illustrationObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) visibleIllustrations.add(entry.target);
      else visibleIllustrations.delete(entry.target);
    });
    updateIllustrations();
  }, { threshold: 0.01 });
  illustrations.forEach(image => illustrationObserver.observe(image));

  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting || entry.intersectionRatio < 0.15) return;
      if (!motion.matches) entry.target.classList.add('motion-revealed');
      sectionObserver.unobserve(entry.target);
    });
  }, { threshold: 0.15 });
  sections.forEach(section => sectionObserver.observe(section));
  document.addEventListener('visibilitychange', updateIllustrations);
  motion.addEventListener('change', updateIllustrations);
})();
