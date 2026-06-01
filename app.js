const activities = [
  {
    id: 1,
    name: "Millennium Park & Cloud Gate",
    category: "outdoors",
    tags: ["Free", "Iconic"],
    blackOwned: false,
    lat: 41.8827,
    lng: -87.6233,
    neighborhood: "The Loop",
    description: "Home to the famous 'Bean' sculpture, free outdoor concerts at the Jay Pritzker Pavilion, and stunning lakefront views. A must-do arrival moment.",
    img: "https://images.unsplash.com/photo-1580130379624-3a069adbffc5?w=600&q=80",
    vibe: "📸 Photo Op · Family-Friendly"
  },
  {
    id: 2,
    name: "Art Institute of Chicago",
    category: "culture",
    tags: ["Museum", "World-Class"],
    blackOwned: false,
    lat: 41.8796,
    lng: -87.6237,
    neighborhood: "The Loop",
    description: "One of the oldest and largest art museums in the US. Houses Seurat's 'A Sunday on La Grande Jatte' and a stunning collection of African and African-American art.",
    img: "https://images.unsplash.com/photo-1575378695743-ccc9c28b6e8b?w=600&q=80",
    vibe: "🎨 Art Lover · Culture Fix"
  },
  {
    id: 3,
    name: "The 606 Trail",
    category: "outdoors",
    tags: ["Free", "Active"],
    blackOwned: false,
    lat: 41.9142,
    lng: -87.6672,
    neighborhood: "Wicker Park",
    description: "An elevated rail-trail park spanning 2.7 miles through four neighborhoods. Perfect for a morning run, bike ride, or casual stroll through street art and city views.",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
    vibe: "🚴 Active · Scenic Views"
  },
  {
    id: 4,
    name: "DuSable Black History Museum",
    category: "culture",
    tags: ["Museum", "Black History"],
    blackOwned: false,
    lat: 41.9283,
    lng: -87.6289,
    neighborhood: "Washington Park",
    description: "The oldest institution in the nation dedicated to Black history, culture, and art. Named after Jean Baptiste Point DuSable — Chicago's Black founder. Absolutely essential.",
    img: "https://images.unsplash.com/photo-1594818379496-da1e345b0ded?w=600&q=80",
    vibe: "✊🏾 Essential · Culturally Rich"
  },
  {
    id: 5,
    name: "Navy Pier",
    category: "outdoors",
    tags: ["Waterfront", "Fun"],
    blackOwned: false,
    lat: 41.8919,
    lng: -87.6051,
    neighborhood: "Streeterville",
    description: "A 50-acre entertainment venue jutting into Lake Michigan. Ferris wheel, boat tours, rooftop bars, fireworks on summer weekends, and incredible skyline shots.",
    img: "https://images.unsplash.com/photo-1549890762-0a3f8933bc81?w=600&q=80",
    vibe: "🎡 Fun · Waterfront Views"
  },
  {
    id: 6,
    name: "Bronzeville Walk of Fame",
    category: "culture",
    tags: ["Free", "Historic"],
    blackOwned: false,
    lat: 41.8376,
    lng: -87.6163,
    neighborhood: "Bronzeville",
    description: "Walk through the historic Bronzeville neighborhood honoring legends like Ida B. Wells, Louis Armstrong, and Gwendolyn Brooks. The heartbeat of Black Chicago.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    vibe: "✊🏾 Historic · Self-Guided Tour"
  },
  {
    id: 7,
    name: "Virtue Restaurant",
    category: "food",
    tags: ["Black-Owned", "Fine Dining"],
    blackOwned: true,
    lat: 41.7997,
    lng: -87.5955,
    neighborhood: "Hyde Park",
    description: "James Beard Award-nominated chef Erick Williams brings Southern hospitality to Hyde Park. Think crispy fried chicken, shrimp and grits, and a bourbon selection that hits every time.",
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",
    vibe: "🍽️ Upscale · Soul Food Elevated"
  },
  {
    id: 8,
    name: "Wicker Park Neighborhood",
    category: "shopping",
    tags: ["Trendy", "Walkable"],
    blackOwned: false,
    lat: 41.9086,
    lng: -87.6792,
    neighborhood: "Wicker Park",
    description: "Chicago's most eclectic neighborhood. Vintage shops, indie boutiques, tattoo parlors, and coffee shops on every corner. Buzz Kills, Una Mae's, and loads of weekend brunch options.",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
    vibe: "🛍️ Boutique Shopping · Brunch"
  },
  {
    id: 9,
    name: "The Riverwalk",
    category: "outdoors",
    tags: ["Free", "Scenic"],
    blackOwned: false,
    lat: 41.8876,
    lng: -87.6320,
    neighborhood: "The Loop",
    description: "A stunning 1.25-mile promenade along the Chicago River. Kayaking, outdoor dining, jazz performances, and one of the best views of Chicago's iconic architecture.",
    img: "https://images.unsplash.com/photo-1570174460-89e22bba3c47?w=600&q=80",
    vibe: "🚶 Stroll · Skyline Views"
  },
  {
    id: 10,
    name: "Soho House Chicago",
    category: "nightlife",
    tags: ["Rooftop", "Upscale"],
    blackOwned: false,
    lat: 41.8985,
    lng: -87.6503,
    neighborhood: "West Loop",
    description: "A members' club with a rooftop pool and bar that's open to hotel guests and diners. The rooftop is one of Chicago's most coveted spots for cocktails with skyline views.",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    vibe: "🍸 Rooftop · Upscale Vibes"
  },
  {
    id: 11,
    name: "Spoken Cafe",
    category: "food",
    tags: ["Black-Owned", "Brunch"],
    blackOwned: true,
    lat: 41.8361,
    lng: -87.6259,
    neighborhood: "Bronzeville",
    description: "A community hub in Bronzeville serving incredible brunch and coffee. Warm atmosphere, live music nights, and the kind of spot you'll want to come back to every morning.",
    img: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600&q=80",
    vibe: "☕ Brunch · Community Spot"
  },
  {
    id: 12,
    name: "Chicago Architecture Boat Tour",
    category: "culture",
    tags: ["Must-Do", "Educational"],
    blackOwned: false,
    lat: 41.8875,
    lng: -87.6277,
    neighborhood: "The Loop",
    description: "The best way to see Chicago. An hour on the river while a guide walks you through 50+ buildings from 40+ architectural firms. A photographer's paradise.",
    img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80",
    vibe: "⛵ Boat Tour · Architecture Nerd"
  },
  {
    id: 13,
    name: "Green Mill Jazz Club",
    category: "nightlife",
    tags: ["Historic", "Live Music"],
    blackOwned: false,
    lat: 41.9731,
    lng: -87.6594,
    neighborhood: "Uptown",
    description: "Open since 1907 — this is authentic Chicago jazz. Al Capone's old haunt. Live jazz every single night, a real speakeasy feel, and reasonable drink prices. Arrive early for good seats.",
    img: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&q=80",
    vibe: "🎷 Jazz · Historic · Intimate"
  },
  {
    id: 14,
    name: "Obama Presidential Center",
    category: "culture",
    tags: ["Historic", "Landmark"],
    blackOwned: false,
    lat: 41.7928,
    lng: -87.5978,
    neighborhood: "Jackson Park",
    description: "Under construction and opening soon in Jackson Park — the future home of Barack Obama's presidential library. The surrounding park and museum currently offer exhibits and community programming.",
    img: "https://images.unsplash.com/photo-1568096889942-6eedde686635?w=600&q=80",
    vibe: "✊🏾 Historic · Community"
  },
  {
    id: 15,
    name: "West Loop Restaurant Row",
    category: "food",
    tags: ["Foodie", "Trendy"],
    blackOwned: false,
    lat: 41.8838,
    lng: -87.6488,
    neighborhood: "West Loop",
    description: "Randolph Street aka 'Restaurant Row' is the hottest dining destination in Chicago. Girl & the Goat, Au Cheval, Roister — this is where serious foodies come to eat.",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
    vibe: "🍴 Foodie Heaven · Date Night"
  },
  {
    id: 16,
    name: "Spybar",
    category: "nightlife",
    tags: ["Nightclub", "Late Night"],
    blackOwned: false,
    lat: 41.8798,
    lng: -87.6350,
    neighborhood: "The Loop",
    description: "Underground nightclub in River North known for world-class DJs, a diverse crowd, and incredible sound. One of the best club experiences in the Midwest. Open until 4am on weekends.",
    img: "https://images.unsplash.com/photo-1571266028253-6c0b92e6d9b4?w=600&q=80",
    vibe: "🎧 Club Night · Dance Floor"
  },
  {
    id: 17,
    name: "Museum of Science & Industry",
    category: "culture",
    tags: ["Museum", "Interactive"],
    blackOwned: false,
    lat: 41.7909,
    lng: -87.5828,
    neighborhood: "Hyde Park",
    description: "One of the largest science museums in the Western Hemisphere. A real U-505 German submarine, a coal mine tour, and a full-scale space simulator. Genuinely fun for adults.",
    img: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=600&q=80",
    vibe: "🔬 Interactive · Mind-Blowing"
  },
  {
    id: 18,
    name: "Harold's Chicken Shack",
    category: "food",
    tags: ["Iconic", "Chicago Original"],
    blackOwned: true,
    lat: 41.8409,
    lng: -87.6195,
    neighborhood: "Bronzeville",
    description: "A Chicago institution since 1950. Harold's is to Chicago what In-N-Out is to California. Fried chicken with a sauce of your choice — mild, medium, or hot. A rite of passage.",
    img: "https://images.unsplash.com/photo-1626082895496-0b15b7b5e22e?w=600&q=80",
    vibe: "🍗 Chicago Classic · Late Night Eats"
  },
  {
    id: 19,
    name: "Chicago Lakefront Trail",
    category: "outdoors",
    tags: ["Free", "Active", "Scenic"],
    blackOwned: false,
    lat: 41.8977,
    lng: -87.6147,
    neighborhood: "Lakefront",
    description: "18 miles of paved trail hugging Lake Michigan from Ardmore to South Shore. Rent a Divvy bike and ride south from Navy Pier at sunrise — it doesn't get more Chicago than this.",
    img: "https://images.unsplash.com/photo-1461595383984-b44e57d9e66e?w=600&q=80",
    vibe: "🌅 Sunrise Ride · Scenic · Active"
  },
  {
    id: 20,
    name: "Toni Patisserie & Cafe",
    category: "food",
    tags: ["Brunch", "Cozy"],
    blackOwned: false,
    lat: 41.8837,
    lng: -87.6278,
    neighborhood: "The Loop",
    description: "Elegant European-style patisserie steps from Millennium Park. Exceptional pastries, wine, and weekend brunch. The vibe is sophisticated, the space is beautiful, and the food is excellent.",
    img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80",
    vibe: "🥐 Brunch · Elegant · Instagram-Worthy"
  },
  {
    id: 21,
    name: "Boleo Rooftop Bar",
    category: "nightlife",
    tags: ["Rooftop", "Latin Vibes"],
    blackOwned: false,
    lat: 41.8873,
    lng: -87.6279,
    neighborhood: "The Loop",
    description: "Rooftop Latin bar and lounge atop the Kimpton Hotel. Incredible skyline views, craft cocktails, and live DJs on weekends. The crowd is upscale, fun, and beautifully diverse.",
    img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&q=80",
    vibe: "🌃 Rooftop Cocktails · Views"
  },
  {
    id: 22,
    name: "Magnificent Mile Shopping",
    category: "shopping",
    tags: ["Flagship Stores", "Iconic"],
    blackOwned: false,
    lat: 41.8929,
    lng: -87.6247,
    neighborhood: "Magnificent Mile",
    description: "Michigan Avenue's premier shopping district. Nordstrom, Apple, Bloomingdale's, and dozens of flagship stores in one walkable stretch. Perfect for a Sunday afternoon browse.",
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80",
    vibe: "🛍️ Retail Therapy · Walkable"
  }
];

