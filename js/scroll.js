/* Smooth scroll, reveals, split text, multi-layer parallax, pinned hero + horizontal reels,
   section tracking, and the "level" wipe transition between sections. No libraries. */
(function () {
  const AG = window.AG;
  const fx = (AG.data.site && AG.data.site.effects) || {};
  const html = document.documentElement;

  let target = 0, current = 0, animating = false, locked = false;
  const smoothOn = () => fx.smoothScroll !== false && !AG.reduced && !AG.touch;
  const maxScroll = () => document.documentElement.scrollHeight - innerHeight;

  /* ---------- smooth wheel scrolling ---------- */
  function canScrollInside(el, dy) {
    while (el && el !== document.body) {
      if (el.hasAttribute && el.hasAttribute("data-native-scroll")) return true;
      const st = getComputedStyle(el);
      if (/(auto|scroll)/.test(st.overflowY) && el.scrollHeight > el.clientHeight + 1) {
        if ((dy < 0 && el.scrollTop > 0) || (dy > 0 && el.scrollTop + el.clientHeight < el.scrollHeight - 1)) return true;
      }
      el = el.parentElement;
    }
    return false;
  }
  function onWheel(e) {
    if (!smoothOn() || locked || e.ctrlKey) return;
    let dy = e.deltaY * (e.deltaMode === 1 ? 40 : e.deltaMode === 2 ? innerHeight : 1);
    if (Math.abs(e.deltaX) > Math.abs(dy)) return;
    if (canScrollInside(e.target, dy)) return;
    e.preventDefault();
    if (!animating) target = current = scrollY;
    target = AG.clamp(target + dy, 0, maxScroll());
    animating = true;
  }
  function stepSmooth() {
    if (!animating) return;
    current = AG.lerp(current, target, 0.1);
    if (Math.abs(target - current) < 0.5) { current = target; animating = false; }
    window.scrollTo(0, current);
  }
  addEventListener("scroll", () => {
    if (animating && Math.abs(scrollY - current) > 4) animating = false; // keyboard / scrollbar took over
    if (!animating) target = current = scrollY;
  }, { passive: true });

  AG.scrollTo = function (y, instant) {
    y = AG.clamp(y, 0, maxScroll());
    if (instant || AG.reduced) { animating = false; window.scrollTo(0, y); target = current = y; return; }
    if (smoothOn()) { target = y; current = scrollY; animating = true; }
    else window.scrollTo({ top: y, behavior: "smooth" });
  };
  AG.lockScroll = (v) => { locked = v; animating = false; html.classList.toggle("is-locked", v); };

  /* ---------- level wipe transition ---------- */
  const wipe = document.querySelector(".wipe");
  AG.goto = function (id) {
    const el = document.getElementById(id);
    if (!el) return;
    closeMenu();
    const y = id === "home" ? 0 : el.getBoundingClientRect().top + scrollY;
    const far = Math.abs(y - scrollY) > innerHeight * 1.5;
    if (AG.reduced || !far || !wipe) return AG.scrollTo(y);
    const s = AG.sectionMeta(id);
    wipe.querySelector(".wipe__label").innerHTML = id === "home" ? "LVL 00<br><small>Start</small>" : `LVL ${AG.esc(s.level)}<br><small>${AG.esc(s.menu || s.label)}</small>`;
    wipe.classList.remove("is-out");
    wipe.classList.add("is-in");
    setTimeout(() => {
      AG.scrollTo(y, true);
      wipe.classList.add("is-out");
      setTimeout(() => wipe.classList.remove("is-in", "is-out"), 700);
    }, 560);
  };

  /* ---------- mobile menu ---------- */
  const burger = document.getElementById("burger");
  function closeMenu() {
    html.classList.remove("menu-open");
    burger && burger.setAttribute("aria-expanded", "false");
  }
  burger && burger.addEventListener("click", () => {
    const open = html.classList.toggle("menu-open");
    burger.setAttribute("aria-expanded", String(open));
  });

  /* ---------- split text ---------- */
  function split(el) {
    if (el._split) return;
    el._split = true;
    let n = 0;
    (function walk(node) {
      Array.from(node.childNodes).forEach((c) => {
        if (c.nodeType === 3) {
          const frag = document.createDocumentFragment();
          c.textContent.split(/(\s+)/).forEach((part) => {
            if (!part) return;
            if (/^\s+$/.test(part)) return frag.appendChild(document.createTextNode(part));
            const w = document.createElement("span");
            w.className = "w";
            const wi = document.createElement("span");
            wi.className = "wi";
            wi.style.setProperty("--wi", n++);
            wi.textContent = part;
            w.appendChild(wi);
            frag.appendChild(w);
          });
          c.replaceWith(frag);
        } else if (c.nodeType === 1) walk(c);
      });
    })(el);
  }

  /* ---------- reveals ---------- */
  let io;
  AG.observeReveals = function (root = document) {
    AG.$$("[data-split]", root).forEach(split);
    const els = AG.$$("[data-reveal],[data-split]", root).filter((e) => !e._obs);
    if (AG.reduced || !("IntersectionObserver" in window)) return els.forEach((e) => e.classList.add("is-in"));
    io = io || new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
    }), { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    els.forEach((e) => { e._obs = true; io.observe(e); });
  };

  /* ---------- parallax + pins + tracking ---------- */
  let layers = [], hero, heroContent, reelsSec, reelsTrack, reelsView, sections = [], navLinks = [], railDots = [], header;
  let pinReels = false, lastSy = -1, lastDir = 0;

  function measure() {
    layers = AG.$$("[data-speed]").map((el) => {
      el.style.transform = "";
      const r = el.getBoundingClientRect();
      return { el, speed: parseFloat(el.dataset.speed) || 0, mid: r.top + scrollY + r.height / 2, inHero: !!el.closest(".hero") };
    });
    layoutReels();
    lastSy = -1;
  }

  function layoutReels() {
    if (!reelsSec) return;
    pinReels = !AG.small() && !AG.reduced && !AG.touch;
    html.classList.toggle("reels-pinned", pinReels);
    if (!pinReels) { reelsSec.style.height = ""; reelsTrack.style.transform = ""; return; }
    const extra = Math.max(0, reelsTrack.scrollWidth - reelsView.clientWidth);
    reelsSec.style.height = `calc(100vh + ${extra}px)`;
    reelsSec._extra = extra;
  }

  function frame() {
    stepSmooth();
    const sy = scrollY, vh = innerHeight;
    if (sy !== lastSy) {
      const dir = sy > lastSy ? 1 : -1;
      lastSy = sy;
      // parallax layers
      for (const l of layers) {
        const off = l.inHero ? sy : l.mid - sy - vh / 2;
        l.el.style.transform = `translate3d(0,${(off * l.speed).toFixed(1)}px,0)`;
      }
      // hero progress (sticky hero is taller than the screen)
      if (hero) {
        const h = hero.offsetHeight - vh;
        const p = h > 0 ? AG.clamp(sy / h, 0, 1) : 0;
        AG.heroProgress = p;
        if (heroContent && !AG.reduced) {
          heroContent.style.opacity = String(AG.clamp(1 - p * 2.6, 0, 1));
          heroContent.style.transform = `translate3d(0,${(-p * 120).toFixed(1)}px,0)`;
          heroContent.style.visibility = p > 0.42 ? "hidden" : "";
        }
        AG.emit("hero:progress", p);
      }
      // horizontal reels
      if (pinReels && reelsSec) {
        const top = reelsSec.getBoundingClientRect().top;
        const p = AG.clamp(-top / Math.max(1, reelsSec.offsetHeight - vh), 0, 1);
        reelsTrack.style.transform = `translate3d(${(-p * (reelsSec._extra || 0)).toFixed(1)}px,0,0)`;
      }
      // active section
      let active = "home";
      for (const s of sections) if (!s.hidden && s.getBoundingClientRect().top < vh * 0.45) active = s.id;
      if (active !== AG.activeSection) {
        AG.activeSection = active;
        navLinks.forEach((a) => a.classList.toggle("is-active", a.dataset.goto === active));
        railDots.forEach((d) => d.classList.toggle("is-active", d.dataset.rail === active));
      }
      // header
      if (header) {
        header.classList.toggle("is-scrolled", sy > 40);
        if (dir !== lastDir || sy < vh) {
          header.classList.toggle("is-hidden", dir > 0 && sy > vh && !html.classList.contains("menu-open"));
          lastDir = dir;
        }
      }
    }
    requestAnimationFrame(frame);
  }

  AG.initScroll = function () {
    hero = document.getElementById("home");
    heroContent = document.getElementById("hero-content");
    reelsSec = document.getElementById("reels");
    reelsTrack = document.getElementById("reels-track");
    reelsView = document.getElementById("reels-viewport");
    header = document.getElementById("header");
    sections = AG.$$("main > section");
    navLinks = AG.$$("#nav a");
    railDots = AG.$$("#rail span");
    railDots.forEach((d) => d.addEventListener("click", () => AG.goto(d.dataset.rail)));

    addEventListener("wheel", onWheel, { passive: false });
    document.addEventListener("click", (e) => {
      const a = e.target.closest("[data-goto]");
      if (!a) return;
      e.preventDefault();
      AG.goto(a.dataset.goto);
    });

    AG.observeReveals();
    measure();
    let rt;
    addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(measure, 150); });
    addEventListener("load", measure);
    AG.on("reels:rendered", () => setTimeout(measure, 50));
    requestAnimationFrame(frame);
  };
  AG.remeasure = () => measure();
})();
