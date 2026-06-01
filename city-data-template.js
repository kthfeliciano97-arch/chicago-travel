/**
 * CITY TRIP GUIDE — DATA TEMPLATE
 * =================================
 * Copy this file's contents into app.js for a new city.
 * Replace every REPLACE: comment with your city's data.
 * Delete this comment block when done.
 *
 * QUICK START:
 *   1. Ctrl+F  "REPLACE:"  to jump to every field that needs updating
 *   2. Fill in coordinates using Google Maps (right-click → copy coordinates)
 *   3. Find addresses/phones on Google Maps or the business website
 *   4. Find Unsplash photos: https://unsplash.com/search/photos/CITY-NAME
 */

/* ─────────────────────────────────────────────────
   SECTION 1 — MAP CENTER & AIRBNB MARKER
   Replace these two values in app.js
   ───────────────────────────────────────────────── */

const MAP_CENTER    = [00.0000, -00.0000]; // REPLACE: [lat, lng] city center
const MAP_ZOOM      = 12;                  // REPLACE: 11–13 works for most cities
const AIRBNB_LAT    = 00.0000;             // REPLACE: your accommodation latitude
const AIRBNB_LNG    = -00.0000;            // REPLACE: your accommodation longitude
const AIRBNB_HOOD   = "Neighborhood Name"; // REPLACE: neighborhood name for popup


/* ─────────────────────────────────────────────────
   SECTION 2 — ACTIVITIES (20+ recommended)
   category options: culture | food | nightlife | outdoors | shopping | brunch
   ───────────────────────────────────────────────── */

const activities = [
  {
    id: 1,
    name: "REPLACE: Activity Name",
    category: "culture",              // REPLACE: category slug
    tags: ["Free", "Iconic"],         // REPLACE: 2–4 short tags
    blackOwned: false,                // REPLACE: true | false
    lat: 00.0000,                     // REPLACE: latitude
    lng: -00.0000,                    // REPLACE: longitude
    neighborhood: "REPLACE: Neighborhood",
    description: "REPLACE: 1–2 sentence description shown on card and map popup.",
    img: "https://images.unsplash.com/photo-REPLACE?w=600&q=80", // REPLACE: Unsplash URL
    vibe: "📸 REPLACE: Short · Vibe · String"
  },
  {
    id: 2,
    name: "REPLACE: Activity Name",
    category: "food",
    tags: ["Black-Owned", "Iconic"],
    blackOwned: true,
    lat: 00.0000,
    lng: -00.0000,
    neighborhood: "REPLACE: Neighborhood",
    description: "REPLACE: Description.",
    img: "https://images.unsplash.com/photo-REPLACE?w=600&q=80",
    vibe: "🍽️ REPLACE: Vibe"
  },
  // ... add 18+ more following the same structure
];


/* ─────────────────────────────────────────────────
   SECTION 3 — SPOT DETAILS (address + phone for map popups)
   Key = activity id from activities array above
   phone: null if unknown
   ───────────────────────────────────────────────── */

const spotInfo = {
  1: { address: "REPLACE: 123 Main St, City", phone: "REPLACE: (555) 000-0000" },
  2: { address: "REPLACE: 456 Oak Ave, City", phone: null },
  // ... add entries for each activity id that has a known address
};


/* ─────────────────────────────────────────────────
   SECTION 4 — TIKTOK WORTHY: RANKED LISTS
   4 categories, 10 spots each
   ───────────────────────────────────────────────── */

const tiktokSpots = {

  brunch: [
    {
      rank: 1,
      name: "REPLACE: Restaurant Name",
      neighborhood: "REPLACE: Neighborhood",
      why: "REPLACE: One sentence explaining why this is TikTok-viral. What dish or experience goes viral?",
      mustOrder: "REPLACE: Signature dish name",
      blackOwned: false,             // REPLACE: true | false
      pills: ["Viral Dish", "Black-Owned", "Weekend Waits"] // REPLACE: 2–4 descriptor pills
    },
    // ... ranks 2–10 following the same structure
  ],

  nightlife: [
    {
      rank: 1,
      name: "REPLACE: Venue Name",
      neighborhood: "REPLACE: Neighborhood",
      why: "REPLACE: Why is this venue viral / most talked about?",
      mustOrder: "REPLACE: Signature drink or experience",
      blackOwned: false,
      pills: ["Celebrity Spot", "Rooftop", "Bottle Service"]
    },
    // ... ranks 2–10
  ],

  lunch: [
    {
      rank: 1,
      name: "REPLACE: Restaurant Name",
      neighborhood: "REPLACE: Neighborhood",
      why: "REPLACE: Why is this a must-do lunch spot?",
      mustOrder: "REPLACE: Best menu item",
      blackOwned: false,
      pills: ["Most Viral Dish", "James Beard", "Always a Wait"]
    },
    // ... ranks 2–10
  ],

  chicagoeats: [
    // REPLACE "chicagoeats" key with your city: e.g. "atlantaeats", "nyceats", "miamieats"
    // Also update the tab button in index.html: data-cat="YOURCITYEATS"
    // And update the tab label: "🍕 [City] Eats"
    {
      rank: 1,
      name: "REPLACE: Iconic local dish / restaurant",
      neighborhood: "REPLACE: Neighborhood",
      why: "REPLACE: Why is this THE iconic food experience of your city?",
      mustOrder: "REPLACE: The dish",
      blackOwned: false,
      pills: ["City Icon", "Since YEAR", "Viral"]
    },
    // ... ranks 2–10
  ]
};


