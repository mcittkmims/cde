// ── State ──────────────────────────────────────────────────────────
let query = '';
let activeFilter = 'all';
let mathReady = false;
let fullscreenEnabled = false;

// ── KaTeX auto-render ──────────────────────────────────────────────
function renderMathWhenReady() {
  mathReady = true;
  renderAllMath();
}

function renderAllMath() {
  if (!mathReady) return;
  document.querySelectorAll('.card-body').forEach(el => {
    renderMathInElement(el, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$',  right: '$',  display: false },
        { left: '\\(', right: '\\)', display: false },
        { left: '\\[', right: '\\]', display: true }
      ],
      throwOnError: false
    });
  });
}

// ── Search & filter ────────────────────────────────────────────────

// Strip diacritics so "dioda" matches "diodă", "ohm" matches etc.
function normalize(s) {
  return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

// Levenshtein distance (capped at 2 for performance)
function editDistance(a, b) {
  if (Math.abs(a.length - b.length) > 2) return 99;
  const dp = Array.from({ length: a.length + 1 }, (_, i) => [i]);
  for (let j = 1; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++)
    for (let j = 1; j <= b.length; j++)
      dp[i][j] = a[i-1] === b[j-1]
        ? dp[i-1][j-1]
        : 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
  return dp[a.length][b.length];
}

// Check if a term matches a haystack string, returns match quality:
//  2 = whole-word substring match, 1 = compound-word or fuzzy, 0 = no match
function termScore(term, haystack) {
  const idx = haystack.indexOf(term);
  if (idx !== -1) {
    const before = idx === 0 || !/[a-z0-9]/.test(haystack[idx - 1]);
    const after  = idx + term.length >= haystack.length || !/[a-z0-9]/.test(haystack[idx + term.length]);
    return (before && after) ? 2 : 1;
  }
  // Fuzzy: only for terms >= 4 chars — check each word in haystack
  if (term.length >= 4) {
    const words = haystack.split(/[\s,.()\[\]{}$\\\/\-_|:;]+/).filter(w => w.length >= 3);
    const maxDist = term.length >= 6 ? 2 : 1;
    for (const w of words) {
      if (Math.abs(w.length - term.length) <= maxDist && editDistance(term, w) <= maxDist)
        return 1;
    }
  }
  return 0;
}

// Weighted fields: title=10, tags=6, themeTitle=3, content=1
function score(entry, terms) {
  if (!terms.length) return 1;

  const fields = [
    { text: normalize(entry.title),                weight: 10 },
    { text: normalize(entry.tags.join(' ')),        weight: 6  },
    { text: normalize(entry.themeTitle),            weight: 3  },
    { text: normalize(entry.theme),                 weight: 3  },
    { text: normalize(entry.type),                  weight: 2  },
    { text: normalize(entry.content),               weight: 1  },
  ];

  let total = 0;
  for (const t of terms) {
    const nt = normalize(t);
    let termTotal = 0;
    for (const f of fields) {
      const q = termScore(nt, f.text);
      if (q > 0) termTotal += q * f.weight;
    }
    total += termTotal;
  }
  return total;
}

function matchesFilter(entry) {
  if (activeFilter === 'all') return true;
  if (activeFilter === 'problem' || activeFilter === 'theory') return entry.type === activeFilter;
  return entry.theme === activeFilter;
}

function getResults() {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  return CDE_DATA
    .filter(e => matchesFilter(e))
    .map(e => ({ entry: e, sc: score(e, terms) }))
    .filter(x => x.sc > 0)
    .sort((a, b) => b.sc - a.sc)
    .map(x => x.entry);
}

// ── Highlight query terms in title ────────────────────────────────
function highlightTitle(title) {
  if (!query.trim()) return escHtml(title);
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  let result = escHtml(title);
  terms.forEach(t => {
    const re = new RegExp('(' + escRe(t) + ')', 'gi');
    result = result.replace(re, '<span class="highlight">$1</span>');
  });
  return result;
}

function escHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function escRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ── Badge helpers ──────────────────────────────────────────────────
function themeBadgeClass(theme) {
  const map = { 'TEMA 1':'t1','TEMA 2':'t2','TEMA 3':'t3','TEMA 4':'t4','TEMA 5':'t5','TEORIE':'teorie' };
  return 'badge-' + (map[theme] || 'teorie');
}

// ── Markdown + Math (protect math from marked) ────────────────────
function markdownWithMath(src) {
  const stash = [];

  // Protect $$ ... $$ display blocks first
  src = src.replace(/\$\$([\s\S]*?)\$\$/g, (m) => {
    stash.push(m);
    return `\x00MATH${stash.length - 1}\x00`;
  });

  // Protect $ ... $ inline (single-line only)
  src = src.replace(/\$([^\$\n]+?)\$/g, (m) => {
    stash.push(m);
    return `\x00MATH${stash.length - 1}\x00`;
  });

  // Now safe to parse markdown
  let html = marked.parse(src);

  // Restore math tokens
  html = html.replace(/\x00MATH(\d+)\x00/g, (_, i) => stash[+i]);

  return html;
}

// ── Render ─────────────────────────────────────────────────────────
function render() {
  const results = getResults();
  const info = document.getElementById('info');
  const container = document.getElementById('results');

  info.textContent = results.length
    ? results.length + ' rezultat' + (results.length === 1 ? '' : 'e')
    : '';

  if (!results.length) {
    container.innerHTML = `<div class="empty">
      <strong>Niciun rezultat</strong> pentru "<em>${escHtml(query)}</em>"<br>
      <small>Încearcă: ohm, kirchhoff, dioda, paralel, serie, RE, mA, divisor…</small>
    </div>`;
    return;
  }

  container.innerHTML = results.map(e => `
    <div class="card" id="card-${e.id}">
      <div class="card-header" onclick="toggleCard(${e.id})">
        <div class="card-badges">
          <span class="badge badge-${e.type}">${e.type === 'problem' ? 'Problemă' : 'Teorie'}</span>
          ${e.theme !== 'TEORIE' ? `<span class="badge ${themeBadgeClass(e.theme)}">${e.theme}</span>` : ''}
        </div>
        <div class="card-title">
          <div class="card-title-text">${highlightTitle(e.title)}</div>
          <div class="card-subtitle">${escHtml(e.themeTitle)}</div>
        </div>
        <svg class="card-chevron" width="16" height="16" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
      <div class="card-body" id="body-${e.id}">
        ${markdownWithMath(e.content)}
      </div>
    </div>
  `).join('');

  // Auto-open first card when searching
  if (query.trim() && results.length > 0) {
    const first = document.getElementById('card-' + results[0].id);
    if (first) first.classList.add('open');
  }

  renderAllMath();
  if (query.trim()) highlightContent(query.toLowerCase().split(/\s+/).filter(Boolean));
}

function highlightContent(terms) {
  if (!terms.length) return;
  const re = new RegExp('(' + terms.map(escRe).join('|') + ')', 'gi');
  document.querySelectorAll('.card-body').forEach(body => {
    // Walk all text nodes, skip katex and code subtrees
    const walker = document.createTreeWalker(body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const p = node.parentElement;
        if (p.closest('.katex, code, pre')) return NodeFilter.FILTER_REJECT;
        return node.textContent.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    const nodes = [];
    let n; while ((n = walker.nextNode())) nodes.push(n);
    nodes.forEach(textNode => {
      if (!re.test(textNode.textContent)) return;
      re.lastIndex = 0;
      const frag = document.createDocumentFragment();
      let last = 0, m;
      re.lastIndex = 0;
      while ((m = re.exec(textNode.textContent)) !== null) {
        if (m.index > last) frag.appendChild(document.createTextNode(textNode.textContent.slice(last, m.index)));
        const mark = document.createElement('span');
        mark.className = 'highlight';
        mark.textContent = m[1];
        frag.appendChild(mark);
        last = m.index + m[1].length;
      }
      if (last < textNode.textContent.length) frag.appendChild(document.createTextNode(textNode.textContent.slice(last)));
      textNode.parentNode.replaceChild(frag, textNode);
    });
  });
}

function toggleCard(id) {
  const card = document.getElementById('card-' + id);
  card.classList.toggle('open');
  if (card.classList.contains('open')) {
    renderAllMath();
    if (query.trim()) highlightContent(query.toLowerCase().split(/\s+/).filter(Boolean));
  }
}

// ── Fullscreen ─────────────────────────────────────────────────────
function isFullscreenActive() {
  return !!document.fullscreenElement;
}

function updateFullscreenButton() {
  const enterIcon = document.getElementById('fullscreenIconEnter');
  const exitIcon = document.getElementById('fullscreenIconExit');
  const btn = document.getElementById('fullscreenBtn');
  if (!btn || !enterIcon || !exitIcon || !fullscreenEnabled) return;

  const active = isFullscreenActive();
  enterIcon.style.display = active ? 'none' : '';
  exitIcon.style.display  = active ? '' : 'none';
  btn.setAttribute('aria-label', active ? 'Ieșire din ecran complet' : 'Intră în ecran complet');
  btn.title = active ? 'Ieșire ecran complet' : 'Ecran complet';
}

async function toggleFullscreen() {
  try {
    if (isFullscreenActive()) {
      await document.exitFullscreen();
    } else {
      await document.documentElement.requestFullscreen();
    }
  } catch (_) {
    // Ignore if the browser blocks fullscreen in current context.
  }
}

// ── Events ─────────────────────────────────────────────────────────
const searchEl = document.getElementById('search');

// Android cover-screen keyboard fix:
// The input starts readonly so Samsung Internet doesn't suppress the keyboard.
// On touchstart we drop readonly and force focus, which triggers the IME.
searchEl.addEventListener('touchstart', function () {
  this.removeAttribute('readonly');
  this.focus();
}, { passive: true });

searchEl.addEventListener('focus', function () {
  this.removeAttribute('readonly');
});

searchEl.addEventListener('input', e => {
  query = e.target.value;
  render();
});

document.getElementById('filters').addEventListener('click', e => {
  const chip = e.target.closest('.chip');
  if (!chip) return;
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  activeFilter = chip.dataset.filter;
  render();
});

const fsBtn = document.getElementById('fullscreenBtn');
fullscreenEnabled = !!(document.fullscreenEnabled && document.documentElement.requestFullscreen);
if (fullscreenEnabled && fsBtn) {
  fsBtn.hidden = false;
  fsBtn.addEventListener('click', toggleFullscreen);
  document.addEventListener('fullscreenchange', updateFullscreenButton);
  updateFullscreenButton();
}

// ── Init ───────────────────────────────────────────────────────────
render();
