/* =====================================================================
   UPCOMING / OTHER PROJECTS
   status: "upcoming"    → styled "Coming Soon" card
           "in-progress" → shows a progress bar (set progress: 0–100)
           "completed"   → normal card
   Leave the list empty [] and the section shows a "new levels unlocking soon" card.
   ===================================================================== */

window.PORTFOLIO = window.PORTFOLIO || {};
PORTFOLIO.projects = [
  {
    "id": "viking-revenge",
    "title": "Vengeance of the Jarl",
    "category": "Game",
    "year": "2026",
    "status": "upcoming",
    "shortDescription": "Vengeance of the Jarl: a story-driven Viking revenge game in Unity. The first cutscene is out, with gameplay and updates coming soon.",
    "longDescription": "Vengeance of the Jarl is my upcoming game, a Viking revenge story. Decades ago a village was burned and its people killed, and the game follows the revenge that grows out of that night.\n\nThe first story cutscene is already finished. It was built in Unity with Timeline and Cinemachine and finished in Premiere Pro with voice-over, sound design and subtitles. It shows the village as it is today while the sound replays what happened there 30–40 years ago.\n\nUpdates coming soon: gameplay, trailer and more.",
    "software": [
      "Unity",
      "Premiere Pro"
    ],
    "tags": [
      "Story",
      "Revenge",
      "Vikings",
      "Cinematic"
    ],
    "thumbnail": "assets/videos/viking-cutscene/poster.jpg",
    "renders": [],
    "video": "assets/videos/viking-cutscene/video.mp4",
    "gallery": [],
    "links": {},
    "featured": true,
    "order": 1
  },

  /* ---------- TEMPLATE (remove the comment marks around it to use) ----------
  {
    id: "ue5-environment",
    title: "UE5 Environment",
    category: "Environment Art",
    year: "2026",
    status: "in-progress",
    progress: 40,
    shortDescription: "A night-time desert outpost built in Unreal Engine 5.",
    longDescription: "",
    software: ["Unreal Engine 5", "Blender"],
    tags: [],
    thumbnail: "",
    renders: [],
    video: "",
    gallery: [],
    links: {},
    featured: false,
    order: 1
  },
  ---------------------------------------------------------------------------- */

];
