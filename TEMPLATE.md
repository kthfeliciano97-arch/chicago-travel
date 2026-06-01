# City Trip Guide — Site Template

A fully-featured, mobile-responsive travel guide website for a city trip.  
Built with plain HTML, CSS, and JavaScript — no build tools, no frameworks, no API keys required.  
Deploys for free on GitHub Pages.

---

## Current Features (as of last update)

### 🗺️ Interactive Map
- Dark-themed tile map (CARTO dark_all, free, no API key)
- Color-coded pin markers per activity category (teardrop shape)
- Square badge markers for TikTok spots (show rank number)
- Special 🏠 home marker for Airbnb/hotel
- Click any card → map flies to that location and opens popup
- Popups show: name, neighborhood, description, **address**, **phone number** (tappable on mobile)
- Interactive legend with **collapse/expand toggle**
- Legend rows are **clickable to show/hide** each category layer
- Legend auto-collapses in mobile mode

### 📅 Events / Itinerary Calendar
- 5-day week view calendar (one column per trip day)
- Curated events appear as color-coded blocks on correct day columns
- **"+ Add" button** on every day column
- Modal form: title, day selector, time, notes, color picker
- Custom events saved to **localStorage** (persist between visits)
- Hover over custom event → **delete (✕) button** appears
- **Toggle between Calendar view and List view**
- List view has day-by-day filter tabs
- Calendar scrolls horizontally on mobile (snap scroll)

### 🔥 TikTok Worthy Section
- 4 categories: Brunch · Nightlife · Lunch · [City] Eats
- Top 10 ranked list per category
- Gold/Silver/Bronze styling for ranks 1–3
- Per-card: rank, name, neighborhood, why it's viral, must-order item
- Black-owned badge where applicable
- Vibe pill tags
- Tab switcher to navigate between categories

### 🥂 Party Brunch Section
- Dedicated section separate from activities
- Cards with: image, name, neighborhood, description, vibe, tags
- Black-owned badge
- Click card → flies map to that location

### 🎯 Activities Section
- Cards grid with filter tabs: All · Culture · Food · Nightlife · Outdoors · Shopping · Brunch
- Per card: image, tags, name, neighborhood, vibe, description
- Clicking a category tab also dims non-matching map markers
- Click card → flies map to that location

### 🏘️ Neighborhoods Guide
- 6 neighborhood cards with emoji, name, and description

### 💡 Pro Tips
- 4 tip cards: Getting Around · Best Time to Visit · Stay Safe · Where to Stay

### 📱 Mobile View
- Auto-detects mobile devices (viewport width + user agent)
- Applies `body.mobile-mode` class for all mobile overrides
- **Fixed bottom navigation bar** with 5 tabs (Map · Activities · Brunch · Events · TikTok)
- Active tab highlights based on scroll position
- **View mode toggle button** (top-right, always visible)
  - Mobile → shows "🖥️ Desktop View"
  - Desktop → shows "📱 Mobile View"
  - Choice saved to localStorage
- Single-column grids on mobile
- Compact hero (70vh)
- Horizontal scroll for filter tabs and calendar
- All sections have reduced padding

### 🗂️ Page Structure (top to bottom)
1. Hero (city name, tagline, CTAs)
2. Intro strip (4 feature badges)
3. Trip dates / highlight banner
4. Map
5. TikTok Worthy (ranked lists)
6. Brunch Spotlight
7. Activities (filterable grid)
8. Events / Calendar
9. Neighborhoods Guide
10. Pro Tips
11. Footer

---

## File Overview

| File | Purpose |
|------|---------|
| `index.html` | Page structure and all section HTML |
| `style.css` | All styles — dark theme, mobile overrides, components |
| `app.js` | All data + rendering logic + map + calendar + mobile detection |
| `TEMPLATE.md` | This file — feature docs and new-city setup guide |
| `city-data-template.js` | Blank data scaffold for a new city |

---

## Design System

