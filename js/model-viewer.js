/* Full-screen 3D model viewer: orbit, zoom, auto-rotate, wireframe, lighting presets, grid, reset.
   Models load only when opened (lazy) with a real progress bar. */
(function () {
  const AG = window.AG;

  const PRESETS = {
    studio: { label: "Studio", hemi: [0xffffff, 0x2a1d1b, 1.1], key: [0xffffff, 2.2], fill: [0xffe8e0, 0.6], rim: [0xff4b2b, 1.4], env: 0.6 },
    ember:  { label: "Ember",  hemi: [0xff9a7a, 0x1a0806, 0.6], key: [0xffb08a, 1.8], fill: [0x5a1a10, 0.4], rim: [0xff3b1b, 3.2], env: 0.25 },
    night:  { label: "Night",  hemi: [0x8aa0ff, 0x05060a, 0.45], key: [0xbfd0ff, 1.4], fill: [0x223355, 0.4], rim: [0x66ccff, 2.0], env: 0.2 }
  };

  AG.viewer = {
    presets: PRESETS,
    /* container: element; url: model path; ui: { progress(v), ready(), fail(err) } */
    mount(container, url, ui = {}) {
      let disposed = false, raf = 0, ro;
      const api = { dispose, setWire, setLight, setRotate, setGrid, reset, state: { wire: false, light: "studio", rotate: !AG.reduced, grid: true } };

      AG.three()
        .then((L) => {
          if (disposed) return;
          const { THREE } = L;
          const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
          renderer.setPixelRatio(Math.min(devicePixelRatio, AG.small() ? 1.5 : 2));
          renderer.outputColorSpace = THREE.SRGBColorSpace;
          renderer.toneMapping = THREE.ACESFilmicToneMapping;
          renderer.shadowMap.enabled = true;
          renderer.shadowMap.type = THREE.PCFSoftShadowMap;
          container.appendChild(renderer.domElement);

          const scene = new THREE.Scene();
          const pmrem = new THREE.PMREMGenerator(renderer);
          const envTex = pmrem.fromScene(new L.RoomEnvironment(), 0.04).texture;
          scene.environment = envTex;

          const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 500);
          const controls = new L.OrbitControls(camera, renderer.domElement);
          controls.enableDamping = true;
          controls.dampingFactor = 0.06;
          controls.autoRotate = api.state.rotate;
          controls.autoRotateSpeed = 1.4;
          controls.minDistance = 4;
          controls.maxDistance = 60;

          const hemi = new THREE.HemisphereLight();
          const key = new THREE.DirectionalLight();
          key.position.set(8, 14, 10);
          key.castShadow = true;
          key.shadow.mapSize.set(1024, 1024);
          Object.assign(key.shadow.camera, { left: -12, right: 12, top: 12, bottom: -12, near: 1, far: 50 });
          key.shadow.camera.updateProjectionMatrix();
          const fill = new THREE.DirectionalLight();
          fill.position.set(-10, 6, -4);
          const rim = new THREE.DirectionalLight();
          rim.position.set(-6, 8, -14);
          scene.add(hemi, key, fill, rim);

          const floor = new THREE.Mesh(new THREE.CircleGeometry(14, 64), new THREE.ShadowMaterial({ opacity: 0.35 }));
          floor.rotation.x = -Math.PI / 2;
          floor.receiveShadow = true;
          const grid = new THREE.GridHelper(28, 28, 0xff4b2b, 0x3a3133);
          grid.material.transparent = true;
          grid.material.opacity = 0.35;
          scene.add(floor, grid);

          let model = null, solid = new Map(), wireMat = new THREE.MeshBasicMaterial({ color: 0xff4b2b, wireframe: true });
          const home = { pos: new THREE.Vector3(13, 8, 16), target: new THREE.Vector3(0, 4, 0) };

          function size() {
            const w = container.clientWidth, h = container.clientHeight;
            if (!w || !h) return;
            renderer.setSize(w, h, false);
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
          }
          ro = new ResizeObserver(size);
          ro.observe(container);
          size();

          api._apply = () => {
            const p = PRESETS[api.state.light] || PRESETS.studio;
            hemi.color.set(p.hemi[0]); hemi.groundColor.set(p.hemi[1]); hemi.intensity = p.hemi[2];
            key.color.set(p.key[0]); key.intensity = p.key[1];
            fill.color.set(p.fill[0]); fill.intensity = p.fill[1];
            rim.color.set(p.rim[0]); rim.intensity = p.rim[1];
            renderer.toneMappingExposure = 1;
            scene.environmentIntensity = p.env; // r160 ignores this gracefully
            scene.traverse((o) => { if (o.isMesh && o.material && "envMapIntensity" in o.material) o.material.envMapIntensity = p.env * 1.6; });
            controls.autoRotate = api.state.rotate;
            grid.visible = api.state.grid;
            if (model) model.traverse((o) => {
              if (!o.isMesh) return;
              if (!solid.has(o)) solid.set(o, o.material);
              o.material = api.state.wire ? wireMat : solid.get(o);
            });
            container.dataset.light = api.state.light;
          };
          api._reset = () => { camera.position.copy(home.pos); controls.target.copy(home.target); controls.update(); };
          api._apply();
          api._reset();

          AG.loadModel(L, url, { size: 10, onProgress: (v) => ui.progress && ui.progress(v) })
            .then((g) => {
              if (disposed) return AG.disposeTree(g);
              model = g;
              scene.add(g);
              const h = g.userData.height || 6;
              home.target.set(0, h / 2, 0);
              if (h < 3) home.pos.set(7, 13, 10); /* flat sets like the furnished house: look down into the rooms */
              else home.pos.set(12, h * 0.55 + 4, 15);
              api._reset();
              api._apply();
              if (g.userData.animations.length) {
                const mixer = new THREE.AnimationMixer(g.children[0]);
                mixer.clipAction(g.userData.animations[0]).play();
                api._mixer = mixer;
              }
              ui.ready && ui.ready();
            })
            .catch((e) => { console.warn("Model failed to load:", url, e); ui.fail && ui.fail(e); });

          const clock = new THREE.Clock();
          (function loop() {
            if (disposed) return;
            raf = requestAnimationFrame(loop);
            const dt = clock.getDelta();
            api._mixer && api._mixer.update(dt);
            controls.update();
            renderer.render(scene, camera);
          })();

          api._cleanup = () => {
            cancelAnimationFrame(raf);
            ro && ro.disconnect();
            controls.dispose();
            if (model) AG.disposeTree(model);
            wireMat.dispose();
            envTex.dispose();
            pmrem.dispose();
            renderer.dispose();
            renderer.forceContextLoss && renderer.forceContextLoss();
            renderer.domElement.remove();
          };
        })
        .catch((e) => { console.warn("3D viewer unavailable:", e && e.message); ui.fail && ui.fail(e); });

      function setWire(v) { api.state.wire = v; api._apply && api._apply(); }
      function setLight(v) { api.state.light = v; api._apply && api._apply(); }
      function setRotate(v) { api.state.rotate = v; api._apply && api._apply(); }
      function setGrid(v) { api.state.grid = v; api._apply && api._apply(); }
      function reset() { api._reset && api._reset(); }
      function dispose() { disposed = true; api._cleanup && api._cleanup(); }
      return api;
    }
  };
})();
