/* Shared helpers. Everything lives on window.AG so the site runs without a build step or a server. */
(function () {
  const AG = (window.AG = window.AG || {});
  const P = (AG.data = window.PORTFOLIO || {});
  P.site = P.site || { sections: [], effects: {} };
  P.profile = P.profile || {};
  P.householdItems = Array.isArray(P.householdItems) ? P.householdItems : [];
  ["models", "games", "videos", "projects"].forEach((k) => (P[k] = Array.isArray(P[k]) ? P[k] : []));

  AG.$ = (s, r = document) => r.querySelector(s);
  AG.$$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  AG.clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  AG.lerp = (a, b, t) => a + (b - a) * t;

  AG.reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  AG.touch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
  AG.small = () => window.innerWidth < 900;
  AG.isFile = location.protocol === "file:";

  AG.esc = (s) =>
    String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* *word* → accent */
  AG.accentText = (s) => AG.esc(s).replace(/\*(.+?)\*/g, "<em>$1</em>");
  AG.paras = (s) => AG.esc(s).split(/\n{2,}/).map((p) => `<p>${p}</p>`).join("");

  AG.sorted = (list) =>
    list
      .filter((x) => x && x.id)
      .slice()
      .sort((a, b) => (b.featured === true) - (a.featured === true) || (a.order ?? 999) - (b.order ?? 999));

  AG.find = (type, id) => {
    const key = { model: "models", game: "games", video: "videos", project: "projects" }[type];
    if (!key) return null;
    const hit = AG.data[key].find((x) => x.id === id);
    if (hit || type !== "model") return hit || null;
    return (AG.data.householdItems || []).find((x) => x.id === id) || null;
  };

  AG.ext = (p) => (String(p || "").split("?")[0].match(/\.([a-z0-9]+)$/i) || [])[1]?.toLowerCase() || "";

  AG.ytId = (u) => {
    const m = String(u || "").match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/|live\/))([\w-]{11})/);
    return m ? m[1] : "";
  };
  AG.vimeoId = (u) => (String(u || "").match(/vimeo\.com\/(?:video\/)?(\d+)/) || [])[1] || "";

  AG.thumbOf = (item) => {
    if (!item) return "";
    if (item.thumbnail) return item.thumbnail;
    if (item.cover) return item.cover;
    const yt = AG.ytId(item.video || item.trailer);
    if (yt) return `https://i.ytimg.com/vi/${yt}/hqdefault.jpg`;
    if (item.renders && item.renders[0]) return item.renders[0];
    if (item.screenshots && item.screenshots[0]) return item.screenshots[0];
    return "";
  };

  /* <video>/<iframe> markup for any media link */
  AG.media = (src, { autoplay = true, poster = "", muted = false } = {}) => {
    if (!src) return "";
    const yt = AG.ytId(src);
    if (yt)
      return `<iframe src="https://www.youtube-nocookie.com/embed/${yt}?autoplay=${autoplay ? 1 : 0}&rel=0&modestbranding=1" title="Video player" allow="autoplay; encrypted-media; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
    const vm = AG.vimeoId(src);
    if (vm)
      return `<iframe src="https://player.vimeo.com/video/${vm}?autoplay=${autoplay ? 1 : 0}" title="Video player" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
    return `<video src="${AG.esc(src)}" ${poster ? `poster="${AG.esc(poster)}"` : ""} controls playsinline preload="metadata" ${autoplay ? "autoplay" : ""} ${muted ? "muted" : ""}></video>`;
  };

  AG.statusLabel = { completed: "Completed", "in-progress": "In progress", upcoming: "Coming soon" };
  AG.badge = (status, always = false) => {
    if (!status || (status === "completed" && !always)) return "";
    return `<span class="badge badge--${AG.esc(status)} mono">${AG.esc(AG.statusLabel[status] || status)}</span>`;
  };

  AG.chips = (arr, cls = "") =>
    arr && arr.length ? `<div class="chips ${cls}">${arr.map((t) => `<span class="chip mono">${AG.esc(t)}</span>`).join("")}</div>` : "";

  const LINK_META = {
    webgl: { label: "Play in browser", icon: "fa-solid fa-play" },
    itch: { label: "itch.io", icon: "fa-brands fa-itch-io" },
    playStore: { label: "Google Play", icon: "fa-brands fa-google-play" },
    appStore: { label: "App Store", icon: "fa-brands fa-app-store-ios" },
    steam: { label: "Steam", icon: "fa-brands fa-steam" },
    download: { label: "Download", icon: "fa-solid fa-download" },
    github: { label: "Source code", icon: "fa-brands fa-github" },
    website: { label: "Website", icon: "fa-solid fa-arrow-up-right-from-square" },
    other: { label: "More", icon: "fa-solid fa-link" }
  };
  /* links → buttons. webgl becomes an in-page "play" button (handled by modal.js). */
  AG.linkButtons = (links, { big = false, playId = "" } = {}) => {
    if (!links) return "";
    const out = [];
    Object.keys(links).forEach((k) => {
      const url = links[k];
      if (!url) return;
      const m = LINK_META[k] || { label: k, icon: "fa-solid fa-link" };
      const primary = out.length === 0 ? "" : " btn--ghost";
      if (k === "webgl" && playId)
        out.push(`<button class="btn${primary}${big ? " btn--big" : ""} mono" data-play-webgl="${AG.esc(playId)}" data-magnetic><i class="${m.icon}"></i> ${m.label}</button>`);
      else
        out.push(`<a class="btn${primary}${big ? " btn--big" : ""} mono" href="${AG.esc(url)}" target="_blank" rel="noopener" data-magnetic><i class="${m.icon}"></i> ${AG.esc(m.label)}</a>`);
    });
    return out.length ? `<div class="btnrow">${out.join("")}</div>` : "";
  };

  AG.handles = '<i class="hd hd--tl"></i><i class="hd hd--tr"></i><i class="hd hd--bl"></i><i class="hd hd--br"></i>';

  AG.storage = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  AG.bus = new EventTarget();
  AG.emit = (n, d) => AG.bus.dispatchEvent(new CustomEvent(n, { detail: d }));
  AG.on = (n, f) => AG.bus.addEventListener(n, (e) => f(e.detail));
})();
