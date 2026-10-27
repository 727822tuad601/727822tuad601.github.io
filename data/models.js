/* =====================================================================
   3D MODELS — one { ... } block per model.
   To add a model:
     1. Make a folder: assets/models/<your-slug>/
     2. Put model.glb (or model.fbx) + thumbnail.webp/.jpg/.png inside
     3. Copy the TEMPLATE at the bottom, paste it into the list, fill it in.
   Fields you leave "" or [] are hidden automatically.
   ===================================================================== */

window.PORTFOLIO = window.PORTFOLIO || {};
PORTFOLIO.models = [
  {
    id: "hammer",
    title: "Hammer",
    category: "Stylized Asset",
    year: "",
    status: "completed",
    shortDescription: "Stylized Asset Model",
    longDescription: "A stylized hammer asset modeled in Autodesk Maya, with a spiked head and a wrapped grip.",
    software: ["Maya", "Blender"],
    tags: ["Prop", "Stylized", "PBR", "Game-ready"],
    thumbnail: "assets/models/hammer/thumbnail.webp",
    model: "assets/models/hammer/model.glb",
    renders: [
      "assets/models/hammer/renders/view-1.webp",
      "assets/models/hammer/renders/view-2.webp",
      "assets/models/hammer/renders/view-3.webp",
      "assets/models/hammer/renders/wireframe.webp"
    ],
    video: "",
    gallery: [],
    links: {},
    specs: [["Polygons", "1,166"], ["Triangles", "2,334"], ["Vertices", "1,169"], ["Meshes", "1"], ["Topology", "All quads"], ["Real-world size", "80 × 56 × 28 cm (H × W × D)"], ["Scale", "Real-world · 1 unit = 1 m"], ["Reference", "Own design — stylized from the artist's own concept, no photo reference"], ["Material zones", "5 → baked to 1 material"], ["Texture set", "1 × 2048² PBR"], ["Pipeline", "Modeled in Maya → materials authored & baked in Blender → real-time PBR"], ["Built for", "Real-time engines (Unity, Unreal, WebGL)"]],
    materials: {
      summary: "The hammer is treated as a hand-forged weapon that has seen real use. The head is dark forged steel, with its edges polished bright where they would strike and scrape, fine scratches across the faces and dirt settled into the recesses. The handle uses a warm hardwood grain so steel and wood separate clearly at a glance, and the dark leather wrap marks exactly where the hand goes. Blackened iron on the pommel frames the handle, while an aged brass centre block adds one warm accent that pulls the eye to the heart of the head. All five material zones are baked into a single 2K PBR texture set, so in-engine the whole asset is one material and one draw call.",
      list: [
        { name: "Forged Steel", color: "#66666a", zone: "Head & spikes", desc: "Dark metallic steel with bright worn edges, directional scratches and grime in the crevices — reads as heavy and battle-used." },
        { name: "Hardwood", color: "#997048", zone: "Handle", desc: "Ring-grain wood, non-metallic and matte, giving a warm natural contrast to the cold metal." },
        { name: "Leather Wrap", color: "#3c2917", zone: "Grip", desc: "Dark leather with a fine bumpy surface and higher roughness; ridges are rubbed lighter from handling." },
        { name: "Blackened Iron", color: "#424245", zone: "Pommel", desc: "Near-black heat-treated iron; chipped edges reveal the bare steel underneath." },
        { name: "Aged Brass", color: "#cfab66", zone: "Centre block", desc: "Warm metallic accent with a dark green patina in the recesses — the focal point of the head." }
      ]
    },
    textures: {
      resolution: "2048 × 2048", format: "PNG · 8-bit", folder: "assets/models/hammer/textures/",
      maps: [
        { map: "BaseColor", file: "assets/models/hammer/textures/Hammer_BaseColor.png", preview: "assets/models/hammer/textures/preview/Hammer_BaseColor.webp", size: "3.2 MB" },
        { map: "Normal", file: "assets/models/hammer/textures/Hammer_Normal.png", preview: "assets/models/hammer/textures/preview/Hammer_Normal.webp", size: "3.9 MB" },
        { map: "Roughness", file: "assets/models/hammer/textures/Hammer_Roughness.png", preview: "assets/models/hammer/textures/preview/Hammer_Roughness.webp", size: "2.3 MB" },
        { map: "Metallic", file: "assets/models/hammer/textures/Hammer_Metallic.png", preview: "assets/models/hammer/textures/preview/Hammer_Metallic.webp", size: "213 KB" },
        { map: "AO", file: "assets/models/hammer/textures/Hammer_AO.png", preview: "assets/models/hammer/textures/preview/Hammer_AO.webp", size: "1.8 MB" },
        { map: "MetallicSmoothness", file: "assets/models/hammer/textures/Hammer_MetallicSmoothness.png", preview: "assets/models/hammer/textures/preview/Hammer_MetallicSmoothness.webp", size: "2.5 MB" },
        { map: "ORM", file: "assets/models/hammer/textures/Hammer_ORM.png", preview: "assets/models/hammer/textures/preview/Hammer_ORM.webp", size: "3.8 MB" }
      ]
    },
    featured: false,
    order: 1
  },
  {
    id: "lego-statue",
    title: "Lego Statue",
    category: "Hard Surface",
    year: "",
    status: "completed",
    shortDescription: "Hard Surface Construct Model",
    longDescription: "A hard-surface, brick-built statue modeled in Autodesk Maya.",
    software: ["Maya", "Blender"],
    tags: ["Hard Surface", "Character", "PBR", "Game-ready"],
    thumbnail: "assets/models/lego-statue/thumbnail.webp",
    model: "assets/models/lego-statue/model.glb",
    renders: [
      "assets/models/lego-statue/renders/view-1.webp",
      "assets/models/lego-statue/renders/view-2.webp",
      "assets/models/lego-statue/renders/view-3.webp",
      "assets/models/lego-statue/renders/wireframe.webp"
    ],
    video: "",
    gallery: [],
    links: {},
    specs: [["Polygons", "1,711"], ["Triangles", "3,448"], ["Vertices", "1,766"], ["Meshes", "10 → merged to 1"], ["Topology", "All quads"], ["Real-world size", "120 × 75 × 88 cm (H × W × D)"], ["Scale", "Real-world · 1 unit = 1 m"], ["Reference", "Own design — stylized from the artist's own concept, no photo reference"], ["Material zones", "8 → baked to 1 material"], ["Texture set", "1 × 2048² PBR"], ["Pipeline", "Modeled in Maya → materials authored & baked in Blender → real-time PBR"], ["Built for", "Real-time engines (Unity, Unreal, WebGL)"]],
    materials: {
      summary: "The statue is built to look like a real moulded brick figure, so every surface is glossy ABS plastic rather than paint or metal. The colours follow a classic toy palette — a bright blue head, light and dark bluish-grey body parts, a green baseplate and a black mouth with white teeth — so each part reads as its own brick. Roughness stays low for that injection-moulded shine, with faint scuffs and handling marks breaking up the reflections so it never looks like flat CG plastic. The eyes are translucent red plastic with a soft glow that gives the statue its angry character, and a pearl-gold chest piece adds a single metallic highlight. The ten original meshes were merged into one mesh with one 2K texture set for real-time use.",
      list: [
        { name: "Bright Blue ABS", color: "#00459c", zone: "Head", desc: "Glossy moulded plastic with low roughness and subtle surface scuffs." },
        { name: "Trans-Red Glow", color: "#d10000", zone: "Eyes", desc: "Translucent red plastic with an emission map so the eyes glow in any lighting." },
        { name: "Light Bluish Grey", color: "#9ca0a2", zone: "Body & frame", desc: "Neutral glossy plastic that lets the coloured parts stand out." },
        { name: "Dark Bluish Grey", color: "#454749", zone: "Eyebrows", desc: "Darker grey for the angry brow plates, adding contrast on the face." },
        { name: "Black ABS", color: "#1c1c1d", zone: "Mouth", desc: "Deep black plastic framing the teeth." },
        { name: "White ABS", color: "#e0e0dc", zone: "Teeth", desc: "Slightly warm white so it doesn't look clinical." },
        { name: "Pearl Gold", color: "#e0b866", zone: "Chest piece", desc: "Metallic pearl finish — the one shiny accent on the figure." },
        { name: "Green Baseplate", color: "#007033", zone: "Base", desc: "Classic toy-green base that grounds the statue." }
      ]
    },
    textures: {
      resolution: "2048 × 2048", format: "PNG · 8-bit", folder: "assets/models/lego-statue/textures/",
      maps: [
        { map: "BaseColor", file: "assets/models/lego-statue/textures/LegoStatue_BaseColor.png", preview: "assets/models/lego-statue/textures/preview/LegoStatue_BaseColor.webp", size: "1.4 MB" },
        { map: "Normal", file: "assets/models/lego-statue/textures/LegoStatue_Normal.png", preview: "assets/models/lego-statue/textures/preview/LegoStatue_Normal.webp", size: "121 KB" },
        { map: "Roughness", file: "assets/models/lego-statue/textures/LegoStatue_Roughness.png", preview: "assets/models/lego-statue/textures/preview/LegoStatue_Roughness.webp", size: "1.4 MB" },
        { map: "Metallic", file: "assets/models/lego-statue/textures/LegoStatue_Metallic.png", preview: "assets/models/lego-statue/textures/preview/LegoStatue_Metallic.webp", size: "68 KB" },
        { map: "AO", file: "assets/models/lego-statue/textures/LegoStatue_AO.png", preview: "assets/models/lego-statue/textures/preview/LegoStatue_AO.webp", size: "1.7 MB" },
        { map: "Emission", file: "assets/models/lego-statue/textures/LegoStatue_Emission.png", preview: "assets/models/lego-statue/textures/preview/LegoStatue_Emission.webp", size: "58 KB" },
        { map: "MetallicSmoothness", file: "assets/models/lego-statue/textures/LegoStatue_MetallicSmoothness.png", preview: "assets/models/lego-statue/textures/preview/LegoStatue_MetallicSmoothness.webp", size: "1.6 MB" },
        { map: "ORM", file: "assets/models/lego-statue/textures/LegoStatue_ORM.png", preview: "assets/models/lego-statue/textures/preview/LegoStatue_ORM.webp", size: "3.0 MB" }
      ]
    },
    featured: false,
    order: 2
  },
  {
    id: "robotic-spidy",
    title: "Robotic Spidy",
    category: "Sci-Fi",
    year: "",
    status: "completed",
    shortDescription: "Sci-Fi Cybernetic Model",
    longDescription: "A four-legged sci-fi robot with an antenna, modeled in Autodesk Maya.",
    software: ["Maya", "Blender"],
    tags: ["Sci-Fi", "Robot", "Mech", "PBR", "Game-ready"],
    thumbnail: "assets/models/robotic-spidy/thumbnail.webp",
    model: "assets/models/robotic-spidy/model.glb",
    renders: [
      "assets/models/robotic-spidy/renders/view-1.webp",
      "assets/models/robotic-spidy/renders/view-2.webp",
      "assets/models/robotic-spidy/renders/view-3.webp",
      "assets/models/robotic-spidy/renders/wireframe.webp"
    ],
    video: "",
    gallery: [],
    links: {},
    specs: [["Polygons", "1,382"], ["Triangles", "2,766"], ["Vertices", "1,395"], ["Meshes", "1"], ["Topology", "90% quads"], ["Real-world size", "45 × 25 × 28 cm (H × W × D)"], ["Scale", "Real-world · 1 unit = 1 m"], ["Reference", "Own design — stylized from the artist's own concept, no photo reference"], ["Material zones", "7 → baked to 1 material"], ["Texture set", "1 × 2048² PBR"], ["Pipeline", "Modeled in Maya → materials authored & baked in Blender → real-time PBR"], ["Built for", "Real-time engines (Unity, Unreal, WebGL)"]],
    materials: {
      summary: "Robotic Spidy is treated as a small field robot that has been out working. The shell and leg blades are red-painted metal under a clear coat, and the paint is chipped back to bare steel along the edges and corners where it would knock against the ground. Gunmetal shoulder armour and antenna give the red a darker frame, and black rubber joints show where the legs flex. A dark glossy face plate holds the glowing cyan eyes, and a small green status light on top tells you the robot is switched on. All glowing parts live in an emission map, so they light up in any engine without extra lights.",
      list: [
        { name: "Red Painted Metal", color: "#ae2b26", zone: "Shell & leg blades", desc: "Clear-coated red paint with chipped edges exposing bare steel, plus light grime in the seams." },
        { name: "Gunmetal", color: "#545659", zone: "Shoulder armour & antenna", desc: "Dark metallic plates with polished worn edges and fine scratches." },
        { name: "Rubber", color: "#242426", zone: "Joints", desc: "Matte black rubber with a soft bumpy surface where the legs bend." },
        { name: "Face Plate", color: "#272729", zone: "Visor", desc: "Glossy dark coated metal that makes the eyes pop." },
        { name: "Cyan Eye Glow", color: "#3fefff", zone: "Eyes", desc: "Emissive cyan — the robot's personality." },
        { name: "Status Light", color: "#33ff4d", zone: "Top light", desc: "Small green emissive LED that says 'online'." },
        { name: "Dark Glass", color: "#0d0f12", zone: "Sensor", desc: "Near-black glossy glass detail." }
      ]
    },
    textures: {
      resolution: "2048 × 2048", format: "PNG · 8-bit", folder: "assets/models/robotic-spidy/textures/",
      maps: [
        { map: "BaseColor", file: "assets/models/robotic-spidy/textures/RoboticSpidy_BaseColor.png", preview: "assets/models/robotic-spidy/textures/preview/RoboticSpidy_BaseColor.webp", size: "3.4 MB" },
        { map: "Normal", file: "assets/models/robotic-spidy/textures/RoboticSpidy_Normal.png", preview: "assets/models/robotic-spidy/textures/preview/RoboticSpidy_Normal.webp", size: "3.0 MB" },
        { map: "Roughness", file: "assets/models/robotic-spidy/textures/RoboticSpidy_Roughness.png", preview: "assets/models/robotic-spidy/textures/preview/RoboticSpidy_Roughness.webp", size: "2.1 MB" },
        { map: "Metallic", file: "assets/models/robotic-spidy/textures/RoboticSpidy_Metallic.png", preview: "assets/models/robotic-spidy/textures/preview/RoboticSpidy_Metallic.webp", size: "757 KB" },
        { map: "AO", file: "assets/models/robotic-spidy/textures/RoboticSpidy_AO.png", preview: "assets/models/robotic-spidy/textures/preview/RoboticSpidy_AO.webp", size: "1.7 MB" },
        { map: "Emission", file: "assets/models/robotic-spidy/textures/RoboticSpidy_Emission.png", preview: "assets/models/robotic-spidy/textures/preview/RoboticSpidy_Emission.webp", size: "64 KB" },
        { map: "MetallicSmoothness", file: "assets/models/robotic-spidy/textures/RoboticSpidy_MetallicSmoothness.png", preview: "assets/models/robotic-spidy/textures/preview/RoboticSpidy_MetallicSmoothness.webp", size: "2.9 MB" },
        { map: "ORM", file: "assets/models/robotic-spidy/textures/RoboticSpidy_ORM.png", preview: "assets/models/robotic-spidy/textures/preview/RoboticSpidy_ORM.webp", size: "3.9 MB" }
      ]
    },
    featured: true,       // featured: true = this model stars in the hero 3D world
    order: 3
  },
  {
    id: "spotlight",
    title: "Spotlight",
    category: "Prop",
    year: "",
    status: "completed",
    shortDescription: "Detailed Prop Model",
    longDescription: "A stage spotlight prop modeled in Autodesk Maya.",
    software: ["Maya", "Blender"],
    tags: ["Prop", "PBR", "Game-ready"],
    thumbnail: "assets/models/spotlight/thumbnail.webp",
    model: "assets/models/spotlight/model.glb",
    renders: [
      "assets/models/spotlight/renders/view-1.webp",
      "assets/models/spotlight/renders/view-2.webp",
      "assets/models/spotlight/renders/view-3.webp",
      "assets/models/spotlight/renders/wireframe.webp"
    ],
    video: "",
    gallery: [],
    links: {},
    specs: [["Polygons", "172"], ["Triangles", "348"], ["Vertices", "176"], ["Meshes", "1"], ["Topology", "All quads"], ["Real-world size", "40 × 40 × 29 cm (W × D × H)"], ["Scale", "Real-world · 1 unit = 1 m"], ["Reference", "Own design — stylized from the artist's own concept, no photo reference"], ["Material zones", "3 → baked to 1 material"], ["Texture set", "1 × 2048² PBR"], ["Pipeline", "Modeled in Maya → materials authored & baked in Blender → real-time PBR"], ["Built for", "Real-time engines (Unity, Unreal, WebGL)"]],
    materials: {
      summary: "The spotlight is designed as a working stage fixture. The housing is matte black powder-coated metal, the usual finish for stage lights so they disappear into the rig, with worn edges and light scratches showing bare metal where it has been clamped and moved between shows. The mounting yoke and knob are brushed steel, separating the moving parts from the body. The lens is warm glass with an emission map, so the light reads as switched on even in an unlit scene. At only 348 triangles it is a light prop that can be repeated many times across a stage set.",
      list: [
        { name: "Black Powder Coat", color: "#242427", zone: "Housing", desc: "Matte black metal finish with chipped, scratched edges from use." },
        { name: "Brushed Steel", color: "#b0b0b4", zone: "Yoke & knob", desc: "Brighter metal for the mount, with fine scratches and grime." },
        { name: "Warm Lens", color: "#ffdba6", zone: "Lens", desc: "Glossy glass with a warm emission map so the light looks switched on." }
      ]
    },
    textures: {
      resolution: "2048 × 2048", format: "PNG · 8-bit", folder: "assets/models/spotlight/textures/",
      maps: [
        { map: "BaseColor", file: "assets/models/spotlight/textures/Spotlight_BaseColor.png", preview: "assets/models/spotlight/textures/preview/Spotlight_BaseColor.webp", size: "1.9 MB" },
        { map: "Normal", file: "assets/models/spotlight/textures/Spotlight_Normal.png", preview: "assets/models/spotlight/textures/preview/Spotlight_Normal.webp", size: "3.5 MB" },
        { map: "Roughness", file: "assets/models/spotlight/textures/Spotlight_Roughness.png", preview: "assets/models/spotlight/textures/preview/Spotlight_Roughness.webp", size: "1.6 MB" },
        { map: "Metallic", file: "assets/models/spotlight/textures/Spotlight_Metallic.png", preview: "assets/models/spotlight/textures/preview/Spotlight_Metallic.webp", size: "644 KB" },
        { map: "AO", file: "assets/models/spotlight/textures/Spotlight_AO.png", preview: "assets/models/spotlight/textures/preview/Spotlight_AO.webp", size: "1.2 MB" },
        { map: "Emission", file: "assets/models/spotlight/textures/Spotlight_Emission.png", preview: "assets/models/spotlight/textures/preview/Spotlight_Emission.webp", size: "58 KB" },
        { map: "MetallicSmoothness", file: "assets/models/spotlight/textures/Spotlight_MetallicSmoothness.png", preview: "assets/models/spotlight/textures/preview/Spotlight_MetallicSmoothness.webp", size: "2.2 MB" },
        { map: "ORM", file: "assets/models/spotlight/textures/Spotlight_ORM.png", preview: "assets/models/spotlight/textures/preview/Spotlight_ORM.webp", size: "3.0 MB" }
      ]
    },
    featured: false,
    order: 4
  },
  {
    "id": "household",
    "title": "Low Poly Box Props",
    "category": "Asset Collection",
    "year": "",
    "status": "completed",
    "type": "collection",
    "shortDescription": "3BHK household set · 32 props + furnished house",
    "longDescription": "Low Poly Box Props is a complete set of household furniture and appliances for a 2–3 BHK home, built for games. Every single asset in this project — from the bed and wardrobe to the wall clock and the plant — is modelled only from box primitives: scaled, positioned and grouped cubes, with no sculpting or subdivision.\n\nThat constraint keeps every prop extremely light and consistent for real-time engines, so the realism comes from the materials. I built a library of tileable PBR textures (wood grain, floor planks, ceramic and marble tiles, woven fabrics, leather, brushed steel, stone and paint) with real-world colour tones and real-world texture scale, so a 20 cm floor plank or a 2 mm fabric thread looks right on every asset.\n\nOpen any prop below to inspect it in 3D, with its polygon count, size and materials — or open the furnished house to see them all arranged in a home.",
    "software": [
      "Blender"
    ],
    "tags": [
      "Low poly",
      "Box modelling",
      "PBR",
      "Game-ready",
      "Interior"
    ],
    "thumbnail": "assets/models/household-house/thumbnail.webp",
    "model": "",
    "renders": [],
    "video": "",
    "gallery": [],
    "links": {},
    "items": [
      "household-house",
      "hh-sofa",
      "hh-armchair",
      "hh-pouf",
      "hh-coffee-table",
      "hh-side-table",
      "hh-tv-console",
      "hh-rug",
      "hh-curtains",
      "hh-bookshelf",
      "hh-floor-lamp",
      "hh-table-lamp",
      "hh-plant-pot",
      "hh-bed",
      "hh-nightstand",
      "hh-wardrobe",
      "hh-desk",
      "hh-office-chair",
      "hh-standing-mirror",
      "hh-dining-table",
      "hh-dining-chair",
      "hh-kitchen-counter",
      "hh-refrigerator",
      "hh-microwave",
      "hh-wall-cabinet",
      "hh-washing-machine",
      "hh-toilet",
      "hh-vanity",
      "hh-shower",
      "hh-shoe-rack",
      "hh-door",
      "hh-wall-clock",
      "hh-wall-art"
    ],
    "collectionStats": [
      [
        "Assets",
        "32 props + 1 house"
      ],
      [
        "Prop triangles",
        "3,612"
      ],
      [
        "Box primitives",
        "301"
      ],
      [
        "House triangles",
        "9,372"
      ],
      [
        "Materials",
        "47 tileable PBR"
      ],
      [
        "Rooms",
        "3BHK · 8 rooms"
      ]
    ],
    "featured": false,
    "order": 5
  },
  {
    "id": "household-house",
    "title": "Furnished 3BHK House",
    "category": "Environment",
    "year": "",
    "status": "completed",
    "shortDescription": "The full box-built household set, furnished room by room",
    "longDescription": "This is the whole Low Poly Box Props set arranged into a furnished 3BHK home: a living room, dining area, kitchen, master bedroom with attached bath, two more bedrooms and a common bathroom. Every wall, window frame, floor and piece of furniture is built from box primitives — 781 boxes and 9,372 triangles across a 15.4 × 10.6 m floor plan.\n\nThe house shows how the individual props work together at real-world scale. Floors switch between oak, walnut and marble-effect tiles to zone each room, accent walls use real interior paint tones, and the bathrooms use glazed ceramic tiles, so every room reads clearly even from a top-down game camera.",
    "software": [
      "Blender"
    ],
    "tags": [
      "Environment",
      "Low poly",
      "Box modelling",
      "PBR",
      "Interior"
    ],
    "thumbnail": "assets/models/household-house/thumbnail.webp",
    "model": "assets/models/household-house/model.glb",
    "renders": [],
    "video": "",
    "gallery": [],
    "links": {},
    "collection": "household",
    "specs": [
      [
        "Polygons",
        "4,686"
      ],
      [
        "Triangles",
        "9,372"
      ],
      [
        "Vertices",
        "6,248"
      ],
      [
        "Meshes",
        "781 boxes → merged to 1"
      ],
      [
        "Topology",
        "All quads (box primitives)"
      ],
      [
        "Floor plan",
        "15.4 × 10.6 m · 3.06 m walls"
      ],
      [
        "Rooms",
        "8 · 3 bedrooms, 2 baths, living, dining, kitchen"
      ],
      [
        "Scale",
        "Real-world · 1 unit = 1 m"
      ],
      [
        "Reference",
        "Own design · real-world furniture proportions"
      ],
      [
        "Materials",
        "65 · tileable PBR"
      ],
      [
        "Pipeline",
        "Box-modelled in Blender → tileable PBR → GLB"
      ],
      [
        "Built for",
        "Real-time engines (Unity, Unreal, WebGL)"
      ]
    ],
    "materials": {
      "summary": "Materials are shared with the individual props, so the whole house uses one consistent tileable PBR library. Each room gets its own floor and an accent wall colour, chosen to match real Indian apartment interiors: warm oak in the bedrooms, walnut in the dining area, marble-effect tiles in the kitchen and glazed ceramic tiles in the bathrooms.",
      "list": [
        {
          "name": "Grey Washed Planks",
          "color": "#807e7a",
          "zone": "1.6 m tile",
          "desc": "Modern grey-washed timber boards."
        },
        {
          "name": "Light Oak Planks",
          "color": "#c7ac81",
          "zone": "1.6 m tile",
          "desc": "Scandinavian light-oak boards with soft grain and subtle seams."
        },
        {
          "name": "Oak Floor Planks",
          "color": "#ab8354",
          "zone": "1.6 m tile",
          "desc": "20 cm oak planks with staggered joints, varied board tones and dark seams."
        },
        {
          "name": "Terracotta Tile",
          "color": "#a45433",
          "zone": "0.9 m tile",
          "desc": "Matte clay tiles with natural tone variation — a classic Indian home finish."
        },
        {
          "name": "Blue Ceramic Tile",
          "color": "#6582aa",
          "zone": "1.2 m tile",
          "desc": "30 cm glazed bathroom floor tiles with light grout."
        },
        {
          "name": "Teal Ceramic Tile",
          "color": "#488085",
          "zone": "1.2 m tile",
          "desc": "30 cm glazed teal tiles for the second bathroom."
        },
        {
          "name": "White Marble Tile",
          "color": "#dadad8",
          "zone": "1.2 m tile",
          "desc": "60 cm polished marble-effect tiles with grey veining and grout lines."
        },
        {
          "name": "Walnut Floor Planks",
          "color": "#54331b",
          "zone": "1.6 m tile",
          "desc": "Dark walnut boards for a richer dining-room floor."
        },
        {
          "name": "Concrete",
          "color": "#878580",
          "zone": "2 m tile",
          "desc": "Rough poured concrete with pores and tonal patches."
        },
        {
          "name": "Blue-Grey Paint",
          "color": "#51657c",
          "zone": "2 m tile",
          "desc": "Accent wall in a calm blue-grey emulsion."
        },
        {
          "name": "Mint Paint",
          "color": "#93c6ad",
          "zone": "2 m tile",
          "desc": "Soft mint accent wall."
        },
        {
          "name": "Rustic Brown Paint",
          "color": "#614026",
          "zone": "2 m tile",
          "desc": "Earthy brown accent paint."
        },
        {
          "name": "Teal Paint",
          "color": "#266970",
          "zone": "2 m tile",
          "desc": "Deep teal feature wall."
        },
        {
          "name": "Terracotta Paint",
          "color": "#b26144",
          "zone": "2 m tile",
          "desc": "Warm terracotta feature wall."
        },
        {
          "name": "Yellow Paint",
          "color": "#dfb742",
          "zone": "2 m tile",
          "desc": "Sunny ochre accent paint."
        },
        {
          "name": "Blue Wall Tile",
          "color": "#9db7d9",
          "zone": "1.2 m tile",
          "desc": "15 cm glossy wall tiles with thin grout, splash-zone finish."
        },
        {
          "name": "Teal Wall Tile",
          "color": "#98c8ca",
          "zone": "1.2 m tile",
          "desc": "15 cm glossy teal wall tiles."
        },
        {
          "name": "Off-White Wall Paint",
          "color": "#e4dfd5",
          "zone": "2 m tile",
          "desc": "Warm off-white emulsion with a faint roller texture."
        }
      ]
    },
    "textures": {
      "resolution": "1024 × 1024 tileable",
      "format": "PNG · 8-bit (WebP in GLB)",
      "maps": [
        {
          "map": "Floor_Grey_Planks",
          "label": "Grey Washed Planks",
          "use": "BaseColor · Roughness · Normal — repeats every 1.6 m",
          "file": "assets/models/household/materials/Floor_Grey_Planks_BaseColor.webp",
          "preview": "assets/models/household/materials/Floor_Grey_Planks_BaseColor.webp",
          "size": "1024² PNG ×3"
        },
        {
          "map": "Floor_LightOak_Planks",
          "label": "Light Oak Planks",
          "use": "BaseColor · Roughness · Normal — repeats every 1.6 m",
          "file": "assets/models/household/materials/Floor_LightOak_Planks_BaseColor.webp",
          "preview": "assets/models/household/materials/Floor_LightOak_Planks_BaseColor.webp",
          "size": "1024² PNG ×3"
        },
        {
          "map": "Floor_Oak_Planks",
          "label": "Oak Floor Planks",
          "use": "BaseColor · Roughness · Normal — repeats every 1.6 m",
          "file": "assets/models/household/materials/Floor_Oak_Planks_BaseColor.webp",
          "preview": "assets/models/household/materials/Floor_Oak_Planks_BaseColor.webp",
          "size": "1024² PNG ×3"
        },
        {
          "map": "Floor_Terracotta_Tile",
          "label": "Terracotta Tile",
          "use": "BaseColor · Roughness · Normal — repeats every 0.9 m",
          "file": "assets/models/household/materials/Floor_Terracotta_Tile_BaseColor.webp",
          "preview": "assets/models/household/materials/Floor_Terracotta_Tile_BaseColor.webp",
          "size": "1024² PNG ×3"
        },
        {
          "map": "Floor_Tile_Blue",
          "label": "Blue Ceramic Tile",
          "use": "BaseColor · Roughness · Normal — repeats every 1.2 m",
          "file": "assets/models/household/materials/Floor_Tile_Blue_BaseColor.webp",
          "preview": "assets/models/household/materials/Floor_Tile_Blue_BaseColor.webp",
          "size": "1024² PNG ×3"
        },
        {
          "map": "Floor_Tile_Teal",
          "label": "Teal Ceramic Tile",
          "use": "BaseColor · Roughness · Normal — repeats every 1.2 m",
          "file": "assets/models/household/materials/Floor_Tile_Teal_BaseColor.webp",
          "preview": "assets/models/household/materials/Floor_Tile_Teal_BaseColor.webp",
          "size": "1024² PNG ×3"
        },
        {
          "map": "Floor_Tile_White",
          "label": "White Marble Tile",
          "use": "BaseColor · Roughness · Normal — repeats every 1.2 m",
          "file": "assets/models/household/materials/Floor_Tile_White_BaseColor.webp",
          "preview": "assets/models/household/materials/Floor_Tile_White_BaseColor.webp",
          "size": "1024² PNG ×3"
        },
        {
          "map": "Floor_Walnut_Planks",
          "label": "Walnut Floor Planks",
          "use": "BaseColor · Roughness · Normal — repeats every 1.6 m",
          "file": "assets/models/household/materials/Floor_Walnut_Planks_BaseColor.webp",
          "preview": "assets/models/household/materials/Floor_Walnut_Planks_BaseColor.webp",
          "size": "1024² PNG ×3"
        },
        {
          "map": "House_Base_Concrete",
          "label": "Concrete",
          "use": "BaseColor · Roughness · Normal — repeats every 2 m",
          "file": "assets/models/household/materials/House_Base_Concrete_BaseColor.webp",
          "preview": "assets/models/household/materials/House_Base_Concrete_BaseColor.webp",
          "size": "1024² PNG ×3"
        },
        {
          "map": "Paint_Blue_Grey",
          "label": "Blue-Grey Paint",
          "use": "BaseColor · Roughness · Normal — repeats every 2 m",
          "file": "assets/models/household/materials/Paint_Blue_Grey_BaseColor.webp",
          "preview": "assets/models/household/materials/Paint_Blue_Grey_BaseColor.webp",
          "size": "1024² PNG ×3"
        },
        {
          "map": "Paint_Mint",
          "label": "Mint Paint",
          "use": "BaseColor · Roughness · Normal — repeats every 2 m",
          "file": "assets/models/household/materials/Paint_Mint_BaseColor.webp",
          "preview": "assets/models/household/materials/Paint_Mint_BaseColor.webp",
          "size": "1024² PNG ×3"
        },
        {
          "map": "Paint_Rustic_Brown",
          "label": "Rustic Brown Paint",
          "use": "BaseColor · Roughness · Normal — repeats every 2 m",
          "file": "assets/models/household/materials/Paint_Rustic_Brown_BaseColor.webp",
          "preview": "assets/models/household/materials/Paint_Rustic_Brown_BaseColor.webp",
          "size": "1024² PNG ×3"
        },
        {
          "map": "Paint_Teal",
          "label": "Teal Paint",
          "use": "BaseColor · Roughness · Normal — repeats every 2 m",
          "file": "assets/models/household/materials/Paint_Teal_BaseColor.webp",
          "preview": "assets/models/household/materials/Paint_Teal_BaseColor.webp",
          "size": "1024² PNG ×3"
        },
        {
          "map": "Paint_Terracotta",
          "label": "Terracotta Paint",
          "use": "BaseColor · Roughness · Normal — repeats every 2 m",
          "file": "assets/models/household/materials/Paint_Terracotta_BaseColor.webp",
          "preview": "assets/models/household/materials/Paint_Terracotta_BaseColor.webp",
          "size": "1024² PNG ×3"
        },
        {
          "map": "Paint_Yellow",
          "label": "Yellow Paint",
          "use": "BaseColor · Roughness · Normal — repeats every 2 m",
          "file": "assets/models/household/materials/Paint_Yellow_BaseColor.webp",
          "preview": "assets/models/household/materials/Paint_Yellow_BaseColor.webp",
          "size": "1024² PNG ×3"
        },
        {
          "map": "Wall_Tile_Blue",
          "label": "Blue Wall Tile",
          "use": "BaseColor · Roughness · Normal — repeats every 1.2 m",
          "file": "assets/models/household/materials/Wall_Tile_Blue_BaseColor.webp",
          "preview": "assets/models/household/materials/Wall_Tile_Blue_BaseColor.webp",
          "size": "1024² PNG ×3"
        },
        {
          "map": "Wall_Tile_Teal",
          "label": "Teal Wall Tile",
          "use": "BaseColor · Roughness · Normal — repeats every 1.2 m",
          "file": "assets/models/household/materials/Wall_Tile_Teal_BaseColor.webp",
          "preview": "assets/models/household/materials/Wall_Tile_Teal_BaseColor.webp",
          "size": "1024² PNG ×3"
        },
        {
          "map": "Wall_White",
          "label": "Off-White Wall Paint",
          "use": "BaseColor · Roughness · Normal — repeats every 2 m",
          "file": "assets/models/household/materials/Wall_White_BaseColor.webp",
          "preview": "assets/models/household/materials/Wall_White_BaseColor.webp",
          "size": "1024² PNG ×3"
        }
      ]
    },
    "order": 6
  },
  {
    "id": "rain-house",
    "title": "Rain House",
    "category": "Environment",
    "year": "2026",
    "status": "completed",
    "shortDescription": "Stylised house and compound, built for a rainy-night cinematic",
    "longDescription": "Rain House was created as a college assignment for my MA in Interactive Game Art Design & Development at Jain University. The brief was to build a complete environment in Blender, bring a character to life in it and present it as a cinematic, so this house is the set for that scene.\n\nI built the house and its walled compound piece by piece from simple low-poly shapes: the two-storey house, the garage, the boundary wall with a double gate that opens, the front porch, a stepping-stone garden path, trees, rocks, potted plants and glowing garden lamps. That comes to 364 separate parts, kept light at 3,518 polygons (5,480 triangles) across a 22 × 18 m footprint and 7 m tall. Every surface started as a procedural material (plaster, wood, roof, glass, paving, grass, foliage and metal), and I then baked them on the GPU into one 4K PBR texture set with colour, roughness, normal and emission maps. That lets the whole house run as a single mesh and material in a game engine. Warm wooden doors, lit windows and garden lamps were chosen to stand out against the cold blue rain so the house reads clearly at night.",
    "software": [
      "Blender"
    ],
    "tags": [
      "Environment",
      "Stylised",
      "Rain",
      "PBR",
      "College assignment"
    ],
    "thumbnail": "assets/models/rain-house/thumbnail.webp",
    "model": "assets/models/rain-house/model.glb",
    "renders": [],
    "video": "",
    "gallery": [],
    "links": {},
    "specs": [
      [
        "Polygons",
        "3,518"
      ],
      [
        "Triangles",
        "5,480"
      ],
      [
        "Vertices",
        "3,468"
      ],
      [
        "Meshes",
        "364 parts → merged to 1"
      ],
      [
        "Footprint",
        "22.3 × 18.35 m · 7.018 m tall"
      ],
      [
        "Scale",
        "Real-world · 1 unit = 1 m"
      ],
      [
        "Materials",
        "11 procedural → baked to 1 PBR set"
      ],
      [
        "Texture set",
        "1 × 4096² PBR"
      ],
      [
        "Pipeline",
        "Procedural materials in Blender → GPU bake → GLB"
      ],
      [
        "Built for",
        "Real-time engines (Unity, Unreal, WebGL)"
      ]
    ],
    "materials": {
      "summary": "",
      "list": [
        {
          "name": "Asphalt",
          "color": "#343437",
          "zone": "Driveway path",
          "desc": ""
        },
        {
          "name": "Bark",
          "color": "#72593b",
          "zone": "Tree trunks",
          "desc": ""
        },
        {
          "name": "Foliage",
          "color": "#4f9c3b",
          "zone": "Trees & plants",
          "desc": ""
        },
        {
          "name": "Glass",
          "color": "#2b454f",
          "zone": "Windows",
          "desc": ""
        },
        {
          "name": "Grass",
          "color": "#54a542",
          "zone": "Lawn",
          "desc": ""
        },
        {
          "name": "Lamp glow",
          "color": "#fee09f",
          "zone": "Garden lamps (emissive)",
          "desc": ""
        },
        {
          "name": "Metal",
          "color": "#303033",
          "zone": "Bands, lamps & rails",
          "desc": ""
        },
        {
          "name": "Paver",
          "color": "#85827e",
          "zone": "Street & paving",
          "desc": ""
        },
        {
          "name": "Plaster",
          "color": "#3f7f90",
          "zone": "Walls & fence",
          "desc": ""
        },
        {
          "name": "Roof",
          "color": "#4d4d51",
          "zone": "Roof slabs",
          "desc": ""
        },
        {
          "name": "Wood",
          "color": "#c57a30",
          "zone": "Gate, door & shutters",
          "desc": ""
        }
      ]
    },
    "textures": {
      "resolution": "2048 × 2048",
      "format": "PNG · 8-bit",
      "maps": [
        {
          "map": "BaseColor",
          "file": "assets/models/rain-house/textures/RainHouse_BaseColor.png",
          "preview": "assets/models/rain-house/textures/preview/RainHouse_BaseColor.webp",
          "size": "4.4 MB"
        },
        {
          "map": "Normal",
          "file": "assets/models/rain-house/textures/RainHouse_Normal.png",
          "preview": "assets/models/rain-house/textures/preview/RainHouse_Normal.webp",
          "size": "4.0 MB"
        },
        {
          "map": "Roughness",
          "file": "assets/models/rain-house/textures/RainHouse_Roughness.png",
          "preview": "assets/models/rain-house/textures/preview/RainHouse_Roughness.webp",
          "size": "4.0 MB"
        },
        {
          "map": "Emission",
          "file": "assets/models/rain-house/textures/RainHouse_Emission.png",
          "preview": "assets/models/rain-house/textures/preview/RainHouse_Emission.webp",
          "size": "0.1 MB"
        }
      ]
    },
    "featured": false,
    "order": 7
  },
  {
    "id": "rain-house-character",
    "title": "Rain Walker",
    "category": "Character",
    "year": "2026",
    "status": "completed",
    "shortDescription": "Low-poly stylised character with a 17-bone rig and walk cycle",
    "longDescription": "Rain Walker is the character I made for the same college assignment, as part of my MA in Interactive Game Art Design & Development at Jain University. His job is to walk through the Rain House cinematic, so he was designed in the same chunky, box-built style as the house.\n\nHe is a low-poly model with only 316 polygons (652 triangles) and 10 simple flat-colour materials: a straw hat with a flower, an orange shirt, blue trousers and shoes. He stands 1.85 m tall. I rigged him with a lightweight 17-bone skeleton, enough for natural walking, arm swings and head movement while staying cheap for real-time use. Beyond the basic walk cycle, I animated him for the cinematic: he stops at the gate and pushes it open with both hands, walks through the garden around the plants, steps onto the porch, knocks on the front door and looks up at the house.",
    "software": [
      "Blender"
    ],
    "tags": [
      "Character",
      "Low poly",
      "Rigged",
      "Animated",
      "College assignment"
    ],
    "thumbnail": "assets/models/rain-house-character/thumbnail.webp",
    "model": "assets/models/rain-house-character/model.glb",
    "renders": [],
    "video": "",
    "gallery": [],
    "links": {},
    "specs": [
      [
        "Polygons",
        "316"
      ],
      [
        "Triangles",
        "652"
      ],
      [
        "Vertices",
        "428"
      ],
      [
        "Rig",
        "17-bone armature"
      ],
      [
        "Animation",
        "Walk cycle (in-place loop)"
      ],
      [
        "Height",
        "184.5 cm"
      ],
      [
        "Scale",
        "Real-world · 1 unit = 1 m"
      ],
      [
        "Materials",
        "10 flat-colour PBR"
      ],
      [
        "Pipeline",
        "Modelled, rigged & animated in Blender → GLB"
      ],
      [
        "Built for",
        "Real-time engines (Unity, Unreal, WebGL)"
      ]
    ],
    "materials": {
      "summary": "",
      "list": [
        {
          "name": "Skin",
          "color": "#ddab88",
          "zone": "Face & hands",
          "desc": ""
        },
        {
          "name": "Shirt",
          "color": "#ef811e",
          "zone": "Orange shirt",
          "desc": ""
        },
        {
          "name": "Pants",
          "color": "#4a6f81",
          "zone": "Blue trousers",
          "desc": ""
        },
        {
          "name": "Hair",
          "color": "#b94a26",
          "zone": "Hair & beard",
          "desc": ""
        },
        {
          "name": "Straw Hat",
          "color": "#e5bd64",
          "zone": "Hat",
          "desc": ""
        },
        {
          "name": "Shoes",
          "color": "#e7b23f",
          "zone": "Shoes",
          "desc": ""
        },
        {
          "name": "Eyes",
          "color": "#f3f3f1",
          "zone": "Eye whites",
          "desc": ""
        },
        {
          "name": "Pupils",
          "color": "#262020",
          "zone": "Pupils",
          "desc": ""
        },
        {
          "name": "Flower Petals",
          "color": "#f3f3ed",
          "zone": "Hat flower",
          "desc": ""
        },
        {
          "name": "Flower Centre",
          "color": "#f3cb26",
          "zone": "Hat flower",
          "desc": ""
        }
      ]
    },
    "textures": null,
    "featured": false,
    "order": 8
  }

  /* ---------- TEMPLATE (copy everything between the braces, add a comma before it) ----------
  ,{
    id: "my-new-model",                 // short, lowercase, no spaces → link: #model/my-new-model
    title: "My New Model",
    category: "Environment",            // e.g. Prop, Character, Environment, Vehicle
    year: "2026",
    status: "completed",                // "completed" | "in-progress" | "upcoming"
    shortDescription: "One line for the card",
    longDescription: "Longer text for the full-screen viewer.",
    software: ["Blender", "Substance Painter"],
    tags: ["Low poly"],
    thumbnail: "assets/models/my-new-model/thumbnail.webp",
    model: "assets/models/my-new-model/model.glb",   // .glb recommended (.gltf and .fbx also work)
    renders: [],                         // ["assets/models/my-new-model/renders/01.jpg", ...]
    video: "",                           // file path or YouTube/Vimeo link (turntable etc.)
    gallery: [],
    links: { website: "", other: "" },   // e.g. ArtStation / Sketchfab link
    featured: false,
    order: 5                              // lower numbers show first
  }
  ------------------------------------------------------------------------------------------- */
];