/* ── EVENTS DATA ──────────────────────────────── */
const events = [
  {
    id: 'e1',
    day: 'thu',
    dayName: 'Thu',
    dayNum: '18',
    month: 'Jun',
    title: 'Obama Presidential Center — Grand Opening Ceremony',
    time: 'All Day',
    location: 'Jackson Park, Hyde Park',
    type: 'historic',
    badges: ['historic', 'mustdo'],
    description: 'The historic dedication ceremony on the John Lewis Plaza kicks off the grand opening of the Obama Presidential Center. Barack Obama and prominent officials are expected to attend. A once-in-a-lifetime moment on Chicago\'s South Side.',
    link: 'https://www.obama.org/visit/grand-opening/',
    linkText: 'obama.org'
  },
  {
    id: 'e2',
    day: 'thu',
    dayName: 'Thu',
    dayNum: '18',
    month: 'Jun',
    title: 'Millennium Park: "Let the Spirit Out!" — Juneteenth Celebration',
    time: '6:30 PM · Jay Pritzker Pavilion',
    location: 'Millennium Park, The Loop',
    type: 'free',
    badges: ['free', 'mustdo'],
    description: 'A free outdoor concert celebrating Juneteenth featuring D-Composed and Kahil El\'Zabar\'s Ethnic Heritage Ensemble with special guests Nona Hendryx and David Murray. One of Chicago\'s best free music traditions under the stars.',
    link: 'https://www.chicago.gov/city/en/depts/dca/provdrs/attractions_eventsandexhibitions/news/2026/may/mp.html',
    linkText: 'chicago.gov'
  },
  {
    id: 'e3',
    day: 'fri',
    dayName: 'Fri',
    dayNum: '19',
    month: 'Jun',
    title: 'Obama Presidential Center — Public Opening Day',
    time: 'Opens to Public',
    location: 'Jackson Park, Hyde Park',
    type: 'historic',
    badges: ['historic', 'mustdo'],
    description: 'The Obama Presidential Center officially opens its doors on Juneteenth — its 19-acre campus includes an interactive museum, observation deck, Chicago Public Library branch, public art, playground, and landscaped park. Museum entry is ticketed; park and library are free.',
    link: 'https://www.obama.org/visit/',
    linkText: 'obama.org — book tickets'
  },
  {
    id: 'e4',
    day: 'fri',
    dayName: 'Fri',
    dayNum: '19',
    month: 'Jun',
    title: 'DuSable Museum — Juneteenth Celebration',
    time: 'All Day',
    location: 'Washington Park',
    type: 'free',
    badges: ['free', 'mustdo'],
    description: 'Free Juneteenth programming at the nation\'s oldest institution dedicated to Black history. Live music, cultural programming, food vendors, local artisans, yoga, and family activities on the museum grounds. A soulful, joyful community celebration.',
    link: 'https://dusablemuseum.org/event/juneteenth-celebration-2026/',
    linkText: 'dusablemuseum.org'
  },
  {
    id: 'e5',
    day: 'fri',
    dayName: 'Fri',
    dayNum: '19',
    month: 'Jun',
    title: 'Taste of Randolph — Opening Night',
    time: '5:00 PM – 10:00 PM',
    location: '900 W Randolph St, West Loop',
    type: 'free',
    badges: ['free'],
    description: 'The 29th annual Taste of Randolph opens on Friday night — Chicago\'s Restaurant Row transforms into a massive outdoor food and music festival. Two stages, tons of West Loop restaurants, craft cocktails, and a buzzing crowd. Free admission.',
    link: 'https://www.tasteofrandolph.org/',
    linkText: 'tasteofrandolph.org'
  },
  {
    id: 'e6',
    day: 'sat',
    dayName: 'Sat',
    dayNum: '20',
    month: 'Jun',
    title: 'R&B Music Experience: Juneteenth Celebration',
    time: '8:00 PM · Wintrust Arena',
    location: 'South Loop',
    type: 'ticketed',
    badges: ['ticketed', 'mustdo'],
    description: 'The biggest concert of the weekend. Tyrese, Tank, Tamar Braxton, Silk, and H-Town perform at Wintrust Arena in a throwback R&B celebration of Juneteenth. This one will sell out — grab tickets now.',
    link: 'https://www.ticketmaster.com/rb-music-experience-a-juneteenth-celebration-chicago-illinois-06-20-2026/event/07006495031282A4',
    linkText: 'Tickets on Ticketmaster ($82+)'
  },
  {
    id: 'e7',
    day: 'sat',
    dayName: 'Sat',
    dayNum: '20',
    month: 'Jun',
    title: 'Bronzeville History Tour — Mahogany Tours',
    time: '2-Hour Bus Tour',
    location: 'Departs from Bronzeville',
    type: 'ticketed',
    badges: ['ticketed'],
    description: 'A two-hour guided bus tour of Bronzeville stopping at landmarks and cultural sites that shaped Black Chicago. Perfect for out-of-town visitors who want a deeper understanding of the neighborhood\'s history and legacy.',
    link: 'https://www.choosechicago.com/blog/special-events/celebrate-juneteenth-in-chicago/',
    linkText: 'choosechicago.com'
  },
  {
    id: 'e8',
    day: 'sat',
    dayName: 'Sat',
    dayNum: '20',
    month: 'Jun',
    title: 'Taste of Randolph — Saturday',
    time: '12:00 PM – 10:00 PM',
    location: '900 W Randolph St, West Loop',
    type: 'free',
    badges: ['free'],
    description: 'Day two of the Taste of Randolph festival. Full afternoon and evening of food, live music on two stages, and summer vibes in the West Loop. Saturday is the biggest crowd day.',
    link: 'https://www.tasteofrandolph.org/',
    linkText: 'tasteofrandolph.org'
  },
  {
    id: 'e9',
    day: 'sat',
    dayName: 'Sat',
    dayNum: '20',
    month: 'Jun',
    title: 'Chicago Pride Fest — Day 1',
    time: '11:00 AM – 10:00 PM',
    location: 'Halsted Street, Boystown',
    type: 'free',
    badges: ['free'],
    description: 'Chicago\'s Pride Fest takes over Halsted Street in the city\'s oldest official LGBTQ+ neighborhood. Drag performances, live music, dancing, and a beautifully inclusive crowd. Free to attend.',
    link: 'https://www.choosechicago.com/articles/festivals-special-events/chicago-festival-event-guide/',
    linkText: 'choosechicago.com'
  },
  {
    id: 'e10',
    day: 'sun',
    dayName: 'Sun',
    dayNum: '21',
    month: 'Jun',
    title: 'Obama Presidential Center — Community Celebration',
    time: 'All Day',
    location: 'Jackson Park, Hyde Park',
    type: 'free',
    badges: ['free', 'mustdo'],
    description: 'Free community celebration across the Obama Presidential Center campus featuring live performances, food, art, and family activities. This is the main public celebration day — an incredible community moment.',
    link: 'https://www.obama.org/visit/grand-opening/',
    linkText: 'obama.org'
  },
  {
    id: 'e11',
    day: 'sun',
    dayName: 'Sun',
    dayNum: '21',
    month: 'Jun',
    title: 'Taste of Randolph — Sunday (Final Day)',
    time: '12:00 PM – 10:00 PM',
    location: '900 W Randolph St, West Loop',
    type: 'free',
    badges: ['free'],
    description: 'The final day of Taste of Randolph. Great for a relaxed Sunday afternoon of food and music before wrapping up the weekend. Gene Farris and DJ Heather are among the confirmed acts this year.',
    link: 'https://www.tasteofrandolph.org/',
    linkText: 'tasteofrandolph.org'
  },
  {
    id: 'e12',
    day: 'sun',
    dayName: 'Sun',
    dayNum: '21',
    month: 'Jun',
    title: 'Chicago Pride Fest — Day 2',
    time: '11:00 AM – 10:00 PM',
    location: 'Halsted Street, Boystown',
    type: 'free',
    badges: ['free'],
    description: 'Day two of Pride Fest — typically the bigger day with more entertainment, larger crowd, and the most festive energy on Halsted Street.',
    link: 'https://www.choosechicago.com/articles/festivals-special-events/chicago-festival-event-guide/',
    linkText: 'choosechicago.com'
  },
  {
    id: 'e13',
    day: 'mon',
    dayName: 'Mon',
    dayNum: '22',
    month: 'Jun',
    title: 'Millennium Park: Sheila E., Melody Angel & DJ Larz Natural',
    time: '6:30 PM · Jay Pritzker Pavilion',
    location: 'Millennium Park, The Loop',
    type: 'free',
    badges: ['free', 'mustdo'],
    description: 'End your Chicago trip the right way — a free outdoor concert at Millennium Park headlined by the legendary Sheila E. with Melody Angel and DJ Larz Natural. One of the best send-off nights you could ask for.',
    link: 'https://www.chicago.gov/city/en/depts/dca/provdrs/attractions_eventsandexhibitions/news/2026/may/mp.html',
    linkText: 'chicago.gov'
  }
];

