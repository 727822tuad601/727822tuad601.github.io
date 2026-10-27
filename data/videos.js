/* =====================================================================
   VIDEOS — animations, edits, motion graphics, YouTube videos.
   "video" can be:
     • a file:   "assets/videos/<slug>/video.mp4"   (keep files under ~50 MB)
     • YouTube:  "https://www.youtube.com/watch?v=XXXXXXXXXXX" or "https://youtu.be/XXXXXXXXXXX"
     • Vimeo:    "https://vimeo.com/123456789"
   "preview" = optional short muted clip that plays on hover (file only).
   "category" also becomes a filter button automatically.
   ===================================================================== */

window.PORTFOLIO = window.PORTFOLIO || {};
PORTFOLIO.videos = [
  {
    id: "stickman-loop",
    title: "Stickman Fight — Frame by Frame",
    category: "Animation",
    year: "",
    status: "completed",
    duration: "0:45",
    specs: "150+ Frames | 18 Frames Per Second",
    shortDescription: "Hand-drawn frame-by-frame stickman fight animation with sound.",
    longDescription:
      "A hand-drawn stickman fight scene animated completely frame by frame. Every one of the 150+ frames was drawn individually in Adobe Photoshop to keep the weight, impact and timing of each hit feeling organic, and the frames were then compiled, timed and synced to sound in Adobe Premiere Pro.",
    highlights: ["150+ frames — each and every frame hand-drawn, one by one", "Drawn frame by frame in Adobe Photoshop", "Timed, edited and sound-synced in Adobe Premiere Pro", "18 fps hand-animation timing for snappy, readable hits"],
    purpose: "A personal experiment to practise and show hand-drawn animation skills.",
    software: ["Photoshop", "Premiere Pro"],
    tags: ["2D", "Frame-by-frame", "Sound design"],
    thumbnail: "assets/videos/stickman-loop/poster.jpg",
    video: "assets/videos/stickman-loop/video.mp4",
    preview: "assets/videos/stickman-loop/preview.mp4",
    gallery: [],
    links: {},
    featured: true,
    order: 1
  },
  {
    "id": "viking-cutscene",
    "title": "Vengeance of the Jarl — Cutscene",
    "category": "Cinematic",
    "year": "2026",
    "status": "completed",
    "duration": "4:08",
    "specs": "4K source · 30 fps · Voice-over, SFX & subtitles",
    "shortDescription": "Story cutscene from Vengeance of the Jarl, my upcoming Viking revenge game — the present on screen, the past in your ears.",
    "longDescription": "A story cutscene from my upcoming game Vengeance of the Jarl, a Viking revenge story. I staged and animated the scene in Unity with Timeline and Cinemachine, then edited it in Adobe Premiere Pro with sound design, a voice-over narration and subtitles.\n\nThe cutscene runs on two timelines at once. What you see on screen is the village today, quiet and empty long after the event. What you hear is the past: the narration, the screams, the fire and the dying villagers recreate the massacre that happened in that same village 30–40 years earlier.",
    "highlights": [
      "Picture and sound are set in two different times: present-day visuals, past-day audio",
      "Cinematic built in Unity with Timeline and Cinemachine camera work",
      "Edited, sound-designed, voiced and subtitled in Adobe Premiere Pro",
      "Rendered in 4K at 30 fps (streamed here in 1080p)"
    ],
    "howToWatch": "Watch it with headphones. Treat the images as what is happening right now, and let the sound tell you what happened here decades ago: the cries, the crackling fire and the deaths of the villagers. The story only lands fully when you put the two together in your head. You are standing in today's village while listening to its past.",
    "purpose": "This is a cutscene from Vengeance of the Jarl, my upcoming Viking revenge game. It reveals the event that drives the story and the hero's revenge.",
    "note": "Vengeance of the Jarl · Upcoming game · Updates coming soon",
    "software": [
      "Unity",
      "Timeline",
      "Cinemachine",
      "Premiere Pro"
    ],
    "tags": [
      "Vengeance of the Jarl",
      "Cinematic",
      "Unity",
      "Storytelling",
      "Sound design",
      "Voice-over"
    ],
    "thumbnail": "assets/videos/viking-cutscene/poster.jpg",
    "video": "assets/videos/viking-cutscene/video.mp4",
    "preview": "assets/videos/viking-cutscene/preview.mp4",
    "gallery": [],
    "links": {},
    "featured": true,
    "order": 0
  },
  {
    "id": "rain-house-walk",
    "title": "Rain House — Cinematic Walk",
    "category": "Cinematic",
    "year": "2026",
    "status": "completed",
    "duration": "0:37",
    "specs": "1920 × 1080 · 24 fps · 8 camera shots",
    "shortDescription": "A character walks through the rain, opens the gate, crosses the garden and knocks on the front door.",
    "longDescription": "This cinematic is the final output of my college assignment for my MA in Interactive Game Art Design & Development at Jain University. The task was to combine an environment, a character and camera work into one short film, all made and rendered in Blender.\n\nOn a rainy night, Rain Walker walks down the street, pushes open the gate of the Rain House, crosses the garden and knocks on the front door. I planned the scene like a film, with eight camera shots: a high crane shot to establish the house, low angles that keep the house towering behind the character, a high corner view over the wall, a tracking shot along the facade, a side shot of the knock and a final crane pull-back that reveals the whole house in the rain. Every shot frames the character and the house together, so the viewer always knows where he is. It was rendered in Eevee at 1920 × 1080, 24 fps, 37 seconds.",
    "software": [
      "Blender"
    ],
    "tags": [
      "Cinematic",
      "Blender",
      "Rain",
      "Animation",
      "College assignment"
    ],
    "thumbnail": "assets/videos/rain-house/poster.jpg",
    "video": "assets/videos/rain-house/video.mp4",
    "preview": "assets/videos/rain-house/preview.mp4",
    "gallery": [],
    "links": {},
    "featured": false,
    "order": 2
  }

  /* ---------- TEMPLATE ----------
  ,{
    id: "my-edit",
    title: "My Edit",
    category: "Edits",                  // e.g. Animation, Edits, Motion Graphics, YouTube
    year: "2026",
    status: "completed",
    duration: "1:20",
    specs: "",                           // optional small line, e.g. "4K | 24 fps"
    shortDescription: "",
    longDescription: "",
    software: ["Premiere Pro", "After Effects"],
    tags: [],
    thumbnail: "assets/videos/my-edit/poster.jpg",   // YouTube videos get a thumbnail automatically if empty
    video: "https://youtu.be/XXXXXXXXXXX",
    preview: "",
    gallery: [],
    links: {},
    featured: false,
    order: 2
  }
  -------------------------------- */
];
