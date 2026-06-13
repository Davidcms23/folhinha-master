/* ── State ───────────────────────────────────────────── */
const TOTAL_DAYS = 30;

let done = [];
try { done = JSON.parse(localStorage.getItem('probpath_done') || '[]'); } catch (e) {}

let curDay  = null;
let curCard = 0;

/* ── Persistence ─────────────────────────────────────── */
function save() {
  try { localStorage.setItem('probpath_done', JSON.stringify(done)); } catch (e) {}
}

/* ── Grid ────────────────────────────────────────────── */
function renderGrid() {
  const grid = document.getElementById('days-grid');
  grid.innerHTML = '';

  for (let i = 0; i < TOTAL_DAYS; i++) {
    const day   = DAYS[i] || null;
    const isDone   = done.includes(i);
    const isActive = curDay === i;
    const isLocked = !day;

    const cell = document.createElement('div');
    cell.className = [
      'day-cell',
      isDone   ? 'done'   : '',
      isActive ? 'active' : '',
      isLocked ? 'locked' : ''
    ].join(' ').trim();

    cell.setAttribute('role', 'listitem');
    cell.setAttribute('aria-label', day
      ? `Dia ${i + 1}: ${day.label}${isDone ? ' (concluído)' : ''}`
      : `Dia ${i + 1}: em breve`
    );

    const numEl = document.createElement('div');
    numEl.className = 'dc-num' + (isDone ? ' done-mark' : '');
    numEl.textContent = `Day ${i + 1}`;

    const labelEl = document.createElement('div');
    labelEl.className = 'dc-label';
    if (day) {
      labelEl.innerHTML = day.label;
    } else {
      labelEl.textContent = 'Em breve';
      labelEl.style.fontWeight = '400';
    }

    cell.appendChild(numEl);
    cell.appendChild(labelEl);

    if (day) {
      cell.style.cursor = 'pointer';
      cell.addEventListener('click', () => openDay(i));
    }

    grid.appendChild(cell);
  }

  updateProgress();
}

function updateProgress() {
  const n     = done.length;
  const pct   = Math.round(n / TOTAL_DAYS * 100);
  const dayNo = Math.min(n + 1, TOTAL_DAYS);

  document.getElementById('prog-label').textContent =
    `Overall progress: Day ${dayNo} of ${TOTAL_DAYS}`;
  document.getElementById('prog-fill').style.width = pct + '%';
}

/* ── Open a day ──────────────────────────────────────── */
function openDay(i) {
  curDay  = i;
  curCard = 0;

  const day = DAYS[i];

  document.getElementById('panel').classList.add('visible');
  document.getElementById('empty-state').style.display = 'none';
  document.getElementById('panel-title').innerHTML = `Day ${i + 1}: ${day.label}`;
  document.getElementById('panel-tag').textContent = day.tag;

  const doneBtn = document.getElementById('done-btn');
  const alreadyDone = done.includes(i);
  doneBtn.disabled = alreadyDone;
  doneBtn.innerHTML = alreadyDone
    ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/></svg> Concluído`
    : `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/></svg> Mark day as done`;

  renderCard();
  renderGrid();

  document.getElementById('panel').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ── Render current card ─────────────────────────────── */
function renderCard() {
  if (curDay === null) return;

  const cards = DAYS[curDay].cards;
  const card  = cards[curCard];

  document.getElementById('card-counter').textContent = `${curCard + 1} / ${cards.length}`;
  document.getElementById('btn-prev').disabled = curCard === 0;
  document.getElementById('btn-next').disabled = curCard === cards.length - 1;

  const qEl = document.getElementById('card-q');
  const aEl = document.getElementById('card-a');

  qEl.innerHTML = card.q;
  aEl.innerHTML = card.a;

  if (window.MathJax && MathJax.typesetPromise) {
    MathJax.typesetPromise([qEl, aEl]).catch(() => {});
  }
}

/* ── Navigation ──────────────────────────────────────── */
function prevCard() {
  if (curCard > 0) { curCard--; renderCard(); }
}

function nextCard() {
  if (curDay !== null && curCard < DAYS[curDay].cards.length - 1) {
    curCard++;
    renderCard();
  }
}

/* ── Keyboard navigation ─────────────────────────────── */
document.addEventListener('keydown', (e) => {
  if (curDay === null) return;
  if (e.key === 'ArrowLeft')  prevCard();
  if (e.key === 'ArrowRight') nextCard();
});

/* ── Copy helpers ────────────────────────────────────── */
function flashBtn(btn, label) {
  const original = btn.innerHTML;
  btn.classList.add('ok');
  btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> ${label}`;
  setTimeout(() => {
    btn.classList.remove('ok');
    btn.innerHTML = original;
  }, 1800);
}

function copyAnki(btn) {
  if (curDay === null) return;
  const card = DAYS[curDay].cards[curCard];
  const text = `${card.q.replace(/<[^>]*>/g, '')}\t${card.raw}`;
  navigator.clipboard.writeText(text).then(() => flashBtn(btn, 'Copiado!'));
}

function copyLatex(btn) {
  if (curDay === null) return;
  const card = DAYS[curDay].cards[curCard];
  navigator.clipboard.writeText(card.raw).then(() => flashBtn(btn, 'Copiado!'));
}

/* ── Mark done ───────────────────────────────────────── */
function markDone() {
  if (curDay === null || done.includes(curDay)) return;
  done.push(curDay);
  save();
  openDay(curDay);
}

/* ── Init ────────────────────────────────────────────── */
renderGrid();
