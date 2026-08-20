/* ============================================================
   Sales Quota Training — Application Logic
   PalmPay Loan Sales Academy · August 2026
   Vanilla JS only. No frameworks.
   ============================================================ */
(function () {
  'use strict';

  /* ---------------------------- Icons ---------------------------- */
  var ICONS = {
    target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    money: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.6"/><path d="M6 12h.01M18 12h.01"/></svg>',
    gauge: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 14l3.5-3.5"/><path d="M20.3 18a9 9 0 1 0-16.6 0"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3 6.4 7 .7-5.3 4.7 1.6 6.9L12 17.8 5.7 20.7l1.6-6.9L2 9.1l7-.7L12 2z"/></svg>',
    trendUp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/></svg>',
    trendDown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l6 6 4-4 8 8"/><path d="M15 17h6v-6"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    shieldAlert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4M12 15.5h.01"/></svg>',
    ban: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M5.6 5.6l12.8 12.8"/></svg>',
    scale: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M8 21h8"/><path d="M3 7l9-4 9 4"/><path d="M4 7c0 3 3 4.8 8 4.8S20 10 20 7"/><path d="M12 11.8V21"/></svg>',
    layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 12l10 5 10-5"/><path d="M2 17l10 5 10-5"/></svg>',
    spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l1.9 5.1L19 9l-5.1 1.9L12 16l-1.9-5.1L5 9l5.1-1.9L12 2z"/><path d="M19 15l.9 2.4L22 18l-2.1.6L19 21l-.9-2.4L16 18l2.1-.6L19 15z"/></svg>',
    alert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg>',
    lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',
    recycle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-2.64-6.36"/><path d="M21 3v6h-6"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',
    checkCircle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8.5 12.5l2.5 2.5 5-5"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>',
    refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-2.64-6.36"/><path d="M21 3v6h-6"/></svg>',
    award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.5 13L17 22l-5-3-5 3 1.5-9"/></svg>',
    arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    cap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 16v-5M12 8h.01"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>',
    upload: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 8l5-5 5 5"/><path d="M12 3v12"/></svg>',
    external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg>',
    brand: '<svg viewBox="0 0 48 48" aria-hidden="true"><defs><linearGradient id="ppmark-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8b5cf6"/><stop offset="1" stop-color="#6d28d9"/></linearGradient></defs><path fill="url(#ppmark-g)" stroke="#ffffff" stroke-opacity=".9" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" d="M21.157 4.262a5.69 5.69 0 0 1 5.685 0l12.83 7.407a5.69 5.69 0 0 1 2.843 4.924v14.814a5.69 5.69 0 0 1-2.843 4.924l-12.83 7.407a5.69 5.69 0 0 1-5.685 0l-12.83-7.407a5.69 5.69 0 0 1-2.842-4.924V16.593a5.69 5.69 0 0 1 2.842-4.924z"/><g fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2"><rect width="5.053" height="5.053" x="21.473" y="21.473" rx="0.632" ry="0.632" transform="rotate(-45 24 24)"/><path d="M5.565 29.88l17.44-17.441a1.263 1.263 0 0 1 1.766-.021l7.432 7.089m10.245-.897L25.007 36.051a1.263 1.263 0 0 1-1.766.021l-7.431-7.088"/></g></svg>'
  };

  /* ---------------------------- State ---------------------------- */
  var LS_KEY = 'palmpay_sqt_v1';
  var CERT_FORM_URL = 'https://forms.gle/WbUFGQNfbHyeb6j19';

  function defaultState() {
    return {
      completedSections: [],
      current: { section: 0, topic: 0 },
      assessment: null,
      completed: false,
      name: '',
      certDownloaded: false
    };
  }

  function loadState() {
    try {
      var raw = localStorage.getItem(LS_KEY);
      if (raw) {
        var parsed = JSON.parse(raw);
        var base = defaultState();
        return {
          completedSections: parsed.completedSections || base.completedSections,
          current: parsed.current || base.current,
          assessment: parsed.assessment || null,
          completed: !!parsed.completed,
          name: parsed.name || '',
          certDownloaded: !!parsed.certDownloaded
        };
      }
    } catch (e) { /* ignore corrupted storage */ }
    return defaultState();
  }

  function saveState() {
    try { localStorage.setItem(LS_KEY, JSON.stringify(state)); } catch (e) { /* storage unavailable */ }
  }

  var state = loadState();
  var currentView = 'dashboard';
  var assess = { index: 0, answers: {} };

  /* ---------------------------- Helpers ---------------------------- */
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function icon(key) { return ICONS[key] || ''; }

  function globalTopicNum(si, ti) {
    var n = 1;
    for (var i = 0; i < si; i++) n += window.COURSE.sections[i].topics.length;
    return n + ti;
  }

  function nextUnfinished() {
    var sections = window.COURSE.sections;
    for (var i = 0; i < sections.length; i++) {
      if (state.completedSections.indexOf(sections[i].id) === -1) return { si: i, ti: 0 };
    }
    return null;
  }

  var toastTimer = null;
  function toast(msg) {
    var el = document.getElementById('toast');
    if (!el) return;
    el.textContent = msg;
    el.classList.add('show');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove('show'); }, 2600);
  }

  function isPassed() {
    return !!(state.assessment && state.assessment.passed);
  }

  function allSectionsCompleted() {
    var sections = window.COURSE.sections;
    for (var i = 0; i < sections.length; i++) {
      if (state.completedSections.indexOf(sections[i].id) === -1) return false;
    }
    return true;
  }

  function formatDate(iso) {
    if (!iso) return '—';
    var d = new Date(iso);
    if (isNaN(d.getTime())) return '—';
    return d.toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  /* ---------------------------- Block renderers ---------------------------- */
  function renderBlock(b) {
    switch (b.type) {
      case 'heading':
        return '<h4 class="block-heading" data-reveal><span class="bh-bar"></span>' + esc(b.text) + '</h4>';

      case 'text':
        return '<p class="block-text" data-reveal>' + b.html + '</p>';

      case 'chips': {
        var chips = b.items.map(function (it) {
          return '<span class="chip"><span class="chip-ic">' + icon(it.icon) + '</span>' + esc(it.text) + '</span>';
        }).join('');
        return '<div class="chips" data-reveal>' + chips + '</div>';
      }

      case 'principle':
        return '<div class="principle" data-reveal><div class="principle-ic">' + icon(b.icon || 'spark') + '</div><div class="principle-body"><span class="principle-label">' + esc(b.label) + '</span><p>' + esc(b.text) + '</p></div></div>';

      case 'keymessage':
        return '<div class="keymessage" data-reveal><div class="km-ic">' + icon('spark') + '</div><p>' + esc(b.text) + '</p></div>';

      case 'warning':
        return '<div class="warning" data-reveal><div class="warn-ic">' + icon(b.icon || 'alert') + '</div><div class="warn-body"><span class="warn-label">' + esc(b.label) + '</span><p>' + esc(b.text) + '</p></div></div>';

      case 'quote':
        return '<div class="quote-card" data-reveal><span class="qmark" aria-hidden="true">“</span><p>' + esc(b.text) + '</p></div>';

      case 'cards': {
        var cols = b.cols || 2;
        var items = b.items.map(function (it) {
          return '<div class="info-card accent-' + (it.accent || 'default') + '" data-reveal>' +
            '<div class="info-ic">' + icon(it.icon) + '</div>' +
            '<h5 class="info-title">' + esc(it.title) + '</h5>' +
            '<p class="info-text">' + esc(it.text) + '</p>' +
            '</div>';
        }).join('');
        return '<div class="card-grid cols-' + cols + '">' + items + '</div>';
      }

      case 'expand': {
        var ecols = b.cols || 3;
        var eitems = b.items.map(function (it) {
          return '<div class="expand-card" data-reveal>' +
            '<button type="button" class="expand-head" aria-expanded="false">' +
            '<span class="expand-ic">' + icon(it.icon) + '</span>' +
            '<span class="expand-title">' + esc(it.title) + '</span>' +
            '<span class="expand-toggle" aria-hidden="true">+</span>' +
            '</button>' +
            '<div class="expand-body"><p>' + esc(it.text) + '</p></div>' +
            '</div>';
        }).join('');
        return '<div class="expand-grid cols-' + ecols + '">' + eitems + '</div>';
      }

      case 'meter':
        return '<div class="meter-card" data-reveal>' +
          '<div class="meter-head"><span class="meter-label">Quota Utilization</span><span class="meter-value">' + esc(b.value) + '% <em>' + esc(b.label) + '</em></span></div>' +
          '<div class="meter-track"><div class="meter-fill" style="--v:' + esc(b.value) + '%"></div></div>' +
          '<div class="meter-foot"><span class="meter-caption">' + esc(b.caption) + '</span><span class="meter-note">' + esc(b.note) + '</span></div>' +
          '</div>';

      case 'levels': {
        var keys = ['A', 'B', 'C', 'D', 'E'];
        var lvs = keys.map(function (k, i) {
          var cfg = (b.levels && b.levels[i]) || {};
          var label = k === 'A' ? 'A = Highest risk level' : (k === 'E' ? 'E = Lowest risk level' : 'Risk level ' + k);
          var noteText = cfg.note || 'Higher Risk Level → More Healthy Quota';
          return '<button type="button" class="level lv-' + k.toLowerCase() + (i === 0 ? ' active' : '') + '" data-level="' + k + '" data-risk-text="' + esc(label) + '" data-note="' + esc(noteText) + '" aria-pressed="' + (i === 0) + '">' +
            '<span class="lv-key">' + k + '</span><span class="lv-toggle" aria-hidden="true">' + (i === 0 ? '−' : '+') + '</span></button>';
        }).join('');
        var defNote = (b.levels && b.levels[0] && b.levels[0].note) || 'Higher Risk Level → More Healthy Quota';
        var defLabel = 'A = Highest risk level';
        return '<div class="levels" data-reveal>' +
          '<div class="levels-row">' + lvs + '</div>' +
          '<div class="levels-scale"><span>Highest</span><span>Lowest</span></div>' +
          '<div class="level-detail ld-tone-a" data-level-detail>' +
          '<div class="ld-letter" data-ld-letter>A</div>' +
          '<div class="ld-text-wrap"><p class="ld-text" data-ld-text>' + esc(defLabel) + '</p>' +
          '<p class="ld-map" data-ld-map>' + esc(defNote) + '</p></div>' +
          '</div>' +
          '<p class="levels-note">' + esc(b.note) + '</p>' +
          '</div>';
      }

      case 'timeline': {
        var badge = b.badge ? '<div class="tl-badge"><span class="tl-badge-ic">' + icon('refresh') + '</span>' + esc(b.badge) + '</div>' : '';
        var titems = b.items.map(function (it) {
          return '<div class="tl-item' + (it.emphasis ? ' tl-emphasis' : '') + '">' +
            '<div class="tl-rail"><span class="tl-dot"></span></div>' +
            '<div class="tl-card"><h5 class="tl-title">' + esc(it.title) + '</h5>' +
            (it.desc ? '<p class="tl-desc">' + esc(it.desc) + '</p>' : '') +
            '</div></div>';
        }).join('');
        return '<div class="timeline" data-reveal>' + badge + '<div class="tl-wrap">' + titems + '</div></div>';
      }

      case 'flow': {
        var fnodes = b.items.map(function (it) {
          var obj = typeof it === 'string' ? { text: it } : it;
          var plus = obj.prefix ? '<span class="flow-plus" aria-hidden="true">+</span>' : '';
          return '<div class="flow-node">' + plus +
            '<span class="flow-item tone-' + (b.tone || 'neutral') + '">' + esc(obj.text) + '</span>' +
            '<span class="flow-arrow" aria-hidden="true">↓</span></div>';
        }).join('');
        return '<div class="flow" data-reveal>' + fnodes + '</div>';
      }

      case 'checklist': {
        var citems = b.items.map(function (it) {
          return '<button type="button" class="check-item" aria-pressed="false">' +
            '<span class="check-box">' + icon('check') + '</span>' +
            '<span class="check-text">' + esc(it.title) +
            (it.desc ? '<em class="check-desc">' + esc(it.desc) + '</em>' : '') +
            '</span>' +
            '<span class="check-toggle" aria-hidden="true">+</span></button>';
        }).join('');
        return '<div class="checklist" data-reveal>' +
          '<div class="checklist-head"><span class="checklist-counter">' + esc(b.counterLabel) + ': <strong data-cl-count>0 / ' + b.items.length + '</strong></span></div>' +
          '<div class="checklist-items">' + citems + '</div>' +
          '</div>';
      }

      case 'alerts': {
        var aitems = b.items.map(function (it) {
          return '<div class="alert-card tone-' + (it.tone || 'danger') + '" data-reveal>' +
            '<div class="alert-code"><span>' + esc(it.code) + '</span></div>' +
            '<h5 class="alert-title">' + esc(it.title) + '</h5>' +
            '<p class="alert-text">' + esc(it.text) + '</p>' +
            '</div>';
        }).join('');
        return '<div class="alert-grid">' + aitems + '</div>';
      }

      case 'kpi': {
        var kits = b.items.map(function (it) {
          return '<div class="kpi-card tone-' + (it.tone || 'green') + '" data-reveal>' +
            '<div class="kpi-value">' + esc(it.value) + '</div>' +
            '<div class="kpi-label">' + esc(it.label) + '</div>' +
            '<div class="kpi-sub">' + esc(it.sub) + '</div>' +
            '</div>';
        }).join('');
        return '<div class="kpi-grid">' + kits + '</div>';
      }

      case 'steps': {
        var sits = b.items.map(function (it, i) {
          return '<div class="step" data-reveal>' +
            '<div class="step-num">' + (i + 1) + '</div>' +
            '<div class="step-body"><h5 class="step-title">' + esc(it.title) + '</h5>' +
            '<p class="step-desc">' + esc(it.desc) + '</p></div>' +
            '</div>';
        }).join('');
        return '<div class="steps">' + sits + '</div>';
      }

      case 'comparison':
        return '<div class="compare" data-reveal>' +
          '<div class="compare-card cmp-old"><span class="cmp-tag">' + esc(b.old.tag) + '</span><p class="cmp-text">' + b.old.text + '</p></div>' +
          '<div class="compare-vs" aria-hidden="true">VS</div>' +
          '<div class="compare-card cmp-right"><span class="cmp-tag">' + esc(b.right.tag) + '</span><p class="cmp-text">' + b.right.text + '</p></div>' +
          '</div>';

      case 'dual': {
        var dits = b.items.map(function (it) {
          return '<div class="dual-card tone-' + (it.tone || 'ok') + '" data-reveal>' +
            '<button type="button" class="dual-head" aria-expanded="false">' +
            '<span class="dual-title">' + esc(it.title) + '</span>' +
            '<span class="expand-toggle" aria-hidden="true">+</span></button>' +
            '<div class="dual-value">' + esc(it.value) + '</div>' +
            '<div class="dual-bar"><div class="dual-fill" style="--dv:' + esc(it.bar) + '%"></div></div>' +
            '<div class="dual-status">' + esc(it.status) + '</div>' +
            '<div class="dual-body"><p>' + esc(it.reveal) + '</p></div>' +
            '</div>';
        }).join('');
        return '<div class="dual-grid">' + dits + '<p class="dual-hint">' + esc(b.hint) + '</p></div>';
      }

      case 'check': {
        var opts = b.options.map(function (o, i) {
          return '<button type="button" class="kcheck-opt" data-opt="' + i + '"><span class="ko-letter">' + String.fromCharCode(65 + i) + '</span><span class="ko-text">' + esc(o) + '</span></button>';
        }).join('');
        return '<div class="kcheck" data-reveal data-answer="' + b.answer + '" data-explanation="' + esc(b.explanation) + '">' +
          '<div class="kcheck-head"><span class="kcheck-tag">Knowledge Check</span></div>' +
          '<p class="kcheck-q">' + esc(b.question) + '</p>' +
          '<div class="kcheck-opts">' + opts + '</div>' +
          '<div class="kcheck-feedback" data-kcheck-feedback></div>' +
          '</div>';
      }

      case 'final':
        return '<div class="final-card" data-reveal>' +
          '<div class="final-top"><div class="final-ic">' + icon('ban') + '</div><p class="final-avoid">' + esc(b.avoid) + '</p></div>' +
          '<p class="final-goal">' + esc(b.goal) + '</p>' +
          '<p class="final-quote">“' + esc(b.quote) + '”</p>' +
          '<div class="final-formula">' + esc(b.formula) + '</div>' +
          '</div>';

      default:
        return '';
    }
  }

  /* ---------------------------- Views ---------------------------- */
  function viewDashboard() {
    var sections = window.COURSE.sections;
    var completed = state.completedSections.length;
    var total = sections.length;
    var pct = Math.round(completed / total * 100);
    var unf = nextUnfinished();
    var heroBtn = (completed === 0 && state.current.section === 0 && state.current.topic === 0)
      ? '<button type="button" class="btn btn-primary btn-hero" data-action="continue">Start Training ' + icon('arrowRight') + '</button>'
      : '<button type="button" class="btn btn-primary btn-hero" data-action="continue">Continue Learning ' + icon('arrowRight') + '</button>';

    var mods = sections.map(function (s, i) {
      var done = state.completedSections.indexOf(s.id) !== -1;
      var current = !done && state.current.section === i;
      var status = done
        ? '<span class="mod-status st-done">' + icon('check') + ' Completed</span>'
        : (current ? '<span class="mod-status st-inprog">In Progress</span>' : '<span class="mod-status st-not">Not Started</span>');
      var action = done ? 'Review' : (current ? 'Continue' : 'Start');
      return '<div class="module-card" data-reveal>' +
        '<div class="mod-top">' +
        '<div class="mod-num">' + s.num + '</div>' +
        '<div class="mod-ic">' + icon(s.icon) + '</div>' +
        '</div>' +
        '<h4 class="mod-title">' + esc(s.title) + '</h4>' +
        '<p class="mod-blurb">' + esc(s.blurb) + '</p>' +
        '<div class="mod-meta"><span class="mod-topics">' + s.topics.length + ' topics</span>' + status + '</div>' +
        '<button type="button" class="btn btn-soft btn-mod" data-action="go-section" data-si="' + i + '">' + action + ' →</button>' +
        '</div>';
    }).join('');

    var statsAssessment = state.assessment && state.assessment.passed ? '✓' : '—';
    var statsCert = state.completed ? '✓' : '—';

    return '' +
      '<section class="dash-hero" data-reveal>' +
      '<div class="hero-glow" aria-hidden="true"></div>' +
      '<div class="hero-badge">' + icon('cap') + ' PalmPay · Loan Sales Academy</div>' +
      '<h1 class="hero-title">Sales Quota Training</h1>' +
      '<p class="hero-sub">' + esc(window.COURSE.subtitle) + '</p>' +
      '<div class="hero-chips">' +
      '<span class="hero-chip">4 Sections</span>' +
      '<span class="hero-chip">22 Topics</span>' +
      '<span class="hero-chip">1 Knowledge Assessment</span>' +
      '<span class="hero-chip">' + esc(window.COURSE.date) + '</span>' +
      '</div>' +
      heroBtn +
      '</section>' +

      '<div class="dash-grid">' +
      '<div class="dash-col-main">' +
      '<div class="panel overview-panel" data-reveal>' +
      '<div class="panel-head"><h3>Training Overview</h3><span class="panel-chip">What you will learn</span></div>' +
      '<p class="panel-sub">This course helps BDs understand:</p>' +
      '<ul class="overview-list">' +
      window.COURSE.overview.map(function (o) {
        return '<li><span class="ov-ic">' + icon('check') + '</span><span>' + esc(o) + '</span></li>';
      }).join('') +
      '</ul></div>' +
      '</div>' +
      '<div class="dash-col-side">' +
      '<div class="panel progress-panel" data-reveal>' +
      '<div class="panel-head"><h3>Training Progress</h3></div>' +
      '<div class="progress-count"><span class="pc-num">' + completed + ' / ' + total + '</span><span class="pc-label">Sections Completed</span></div>' +
      '<div class="big-progress-track"><div class="big-progress-fill" style="--p:' + pct + '%"></div></div>' +
      '<div class="progress-stats">' +
      '<div class="pstat"><span class="pstat-num">' + completed + '</span><span class="pstat-label">Sections done</span></div>' +
      '<div class="pstat"><span class="pstat-num">' + statsAssessment + '</span><span class="pstat-label">Assessment</span></div>' +
      '<div class="pstat"><span class="pstat-num">' + statsCert + '</span><span class="pstat-label">Certificate</span></div>' +
      '</div></div>' +
      '</div>' +
      '</div>' +

      '<div class="panel modules-panel" data-reveal>' +
      '<div class="panel-head"><h3>Course Modules</h3><span class="panel-chip">4 sections · 22 topics</span></div>' +
      '<div class="module-grid">' + mods + '</div>' +
      '</div>';
  }

  function viewSection(si, ti) {
    var sections = window.COURSE.sections;
    if (si < 0 || si >= sections.length) si = 0;
    var sec = sections[si];
    if (ti < 0 || ti >= sec.topics.length) ti = 0;
    var topic = sec.topics[ti];
    var isLast = ti === sec.topics.length - 1;
    var sectionDone = state.completedSections.indexOf(sec.id) !== -1;

    var pills = sec.topics.map(function (t, i) {
      return '<button type="button" class="topic-pill' + (i === ti ? ' active' : '') + '" data-topic="' + i + '">' +
        '<span class="tp-num">' + String(i + 1).padStart(2, '0') + '</span><span class="tp-title">' + esc(t.title) + '</span></button>';
    }).join('');

    var prevBtn = ti > 0
      ? '<button type="button" class="btn btn-ghost" data-action="prev-topic">← Previous Topic</button>'
      : '';
    var nextBtn = isLast
      ? '<button type="button" class="btn btn-primary" data-action="complete-section">' + (sectionDone ? 'Continue →' : 'Complete Section &amp; Continue →') + '</button>'
      : '<button type="button" class="btn btn-primary" data-action="next-topic">Next Topic →</button>';

    var blocks = topic.blocks.map(renderBlock).join('');

    return '' +
      '<header class="section-header" data-reveal>' +
      '<div class="section-kicker"><span class="section-num">Section ' + esc(sec.num) + '</span><span class="section-topic-count">Topic ' + globalTopicNum(si, ti) + ' of ' + (function () { var n = 0; for (var i = 0; i < sections.length; i++) n += sections[i].topics.length; return n; })() + '</span></div>' +
      '<h2 class="section-title">' + esc(sec.title) + '</h2>' +
      (sec.subtitle ? '<p class="section-subtitle">' + esc(sec.subtitle) + '</p>' : '') +
      '</header>' +
      '<nav class="topic-nav" aria-label="Topics in this section">' + pills + '</nav>' +
      '<article class="topic-card" data-reveal>' +
      '<div class="topic-head"><span class="topic-badge">Topic ' + globalTopicNum(si, ti) + '</span><h3 class="topic-title">' + esc(topic.title) + '</h3></div>' +
      '<div class="topic-blocks">' + blocks + '</div>' +
      '<div class="topic-nav-buttons">' + prevBtn + nextBtn + '</div>' +
      '</article>';
  }

  function viewAssessment() {
    if (isPassed()) return viewAssessmentSummary();
    return viewAssessmentQuiz();
  }

  function viewAssessmentLocked() {
    var completed = state.completedSections.length;
    var total = window.COURSE.sections.length;
    return '' +
      '<div class="cert-locked" data-reveal>' +
      '<div class="cert-locked-ic">' + icon('lock') + '</div>' +
      '<h2 class="cert-locked-title">Assessment Locked</h2>' +
      '<p class="cert-locked-text">Complete all ' + total + ' sections first (' + completed + ' / ' + total + ' completed) to unlock the Knowledge Assessment.</p>' +
      '<button type="button" class="btn btn-primary" data-action="continue">Continue Training ' + icon('arrowRight') + '</button>' +
      '</div>';
  }

  function viewAssessmentQuiz() {
    var qs = window.ASSESSMENT.questions;
    if (assess.index >= qs.length) assess = { index: 0, answers: {} };
    var q = qs[assess.index];
    var isLast = assess.index === qs.length - 1;
    var selected = assess.answers[assess.index];

    var opts = q.options.map(function (o, i) {
      return '<button type="button" class="assess-opt' + (selected === i ? ' selected' : '') + '" data-opt="' + i + '">' +
        '<span class="ao-letter">' + String.fromCharCode(65 + i) + '</span>' +
        '<span class="ao-text">' + esc(o) + '</span>' +
        '<span class="ao-radio" aria-hidden="true"></span></button>';
    }).join('');

    var prevBtn = assess.index > 0 ? '<button type="button" class="btn btn-ghost" data-action="assess-prev">← Back</button>' : '';
    var nextBtn = isLast
      ? '<button type="button" class="btn btn-primary" data-action="assess-submit">Submit Assessment</button>'
      : '<button type="button" class="btn btn-primary" data-action="assess-next">Next →</button>';
    var progressPct = Math.round((assess.index) / qs.length * 100);

    return '' +
      '<header class="section-header" data-reveal>' +
      '<div class="section-kicker"><span class="section-num">Knowledge Assessment</span><span class="section-topic-count">Pass mark 80%</span></div>' +
      '<h2 class="section-title">Test Your Understanding</h2>' +
      '<p class="section-subtitle">Answer all ' + qs.length + ' questions. You need 80% or above to pass and unlock your certificate.</p>' +
      '</header>' +
      '<div class="assess-progress" data-reveal>' +
      '<div class="ap-top"><span>Question ' + (assess.index + 1) + ' of ' + qs.length + '</span><span>' + Math.round((assess.index + 1) / qs.length * 100) + '%</span></div>' +
      '<div class="ap-track"><div class="ap-fill" style="width:' + progressPct + '%"></div></div>' +
      '</div>' +
      '<div class="assess-card" data-reveal>' +
      '<div class="assess-q">' + esc(q.q) + '</div>' +
      '<div class="assess-opts">' + opts + '</div>' +
      '<div class="assess-nav">' + prevBtn + nextBtn + '</div>' +
      '</div>';
  }

  function viewAssessmentSummary() {
    var r = state.assessment;
    if (!r || !r.passed) return viewAssessmentQuiz();
    return '' +
      '<div class="result-card result-pass" data-reveal>' +
      '<div class="result-ic">' + icon('checkCircle') + '</div>' +
      '<h2 class="result-title">Assessment Passed</h2>' +
      '<p class="result-text">You scored <strong>' + r.score + ' / ' + r.total + '</strong> (' + r.pct + '%). Your certificate is now unlocked.</p>' +
      '<div class="result-actions">' +
      '<button type="button" class="btn btn-primary" data-action="view-completion">View Completion</button>' +
      '<button type="button" class="btn btn-soft" data-action="view-certificate">View Certificate</button>' +
      '<button type="button" class="btn btn-ghost" data-action="back-dashboard">Back to Dashboard</button>' +
      '</div></div>';
  }

  function viewAssessmentResult() {
    var r = state.assessment;
    if (!r) return viewAssessmentQuiz();
    if (r.passed) return viewAssessmentSummary();
    return '' +
      '<div class="result-card result-fail" data-reveal>' +
      '<div class="result-ic">' + icon('alert') + '</div>' +
      '<h2 class="result-title">You have not reached the required 80% pass mark.</h2>' +
      '<p class="result-text">You scored <strong>' + r.score + ' / ' + r.total + '</strong> (' + r.pct + '%). Review the training material and try again.</p>' +
      '<div class="result-actions">' +
      '<button type="button" class="btn btn-primary" data-action="review-training">Review Training</button>' +
      '<button type="button" class="btn btn-ghost" data-action="retry-assessment">Retry Assessment</button>' +
      '</div></div>';
  }

  function viewCompletion() {
    if (!isPassed()) {
      setView('assessment');
      return '';
    }
    var r = state.assessment;
    return '' +
      '<div class="completion-card" data-reveal>' +
      '<div class="completion-badge">' + icon('award') + '</div>' +
      '<h2 class="completion-title">Training Completed Successfully</h2>' +
      '<p class="completion-sub">Congratulations on completing the Sales Quota Training.</p>' +
      '<div class="completion-details">' +
      '<div class="cd-row"><span class="cd-key">Course</span><span class="cd-value">Sales Quota Training</span></div>' +
      '<div class="cd-row"><span class="cd-key">Completion Status</span><span class="cd-value cd-ok">Completed</span></div>' +
      '<div class="cd-row"><span class="cd-key">Assessment Score</span><span class="cd-value">' + r.score + ' / ' + r.total + ' (' + r.pct + '%)</span></div>' +
      '<div class="cd-row"><span class="cd-key">Completion Date</span><span class="cd-value">' + formatDate(r.date) + '</span></div>' +
      '</div>' +
      '<div class="completion-actions">' +
      '<button type="button" class="btn btn-primary" data-action="view-certificate">View Certificate</button>' +
      '<button type="button" class="btn btn-ghost" data-action="back-dashboard">Back to Dashboard</button>' +
      '</div></div>';
  }

  function certId() {
    var d = state.assessment && state.assessment.date ? new Date(state.assessment.date) : new Date();
    var base = (d.getTime() % 1000000).toString();
    return 'SQT-' + d.getFullYear() + '-' + base;
  }

  function viewCertificate() {
    if (!isPassed()) {
      return '' +
        '<div class="cert-locked" data-reveal>' +
        '<div class="cert-locked-ic">' + icon('lock') + '</div>' +
        '<h2 class="cert-locked-title">Certificate Locked</h2>' +
        '<p class="cert-locked-text">Pass the Knowledge Assessment with 80% or above to unlock your completion certificate.</p>' +
        '<button type="button" class="btn btn-primary" data-action="go-assessment">Go to Assessment</button>' +
        '</div>';
    }
    var r = state.assessment;
    var name = state.name || '';
    return '' +
      '<div class="cert-stage">' +
      '<div class="cert-toolbar" data-reveal>' +
      '<label class="cert-toolbar-label" for="certName">Name on certificate</label>' +
      '<div class="cert-toolbar-row">' +
      '<input type="text" id="certName" maxlength="60" placeholder="Enter your full name" value="' + esc(name) + '" />' +
      '<button type="button" class="btn btn-soft" data-action="save-name">Update Name</button>' +
      '<button type="button" class="btn btn-primary" data-action="download-cert">' + icon('download') + ' Download Certificate</button>' +
      (state.certDownloaded ? '<button type="button" class="btn btn-soft" data-action="upload-cert">' + icon('upload') + ' Upload Certificate</button>' : '') +
      '</div></div>' +
      '<div class="certificate" id="certificate" data-reveal>' +
      '<div class="cert-frame">' +
      '<div class="cert-inner">' +
      '<div class="cert-brand"><span class="cert-brand-mark">' + icon('brand') + '</span><div><span class="cert-brand-name">PalmPay</span><span class="cert-brand-sub">Loan Sales Academy</span></div></div>' +
      '<div class="cert-award">' + icon('award') + '</div>' +
      '<h2 class="cert-title">Certificate of Completion</h2>' +
      '<p class="cert-line">This is to certify that</p>' +
      '<div class="cert-name">' + (name ? esc(name) : '<span class="cert-name-empty">Your Name</span>') + '</div>' +
      '<p class="cert-line">has successfully completed the</p>' +
      '<div class="cert-course">Sales Quota Training</div>' +
      '<p class="cert-course-sub">' + esc(window.COURSE.subtitle) + '</p>' +
      '<div class="cert-meta">' +
      '<div class="cert-meta-item"><span>Assessment Score</span><strong>' + r.score + ' / ' + r.total + ' (' + r.pct + '%)</strong></div>' +
      '<div class="cert-meta-item"><span>Completion Date</span><strong>' + formatDate(r.date) + '</strong></div>' +
      '<div class="cert-meta-item"><span>Certificate ID</span><strong>' + esc(certId()) + '</strong></div>' +
      '</div>' +
      '<div class="cert-footer">' +
      '<div class="cert-sign"><div class="sign-line"></div><span>PalmPay Loan Sales Academy</span></div>' +
      '<div class="cert-date">' + esc(window.COURSE.date) + '</div>' +
      '</div>' +
      '</div></div></div></div>';
  }

  /* ---------------------------- Router ---------------------------- */
  function setView(v, opts) {
    opts = opts || {};
    currentView = v;
    var html = '';
    var crumb = 'Dashboard';

    switch (v) {
      case 'dashboard':
        html = viewDashboard();
        crumb = 'Dashboard';
        break;
      case 'section': {
        var si = (typeof opts.si === 'number') ? opts.si : state.current.section;
        var ti = (typeof opts.ti === 'number') ? opts.ti : 0;
        state.current = { section: si, topic: ti };
        saveState();
        var sec = window.COURSE.sections[si];
        html = viewSection(si, ti);
        crumb = 'Section ' + sec.num + ' — ' + sec.title;
        break;
      }
      case 'assessment':
        if (!allSectionsCompleted()) {
          html = viewAssessmentLocked();
          crumb = 'Knowledge Assessment';
          break;
        }
        html = viewAssessment();
        crumb = 'Knowledge Assessment';
        break;
      case 'completion':
        html = viewCompletion();
        crumb = 'Course Completion';
        break;
      case 'certificate':
        html = viewCertificate();
        crumb = 'Certificate';
        break;
    }

    var viewEl = document.getElementById('view');
    if (viewEl) {
      viewEl.innerHTML = html;
      window.scrollTo(0, 0);
    }
    document.getElementById('topbarCrumb').textContent = crumb;
    renderNav();
    refreshProgress();
    observeReveal();
    closeMobileNav();
  }

  /* ---------------------------- Navigation ---------------------------- */
  function renderNav() {
    var el = document.getElementById('sidebarNav');
    if (!el) return;
    var items = [
      { view: 'dashboard', icon: '🏠', label: 'Dashboard' },
      { view: 'section', si: 0, num: '01', label: 'Purpose of Sales Quota' },
      { view: 'section', si: 1, num: '02', label: 'Understanding Your Sales Quota' },
      { view: 'section', si: 2, num: '03', label: 'Temporary Adjustments &amp; Risk Control' },
      { view: 'section', si: 3, num: '04', label: 'Mindset &amp; Key Takeaways' },
      { view: 'assessment', icon: '📝', label: 'Knowledge Assessment' },
      { view: 'certificate', icon: '🏆', label: 'Certificate' }
    ];

    el.innerHTML = items.map(function (it) {
      var active = false;
      if (it.view === 'section') {
        active = currentView === 'section' && state.current.section === it.si;
      } else {
        active = currentView === it.view;
      }
      var status = '';
      if (it.view === 'section') {
        var sid = window.COURSE.sections[it.si].id;
        if (state.completedSections.indexOf(sid) !== -1) status = '<span class="nav-status nav-ok">' + icon('check') + '</span>';
      } else if (it.view === 'assessment') {
        if (isPassed()) status = '<span class="nav-status nav-ok">' + icon('check') + '</span>';
        else if (!allSectionsCompleted()) status = '<span class="nav-status nav-lock">' + icon('lock') + '</span>';
      } else if (it.view === 'certificate') {
        if (state.completed) status = '<span class="nav-status nav-ok">' + icon('check') + '</span>';
      }
      var inner = it.num ? '<span class="nav-num">' + it.num + '</span>' : '<span class="nav-emoji">' + it.icon + '</span>';
      return '<button type="button" class="nav-item' + (active ? ' active' : '') + '" data-nav="' + it.view + '" data-si="' + (it.si !== undefined ? it.si : '') + '">' +
        inner +
        '<span class="nav-label">' + it.label + '</span>' +
        status +
        '</button>';
    }).join('');
  }

  function refreshProgress() {
    var completed = state.completedSections.length;
    var total = window.COURSE.sections.length;
    var pct = Math.round(completed / total * 100);

    var fill = document.getElementById('miniProgressFill');
    if (fill) fill.style.width = pct + '%';
    var value = document.getElementById('miniProgressValue');
    if (value) value.textContent = pct + '%';
    var sub = document.getElementById('miniProgressSub');
    if (sub) sub.textContent = completed + ' / ' + total + ' sections completed';
    var chip = document.getElementById('topbarProgress');
    if (chip) chip.textContent = completed + ' / ' + total + ' Sections';
  }

  /* ---------------------------- Mobile nav ---------------------------- */
  function openMobileNav() {
    document.body.classList.add('sidebar-open');
    document.getElementById('sidebarBackdrop').classList.add('show');
  }
  function closeMobileNav() {
    document.body.classList.remove('sidebar-open');
    var bd = document.getElementById('sidebarBackdrop');
    if (bd) bd.classList.remove('show');
  }
  function closeDesktopNav() {
    document.body.classList.add('sidebar-hidden');
  }
  function openDesktopNav() {
    document.body.classList.remove('sidebar-hidden');
  }

  /* ---------------------------- Interactions ---------------------------- */
  function onViewClick(e) {
    var t = e.target;

    var actionEl = t.closest('[data-action]');
    if (actionEl) {
      var action = actionEl.getAttribute('data-action');
      handleAction(action, actionEl);
      return;
    }

    var expandHead = t.closest('.expand-head');
    if (expandHead) {
      var expCard = expandHead.closest('.expand-card');
      if (expCard) toggleExpand(expCard, expandHead);
      return;
    }

    var dualHead = t.closest('.dual-head');
    if (dualHead) {
      var dualCard = dualHead.closest('.dual-card');
      if (dualCard) toggleExpand(dualCard, dualHead);
      return;
    }

    var levelBtn = t.closest('.level');
    if (levelBtn) {
      selectLevel(levelBtn);
      return;
    }

    var checkItem = t.closest('.check-item');
    if (checkItem) {
      toggleCheck(checkItem);
      return;
    }

    var kopt = t.closest('.kcheck-opt');
    if (kopt) {
      gradeKnowledgeCheck(kopt);
      return;
    }

    var topicPill = t.closest('.topic-pill');
    if (topicPill) {
      var si = state.current.section;
      var ti = parseInt(topicPill.getAttribute('data-topic'), 10);
      setView('section', { si: si, ti: ti });
      return;
    }

    var assessOpt = t.closest('.assess-opt');
    if (assessOpt) {
      var idx = parseInt(assessOpt.getAttribute('data-opt'), 10);
      assess.answers[assess.index] = idx;
      var optsList = assessOpt.parentNode.querySelectorAll('.assess-opt');
      for (var i = 0; i < optsList.length; i++) {
        optsList[i].classList.toggle('selected', i === idx);
      }
      return;
    }
  }

  function handleAction(action, el) {
    switch (action) {
      case 'continue': {
        var target = nextUnfinished() || { si: state.current.section, ti: state.current.topic };
        setView('section', { si: target.si, ti: target.ti });
        break;
      }
      case 'go-section': {
        var si = parseInt(el.getAttribute('data-si'), 10);
        setView('section', { si: si, ti: 0 });
        break;
      }
      case 'next-topic': {
        var ns = state.current.section;
        var nt = state.current.topic + 1;
        setView('section', { si: ns, ti: nt });
        break;
      }
      case 'prev-topic': {
        setView('section', { si: state.current.section, ti: state.current.topic - 1 });
        break;
      }
      case 'complete-section': {
        var cs = state.current.section;
        var sec = window.COURSE.sections[cs];
        if (state.completedSections.indexOf(sec.id) === -1) {
          state.completedSections.push(sec.id);
          saveState();
          refreshProgress();
          toast('Section ' + sec.num + ' completed');
        }
        if (cs < window.COURSE.sections.length - 1) {
          setView('section', { si: cs + 1, ti: 0 });
        } else {
          setView('assessment');
        }
        break;
      }
      case 'go-assessment':
        assess = { index: 0, answers: {} };
        setView('assessment');
        break;
      case 'assess-prev':
        assess.index--;
        setView('assessment');
        break;
      case 'assess-next': {
        if (assess.answers[assess.index] === undefined) {
          toast('Please select an answer to continue.');
        } else {
          assess.index++;
          setView('assessment');
        }
        break;
      }
      case 'assess-submit': {
        var qs = window.ASSESSMENT.questions;
        var unanswered = false;
        for (var qi = 0; qi < qs.length; qi++) {
          if (assess.answers[qi] === undefined) { unanswered = true; break; }
        }
        if (unanswered) {
          toast('Please answer all questions before submitting.');
          return;
        }
        var score = 0;
        for (var qj = 0; qj < qs.length; qj++) {
          if (assess.answers[qj] === qs[qj].answer) score++;
        }
        var pct = Math.round(score / qs.length * 100);
        var passed = pct >= window.ASSESSMENT.passMark;
        state.assessment = { score: score, total: qs.length, pct: pct, passed: passed, date: new Date().toISOString() };
        if (passed) state.completed = true;
        saveState();
        renderResult();
        break;
      }
      case 'review-training':
        setView('section', { si: 0, ti: 0 });
        break;
      case 'retry-assessment':
        assess = { index: 0, answers: {} };
        setView('assessment');
        break;
      case 'view-certificate':
        setView('certificate');
        break;
      case 'view-completion':
        setView('completion');
        break;
      case 'back-dashboard':
        setView('dashboard');
        break;
      case 'save-name': {
        var input = document.getElementById('certName');
        if (!input) return;
        var val = input.value.trim();
        if (!val) { toast('Please enter your name.'); return; }
        state.name = val;
        saveState();
        toast('Name updated');
        setView('certificate');
        break;
      }
      case 'download-cert': {
        var nameInput = document.getElementById('certName');
        if (nameInput && nameInput.value.trim() && state.name !== nameInput.value.trim()) {
          state.name = nameInput.value.trim();
          saveState();
        }
        if (!state.name) { toast('Please enter your name before downloading.'); return; }
        syncCertName();
        openDownloadModal();
        break;
      }
      case 'upload-cert':
        openUploadModal();
        break;
    }
  }

  function renderResult() {
    var r = state.assessment;
    var viewEl = document.getElementById('view');
    if (!viewEl || !r) return;
    currentView = 'assessment';
    viewEl.innerHTML = r.passed ? viewAssessmentSummary() : viewAssessmentResult();
    document.getElementById('topbarCrumb').textContent = 'Knowledge Assessment';
    renderNav();
    refreshProgress();
    observeReveal();
    closeMobileNav();
    window.scrollTo(0, 0);
  }

  /* ---------------------------- Certificate download ---------------------------- */
  function syncCertName() {
    var nameEl = document.querySelector('#certificate .cert-name');
    if (nameEl && state.name) nameEl.textContent = state.name;
  }

  function sanitizeFilePart(name) {
    return String(name || '').trim().replace(/[^\w\s-]/g, '').replace(/\s+/g, '_').replace(/_+/g, '_').replace(/^_+|_+$/g, '');
  }

  function certFileName(ext) {
    var base = 'PalmPay_Sales_Quota_Training_Certificate';
    var n = sanitizeFilePart(state.name);
    if (n) base = base + '_' + n;
    return base + '.' + ext;
  }

  function downloadBlob(blob, filename) {
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 1500);
  }

  function renderCertificateToCanvas() {
    var certEl = document.getElementById('certificate');
    if (!certEl) return Promise.reject(new Error('Certificate not found'));
    return new Promise(function (resolve, reject) {
      try {
        var DPR = 2;
        var logicalW = 1240;

        var clone = certEl.cloneNode(true);
        clone.style.width = logicalW + 'px';
        clone.style.margin = '0';
        clone.style.boxSizing = 'border-box';
        clone.classList.add('in');
        clone.className = (clone.className ? clone.className + ' ' : '') + 'cert-export';

        var meas = document.createElement('div');
        meas.style.cssText = 'position:absolute;left:-99999px;top:0;width:' + logicalW + 'px;visibility:hidden;';
        meas.appendChild(clone);
        document.body.appendChild(meas);
        var logicalH = Math.max(Math.round(clone.getBoundingClientRect().height), 700);
        document.body.removeChild(meas);

        var cssText = '';
        if (window.EXPORT_CSS) {
          cssText = window.EXPORT_CSS;
        } else {
          try {
            for (var i = 0; i < document.styleSheets.length; i++) {
              var sheet = document.styleSheets[i];
              var rules = null;
              try { rules = sheet.cssRules; } catch (e) { rules = null; }
              if (!rules) continue;
              for (var j = 0; j < rules.length; j++) {
                cssText += rules[j].cssText + '\n';
              }
            }
          } catch (e) {}
        }

        var svgDoc = '<svg xmlns="http://www.w3.org/2000/svg" width="' + logicalW + '" height="' + logicalH + '">' +
          '<foreignObject width="100%" height="100%">' +
          '<div xmlns="http://www.w3.org/1999/xhtml" style="width:' + logicalW + 'px;">' +
          (cssText ? '<style>' + cssText + '</style>' : '') +
          clone.outerHTML.replace(/<svg\b(?![^>]*xmlns=)/g, '<svg xmlns="http://www.w3.org/2000/svg"') +
          '</div></foreignObject></svg>';

        var url = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgDoc);
        var img = new Image();
        img.onload = function () {
          try {
            var canvas = document.createElement('canvas');
            canvas.width = Math.round(logicalW * DPR);
            canvas.height = Math.round(logicalH * DPR);
            var ctx = canvas.getContext('2d');
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            resolve({ canvas: canvas, width: canvas.width, height: canvas.height });
          } catch (err) {
            reject(err);
          }
        };
        img.onerror = function () {
          reject(new Error('Could not rasterize the certificate image.'));
        };
        img.src = url;
      } catch (err) {
        reject(err);
      }
    });
  }

  function canvasToJpegBlob(canvas) {
    return new Promise(function (resolve, reject) {
      try {
        canvas.toBlob(function (blob) {
          if (blob) resolve(blob);
          else reject(new Error('Could not create JPEG image.'));
        }, 'image/jpeg', 0.92);
      } catch (err) {
        reject(err);
      }
    });
  }

  function buildPdfFromJpeg(jpeg, wPx, hPx) {
    var pageW = 841.89, pageH = 595.28;
    var scale = pageW / wPx;
    var drawW = pageW, drawH = Math.round(hPx * scale);
    if (drawH > pageH) {
      drawH = pageH;
      drawW = Math.round(drawH * (wPx / hPx));
    }
    var x = (pageW - drawW) / 2, y = (pageH - drawH) / 2;

    var buf = [];
    var offs = [];
    var push = function (s) {
      for (var i = 0; i < s.length; i++) buf.push(s.charCodeAt(i) & 0xff);
    };
    var pushBytes = function (u8) {
      for (var i = 0; i < u8.length; i++) buf.push(u8[i]);
    };
    var addObj = function (num, body, streamBytes) {
      offs[num] = buf.length;
      push(num + ' 0 obj\n');
      push(body + '\n');
      if (streamBytes) {
        push('stream\n');
        pushBytes(streamBytes);
        push('\nendstream\n');
      }
      push('endobj\n');
    };

    push('%PDF-1.4\n%\u00E2\u00E3\u00CF\u00D3\n');
    addObj(1, '<< /Type /Catalog /Pages 2 0 R >>');
    addObj(2, '<< /Type /Pages /Kids [3 0 R] /Count 1 >>');
    addObj(3, '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ' + pageW + ' ' + pageH + '] /Resources << /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >>');
    addObj(4, '<< /Type /XObject /Subtype /Image /Width ' + wPx + ' /Height ' + hPx + ' /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ' + jpeg.length + ' >>', jpeg);
    var cs = 'q\n' + drawW.toFixed(2) + ' 0 0 ' + drawH.toFixed(2) + ' ' + x.toFixed(2) + ' ' + y.toFixed(2) + ' cm\n/Im0 Do\nQ\n';
    addObj(5, '<< /Length ' + cs.length + ' >>', (function () {
      var bytes = new Uint8Array(cs.length);
      for (var i = 0; i < cs.length; i++) bytes[i] = cs.charCodeAt(i) & 0xff;
      return bytes;
    })());

    var xrefPos = buf.length;
    push('xref\n0 6\n');
    push('0000000000 65535 f \n');
    for (var n = 1; n <= 5; n++) {
      push(('0000000000' + offs[n]).slice(-10) + ' 00000 n \n');
    }
    push('trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n' + xrefPos + '\n%%EOF\n');
    return new Uint8Array(buf);
  }

  function setModalBusy(busy) {
    var card = document.querySelector('#dlModal .dl-card');
    if (!card) return;
    var btns = card.querySelectorAll('[data-dl]');
    for (var i = 0; i < btns.length; i++) btns[i].disabled = busy;
    if (busy) {
      card.classList.add('busy');
    } else {
      card.classList.remove('busy');
    }
  }

  function downloadCertCertificate(kind) {
    if (!state.name) { toast('Please enter your name before downloading.'); return; }
    syncCertName();
    setModalBusy(true);
    renderCertificateToCanvas()
      .then(function (res) {
        return canvasToJpegBlob(res.canvas).then(function (jpegBlob) {
          var out;
          if (kind === 'pdf') {
            return jpegBlob.arrayBuffer().then(function (ab) {
              out = buildPdfFromJpeg(new Uint8Array(ab), res.width, res.height);
              downloadBlob(new Blob([out], { type: 'application/pdf' }), certFileName('pdf'));
            });
          }
          downloadBlob(jpegBlob, certFileName('jpg'));
        });
      })
      .then(function () {
        setModalBusy(false);
        closeDownloadModal();
        state.certDownloaded = true;
        saveState();
        toast(kind === 'pdf' ? 'Certificate downloaded as PDF' : 'Certificate downloaded as JPG');
        openUploadModal();
      })
      .catch(function (err) {
        setModalBusy(false);
        toast('Could not generate the certificate. Please try again.');
      });
  }

  function openDownloadModal() {
    var m = document.getElementById('dlModal');
    if (!m) return;
    m.classList.add('show');
    m.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeDownloadModal() {
    var m = document.getElementById('dlModal');
    if (m) {
      m.classList.remove('show');
      m.setAttribute('aria-hidden', 'true');
    }
    document.body.style.overflow = '';
  }

  function openUploadModal() {
    var m = document.getElementById('upModal');
    if (!m) return;
    m.classList.add('show');
    m.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeUploadModal() {
    var m = document.getElementById('upModal');
    if (m) {
      m.classList.remove('show');
      m.setAttribute('aria-hidden', 'true');
    }
    document.body.style.overflow = '';
  }

  function openCertificateForm() {
    window.open(CERT_FORM_URL, '_blank', 'noopener,noreferrer');
    closeUploadModal();
  }

  function toggleExpand(card, headBtn) {
    var open = card.classList.toggle('open');
    if (headBtn) {
      headBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      var toggle = headBtn.querySelector('.expand-toggle');
      if (toggle) toggle.textContent = open ? '−' : '+';
    }
  }

  function selectLevel(btn) {
    var lv = btn.closest('.levels');
    if (!lv) return;
    var all = lv.querySelectorAll('.level');
    for (var i = 0; i < all.length; i++) {
      all[i].classList.remove('active');
      all[i].setAttribute('aria-pressed', 'false');
      var tg = all[i].querySelector('.lv-toggle');
      if (tg) tg.textContent = '+';
    }
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');
    var tgl = btn.querySelector('.lv-toggle');
    if (tgl) tgl.textContent = '−';
    var letter = btn.getAttribute('data-level');
    var riskText = btn.getAttribute('data-risk-text');
    var note = btn.getAttribute('data-note');
    var detail = lv.querySelector('[data-level-detail]');
    var letterEl = lv.querySelector('[data-ld-letter]');
    var textEl = lv.querySelector('[data-ld-text]');
    var mapEl = lv.querySelector('[data-ld-map]');
    if (detail) detail.className = 'level-detail ld-tone-' + letter.toLowerCase();
    if (letterEl) letterEl.textContent = letter;
    if (textEl) textEl.textContent = riskText;
    if (mapEl) mapEl.textContent = note;
  }

  function toggleCheck(item) {
    var checked = item.classList.toggle('checked');
    item.setAttribute('aria-pressed', checked ? 'true' : 'false');
    var toggle = item.querySelector('.check-toggle');
    if (toggle) toggle.textContent = checked ? '−' : '+';
    var list = item.closest('.checklist');
    if (list) {
      var count = list.querySelectorAll('.check-item.checked').length;
      var counter = list.querySelector('[data-cl-count]');
      if (counter) counter.textContent = count + ' / ' + list.querySelectorAll('.check-item').length;
    }
  }

  function gradeKnowledgeCheck(opt) {
    var wrap = opt.closest('.kcheck');
    if (!wrap) return;
    if (wrap.getAttribute('data-graded') === '1') return;
    wrap.setAttribute('data-graded', '1');
    var answer = parseInt(wrap.getAttribute('data-answer'), 10);
    var explanation = wrap.getAttribute('data-explanation') || '';
    var chosen = parseInt(opt.getAttribute('data-opt'), 10);
    var all = wrap.querySelectorAll('.kcheck-opt');
    for (var i = 0; i < all.length; i++) {
      all[i].disabled = true;
      if (i === answer) all[i].classList.add('correct');
      else if (i === chosen) all[i].classList.add('wrong');
    }
    var fb = wrap.querySelector('[data-kcheck-feedback]');
    if (fb) {
      if (chosen === answer) {
        fb.className = 'kcheck-feedback good';
        fb.innerHTML = '<strong>Correct!</strong> ' + esc(explanation);
      } else {
        fb.className = 'kcheck-feedback bad';
        fb.innerHTML = '<strong>Not quite.</strong> ' + esc(explanation);
      }
    }
  }

  /* ---------------------------- Scroll reveal ---------------------------- */
  var revealObserver = null;
  function observeReveal() {
    if (revealObserver) revealObserver.disconnect();
    var els = document.querySelectorAll('[data-reveal]:not(.in)');
    if (!('IntersectionObserver' in window)) {
      for (var i = 0; i < els.length; i++) els[i].classList.add('in');
      return;
    }
    revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
    els.forEach(function (el) { revealObserver.observe(el); });
  }

  /* ---------------------------- Static bindings ---------------------------- */
  function bindStatic() {
    document.getElementById('menuToggle').addEventListener('click', function () {
      if (window.matchMedia('(max-width: 1023px)').matches) {
        openMobileNav();
      } else {
        openDesktopNav();
      }
    });
    document.getElementById('sidebarClose').addEventListener('click', function () {
      if (window.matchMedia('(max-width: 1023px)').matches) {
        closeMobileNav();
      } else {
        closeDesktopNav();
      }
    });
    var backdrop = document.getElementById('sidebarBackdrop');
    backdrop.addEventListener('click', closeMobileNav);

    document.getElementById('sidebarNav').addEventListener('click', function (e) {
      var btn = e.target.closest('[data-nav]');
      if (!btn) return;
      var v = btn.getAttribute('data-nav');
      var si = btn.getAttribute('data-si');
      if (v === 'section') {
        setView('section', { si: parseInt(si, 10), ti: 0 });
      } else if (v === 'assessment') {
        assess = { index: 0, answers: {} };
        setView('assessment');
      } else {
        setView(v);
      }
    });

    document.getElementById('view').addEventListener('click', onViewClick);

    var modal = document.getElementById('dlModal');
    modal.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-dl]');
      if (!btn) {
        if (e.target === modal) closeDownloadModal();
        return;
      }
      var kind = btn.getAttribute('data-dl');
      if (kind === 'backdrop' || kind === 'cancel') {
        closeDownloadModal();
      } else if (kind === 'pdf' || kind === 'jpg') {
        downloadCertCertificate(kind);
      }
    });

    var upModal = document.getElementById('upModal');
    upModal.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-up]');
      if (!btn) {
        if (e.target === upModal) closeUploadModal();
        return;
      }
      var kind = btn.getAttribute('data-up');
      if (kind === 'backdrop' || kind === 'cancel') {
        closeUploadModal();
      } else if (kind === 'form') {
        openCertificateForm();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeDownloadModal();
        closeUploadModal();
      }
    });
  }

  /* ---------------------------- Init ---------------------------- */
  function init() {
    bindStatic();
    setView('dashboard');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