/* ── EVENTS RENDER ────────────────────────────── */
function badgeHTML(type) {
  const map = {
    free: ['badge-free', 'FREE'],
    ticketed: ['badge-ticketed', 'TICKETED'],
    historic: ['badge-historic', 'HISTORIC'],
    mustdo: ['badge-mustdo', "DON'T MISS"]
  };
  const [cls, label] = map[type] || ['badge-free', type];
  return `<span class="event-badge ${cls}">${label}</span>`;
}

function renderEvents(filter) {
  const list = document.getElementById('events-list');
  const filtered = filter === 'all' ? events : events.filter(e => e.day === filter);
  list.innerHTML = '';
  filtered.forEach(ev => {
    const borderClass = ev.type === 'free' ? 'free-event' : ev.type === 'ticketed' ? 'ticketed-event' : 'historic-event';
    list.innerHTML += `
      <div class="event-card ${borderClass}">
        <div class="event-date-col">
          <span class="event-day-name">${ev.dayName}</span>
          <span class="event-day-num">${ev.dayNum}</span>
          <span class="event-month">${ev.month}</span>
        </div>
        <div class="event-body">
          <h3>${ev.title}</h3>
          <div class="event-meta">
            <span>🕐 ${ev.time}</span>
            <span>📍 ${ev.location}</span>
          </div>
          <p>${ev.description}</p>
          <a class="event-link" href="${ev.link}" target="_blank" rel="noopener">↗ ${ev.linkText}</a>
        </div>
        <div class="event-tags">
          ${ev.badges.map(badgeHTML).join('')}
        </div>
      </div>
    `;
  });
}

