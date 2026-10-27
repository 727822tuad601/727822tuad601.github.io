/* =====================================================================
   HOUSEHOLD COLLECTION — generated from Blender (LowPoly_Box_Props_PBR.blend).
   PORTFOLIO.householdItems = the props that open from the collection page.
   ===================================================================== */

window.PORTFOLIO = window.PORTFOLIO || {};
PORTFOLIO.householdItems = [
 {
  "id": "hh-sofa",
  "title": "Sofa",
  "category": "Living room",
  "collection": "household",
  "status": "completed",
  "shortDescription": "A two-seater sofa — the anchor piece of the living room.",
  "longDescription": "A two-seater sofa — the anchor piece of the living room. It belongs to the living room of the 3BHK set and, like every asset in this project, it is built only from box primitives — 12 scaled boxes, 144 triangles in total. The low-poly blocking keeps it readable and cheap for real-time use, so the realism comes from the surfaces: Cushion fabric, teal-blue upholstery and dark wood legs are tileable PBR materials with colour, roughness and normal maps, tuned to real-world colour tones. Because the UVs are box-mapped in real-world metres, wood grain, weaves and tiles keep the same scale on every face and across every asset in the house.",
  "software": [
   "Blender"
  ],
  "tags": [
   "Low poly",
   "Box modelling",
   "PBR",
   "Living room"
  ],
  "thumbnail": "assets/models/household/sofa/thumbnail.webp",
  "model": "assets/models/household/sofa/model.glb",
  "renders": [],
  "video": "",
  "gallery": [],
  "links": {},
  "order": 1,
  "specs": [
   [
    "Polygons",
    "72"
   ],
   [
    "Triangles",
    "144"
   ],
   [
    "Vertices",
    "96"
   ],
   [
    "Meshes",
    "12 boxes → merged to 1"
   ],
   [
    "Topology",
    "All quads (box primitives)"
   ],
   [
    "Real-world size",
    "200 × 90 × 85 cm (W × D × H)"
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
    "3 · tileable PBR"
   ],
   [
    "Texture set",
    "Shared 1024² tileable library"
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
   "summary": "",
   "list": [
    {
     "name": "Cushion Fabric",
     "color": "#417592",
     "zone": "0.3 m tile",
     "desc": "Lighter woven fabric for the cushions."
    },
    {
     "name": "Teal-Blue Upholstery",
     "color": "#295670",
     "zone": "0.3 m tile",
     "desc": "Woven upholstery fabric with visible weave, very low specular."
    },
    {
     "name": "Dark Wood Legs",
     "color": "#4f2b14",
     "zone": "0.6 m tile",
     "desc": "Small dark-stained hardwood legs that ground the upholstery."
    }
   ]
  },
  "textures": {
   "resolution": "1024 × 1024 tileable",
   "format": "PNG · 8-bit (WebP in GLB)",
   "maps": [
    {
     "map": "Sofa_Cushion",
     "label": "Cushion Fabric",
     "use": "BaseColor · Roughness · Normal — repeats every 0.3 m",
     "file": "assets/models/household/materials/Sofa_Cushion_BaseColor.webp",
     "preview": "assets/models/household/materials/Sofa_Cushion_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Sofa_Fabric",
     "label": "Teal-Blue Upholstery",
     "use": "BaseColor · Roughness · Normal — repeats every 0.3 m",
     "file": "assets/models/household/materials/Sofa_Fabric_BaseColor.webp",
     "preview": "assets/models/household/materials/Sofa_Fabric_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Sofa_Legs_Wood",
     "label": "Dark Wood Legs",
     "use": "BaseColor · Roughness · Normal — repeats every 0.6 m",
     "file": "assets/models/household/materials/Sofa_Legs_Wood_BaseColor.webp",
     "preview": "assets/models/household/materials/Sofa_Legs_Wood_BaseColor.webp",
     "size": "1024² PNG ×3"
    }
   ]
  }
 },
 {
  "id": "hh-armchair",
  "title": "Armchair",
  "category": "Living room",
  "collection": "household",
  "status": "completed",
  "shortDescription": "A boxy lounge armchair that pairs with the sofa.",
  "longDescription": "A boxy lounge armchair that pairs with the sofa. It belongs to the living room of the 3BHK set and, like every asset in this project, it is built only from box primitives — 10 scaled boxes, 120 triangles in total. The low-poly blocking keeps it readable and cheap for real-time use, so the realism comes from the surfaces: Cream fabric, mustard fabric and walnut wood are tileable PBR materials with colour, roughness and normal maps, tuned to real-world colour tones. Because the UVs are box-mapped in real-world metres, wood grain, weaves and tiles keep the same scale on every face and across every asset in the house.",
  "software": [
   "Blender"
  ],
  "tags": [
   "Low poly",
   "Box modelling",
   "PBR",
   "Living room"
  ],
  "thumbnail": "assets/models/household/armchair/thumbnail.webp",
  "model": "assets/models/household/armchair/model.glb",
  "renders": [],
  "video": "",
  "gallery": [],
  "links": {},
  "order": 2,
  "specs": [
   [
    "Polygons",
    "60"
   ],
   [
    "Triangles",
    "120"
   ],
   [
    "Vertices",
    "80"
   ],
   [
    "Meshes",
    "10 boxes → merged to 1"
   ],
   [
    "Topology",
    "All quads (box primitives)"
   ],
   [
    "Real-world size",
    "80 × 85 × 85 cm (W × D × H)"
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
    "3 · tileable PBR"
   ],
   [
    "Texture set",
    "Shared 1024² tileable library"
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
   "summary": "",
   "list": [
    {
     "name": "Cream Fabric",
     "color": "#d7c8ab",
     "zone": "0.3 m tile",
     "desc": "Soft cream upholstery weave."
    },
    {
     "name": "Mustard Fabric",
     "color": "#bd8b22",
     "zone": "0.3 m tile",
     "desc": "Warm mustard upholstery weave."
    },
    {
     "name": "Walnut Wood",
     "color": "#492b17",
     "zone": "1 m tile",
     "desc": "Dark straight-grain walnut with satin varnish — rich, warm and premium."
    }
   ]
  },
  "textures": {
   "resolution": "1024 × 1024 tileable",
   "format": "PNG · 8-bit (WebP in GLB)",
   "maps": [
    {
     "map": "Fabric_Cream",
     "label": "Cream Fabric",
     "use": "BaseColor · Roughness · Normal — repeats every 0.3 m",
     "file": "assets/models/household/materials/Fabric_Cream_BaseColor.webp",
     "preview": "assets/models/household/materials/Fabric_Cream_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Fabric_Mustard",
     "label": "Mustard Fabric",
     "use": "BaseColor · Roughness · Normal — repeats every 0.3 m",
     "file": "assets/models/household/materials/Fabric_Mustard_BaseColor.webp",
     "preview": "assets/models/household/materials/Fabric_Mustard_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Walnut_Wood",
     "label": "Walnut Wood",
     "use": "BaseColor · Roughness · Normal — repeats every 1 m",
     "file": "assets/models/household/materials/Walnut_Wood_BaseColor.webp",
     "preview": "assets/models/household/materials/Walnut_Wood_BaseColor.webp",
     "size": "1024² PNG ×3"
    }
   ]
  }
 },
 {
  "id": "hh-pouf",
  "title": "Pouf",
  "category": "Living room",
  "collection": "household",
  "status": "completed",
  "shortDescription": "A small upholstered pouf used as an extra seat or footrest.",
  "longDescription": "A small upholstered pouf used as an extra seat or footrest. It belongs to the living room of the 3BHK set and, like every asset in this project, it is built only from box primitives — 6 scaled boxes, 72 triangles in total. The low-poly blocking keeps it readable and cheap for real-time use, so the realism comes from the surfaces: Brown leather and walnut wood are tileable PBR materials with colour, roughness and normal maps, tuned to real-world colour tones. Because the UVs are box-mapped in real-world metres, wood grain, weaves and tiles keep the same scale on every face and across every asset in the house.",
  "software": [
   "Blender"
  ],
  "tags": [
   "Low poly",
   "Box modelling",
   "PBR",
   "Living room"
  ],
  "thumbnail": "assets/models/household/pouf/thumbnail.webp",
  "model": "assets/models/household/pouf/model.glb",
  "renders": [],
  "video": "",
  "gallery": [],
  "links": {},
  "order": 3,
  "specs": [
   [
    "Polygons",
    "36"
   ],
   [
    "Triangles",
    "72"
   ],
   [
    "Vertices",
    "48"
   ],
   [
    "Meshes",
    "6 boxes → merged to 1"
   ],
   [
    "Topology",
    "All quads (box primitives)"
   ],
   [
    "Real-world size",
    "45 × 45 × 40 cm (W × D × H)"
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
    "2 · tileable PBR"
   ],
   [
    "Texture set",
    "Shared 1024² tileable library"
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
   "summary": "",
   "list": [
    {
     "name": "Brown Leather",
     "color": "#5f2f16",
     "zone": "0.3 m tile",
     "desc": "Grained tan-brown leather with pores and natural mottling."
    },
    {
     "name": "Walnut Wood",
     "color": "#492b17",
     "zone": "1 m tile",
     "desc": "Dark straight-grain walnut with satin varnish — rich, warm and premium."
    }
   ]
  },
  "textures": {
   "resolution": "1024 × 1024 tileable",
   "format": "PNG · 8-bit (WebP in GLB)",
   "maps": [
    {
     "map": "Leather_Brown",
     "label": "Brown Leather",
     "use": "BaseColor · Roughness · Normal — repeats every 0.3 m",
     "file": "assets/models/household/materials/Leather_Brown_BaseColor.webp",
     "preview": "assets/models/household/materials/Leather_Brown_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Walnut_Wood",
     "label": "Walnut Wood",
     "use": "BaseColor · Roughness · Normal — repeats every 1 m",
     "file": "assets/models/household/materials/Walnut_Wood_BaseColor.webp",
     "preview": "assets/models/household/materials/Walnut_Wood_BaseColor.webp",
     "size": "1024² PNG ×3"
    }
   ]
  }
 },
 {
  "id": "hh-coffee-table",
  "title": "Coffee Table",
  "category": "Living room",
  "collection": "household",
  "status": "completed",
  "shortDescription": "A low coffee table that sits between the sofa and TV.",
  "longDescription": "A low coffee table that sits between the sofa and TV. It belongs to the living room of the 3BHK set and, like every asset in this project, it is built only from box primitives — 6 scaled boxes, 72 triangles in total. The low-poly blocking keeps it readable and cheap for real-time use, so the realism comes from the surfaces: Black powder coat legs and teak tabletop are tileable PBR materials with colour, roughness and normal maps, tuned to real-world colour tones. Because the UVs are box-mapped in real-world metres, wood grain, weaves and tiles keep the same scale on every face and across every asset in the house.",
  "software": [
   "Blender"
  ],
  "tags": [
   "Low poly",
   "Box modelling",
   "PBR",
   "Living room"
  ],
  "thumbnail": "assets/models/household/coffee-table/thumbnail.webp",
  "model": "assets/models/household/coffee-table/model.glb",
  "renders": [],
  "video": "",
  "gallery": [],
  "links": {},
  "order": 4,
  "specs": [
   [
    "Polygons",
    "36"
   ],
   [
    "Triangles",
    "72"
   ],
   [
    "Vertices",
    "48"
   ],
   [
    "Meshes",
    "6 boxes → merged to 1"
   ],
   [
    "Topology",
    "All quads (box primitives)"
   ],
   [
    "Real-world size",
    "110 × 60 × 45 cm (W × D × H)"
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
    "2 · tileable PBR"
   ],
   [
    "Texture set",
    "Shared 1024² tileable library"
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
   "summary": "",
   "list": [
    {
     "name": "Black Powder Coat Legs",
     "color": "#0c0c0e",
     "zone": "0.5 m tile",
     "desc": "Matte powder-coated steel legs."
    },
    {
     "name": "Teak Tabletop",
     "color": "#84532c",
     "zone": "1.2 m tile",
     "desc": "Warm teak-brown top with a lower roughness, like a sealed dining surface."
    }
   ]
  },
  "textures": {
   "resolution": "1024 × 1024 tileable",
   "format": "PNG · 8-bit (WebP in GLB)",
   "maps": [
    {
     "map": "Table_Legs_Black",
     "label": "Black Powder Coat Legs",
     "use": "BaseColor · Roughness · Normal — repeats every 0.5 m",
     "file": "assets/models/household/materials/Table_Legs_Black_BaseColor.webp",
     "preview": "assets/models/household/materials/Table_Legs_Black_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Table_Wood_Top",
     "label": "Teak Tabletop",
     "use": "BaseColor · Roughness · Normal — repeats every 1.2 m",
     "file": "assets/models/household/materials/Table_Wood_Top_BaseColor.webp",
     "preview": "assets/models/household/materials/Table_Wood_Top_BaseColor.webp",
     "size": "1024² PNG ×3"
    }
   ]
  }
 },
 {
  "id": "hh-side-table",
  "title": "Side Table",
  "category": "Living room",
  "collection": "household",
  "status": "completed",
  "shortDescription": "A compact side table beside the armchair.",
  "longDescription": "A compact side table beside the armchair. It belongs to the living room of the 3BHK set and, like every asset in this project, it is built only from box primitives — 6 scaled boxes, 72 triangles in total. The low-poly blocking keeps it readable and cheap for real-time use, so the realism comes from the surfaces: White marble, dark metal and oak wood are tileable PBR materials with colour, roughness and normal maps, tuned to real-world colour tones. Because the UVs are box-mapped in real-world metres, wood grain, weaves and tiles keep the same scale on every face and across every asset in the house.",
  "software": [
   "Blender"
  ],
  "tags": [
   "Low poly",
   "Box modelling",
   "PBR",
   "Living room"
  ],
  "thumbnail": "assets/models/household/side-table/thumbnail.webp",
  "model": "assets/models/household/side-table/model.glb",
  "renders": [],
  "video": "",
  "gallery": [],
  "links": {},
  "order": 5,
  "specs": [
   [
    "Polygons",
    "36"
   ],
   [
    "Triangles",
    "72"
   ],
   [
    "Vertices",
    "48"
   ],
   [
    "Meshes",
    "6 boxes → merged to 1"
   ],
   [
    "Topology",
    "All quads (box primitives)"
   ],
   [
    "Real-world size",
    "45 × 45 × 50 cm (W × D × H)"
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
    "3 · tileable PBR"
   ],
   [
    "Texture set",
    "Shared 1024² tileable library"
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
   "summary": "",
   "list": [
    {
     "name": "White Marble",
     "color": "#dadad8",
     "zone": "1.2 m tile",
     "desc": "Polished white marble with soft grey veins."
    },
    {
     "name": "Dark Metal",
     "color": "#232325",
     "zone": "0.5 m tile",
     "desc": "Brushed dark steel for handles, hinges and hardware."
    },
    {
     "name": "Oak Wood",
     "color": "#aa8253",
     "zone": "1 m tile",
     "desc": "Light honey oak with fine open grain; non-metallic, soft satin sheen."
    }
   ]
  },
  "textures": {
   "resolution": "1024 × 1024 tileable",
   "format": "PNG · 8-bit (WebP in GLB)",
   "maps": [
    {
     "map": "Marble_White",
     "label": "White Marble",
     "use": "BaseColor · Roughness · Normal — repeats every 1.2 m",
     "file": "assets/models/household/materials/Marble_White_BaseColor.webp",
     "preview": "assets/models/household/materials/Marble_White_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Metal_Dark",
     "label": "Dark Metal",
     "use": "BaseColor · Roughness · Normal — repeats every 0.5 m",
     "file": "assets/models/household/materials/Metal_Dark_BaseColor.webp",
     "preview": "assets/models/household/materials/Metal_Dark_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Oak_Wood",
     "label": "Oak Wood",
     "use": "BaseColor · Roughness · Normal — repeats every 1 m",
     "file": "assets/models/household/materials/Oak_Wood_BaseColor.webp",
     "preview": "assets/models/household/materials/Oak_Wood_BaseColor.webp",
     "size": "1024² PNG ×3"
    }
   ]
  }
 },
 {
  "id": "hh-tv-console",
  "title": "TV Console",
  "category": "Living room",
  "collection": "household",
  "status": "completed",
  "shortDescription": "A TV console with storage doors and a flat-screen TV.",
  "longDescription": "A TV console with storage doors and a flat-screen TV. It belongs to the living room of the 3BHK set and, like every asset in this project, it is built only from box primitives — 15 scaled boxes, 180 triangles in total. The low-poly blocking keeps it readable and cheap for real-time use, so the realism comes from the surfaces: Dark metal, oak wood, black plastic and screen glass are tileable PBR materials with colour, roughness and normal maps, tuned to real-world colour tones. Because the UVs are box-mapped in real-world metres, wood grain, weaves and tiles keep the same scale on every face and across every asset in the house.",
  "software": [
   "Blender"
  ],
  "tags": [
   "Low poly",
   "Box modelling",
   "PBR",
   "Living room"
  ],
  "thumbnail": "assets/models/household/tv-console/thumbnail.webp",
  "model": "assets/models/household/tv-console/model.glb",
  "renders": [],
  "video": "",
  "gallery": [],
  "links": {},
  "order": 6,
  "specs": [
   [
    "Polygons",
    "90"
   ],
   [
    "Triangles",
    "180"
   ],
   [
    "Vertices",
    "120"
   ],
   [
    "Meshes",
    "15 boxes → merged to 1"
   ],
   [
    "Topology",
    "All quads (box primitives)"
   ],
   [
    "Real-world size",
    "150 × 44 × 125 cm (W × D × H)"
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
    "5 · tileable PBR"
   ],
   [
    "Texture set",
    "Shared 1024² tileable library"
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
   "summary": "",
   "list": [
    {
     "name": "Dark Metal",
     "color": "#232325",
     "zone": "0.5 m tile",
     "desc": "Brushed dark steel for handles, hinges and hardware."
    },
    {
     "name": "Oak Wood",
     "color": "#aa8253",
     "zone": "1 m tile",
     "desc": "Light honey oak with fine open grain; non-metallic, soft satin sheen."
    },
    {
     "name": "Black Plastic",
     "color": "#0a0a0b",
     "zone": "0.5 m tile",
     "desc": "Satin black ABS for trims, bezels and small parts."
    },
    {
     "name": "Screen Glass",
     "color": "#050608",
     "zone": "1 m tile",
     "desc": "Near-black glossy screen with faint smudges."
    },
    {
     "name": "Walnut Wood",
     "color": "#492b17",
     "zone": "1 m tile",
     "desc": "Dark straight-grain walnut with satin varnish — rich, warm and premium."
    }
   ]
  },
  "textures": {
   "resolution": "1024 × 1024 tileable",
   "format": "PNG · 8-bit (WebP in GLB)",
   "maps": [
    {
     "map": "Metal_Dark",
     "label": "Dark Metal",
     "use": "BaseColor · Roughness · Normal — repeats every 0.5 m",
     "file": "assets/models/household/materials/Metal_Dark_BaseColor.webp",
     "preview": "assets/models/household/materials/Metal_Dark_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Oak_Wood",
     "label": "Oak Wood",
     "use": "BaseColor · Roughness · Normal — repeats every 1 m",
     "file": "assets/models/household/materials/Oak_Wood_BaseColor.webp",
     "preview": "assets/models/household/materials/Oak_Wood_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Plastic_Black",
     "label": "Black Plastic",
     "use": "BaseColor · Roughness · Normal — repeats every 0.5 m",
     "file": "assets/models/household/materials/Plastic_Black_BaseColor.webp",
     "preview": "assets/models/household/materials/Plastic_Black_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "TV_Screen",
     "label": "Screen Glass",
     "use": "BaseColor · Roughness · Normal — repeats every 1 m",
     "file": "assets/models/household/materials/TV_Screen_BaseColor.webp",
     "preview": "assets/models/household/materials/TV_Screen_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Walnut_Wood",
     "label": "Walnut Wood",
     "use": "BaseColor · Roughness · Normal — repeats every 1 m",
     "file": "assets/models/household/materials/Walnut_Wood_BaseColor.webp",
     "preview": "assets/models/household/materials/Walnut_Wood_BaseColor.webp",
     "size": "1024² PNG ×3"
    }
   ]
  }
 },
 {
  "id": "hh-rug",
  "title": "Rug",
  "category": "Living room",
  "collection": "household",
  "status": "completed",
  "shortDescription": "A 2 × 1.4 m area rug that zones the seating area.",
  "longDescription": "A 2 × 1.4 m area rug that zones the seating area. It belongs to the living room of the 3BHK set and, like every asset in this project, it is built only from box primitives — 2 scaled boxes, 24 triangles in total. The low-poly blocking keeps it readable and cheap for real-time use, so the realism comes from the surfaces: Rug border and rug weave are tileable PBR materials with colour, roughness and normal maps, tuned to real-world colour tones. Because the UVs are box-mapped in real-world metres, wood grain, weaves and tiles keep the same scale on every face and across every asset in the house.",
  "software": [
   "Blender"
  ],
  "tags": [
   "Low poly",
   "Box modelling",
   "PBR",
   "Living room"
  ],
  "thumbnail": "assets/models/household/rug/thumbnail.webp",
  "model": "assets/models/household/rug/model.glb",
  "renders": [],
  "video": "",
  "gallery": [],
  "links": {},
  "order": 7,
  "specs": [
   [
    "Polygons",
    "12"
   ],
   [
    "Triangles",
    "24"
   ],
   [
    "Vertices",
    "16"
   ],
   [
    "Meshes",
    "2 boxes → merged to 1"
   ],
   [
    "Topology",
    "All quads (box primitives)"
   ],
   [
    "Real-world size",
    "200 × 140 × 1.6 cm (W × D × H)"
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
    "2 · tileable PBR"
   ],
   [
    "Texture set",
    "Shared 1024² tileable library"
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
   "summary": "",
   "list": [
    {
     "name": "Rug Border",
     "color": "#3f4659",
     "zone": "0.7 m tile",
     "desc": "Woven border band."
    },
    {
     "name": "Rug Weave",
     "color": "#b37854",
     "zone": "0.7 m tile",
     "desc": "Coarse woven rug centre with its pattern kept and a fibre weave added."
    }
   ]
  },
  "textures": {
   "resolution": "1024 × 1024 tileable",
   "format": "PNG · 8-bit (WebP in GLB)",
   "maps": [
    {
     "map": "Rug_Border",
     "label": "Rug Border",
     "use": "BaseColor · Roughness · Normal — repeats every 0.7 m",
     "file": "assets/models/household/materials/Rug_Border_BaseColor.webp",
     "preview": "assets/models/household/materials/Rug_Border_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Rug_Main",
     "label": "Rug Weave",
     "use": "BaseColor · Roughness · Normal — repeats every 0.7 m",
     "file": "assets/models/household/materials/Rug_Main_BaseColor.webp",
     "preview": "assets/models/household/materials/Rug_Main_BaseColor.webp",
     "size": "1024² PNG ×3"
    }
   ]
  }
 },
 {
  "id": "hh-curtains",
  "title": "Curtains",
  "category": "All rooms",
  "collection": "household",
  "status": "completed",
  "shortDescription": "Floor-length window curtains with a steel rod.",
  "longDescription": "Floor-length window curtains with a steel rod. It belongs to the all rooms of the 3BHK set and, like every asset in this project, it is built only from box primitives — 11 scaled boxes, 132 triangles in total. The low-poly blocking keeps it readable and cheap for real-time use, so the realism comes from the surfaces: Linen curtain and dark metal are tileable PBR materials with colour, roughness and normal maps, tuned to real-world colour tones. Because the UVs are box-mapped in real-world metres, wood grain, weaves and tiles keep the same scale on every face and across every asset in the house.",
  "software": [
   "Blender"
  ],
  "tags": [
   "Low poly",
   "Box modelling",
   "PBR",
   "All rooms"
  ],
  "thumbnail": "assets/models/household/curtains/thumbnail.webp",
  "model": "assets/models/household/curtains/model.glb",
  "renders": [],
  "video": "",
  "gallery": [],
  "links": {},
  "order": 8,
  "specs": [
   [
    "Polygons",
    "66"
   ],
   [
    "Triangles",
    "132"
   ],
   [
    "Vertices",
    "88"
   ],
   [
    "Meshes",
    "11 boxes → merged to 1"
   ],
   [
    "Topology",
    "All quads (box primitives)"
   ],
   [
    "Real-world size",
    "220 × 10.5 × 234 cm (W × D × H)"
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
    "2 · tileable PBR"
   ],
   [
    "Texture set",
    "Shared 1024² tileable library"
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
   "summary": "",
   "list": [
    {
     "name": "Linen Curtain",
     "color": "#c5b8a0",
     "zone": "0.3 m tile",
     "desc": "Light linen weave that lets the room feel airy."
    },
    {
     "name": "Dark Metal",
     "color": "#232325",
     "zone": "0.5 m tile",
     "desc": "Brushed dark steel for handles, hinges and hardware."
    }
   ]
  },
  "textures": {
   "resolution": "1024 × 1024 tileable",
   "format": "PNG · 8-bit (WebP in GLB)",
   "maps": [
    {
     "map": "Fabric_Curtain",
     "label": "Linen Curtain",
     "use": "BaseColor · Roughness · Normal — repeats every 0.3 m",
     "file": "assets/models/household/materials/Fabric_Curtain_BaseColor.webp",
     "preview": "assets/models/household/materials/Fabric_Curtain_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Metal_Dark",
     "label": "Dark Metal",
     "use": "BaseColor · Roughness · Normal — repeats every 0.5 m",
     "file": "assets/models/household/materials/Metal_Dark_BaseColor.webp",
     "preview": "assets/models/household/materials/Metal_Dark_BaseColor.webp",
     "size": "1024² PNG ×3"
    }
   ]
  }
 },
 {
  "id": "hh-bookshelf",
  "title": "Bookshelf",
  "category": "Living room",
  "collection": "household",
  "status": "completed",
  "shortDescription": "A five-tier bookshelf filled with cloth-bound books.",
  "longDescription": "A five-tier bookshelf filled with cloth-bound books. It belongs to the living room of the 3BHK set and, like every asset in this project, it is built only from box primitives — 29 scaled boxes, 348 triangles in total. The low-poly blocking keeps it readable and cheap for real-time use, so the realism comes from the surfaces: Book cloth (red), book cloth (blue), book cloth (yellow) and book cloth (green) are tileable PBR materials with colour, roughness and normal maps, tuned to real-world colour tones. Because the UVs are box-mapped in real-world metres, wood grain, weaves and tiles keep the same scale on every face and across every asset in the house.",
  "software": [
   "Blender"
  ],
  "tags": [
   "Low poly",
   "Box modelling",
   "PBR",
   "Living room"
  ],
  "thumbnail": "assets/models/household/bookshelf/thumbnail.webp",
  "model": "assets/models/household/bookshelf/model.glb",
  "renders": [],
  "video": "",
  "gallery": [],
  "links": {},
  "order": 9,
  "specs": [
   [
    "Polygons",
    "174"
   ],
   [
    "Triangles",
    "348"
   ],
   [
    "Vertices",
    "232"
   ],
   [
    "Meshes",
    "29 boxes → merged to 1"
   ],
   [
    "Topology",
    "All quads (box primitives)"
   ],
   [
    "Real-world size",
    "80 × 30 × 180 cm (W × D × H)"
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
    "8 · tileable PBR"
   ],
   [
    "Texture set",
    "Shared 1024² tileable library"
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
   "summary": "",
   "list": [
    {
     "name": "Book Cloth (Red)",
     "color": "#9f241e",
     "zone": "0.2 m tile",
     "desc": "Cloth-bound book covers."
    },
    {
     "name": "Book Cloth (Blue)",
     "color": "#214d86",
     "zone": "0.2 m tile",
     "desc": "Cloth-bound book covers."
    },
    {
     "name": "Book Cloth (Yellow)",
     "color": "#ceaa33",
     "zone": "0.2 m tile",
     "desc": "Cloth-bound book covers."
    },
    {
     "name": "Book Cloth (Green)",
     "color": "#296c43",
     "zone": "0.2 m tile",
     "desc": "Cloth-bound book covers."
    },
    {
     "name": "Book Cloth (Cream)",
     "color": "#e3ddd0",
     "zone": "0.2 m tile",
     "desc": "Cloth-bound book covers."
    },
    {
     "name": "Book Cloth (Purple)",
     "color": "#813b81",
     "zone": "0.2 m tile",
     "desc": "Cloth-bound book covers."
    },
    {
     "name": "Back Panel",
     "color": "#55371d",
     "zone": "1 m tile",
     "desc": "Matte dark hardboard panel that adds depth behind the shelves."
    },
    {
     "name": "Shelf Oak",
     "color": "#9e7448",
     "zone": "1 m tile",
     "desc": "Mid-tone oak veneer typical of flat-pack shelving."
    }
   ]
  },
  "textures": {
   "resolution": "1024 × 1024 tileable",
   "format": "PNG · 8-bit (WebP in GLB)",
   "maps": [
    {
     "map": "Book_Color_1",
     "label": "Book Cloth (Red)",
     "use": "BaseColor · Roughness · Normal — repeats every 0.2 m",
     "file": "assets/models/household/materials/Book_Color_1_BaseColor.webp",
     "preview": "assets/models/household/materials/Book_Color_1_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Book_Color_2",
     "label": "Book Cloth (Blue)",
     "use": "BaseColor · Roughness · Normal — repeats every 0.2 m",
     "file": "assets/models/household/materials/Book_Color_2_BaseColor.webp",
     "preview": "assets/models/household/materials/Book_Color_2_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Book_Color_3",
     "label": "Book Cloth (Yellow)",
     "use": "BaseColor · Roughness · Normal — repeats every 0.2 m",
     "file": "assets/models/household/materials/Book_Color_3_BaseColor.webp",
     "preview": "assets/models/household/materials/Book_Color_3_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Book_Color_4",
     "label": "Book Cloth (Green)",
     "use": "BaseColor · Roughness · Normal — repeats every 0.2 m",
     "file": "assets/models/household/materials/Book_Color_4_BaseColor.webp",
     "preview": "assets/models/household/materials/Book_Color_4_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Book_Color_5",
     "label": "Book Cloth (Cream)",
     "use": "BaseColor · Roughness · Normal — repeats every 0.2 m",
     "file": "assets/models/household/materials/Book_Color_5_BaseColor.webp",
     "preview": "assets/models/household/materials/Book_Color_5_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Book_Color_6",
     "label": "Book Cloth (Purple)",
     "use": "BaseColor · Roughness · Normal — repeats every 0.2 m",
     "file": "assets/models/household/materials/Book_Color_6_BaseColor.webp",
     "preview": "assets/models/household/materials/Book_Color_6_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Shelf_Back_Panel",
     "label": "Back Panel",
     "use": "BaseColor · Roughness · Normal — repeats every 1 m",
     "file": "assets/models/household/materials/Shelf_Back_Panel_BaseColor.webp",
     "preview": "assets/models/household/materials/Shelf_Back_Panel_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Shelf_Wood",
     "label": "Shelf Oak",
     "use": "BaseColor · Roughness · Normal — repeats every 1 m",
     "file": "assets/models/household/materials/Shelf_Wood_BaseColor.webp",
     "preview": "assets/models/household/materials/Shelf_Wood_BaseColor.webp",
     "size": "1024² PNG ×3"
    }
   ]
  }
 },
 {
  "id": "hh-floor-lamp",
  "title": "Floor Lamp",
  "category": "Living room",
  "collection": "household",
  "status": "completed",
  "shortDescription": "A floor lamp with a glowing linen shade for warm accent light.",
  "longDescription": "A floor lamp with a glowing linen shade for warm accent light. It belongs to the living room of the 3BHK set and, like every asset in this project, it is built only from box primitives — 4 scaled boxes, 48 triangles in total. The low-poly blocking keeps it readable and cheap for real-time use, so the realism comes from the surfaces: Black powder coat and warm lamp shade are tileable PBR materials with colour, roughness and normal maps, tuned to real-world colour tones. Because the UVs are box-mapped in real-world metres, wood grain, weaves and tiles keep the same scale on every face and across every asset in the house.",
  "software": [
   "Blender"
  ],
  "tags": [
   "Low poly",
   "Box modelling",
   "PBR",
   "Living room"
  ],
  "thumbnail": "assets/models/household/floor-lamp/thumbnail.webp",
  "model": "assets/models/household/floor-lamp/model.glb",
  "renders": [],
  "video": "",
  "gallery": [],
  "links": {},
  "order": 10,
  "specs": [
   [
    "Polygons",
    "24"
   ],
   [
    "Triangles",
    "48"
   ],
   [
    "Vertices",
    "32"
   ],
   [
    "Meshes",
    "4 boxes → merged to 1"
   ],
   [
    "Topology",
    "All quads (box primitives)"
   ],
   [
    "Real-world size",
    "36 × 36 × 162 cm (W × D × H)"
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
    "2 · tileable PBR"
   ],
   [
    "Texture set",
    "Shared 1024² tileable library"
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
   "summary": "",
   "list": [
    {
     "name": "Black Powder Coat",
     "color": "#0c0c0e",
     "zone": "0.5 m tile",
     "desc": "Matte black powder-coated steel for lamp stems and bases."
    },
    {
     "name": "Warm Lamp Shade",
     "color": "#efd39a",
     "zone": "0.3 m tile",
     "desc": "Linen shade with a warm emissive glow."
    }
   ]
  },
  "textures": {
   "resolution": "1024 × 1024 tileable",
   "format": "PNG · 8-bit (WebP in GLB)",
   "maps": [
    {
     "map": "Lamp_Metal_Black",
     "label": "Black Powder Coat",
     "use": "BaseColor · Roughness · Normal — repeats every 0.5 m",
     "file": "assets/models/household/materials/Lamp_Metal_Black_BaseColor.webp",
     "preview": "assets/models/household/materials/Lamp_Metal_Black_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Lamp_Shade_Warm",
     "label": "Warm Lamp Shade",
     "use": "BaseColor · Roughness · Normal — repeats every 0.3 m",
     "file": "assets/models/household/materials/Lamp_Shade_Warm_BaseColor.webp",
     "preview": "assets/models/household/materials/Lamp_Shade_Warm_BaseColor.webp",
     "size": "1024² PNG ×3"
    }
   ]
  }
 },
 {
  "id": "hh-table-lamp",
  "title": "Table Lamp",
  "category": "Bedroom",
  "collection": "household",
  "status": "completed",
  "shortDescription": "A bedside table lamp with a glowing shade.",
  "longDescription": "A bedside table lamp with a glowing shade. It belongs to the bedroom of the 3BHK set and, like every asset in this project, it is built only from box primitives — 3 scaled boxes, 36 triangles in total. The low-poly blocking keeps it readable and cheap for real-time use, so the realism comes from the surfaces: Glazed ceramic and warm lamp shade are tileable PBR materials with colour, roughness and normal maps, tuned to real-world colour tones. Because the UVs are box-mapped in real-world metres, wood grain, weaves and tiles keep the same scale on every face and across every asset in the house.",
  "software": [
   "Blender"
  ],
  "tags": [
   "Low poly",
   "Box modelling",
   "PBR",
   "Bedroom"
  ],
  "thumbnail": "assets/models/household/table-lamp/thumbnail.webp",
  "model": "assets/models/household/table-lamp/model.glb",
  "renders": [],
  "video": "",
  "gallery": [],
  "links": {},
  "order": 11,
  "specs": [
   [
    "Polygons",
    "18"
   ],
   [
    "Triangles",
    "36"
   ],
   [
    "Vertices",
    "24"
   ],
   [
    "Meshes",
    "3 boxes → merged to 1"
   ],
   [
    "Topology",
    "All quads (box primitives)"
   ],
   [
    "Real-world size",
    "24 × 24 × 35 cm (W × D × H)"
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
    "2 · tileable PBR"
   ],
   [
    "Texture set",
    "Shared 1024² tileable library"
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
   "summary": "",
   "list": [
    {
     "name": "Glazed Ceramic",
     "color": "#f0f0ed",
     "zone": "1 m tile",
     "desc": "Very glossy white sanitary ceramic."
    },
    {
     "name": "Warm Lamp Shade",
     "color": "#efd39a",
     "zone": "0.3 m tile",
     "desc": "Linen shade with a warm emissive glow."
    }
   ]
  },
  "textures": {
   "resolution": "1024 × 1024 tileable",
   "format": "PNG · 8-bit (WebP in GLB)",
   "maps": [
    {
     "map": "Ceramic_White",
     "label": "Glazed Ceramic",
     "use": "BaseColor · Roughness · Normal — repeats every 1 m",
     "file": "assets/models/household/materials/Ceramic_White_BaseColor.webp",
     "preview": "assets/models/household/materials/Ceramic_White_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Lamp_Shade_Warm",
     "label": "Warm Lamp Shade",
     "use": "BaseColor · Roughness · Normal — repeats every 0.3 m",
     "file": "assets/models/household/materials/Lamp_Shade_Warm_BaseColor.webp",
     "preview": "assets/models/household/materials/Lamp_Shade_Warm_BaseColor.webp",
     "size": "1024² PNG ×3"
    }
   ]
  }
 },
 {
  "id": "hh-plant-pot",
  "title": "Plant Pot",
  "category": "Living room",
  "collection": "household",
  "status": "completed",
  "shortDescription": "A potted indoor plant that adds life and colour.",
  "longDescription": "A potted indoor plant that adds life and colour. It belongs to the living room of the 3BHK set and, like every asset in this project, it is built only from box primitives — 12 scaled boxes, 144 triangles in total. The low-poly blocking keeps it readable and cheap for real-time use, so the realism comes from the surfaces: Glazed ceramic, leaf and potting soil are tileable PBR materials with colour, roughness and normal maps, tuned to real-world colour tones. Because the UVs are box-mapped in real-world metres, wood grain, weaves and tiles keep the same scale on every face and across every asset in the house.",
  "software": [
   "Blender"
  ],
  "tags": [
   "Low poly",
   "Box modelling",
   "PBR",
   "Living room"
  ],
  "thumbnail": "assets/models/household/plant-pot/thumbnail.webp",
  "model": "assets/models/household/plant-pot/model.glb",
  "renders": [],
  "video": "",
  "gallery": [],
  "links": {},
  "order": 12,
  "specs": [
   [
    "Polygons",
    "72"
   ],
   [
    "Triangles",
    "144"
   ],
   [
    "Vertices",
    "96"
   ],
   [
    "Meshes",
    "12 boxes → merged to 1"
   ],
   [
    "Topology",
    "All quads (box primitives)"
   ],
   [
    "Real-world size",
    "29 × 50.4 × 83.3 cm (W × D × H)"
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
    "3 · tileable PBR"
   ],
   [
    "Texture set",
    "Shared 1024² tileable library"
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
   "summary": "",
   "list": [
    {
     "name": "Glazed Ceramic",
     "color": "#f0f0ed",
     "zone": "1 m tile",
     "desc": "Very glossy white sanitary ceramic."
    },
    {
     "name": "Leaf",
     "color": "#346d29",
     "zone": "0.3 m tile",
     "desc": "Green leaves with a central vein and slight sheen."
    },
    {
     "name": "Potting Soil",
     "color": "#352215",
     "zone": "0.3 m tile",
     "desc": "Dark, fully rough soil with small grit."
    }
   ]
  },
  "textures": {
   "resolution": "1024 × 1024 tileable",
   "format": "PNG · 8-bit (WebP in GLB)",
   "maps": [
    {
     "map": "Ceramic_White",
     "label": "Glazed Ceramic",
     "use": "BaseColor · Roughness · Normal — repeats every 1 m",
     "file": "assets/models/household/materials/Ceramic_White_BaseColor.webp",
     "preview": "assets/models/household/materials/Ceramic_White_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Leaf_Green",
     "label": "Leaf",
     "use": "BaseColor · Roughness · Normal — repeats every 0.3 m",
     "file": "assets/models/household/materials/Leaf_Green_BaseColor.webp",
     "preview": "assets/models/household/materials/Leaf_Green_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Soil_Dark",
     "label": "Potting Soil",
     "use": "BaseColor · Roughness · Normal — repeats every 0.3 m",
     "file": "assets/models/household/materials/Soil_Dark_BaseColor.webp",
     "preview": "assets/models/household/materials/Soil_Dark_BaseColor.webp",
     "size": "1024² PNG ×3"
    }
   ]
  }
 },
 {
  "id": "hh-bed",
  "title": "Bed",
  "category": "Bedroom",
  "collection": "household",
  "status": "completed",
  "shortDescription": "A queen-size bed with linen, pillows and a throw blanket.",
  "longDescription": "A queen-size bed with linen, pillows and a throw blanket. It belongs to the bedroom of the 3BHK set and, like every asset in this project, it is built only from box primitives — 12 scaled boxes, 144 triangles in total. The low-poly blocking keeps it readable and cheap for real-time use, so the realism comes from the surfaces: Bed linen, teal blanket and walnut wood are tileable PBR materials with colour, roughness and normal maps, tuned to real-world colour tones. Because the UVs are box-mapped in real-world metres, wood grain, weaves and tiles keep the same scale on every face and across every asset in the house.",
  "software": [
   "Blender"
  ],
  "tags": [
   "Low poly",
   "Box modelling",
   "PBR",
   "Bedroom"
  ],
  "thumbnail": "assets/models/household/bed/thumbnail.webp",
  "model": "assets/models/household/bed/model.glb",
  "renders": [],
  "video": "",
  "gallery": [],
  "links": {},
  "order": 13,
  "specs": [
   [
    "Polygons",
    "72"
   ],
   [
    "Triangles",
    "144"
   ],
   [
    "Vertices",
    "96"
   ],
   [
    "Meshes",
    "12 boxes → merged to 1"
   ],
   [
    "Topology",
    "All quads (box primitives)"
   ],
   [
    "Real-world size",
    "164 × 211 × 101 cm (W × D × H)"
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
    "3 · tileable PBR"
   ],
   [
    "Texture set",
    "Shared 1024² tileable library"
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
   "summary": "",
   "list": [
    {
     "name": "Bed Linen",
     "color": "#e6e6e8",
     "zone": "0.3 m tile",
     "desc": "Fine white cotton twill sheet."
    },
    {
     "name": "Teal Blanket",
     "color": "#256a67",
     "zone": "0.3 m tile",
     "desc": "Chunky knit-style throw blanket."
    },
    {
     "name": "Walnut Wood",
     "color": "#492b17",
     "zone": "1 m tile",
     "desc": "Dark straight-grain walnut with satin varnish — rich, warm and premium."
    }
   ]
  },
  "textures": {
   "resolution": "1024 × 1024 tileable",
   "format": "PNG · 8-bit (WebP in GLB)",
   "maps": [
    {
     "map": "Fabric_Bed_Linen",
     "label": "Bed Linen",
     "use": "BaseColor · Roughness · Normal — repeats every 0.3 m",
     "file": "assets/models/household/materials/Fabric_Bed_Linen_BaseColor.webp",
     "preview": "assets/models/household/materials/Fabric_Bed_Linen_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Fabric_Blanket_Teal",
     "label": "Teal Blanket",
     "use": "BaseColor · Roughness · Normal — repeats every 0.3 m",
     "file": "assets/models/household/materials/Fabric_Blanket_Teal_BaseColor.webp",
     "preview": "assets/models/household/materials/Fabric_Blanket_Teal_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Walnut_Wood",
     "label": "Walnut Wood",
     "use": "BaseColor · Roughness · Normal — repeats every 1 m",
     "file": "assets/models/household/materials/Walnut_Wood_BaseColor.webp",
     "preview": "assets/models/household/materials/Walnut_Wood_BaseColor.webp",
     "size": "1024² PNG ×3"
    }
   ]
  }
 },
 {
  "id": "hh-nightstand",
  "title": "Nightstand",
  "category": "Bedroom",
  "collection": "household",
  "status": "completed",
  "shortDescription": "A bedside nightstand with a drawer.",
  "longDescription": "A bedside nightstand with a drawer. It belongs to the bedroom of the 3BHK set and, like every asset in this project, it is built only from box primitives — 9 scaled boxes, 108 triangles in total. The low-poly blocking keeps it readable and cheap for real-time use, so the realism comes from the surfaces: Brushed steel, dark metal, oak wood and walnut wood are tileable PBR materials with colour, roughness and normal maps, tuned to real-world colour tones. Because the UVs are box-mapped in real-world metres, wood grain, weaves and tiles keep the same scale on every face and across every asset in the house.",
  "software": [
   "Blender"
  ],
  "tags": [
   "Low poly",
   "Box modelling",
   "PBR",
   "Bedroom"
  ],
  "thumbnail": "assets/models/household/nightstand/thumbnail.webp",
  "model": "assets/models/household/nightstand/model.glb",
  "renders": [],
  "video": "",
  "gallery": [],
  "links": {},
  "order": 14,
  "specs": [
   [
    "Polygons",
    "54"
   ],
   [
    "Triangles",
    "108"
   ],
   [
    "Vertices",
    "72"
   ],
   [
    "Meshes",
    "9 boxes → merged to 1"
   ],
   [
    "Topology",
    "All quads (box primitives)"
   ],
   [
    "Real-world size",
    "45 × 45 × 52 cm (W × D × H)"
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
    "4 · tileable PBR"
   ],
   [
    "Texture set",
    "Shared 1024² tileable library"
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
   "summary": "",
   "list": [
    {
     "name": "Brushed Steel",
     "color": "#b5b5ba",
     "zone": "0.5 m tile",
     "desc": "Fine brushed stainless steel with directional streaks."
    },
    {
     "name": "Dark Metal",
     "color": "#232325",
     "zone": "0.5 m tile",
     "desc": "Brushed dark steel for handles, hinges and hardware."
    },
    {
     "name": "Oak Wood",
     "color": "#aa8253",
     "zone": "1 m tile",
     "desc": "Light honey oak with fine open grain; non-metallic, soft satin sheen."
    },
    {
     "name": "Walnut Wood",
     "color": "#492b17",
     "zone": "1 m tile",
     "desc": "Dark straight-grain walnut with satin varnish — rich, warm and premium."
    }
   ]
  },
  "textures": {
   "resolution": "1024 × 1024 tileable",
   "format": "PNG · 8-bit (WebP in GLB)",
   "maps": [
    {
     "map": "Metal_Brushed_Steel",
     "label": "Brushed Steel",
     "use": "BaseColor · Roughness · Normal — repeats every 0.5 m",
     "file": "assets/models/household/materials/Metal_Brushed_Steel_BaseColor.webp",
     "preview": "assets/models/household/materials/Metal_Brushed_Steel_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Metal_Dark",
     "label": "Dark Metal",
     "use": "BaseColor · Roughness · Normal — repeats every 0.5 m",
     "file": "assets/models/household/materials/Metal_Dark_BaseColor.webp",
     "preview": "assets/models/household/materials/Metal_Dark_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Oak_Wood",
     "label": "Oak Wood",
     "use": "BaseColor · Roughness · Normal — repeats every 1 m",
     "file": "assets/models/household/materials/Oak_Wood_BaseColor.webp",
     "preview": "assets/models/household/materials/Oak_Wood_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Walnut_Wood",
     "label": "Walnut Wood",
     "use": "BaseColor · Roughness · Normal — repeats every 1 m",
     "file": "assets/models/household/materials/Walnut_Wood_BaseColor.webp",
     "preview": "assets/models/household/materials/Walnut_Wood_BaseColor.webp",
     "size": "1024² PNG ×3"
    }
   ]
  }
 },
 {
  "id": "hh-wardrobe",
  "title": "Wardrobe",
  "category": "Bedroom",
  "collection": "household",
  "status": "completed",
  "shortDescription": "A two-door 2 m wardrobe for clothes storage.",
  "longDescription": "A two-door 2 m wardrobe for clothes storage. It belongs to the bedroom of the 3BHK set and, like every asset in this project, it is built only from box primitives — 7 scaled boxes, 84 triangles in total. The low-poly blocking keeps it readable and cheap for real-time use, so the realism comes from the surfaces: White laminate, dark metal, oak wood and walnut wood are tileable PBR materials with colour, roughness and normal maps, tuned to real-world colour tones. Because the UVs are box-mapped in real-world metres, wood grain, weaves and tiles keep the same scale on every face and across every asset in the house.",
  "software": [
   "Blender"
  ],
  "tags": [
   "Low poly",
   "Box modelling",
   "PBR",
   "Bedroom"
  ],
  "thumbnail": "assets/models/household/wardrobe/thumbnail.webp",
  "model": "assets/models/household/wardrobe/model.glb",
  "renders": [],
  "video": "",
  "gallery": [],
  "links": {},
  "order": 15,
  "specs": [
   [
    "Polygons",
    "42"
   ],
   [
    "Triangles",
    "84"
   ],
   [
    "Vertices",
    "56"
   ],
   [
    "Meshes",
    "7 boxes → merged to 1"
   ],
   [
    "Topology",
    "All quads (box primitives)"
   ],
   [
    "Real-world size",
    "122 × 66 × 200 cm (W × D × H)"
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
    "4 · tileable PBR"
   ],
   [
    "Texture set",
    "Shared 1024² tileable library"
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
   "summary": "",
   "list": [
    {
     "name": "White Laminate",
     "color": "#e6e6e1",
     "zone": "1 m tile",
     "desc": "Clean white laminate board used on carcasses and appliances."
    },
    {
     "name": "Dark Metal",
     "color": "#232325",
     "zone": "0.5 m tile",
     "desc": "Brushed dark steel for handles, hinges and hardware."
    },
    {
     "name": "Oak Wood",
     "color": "#aa8253",
     "zone": "1 m tile",
     "desc": "Light honey oak with fine open grain; non-metallic, soft satin sheen."
    },
    {
     "name": "Walnut Wood",
     "color": "#492b17",
     "zone": "1 m tile",
     "desc": "Dark straight-grain walnut with satin varnish — rich, warm and premium."
    }
   ]
  },
  "textures": {
   "resolution": "1024 × 1024 tileable",
   "format": "PNG · 8-bit (WebP in GLB)",
   "maps": [
    {
     "map": "Laminate_White",
     "label": "White Laminate",
     "use": "BaseColor · Roughness · Normal — repeats every 1 m",
     "file": "assets/models/household/materials/Laminate_White_BaseColor.webp",
     "preview": "assets/models/household/materials/Laminate_White_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Metal_Dark",
     "label": "Dark Metal",
     "use": "BaseColor · Roughness · Normal — repeats every 0.5 m",
     "file": "assets/models/household/materials/Metal_Dark_BaseColor.webp",
     "preview": "assets/models/household/materials/Metal_Dark_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Oak_Wood",
     "label": "Oak Wood",
     "use": "BaseColor · Roughness · Normal — repeats every 1 m",
     "file": "assets/models/household/materials/Oak_Wood_BaseColor.webp",
     "preview": "assets/models/household/materials/Oak_Wood_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Walnut_Wood",
     "label": "Walnut Wood",
     "use": "BaseColor · Roughness · Normal — repeats every 1 m",
     "file": "assets/models/household/materials/Walnut_Wood_BaseColor.webp",
     "preview": "assets/models/household/materials/Walnut_Wood_BaseColor.webp",
     "size": "1024² PNG ×3"
    }
   ]
  }
 },
 {
  "id": "hh-desk",
  "title": "Study Desk",
  "category": "Bedroom / study",
  "collection": "household",
  "status": "completed",
  "shortDescription": "A study desk with a laptop for the work corner.",
  "longDescription": "A study desk with a laptop for the work corner. It belongs to the bedroom / study of the 3BHK set and, like every asset in this project, it is built only from box primitives — 12 scaled boxes, 144 triangles in total. The low-poly blocking keeps it readable and cheap for real-time use, so the realism comes from the surfaces: White laminate, brushed steel, dark metal and oak wood are tileable PBR materials with colour, roughness and normal maps, tuned to real-world colour tones. Because the UVs are box-mapped in real-world metres, wood grain, weaves and tiles keep the same scale on every face and across every asset in the house.",
  "software": [
   "Blender"
  ],
  "tags": [
   "Low poly",
   "Box modelling",
   "PBR",
   "Bedroom / study"
  ],
  "thumbnail": "assets/models/household/desk/thumbnail.webp",
  "model": "assets/models/household/desk/model.glb",
  "renders": [],
  "video": "",
  "gallery": [],
  "links": {},
  "order": 16,
  "specs": [
   [
    "Polygons",
    "72"
   ],
   [
    "Triangles",
    "144"
   ],
   [
    "Vertices",
    "96"
   ],
   [
    "Meshes",
    "12 boxes → merged to 1"
   ],
   [
    "Topology",
    "All quads (box primitives)"
   ],
   [
    "Real-world size",
    "120 × 60.2 × 95.6 cm (W × D × H)"
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
    "6 · tileable PBR"
   ],
   [
    "Texture set",
    "Shared 1024² tileable library"
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
   "summary": "",
   "list": [
    {
     "name": "White Laminate",
     "color": "#e6e6e1",
     "zone": "1 m tile",
     "desc": "Clean white laminate board used on carcasses and appliances."
    },
    {
     "name": "Laptop Screen",
     "color": "#6c9fd2",
     "zone": "Shader only",
     "desc": "Emissive display panel."
    },
    {
     "name": "Brushed Steel",
     "color": "#b5b5ba",
     "zone": "0.5 m tile",
     "desc": "Fine brushed stainless steel with directional streaks."
    },
    {
     "name": "Dark Metal",
     "color": "#232325",
     "zone": "0.5 m tile",
     "desc": "Brushed dark steel for handles, hinges and hardware."
    },
    {
     "name": "Oak Wood",
     "color": "#aa8253",
     "zone": "1 m tile",
     "desc": "Light honey oak with fine open grain; non-metallic, soft satin sheen."
    },
    {
     "name": "Black Plastic",
     "color": "#0a0a0b",
     "zone": "0.5 m tile",
     "desc": "Satin black ABS for trims, bezels and small parts."
    }
   ]
  },
  "textures": {
   "resolution": "1024 × 1024 tileable",
   "format": "PNG · 8-bit (WebP in GLB)",
   "maps": [
    {
     "map": "Laminate_White",
     "label": "White Laminate",
     "use": "BaseColor · Roughness · Normal — repeats every 1 m",
     "file": "assets/models/household/materials/Laminate_White_BaseColor.webp",
     "preview": "assets/models/household/materials/Laminate_White_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Metal_Brushed_Steel",
     "label": "Brushed Steel",
     "use": "BaseColor · Roughness · Normal — repeats every 0.5 m",
     "file": "assets/models/household/materials/Metal_Brushed_Steel_BaseColor.webp",
     "preview": "assets/models/household/materials/Metal_Brushed_Steel_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Metal_Dark",
     "label": "Dark Metal",
     "use": "BaseColor · Roughness · Normal — repeats every 0.5 m",
     "file": "assets/models/household/materials/Metal_Dark_BaseColor.webp",
     "preview": "assets/models/household/materials/Metal_Dark_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Oak_Wood",
     "label": "Oak Wood",
     "use": "BaseColor · Roughness · Normal — repeats every 1 m",
     "file": "assets/models/household/materials/Oak_Wood_BaseColor.webp",
     "preview": "assets/models/household/materials/Oak_Wood_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Plastic_Black",
     "label": "Black Plastic",
     "use": "BaseColor · Roughness · Normal — repeats every 0.5 m",
     "file": "assets/models/household/materials/Plastic_Black_BaseColor.webp",
     "preview": "assets/models/household/materials/Plastic_Black_BaseColor.webp",
     "size": "1024² PNG ×3"
    }
   ]
  }
 },
 {
  "id": "hh-office-chair",
  "title": "Office Chair",
  "category": "Bedroom / study",
  "collection": "household",
  "status": "completed",
  "shortDescription": "A swivel office chair with a star base.",
  "longDescription": "A swivel office chair with a star base. It belongs to the bedroom / study of the 3BHK set and, like every asset in this project, it is built only from box primitives — 12 scaled boxes, 144 triangles in total. The low-poly blocking keeps it readable and cheap for real-time use, so the realism comes from the surfaces: Grey fabric, dark metal and black plastic are tileable PBR materials with colour, roughness and normal maps, tuned to real-world colour tones. Because the UVs are box-mapped in real-world metres, wood grain, weaves and tiles keep the same scale on every face and across every asset in the house.",
  "software": [
   "Blender"
  ],
  "tags": [
   "Low poly",
   "Box modelling",
   "PBR",
   "Bedroom / study"
  ],
  "thumbnail": "assets/models/household/office-chair/thumbnail.webp",
  "model": "assets/models/household/office-chair/model.glb",
  "renders": [],
  "video": "",
  "gallery": [],
  "links": {},
  "order": 17,
  "specs": [
   [
    "Polygons",
    "72"
   ],
   [
    "Triangles",
    "144"
   ],
   [
    "Vertices",
    "96"
   ],
   [
    "Meshes",
    "12 boxes → merged to 1"
   ],
   [
    "Topology",
    "All quads (box primitives)"
   ],
   [
    "Real-world size",
    "62 × 62 × 104 cm (W × D × H)"
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
    "3 · tileable PBR"
   ],
   [
    "Texture set",
    "Shared 1024² tileable library"
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
   "summary": "",
   "list": [
    {
     "name": "Grey Fabric",
     "color": "#6d6d72",
     "zone": "0.3 m tile",
     "desc": "Neutral grey mesh-weave fabric."
    },
    {
     "name": "Dark Metal",
     "color": "#232325",
     "zone": "0.5 m tile",
     "desc": "Brushed dark steel for handles, hinges and hardware."
    },
    {
     "name": "Black Plastic",
     "color": "#0a0a0b",
     "zone": "0.5 m tile",
     "desc": "Satin black ABS for trims, bezels and small parts."
    }
   ]
  },
  "textures": {
   "resolution": "1024 × 1024 tileable",
   "format": "PNG · 8-bit (WebP in GLB)",
   "maps": [
    {
     "map": "Fabric_Grey",
     "label": "Grey Fabric",
     "use": "BaseColor · Roughness · Normal — repeats every 0.3 m",
     "file": "assets/models/household/materials/Fabric_Grey_BaseColor.webp",
     "preview": "assets/models/household/materials/Fabric_Grey_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Metal_Dark",
     "label": "Dark Metal",
     "use": "BaseColor · Roughness · Normal — repeats every 0.5 m",
     "file": "assets/models/household/materials/Metal_Dark_BaseColor.webp",
     "preview": "assets/models/household/materials/Metal_Dark_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Plastic_Black",
     "label": "Black Plastic",
     "use": "BaseColor · Roughness · Normal — repeats every 0.5 m",
     "file": "assets/models/household/materials/Plastic_Black_BaseColor.webp",
     "preview": "assets/models/household/materials/Plastic_Black_BaseColor.webp",
     "size": "1024² PNG ×3"
    }
   ]
  }
 },
 {
  "id": "hh-standing-mirror",
  "title": "Standing Mirror",
  "category": "Bedroom",
  "collection": "household",
  "status": "completed",
  "shortDescription": "A full-length standing mirror.",
  "longDescription": "A full-length standing mirror. It belongs to the bedroom of the 3BHK set and, like every asset in this project, it is built only from box primitives — 4 scaled boxes, 48 triangles in total. The low-poly blocking keeps it readable and cheap for real-time use, so the realism comes from the surfaces: Walnut wood is a tileable PBR material with colour, roughness and normal maps, tuned to real-world colour tones. Because the UVs are box-mapped in real-world metres, wood grain, weaves and tiles keep the same scale on every face and across every asset in the house.",
  "software": [
   "Blender"
  ],
  "tags": [
   "Low poly",
   "Box modelling",
   "PBR",
   "Bedroom"
  ],
  "thumbnail": "assets/models/household/standing-mirror/thumbnail.webp",
  "model": "assets/models/household/standing-mirror/model.glb",
  "renders": [],
  "video": "",
  "gallery": [],
  "links": {},
  "order": 18,
  "specs": [
   [
    "Polygons",
    "24"
   ],
   [
    "Triangles",
    "48"
   ],
   [
    "Vertices",
    "32"
   ],
   [
    "Meshes",
    "4 boxes → merged to 1"
   ],
   [
    "Topology",
    "All quads (box primitives)"
   ],
   [
    "Real-world size",
    "55 × 30 × 170 cm (W × D × H)"
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
    "2 · tileable PBR"
   ],
   [
    "Texture set",
    "Shared 1024² tileable library"
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
   "summary": "",
   "list": [
    {
     "name": "Mirror",
     "color": "#f5f6f8",
     "zone": "Shader only",
     "desc": "Fully metallic, near-zero roughness reflective glass."
    },
    {
     "name": "Walnut Wood",
     "color": "#492b17",
     "zone": "1 m tile",
     "desc": "Dark straight-grain walnut with satin varnish — rich, warm and premium."
    }
   ]
  },
  "textures": {
   "resolution": "1024 × 1024 tileable",
   "format": "PNG · 8-bit (WebP in GLB)",
   "maps": [
    {
     "map": "Walnut_Wood",
     "label": "Walnut Wood",
     "use": "BaseColor · Roughness · Normal — repeats every 1 m",
     "file": "assets/models/household/materials/Walnut_Wood_BaseColor.webp",
     "preview": "assets/models/household/materials/Walnut_Wood_BaseColor.webp",
     "size": "1024² PNG ×3"
    }
   ]
  }
 },
 {
  "id": "hh-dining-table",
  "title": "Dining Table",
  "category": "Dining",
  "collection": "household",
  "status": "completed",
  "shortDescription": "A six-seat dining table.",
  "longDescription": "A six-seat dining table. It belongs to the dining of the 3BHK set and, like every asset in this project, it is built only from box primitives — 9 scaled boxes, 108 triangles in total. The low-poly blocking keeps it readable and cheap for real-time use, so the realism comes from the surfaces: Oak wood is a tileable PBR material with colour, roughness and normal maps, tuned to real-world colour tones. Because the UVs are box-mapped in real-world metres, wood grain, weaves and tiles keep the same scale on every face and across every asset in the house.",
  "software": [
   "Blender"
  ],
  "tags": [
   "Low poly",
   "Box modelling",
   "PBR",
   "Dining"
  ],
  "thumbnail": "assets/models/household/dining-table/thumbnail.webp",
  "model": "assets/models/household/dining-table/model.glb",
  "renders": [],
  "video": "",
  "gallery": [],
  "links": {},
  "order": 19,
  "specs": [
   [
    "Polygons",
    "54"
   ],
   [
    "Triangles",
    "108"
   ],
   [
    "Vertices",
    "72"
   ],
   [
    "Meshes",
    "9 boxes → merged to 1"
   ],
   [
    "Topology",
    "All quads (box primitives)"
   ],
   [
    "Real-world size",
    "160 × 90 × 75 cm (W × D × H)"
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
    "1 · tileable PBR"
   ],
   [
    "Texture set",
    "Shared 1024² tileable library"
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
   "summary": "",
   "list": [
    {
     "name": "Oak Wood",
     "color": "#aa8253",
     "zone": "1 m tile",
     "desc": "Light honey oak with fine open grain; non-metallic, soft satin sheen."
    }
   ]
  },
  "textures": {
   "resolution": "1024 × 1024 tileable",
   "format": "PNG · 8-bit (WebP in GLB)",
   "maps": [
    {
     "map": "Oak_Wood",
     "label": "Oak Wood",
     "use": "BaseColor · Roughness · Normal — repeats every 1 m",
     "file": "assets/models/household/materials/Oak_Wood_BaseColor.webp",
     "preview": "assets/models/household/materials/Oak_Wood_BaseColor.webp",
     "size": "1024² PNG ×3"
    }
   ]
  }
 },
 {
  "id": "hh-dining-chair",
  "title": "Dining Chair",
  "category": "Dining",
  "collection": "household",
  "status": "completed",
  "shortDescription": "A dining chair with an upholstered seat (used ×4 in the house).",
  "longDescription": "A dining chair with an upholstered seat (used ×4 in the house). It belongs to the dining of the 3BHK set and, like every asset in this project, it is built only from box primitives — 10 scaled boxes, 120 triangles in total. The low-poly blocking keeps it readable and cheap for real-time use, so the realism comes from the surfaces: Rust seat fabric and walnut wood are tileable PBR materials with colour, roughness and normal maps, tuned to real-world colour tones. Because the UVs are box-mapped in real-world metres, wood grain, weaves and tiles keep the same scale on every face and across every asset in the house.",
  "software": [
   "Blender"
  ],
  "tags": [
   "Low poly",
   "Box modelling",
   "PBR",
   "Dining"
  ],
  "thumbnail": "assets/models/household/dining-chair/thumbnail.webp",
  "model": "assets/models/household/dining-chair/model.glb",
  "renders": [],
  "video": "",
  "gallery": [],
  "links": {},
  "order": 20,
  "specs": [
   [
    "Polygons",
    "60"
   ],
   [
    "Triangles",
    "120"
   ],
   [
    "Vertices",
    "80"
   ],
   [
    "Meshes",
    "10 boxes → merged to 1"
   ],
   [
    "Topology",
    "All quads (box primitives)"
   ],
   [
    "Real-world size",
    "45 × 45 × 90 cm (W × D × H)"
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
    "2 · tileable PBR"
   ],
   [
    "Texture set",
    "Shared 1024² tileable library"
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
   "summary": "",
   "list": [
    {
     "name": "Rust Seat Fabric",
     "color": "#933a2c",
     "zone": "0.3 m tile",
     "desc": "Woven rust-red seat fabric."
    },
    {
     "name": "Walnut Wood",
     "color": "#492b17",
     "zone": "1 m tile",
     "desc": "Dark straight-grain walnut with satin varnish — rich, warm and premium."
    }
   ]
  },
  "textures": {
   "resolution": "1024 × 1024 tileable",
   "format": "PNG · 8-bit (WebP in GLB)",
   "maps": [
    {
     "map": "Fabric_Chair_Seat",
     "label": "Rust Seat Fabric",
     "use": "BaseColor · Roughness · Normal — repeats every 0.3 m",
     "file": "assets/models/household/materials/Fabric_Chair_Seat_BaseColor.webp",
     "preview": "assets/models/household/materials/Fabric_Chair_Seat_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Walnut_Wood",
     "label": "Walnut Wood",
     "use": "BaseColor · Roughness · Normal — repeats every 1 m",
     "file": "assets/models/household/materials/Walnut_Wood_BaseColor.webp",
     "preview": "assets/models/household/materials/Walnut_Wood_BaseColor.webp",
     "size": "1024² PNG ×3"
    }
   ]
  }
 },
 {
  "id": "hh-kitchen-counter",
  "title": "Kitchen Counter",
  "category": "Kitchen",
  "collection": "household",
  "status": "completed",
  "shortDescription": "A modular kitchen counter with sink, tap, hob and cabinets.",
  "longDescription": "A modular kitchen counter with sink, tap, hob and cabinets. It belongs to the kitchen of the 3BHK set and, like every asset in this project, it is built only from box primitives — 21 scaled boxes, 252 triangles in total. The low-poly blocking keeps it readable and cheap for real-time use, so the realism comes from the surfaces: Yellow lacquer, black granite, white laminate and brushed steel are tileable PBR materials with colour, roughness and normal maps, tuned to real-world colour tones. Because the UVs are box-mapped in real-world metres, wood grain, weaves and tiles keep the same scale on every face and across every asset in the house.",
  "software": [
   "Blender"
  ],
  "tags": [
   "Low poly",
   "Box modelling",
   "PBR",
   "Kitchen"
  ],
  "thumbnail": "assets/models/household/kitchen-counter/thumbnail.webp",
  "model": "assets/models/household/kitchen-counter/model.glb",
  "renders": [],
  "video": "",
  "gallery": [],
  "links": {},
  "order": 21,
  "specs": [
   [
    "Polygons",
    "126"
   ],
   [
    "Triangles",
    "252"
   ],
   [
    "Vertices",
    "168"
   ],
   [
    "Meshes",
    "21 boxes → merged to 1"
   ],
   [
    "Topology",
    "All quads (box primitives)"
   ],
   [
    "Real-world size",
    "244 × 64 × 135 cm (W × D × H)"
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
    "6 · tileable PBR"
   ],
   [
    "Texture set",
    "Shared 1024² tileable library"
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
   "summary": "",
   "list": [
    {
     "name": "Yellow Lacquer",
     "color": "#dcae38",
     "zone": "1 m tile",
     "desc": "Satin lacquered cabinet fronts, smoother and glossier than wall paint."
    },
    {
     "name": "Black Granite",
     "color": "#1d1d20",
     "zone": "0.6 m tile",
     "desc": "Speckled black granite counter, polished."
    },
    {
     "name": "White Laminate",
     "color": "#e6e6e1",
     "zone": "1 m tile",
     "desc": "Clean white laminate board used on carcasses and appliances."
    },
    {
     "name": "Brushed Steel",
     "color": "#b5b5ba",
     "zone": "0.5 m tile",
     "desc": "Fine brushed stainless steel with directional streaks."
    },
    {
     "name": "Dark Metal",
     "color": "#232325",
     "zone": "0.5 m tile",
     "desc": "Brushed dark steel for handles, hinges and hardware."
    },
    {
     "name": "Black Plastic",
     "color": "#0a0a0b",
     "zone": "0.5 m tile",
     "desc": "Satin black ABS for trims, bezels and small parts."
    }
   ]
  },
  "textures": {
   "resolution": "1024 × 1024 tileable",
   "format": "PNG · 8-bit (WebP in GLB)",
   "maps": [
    {
     "map": "Cabinet_Yellow",
     "label": "Yellow Lacquer",
     "use": "BaseColor · Roughness · Normal — repeats every 1 m",
     "file": "assets/models/household/materials/Cabinet_Yellow_BaseColor.webp",
     "preview": "assets/models/household/materials/Cabinet_Yellow_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Granite_Black",
     "label": "Black Granite",
     "use": "BaseColor · Roughness · Normal — repeats every 0.6 m",
     "file": "assets/models/household/materials/Granite_Black_BaseColor.webp",
     "preview": "assets/models/household/materials/Granite_Black_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Laminate_White",
     "label": "White Laminate",
     "use": "BaseColor · Roughness · Normal — repeats every 1 m",
     "file": "assets/models/household/materials/Laminate_White_BaseColor.webp",
     "preview": "assets/models/household/materials/Laminate_White_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Metal_Brushed_Steel",
     "label": "Brushed Steel",
     "use": "BaseColor · Roughness · Normal — repeats every 0.5 m",
     "file": "assets/models/household/materials/Metal_Brushed_Steel_BaseColor.webp",
     "preview": "assets/models/household/materials/Metal_Brushed_Steel_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Metal_Dark",
     "label": "Dark Metal",
     "use": "BaseColor · Roughness · Normal — repeats every 0.5 m",
     "file": "assets/models/household/materials/Metal_Dark_BaseColor.webp",
     "preview": "assets/models/household/materials/Metal_Dark_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Plastic_Black",
     "label": "Black Plastic",
     "use": "BaseColor · Roughness · Normal — repeats every 0.5 m",
     "file": "assets/models/household/materials/Plastic_Black_BaseColor.webp",
     "preview": "assets/models/household/materials/Plastic_Black_BaseColor.webp",
     "size": "1024² PNG ×3"
    }
   ]
  }
 },
 {
  "id": "hh-refrigerator",
  "title": "Refrigerator",
  "category": "Kitchen",
  "collection": "household",
  "status": "completed",
  "shortDescription": "A double-door stainless steel refrigerator.",
  "longDescription": "A double-door stainless steel refrigerator. It belongs to the kitchen of the 3BHK set and, like every asset in this project, it is built only from box primitives — 10 scaled boxes, 120 triangles in total. The low-poly blocking keeps it readable and cheap for real-time use, so the realism comes from the surfaces: Appliance steel, dark metal and black plastic are tileable PBR materials with colour, roughness and normal maps, tuned to real-world colour tones. Because the UVs are box-mapped in real-world metres, wood grain, weaves and tiles keep the same scale on every face and across every asset in the house.",
  "software": [
   "Blender"
  ],
  "tags": [
   "Low poly",
   "Box modelling",
   "PBR",
   "Kitchen"
  ],
  "thumbnail": "assets/models/household/refrigerator/thumbnail.webp",
  "model": "assets/models/household/refrigerator/model.glb",
  "renders": [],
  "video": "",
  "gallery": [],
  "links": {},
  "order": 22,
  "specs": [
   [
    "Polygons",
    "60"
   ],
   [
    "Triangles",
    "120"
   ],
   [
    "Vertices",
    "80"
   ],
   [
    "Meshes",
    "10 boxes → merged to 1"
   ],
   [
    "Topology",
    "All quads (box primitives)"
   ],
   [
    "Real-world size",
    "70 × 75 × 180 cm (W × D × H)"
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
    "3 · tileable PBR"
   ],
   [
    "Texture set",
    "Shared 1024² tileable library"
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
   "summary": "",
   "list": [
    {
     "name": "Appliance Steel",
     "color": "#bec1c6",
     "zone": "1 m tile",
     "desc": "Large-panel brushed stainless finish used on the fridge."
    },
    {
     "name": "Dark Metal",
     "color": "#232325",
     "zone": "0.5 m tile",
     "desc": "Brushed dark steel for handles, hinges and hardware."
    },
    {
     "name": "Black Plastic",
     "color": "#0a0a0b",
     "zone": "0.5 m tile",
     "desc": "Satin black ABS for trims, bezels and small parts."
    }
   ]
  },
  "textures": {
   "resolution": "1024 × 1024 tileable",
   "format": "PNG · 8-bit (WebP in GLB)",
   "maps": [
    {
     "map": "Fridge_Steel",
     "label": "Appliance Steel",
     "use": "BaseColor · Roughness · Normal — repeats every 1 m",
     "file": "assets/models/household/materials/Fridge_Steel_BaseColor.webp",
     "preview": "assets/models/household/materials/Fridge_Steel_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Metal_Dark",
     "label": "Dark Metal",
     "use": "BaseColor · Roughness · Normal — repeats every 0.5 m",
     "file": "assets/models/household/materials/Metal_Dark_BaseColor.webp",
     "preview": "assets/models/household/materials/Metal_Dark_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Plastic_Black",
     "label": "Black Plastic",
     "use": "BaseColor · Roughness · Normal — repeats every 0.5 m",
     "file": "assets/models/household/materials/Plastic_Black_BaseColor.webp",
     "preview": "assets/models/household/materials/Plastic_Black_BaseColor.webp",
     "size": "1024² PNG ×3"
    }
   ]
  }
 },
 {
  "id": "hh-microwave",
  "title": "Microwave",
  "category": "Kitchen",
  "collection": "household",
  "status": "completed",
  "shortDescription": "A countertop microwave oven.",
  "longDescription": "A countertop microwave oven. It belongs to the kitchen of the 3BHK set and, like every asset in this project, it is built only from box primitives — 13 scaled boxes, 156 triangles in total. The low-poly blocking keeps it readable and cheap for real-time use, so the realism comes from the surfaces: White laminate, brushed steel, dark metal and black plastic are tileable PBR materials with colour, roughness and normal maps, tuned to real-world colour tones. Because the UVs are box-mapped in real-world metres, wood grain, weaves and tiles keep the same scale on every face and across every asset in the house.",
  "software": [
   "Blender"
  ],
  "tags": [
   "Low poly",
   "Box modelling",
   "PBR",
   "Kitchen"
  ],
  "thumbnail": "assets/models/household/microwave/thumbnail.webp",
  "model": "assets/models/household/microwave/model.glb",
  "renders": [],
  "video": "",
  "gallery": [],
  "links": {},
  "order": 23,
  "specs": [
   [
    "Polygons",
    "78"
   ],
   [
    "Triangles",
    "156"
   ],
   [
    "Vertices",
    "104"
   ],
   [
    "Meshes",
    "13 boxes → merged to 1"
   ],
   [
    "Topology",
    "All quads (box primitives)"
   ],
   [
    "Real-world size",
    "50 × 39 × 28 cm (W × D × H)"
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
    "6 · tileable PBR"
   ],
   [
    "Texture set",
    "Shared 1024² tileable library"
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
   "summary": "",
   "list": [
    {
     "name": "Dark Glass",
     "color": "#262b30",
     "zone": "Shader only",
     "desc": "Tinted dark glass."
    },
    {
     "name": "White Laminate",
     "color": "#e6e6e1",
     "zone": "1 m tile",
     "desc": "Clean white laminate board used on carcasses and appliances."
    },
    {
     "name": "Laptop Screen",
     "color": "#6c9fd2",
     "zone": "Shader only",
     "desc": "Emissive display panel."
    },
    {
     "name": "Brushed Steel",
     "color": "#b5b5ba",
     "zone": "0.5 m tile",
     "desc": "Fine brushed stainless steel with directional streaks."
    },
    {
     "name": "Dark Metal",
     "color": "#232325",
     "zone": "0.5 m tile",
     "desc": "Brushed dark steel for handles, hinges and hardware."
    },
    {
     "name": "Black Plastic",
     "color": "#0a0a0b",
     "zone": "0.5 m tile",
     "desc": "Satin black ABS for trims, bezels and small parts."
    }
   ]
  },
  "textures": {
   "resolution": "1024 × 1024 tileable",
   "format": "PNG · 8-bit (WebP in GLB)",
   "maps": [
    {
     "map": "Laminate_White",
     "label": "White Laminate",
     "use": "BaseColor · Roughness · Normal — repeats every 1 m",
     "file": "assets/models/household/materials/Laminate_White_BaseColor.webp",
     "preview": "assets/models/household/materials/Laminate_White_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Metal_Brushed_Steel",
     "label": "Brushed Steel",
     "use": "BaseColor · Roughness · Normal — repeats every 0.5 m",
     "file": "assets/models/household/materials/Metal_Brushed_Steel_BaseColor.webp",
     "preview": "assets/models/household/materials/Metal_Brushed_Steel_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Metal_Dark",
     "label": "Dark Metal",
     "use": "BaseColor · Roughness · Normal — repeats every 0.5 m",
     "file": "assets/models/household/materials/Metal_Dark_BaseColor.webp",
     "preview": "assets/models/household/materials/Metal_Dark_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Plastic_Black",
     "label": "Black Plastic",
     "use": "BaseColor · Roughness · Normal — repeats every 0.5 m",
     "file": "assets/models/household/materials/Plastic_Black_BaseColor.webp",
     "preview": "assets/models/household/materials/Plastic_Black_BaseColor.webp",
     "size": "1024² PNG ×3"
    }
   ]
  }
 },
 {
  "id": "hh-wall-cabinet",
  "title": "Wall Cabinet",
  "category": "Kitchen",
  "collection": "household",
  "status": "completed",
  "shortDescription": "Upper kitchen wall cabinets with handles.",
  "longDescription": "Upper kitchen wall cabinets with handles. It belongs to the kitchen of the 3BHK set and, like every asset in this project, it is built only from box primitives — 9 scaled boxes, 108 triangles in total. The low-poly blocking keeps it readable and cheap for real-time use, so the realism comes from the surfaces: Yellow lacquer, white laminate and brushed steel are tileable PBR materials with colour, roughness and normal maps, tuned to real-world colour tones. Because the UVs are box-mapped in real-world metres, wood grain, weaves and tiles keep the same scale on every face and across every asset in the house.",
  "software": [
   "Blender"
  ],
  "tags": [
   "Low poly",
   "Box modelling",
   "PBR",
   "Kitchen"
  ],
  "thumbnail": "assets/models/household/wall-cabinet/thumbnail.webp",
  "model": "assets/models/household/wall-cabinet/model.glb",
  "renders": [],
  "video": "",
  "gallery": [],
  "links": {},
  "order": 24,
  "specs": [
   [
    "Polygons",
    "54"
   ],
   [
    "Triangles",
    "108"
   ],
   [
    "Vertices",
    "72"
   ],
   [
    "Meshes",
    "9 boxes → merged to 1"
   ],
   [
    "Topology",
    "All quads (box primitives)"
   ],
   [
    "Real-world size",
    "240 × 37 × 70 cm (W × D × H)"
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
    "3 · tileable PBR"
   ],
   [
    "Texture set",
    "Shared 1024² tileable library"
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
   "summary": "",
   "list": [
    {
     "name": "Yellow Lacquer",
     "color": "#dcae38",
     "zone": "1 m tile",
     "desc": "Satin lacquered cabinet fronts, smoother and glossier than wall paint."
    },
    {
     "name": "White Laminate",
     "color": "#e6e6e1",
     "zone": "1 m tile",
     "desc": "Clean white laminate board used on carcasses and appliances."
    },
    {
     "name": "Brushed Steel",
     "color": "#b5b5ba",
     "zone": "0.5 m tile",
     "desc": "Fine brushed stainless steel with directional streaks."
    }
   ]
  },
  "textures": {
   "resolution": "1024 × 1024 tileable",
   "format": "PNG · 8-bit (WebP in GLB)",
   "maps": [
    {
     "map": "Cabinet_Yellow",
     "label": "Yellow Lacquer",
     "use": "BaseColor · Roughness · Normal — repeats every 1 m",
     "file": "assets/models/household/materials/Cabinet_Yellow_BaseColor.webp",
     "preview": "assets/models/household/materials/Cabinet_Yellow_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Laminate_White",
     "label": "White Laminate",
     "use": "BaseColor · Roughness · Normal — repeats every 1 m",
     "file": "assets/models/household/materials/Laminate_White_BaseColor.webp",
     "preview": "assets/models/household/materials/Laminate_White_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Metal_Brushed_Steel",
     "label": "Brushed Steel",
     "use": "BaseColor · Roughness · Normal — repeats every 0.5 m",
     "file": "assets/models/household/materials/Metal_Brushed_Steel_BaseColor.webp",
     "preview": "assets/models/household/materials/Metal_Brushed_Steel_BaseColor.webp",
     "size": "1024² PNG ×3"
    }
   ]
  }
 },
 {
  "id": "hh-washing-machine",
  "title": "Washing Machine",
  "category": "Utility",
  "collection": "household",
  "status": "completed",
  "shortDescription": "A front-loading washing machine with a glass door and display.",
  "longDescription": "A front-loading washing machine with a glass door and display. It belongs to the utility of the 3BHK set and, like every asset in this project, it is built only from box primitives — 6 scaled boxes, 72 triangles in total. The low-poly blocking keeps it readable and cheap for real-time use, so the realism comes from the surfaces: White laminate, brushed steel and black plastic are tileable PBR materials with colour, roughness and normal maps, tuned to real-world colour tones. Because the UVs are box-mapped in real-world metres, wood grain, weaves and tiles keep the same scale on every face and across every asset in the house.",
  "software": [
   "Blender"
  ],
  "tags": [
   "Low poly",
   "Box modelling",
   "PBR",
   "Utility"
  ],
  "thumbnail": "assets/models/household/washing-machine/thumbnail.webp",
  "model": "assets/models/household/washing-machine/model.glb",
  "renders": [],
  "video": "",
  "gallery": [],
  "links": {},
  "order": 25,
  "specs": [
   [
    "Polygons",
    "36"
   ],
   [
    "Triangles",
    "72"
   ],
   [
    "Vertices",
    "48"
   ],
   [
    "Meshes",
    "6 boxes → merged to 1"
   ],
   [
    "Topology",
    "All quads (box primitives)"
   ],
   [
    "Real-world size",
    "60 × 63.7 × 85 cm (W × D × H)"
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
    "5 · tileable PBR"
   ],
   [
    "Texture set",
    "Shared 1024² tileable library"
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
   "summary": "",
   "list": [
    {
     "name": "Dark Glass",
     "color": "#262b30",
     "zone": "Shader only",
     "desc": "Tinted dark glass."
    },
    {
     "name": "White Laminate",
     "color": "#e6e6e1",
     "zone": "1 m tile",
     "desc": "Clean white laminate board used on carcasses and appliances."
    },
    {
     "name": "Laptop Screen",
     "color": "#6c9fd2",
     "zone": "Shader only",
     "desc": "Emissive display panel."
    },
    {
     "name": "Brushed Steel",
     "color": "#b5b5ba",
     "zone": "0.5 m tile",
     "desc": "Fine brushed stainless steel with directional streaks."
    },
    {
     "name": "Black Plastic",
     "color": "#0a0a0b",
     "zone": "0.5 m tile",
     "desc": "Satin black ABS for trims, bezels and small parts."
    }
   ]
  },
  "textures": {
   "resolution": "1024 × 1024 tileable",
   "format": "PNG · 8-bit (WebP in GLB)",
   "maps": [
    {
     "map": "Laminate_White",
     "label": "White Laminate",
     "use": "BaseColor · Roughness · Normal — repeats every 1 m",
     "file": "assets/models/household/materials/Laminate_White_BaseColor.webp",
     "preview": "assets/models/household/materials/Laminate_White_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Metal_Brushed_Steel",
     "label": "Brushed Steel",
     "use": "BaseColor · Roughness · Normal — repeats every 0.5 m",
     "file": "assets/models/household/materials/Metal_Brushed_Steel_BaseColor.webp",
     "preview": "assets/models/household/materials/Metal_Brushed_Steel_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Plastic_Black",
     "label": "Black Plastic",
     "use": "BaseColor · Roughness · Normal — repeats every 0.5 m",
     "file": "assets/models/household/materials/Plastic_Black_BaseColor.webp",
     "preview": "assets/models/household/materials/Plastic_Black_BaseColor.webp",
     "size": "1024² PNG ×3"
    }
   ]
  }
 },
 {
  "id": "hh-toilet",
  "title": "Toilet",
  "category": "Bathroom",
  "collection": "household",
  "status": "completed",
  "shortDescription": "A western-style toilet in glazed ceramic.",
  "longDescription": "A western-style toilet in glazed ceramic. It belongs to the bathroom of the 3BHK set and, like every asset in this project, it is built only from box primitives — 5 scaled boxes, 60 triangles in total. The low-poly blocking keeps it readable and cheap for real-time use, so the realism comes from the surfaces: Glazed ceramic and brushed steel are tileable PBR materials with colour, roughness and normal maps, tuned to real-world colour tones. Because the UVs are box-mapped in real-world metres, wood grain, weaves and tiles keep the same scale on every face and across every asset in the house.",
  "software": [
   "Blender"
  ],
  "tags": [
   "Low poly",
   "Box modelling",
   "PBR",
   "Bathroom"
  ],
  "thumbnail": "assets/models/household/toilet/thumbnail.webp",
  "model": "assets/models/household/toilet/model.glb",
  "renders": [],
  "video": "",
  "gallery": [],
  "links": {},
  "order": 26,
  "specs": [
   [
    "Polygons",
    "30"
   ],
   [
    "Triangles",
    "60"
   ],
   [
    "Vertices",
    "40"
   ],
   [
    "Meshes",
    "5 boxes → merged to 1"
   ],
   [
    "Topology",
    "All quads (box primitives)"
   ],
   [
    "Real-world size",
    "38 × 62 × 79.5 cm (W × D × H)"
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
    "2 · tileable PBR"
   ],
   [
    "Texture set",
    "Shared 1024² tileable library"
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
   "summary": "",
   "list": [
    {
     "name": "Glazed Ceramic",
     "color": "#f0f0ed",
     "zone": "1 m tile",
     "desc": "Very glossy white sanitary ceramic."
    },
    {
     "name": "Brushed Steel",
     "color": "#b5b5ba",
     "zone": "0.5 m tile",
     "desc": "Fine brushed stainless steel with directional streaks."
    }
   ]
  },
  "textures": {
   "resolution": "1024 × 1024 tileable",
   "format": "PNG · 8-bit (WebP in GLB)",
   "maps": [
    {
     "map": "Ceramic_White",
     "label": "Glazed Ceramic",
     "use": "BaseColor · Roughness · Normal — repeats every 1 m",
     "file": "assets/models/household/materials/Ceramic_White_BaseColor.webp",
     "preview": "assets/models/household/materials/Ceramic_White_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Metal_Brushed_Steel",
     "label": "Brushed Steel",
     "use": "BaseColor · Roughness · Normal — repeats every 0.5 m",
     "file": "assets/models/household/materials/Metal_Brushed_Steel_BaseColor.webp",
     "preview": "assets/models/household/materials/Metal_Brushed_Steel_BaseColor.webp",
     "size": "1024² PNG ×3"
    }
   ]
  }
 },
 {
  "id": "hh-vanity",
  "title": "Bathroom Vanity",
  "category": "Bathroom",
  "collection": "household",
  "status": "completed",
  "shortDescription": "A bathroom vanity with marble top, basin, tap and mirror.",
  "longDescription": "A bathroom vanity with marble top, basin, tap and mirror. It belongs to the bathroom of the 3BHK set and, like every asset in this project, it is built only from box primitives — 14 scaled boxes, 168 triangles in total. The low-poly blocking keeps it readable and cheap for real-time use, so the realism comes from the surfaces: Glazed ceramic, white marble, brushed steel and dark metal are tileable PBR materials with colour, roughness and normal maps, tuned to real-world colour tones. Because the UVs are box-mapped in real-world metres, wood grain, weaves and tiles keep the same scale on every face and across every asset in the house.",
  "software": [
   "Blender"
  ],
  "tags": [
   "Low poly",
   "Box modelling",
   "PBR",
   "Bathroom"
  ],
  "thumbnail": "assets/models/household/vanity/thumbnail.webp",
  "model": "assets/models/household/vanity/model.glb",
  "renders": [],
  "video": "",
  "gallery": [],
  "links": {},
  "order": 27,
  "specs": [
   [
    "Polygons",
    "84"
   ],
   [
    "Triangles",
    "168"
   ],
   [
    "Vertices",
    "112"
   ],
   [
    "Meshes",
    "14 boxes → merged to 1"
   ],
   [
    "Topology",
    "All quads (box primitives)"
   ],
   [
    "Real-world size",
    "64 × 48.5 × 187 cm (W × D × H)"
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
    "8 · tileable PBR"
   ],
   [
    "Texture set",
    "Shared 1024² tileable library"
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
   "summary": "",
   "list": [
    {
     "name": "Glazed Ceramic",
     "color": "#f0f0ed",
     "zone": "1 m tile",
     "desc": "Very glossy white sanitary ceramic."
    },
    {
     "name": "Dark Glass",
     "color": "#262b30",
     "zone": "Shader only",
     "desc": "Tinted dark glass."
    },
    {
     "name": "White Marble",
     "color": "#dadad8",
     "zone": "1.2 m tile",
     "desc": "Polished white marble with soft grey veins."
    },
    {
     "name": "Brushed Steel",
     "color": "#b5b5ba",
     "zone": "0.5 m tile",
     "desc": "Fine brushed stainless steel with directional streaks."
    },
    {
     "name": "Dark Metal",
     "color": "#232325",
     "zone": "0.5 m tile",
     "desc": "Brushed dark steel for handles, hinges and hardware."
    },
    {
     "name": "Mirror",
     "color": "#f5f6f8",
     "zone": "Shader only",
     "desc": "Fully metallic, near-zero roughness reflective glass."
    },
    {
     "name": "Oak Wood",
     "color": "#aa8253",
     "zone": "1 m tile",
     "desc": "Light honey oak with fine open grain; non-metallic, soft satin sheen."
    },
    {
     "name": "Walnut Wood",
     "color": "#492b17",
     "zone": "1 m tile",
     "desc": "Dark straight-grain walnut with satin varnish — rich, warm and premium."
    }
   ]
  },
  "textures": {
   "resolution": "1024 × 1024 tileable",
   "format": "PNG · 8-bit (WebP in GLB)",
   "maps": [
    {
     "map": "Ceramic_White",
     "label": "Glazed Ceramic",
     "use": "BaseColor · Roughness · Normal — repeats every 1 m",
     "file": "assets/models/household/materials/Ceramic_White_BaseColor.webp",
     "preview": "assets/models/household/materials/Ceramic_White_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Marble_White",
     "label": "White Marble",
     "use": "BaseColor · Roughness · Normal — repeats every 1.2 m",
     "file": "assets/models/household/materials/Marble_White_BaseColor.webp",
     "preview": "assets/models/household/materials/Marble_White_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Metal_Brushed_Steel",
     "label": "Brushed Steel",
     "use": "BaseColor · Roughness · Normal — repeats every 0.5 m",
     "file": "assets/models/household/materials/Metal_Brushed_Steel_BaseColor.webp",
     "preview": "assets/models/household/materials/Metal_Brushed_Steel_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Metal_Dark",
     "label": "Dark Metal",
     "use": "BaseColor · Roughness · Normal — repeats every 0.5 m",
     "file": "assets/models/household/materials/Metal_Dark_BaseColor.webp",
     "preview": "assets/models/household/materials/Metal_Dark_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Oak_Wood",
     "label": "Oak Wood",
     "use": "BaseColor · Roughness · Normal — repeats every 1 m",
     "file": "assets/models/household/materials/Oak_Wood_BaseColor.webp",
     "preview": "assets/models/household/materials/Oak_Wood_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Walnut_Wood",
     "label": "Walnut Wood",
     "use": "BaseColor · Roughness · Normal — repeats every 1 m",
     "file": "assets/models/household/materials/Walnut_Wood_BaseColor.webp",
     "preview": "assets/models/household/materials/Walnut_Wood_BaseColor.webp",
     "size": "1024² PNG ×3"
    }
   ]
  }
 },
 {
  "id": "hh-shower",
  "title": "Shower",
  "category": "Bathroom",
  "collection": "household",
  "status": "completed",
  "shortDescription": "A glass shower enclosure with a steel shower head.",
  "longDescription": "A glass shower enclosure with a steel shower head. It belongs to the bathroom of the 3BHK set and, like every asset in this project, it is built only from box primitives — 9 scaled boxes, 108 triangles in total. The low-poly blocking keeps it readable and cheap for real-time use, so the realism comes from the surfaces: Glazed ceramic and brushed steel are tileable PBR materials with colour, roughness and normal maps, tuned to real-world colour tones. Because the UVs are box-mapped in real-world metres, wood grain, weaves and tiles keep the same scale on every face and across every asset in the house.",
  "software": [
   "Blender"
  ],
  "tags": [
   "Low poly",
   "Box modelling",
   "PBR",
   "Bathroom"
  ],
  "thumbnail": "assets/models/household/shower/thumbnail.webp",
  "model": "assets/models/household/shower/model.glb",
  "renders": [],
  "video": "",
  "gallery": [],
  "links": {},
  "order": 28,
  "specs": [
   [
    "Polygons",
    "54"
   ],
   [
    "Triangles",
    "108"
   ],
   [
    "Vertices",
    "72"
   ],
   [
    "Meshes",
    "9 boxes → merged to 1"
   ],
   [
    "Topology",
    "All quads (box primitives)"
   ],
   [
    "Real-world size",
    "90 × 90 × 198 cm (W × D × H)"
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
    "3 · tileable PBR"
   ],
   [
    "Texture set",
    "Shared 1024² tileable library"
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
   "summary": "",
   "list": [
    {
     "name": "Glazed Ceramic",
     "color": "#f0f0ed",
     "zone": "1 m tile",
     "desc": "Very glossy white sanitary ceramic."
    },
    {
     "name": "Clear Glass",
     "color": "#edf5f5",
     "zone": "Shader only",
     "desc": "Transparent glass panel."
    },
    {
     "name": "Brushed Steel",
     "color": "#b5b5ba",
     "zone": "0.5 m tile",
     "desc": "Fine brushed stainless steel with directional streaks."
    }
   ]
  },
  "textures": {
   "resolution": "1024 × 1024 tileable",
   "format": "PNG · 8-bit (WebP in GLB)",
   "maps": [
    {
     "map": "Ceramic_White",
     "label": "Glazed Ceramic",
     "use": "BaseColor · Roughness · Normal — repeats every 1 m",
     "file": "assets/models/household/materials/Ceramic_White_BaseColor.webp",
     "preview": "assets/models/household/materials/Ceramic_White_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Metal_Brushed_Steel",
     "label": "Brushed Steel",
     "use": "BaseColor · Roughness · Normal — repeats every 0.5 m",
     "file": "assets/models/household/materials/Metal_Brushed_Steel_BaseColor.webp",
     "preview": "assets/models/household/materials/Metal_Brushed_Steel_BaseColor.webp",
     "size": "1024² PNG ×3"
    }
   ]
  }
 },
 {
  "id": "hh-shoe-rack",
  "title": "Shoe Rack",
  "category": "Entrance",
  "collection": "household",
  "status": "completed",
  "shortDescription": "An entrance shoe rack with a few pairs of shoes.",
  "longDescription": "An entrance shoe rack with a few pairs of shoes. It belongs to the entrance of the 3BHK set and, like every asset in this project, it is built only from box primitives — 9 scaled boxes, 108 triangles in total. The low-poly blocking keeps it readable and cheap for real-time use, so the realism comes from the surfaces: Oak wood, red canvas and black leather are tileable PBR materials with colour, roughness and normal maps, tuned to real-world colour tones. Because the UVs are box-mapped in real-world metres, wood grain, weaves and tiles keep the same scale on every face and across every asset in the house.",
  "software": [
   "Blender"
  ],
  "tags": [
   "Low poly",
   "Box modelling",
   "PBR",
   "Entrance"
  ],
  "thumbnail": "assets/models/household/shoe-rack/thumbnail.webp",
  "model": "assets/models/household/shoe-rack/model.glb",
  "renders": [],
  "video": "",
  "gallery": [],
  "links": {},
  "order": 29,
  "specs": [
   [
    "Polygons",
    "54"
   ],
   [
    "Triangles",
    "108"
   ],
   [
    "Vertices",
    "72"
   ],
   [
    "Meshes",
    "9 boxes → merged to 1"
   ],
   [
    "Topology",
    "All quads (box primitives)"
   ],
   [
    "Real-world size",
    "80 × 30 × 50 cm (W × D × H)"
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
    "3 · tileable PBR"
   ],
   [
    "Texture set",
    "Shared 1024² tileable library"
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
   "summary": "",
   "list": [
    {
     "name": "Oak Wood",
     "color": "#aa8253",
     "zone": "1 m tile",
     "desc": "Light honey oak with fine open grain; non-metallic, soft satin sheen."
    },
    {
     "name": "Red Canvas",
     "color": "#9e1d1a",
     "zone": "0.2 m tile",
     "desc": "Red canvas weave."
    },
    {
     "name": "Black Leather",
     "color": "#111112",
     "zone": "0.3 m tile",
     "desc": "Polished black leather."
    }
   ]
  },
  "textures": {
   "resolution": "1024 × 1024 tileable",
   "format": "PNG · 8-bit (WebP in GLB)",
   "maps": [
    {
     "map": "Oak_Wood",
     "label": "Oak Wood",
     "use": "BaseColor · Roughness · Normal — repeats every 1 m",
     "file": "assets/models/household/materials/Oak_Wood_BaseColor.webp",
     "preview": "assets/models/household/materials/Oak_Wood_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Shoe_Fabric_Red",
     "label": "Red Canvas",
     "use": "BaseColor · Roughness · Normal — repeats every 0.2 m",
     "file": "assets/models/household/materials/Shoe_Fabric_Red_BaseColor.webp",
     "preview": "assets/models/household/materials/Shoe_Fabric_Red_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Shoe_Leather_Black",
     "label": "Black Leather",
     "use": "BaseColor · Roughness · Normal — repeats every 0.3 m",
     "file": "assets/models/household/materials/Shoe_Leather_Black_BaseColor.webp",
     "preview": "assets/models/household/materials/Shoe_Leather_Black_BaseColor.webp",
     "size": "1024² PNG ×3"
    }
   ]
  }
 },
 {
  "id": "hh-door",
  "title": "Door",
  "category": "All rooms",
  "collection": "household",
  "status": "completed",
  "shortDescription": "An interior door with frame and handle.",
  "longDescription": "An interior door with frame and handle. It belongs to the all rooms of the 3BHK set and, like every asset in this project, it is built only from box primitives — 3 scaled boxes, 36 triangles in total. The low-poly blocking keeps it readable and cheap for real-time use, so the realism comes from the surfaces: Brushed steel and oak wood are tileable PBR materials with colour, roughness and normal maps, tuned to real-world colour tones. Because the UVs are box-mapped in real-world metres, wood grain, weaves and tiles keep the same scale on every face and across every asset in the house.",
  "software": [
   "Blender"
  ],
  "tags": [
   "Low poly",
   "Box modelling",
   "PBR",
   "All rooms"
  ],
  "thumbnail": "assets/models/household/door/thumbnail.webp",
  "model": "assets/models/household/door/model.glb",
  "renders": [],
  "video": "",
  "gallery": [],
  "links": {},
  "order": 30,
  "specs": [
   [
    "Polygons",
    "18"
   ],
   [
    "Triangles",
    "36"
   ],
   [
    "Vertices",
    "24"
   ],
   [
    "Meshes",
    "3 boxes → merged to 1"
   ],
   [
    "Topology",
    "All quads (box primitives)"
   ],
   [
    "Real-world size",
    "82 × 5 × 204 cm (W × D × H)"
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
    "2 · tileable PBR"
   ],
   [
    "Texture set",
    "Shared 1024² tileable library"
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
   "summary": "",
   "list": [
    {
     "name": "Brushed Steel",
     "color": "#b5b5ba",
     "zone": "0.5 m tile",
     "desc": "Fine brushed stainless steel with directional streaks."
    },
    {
     "name": "Oak Wood",
     "color": "#aa8253",
     "zone": "1 m tile",
     "desc": "Light honey oak with fine open grain; non-metallic, soft satin sheen."
    }
   ]
  },
  "textures": {
   "resolution": "1024 × 1024 tileable",
   "format": "PNG · 8-bit (WebP in GLB)",
   "maps": [
    {
     "map": "Metal_Brushed_Steel",
     "label": "Brushed Steel",
     "use": "BaseColor · Roughness · Normal — repeats every 0.5 m",
     "file": "assets/models/household/materials/Metal_Brushed_Steel_BaseColor.webp",
     "preview": "assets/models/household/materials/Metal_Brushed_Steel_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Oak_Wood",
     "label": "Oak Wood",
     "use": "BaseColor · Roughness · Normal — repeats every 1 m",
     "file": "assets/models/household/materials/Oak_Wood_BaseColor.webp",
     "preview": "assets/models/household/materials/Oak_Wood_BaseColor.webp",
     "size": "1024² PNG ×3"
    }
   ]
  }
 },
 {
  "id": "hh-wall-clock",
  "title": "Wall Clock",
  "category": "Living room",
  "collection": "household",
  "status": "completed",
  "shortDescription": "A round-faced wall clock built entirely from boxes.",
  "longDescription": "A round-faced wall clock built entirely from boxes. It belongs to the living room of the 3BHK set and, like every asset in this project, it is built only from box primitives — 8 scaled boxes, 96 triangles in total. The low-poly blocking keeps it readable and cheap for real-time use, so the realism comes from the surfaces: Glazed ceramic and black plastic are tileable PBR materials with colour, roughness and normal maps, tuned to real-world colour tones. Because the UVs are box-mapped in real-world metres, wood grain, weaves and tiles keep the same scale on every face and across every asset in the house.",
  "software": [
   "Blender"
  ],
  "tags": [
   "Low poly",
   "Box modelling",
   "PBR",
   "Living room"
  ],
  "thumbnail": "assets/models/household/wall-clock/thumbnail.webp",
  "model": "assets/models/household/wall-clock/model.glb",
  "renders": [],
  "video": "",
  "gallery": [],
  "links": {},
  "order": 31,
  "specs": [
   [
    "Polygons",
    "48"
   ],
   [
    "Triangles",
    "96"
   ],
   [
    "Vertices",
    "64"
   ],
   [
    "Meshes",
    "8 boxes → merged to 1"
   ],
   [
    "Topology",
    "All quads (box primitives)"
   ],
   [
    "Real-world size",
    "32 × 5.9 × 32 cm (W × D × H)"
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
    "2 · tileable PBR"
   ],
   [
    "Texture set",
    "Shared 1024² tileable library"
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
   "summary": "",
   "list": [
    {
     "name": "Glazed Ceramic",
     "color": "#f0f0ed",
     "zone": "1 m tile",
     "desc": "Very glossy white sanitary ceramic."
    },
    {
     "name": "Black Plastic",
     "color": "#0a0a0b",
     "zone": "0.5 m tile",
     "desc": "Satin black ABS for trims, bezels and small parts."
    }
   ]
  },
  "textures": {
   "resolution": "1024 × 1024 tileable",
   "format": "PNG · 8-bit (WebP in GLB)",
   "maps": [
    {
     "map": "Ceramic_White",
     "label": "Glazed Ceramic",
     "use": "BaseColor · Roughness · Normal — repeats every 1 m",
     "file": "assets/models/household/materials/Ceramic_White_BaseColor.webp",
     "preview": "assets/models/household/materials/Ceramic_White_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Plastic_Black",
     "label": "Black Plastic",
     "use": "BaseColor · Roughness · Normal — repeats every 0.5 m",
     "file": "assets/models/household/materials/Plastic_Black_BaseColor.webp",
     "preview": "assets/models/household/materials/Plastic_Black_BaseColor.webp",
     "size": "1024² PNG ×3"
    }
   ]
  }
 },
 {
  "id": "hh-wall-art",
  "title": "Wall Art",
  "category": "Living room",
  "collection": "household",
  "status": "completed",
  "shortDescription": "A framed wall print with a mount board.",
  "longDescription": "A framed wall print with a mount board. It belongs to the living room of the 3BHK set and, like every asset in this project, it is built only from box primitives — 3 scaled boxes, 36 triangles in total. The low-poly blocking keeps it readable and cheap for real-time use, so the realism comes from the surfaces: Mount board, canvas print and oak wood are tileable PBR materials with colour, roughness and normal maps, tuned to real-world colour tones. Because the UVs are box-mapped in real-world metres, wood grain, weaves and tiles keep the same scale on every face and across every asset in the house.",
  "software": [
   "Blender"
  ],
  "tags": [
   "Low poly",
   "Box modelling",
   "PBR",
   "Living room"
  ],
  "thumbnail": "assets/models/household/wall-art/thumbnail.webp",
  "model": "assets/models/household/wall-art/model.glb",
  "renders": [],
  "video": "",
  "gallery": [],
  "links": {},
  "order": 32,
  "specs": [
   [
    "Polygons",
    "18"
   ],
   [
    "Triangles",
    "36"
   ],
   [
    "Vertices",
    "24"
   ],
   [
    "Meshes",
    "3 boxes → merged to 1"
   ],
   [
    "Topology",
    "All quads (box primitives)"
   ],
   [
    "Real-world size",
    "60 × 3.6 × 80 cm (W × D × H)"
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
    "3 · tileable PBR"
   ],
   [
    "Texture set",
    "Shared 1024² tileable library"
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
   "summary": "",
   "list": [
    {
     "name": "Mount Board",
     "color": "#eeebe4",
     "zone": "0.5 m tile",
     "desc": "Matte white mount board around the print."
    },
    {
     "name": "Canvas Print",
     "color": "#866c53",
     "zone": "0.5 m tile",
     "desc": "Art print with a fine canvas weave."
    },
    {
     "name": "Oak Wood",
     "color": "#aa8253",
     "zone": "1 m tile",
     "desc": "Light honey oak with fine open grain; non-metallic, soft satin sheen."
    }
   ]
  },
  "textures": {
   "resolution": "1024 × 1024 tileable",
   "format": "PNG · 8-bit (WebP in GLB)",
   "maps": [
    {
     "map": "Art_Mat_White",
     "label": "Mount Board",
     "use": "BaseColor · Roughness · Normal — repeats every 0.5 m",
     "file": "assets/models/household/materials/Art_Mat_White_BaseColor.webp",
     "preview": "assets/models/household/materials/Art_Mat_White_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Art_Print",
     "label": "Canvas Print",
     "use": "BaseColor · Roughness · Normal — repeats every 0.5 m",
     "file": "assets/models/household/materials/Art_Print_BaseColor.webp",
     "preview": "assets/models/household/materials/Art_Print_BaseColor.webp",
     "size": "1024² PNG ×3"
    },
    {
     "map": "Oak_Wood",
     "label": "Oak Wood",
     "use": "BaseColor · Roughness · Normal — repeats every 1 m",
     "file": "assets/models/household/materials/Oak_Wood_BaseColor.webp",
     "preview": "assets/models/household/materials/Oak_Wood_BaseColor.webp",
     "size": "1024² PNG ×3"
    }
   ]
  }
 }
];
