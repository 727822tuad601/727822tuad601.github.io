/* =====================================================================
   GAMES — every link you fill in becomes a big button automatically.
   links:
     webgl      → "Play in browser" (path to your WebGL/HTML5 build's index.html,
                  e.g. "assets/games/troll-level/build/index.html")
     itch       → itch.io page
     playStore  → Google Play link
     download   → direct file or Google Drive link (.zip / .apk / .exe)
     github     → source code
     website, other → anything else
   ===================================================================== */

window.PORTFOLIO = window.PORTFOLIO || {};
PORTFOLIO.games = [
  {
    id: "troll-level",
    title: "Troll Level",
    category: "2D Game",
    year: "",
    status: "completed",              // change to "in-progress" or "upcoming" if needed
    platform: "",                     // e.g. "PC · Android · Web"
    engine: "",                       // e.g. "Unity"
    shortDescription: "A 2D puzzle game where your own ghost clone is both your best tool and your worst enemy.",
    longDescription:
      "Every run leaves a ghost behind that copies exactly what you did — for better or worse.",
    features: [
      "You carefully sacrifice your first run so your ghost clone will hold open a gate, only for the ghost to step off the pressure plate the exact second you walk under a crushing ceiling.",
      "You hit the suicide button to rewind and retry, but your past ghost faithfully copies your previous panic movements and walks straight over to press a level self-destruct button instead."
    ],
    software: [],
    tags: ["2D", "Puzzle", "Ghost clone"],
    thumbnail: "",                    // assets/games/troll-level/cover.jpg
    cover: "",                        // big image in the game page (falls back to thumbnail)
    trailer: "",                      // YouTube link or assets/games/troll-level/trailer.mp4
    screenshots: [],                  // ["assets/games/troll-level/screenshots/01.jpg", ...]
    links: {
      webgl: "",
      itch: "",
      playStore: "",
      download: "",
      github: "",
      website: "",
      other: ""
    },
    featured: true,
    order: 1
  }

  /* ---------- TEMPLATE ----------
  ,{
    id: "my-game",
    title: "My Game",
    category: "3D Game",
    year: "2026",
    status: "in-progress",
    platform: "PC · Web",
    engine: "Unreal Engine 5",
    shortDescription: "",
    longDescription: "",
    features: ["Feature one", "Feature two"],
    software: ["Unreal Engine 5", "Blender"],
    tags: [],
    thumbnail: "assets/games/my-game/cover.jpg",
    cover: "assets/games/my-game/cover.jpg",
    trailer: "https://youtu.be/XXXXXXXXXXX",
    screenshots: ["assets/games/my-game/screenshots/01.jpg"],
    links: { webgl: "", itch: "", playStore: "", download: "", github: "", website: "", other: "" },
    featured: false,
    order: 2
  }
  -------------------------------- */
];
