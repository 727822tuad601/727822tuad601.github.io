/* Custom cursor (reacts to context) + magnetic buttons + card tilt. Disabled on touch devices. */
(function () {
  const AG = window.AG;
  const fx = (AG.data.site && AG.data.site.effects) || {};

  AG.initCursor = function () {
    if (AG.touch || fx.customCursor === false) {
      document.documentElement.classList.add("no-cursor");
      return;
    }
    document.documentElement.classList.add("has-cursor");
    const root = document.querySelector(".cursor");
    const ring = root.querySelector(".cursor__ring");
    const dot = root.querySelector(".cursor__dot");
    const label = root.querySelector(".cursor__label");
    let x = innerWidth / 2, y = innerHeight / 2, rx = x, ry = y, cur = "";

    addEventListener("pointermove", (e) => { x = e.clientX; y = e.clientY; root.classList.add("is-on"); }, { passive: true });
    document.addEventListener("pointerleave", () => root.classList.remove("is-on"));
    addEventListener("pointerdown", () => root.classList.add("is-down"));
    addEventListener("pointerup", () => root.classList.remove("is-down"));

    const LABELS = { view: "View", play: "Play", drag: "Drag", open: "Open", close: "Close" };
    function context(target) {
      const c = target.closest && target.closest("[data-cursor]");
      if (c) return c.getAttribute("data-cursor");
      if (target.closest && target.closest("a,button,[role=tab],input,label,select")) return "link";
      return "";
    }
    function set(c) {
      if (c === cur) return;
      cur = c;
      root.dataset.mode = c;
      label.textContent = LABELS[c] || "";
    }
    let lastTarget = null;
    document.addEventListener("pointerover", (e) => { lastTarget = e.target; set(context(e.target)); });
    AG.refreshCursor = () => lastTarget && set(context(lastTarget));

    (function loop() {
      rx += (x - rx) * 0.18; ry += (y - ry) * 0.18;
      ring.style.transform = `translate3d(${rx}px,${ry}px,0)`;
      dot.style.transform = `translate3d(${x}px,${y}px,0)`;
      requestAnimationFrame(loop);
    })();
  };

  /* Magnetic: elements with data-magnetic lean toward the pointer */
  AG.initMagnetic = function () {
    if (AG.touch || AG.reduced) return;
    document.addEventListener("pointermove", (e) => {
      const m = e.target.closest && e.target.closest("[data-magnetic]");
      if (!m) return;
      const r = m.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
      const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
      m.style.transform = `translate(${dx * 10}px, ${dy * 8}px)`;
      if (!m._mag) {
        m._mag = true;
        m.addEventListener("pointerleave", () => { m.style.transform = ""; m._mag = false; }, { once: true });
      }
    }, { passive: true });
  };

  /* Tilt: cards with .tilt rotate slightly in 3D */
  AG.initTilt = function () {
    if (AG.touch || AG.reduced) return;
    document.addEventListener("pointermove", (e) => {
      const c = e.target.closest && e.target.closest(".tilt");
      if (!c) return;
      const r = c.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      c.style.setProperty("--rx", `${(-py * 8).toFixed(2)}deg`);
      c.style.setProperty("--ry", `${(px * 10).toFixed(2)}deg`);
      c.style.setProperty("--mx", `${((px + 0.5) * 100).toFixed(1)}%`);
      c.style.setProperty("--my", `${((py + 0.5) * 100).toFixed(1)}%`);
      if (!c._tilt) {
        c._tilt = true;
        c.addEventListener("pointerleave", () => { c.style.setProperty("--rx", "0deg"); c.style.setProperty("--ry", "0deg"); c._tilt = false; }, { once: true });
      }
    }, { passive: true });
  };
})();
