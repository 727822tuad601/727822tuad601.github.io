/* Loading screen with REAL progress: every asset registers a task and reports when it's done. */
(function () {
  const AG = window.AG;
  const el = document.getElementById("loader");
  const num = document.getElementById("loader-num");
  const bar = document.getElementById("loader-bar");
  const log = document.getElementById("loader-log");
  const txt = document.getElementById("loader-text");
  const tasks = [];
  let shown = 0, closed = false, started = performance.now();
  const MIN = AG.reduced ? 200 : 1300, MAX = 12000;
  const doneHandlers = [];

  if (txt) txt.textContent = "Loading level 00 · " + ((AG.data.site && AG.data.site.loaderText) || "");

  function line(name) {
    const li = document.createElement("li");
    li.textContent = "· " + name;
    log && log.appendChild(li);
    while (log && log.children.length > 6) log.firstChild.remove();
    return li;
  }

  AG.loader = {
    /* returns { progress(0..1), done() } */
    add(name) {
      const t = { name, p: 0, done: false, li: line(name) };
      tasks.push(t);
      t.li.classList.add("is-on");
      return {
        progress(v) { t.p = AG.clamp(v, 0, 1); },
        done(ok = true) {
          if (t.done) return;
          t.done = true; t.p = 1;
          t.li.textContent = (ok ? "✓ " : "× ") + name;
          t.li.classList.remove("is-on");
          if (!ok) t.li.classList.add("is-err");
        }
      };
    },
    onDone(f) { closed ? f() : doneHandlers.push(f); },
    get closed() { return closed; }
  };

  function real() {
    if (!tasks.length) return 0;
    return tasks.reduce((s, t) => s + (t.done ? 1 : t.p), 0) / tasks.length;
  }

  function tick() {
    if (closed) return;
    const r = real();
    const elapsed = performance.now() - started;
    shown += (r - shown) * 0.12;
    if (r === 1 && shown > 0.995) shown = 1;
    const v = Math.round(shown * 100);
    if (num) num.textContent = v;
    if (bar) bar.style.transform = `scaleX(${shown})`;
    const allDone = tasks.length && tasks.every((t) => t.done);
    if ((allDone && shown >= 1 && elapsed > MIN) || elapsed > MAX) return close();
    requestAnimationFrame(tick);
  }

  function close() {
    closed = true;
    if (num) num.textContent = 100;
    if (bar) bar.style.transform = "scaleX(1)";
    document.documentElement.classList.add("is-loaded");
    setTimeout(() => {
      el && el.classList.add("is-out");
      doneHandlers.forEach((f) => f());
      setTimeout(() => el && el.remove(), 1400);
    }, AG.reduced ? 0 : 250);
  }

  // Fonts are always a task
  const fonts = AG.loader.add("fonts.woff2");
  (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(() => fonts.done());

  /* Track a list of images */
  AG.loader.images = function (urls, label) {
    urls.filter(Boolean).forEach((u) => {
      const t = AG.loader.add(label || u.split("/").slice(-2).join("/"));
      const im = new Image();
      im.onload = () => t.done();
      im.onerror = () => t.done(false);
      im.src = u;
    });
  };

  AG.loader.start = () => requestAnimationFrame(tick);
})();