/* ─────────────────────────────────────────────────
   SECTION 5 — TIKTOK MAP DATA (coordinates for map pins)
   name must EXACTLY match the name in tiktokSpots above
   ───────────────────────────────────────────────── */

const tiktokMapData = {
  brunch: [
    { rank: 1,  name: "REPLACE: Restaurant Name", lat: 00.0000, lng: -00.0000 },
    { rank: 2,  name: "REPLACE: Restaurant Name", lat: 00.0000, lng: -00.0000 },
    { rank: 3,  name: "REPLACE: Restaurant Name", lat: 00.0000, lng: -00.0000 },
    { rank: 4,  name: "REPLACE: Restaurant Name", lat: 00.0000, lng: -00.0000 },
    { rank: 5,  name: "REPLACE: Restaurant Name", lat: 00.0000, lng: -00.0000 },
    { rank: 6,  name: "REPLACE: Restaurant Name", lat: 00.0000, lng: -00.0000 },
    { rank: 7,  name: "REPLACE: Restaurant Name", lat: 00.0000, lng: -00.0000 },
    { rank: 8,  name: "REPLACE: Restaurant Name", lat: 00.0000, lng: -00.0000 },
    { rank: 9,  name: "REPLACE: Restaurant Name", lat: 00.0000, lng: -00.0000 },
    { rank: 10, name: "REPLACE: Restaurant Name", lat: 00.0000, lng: -00.0000 },
  ],
  nightlife: [
    { rank: 1,  name: "REPLACE: Venue Name", lat: 00.0000, lng: -00.0000 },
    { rank: 2,  name: "REPLACE: Venue Name", lat: 00.0000, lng: -00.0000 },
    { rank: 3,  name: "REPLACE: Venue Name", lat: 00.0000, lng: -00.0000 },
    { rank: 4,  name: "REPLACE: Venue Name", lat: 00.0000, lng: -00.0000 },
    { rank: 5,  name: "REPLACE: Venue Name", lat: 00.0000, lng: -00.0000 },
    { rank: 6,  name: "REPLACE: Venue Name", lat: 00.0000, lng: -00.0000 },
    { rank: 7,  name: "REPLACE: Venue Name", lat: 00.0000, lng: -00.0000 },
    { rank: 8,  name: "REPLACE: Venue Name", lat: 00.0000, lng: -00.0000 },
    { rank: 9,  name: "REPLACE: Venue Name", lat: 00.0000, lng: -00.0000 },
    { rank: 10, name: "REPLACE: Venue Name", lat: 00.0000, lng: -00.0000 },
  ],
  lunch: [
    { rank: 1,  name: "REPLACE: Restaurant Name", lat: 00.0000, lng: -00.0000 },
    { rank: 2,  name: "REPLACE: Restaurant Name", lat: 00.0000, lng: -00.0000 },
    { rank: 3,  name: "REPLACE: Restaurant Name", lat: 00.0000, lng: -00.0000 },
    { rank: 4,  name: "REPLACE: Restaurant Name", lat: 00.0000, lng: -00.0000 },
    { rank: 5,  name: "REPLACE: Restaurant Name", lat: 00.0000, lng: -00.0000 },
    { rank: 6,  name: "REPLACE: Restaurant Name", lat: 00.0000, lng: -00.0000 },
    { rank: 7,  name: "REPLACE: Restaurant Name", lat: 00.0000, lng: -00.0000 },
    { rank: 8,  name: "REPLACE: Restaurant Name", lat: 00.0000, lng: -00.0000 },
    { rank: 9,  name: "REPLACE: Restaurant Name", lat: 00.0000, lng: -00.0000 },
    { rank: 10, name: "REPLACE: Restaurant Name", lat: 00.0000, lng: -00.0000 },
  ],
  chicagoeats: [
    // REPLACE key name to match your city (e.g. atlantaeats)
    { rank: 1,  name: "REPLACE: Iconic Spot", lat: 00.0000, lng: -00.0000 },
    { rank: 2,  name: "REPLACE: Iconic Spot", lat: 00.0000, lng: -00.0000 },
    { rank: 3,  name: "REPLACE: Iconic Spot", lat: 00.0000, lng: -00.0000 },
    { rank: 4,  name: "REPLACE: Iconic Spot", lat: 00.0000, lng: -00.0000 },
    { rank: 5,  name: "REPLACE: Iconic Spot", lat: 00.0000, lng: -00.0000 },
    { rank: 6,  name: "REPLACE: Iconic Spot", lat: 00.0000, lng: -00.0000 },
    { rank: 7,  name: "REPLACE: Iconic Spot", lat: 00.0000, lng: -00.0000 },
    { rank: 8,  name: "REPLACE: Iconic Spot", lat: 00.0000, lng: -00.0000 },
    { rank: 9,  name: "REPLACE: Iconic Spot", lat: 00.0000, lng: -00.0000 },
    { rank: 10, name: "REPLACE: Iconic Spot", lat: 00.0000, lng: -00.0000 },
  ]
};


