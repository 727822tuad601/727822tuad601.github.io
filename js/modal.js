/* Detail views for every item. Each has a shareable link (#model/hammer, #game/troll-level, #video/…, #project/…, #resume).
   Opens with an animated transition; closes with X, Esc, clicking outside or the browser Back button. */
(function () {
  const AG = window.AG;
  const { esc, $ } = AG;
  const modal = $("#modal"), body = $("#modal-body"), closeBtn = $("#modal-close"), panel = $("#modal-panel");
  let viewer = null, isOpen = false, pushedByUs = false, lastFocus = null, closeTimer = 0;
  const KEY = { model: "models", game: "games", video: "videos", project: "projects" };

  function parse(h) {
    if (h === "#resume") return { type: "resume" };
    const m = (h || "").match(/^#(model|game|video|project)\/([\w-]+)(\/play)?$/);
    return m ? { type: m[1], id: m[2], play: !!m[3] } : null;
  }

  function neighbours(type, id) {
    let list = AG.sorted(AG.data[KEY[type]] || []);
    const cur = AG.find(type, id);
    if (type === "model" && cur && cur.collection) {
      const c = AG.find("model", cur.collection);
      if (c) list = (c.items || []).map((x) => AG.find("model", x)).filter(Boolean);
    }
    const i = list.findIndex((x) => x.id === id);
    if (list.length < 2 || i < 0) return "";
    const prev = list[(i - 1 + list.length) % list.length], next = list[(i + 1) % list.length];
    return `<nav class="pn mono" aria-label="More ${type}s">
      <a href="#${type}/${esc(prev.id)}" data-replace><span>← Prev</span><b>${esc(prev.title)}</b></a>
      <a href="#${type}/${esc(next.id)}" data-replace><span>Next →</span><b>${esc(next.title)}</b></a></nav>`;
  }

  const gallery = (imgs, label) =>
    imgs && imgs.filter(Boolean).length
      ? `<div class="gal"><h3 class="mono">${label}</h3><div class="gal__row">${imgs
          .filter(Boolean)
          .map((s, i) => `<button class="gal__item" data-lightbox="${esc(s)}" data-cursor="view" aria-label="Open image ${i + 1}"><img src="${esc(s)}" alt="" loading="lazy"></button>`)
          .join("")}</div></div>`
      : "";

  const meta = (rows) => {
    const r = rows.filter((x) => x[1]);
    return r.length ? `<dl class="meta mono">${r.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>` : "";
  };

  /* ---- 3D model extras: build specs, materials, texture maps (all optional, from data/models.js) ---- */
  const TEX_INFO = {
    BaseColor: ["Base Color", "Surface colour, painted wear and dirt (sRGB)"],
    Normal: ["Normal", "Fine bumps, grain and scratches (OpenGL, tangent space)"],
    Roughness: ["Roughness", "How matte or glossy each area is"],
    Metallic: ["Metallic", "Which areas are bare metal"],
    AO: ["Ambient Occlusion", "Soft contact shadows in crevices"],
    Emission: ["Emission", "Self-lit parts: eyes, lights, lens"],
    MetallicSmoothness: ["Metallic-Smoothness", "Unity packed map (R metallic · A smoothness)"],
    ORM: ["ORM", "Unreal / glTF packed map (R AO · G rough · B metal)"]
  };

  const specs = (rows) => {
    const r = (rows || []).filter((x) => x && x[1]);
    return r.length
      ? `<section class="mx"><h3 class="mono m__h">Build specs</h3><dl class="meta meta--specs mono">${r
          .map(([k, v]) => `<div${String(v).length > 22 ? ' class="is-wide"' : ""}><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`)
          .join("")}</dl></section>`
      : "";
  };

  const materials = (mt) => {
    if (!mt || (!mt.summary && !(mt.list || []).length)) return "";
    return `<section class="mx"><h3 class="mono m__h">Materials &amp; surfaces</h3>
      ${mt.summary ? `<div class="m__desc">${AG.paras(mt.summary)}</div>` : ""}
      ${(mt.list || []).length ? `<div class="mats">${mt.list
        .map((x) => `<details class="mat"><summary><i class="mat__sw" style="--sw:${esc(x.color || "#777")}"></i><b>${esc(x.name)}</b><span class="mono">${esc(x.zone || "")}</span><em class="mat__plus" aria-hidden="true"></em></summary>${x.desc ? `<p>${esc(x.desc)}</p>` : ""}</details>`)
        .join("")}</div><p class="mx__hint mono">Tap a material for details</p>` : ""}
    </section>`;
  };

  const textures = (tx) => {
    const maps = (tx && tx.maps) || [];
    if (!maps.length) return "";
    const line = [maps.length + " maps", tx.resolution, tx.format].filter(Boolean).map(esc).join(" · ");
    return `<section class="mx"><h3 class="mono m__h">Texture maps</h3><p class="mx__line mono">${line}</p>
      <div class="tex">${maps
        .map((m) => {
          const [l0, u0] = TEX_INFO[m.map] || [m.map, ""];
          const label = m.label || l0, use = m.use || u0;
          return `<button class="tex__item" data-lightbox="${esc(m.file || m.preview)}" data-cursor="view" aria-label="Open ${esc(label)} map">
            <img src="${esc(m.preview || m.file)}" alt="" loading="lazy">
            <span class="tex__txt"><b class="mono">${esc(label)}</b><small>${esc(use)}</small><small class="mono tex__sz">${esc(m.size || "")}</small></span></button>`;
        })
        .join("")}</div></section>`;
  };

  const head = (item, type) => `
    <small class="lvl mono">${esc(type)} · ${[item.category, item.year].filter(Boolean).map(esc).join(" · ")}</small>
    <h2 class="m__title disp" id="modal-title">${esc(item.title)}</h2>
    ${AG.badge(item.status)}`;

  /* ---------------- templates ---------------- */
  /* Collection page: description, totals and a grid of every model inside it */
  function tplCollection(c) {
    const items = (c.items || []).map((x) => AG.find("model", x)).filter(Boolean);
    const img = AG.thumbOf(c);
    return `
    <div class="pd coll">
      ${img ? `<div class="gd__stage coll__hero"><img src="${esc(img)}" alt="${esc(c.title)}"></div>` : ""}
      <div class="gd__grid">
        <div>${head(c, "Collection")}
          ${c.shortDescription ? `<p class="m__lead">${esc(c.shortDescription)}</p>` : ""}
          ${c.longDescription ? `<div class="m__desc">${AG.paras(c.longDescription)}</div>` : ""}
        </div>
        <div class="gd__side">${meta(c.collectionStats || [])}${meta([["Software", (c.software || []).join(", ")]])}${AG.chips(c.tags)}</div>
      </div>
      <section class="mx"><h3 class="mono m__h">Models in this collection · ${items.length}</h3>
        <div class="coll__grid">${items
          .map((x, i) => `<a class="coll__item sel" href="#model/${esc(x.id)}" data-replace data-cursor="view" style="--i:${i}">${AG.handles}
            <span class="coll__img">${AG.thumbOf(x) ? `<img src="${esc(AG.thumbOf(x))}" alt="" loading="lazy">` : ""}</span>
            <b>${esc(x.title)}</b><span class="mono">${esc([x.category, ((x.specs || []).find((s) => s[0] === "Triangles") || [])[1] ? ((x.specs || []).find((s) => s[0] === "Triangles")[1] + " tris") : ""].filter(Boolean).join(" · "))}</span></a>`)
          .join("")}</div></section>
      ${neighbours("model", c.id)}
    </div>`;
  }

  function tplModel(m) {
    if (m.type === "collection") return tplCollection(m);
    const coll = m.collection ? AG.find("model", m.collection) : null;
    const inColl = coll ? (coll.items || []).indexOf(m.id) : -1;
    const i = inColl >= 0 ? inColl : AG.sorted(AG.data.models).findIndex((x) => x.id === m.id);
    const thumb = AG.thumbOf(m);
    return `
    <div class="mv">
      <div class="mv__stage" id="mv-stage" ${m.model ? 'data-cursor="drag"' : ""}>
        ${thumb ? `<img class="mv__poster" id="mv-poster" src="${esc(thumb)}" alt="">` : ""}
        <div class="mv__canvas" id="mv-canvas"></div>
        ${m.model ? `
        <div class="mv__progress mono" id="mv-progress"><div class="bar"><i></i></div><span>Loading model 0%</span></div>
        <div class="mv__tools mono" role="toolbar" aria-label="Viewer controls">
          <button data-mv="rotate" aria-pressed="true"><i class="fa-solid fa-rotate"></i><span>Rotate</span></button>
          <button data-mv="wire" aria-pressed="false"><i class="fa-solid fa-border-none"></i><span>Wireframe</span></button>
          <button data-mv="light"><i class="fa-solid fa-lightbulb"></i><span>Studio</span></button>
          <button data-mv="grid" aria-pressed="true"><i class="fa-solid fa-table-cells"></i><span>Grid</span></button>
          <button data-mv="reset"><i class="fa-solid fa-crosshairs"></i><span>Reset</span></button>
          <button data-mv="full"><i class="fa-solid fa-expand"></i><span>Full</span></button>
        </div>` : ""}
        <div class="mv__hud mono">${coll ? "SET" : "EXH"}_${String(i + 1).padStart(2, "0")} ${m.model ? "· drag to orbit · scroll to zoom" : ""}</div>
      </div>
      <aside class="mv__info">
        ${coll ? `<a class="back mono" href="#model/${esc(coll.id)}" data-replace>← ${esc(coll.title)}</a>` : ""}
        ${head(m, "3D Model")}
        ${m.longDescription || m.shortDescription ? `<div class="m__desc">${AG.paras(m.longDescription || m.shortDescription)}</div>` : ""}
        ${meta([["Software", (m.software || []).join(", ")], ["Category", m.category], ["Year", m.year], ["Format", m.model ? AG.ext(m.model).toUpperCase() : ""]])}
        ${AG.chips(m.tags)}
        ${specs(m.specs)}
        ${materials(m.materials)}
        ${textures(m.textures)}
        ${gallery([...(m.renders || []), ...(m.gallery || [])], "Renders")}
        ${m.video ? `<div class="m__video">${AG.media(m.video, { autoplay: false, poster: thumb })}</div>` : ""}
        ${AG.linkButtons(m.links)}
        ${neighbours("model", m.id)}
      </aside>
    </div>`;
  }

  function tplGame(g, play) {
    const cover = g.cover || AG.thumbOf(g);
    const shots = (g.screenshots || []).filter(Boolean);
    let stage;
    if (play && g.links && g.links.webgl)
      stage = `<div class="gd__stage gd__stage--play"><iframe src="${esc(g.links.webgl)}" title="${esc(g.title)} — playable build" allow="autoplay; fullscreen; gamepad" allowfullscreen></iframe><button class="btn btn--ghost mono gd__fs" data-fs><i class="fa-solid fa-expand"></i> Fullscreen</button></div>`;
    else if (g.trailer) stage = `<div class="gd__stage">${AG.media(g.trailer, { autoplay: false, poster: cover })}</div>`;
    else stage = `<div class="gd__stage">${cover ? `<img src="${esc(cover)}" alt="${esc(g.title)} cover">` : `<div class="art-ph"><span class="disp">${esc(g.title)}</span><small class="mono">Trailer & screenshots coming soon</small></div>`}</div>`;
    return `
    <div class="gd">
      ${stage}
      <div class="gd__grid">
        <div>
          ${head(g, "Game")}
          ${g.shortDescription ? `<p class="m__lead">${esc(g.shortDescription)}</p>` : ""}
          ${g.longDescription ? `<div class="m__desc">${AG.paras(g.longDescription)}</div>` : ""}
          ${(g.features || []).length ? `<h3 class="mono m__h">Features</h3><ul class="ticks">${g.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>` : ""}
        </div>
        <div class="gd__side">
          ${AG.linkButtons(g.links, { big: true, playId: g.id }) || `<p class="note mono"><i class="fa-solid fa-hourglass-half"></i> Download links coming soon</p>`}
          ${meta([["Platform", g.platform], ["Engine", g.engine], ["Year", g.year], ["Status", AG.statusLabel[g.status] || g.status], ["Tools", (g.software || []).join(", ")]])}
          ${AG.chips(g.tags)}
        </div>
      </div>
      ${shots.length ? `<div class="car"><h3 class="mono m__h">Screenshots</h3><div class="car__track" data-native-scroll>${shots.map((s) => `<button class="car__item" data-lightbox="${esc(s)}" data-cursor="view"><img src="${esc(s)}" alt="" loading="lazy"></button>`).join("")}</div>
        <div class="car__nav"><button class="btn btn--ghost mono" data-car="-1" aria-label="Previous screenshots">←</button><button class="btn btn--ghost mono" data-car="1" aria-label="Next screenshots">→</button></div></div>` : ""}
      ${neighbours("game", g.id)}
    </div>`;
  }

  function tplVideo(v) {
    return `
    <div class="vd">
      <div class="vd__stage">${AG.media(v.video, { autoplay: true, poster: AG.thumbOf(v) }) || `<div class="art-ph"><span class="disp">${esc(v.title)}</span></div>`}</div>
      <div class="vd__info">
        <div>${head(v, "Video")}${v.specs ? `<p class="m__specs mono">${esc(v.specs)}</p>` : ""}</div>
        <div>
          ${v.longDescription || v.shortDescription ? `<div class="m__desc">${AG.paras(v.longDescription || v.shortDescription)}</div>` : ""}
          ${(v.highlights || []).length ? `<h3 class="mono m__h">What makes it special</h3><ul class="ticks">${v.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>` : ""}
          ${v.howToWatch ? `<h3 class="mono m__h">How to watch it</h3><div class="m__desc">${AG.paras(v.howToWatch)}</div>` : ""}
          ${v.purpose ? `<h3 class="mono m__h">Purpose</h3><div class="m__desc">${AG.paras(v.purpose)}</div>` : ""}
          ${v.note ? `<p class="note mono vd__note"><i class="fa-solid fa-hourglass-half"></i> ${esc(v.note)}</p>` : ""}
          ${meta([["Software", (v.software || []).join(", ")], ["Duration", v.duration], ["Category", v.category], ["Status", v.status && v.status !== "completed" ? AG.statusLabel[v.status] : ""]])}
          ${AG.chips(v.tags)}
          ${AG.linkButtons(v.links)}
        </div>
      </div>
      ${gallery(v.gallery, "Stills")}
      ${neighbours("video", v.id)}
    </div>`;
  }

  function tplProject(p) {
    const img = AG.thumbOf(p);
    const prog = p.status === "in-progress" && p.progress != null ? AG.clamp(+p.progress, 0, 100) : null;
    return `
    <div class="pd">
      ${p.video ? `<div class="gd__stage">${AG.media(p.video, { autoplay: false, poster: img })}</div>` : img ? `<div class="gd__stage"><img src="${esc(img)}" alt=""></div>` : `<div class="gd__stage"><div class="art-ph"><span class="disp">${esc(p.title)}</span><small class="mono">${esc(AG.statusLabel[p.status] || "")}</small></div></div>`}
      <div class="gd__grid">
        <div>${head(p, "Project")}
          ${p.shortDescription ? `<p class="m__lead">${esc(p.shortDescription)}</p>` : ""}
          ${p.longDescription ? `<div class="m__desc">${AG.paras(p.longDescription)}</div>` : ""}
          ${prog != null ? `<div class="bar bar--lg"><i style="width:${prog}%"></i></div><span class="bar__n mono">${prog}% complete</span>` : ""}
        </div>
        <div class="gd__side">${AG.linkButtons(p.links, { big: true })}${meta([["Software", (p.software || []).join(", ")], ["Status", AG.statusLabel[p.status] || p.status], ["Year", p.year]])}${AG.chips(p.tags)}</div>
      </div>
      ${gallery([...(p.renders || []), ...(p.gallery || [])], "Gallery")}
      ${neighbours("project", p.id)}
    </div>`;
  }

  function tplResume() {
    const r = AG.data.profile.resume || {};
    return `
    <div class="rs">
      <div class="rs__head"><h2 class="m__title disp" id="modal-title">Resume</h2>
        <div class="btnrow">${r.pdf ? `<a class="btn mono" href="${esc(r.pdf)}" target="_blank" rel="noopener" download><i class="fa-solid fa-download"></i> PDF</a>` : ""}
        <a class="btn ${r.pdf ? "btn--ghost" : ""} mono" href="${esc(r.image)}" download="Akash-G-Resume.jpg"><i class="fa-solid fa-download"></i> Download image</a></div></div>
      <img class="rs__img" src="${esc(r.image)}" alt="Resume of ${esc(AG.data.profile.name || "")}">
    </div>`;
  }

  /* ---------------- open / close ---------------- */
  function render(route) {
    const item = route.type === "resume" ? {} : AG.find(route.type, route.id);
    if (!item) return false;
    cleanup();
    modal.dataset.type = route.type;
    body.innerHTML =
      route.type === "model" ? tplModel(item)
      : route.type === "game" ? tplGame(item, route.play)
      : route.type === "video" ? tplVideo(item)
      : route.type === "project" ? tplProject(item)
      : tplResume();
    body.scrollTop = 0;
    document.title = (item.title ? item.title + " — " : route.type === "resume" ? "Resume — " : "") + baseTitle;
    if (route.type === "model" && item.model) startViewer(item);
    return true;
  }

  function startViewer(m) {
    const stage = $("#mv-stage"), prog = $("#mv-progress"), poster = $("#mv-poster");
    const setP = (v) => {
      if (!prog) return;
      prog.querySelector("i").style.transform = `scaleX(${v})`;
      prog.querySelector("span").textContent = `Loading model ${Math.round(v * 100)}%`;
    };
    viewer = AG.viewer.mount($("#mv-canvas"), m.model, {
      progress: setP,
      ready() { setP(1); stage.classList.add("is-ready"); prog && prog.classList.add("is-done"); },
      fail() {
        stage.classList.add("is-failed");
        if (prog) prog.querySelector("span").textContent = AG.isFile ? "Open with Live Server / online to view in 3D" : "3D preview unavailable — showing render";
      }
    });
    stage.addEventListener("click", (e) => {
      const b = e.target.closest("[data-mv]");
      if (!b || !viewer) return;
      const s = viewer.state;
      const k = b.dataset.mv;
      if (k === "rotate") { viewer.setRotate(!s.rotate); b.setAttribute("aria-pressed", String(viewer.state.rotate)); }
      if (k === "wire") { viewer.setWire(!s.wire); b.setAttribute("aria-pressed", String(viewer.state.wire)); }
      if (k === "grid") { viewer.setGrid(!s.grid); b.setAttribute("aria-pressed", String(viewer.state.grid)); }
      if (k === "reset") viewer.reset();
      if (k === "light") {
        const keys = Object.keys(AG.viewer.presets);
        const next = keys[(keys.indexOf(s.light) + 1) % keys.length];
        viewer.setLight(next);
        b.querySelector("span").textContent = AG.viewer.presets[next].label;
      }
      if (k === "full") fullscreen(stage);
    });
  }

  function fullscreen(el) {
    if (document.fullscreenElement) document.exitFullscreen();
    else el.requestFullscreen && el.requestFullscreen().catch(() => {});
  }

  function cleanup() {
    if (viewer) { viewer.dispose(); viewer = null; }
    AG.$$("video,iframe", body).forEach((v) => { if (v.pause) v.pause(); v.removeAttribute("src"); });
    closeLightbox();
  }

  function openUI() {
    clearTimeout(closeTimer);
    if (isOpen) return;
    isOpen = true;
    lastFocus = document.activeElement;
    modal.hidden = false;
    AG.lockScroll(true);
    requestAnimationFrame(() => requestAnimationFrame(() => modal.classList.add("is-open")));
    setTimeout(() => closeBtn.focus({ preventScroll: true }), 60);
  }
  function closeUI() {
    if (!isOpen) return;
    isOpen = false;
    modal.classList.remove("is-open");
    AG.lockScroll(false);
    document.title = baseTitle;
    closeTimer = setTimeout(() => { cleanup(); body.innerHTML = ""; modal.hidden = true; }, AG.reduced ? 0 : 650);
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }

  /* user-initiated close: go back in history if we added the entry, otherwise just clear the hash */
  function requestClose() {
    if (!isOpen) return;
    if (pushedByUs) { pushedByUs = false; history.back(); }
    else { history.replaceState(null, "", location.pathname + location.search); closeUI(); }
  }

  function route() {
    const r = parse(location.hash);
    if (r && render(r)) openUI();
    else if (isOpen) closeUI();
  }

  /* ---------------- lightbox ---------------- */
  let lb = null;
  function openLightbox(src) {
    closeLightbox();
    lb = document.createElement("div");
    lb.className = "lb";
    lb.innerHTML = `<img src="${esc(src)}" alt=""><button class="lb__x mono" aria-label="Close image">Close ✕</button>`;
    modal.appendChild(lb);
    requestAnimationFrame(() => lb && lb.classList.add("is-in"));
  }
  function closeLightbox() { if (lb) { lb.remove(); lb = null; } }

  const baseTitle = document.title;

  AG.initModal = function () {
    document.addEventListener("click", (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (a && parse(a.getAttribute("href"))) {
        const replace = a.hasAttribute("data-replace") && isOpen;
        if (replace) { e.preventDefault(); history.replaceState(null, "", a.getAttribute("href")); route(); return; }
        if (!isOpen) pushedByUs = true;
      }
      const play = e.target.closest("[data-play-webgl]");
      if (play) {
        e.preventDefault();
        const h = `#game/${play.dataset.playWebgl}/play`;
        if (isOpen) { history.replaceState(null, "", h); route(); } else { pushedByUs = true; location.hash = h; }
      }
      const li = e.target.closest("[data-lightbox]");
      if (li) openLightbox(li.dataset.lightbox);
      if (e.target.closest(".lb")) closeLightbox();
      if (e.target.closest("[data-fs]")) fullscreen($(".gd__stage--play"));
      const car = e.target.closest("[data-car]");
      if (car) { const t = $(".car__track", body); t && t.scrollBy({ left: +car.dataset.car * t.clientWidth * 0.8, behavior: "smooth" }); }
      const copy = e.target.closest("[data-copy]");
      if (copy && navigator.clipboard) navigator.clipboard.writeText(copy.dataset.copy).then(() => AG.toast("Email copied to clipboard")).catch(() => {});
    });
    closeBtn.addEventListener("click", requestClose);
    modal.addEventListener("click", (e) => { if (e.target.hasAttribute("data-close")) requestClose(); });
    document.addEventListener("keydown", (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") { if (lb) closeLightbox(); else requestClose(); }
      if (e.key === "Tab") {
        const f = AG.$$('a[href],button:not([disabled]),iframe,video,[tabindex]:not([tabindex="-1"])', panel).filter((x) => x.offsetParent !== null);
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
    addEventListener("hashchange", route);
    route(); // shared link opened directly
  };

  AG.toast = function (msg) {
    let t = document.querySelector(".toast");
    if (!t) { t = document.createElement("div"); t.className = "toast mono"; t.setAttribute("role", "status"); document.body.appendChild(t); }
    t.textContent = msg;
    t.classList.add("is-in");
    clearTimeout(t._t);
    t._t = setTimeout(() => t.classList.remove("is-in"), 2200);
  };
})();