| Token | Value | Use |
|-------|-------|-----|
| `--gold` | `#F5A623` | Primary accent, CTAs, headings |
| `--dark` | `#0e0e0e` | Page background |
| `--dark-2` | `#1a1a1a` | Section alternating bg |
| `--dark-3` | `#242424` | Card backgrounds |
| `--dark-4` | `#2e2e2e` | Borders |
| `--text` | `#e8e3db` | Body text |
| `--text-muted` | `#9a9080` | Secondary text |
| Font (headings) | Syne 800 | Google Fonts |
| Font (body) | Inter 400/500/600 | Google Fonts |
| TikTok accent | `#ff2d55` | TikTok section only |

### Category Colors
| Category | Color | Marker Shape |
|----------|-------|--------------|
| Culture | `#9b6dff` | Teardrop pin |
| Food | `#ff6b6b` | Teardrop pin |
| Nightlife | `#4ecdc4` | Teardrop pin |
| Outdoors | `#6bcb77` | Teardrop pin |
| Shopping | `#ffd166` | Teardrop pin |
| Brunch | `#ff9a3c` | Teardrop pin |
| TikTok Brunch | `#ff9a3c` | Square badge (rank #) |
| TikTok Nightlife | `#4ecdc4` | Square badge (rank #) |
| TikTok Lunch | `#ffd166` | Square badge (rank #) |
| TikTok City Eats | `#ff6b6b` | Square badge (rank #) |
| Your Stay | `#FF5A5F` | Circle (🏠) |

---

## Setup Guide — New City

### Step 1: Clone the repo
```bash
git clone https://github.com/YOUR-USERNAME/chicago-travel.git my-city-trip
cd my-city-trip
```
Or copy all 3 source files (`index.html`, `style.css`, `app.js`) into a new folder.

### Step 2: Global find & replace
| Find | Replace with |
|------|-------------|
| `Chi-Town Guide` | `[City] Guide` (e.g. "ATL Guide") |
| `Chicago` | Your city name |
| `Juneteenth Weekend` | Your trip's highlight (or remove the banner) |
| `June 18–22, 2026` | Your trip dates |
| `Ukrainian Village / West Town` | Your Airbnb neighborhood |

### Step 3: Fill in `city-data-template.js` (see that file for field docs)
Replace data for each section in `app.js`:

- [ ] `tiktokSpots` — 4 categories × 10 ranked spots
- [ ] `tiktokMapData` — coordinates for all 40 TikTok spots
- [ ] `ttSpotInfo` — address + phone for TikTok spots
- [ ] `activities` — 20+ activities (see field reference below)
- [ ] `spotInfo` — address + phone lookup by activity id
- [ ] `events` — events during your trip (13 or however many)
- [ ] Airbnb marker coordinates (search `41.8972, -87.6671` in `app.js`)
- [ ] Map center coordinates (search `41.878, -87.630` in `app.js`)

### Step 4: Update neighborhoods section in `index.html`
Replace the 6 `.hood-card` blocks with your city's neighborhoods.

### Step 5: Update pro tips in `index.html`
Replace the 4 `.tip-card` blocks with city-specific transit/safety/stay tips.

### Step 6: Update hero text in `index.html`
- Tagline in `.hero-sub`
- CTA button text
- Hero background image URL (Unsplash search: `?w=1600&q=80`)

### Step 7: Update trip dates banner in `index.html`
Update `.jb-eyebrow`, the `<h2>`, and the description paragraph in `.jb-text`.  
Or remove the entire `<!-- JUNETEENTH BANNER -->` section if not applicable.

### Step 8: Update intro strip in `index.html`
Change the 4 `.strip-item` entries to reflect your city's highlights.

### Step 9: Deploy
```bash
git init && git add . && git commit -m "Initial [City] trip guide"
git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git
git push -u origin main
```
Then enable **Settings → Pages → Branch: main → / (root)** on GitHub.

---

## Data Structure Reference

### Activity object (used in `activities` array)
```js
{
  id: 1,                          // unique number
  name: "Place Name",
  category: "culture",            // culture | food | nightlife | outdoors | shopping | brunch
  tags: ["Free", "Iconic"],       // 2–4 short tag strings
  blackOwned: false,              // true | false
  lat: 41.8827,                   // decimal latitude
  lng: -87.6233,                  // decimal longitude
  neighborhood: "The Loop",
  description: "...",             // 1–2 sentences shown on card and popup
  img: "https://images.unsplash.com/photo-XXXXX?w=600&q=80",
  vibe: "📸 Photo Op · Family-Friendly"  // short vibe string shown on card
}
```

### spotInfo lookup (address + phone for activity popups)
```js
spotInfo = {
  1: { address: "123 Main St, City", phone: "(312) 555-0000" },
  // key = activity id
  // phone: null if unknown
}
```

### TikTok spot object (used in `tiktokSpots[category]` arrays)
```js
{
  rank: 1,                        // 1–10
  name: "Restaurant Name",
  neighborhood: "West Loop",
  why: "One sentence explaining why it's viral / TikTok-worthy.",
  mustOrder: "Signature dish name",
  blackOwned: false,
  pills: ["Tag 1", "Tag 2", "Tag 3"]  // 2–4 short descriptor pills
}
```

### TikTok map spot object (used in `tiktokMapData[category]` arrays)
```js
{
  rank: 1,
  name: "Restaurant Name",        // must match tiktokSpots name for ttSpotInfo lookup
  lat: 41.8840,
  lng: -87.6478
}
```

### ttSpotInfo lookup (address + phone for TikTok popups)
```js
ttSpotInfo = {
  "Restaurant Name": { address: "800 W Randolph St", phone: "(312) 929-4580" },
  // key = spot name (must match tiktokMapData name exactly)
}
```

### Event object (used in `events` array)
```js
{
  id: 'e1',
  day: 'thu',                     // thu | fri | sat | sun | mon (or your trip days)
  dayName: 'Thu',                 // Short day label for calendar
  dayNum: '18',                   // Day of month
  month: 'Jun',
  title: 'Event Name',
  time: '6:30 PM · Venue Name',
  location: 'Neighborhood, City',
  type: 'free',                   // free | ticketed | historic
  badges: ['free', 'mustdo'],     // free | ticketed | historic | mustdo (any combo)
  description: "...",             // 2–3 sentences
  link: 'https://...',
  linkText: 'website.com'
}
```

### Calendar day config (used in `calDays` array)
```js
{ key: 'thu', name: 'Thu', num: '18', month: 'Jun' }
// Add/remove entries to match your trip length
// key must match event.day values
```

---

## Changing Trip Length

The calendar and events system supports any number of days. To change from 5 days to a different length:

1. Update `calDays` array in `app.js` — one object per day
2. Update `events` array — use matching `day` keys
3. Update the day-tabs HTML in `index.html` — one `<button class="day-tab">` per day
4. Update the modal day `<select>` options in `index.html`

---

## Adding a New Activity Category

1. Add to `categoryColors` in `app.js`: `newcat: '#hexcolor'`
2. Add to `categoryEmojis` in `app.js`: `newcat: '🎯'`
3. Add to `activityLabels` in `app.js` (for legend): `newcat: { label: 'Label', emoji: '🎯' }`
4. Add `initGroup('newcat')` call in the group registry section
5. Add a filter button in `index.html`: `<button class="filter-btn" data-filter="newcat">Label</button>`
6. Add activities with `category: "newcat"` to the `activities` array

---

## Updating This Template

When a new feature is added to the site:
- Add it to the **Current Features** checklist above
- Add its data structure to the **Data Structure Reference** section
- Update the **Setup Guide** checklist if it requires new city-specific data
- Run: `git add TEMPLATE.md city-data-template.js && git commit -m "Update template: [feature name]"`