renderEvents('all');

document.getElementById('day-tabs').addEventListener('click', e => {
  const tab = e.target.closest('.day-tab');
  if (!tab) return;
  document.querySelectorAll('.day-tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  renderEvents(tab.dataset.day);
});

/* ── MAP INIT ─────────────────────────────────── */
const map = L.map('map', {
  center: [41.878, -87.630],
  zoom: 12,
  zoomControl: true
});

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 20
}).addTo(map);

const categoryColors = {
  culture:   '#9b6dff',
  food:      '#ff6b6b',
  nightlife: '#4ecdc4',
  outdoors:  '#6bcb77',
  shopping:  '#ffd166'
};

const categoryEmojis = {
  culture:   '🎨',
  food:      '🍽️',
  nightlife: '🎵',
  outdoors:  '🌿',
  shopping:  '🛍️'
};

const markers = [];

activities.forEach(act => {
  const color = categoryColors[act.category] || '#F5A623';
  const emoji = categoryEmojis[act.category] || '📍';

  const icon = L.divIcon({
    className: '',
    html: `<div style="
      width:38px;height:38px;
      background:${color};
      border:3px solid white;
      border-radius:50% 50% 50% 0;
      transform:rotate(-45deg);
      box-shadow:0 4px 12px rgba(0,0,0,0.4);
      display:flex;align-items:center;justify-content:center;
    "><span style="transform:rotate(45deg);font-size:14px;">${emoji}</span></div>`,
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -40]
  });

  const marker = L.marker([act.lat, act.lng], { icon })
    .addTo(map)
    .bindPopup(`
      <div style="min-width:200px;">
        <img src="${act.img}" style="width:100%;height:120px;object-fit:cover;border-radius:8px;margin-bottom:10px;" />
        <strong style="font-family:'Syne',sans-serif;font-size:0.95rem;color:#fff;">${act.name}</strong><br/>
        <span style="font-size:0.75rem;color:#9a9080;">📍 ${act.neighborhood}</span><br/>
        <p style="font-size:0.8rem;margin-top:6px;color:#e8e3db;">${act.description.slice(0, 100)}…</p>
      </div>
    `);

  markers.push({ marker, act });
});

