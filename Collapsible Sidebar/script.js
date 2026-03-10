/**
 * Collapsible sidebar: desktop = collapse/expand, mobile = overlay drawer with slide animation.
 */
(function () {
  'use strict';

  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.getElementById('toggleBtn');
  const toggleLabel = document.querySelector('.toggle-label');
  const menuBtn = document.getElementById('menuBtn');
  const overlay = document.getElementById('sidebarOverlay');

  if (!sidebar || !toggleBtn || !toggleLabel) return;

  const MOBILE_BREAKPOINT = 768;

  function isMobile() {
    return window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches;
  }

  function openDrawer() {
    sidebar.classList.add('is-drawer-open');
    document.body.classList.add('is-drawer-open');
    if (menuBtn) {
      menuBtn.setAttribute('aria-expanded', 'true');
      menuBtn.setAttribute('aria-label', 'Close menu');
    }
  }

  function closeDrawer() {
    sidebar.classList.remove('is-drawer-open');
    document.body.classList.remove('is-drawer-open');
    if (menuBtn) {
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.setAttribute('aria-label', 'Open menu');
    }
  }

  function setOpen(isOpen) {
    sidebar.classList.toggle('is-closed', !isOpen);
    sidebar.setAttribute('aria-expanded', isOpen);
    toggleLabel.textContent = isOpen ? 'Collapse' : 'Expand';
    toggleBtn.setAttribute('aria-label', isOpen ? 'Collapse sidebar' : 'Expand sidebar');
  }

  function toggleCollapse() {
    const willBeOpen = sidebar.classList.contains('is-closed');
    setOpen(willBeOpen);
  }

  function onToggleClick() {
    if (isMobile()) {
      if (sidebar.classList.contains('is-drawer-open')) closeDrawer();
    } else {
      toggleCollapse();
    }
  }

  function onMenuClick() {
    if (!isMobile()) return;
    if (sidebar.classList.contains('is-drawer-open')) closeDrawer();
    else openDrawer();
  }

  function onOverlayClick() {
    if (isMobile() && sidebar.classList.contains('is-drawer-open')) closeDrawer();
  }

  function onResize() {
    if (!isMobile()) closeDrawer();
  }

  toggleBtn.addEventListener('click', onToggleClick);
  if (menuBtn) menuBtn.addEventListener('click', onMenuClick);
  if (overlay) overlay.addEventListener('click', onOverlayClick);
  window.addEventListener('resize', onResize);
})();
