/* projects.js — читает projects.json, рисует список проектов
   и открывает окно с деталями по клику.
   Чтобы добавить/изменить проект, правь только projects.json — этот файл трогать не нужно. */
(function () {
  var list = document.getElementById('projects');
  var modal = document.getElementById('modal');
  var body = document.getElementById('mbody');
  var closeBtn = document.getElementById('mx');
  var lastFocus = null;
  if (!list || !modal) return; /* если блока нет на странице — тихо выходим */

  /* Короткий помощник: создаёт элемент. Текст вставляем через textContent,
     поэтому спецсимволы из JSON не сломают страницу */
  function el(tag, cls, txt) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (txt != null) e.textContent = txt;
    return e;
  }

  /* Загружаем JSON. Если открыть index.html двойным кликом (file://),
     браузер заблокирует fetch — тогда показываем подсказку */
  fetch('projects.json')
    .then(function (r) { if (!r.ok) throw 0; return r.json(); })
    .then(function (d) { render(d.projects || []); })
    .catch(function () {
      list.appendChild(el('p', 'dim', 'Projekte konnten nicht geladen werden. Öffne die Seite über einen Server (z. B. VS Code Live Server), nicht per Doppelklick.'));
    });

  /* Список проектов: каждая строка — кнопка, открывающая детали */
  function render(projects) {
    projects.forEach(function (p, i) {
      var b = el('button', 'row');
      b.type = 'button';
      b.appendChild(el('span', 'dim', String(i + 1).padStart(2, '0')));
      var mid = el('span');
      mid.appendChild(el('span', 'ttl', p.title));
      mid.appendChild(el('span', 'dim', (p.category ? p.category + ' · ' : '') + (p.summary || '')));
      b.appendChild(mid);
      b.appendChild(el('span', 'dim', p.year || ''));
      b.onclick = function () { openModal(p); };
      list.appendChild(b);
    });
  }

  /* Картинка. Если файла нет — вместо неё точечная заглушка */
  function img(item, p, n) {
    var src = typeof item === 'string' ? item : item.src;
    var alt = (typeof item === 'object' && item.alt) || p.title + ' – Bild ' + n;
    var i = el('img');
    i.src = src; i.alt = alt; i.loading = 'lazy';
    i.onerror = function () { i.replaceWith(el('div', 'ph', '[ bild folgt ]')); };
    return i;
  }

  /* Окно с деталями проекта */
  function openModal(p) {
    body.textContent = '';
    var meta = [p.year, p.category, p.role].filter(Boolean).join(' · ');
    body.appendChild(el('div', 'lbl', meta));
    body.appendChild(el('h2', 'mt', p.title));
    if (p.description) body.appendChild(el('p', null, p.description));

    if (p.highlights && p.highlights.length) {
      var ul = el('ul', 'hl');
      p.highlights.forEach(function (h) { ul.appendChild(el('li', null, h)); });
      body.appendChild(ul);
    }
    if (p.tech && p.tech.length) {
      var t = el('div', 'skills');
      p.tech.forEach(function (x) { t.appendChild(el('span', null, x)); });
      body.appendChild(t);
    }
    if (p.images && p.images.length) {
      var g = el('div', 'gal');
      p.images.forEach(function (it, k) { g.appendChild(img(it, p, k + 1)); });
      body.appendChild(g);
    }
    var btns = el('div', 'btns');
    if (p.links && p.links.live) { var a = el('a', null, 'live ansehen ↗'); a.href = p.links.live; a.target = '_blank'; a.rel = 'noopener'; btns.appendChild(a); }
    if (p.links && p.links.github) { var c = el('a', null, 'github ↗'); c.href = p.links.github; c.target = '_blank'; c.rel = 'noopener'; btns.appendChild(c); }
    if (btns.children.length) body.appendChild(btns);

    lastFocus = document.activeElement;
    modal.hidden = false;
    modal.scrollTop = 0;
    document.body.style.overflow = 'hidden'; /* страница под окном не скроллится */
    closeBtn.focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }

  /* Закрытие: крестик, клик по тёмному фону или клавиша Esc */
  closeBtn.onclick = closeModal;
  modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !modal.hidden) closeModal(); });
})();
