/* ==========================================================================
   H&S Car Carriers — homepage interactions
   Vanilla JS, no dependencies. Progressive enhancement only.
   ========================================================================== */
(function () {
  'use strict';

  var doc = document;
  var root = doc.documentElement;
  root.classList.add('js');

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Header state ---------- */
  var header = doc.getElementById('siteHeader');
  var lastY = window.scrollY;

  function onScroll() {
    if (!header) return;
    var y = window.scrollY;
    header.classList.toggle('is-stuck', y > 24);
    lastY = y;
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  var toggle = doc.getElementById('navToggle');
  var menu = doc.getElementById('mobileMenu');
  var menuLinks = menu ? menu.querySelectorAll('a') : [];

  function setMenu(open) {
    if (!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    if ('inert' in menu) menu.inert = !open;
    else menu.setAttribute('aria-hidden', open ? 'false' : 'true');
    menu.classList.toggle('is-open', open);
    doc.body.classList.toggle('menu-open', open);
  }

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });

    Array.prototype.forEach.call(menuLinks, function (link) {
      link.addEventListener('click', function () { setMenu(false); });
    });

    doc.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) {
        setMenu(false);
        toggle.focus();
      }
    });

    // Reset the panel when the viewport grows past the mobile breakpoint.
    window.matchMedia('(min-width: 900px)').addEventListener('change', function (e) {
      if (e.matches) setMenu(false);
    });
  }

  /* ---------- FAQ accordion ---------- */
  var triggers = doc.querySelectorAll('.acc-trigger');
  Array.prototype.forEach.call(triggers, function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.acc-item');
      var isOpen = item.classList.contains('is-open');

      Array.prototype.forEach.call(triggers, function (other) {
        if (other === btn) return;
        other.setAttribute('aria-expanded', 'false');
        other.closest('.acc-item').classList.remove('is-open');
      });

      btn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
      item.classList.toggle('is-open', !isOpen);
    });
  });

  /* ---------- Scroll reveal ---------- */
  var revealItems = doc.querySelectorAll('[data-reveal]');

  if (!('IntersectionObserver' in window) || reduceMotion) {
    Array.prototype.forEach.call(revealItems, function (el) {
      el.classList.add('is-visible');
    });
  } else {
    // Stagger items that share the same parent for a softer entrance.
    var groups = new Map();
    Array.prototype.forEach.call(revealItems, function (el) {
      var parent = el.parentElement;
      var index = groups.get(parent) || 0;
      groups.set(parent, index + 1);
      el.style.transitionDelay = Math.min(index, 4) * 90 + 'ms';
    });

    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });

    Array.prototype.forEach.call(revealItems, function (el) {
      revealObserver.observe(el);
    });
  }

  /* ---------- Stat counters ---------- */
  var counters = doc.querySelectorAll('[data-count]');

  function animateCount(el) {
    var target = parseInt(el.getAttribute('data-count'), 10) || 0;
    var start = performance.now();
    var duration = 1100;

    function tick(now) {
      var progress = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = String(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = String(target);
    }
    requestAnimationFrame(tick);
  }

  if (counters.length && 'IntersectionObserver' in window && !reduceMotion) {
    var countObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          countObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });

    Array.prototype.forEach.call(counters, function (el) {
      countObserver.observe(el);
    });
  }

  /* ---------- Active nav link ---------- */
  var sections = doc.querySelectorAll('main section[id]');
  var navLinks = doc.querySelectorAll('.nav-primary a');

  if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
    var linkFor = {};
    Array.prototype.forEach.call(navLinks, function (link) {
      linkFor[link.getAttribute('href').slice(1)] = link;
    });

    var navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var link = linkFor[entry.target.id];
        if (!link) return;
        if (entry.isIntersecting) {
          Array.prototype.forEach.call(navLinks, function (l) { l.classList.remove('is-active'); });
          link.classList.add('is-active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    Array.prototype.forEach.call(sections, function (section) {
      navObserver.observe(section);
    });
  }

  /* ---------- Footer year ---------- */
  var year = doc.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
