/* Boot: build the page from data, then switch on loader, cursor, scroll, modals and the 3D world. */
(function () {
  const AG = window.AG;
  const S = AG.data.site;
  const html = document.documentElement;

  /* accent colour from data/site.js */
  if (S.accent) html.style.setProperty("--acc-dark", S.accent);
  if (S.accentLight) html.style.setProperty("--acc-light", S.accentLight);
  if (S.effects && S.effects.grain === false) html.classList.add("no-grain");
  if (!AG.storage.get("ag-theme") && S.defaultTheme) html.dataset.theme = S.defaultTheme;

  AG.renderAll();

  /* theme toggle */
  const tb = document.getElementById("theme-btn");
  function syncTheme() {
    const light = html.dataset.theme === "light";
    tb.querySelector("span").textContent = light ? "Light" : "Dark";
    document.querySelector('meta[name="theme-color"]').setAttribute("content", light ? "#f2ede6" : "#0b0a0c");
  }
  tb.addEventListener("click", () => {
    html.classList.add("theme-anim");
    html.dataset.theme = html.dataset.theme === "light" ? "dark" : "light";
    AG.storage.set("ag-theme", html.dataset.theme);
    syncTheme();
    AG.emit("theme", html.dataset.theme);
    setTimeout(() => html.classList.remove("theme-anim"), 700);
  });
  syncTheme();

  /* typing roles */
  (function typed() {
    const el = document.getElementById("typed");
    const words = (AG.data.profile.roles || []).filter(Boolean);
    if (!el || !words.length) return;
    if (AG.reduced) { el.textContent = words[0]; return; }
    let w = 0, i = 0, del = false;
    (function step() {
      const word = words[w];
      i += del ? -1 : 1;
      el.textContent = word.slice(0, i);
      let wait = del ? 40 : 85;
      if (!del && i === word.length) { del = true; wait = 1600; }
      else if (del && i === 0) { del = false; w = (w + 1) % words.length; wait = 300; }
      setTimeout(step, wait);
    })();
  })();

  /* model cards: flip through renders on hover (cheap "turntable") */
  document.addEventListener("pointerover", (e) => {
    const card = e.target.closest && e.target.closest(".mcard");
    if (!card || card._flip) return;
    const img = card.querySelector("img[data-flip]");
    if (!img || AG.reduced) return;
    const frames = JSON.parse(img.dataset.flip);
    const first = img.src;
    let k = 0;
    card._flip = setInterval(() => { k = (k + 1) % frames.length; img.src = frames[k]; }, 650);
    card.addEventListener("pointerleave", () => { clearInterval(card._flip); card._flip = null; img.src = first; }, { once: true });
  });

  /* reels: hover = muted preview, filters */
  document.addEventListener("pointerover", (e) => {
    const r = e.target.closest && e.target.closest(".reel");
    if (!r || r._pv || AG.touch) return;
    const slot = r.querySelector("[data-preview]");
    if (!slot) return;
    r._pv = true;
    const v = document.createElement("video");
    Object.assign(v, { src: slot.dataset.preview, muted: true, loop: true, playsInline: true, autoplay: true });
    v.setAttribute("muted", "");
    slot.appendChild(v);
    v.play().catch(() => {});
    requestAnimationFrame(() => slot.classList.add("is-on"));
    r.addEventListener("pointerleave", () => { slot.classList.remove("is-on"); setTimeout(() => { v.pause(); v.remove(); r._pv = false; }, 300); }, { once: true });
  });
  document.getElementById("reel-filters").addEventListener("click", (e) => {
    const b = e.target.closest("[data-filter]");
    if (b) AG.setReelFilter(b.dataset.filter);
  });

  /* loader: track the images the first screen needs */
  const firstImgs = AG.sorted(AG.data.models).slice(0, 4).map(AG.thumbOf);
  AG.loader.images(firstImgs.filter(Boolean));

  AG.initCursor();
  AG.initMagnetic();
  AG.initTilt();
  AG.initScroll();
  AG.initModal();
  AG.initHeroWorld();
  AG.loader.start();
  AG.loader.onDone(() => html.classList.add("is-ready"));
})();
