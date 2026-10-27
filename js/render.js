/* Builds every section from the data files. You never need to edit this to add content. */
(function () {
  const AG = window.AG;
  const { esc, $, $$ } = AG;
  const D = AG.data;
  const S = D.site;
  const pf = D.profile;

  const sec = (id) => (S.sections || []).find((s) => s.id === id) || { id, level: "", label: id, title: id, intro: "", menu: id, show: true };

  function head(id) {
    const s = sec(id);
    const el = $(`[data-head="${id}"]`);
    if (!el) return;
    el.innerHTML = `
      <div class="sec__titles">
        <small class="lvl mono">${s.level ? `LVL ${esc(s.level)} — ` : ""}${esc(s.label)}</small>
        <h2 class="sec__title disp" data-split>${esc(s.title)}</h2>
      </div>
      ${s.intro ? `<p class="sec__intro" data-reveal>${esc(s.intro)}</p>` : ""}
      ${s.level ? `<span class="sec__ghost disp" data-speed="-0.12" aria-hidden="true">${esc(s.level)}</span>` : ""}`;
  }

  function navAndRail() {
    const vis = (S.sections || []).filter((s) => s.show !== false);
    $("#nav").innerHTML =
      `<a href="#home" data-goto="home" class="is-active"><i>00</i>Start</a>` +
      vis.map((s) => `<a href="#${esc(s.id)}" data-goto="${esc(s.id)}"><i>${esc(s.level)}</i>${esc(s.menu || s.label)}</a>`).join("");
    $("#rail").innerHTML =
      `<span data-rail="home" class="is-active">00</span>` + vis.map((s) => `<span data-rail="${esc(s.id)}">${esc(s.level)}</span>`).join("");
    (S.sections || []).forEach((s) => {
      const el = document.getElementById(s.id);
      if (el && s.show === false) el.hidden = true;
    });
  }

  function hero() {
    $("#hero-name").textContent = pf.shortName || (pf.name || "").split(" ")[0] || "";
    $("#hero-initial").textContent = pf.initial || "";
    $("#hero-tagline").textContent = pf.tagline || "";
    $("#hud-live").innerHTML = `<i></i> ${esc(S.heroHint || "")}`;
    $("#hero-socials").innerHTML = (pf.socials || [])
      .map((s) => `<a href="${esc(s.url)}" target="_blank" rel="noopener" aria-label="${esc(s.name)}" data-magnetic><i class="${esc(s.icon)}"></i></a>`)
      .join("");
    const feat = AG.sorted(D.models)[0];
    const img = $("#hero-fallback-img");
    if (feat && AG.thumbOf(feat)) img.src = AG.thumbOf(feat);
    else img.remove();
  }

  /* ---------- 3D MODELS ---------- */
  function models() {
    const list = AG.sorted(D.models);
    const grid = $("#models-grid");
    if (!list.length) {
      grid.innerHTML = emptyCard("First exhibit unlocking soon", "Add a model in data/models.js");
      return;
    }
    grid.innerHTML = list
      .map((m, i) => {
        const thumb = AG.thumbOf(m);
        const renders = (m.renders || []).filter(Boolean);
        return `
        <a class="mcard sel tilt" href="#model/${esc(m.id)}" data-cursor="view" data-reveal style="--i:${i}" aria-label="Open ${esc(m.title)}">
          ${AG.handles}
          <div class="mcard__stage">
            <span class="tag mono">EXH_${String(i + 1).padStart(2, "0")}</span>
            ${AG.badge(m.status)}
            ${thumb ? `<img src="${esc(thumb)}" alt="${esc(m.title)} — 3D model" loading="lazy" decoding="async" ${renders.length > 1 ? `data-flip='${esc(JSON.stringify(renders))}'` : ""}>` : `<div class="mcard__ph disp">${esc(m.title)}</div>`}
            ${m.type === "collection" ? `<span class="mcard__hint mono"><i class="fa-solid fa-layer-group"></i> ${(m.items || []).length} models</span>` : m.model ? `<span class="mcard__hint mono"><i class="fa-solid fa-cube"></i> 3D</span>` : ""}
          </div>
          <div class="mcard__meta">
            <h3>${esc(m.title)}</h3>
            <div class="mono">${[m.shortDescription || m.category, (m.software || []).join(", "), m.year].filter(Boolean).map(esc).join(" · ")}</div>
          </div>
        </a>`;
      })
      .join("");
  }

  /* ---------- GAMES ---------- */
  function coverArt(g) {
    const img = g.cover || AG.thumbOf(g);
    if (img) return `<img src="${esc(img)}" alt="${esc(g.title)} cover" loading="lazy" decoding="async">`;
    return `<div class="art-ph"><span class="disp">${esc(g.title)}</span><small class="mono">Cover art coming soon</small></div>`;
  }
  function games() {
    const list = AG.sorted(D.games);
    const box = $("#games-list");
    if (!list.length) {
      box.innerHTML = emptyCard("First game loading", "Add a game in data/games.js");
      return;
    }
    box.innerHTML = list
      .map((g, i) => {
        const btns = AG.linkButtons(g.links, { playId: g.id });
        const feats = (g.features || []).slice(0, 2);
        return `
        <article class="game sel ${i % 2 ? "game--flip" : ""}" data-reveal>
          ${AG.handles}
          <a class="game__cover" href="#game/${esc(g.id)}" data-cursor="play" aria-label="Open ${esc(g.title)} game page">
            ${coverArt(g)}
            ${g.trailer ? `<span class="game__play"><i class="fa-solid fa-play"></i></span>` : ""}
          </a>
          <div class="game__info">
            ${AG.chips([g.category, g.engine, g.platform].filter(Boolean))}
            ${AG.badge(g.status)}
            <h3 class="game__title disp">${esc(g.title)}</h3>
            ${g.shortDescription ? `<p class="game__desc">${esc(g.shortDescription)}</p>` : ""}
            ${feats.length ? `<ul class="ticks">${feats.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>` : ""}
            ${btns || `<p class="note mono"><i class="fa-solid fa-hourglass-half"></i> Download links coming soon</p>`}
            <a class="more mono" href="#game/${esc(g.id)}">Open game page <span aria-hidden="true">→</span></a>
          </div>
        </article>`;
      })
      .join("");
  }

  /* ---------- VIDEOS ---------- */
  let reelFilter = "All";
  function reels() {
    const list = AG.sorted(D.videos);
    const cats = ["All", ...Array.from(new Set(list.map((v) => v.category).filter(Boolean)))];
    $("#reel-filters").innerHTML = cats
      .map((c) => `<button role="tab" aria-selected="${c === reelFilter}" class="${c === reelFilter ? "is-on" : ""}" data-filter="${esc(c)}">${esc(c)}</button>`)
      .join("");
    const shown = list.filter((v) => reelFilter === "All" || v.category === reelFilter);
    $("#reels-track").innerHTML =
      shown
        .map((v, i) => {
          const thumb = AG.thumbOf(v);
          return `
        <a class="reel" href="#video/${esc(v.id)}" data-cursor="play" style="--i:${i}" aria-label="Play ${esc(v.title)}">
          <div class="reel__v sel">${AG.handles}
            ${thumb ? `<img src="${esc(thumb)}" alt="${esc(v.title)}" loading="lazy" decoding="async">` : `<div class="art-ph"><span class="disp">${esc(v.title)}</span></div>`}
            ${v.preview ? `<span class="reel__pv" data-preview="${esc(v.preview)}"></span>` : ""}
            <span class="reel__play"><i class="fa-solid fa-play"></i></span>
            ${v.duration ? `<span class="reel__dur mono">${esc(v.duration)}</span>` : ""}
          </div>
          <div class="reel__meta"><b>${esc(v.title)}</b><span class="mono">${[v.category, v.year].filter(Boolean).map(esc).join(" · ")}</span></div>
        </a>`;
        })
        .join("") +
      `<div class="reel reel--more"><div class="reel__v"><div class="art-ph art-ph--plus"><span class="mono">+ More reels loading</span></div></div><div class="reel__meta"><span class="mono">New work drops here</span></div></div>`;
    AG.emit("reels:rendered");
  }
  AG.setReelFilter = (c) => {
    reelFilter = c;
    reels();
  };

  /* ---------- UPCOMING ---------- */
  function upcoming() {
    const list = AG.sorted(D.projects);
    const box = $("#up-grid");
    if (!list.length) {
      box.innerHTML = `<div class="up sel up--empty" data-reveal>${AG.handles}<span class="badge badge--upcoming mono">Coming soon</span><div><h4>New levels unlocking soon</h4><p>Fresh models, games and edits are on the way.</p></div></div>`;
      return;
    }
    box.innerHTML = list
      .map((p, i) => {
        const thumb = AG.thumbOf(p);
        const prog = p.status === "in-progress" && p.progress != null ? AG.clamp(+p.progress, 0, 100) : null;
        return `
        <a class="up sel tilt up--${esc(p.status || "completed")}" href="#project/${esc(p.id)}" data-cursor="view" data-reveal style="--i:${i}">
          ${AG.handles}
          ${thumb ? `<div class="up__img"><img src="${esc(thumb)}" alt="" loading="lazy"></div>` : ""}
          ${AG.badge(p.status, true)}
          <div>
            <h4>${esc(p.title)}</h4>
            ${p.shortDescription ? `<p>${esc(p.shortDescription)}</p>` : ""}
            ${AG.chips(p.software)}
            ${prog != null ? `<div class="bar" role="progressbar" aria-valuenow="${prog}" aria-valuemin="0" aria-valuemax="100"><i style="width:${prog}%"></i></div><span class="bar__n mono">${prog}%</span>` : ""}
          </div>
        </a>`;
      })
      .join("");
  }

  /* ---------- ABOUT ---------- */
  function swIcon(s) {
    if (s.icon)
      return `<span class="sw__icon" style="--icon:url('https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${esc(s.icon)}.svg')"></span>`;
    return `<span class="sw__icon sw__icon--txt disp">${esc((s.name || "?").slice(0, 2))}</span>`;
  }
  function about() {
    const photo = pf.photo
      ? `<img src="${esc(pf.photo)}" alt="${esc(pf.name)}" loading="lazy">`
      : `<div class="photo__ph"><span class="disp">${esc((pf.name || "AG").split(" ").map((w) => w[0]).join(""))}</span><small class="mono">PLAYER_01 · photo loading</small></div>`;
    const tl = (arr, label) =>
      arr && arr.length
        ? `<div class="tl"><h3 class="mono">${label}</h3><div class="tl__row">${arr
            .map((e) => `<div data-reveal><span class="mono">${esc(e.years)}</span><b>${esc(e.title)}</b><span>${esc(e.place)}</span></div>`)
            .join("")}</div></div>`
        : "";
    const r = pf.resume || {};
    $("#about-body").innerHTML = `
      <div class="about__photo sel" data-reveal>${AG.handles}${photo}
        <div class="about__loc mono"><i class="fa-solid fa-location-dot"></i> ${esc(pf.location || "")}</div>
      </div>
      <div class="about__main">
        ${pf.statement ? `<p class="about__statement" data-split>${AG.accentText(pf.statement)}</p>` : ""}
        ${pf.bio ? `<div class="about__bio" data-reveal>${AG.paras(pf.bio)}</div>` : ""}
        ${(pf.software || []).length ? `<h3 class="mono about__h">Toolkit</h3><div class="sw">${pf.software.map((s, i) => `<div class="sw__item" data-reveal style="--i:${i}">${swIcon(s)}<span>${esc(s.name)}</span></div>`).join("")}</div>` : ""}
        ${(pf.skills || []).length ? `<div class="chips chips--lg" data-reveal>${pf.skills.map((s) => `<span class="chip mono">${esc(s)}</span>`).join("")}</div>` : ""}
        ${tl(pf.education, "Education")}
        ${tl(pf.experience, "Experience")}
        ${r.image || r.pdf || r.qr ? `
        <div class="resume sel" data-reveal>${AG.handles}
          ${r.qr ? `<a class="resume__qr" href="${esc(r.qrLink || r.pdf || r.image)}" target="_blank" rel="noopener"><img src="${esc(r.qr)}" alt="QR code to my resume" loading="lazy"></a>` : ""}
          <div class="resume__txt">
            <h3 class="disp">Resume</h3>
            <p>Scan the code on your phone, or open it right here.</p>
            <div class="btnrow">
              ${r.image ? `<a class="btn mono" href="#resume" data-magnetic><i class="fa-solid fa-file-lines"></i> View resume</a>` : ""}
              ${r.pdf ? `<a class="btn btn--ghost mono" href="${esc(r.pdf)}" target="_blank" rel="noopener" download data-magnetic><i class="fa-solid fa-download"></i> Download PDF</a>`
                : r.image ? `<a class="btn btn--ghost mono" href="${esc(r.image)}" download="Akash-G-Resume.jpg" data-magnetic><i class="fa-solid fa-download"></i> Download</a>` : ""}
            </div>
          </div>
        </div>` : ""}
      </div>`;
  }

  /* ---------- CONTACT ---------- */
  function contact() {
    const s = sec("contact");
    const c = pf.contact || {};
    const title = esc(s.title).replace(/\.$/, '<span class="acc">.</span>');
    $("#contact-body").innerHTML = `
      <small class="lvl mono">${s.level ? `LVL ${esc(s.level)} — ` : ""}${esc(s.label)}</small>
      <h2 class="contact__title disp" data-split>${title}</h2>
      <div class="btnrow contact__btns">
        ${c.email ? `<a class="btn btn--big mono" href="mailto:${esc(c.email)}" data-copy="${esc(c.email)}" data-magnetic><i class="fa-solid fa-envelope"></i> <span>${esc(c.email)}</span></a>` : ""}
        ${c.whatsapp ? `<a class="btn btn--big btn--ghost mono" href="https://wa.me/${esc(c.whatsapp)}" target="_blank" rel="noopener" data-magnetic><i class="fa-brands fa-whatsapp"></i> ${c.phoneDisplay ? esc(c.phoneDisplay) : "WhatsApp"}</a>` : ""}
        ${(pf.resume || {}).image ? `<a class="btn btn--big btn--ghost mono" href="#resume" data-magnetic><i class="fa-solid fa-file-lines"></i> Resume</a>` : ""}
      </div>
      <div class="contact__grid">
        <ul class="socials">
          ${(pf.socials || [])
            .map((x) => `<li data-reveal><a href="${esc(x.url)}" target="_blank" rel="noopener" data-cursor="open"><i class="${esc(x.icon)}"></i><b>${esc(x.name)}</b><span class="mono">${esc(x.handle || "")}</span><em aria-hidden="true">↗</em></a></li>`)
            .join("")}
        </ul>
        ${c.portfolioQr ? `<div class="share sel" data-reveal>${AG.handles}<img src="${esc(c.portfolioQr)}" alt="QR code for this portfolio" loading="lazy"><p class="mono">Share this portfolio</p></div>` : ""}
      </div>`;
    $("#footer").innerHTML = `
      <span>© ${new Date().getFullYear()} ${esc(pf.name || "")} — ${esc(S.footerNote || "")}</span>
      <a href="#home" data-goto="home">Back to start ↑</a>`;
  }

  function emptyCard(title, sub) {
    return `<div class="up sel up--empty">${AG.handles}<span class="badge badge--upcoming mono">Coming soon</span><div><h4>${esc(title)}</h4><p>${esc(sub)}</p></div></div>`;
  }

  AG.renderAll = function () {
    navAndRail();
    ["models", "games", "reels", "upcoming", "about"].forEach(head);
    hero();
    models();
    games();
    reels();
    upcoming();
    about();
    contact();
  };
  AG.sectionMeta = sec;
})();
