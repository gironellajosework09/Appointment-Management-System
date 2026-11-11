// Shared desktop icon rail for the fictional customer, staff and administrator workspaces.
(() => {
  const app = document.querySelector('.app');
  if (!app) return;

  const icon = '<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>';
  const collapsed = () => app.classList.contains('sidebar-collapsed');

  function sync() {
    app.querySelectorAll('.rail-toggle').forEach(button => {
      const isCollapsed = collapsed();
      button.setAttribute('aria-expanded', String(!isCollapsed));
      button.setAttribute('aria-label', isCollapsed ? 'Expand sidebar' : 'Collapse sidebar');
      button.title = isCollapsed ? 'Expand sidebar' : 'Collapse sidebar';
    });
  }

  function prepare(sidebar) {
    if (!sidebar || sidebar.querySelector('.rail-toggle')) return;
    const nav = sidebar.querySelector('nav');
    if (!nav) return;
    if (!sidebar.id) sidebar.id = 'role-sidebar';
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'rail-toggle';
    button.setAttribute('aria-controls', sidebar.id);
    button.innerHTML = icon;
    button.addEventListener('click', () => {
      app.classList.toggle('sidebar-collapsed');
      sync();
    });
    sidebar.querySelector('.side-brand, .role-brand').after(button);

    sidebar.querySelectorAll('nav a, .side-bottom a, .side-bottom button, .role-sidebar-bottom a, .role-sidebar-bottom button').forEach(item => {
      if (!item.title) item.title = item.getAttribute('aria-label') || item.textContent.trim();
    });
    sync();
  }

  function prepareAll() {
    prepare(app.querySelector('#customer-sidebar'));
    prepare(app.querySelector('#role-workspace .role-sidebar'));
  }

  prepareAll();
  new MutationObserver(prepareAll).observe(app, { childList: true, subtree: true });
})();
