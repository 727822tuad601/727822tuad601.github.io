/* =====================================================================
   PROFILE — your name, bio, skills, education, contact and socials.
   Edit the text between the quotes. Save. Refresh the site. Done.
   Any field left as "" (empty) is simply hidden on the site.
   ===================================================================== */

window.PORTFOLIO = window.PORTFOLIO || {};
PORTFOLIO.profile = {
  name: "Akash G",
  shortName: "AKASH",          // big hero word (line 1)
  initial: "G.",               // big hero word (line 2, outlined)
  location: "Bangalore — Coimbatore",

  // Words that type themselves after "I'm a ..."
  roles: ["Game Designer", "3D Modeler", "Content Creator", "Youtuber", "Script Writer"],

  // Short line under your name in the hero
  tagline:
    "B.Tech AI & Data Science → MA Interactive Game Art Design & Development. Where data-driven design intuition meets visual storytelling.",

  // Full bio (About section). Use \n\n for a new paragraph.
  bio:
    "A B.Tech Artificial Intelligence & Data Science graduate currently specializing in an MA in Interactive Game Art Design & Development. I leverage analytical logic and system mechanics to design engaging gameplay, while sculpting the vibrant 2D and 3D visual styles that bring those worlds to life. My portfolio is a showcase of where data-driven design intuition meets visual storytelling.",

  // Big statement in About. Words wrapped in *stars* turn red.
  statement:
    "I use *analytical logic* and system mechanics to design engaging gameplay, and sculpt the *2D and 3D worlds* that bring it to life.",

  // Your photo for the About section. Put the file in assets/images/ and write its path,
  // e.g. "assets/images/profile.jpg". Leave "" to show the placeholder frame.
  photo: "assets/images/profile.jpg",

  // Software / skills. "icon" = a Simple Icons name (https://simpleicons.org). Leave "" for a letter badge.
  software: [
    { name: "Maya", icon: "autodeskmaya" },
    { name: "Blender", icon: "blender" },
    { name: "Unreal Engine 5", icon: "unrealengine" },
    { name: "Unity", icon: "unity" },
    { name: "ZBrush", icon: "" },
    { name: "Photoshop", icon: "adobephotoshop" },
    { name: "Premiere Pro", icon: "adobepremierepro" },
    { name: "Illustrator", icon: "adobeillustrator" },
    { name: "VS Code", icon: "visualstudiocode" }
  ],

  // Extra skills shown as tags (optional)
  skills: ["Game Design", "3D Modeling", "Frame-by-Frame Animation", "Video Editing", "Script Writing", "Content Creation"],

  education: [
    { years: "2025 — 2027", title: "M.A IGADD (Game Design)", place: "Jain University, Bangalore" },
    { years: "2022 — 2025", title: "B.Tech AI & DS", place: "SKCT, Coimbatore" },
    { years: "2018 — 2022", title: "Diploma in ECE", place: "SKPTC, Coimbatore" }
  ],

  // Experience (optional) — same shape as education. Leave [] to hide.
  experience: [],

  resume: {
    image: "assets/images/resume.jpg",   // preview / download
    pdf: "",                              // optional: assets/resume.pdf or a Google Drive link
    qr: "assets/images/qr-resume.png",
    qrLink: "https://q.me-qr.com/qbb9qd5i"
  },

  contact: {
    email: "akashgopalakrishnan2409@gmail.com",
    whatsapp: "916383784074",   // digits only, with country code. "" hides the button
    phoneDisplay: "",           // e.g. "+91 63837 84074" to show the number as text. "" keeps it hidden
    portfolioQr: "assets/images/qr-portfolio.png"
  },

  socials: [
    { name: "LinkedIn",  url: "https://www.linkedin.com/in/akash-g-4a7846422/", icon: "fa-brands fa-linkedin-in", handle: "Akash G" },
    { name: "GitHub",    url: "https://github.com/727822tuad601",               icon: "fa-brands fa-github",      handle: "727822tuad601" },
    { name: "Instagram", url: "https://www.instagram.com/akash.g.offl",          icon: "fa-brands fa-instagram",   handle: "@akash.g.offl" },
    { name: "X",         url: "https://x.com/akash747633",                       icon: "fa-brands fa-x-twitter",   handle: "@akash747633" },
    { name: "YouTube",   url: "https://youtube.com/@13boyzpictures",             icon: "fa-brands fa-youtube",     handle: "13 Boyz Pictures" }
  ]
};
