/* Loads Three.js on demand (pinned CDN version from the import map) and loads any model format:
   .glb / .gltf (Draco + Meshopt compressed too), .fbx and .obj */
(function () {
  const AG = window.AG;
  let libsPromise = null;

  AG.webgl = (function () {
    try {
      const c = document.createElement("canvas");
      return !!(window.WebGLRenderingContext && (c.getContext("webgl2") || c.getContext("webgl")));
    } catch (e) { return false; }
  })();

  AG.three = function () {
    if (!AG.webgl) return Promise.reject(new Error("WebGL not available"));
    if (libsPromise) return libsPromise;
    const base = "three/addons/";
    libsPromise = Promise.all([
      import("three"),
      import(base + "controls/OrbitControls.js"),
      import(base + "loaders/GLTFLoader.js"),
      import(base + "loaders/FBXLoader.js"),
      import(base + "loaders/OBJLoader.js"),
      import(base + "loaders/DRACOLoader.js"),
      import(base + "libs/meshopt_decoder.module.js"),
      import(base + "environments/RoomEnvironment.js")
    ]).then(([THREE, oc, gl, fbx, obj, draco, mo, env]) => ({
      THREE,
      OrbitControls: oc.OrbitControls,
      GLTFLoader: gl.GLTFLoader,
      FBXLoader: fbx.FBXLoader,
      OBJLoader: obj.OBJLoader,
      DRACOLoader: draco.DRACOLoader,
      MeshoptDecoder: mo.MeshoptDecoder,
      RoomEnvironment: env.RoomEnvironment
    }));
    libsPromise.catch(() => (libsPromise = null));
    return libsPromise;
  };

  const BLANK = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMB/axXYp8AAAAASUVORK5CYII=";
  const isImg = (u) => /\.(png|jpe?g|tga|tiff?|bmp|psd|dds|exr|hdr)(\?|$)/i.test(u);
  const isBrokenPath = (u) => /^[a-z]:[\\/]|[\\]|%5C|\/[A-Z]:\/|Desktop|\.\.\/\.\.\//i.test(decodeURIComponent(u));

  /* Clay material: used for FBX files exported from Maya (Arnold materials don't exist on the web) */
  function clay(THREE, src) {
    const color = src && src.color && src.color.getHSL({}).l > 0.08 && src.color.getHSL({}).l < 0.92 ? src.color.clone() : new THREE.Color(0xc4bdb7);
    return new THREE.MeshStandardMaterial({ color, roughness: 0.62, metalness: 0.08, side: THREE.DoubleSide });
  }

  /* Returns a Promise<Group> scaled to `size` units and centred on the ground (y = 0). */
  AG.loadModel = function (libs, url, { size = 10, materials = "", onProgress } = {}) {
    const { THREE } = libs;
    const ext = AG.ext(url);
    const mode = materials || (ext === "fbx" || ext === "obj" ? "clay" : "original");
    const manager = new THREE.LoadingManager();
    manager.setURLModifier((u) => {
      if (u === url || !isImg(u)) return u;
      if (mode === "clay" || isBrokenPath(u)) return BLANK; // skip textures that can't exist online
      return u;
    });

    let loader;
    if (ext === "glb" || ext === "gltf") {
      loader = new libs.GLTFLoader(manager);
      const d = new libs.DRACOLoader();
      d.setDecoderPath("https://unpkg.com/three@0.160.0/examples/jsm/libs/draco/gltf/");
      loader.setDRACOLoader(d);
      loader.setMeshoptDecoder(libs.MeshoptDecoder);
    } else if (ext === "fbx") loader = new libs.FBXLoader(manager);
    else if (ext === "obj") loader = new libs.OBJLoader(manager);
    else return Promise.reject(new Error("Unsupported model type: ." + ext));

    return new Promise((resolve, reject) => {
      loader.load(
        url,
        (res) => {
          const obj = res.scene || res;
          obj.traverse((o) => {
            if (!o.isMesh) return;
            o.castShadow = o.receiveShadow = true;
            if (mode === "clay") {
              o.material = Array.isArray(o.material) ? o.material.map((m) => clay(THREE, m)) : clay(THREE, o.material);
            }
          });
          /* rigged characters: pose the skeleton first so the bounds match what is drawn */
          obj.updateMatrixWorld(true);
          obj.traverse((o) => { if (o.isSkinnedMesh) { o.skeleton.update(); o.computeBoundingBox(); o.computeBoundingSphere && o.computeBoundingSphere(); } });
          const box = new THREE.Box3().setFromObject(obj);
          const s = box.getSize(new THREE.Vector3());
          const k = size / (Math.max(s.x, s.y, s.z) || 1);
          obj.scale.multiplyScalar(k);
          obj.updateMatrixWorld(true);
          obj.traverse((o) => { if (o.isSkinnedMesh) { o.skeleton.update(); o.computeBoundingBox(); } });
          const b2 = new THREE.Box3().setFromObject(obj);
          const c = b2.getCenter(new THREE.Vector3());
          obj.position.sub(new THREE.Vector3(c.x, b2.min.y, c.z));
          const g = new THREE.Group();
          g.add(obj);
          g.userData.height = b2.max.y - b2.min.y;
          g.userData.animations = res.animations || [];
          resolve(g);
        },
        (e) => { if (onProgress && e.total) onProgress(e.loaded / e.total); },
        (err) => reject(err)
      );
    });
  };

  AG.disposeTree = function (root) {
    root && root.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => {
        Object.values(m).forEach((v) => v && v.isTexture && v.dispose());
        m.dispose();
      });
    });
  };
})();
