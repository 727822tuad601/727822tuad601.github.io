/* =====================================================================
   SITE SETTINGS — section names, intros, colours, SEO.
   Rename any section here; the menu and headings update automatically.
   Set  show: false  to hide a whole section.
   ===================================================================== */

window.PORTFOLIO = window.PORTFOLIO || {};
PORTFOLIO.site = {
  accent: "#ff4b2b",            // main accent colour (dark theme)
  accentLight: "#e0381c",       // accent colour for the light theme
  defaultTheme: "dark",         // "dark" | "light"

  loaderText: "Compiling the world",
  heroHint: "Live scene — scroll to fly through",

  sections: [
    { id: "models",   level: "01", menu: "Models",   label: "3D Models",       title: "Exhibits.",        intro: "Real-time models you can orbit, zoom and inspect in wireframe. Click any exhibit to open it full-screen.", show: true },
    { id: "games",    level: "02", menu: "Games",    label: "Games",           title: "Playable.",        intro: "Each game opens its own page: trailer, screenshots, features and every download link.", show: true },
    { id: "reels",    level: "03", menu: "Reels",    label: "Video & Animation", title: "Moving pictures.", intro: "Hover to preview. Click for the cinematic full-screen player.", show: true },
    { id: "upcoming", level: "04", menu: "Upcoming", label: "Upcoming",        title: "Loading…",         intro: "Work in progress and what's coming next.", show: true },
    { id: "about",    level: "05", menu: "About",    label: "About",           title: "Player profile.",  intro: "", show: true },
    { id: "contact",  level: "06", menu: "Contact",  label: "Game over? Not yet.", title: "Let's build a world.", intro: "", show: true }
  ],

  footerNote: "Built as a world, not a page",

  // Turn effects off here if you ever need to
  effects: {
    smoothScroll: true,
    customCursor: true,
    hero3D: true,
    grain: true
  }
};