/* ─────────────────────────────────────────────────
   SECTION 6 — TIKTOK SPOT DETAILS (address + phone for map popups)
   Key = spot name (must exactly match tiktokMapData name)
   ───────────────────────────────────────────────── */

const ttSpotInfo = {
  "REPLACE: Restaurant Name": { address: "REPLACE: 123 Main St",    phone: "REPLACE: (555) 000-0000" },
  "REPLACE: Restaurant Name": { address: "REPLACE: 456 Oak Ave",    phone: null },
  // ... one entry per unique spot name across all 4 categories
};


/* ─────────────────────────────────────────────────
   SECTION 7 — BRUNCH SPOTLIGHT (dedicated brunch section)
   These also appear in activities array under category: "brunch"
   Add them to activities array above AND reference them here
   ───────────────────────────────────────────────── */

// Brunch spots are pulled automatically from activities where category === "brunch"
// Just make sure your brunch activity entries above have:
//   category: "brunch"
//   blackOwned: true/false
//   tags: [...]
//   vibe: "..."
// No separate data needed here.


/* ─────────────────────────────────────────────────
   SECTION 8 — TRIP EVENTS (calendar + list view)
   day values must match calDays keys below
   type: free | ticketed | historic
   badges: any combo of free | ticketed | historic | mustdo
   ───────────────────────────────────────────────── */

const events = [
  {
    id: 'e1',
    day: 'thu',                        // REPLACE: must match a key in calDays
    dayName: 'Thu',                    // REPLACE: short display name
    dayNum: '18',                      // REPLACE: day of month
    month: 'Jun',                      // REPLACE: month abbreviation
    title: 'REPLACE: Event Name',
    time: 'REPLACE: 7:00 PM · Venue',
    location: 'REPLACE: Neighborhood, City',
    type: 'free',                      // REPLACE: free | ticketed | historic
    badges: ['free', 'mustdo'],        // REPLACE: choose from free | ticketed | historic | mustdo
    description: 'REPLACE: 2–3 sentence description of the event.',
    link: 'https://REPLACE.com',
    linkText: 'REPLACE: website.com'
  },
  // ... add one object per event across all trip days
];


/* ─────────────────────────────────────────────────
   SECTION 9 — CALENDAR DAYS
   One entry per day of the trip
   key must match event.day values above
   ───────────────────────────────────────────────── */

const calDays = [
  { key: 'thu', name: 'Thu', num: '18', month: 'Jun' }, // REPLACE all values
  { key: 'fri', name: 'Fri', num: '19', month: 'Jun' },
  { key: 'sat', name: 'Sat', num: '20', month: 'Jun' },
  { key: 'sun', name: 'Sun', num: '21', month: 'Jun' },
  { key: 'mon', name: 'Mon', num: '22', month: 'Jun' },
  // Add or remove days as needed. Also update index.html:
  //   - day-tabs buttons (one per day)
  //   - modal <select> options (one per day)
];


/* ─────────────────────────────────────────────────
   HTML REPLACEMENTS CHECKLIST (in index.html)
   ───────────────────────────────────────────────── */

/*
  <title>                     → "[City] Guide — [Tagline]"
  .hero h1                    → "[City] <span class="accent">Guide</span>"
  .hero-sub                   → Your city tagline / description
  .hero-eyebrow               → "Your Weekend Starts Here" or custom
  .jb-eyebrow                 → "[Date Range] · Your Trip Dates"
  .jb-text h2                 → Your trip's highlight/theme
  .jb-text p                  → Description of why this trip is special
  .jb-badge                   → Trip theme emoji + label
  .strip-item (×4)            → Your city's 4 highlight badges
  .hood-card (×6)             → Your city's 6 key neighborhoods
  .tip-card (×4)              → City-specific transit, safety, stay, timing tips
  .footer-sub                 → "Made with love for the culture. [City], [State]."
  tt-tab data-cat="chicagoeats" → data-cat="[YOURCITY]eats"
  tt-tab label "🍕 Chicago Eats" → "🍕 [City] Eats"
  hero background image URL   → Unsplash city skyline photo
*/