/* ── CARDS RENDER ─────────────────────────────── */
const grid = document.getElementById('cards-grid');

function renderCards(filter) {
  const filtered = filter === 'all' ? activities : activities.filter(a => a.category === filter);
  grid.innerHTML = '';

  filtered.forEach(act => {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.category = act.category;

    card.innerHTML = `
      <img class="card-img" src="${act.img}" alt="${act.name}" loading="lazy" />
      <div class="card-body">
        <div class="card-tags">
          ${act.tags.map(t => `<span class="tag">${t}</span>`).join('')}
          ${act.blackOwned ? '<span class="tag tag-black">✊🏾 Black-Owned</span>' : ''}
        </div>
        <h3>${act.name}</h3>
        <p class="card-meta">📍 ${act.neighborhood} &nbsp;·&nbsp; ${act.vibe}</p>
        <p>${act.description}</p>
      </div>
    `;

    card.addEventListener('click', () => {
      map.flyTo([act.lat, act.lng], 15, { duration: 1.2 });
      document.getElementById('map-section').scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const found = markers.find(m => m.act.id === act.id);
        if (found) found.marker.openPopup();
      }, 1400);
    });

    grid.appendChild(card);
  });
}

renderCards('all');

/* ── FILTER BUTTONS ───────────────────────────── */
document.getElementById('filters').addEventListener('click', e => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;

  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const filter = btn.dataset.filter;
  renderCards(filter);

  // Also highlight matching map markers
  const color = filter === 'all' ? null : categoryColors[filter];
  markers.forEach(({ marker, act }) => {
    const opacity = (filter === 'all' || act.category === filter) ? 1 : 0.25;
    marker.setOpacity(opacity);
  });
});

/* ── MAP LEGEND ───────────────────────────────── */
const legend = L.control({ position: 'bottomright' });
legend.onAdd = function () {
  const div = L.DomUtil.create('div');
  div.style.cssText = `
    background:#1a1a1a;border:1px solid #2e2e2e;border-radius:12px;
    padding:12px 16px;font-family:'Inter',sans-serif;font-size:0.78rem;color:#e8e3db;
    box-shadow:0 4px 16px rgba(0,0,0,0.5);
  `;
  div.innerHTML = `
    <div style="font-weight:700;margin-bottom:8px;color:#F5A623;font-family:'Syne',sans-serif;">Legend</div>
    ${Object.entries(categoryColors).map(([cat, color]) =>
      `<div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
        <span style="width:12px;height:12px;background:${color};border-radius:50%;display:inline-block;"></span>
        <span style="text-transform:capitalize;">${cat}</span>
      </div>`
    ).join('')}
  `;
  return div;
};
legend.addTo(map);
