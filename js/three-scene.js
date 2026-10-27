/* HERO WORLD — red dunes, a low sun, drifting dust, and your models standing as exhibits.
   Scrolling flies the camera through the exhibits. Uses models with "featured: true" first. */
(function () {
  const AG = window.AG;
  const fx = (AG.data.site && AG.data.site.effects) || {};

  const THEMES = {
    dark:  { top: "#0b0a0c", mid: "#1c0807", hor: "#5a160d", fog: 0x1e0907, ground: 0x4a140d, hemiSky: 0x5a1a12, hemiGround: 0x050304, sun: 0xff5a2a, dust: 0xffb59a },
    light: { top: "#efe8df", mid: "#f1d3c2", hor: "#f08a64", fog: 0xf0c6b0, ground: 0xd9745a, hemiSky: 0xfff1e6, hemiGround: 0x8a3a28, sun: 0xff6a3a, dust: 0xffffff }
  };

  AG.initHeroWorld = function () {
    const host = document.getElementById("hero-canvas");
    const heroEl = document.getElementById("home");
    if (!host || fx.hero3D === false || !AG.webgl) return;

    const engineTask = AG.loader.add("three.js engine");
    const exhibits = AG.sorted(AG.data.models).filter((m) => m.model && !m.collection).slice(0, AG.small() ? 2 : 5);
    const modelTasks = exhibits.map((m) => AG.loader.add(`exhibit ${m.id} · ${AG.ext(m.model)}`));

    AG.three()
      .then((L) => {
        engineTask.done();
        build(L);
      })
      .catch((e) => {
        console.warn("Hero 3D unavailable, showing static scene:", e && e.message);
        engineTask.done(false);
        modelTasks.forEach((t) => t.done(false));
      });

    function build(L) {
      const { THREE } = L;
      const small = AG.small();
      const renderer = new THREE.WebGLRenderer({ antialias: !small, alpha: false, powerPreference: "high-performance" });
      renderer.setPixelRatio(Math.min(devicePixelRatio, small ? 1.25 : 1.75));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.05;
      host.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(small ? 62 : 50, 1, 0.1, 900);

      /* sky gradient */
      const skyCanvas = document.createElement("canvas");
      skyCanvas.width = 2; skyCanvas.height = 256;
      const skyTex = new THREE.CanvasTexture(skyCanvas);
      skyTex.colorSpace = THREE.SRGBColorSpace;
      scene.background = skyTex;
      scene.fog = new THREE.Fog(0x1e0907, 40, 260);

      /* lights */
      const hemi = new THREE.HemisphereLight(0x5a1a12, 0x050304, 1.1);
      const sunLight = new THREE.DirectionalLight(0xff5a2a, 3.2);
      sunLight.position.set(-20, 14, -200);
      const front = new THREE.DirectionalLight(0xffd2bf, 0.9);
      front.position.set(20, 30, 40);
      scene.add(hemi, sunLight, front);

      /* dunes */
      const height = (x, z) => {
        const corridor = THREE.MathUtils.smoothstep(Math.abs(x), 9, 40);
        const h = 4.2 * Math.sin(x * 0.035 + z * 0.018) + 2.4 * Math.sin(x * 0.083 - z * 0.041) + 1.2 * Math.sin(z * 0.11 + x * 0.027) + 0.5 * Math.sin(x * 0.21 + z * 0.17);
        return h * (0.18 + corridor * 0.82) + corridor * 3;
      };
      const seg = small ? 90 : 180;
      const geo = new THREE.PlaneGeometry(520, 520, seg, seg);
      geo.rotateX(-Math.PI / 2);
      const pos = geo.attributes.position;
      for (let i = 0; i < pos.count; i++) pos.setY(i, height(pos.getX(i), pos.getZ(i) - 120));
      geo.translate(0, 0, -120);
      geo.computeVertexNormals();
      const groundMat = new THREE.MeshStandardMaterial({ color: 0x4a140d, roughness: 0.92, metalness: 0.0 });
      const ground = new THREE.Mesh(geo, groundMat);
      scene.add(ground);
      const contour = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: 0xff6a4a, wireframe: true, transparent: true, opacity: 0.035, depthWrite: false }));
      contour.position.y = 0.02;
      scene.add(contour);

      /* sun disc */
      const sunCanvas = document.createElement("canvas");
      sunCanvas.width = sunCanvas.height = 256;
      const sg = sunCanvas.getContext("2d");
      const grad = sg.createRadialGradient(128, 128, 0, 128, 128, 128);
      grad.addColorStop(0, "rgba(255,190,150,1)"); grad.addColorStop(0.18, "rgba(255,110,60,.9)"); grad.addColorStop(0.5, "rgba(255,60,30,.25)"); grad.addColorStop(1, "rgba(255,40,20,0)");
      sg.fillStyle = grad; sg.fillRect(0, 0, 256, 256);
      const sun = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(sunCanvas), blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
      sun.scale.set(160, 160, 1);
      sun.position.set(-30, 18, -330);
      scene.add(sun);

      /* dust */
      const N = small ? 260 : 700;
      const dpos = new Float32Array(N * 3);
      for (let i = 0; i < N; i++) { dpos[i * 3] = (Math.random() - 0.5) * 120; dpos[i * 3 + 1] = Math.random() * 30; dpos[i * 3 + 2] = 20 - Math.random() * 240; }
      const dgeo = new THREE.BufferGeometry();
      dgeo.setAttribute("position", new THREE.BufferAttribute(dpos, 3));
      const dustMat = new THREE.PointsMaterial({ color: 0xffb59a, size: 0.18, transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending, depthWrite: false });
      const dust = new THREE.Points(dgeo, dustMat);
      scene.add(dust);

      /* exhibits along the path */
      const SPACING = 30;
      const slots = exhibits.map((m, i) => {
        const x = i === 0 ? (small ? 0 : 7.5) : i % 2 ? -8 : 8;
        const z = -6 - i * SPACING;
        const y = height(x, z);
        const g = new THREE.Group();
        g.position.set(x, y, z);
        const ring = new THREE.Mesh(new THREE.RingGeometry(5.2, 5.45, 96), new THREE.MeshBasicMaterial({ color: 0xff4b2b, transparent: true, opacity: 0.85, side: THREE.DoubleSide, fog: false }));
        ring.rotation.x = -Math.PI / 2; ring.position.y = 0.06;
        const disc = new THREE.Mesh(new THREE.CircleGeometry(5.2, 64), new THREE.MeshBasicMaterial({ color: 0xff3b1b, transparent: true, opacity: 0.12, blending: THREE.AdditiveBlending, depthWrite: false }));
        disc.rotation.x = -Math.PI / 2; disc.position.y = 0.04;
        g.add(ring, disc);
        scene.add(g);
        return { m, g, ring, obj: null, i };
      });

      exhibits.forEach((m, i) => {
        AG.loadModel(L, m.model, { size: i === 0 ? 8.5 : 7, onProgress: (v) => modelTasks[i].progress(v) })
          .then((obj) => {
            obj.userData.id = m.id;
            slots[i].obj = obj;
            slots[i].g.add(obj);
            modelTasks[i].done();
            if (i === 0) heroEl.classList.add("hero--model");
          })
          .catch((e) => { console.warn("Exhibit failed:", m.model, e && e.message); modelTasks[i].done(false); });
      });

      /* theme */
      function applyTheme() {
        const t = THEMES[document.documentElement.dataset.theme === "light" ? "light" : "dark"];
        const c = skyCanvas.getContext("2d");
        const gr = c.createLinearGradient(0, 0, 0, 256);
        gr.addColorStop(0, t.top); gr.addColorStop(0.55, t.mid); gr.addColorStop(1, t.hor);
        c.fillStyle = gr; c.fillRect(0, 0, 2, 256);
        skyTex.needsUpdate = true;
        scene.fog.color.set(t.fog);
        groundMat.color.set(t.ground);
        hemi.color.set(t.hemiSky); hemi.groundColor.set(t.hemiGround);
        sunLight.color.set(t.sun);
        dustMat.color.set(t.dust);
      }
      applyTheme();
      AG.on("theme", applyTheme);

      /* sizing + visibility */
      function size() {
        const w = host.clientWidth, h = host.clientHeight;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      }
      new ResizeObserver(size).observe(host);
      size();
      let visible = true;
      new IntersectionObserver((e) => (visible = e[0].isIntersecting)).observe(heroEl);

      /* pointer: parallax + hover exhibits */
      const mouse = new THREE.Vector2(), ndc = new THREE.Vector2(-9, -9), ray = new THREE.Raycaster();
      let hovered = null;
      addEventListener("pointermove", (e) => {
        mouse.set(e.clientX / innerWidth - 0.5, e.clientY / innerHeight - 0.5);
        const r = host.getBoundingClientRect();
        ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
      }, { passive: true });
      host.addEventListener("click", () => { if (hovered) { location.hash = "#model/" + hovered; } });

      /* camera flight */
      const hudCam = document.getElementById("hud-cam"), hudEx = document.getElementById("hud-exhibit");
      const camPos = new THREE.Vector3(0, 5, 16), look = new THREE.Vector3(), lookTarget = new THREE.Vector3();
      let progress = 0, sp = 0, frameN = 0, lastEx = "";
      AG.on("hero:progress", (p) => (progress = p));

      heroEl.classList.add("hero--3d");
      const clock = new THREE.Clock();
      const travel = Math.max(1, slots.length - 1) * SPACING + 14;

      (function loop() {
        requestAnimationFrame(loop);
        if (!visible || document.hidden) return;
        const dt = Math.min(clock.getDelta(), 0.05), t = clock.elapsedTime;
        sp += (progress - sp) * (AG.reduced ? 1 : 0.07);

        const z = 18 - sp * travel;
        const nearest = slots.reduce((a, s) => (Math.abs(s.g.position.z - (z - 16)) < Math.abs(a.g.position.z - (z - 16)) ? s : a), slots[0] || { g: { position: new THREE.Vector3() } });
        const swayX = nearest && nearest.g ? -nearest.g.position.x * 0.35 : 0;
        const camY = Math.max(height(swayX, z) + 4.5, 4.5) + (sp < 0.05 ? 0 : 0.8);
        camPos.set(swayX + mouse.x * (AG.reduced ? 0 : 2.4), camY - mouse.y * (AG.reduced ? 0 : 1.2), z);
        camera.position.lerp(camPos, 0.12);
        if (nearest && nearest.g) lookTarget.set(nearest.g.position.x * 0.6, nearest.g.position.y + 3.2, nearest.g.position.z);
        if (sp < 0.02 && !small) lookTarget.set(2.5, 4.2, -14);
        look.lerp(lookTarget, 0.08);
        camera.lookAt(look);

        slots.forEach((s, i) => {
          if (s.obj && !AG.reduced) s.obj.rotation.y = t * 0.25 + i;
          s.ring.material.opacity = 0.55 + Math.sin(t * 2 + i) * 0.25;
        });
        if (!AG.reduced) {
          dust.rotation.y = t * 0.01;
          dust.position.y = Math.sin(t * 0.3) * 0.6;
        }

        if (!AG.touch && ++frameN % 4 === 0) {
          ray.setFromCamera(ndc, camera);
          const hit = ray.intersectObjects(slots.filter((s) => s.obj).map((s) => s.obj), true)[0];
          let id = null;
          if (hit) { let o = hit.object; while (o && !o.userData.id) o = o.parent; id = o && o.userData.id; }
          if (id !== hovered) { hovered = id; host.dataset.cursor = id ? "view" : "drag"; AG.refreshCursor && AG.refreshCursor(); host.style.cursor = id ? "pointer" : ""; }
        }
        if (frameN % 6 === 0) {
          if (hudCam) hudCam.textContent = `CAM 01 · X ${camera.position.x.toFixed(2)} · Y ${camera.position.y.toFixed(2)} · Z ${camera.position.z.toFixed(2)}`;
          const ex = nearest && nearest.m ? `◆ EXHIBIT_${String(nearest.i + 1).padStart(2, "0")} / ${nearest.m.title.toUpperCase()}` : "";
          if (ex !== lastEx && hudEx) { hudEx.textContent = ex; lastEx = ex; }
        }
        renderer.render(scene, camera);
      })();
    }
  };
})();
