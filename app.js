/* ── TIKTOK RANKED DATA ───────────────────────── */
const tiktokSpots = {
  brunch: [
    {
      rank: 1, name: "Batter & Berries", neighborhood: "Lincoln Park",
      why: "The French Toast Flight is one of the most photographed dishes in all of Chicago. Four flavors on one plate — Blueberry, Strawberry, Lemon, and Caramel. Everyone who visits posts it.",
      mustOrder: "French Toast Flight", blackOwned: true,
      pills: ["Most Photographed Dish", "Black-Owned", "Weekend Waits"]
    },
    {
      rank: 2, name: "The Duplex", neighborhood: "Logan Square",
      why: "Chicago's hottest Black-owned brunch party. Resident DJs, bottomless mimosas, and a crowd that's dressed up and ready. Saturdays here look like a music video.",
      mustOrder: "Chicken & Waffles + Bottomless Mimosas", blackOwned: true,
      pills: ["DJ Brunch", "Black-Owned", "Party Vibes"]
    },
    {
      rank: 3, name: "Brûlée Chicago", neighborhood: "South Loop",
      why: "Went viral on TikTok for their torched crème brûlée French toast and theatrical tableside presentations. The visual factor is off the charts.",
      mustOrder: "Crème Brûlée French Toast", blackOwned: true,
      pills: ["Viral Dish", "Tableside Theater", "Black-Owned"]
    },
    {
      rank: 4, name: "Chemistry", neighborhood: "Hyde Park",
      why: "21+ upscale buffet brunch with live music, made-to-order steaks, and interiors that beg to be on camera. The most elevated brunch experience on the South Side.",
      mustOrder: "Made-to-Order Steak + Bottomless Mimosas", blackOwned: true,
      pills: ["21+", "Live Music", "Upscale", "Black-Owned"]
    },
    {
      rank: 5, name: "Luella's Southern Kitchen", neighborhood: "Lincoln Square",
      why: "Comfort food done beautifully. Known for their hot chicken, shrimp & grits, and a Southern hospitality vibe that keeps people coming back and posting.",
      mustOrder: "Hot Chicken Biscuit", blackOwned: true,
      pills: ["Soul Food", "Black-Owned", "Comfort Classics"]
    },
    {
      rank: 6, name: "Beatnik on the River", neighborhood: "West Loop",
      why: "Mediterranean brunch on the Chicago River with stunning water views and a globally inspired menu. The aesthetic alone earns every post.",
      mustOrder: "Shakshuka + River View Table", blackOwned: false,
      pills: ["Riverfront Views", "Mediterranean", "Aesthetic"]
    },
    {
      rank: 7, name: "Hubbard Inn", neighborhood: "River North",
      why: "Tulum-inspired decor, live DJ every Saturday and Sunday, bottomless options, and a sleek crowd. One of the most posted brunch spots in the city.",
      mustOrder: "Cowboy Steak & Eggs", blackOwned: false,
      pills: ["DJ", "Bottomless", "Tulum Vibes"]
    },
    {
      rank: 8, name: "The Brunchery", neighborhood: "Lincoln Park",
      why: "One of Chicago's most reviewed brunch spots. Consistently packed, consistently posting-worthy, with creative cocktails and elevated diner food.",
      mustOrder: "Lobster Benedict", blackOwned: true,
      pills: ["Black-Owned", "Creative Cocktails", "Always Buzzing"]
    },
    {
      rank: 9, name: "Spoken Cafe", neighborhood: "Bronzeville",
      why: "Community coffee shop turned cultural hub. Live music nights, art on the walls, and a brunch menu rooted in the neighborhood's soul. A Bronzeville institution.",
      mustOrder: "House Coffee + Weekend Brunch Plate", blackOwned: true,
      pills: ["Black-Owned", "Community Spot", "Live Music"]
    },
    {
      rank: 10, name: "Virtue Restaurant", neighborhood: "Hyde Park",
      why: "James Beard Award-nominated and Southern as it gets. Chef Erick Williams' brunch draws food writers, celebrities, and anyone who knows good food.",
      mustOrder: "Fried Chicken + Honey Biscuits", blackOwned: true,
      pills: ["James Beard", "Black-Owned", "Celebrity Approved"]
    }
  ],
  nightlife: [
    {
      rank: 1, name: "TAO Chicago", neighborhood: "River North",
      why: "A pan-Asian mega-club in a historic building. Celebrity sightings, bottle service, and an atmosphere that looks cinematic on camera. The most posted nightlife spot in Chicago.",
      mustOrder: "Sake Bottle Service", blackOwned: false,
      pills: ["Celebrity Spot", "Bottle Service", "Mega-Club"]
    },
    {
      rank: 2, name: "HUE Chicago", neighborhood: "River North",
      why: "The go-to spot for young Black professionals in Chicago. Hip-hop, R&B, diverse crowd, and bottle deals that make every Saturday feel like a celebration.",
      mustOrder: "VIP Section + Bottle", blackOwned: false,
      pills: ["Hip-Hop & R&B", "Diverse Crowd", "Saturday Night"]
    },
    {
      rank: 3, name: "Spybar", neighborhood: "River North",
      why: "Underground basement club under the L tracks. World-class house DJs, a crowd that actually dances, and a sound system that hits. Open until 4AM on weekends.",
      mustOrder: "Dance Floor + Late Night Energy", blackOwned: false,
      pills: ["House DJs", "Open Until 4AM", "Underground"]
    },
    {
      rank: 4, name: "Boleo Rooftop Bar", neighborhood: "The Loop",
      why: "Rooftop Latin bar atop the Kimpton Gray Hotel. Skyline views, craft cocktails, live DJs on weekends, and a crowd that's upscale and diverse. Pure Chicago skyline content.",
      mustOrder: "Signature Margarita + Skyline View", blackOwned: false,
      pills: ["Rooftop", "Skyline Views", "Latin Vibes"]
    },
    {
      rank: 5, name: "Cindy's Rooftop", neighborhood: "The Loop",
      why: "Perched atop the Chicago Athletic Association Hotel overlooking Millennium Park. The view of the Bean and the lake is unlike anything else. The most photographed rooftop in Chicago.",
      mustOrder: "Any cocktail + The View", blackOwned: false,
      pills: ["Most Photographed View", "Rooftop", "Upscale"]
    },
    {
      rank: 6, name: "Goodnight John Boy", neighborhood: "Pilsen",
      why: "Went viral for its disco-throwback energy, mirror balls, and inclusive crowd. Unpretentious, fun, and the kind of place where everyone ends up dancing.",
      mustOrder: "Disco Fries + Dance Floor", blackOwned: false,
      pills: ["Disco Vibes", "Viral TikTok", "Dance Night"]
    },
    {
      rank: 7, name: "Green Mill Jazz Club", neighborhood: "Uptown",
      why: "Operating since 1907. Authentic underground jazz, Al Capone's old booth, and a speakeasy feel you can't manufacture. One of the most atmospheric nightlife spots in America.",
      mustOrder: "Whiskey Old Fashioned + Front Row Seat", blackOwned: false,
      pills: ["Historic", "Live Jazz", "Speakeasy Feel"]
    },
    {
      rank: 8, name: "Soho House Chicago", neighborhood: "West Loop",
      why: "The rooftop pool bar is Chicago's most exclusive summer scene. Creative crowd, beautiful people, and a skyline view that makes every shot look editorial.",
      mustOrder: "Pool Bar Cocktail", blackOwned: false,
      pills: ["Exclusive", "Rooftop Pool", "Creative Crowd"]
    },
    {
      rank: 9, name: "Hubbard Inn", neighborhood: "River North",
      why: "Three floors of nightlife in one building — rooftop bar, main floor lounge, and Key Club nightclub. One venue for the whole night, beloved by the young professional crowd.",
      mustOrder: "Whiskey at the Bar + Move to Key Club", blackOwned: false,
      pills: ["Multi-Level", "Young Professionals", "DJ"]
    },
    {
      rank: 10, name: "Scarlett Bar", neighborhood: "Boystown",
      why: "High-energy dance bar in Chicago's most welcoming neighborhood. Inclusive, fun, and the kind of night out where you dance until close with strangers who become friends.",
      mustOrder: "Dance Floor Energy", blackOwned: false,
      pills: ["Inclusive", "Dance Bar", "Boystown"]
    }
  ],
  lunch: [
    {
      rank: 1, name: "Au Cheval", neighborhood: "West Loop",
      why: "Home to one of the most viral burgers in America. The double cheeseburger has been featured in every major food publication and never stops trending. Expect a wait — it is worth it.",
      mustOrder: "Double Cheeseburger + Fried Egg", blackOwned: false,
      pills: ["Most Viral Burger", "James Beard", "Always a Wait"]
    },
    {
      rank: 2, name: "Girl & the Goat", neighborhood: "West Loop",
      why: "Stephanie Izard's legendary West Loop restaurant. The wood-roasted pig face and goat empanadas have been on more food TikToks than almost anything in Chicago.",
      mustOrder: "Wood Roasted Pig Face", blackOwned: false,
      pills: ["Top Chef Winner", "West Loop Icon", "Viral Dishes"]
    },
    {
      rank: 3, name: "J.P. Graziano Grocery", neighborhood: "West Loop",
      why: "A century-old Italian deli making what The Infatuation calls one of Chicago's best sandwiches. The GTP sub is a Chicago lunch institution that keeps going viral.",
      mustOrder: "GTP Italian Sub", blackOwned: false,
      pills: ["100 Year Old Deli", "Infatuation 9.2", "Iconic Sandwich"]
    },
    {
      rank: 4, name: "Monteverde", neighborhood: "West Loop",
      why: "Best Italian restaurant in Chicago. Lunch is more accessible than dinner and the handmade pasta is some of the best you'll have anywhere in the country.",
      mustOrder: "Cacio Whey Pepe + Any Pasta", blackOwned: false,
      pills: ["Best Italian", "Handmade Pasta", "James Beard"]
    },
    {
      rank: 5, name: "Garifuna Flava", neighborhood: "Rogers Park",
      why: "Chicago's only Garifuna restaurant. Viral for its unique Caribbean-Central American fusion flavors that you can't get anywhere else in the country. A total hidden gem.",
      mustOrder: "Hudut (Coconut Fish Stew)", blackOwned: true,
      pills: ["Unique Cuisine", "Hidden Gem", "Black-Owned"]
    },
    {
      rank: 6, name: "Beatrix", neighborhood: "River North",
      why: "The city's most popular power lunch spot. Clean, well-executed food with a stunning interior. The grain bowls and avocado toast go viral constantly for good reason.",
      mustOrder: "Grain Bowl + Matcha Latte", blackOwned: false,
      pills: ["Power Lunch", "Aesthetic Interior", "Healthy Options"]
    },
    {
      rank: 7, name: "Santa Masa Tamaleria", neighborhood: "Pilsen",
      why: "Hand-made tamales that went viral for their texture and depth of flavor. A tiny spot with a massive following and one of Chicago's most beloved Mexican lunch experiences.",
      mustOrder: "Red Pork Tamale + Atole", blackOwned: false,
      pills: ["Viral Tamales", "Hidden Gem", "Authentic Mexican"]
    },
    {
      rank: 8, name: "Bocadillo Market", neighborhood: "West Town",
      why: "Spanish-inspired sandwiches and tapas in a gorgeous market setting. The pan con tomate alone is worth the visit and has been posted thousands of times.",
      mustOrder: "Pan con Tomate + Jamón Bocadillo", blackOwned: false,
      pills: ["Spanish Market", "Viral Sandwiches", "Great Aesthetic"]
    },
    {
      rank: 9, name: "Galit", neighborhood: "Lincoln Park",
      why: "Michelin-starred Israeli restaurant. The hummus with lamb and their pita have a cult following and regularly blow up on food TikTok as must-try Chicago dishes.",
      mustOrder: "Hummus + Lamb + Pita", blackOwned: false,
      pills: ["Michelin Star", "Middle Eastern", "Cult Hummus"]
    },
    {
      rank: 10, name: "Publican Quality Meats", neighborhood: "West Loop",
      why: "Butcher shop meets sandwich counter. The butcher's ham and gruyère sandwich has been called one of the best in the city. Lunch here always looks incredible on camera.",
      mustOrder: "Butcher's Ham & Gruyère", blackOwned: false,
      pills: ["Butcher Counter", "Best Sandwiches", "West Loop"]
    }
  ],
  chicagoeats: [
    {
      rank: 1, name: "Au Cheval — The Cheeseburger", neighborhood: "West Loop",
      why: "Repeatedly crowned one of the best burgers in America. The double smash patty with house sauce is a Chicago food rite of passage. If you eat one thing — this is it.",
      mustOrder: "Double Cheeseburger", blackOwned: false,
      pills: ["#1 Burger in America", "Always Trending", "Iconic"]
    },
    {
      rank: 2, name: "Lou Malnati's", neighborhood: "Multiple Locations",
      why: "Chicago's most iconic deep-dish pizzeria. The butter crust, vine-ripened tomato sauce, and sausage patty are legendary. Their Italian Beef Deep Dish combo recently went mega-viral.",
      mustOrder: "Deep Dish Sausage Pizza", blackOwned: false,
      pills: ["Deep Dish Icon", "Butter Crust", "Chicago Legend"]
    },
    {
      rank: 3, name: "Al's #1 Italian Beef", neighborhood: "Multiple Locations",
      why: "The original Italian beef stand, open since 1938. Made famous worldwide by the show 'The Bear.' Order it dipped, hot. Every food creator who visits Chicago comes here first.",
      mustOrder: "Italian Beef — Dipped, Hot", blackOwned: false,
      pills: ["The Bear Famous", "Since 1938", "Chicago Original"]
    },
    {
      rank: 4, name: "Harold's Chicken Shack", neighborhood: "Bronzeville",
      why: "A Chicago institution since 1950. The fried chicken with mild or hot sauce on top of white bread is a cultural touchstone. Featured in rap lyrics, TV shows, and a million food posts.",
      mustOrder: "2-Piece Dark with Mild Sauce", blackOwned: true,
      pills: ["Black-Owned", "Since 1950", "Chicago Culture"]
    },
    {
      rank: 5, name: "Portillo's", neighborhood: "River North",
      why: "Home of the Chicago-style hot dog and Italian beef. The chocolate cake shake is one of the most viral food items in Chicago history — it's a milkshake blended with chocolate cake.",
      mustOrder: "Chocolate Cake Shake + Chicago Dog", blackOwned: false,
      pills: ["Viral Cake Shake", "Chicago Hot Dog", "Tourist Essential"]
    },
    {
      rank: 6, name: "Pequod's Pizza", neighborhood: "Lincoln Park",
      why: "Known for the caramelized-cheese crust that no other deep-dish place does. The crispy burnt cheese edge has been the subject of countless TikToks and food debates.",
      mustOrder: "Deep Dish with Caramelized Crust", blackOwned: false,
      pills: ["Caramelized Crust", "Deep Dish Wars", "Lincoln Park"]
    },
    {
      rank: 7, name: "Lem's Bar-B-Q", neighborhood: "Chatham",
      why: "Chicago's most celebrated BBQ institution. Their rib tips and hot links are a South Side tradition going back generations. A pit stop for anyone serious about Chicago food culture.",
      mustOrder: "Rib Tips + Hot Links", blackOwned: true,
      pills: ["Black-Owned", "South Side Legend", "BBQ Institution"]
    },
    {
      rank: 8, name: "The Purple Pig", neighborhood: "Magnificent Mile",
      why: "Mediterranean small plates with a bold pork focus. The cheese & charcuterie and milk-braised pork shoulder have been trending for years and never disappoint.",
      mustOrder: "Milk-Braised Pork Shoulder", blackOwned: false,
      pills: ["Small Plates", "Magnificent Mile", "Always Trending"]
    },
    {
      rank: 9, name: "Giordano's", neighborhood: "Multiple Locations",
      why: "The stuffed deep-dish capital of Chicago. Their pizza takes 45 minutes to cook because it's essentially a pie — layers of cheese, filling, then more crust. A Chicago-only experience.",
      mustOrder: "Stuffed Spinach Deep Dish", blackOwned: false,
      pills: ["Stuffed Deep Dish", "45-Minute Pizza", "Chicago Staple"]
    },
    {
      rank: 10, name: "Superdawg Drive-In", neighborhood: "Norwood Park",
      why: "A 1948 drive-in with giant hot dog mascots on the roof. The original Chicago hot dog experience — car hops, vintage vibes, and a dog that's been perfected over 75 years.",
      mustOrder: "Superdawg + Superfries", blackOwned: false,
      pills: ["Since 1948", "Drive-In", "Chicago Hot Dog"]
    }
  ]
};

/* ── TIKTOK RENDER ────────────────────────────── */
function renderTikTok(cat) {
  const list = document.getElementById('tt-list');
  list.innerHTML = '';
  tiktokSpots[cat].forEach(spot => {
    const card = document.createElement('div');
    card.className = 'tt-card';
    card.innerHTML = `
      <div class="tt-rank tt-rank-${spot.rank}">${spot.rank}</div>
      <div class="tt-card-body">
        <div class="tt-card-top">
          <span class="tt-card-name">${spot.name}</span>
          ${spot.blackOwned ? '<span class="tt-black-badge">✊🏾 Black-Owned</span>' : ''}
        </div>
        <p class="tt-card-hood">📍 ${spot.neighborhood}</p>
        <p class="tt-card-why">${spot.why}</p>
        <p class="tt-card-must">Must Order: <span>${spot.mustOrder}</span></p>
      </div>
      <div class="tt-pills">
        ${spot.pills.map(p => `<span class="tt-pill">${p}</span>`).join('')}
      </div>
    `;
    list.appendChild(card);
  });
}

// renderTikTok('brunch') is called inside initDynamicContent() below

document.getElementById('tt-tabs').addEventListener('click', e => {
  const tab = e.target.closest('.tt-tab');
  if (!tab) return;
  document.querySelectorAll('.tt-tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  renderTikTok(tab.dataset.cat);
});

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
  },
  {
    id: 23,
    name: "The Duplex",
    category: "brunch",
    tags: ["Black-Owned", "DJ Brunch", "Bottomless"],
    blackOwned: true,
    lat: 41.9279,
    lng: -87.7044,
    neighborhood: "Logan Square",
    description: "Chicago's premier Black-owned brunch party experience. Live resident DJs, 90-minute bottomless mimosas, and a menu of elevated comfort food — Upside Down French Toast, Chicken & Waffles, Shrimp & Grits. Lively, inclusive, and always packed. Sat & Sun.",
    img: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600&q=80",
    vibe: "🥂 DJ Brunch · Party Vibes · Bottomless"
  },
  {
    id: 24,
    name: "Batter & Berries",
    category: "brunch",
    tags: ["Black-Owned", "French Toast Flight", "Iconic"],
    blackOwned: true,
    lat: 41.9326,
    lng: -87.6529,
    neighborhood: "Lincoln Park",
    description: "One of Chicago's most celebrated Black-owned brunch institutions. Their legendary French Toast Flight — Blueberry, Strawberry, Lemon, and Caramel on one platter — is worth the wait alone. Lively atmosphere, live music nights, and serious drink specials.",
    img: "https://images.unsplash.com/photo-1484723091739-30990068f44e?w=600&q=80",
    vibe: "🍞 French Toast Flight · Lively · Iconic"
  },
  {
    id: 25,
    name: "Batter & Berries — South Loop",
    category: "brunch",
    tags: ["Black-Owned", "Convenient Location"],
    blackOwned: true,
    lat: 41.8503,
    lng: -87.6285,
    neighborhood: "South Loop",
    description: "The South Loop outpost of the legendary Batter & Berries — closer to downtown hotels and the Museum Campus. Same incredible French Toast Flight and soulful brunch menu, easier to get to from the Loop. Great pre-museum fuel.",
    img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80",
    vibe: "🍳 Black-Owned · Downtown Convenient"
  },
  {
    id: 26,
    name: "Chemistry",
    category: "brunch",
    tags: ["Black-Owned", "Upscale", "21+", "Live Music"],
    blackOwned: true,
    lat: 41.8007,
    lng: -87.5937,
    neighborhood: "Hyde Park",
    description: "Chicago's most upscale Black-owned brunch experience. Formal dress code, dazzling interiors, made-to-order steaks, buffet-style spread, bottomless mimosas, and live music. 21+ only. A true special occasion brunch that delivers on every level.",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
    vibe: "✨ Upscale · Live Music · Dress to Impress"
  },
  {
    id: 27,
    name: "Hubbard Inn",
    category: "brunch",
    tags: ["DJ Brunch", "Bottomless", "Tulum Vibes"],
    blackOwned: false,
    lat: 41.8903,
    lng: -87.6293,
    neighborhood: "River North",
    description: "Tulum-inspired vibes in the heart of River North. Live DJs every Saturday and Sunday, bottomless mimosas, champagne, or rosé with any entree. Beautiful crowd, beautiful space, and hearty brunch plates including a standout cowboy steak. Great energy all afternoon.",
    img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&q=80",
    vibe: "🌴 Tulum Vibes · DJ · Bottomless"
  },
  {
    id: 28,
    name: "Chicago Official R&B Brunch",
    category: "brunch",
    tags: ["R&B", "Bottomless", "21+", "Weekly"],
    blackOwned: false,
    lat: 41.9038,
    lng: -87.6352,
    neighborhood: "Division Street",
    description: "Every Sunday on Division Street — a dedicated R&B brunch and day party with bottomless drinks from 12pm. $25 entry, 21+. Old school R&B, neo-soul, and a crowd that's there to have a real good time. The most consistent Sunday event in the city.",
    img: "https://images.unsplash.com/photo-1571266028253-6c0b92e6d9b4?w=600&q=80",
    vibe: "🎶 R&B · Day Party · Every Sunday"
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

/* ── CALENDAR & EVENTS ────────────────────────── */
const calDays = [
  { key: 'thu', name: 'Thu', num: '18', month: 'Jun' },
  { key: 'fri', name: 'Fri', num: '19', month: 'Jun' },
  { key: 'sat', name: 'Sat', num: '20', month: 'Jun' },
  { key: 'sun', name: 'Sun', num: '21', month: 'Jun' },
  { key: 'mon', name: 'Mon', num: '22', month: 'Jun' }
];

const typeColors = {
  free:     '#6bcb77',
  ticketed: '#ff6b6b',
  historic: '#9b6dff'
};

function loadCustomEvents() {
  try { return JSON.parse(localStorage.getItem('chi-custom-events') || '[]'); }
  catch { return []; }
}

function saveCustomEvents(evts) {
  localStorage.setItem('chi-custom-events', JSON.stringify(evts));
}

function renderCalendar() {
  const calGrid = document.getElementById('cal-grid');
  const customEvts = loadCustomEvents();
  calGrid.innerHTML = '';

  calDays.forEach(day => {
    const col = document.createElement('div');
    col.className = 'cal-day-col';
    col.innerHTML = `
      <div class="cal-day-header">
        <span class="cal-day-name">${day.name}</span>
        <span class="cal-day-num">${day.num}</span>
        <span class="cal-day-month">${day.month}</span>
      </div>
      <div class="cal-events-list" id="cal-${day.key}"></div>
      <button class="cal-add-btn" data-day="${day.key}">＋ Add</button>
    `;
    calGrid.appendChild(col);

    const evtList = col.querySelector(`#cal-${day.key}`);

    // curated events
    events.filter(e => e.day === day.key).forEach(ev => {
      const bg = typeColors[ev.type] || '#F5A623';
      const block = document.createElement('div');
      block.className = 'cal-event-block';
      block.style.cssText = `background:${bg}22;border-left-color:${bg};`;
      block.innerHTML = `
        <span class="cal-event-time" style="color:${bg};">${ev.time.split('·')[0].trim()}</span>
        <span class="cal-event-title">${ev.title}</span>
      `;
      block.addEventListener('click', () => showEventDetail(ev));
      evtList.appendChild(block);
    });

    // custom events
    customEvts.filter(e => e.day === day.key).forEach(ev => {
      evtList.appendChild(buildCustomBlock(ev, customEvts));
    });
  });

  // add-btn listeners
  calGrid.querySelectorAll('.cal-add-btn').forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.dataset.day));
  });
}

function buildCustomBlock(ev, allCustom) {
  const block = document.createElement('div');
  block.className = 'cal-event-block';
  block.style.cssText = `background:${ev.color}22;border-left-color:${ev.color};`;
  block.innerHTML = `
    ${ev.time ? `<span class="cal-event-time" style="color:${ev.color};">${ev.time}</span>` : ''}
    <span class="cal-event-title">${ev.title}</span>
    ${ev.notes ? `<span style="font-size:0.7rem;color:rgba(255,255,255,0.5);display:block;margin-top:2px;">${ev.notes}</span>` : ''}
    <button class="cal-event-delete" data-id="${ev.id}" title="Remove">✕</button>
  `;
  block.querySelector('.cal-event-delete').addEventListener('click', e => {
    e.stopPropagation();
    const updated = allCustom.filter(x => x.id !== ev.id);
    saveCustomEvents(updated);
    renderCalendar();
  });
  return block;
}

function showEventDetail(ev) {
  document.getElementById('ev-title').value = ev.title;
  document.getElementById('ev-day').value = ev.day;
  document.getElementById('ev-time').value = ev.time || '';
  document.getElementById('ev-notes').value = ev.description ? ev.description.slice(0, 80) : '';
  openModal(ev.day, true);
}

/* ── LIST VIEW ────────────────────────────────── */
function badgeHTML(type) {
  const badgeTypes = {
    free: ['badge-free', 'FREE'],
    ticketed: ['badge-ticketed', 'TICKETED'],
    historic: ['badge-historic', 'HISTORIC'],
    mustdo: ['badge-mustdo', "DON'T MISS"]
  };
  const [cls, label] = badgeTypes[type] || ['badge-free', type];
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

renderCalendar();
renderEvents('all');

document.getElementById('day-tabs').addEventListener('click', e => {
  const tab = e.target.closest('.day-tab');
  if (!tab) return;
  document.querySelectorAll('.day-tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  renderEvents(tab.dataset.day);
});

/* ── VIEW TOGGLE ──────────────────────────────── */
document.getElementById('btn-calendar').addEventListener('click', () => {
  document.getElementById('calendar-view').style.display = '';
  document.getElementById('list-view').style.display = 'none';
  document.getElementById('btn-calendar').classList.add('active');
  document.getElementById('btn-list').classList.remove('active');
});

document.getElementById('btn-list').addEventListener('click', () => {
  document.getElementById('calendar-view').style.display = 'none';
  document.getElementById('list-view').style.display = '';
  document.getElementById('btn-list').classList.add('active');
  document.getElementById('btn-calendar').classList.remove('active');
});

/* ── MODAL ────────────────────────────────────── */
let selectedColor = '#F5A623';
let modalPresetDay = null;

function openModal(day, readOnly) {
  modalPresetDay = day || 'thu';
  document.getElementById('ev-day').value = modalPresetDay;
  if (!readOnly) {
    document.getElementById('ev-title').value = '';
    document.getElementById('ev-time').value = '';
    document.getElementById('ev-notes').value = '';
  }
  document.getElementById('modal-overlay').classList.add('open');
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.getElementById('event-form').reset();
  selectedColor = '#F5A623';
  document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
  document.querySelector('.color-dot[data-color="#F5A623"]').classList.add('active');
}

document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-cancel').addEventListener('click', closeModal);
document.getElementById('modal-overlay').addEventListener('click', e => {
  if (e.target === document.getElementById('modal-overlay')) closeModal();
});

document.getElementById('color-picker').addEventListener('click', e => {
  const dot = e.target.closest('.color-dot');
  if (!dot) return;
  document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
  dot.classList.add('active');
  selectedColor = dot.dataset.color;
});

document.getElementById('event-form').addEventListener('submit', e => {
  e.preventDefault();
  const title = document.getElementById('ev-title').value.trim();
  const day   = document.getElementById('ev-day').value;
  const time  = document.getElementById('ev-time').value.trim();
  const notes = document.getElementById('ev-notes').value.trim();
  if (!title) return;

  const custom = loadCustomEvents();
  custom.push({ id: Date.now().toString(), title, day, time, notes, color: selectedColor });
  saveCustomEvents(custom);
  closeModal();
  renderCalendar();
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
  shopping:  '#ffd166',
  brunch:    '#ff9a3c'
};

const categoryEmojis = {
  culture:   '🎨',
  food:      '🍽️',
  nightlife: '🎵',
  outdoors:  '🌿',
  shopping:  '🛍️',
  brunch:    '🥂'
};

/* ── SPOT DETAILS (address + phone) ──────────────── */
const spotInfo = {
  1:  { address: '201 E Randolph St, Chicago',          phone: '(312) 742-1168' },
  2:  { address: '111 S Michigan Ave, Chicago',          phone: '(312) 443-3600' },
  4:  { address: '740 E 56th Pl, Chicago',               phone: '(773) 947-0600' },
  5:  { address: '600 E Grand Ave, Chicago',             phone: '(312) 595-7437' },
  7:  { address: '1462 E 53rd St, Chicago',              phone: '(773) 947-8881' },
  10: { address: '113 N Green St, Chicago',              phone: '(312) 521-8000' },
  11: { address: '4655 S King Dr, Chicago',              phone: '(773) 624-8089' },
  12: { address: '112 E Wacker Dr, Chicago',             phone: '(312) 922-3432' },
  13: { address: '4802 N Broadway, Chicago',             phone: '(773) 878-5552' },
  14: { address: '5200 S Dorchester Ave, Chicago',       phone: null             },
  16: { address: '646 N Franklin St, Chicago',           phone: '(312) 337-2191' },
  17: { address: '5700 S DuSable Lake Shore Dr',         phone: '(773) 684-1414' },
  18: { address: '307 E 47th St, Chicago',               phone: '(773) 373-1200' },
  20: { address: '65 E Washington St, Chicago',          phone: '(312) 726-2020' },
  21: { address: '122 W Monroe St, Chicago',             phone: '(312) 750-9012' },
  23: { address: '3137 W Logan Blvd, Chicago',           phone: '(773) 799-8558' },
  24: { address: '2748 N Lincoln Ave, Chicago',          phone: '(773) 248-7710' },
  25: { address: '2318 S State St, Chicago',             phone: '(773) 248-7710' },
  26: { address: '5121 S Harper Ave, Chicago',           phone: '(312) 752-7576' },
  27: { address: '110 W Hubbard St, Chicago',            phone: '(312) 222-1331' },
};

const ttSpotInfo = {
  'Batter & Berries':        { address: '2748 N Lincoln Ave',      phone: '(773) 248-7710' },
  'The Duplex':              { address: '3137 W Logan Blvd',       phone: '(773) 799-8558' },
  'Chemistry':               { address: '5121 S Harper Ave',       phone: '(312) 752-7576' },
  "Luella's Southern Kitchen":{ address: '4609 N Lincoln Ave',     phone: '(773) 961-8196' },
  'Beatnik on the River':    { address: '759 N Milwaukee Ave',     phone: '(312) 929-4945' },
  'Hubbard Inn':             { address: '110 W Hubbard St',        phone: '(312) 222-1331' },
  'Virtue Restaurant':       { address: '1462 E 53rd St',          phone: '(773) 947-8881' },
  'TAO Chicago':             { address: '632 N Dearborn St',       phone: '(312) 202-0500' },
  'Spybar':                  { address: '646 N Franklin St',       phone: '(312) 337-2191' },
  'Boleo Rooftop':           { address: '122 W Monroe St',         phone: '(312) 750-9012' },
  "Cindy's Rooftop":         { address: '12 S Michigan Ave',       phone: '(312) 792-3502' },
  'Green Mill Jazz Club':    { address: '4802 N Broadway',         phone: '(773) 878-5552' },
  'Soho House Chicago':      { address: '113 N Green St',          phone: '(312) 521-8000' },
  'Au Cheval':               { address: '800 W Randolph St',       phone: '(312) 929-4580' },
  'Girl & the Goat':         { address: '800 W Randolph St',       phone: '(312) 492-6262' },
  'J.P. Graziano Grocery':   { address: '901 W Randolph St',       phone: '(312) 666-4587' },
  'Monteverde':              { address: '1020 W Madison St',       phone: '(312) 888-3041' },
  'Garifuna Flava':          { address: '7954 S Cottage Grove Ave',phone: '(773) 966-7858' },
  'Beatrix':                 { address: '519 N Clark St',          phone: '(312) 284-1377' },
  'Santa Masa Tamaleria':    { address: '2209 S Halsted St',       phone: '(312) 226-8262' },
  'Bocadillo Market':        { address: '816 N Ashland Ave',       phone: '(312) 929-4572' },
  'Galit':                   { address: '2429 N Lincoln Ave',      phone: '(773) 360-8755' },
  'Publican Quality Meats':  { address: '825 W Fulton Market',     phone: '(312) 445-8977' },
  "Lou Malnati's":           { address: '439 N Wells St',          phone: '(312) 828-9800' },
  "Al's #1 Italian Beef":    { address: '169 W Ontario St',        phone: '(312) 943-3222' },
  "Harold's Chicken Shack":  { address: '307 E 47th St',           phone: '(773) 373-1200' },
  "Portillo's":              { address: '100 W Ontario St',        phone: '(312) 587-8910' },
  "Pequod's Pizza":          { address: '2207 N Clybourn Ave',     phone: '(773) 327-1512' },
  "Lem's Bar-B-Q":           { address: '311 E 75th St',           phone: '(773) 994-2428' },
  'The Purple Pig':          { address: '444 N Michigan Ave',      phone: '(312) 464-1744' },
  "Giordano's":              { address: '130 E Randolph St',       phone: '(312) 616-1200' },
  'Superdawg Drive-In':      { address: '6363 N Milwaukee Ave',    phone: '(773) 763-0660' },
};

function detailsHTML(info) {
  if (!info) return '';
  return `
    <div style="margin-top:8px;padding-top:8px;border-top:1px solid #2e2e2e;">
      ${info.address ? `<div style="font-size:0.75rem;color:#9a9080;margin-bottom:3px;">📍 ${info.address}</div>` : ''}
      ${info.phone   ? `<div style="font-size:0.75rem;color:#9a9080;">📞 <a href="tel:${info.phone}" style="color:#F5A623;text-decoration:none;">${info.phone}</a></div>` : ''}
    </div>`;
}

/* marker group registry — keyed by category slug */
const markerGroups = {};
const groupVisible = {};

function initGroup(key) {
  markerGroups[key] = [];
  groupVisible[key] = true;
}

['culture','food','nightlife','outdoors','shopping','brunch',
 'tt-brunch','tt-nightlife','tt-lunch','tt-chicagoeats'].forEach(initGroup);

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
      <div style="min-width:210px;">
        <img src="${act.img}" style="width:100%;height:110px;object-fit:cover;border-radius:8px;margin-bottom:10px;" />
        <strong style="font-family:'Syne',sans-serif;font-size:0.95rem;color:#fff;">${act.name}</strong><br/>
        <span style="font-size:0.75rem;color:#9a9080;">${act.neighborhood}</span>
        <p style="font-size:0.8rem;margin-top:6px;color:#e8e3db;">${act.description.slice(0, 90)}…</p>
        ${detailsHTML(spotInfo[act.id])}
      </div>
    `);

  markers.push({ marker, act });
  if (markerGroups[act.category]) markerGroups[act.category].push(marker);
});

/* ── TIKTOK MAP DATA ──────────────────────────── */
const tiktokMapData = {
  brunch: [
    { rank:1,  name:"Batter & Berries",         lat:41.9326, lng:-87.6529 },
    { rank:2,  name:"The Duplex",                lat:41.9279, lng:-87.7044 },
    { rank:3,  name:"Brûlée Chicago",            lat:41.8520, lng:-87.6285 },
    { rank:4,  name:"Chemistry",                 lat:41.8007, lng:-87.5937 },
    { rank:5,  name:"Luella's Southern Kitchen", lat:41.9735, lng:-87.6895 },
    { rank:6,  name:"Beatnik on the River",      lat:41.8847, lng:-87.6447 },
    { rank:7,  name:"Hubbard Inn",               lat:41.8903, lng:-87.6293 },
    { rank:8,  name:"The Brunchery",             lat:41.9197, lng:-87.6362 },
    { rank:9,  name:"Spoken Cafe",               lat:41.8361, lng:-87.6259 },
    { rank:10, name:"Virtue Restaurant",         lat:41.7997, lng:-87.5955 },
  ],
  nightlife: [
    { rank:1,  name:"TAO Chicago",               lat:41.8934, lng:-87.6315 },
    { rank:2,  name:"HUE Chicago",               lat:41.8940, lng:-87.6332 },
    { rank:3,  name:"Spybar",                    lat:41.8935, lng:-87.6339 },
    { rank:4,  name:"Boleo Rooftop",             lat:41.8873, lng:-87.6279 },
    { rank:5,  name:"Cindy's Rooftop",           lat:41.8820, lng:-87.6248 },
    { rank:6,  name:"Goodnight John Boy",        lat:41.8963, lng:-87.6551 },
    { rank:7,  name:"Green Mill Jazz Club",      lat:41.9731, lng:-87.6594 },
    { rank:8,  name:"Soho House Chicago",        lat:41.8838, lng:-87.6441 },
    { rank:9,  name:"Hubbard Inn",               lat:41.8905, lng:-87.6298 },
    { rank:10, name:"Scarlett Bar",              lat:41.9440, lng:-87.6513 },
  ],
  lunch: [
    { rank:1,  name:"Au Cheval",                 lat:41.8840, lng:-87.6478 },
    { rank:2,  name:"Girl & the Goat",           lat:41.8838, lng:-87.6487 },
    { rank:3,  name:"J.P. Graziano Grocery",     lat:41.8843, lng:-87.6494 },
    { rank:4,  name:"Monteverde",                lat:41.8817, lng:-87.6523 },
    { rank:5,  name:"Garifuna Flava",            lat:41.9924, lng:-87.6627 },
    { rank:6,  name:"Beatrix",                   lat:41.8906, lng:-87.6312 },
    { rank:7,  name:"Santa Masa Tamaleria",      lat:41.8558, lng:-87.6632 },
    { rank:8,  name:"Bocadillo Market",          lat:41.8982, lng:-87.6728 },
    { rank:9,  name:"Galit",                     lat:41.9267, lng:-87.6519 },
    { rank:10, name:"Publican Quality Meats",    lat:41.8862, lng:-87.6484 },
  ],
  chicagoeats: [
    { rank:1,  name:"Au Cheval",                 lat:41.8841, lng:-87.6480 },
    { rank:2,  name:"Lou Malnati's",             lat:41.8896, lng:-87.6344 },
    { rank:3,  name:"Al's #1 Italian Beef",      lat:41.8930, lng:-87.6340 },
    { rank:4,  name:"Harold's Chicken Shack",    lat:41.8409, lng:-87.6195 },
    { rank:5,  name:"Portillo's",                lat:41.8935, lng:-87.6355 },
    { rank:6,  name:"Pequod's Pizza",            lat:41.9226, lng:-87.6617 },
    { rank:7,  name:"Lem's Bar-B-Q",             lat:41.7567, lng:-87.6087 },
    { rank:8,  name:"The Purple Pig",            lat:41.8899, lng:-87.6246 },
    { rank:9,  name:"Giordano's",                lat:41.8848, lng:-87.6224 },
    { rank:10, name:"Superdawg Drive-In",        lat:41.9956, lng:-87.7611 },
  ]
};

const ttColors = {
  brunch:      '#ff9a3c',
  nightlife:   '#4ecdc4',
  lunch:       '#ffd166',
  chicagoeats: '#ff6b6b'
};

const ttEmojis = {
  brunch:      '🥂',
  nightlife:   '🎧',
  lunch:       '🥗',
  chicagoeats: '🍕'
};

Object.entries(tiktokMapData).forEach(([cat, spots]) => {
  const color = ttColors[cat];
  const emoji = ttEmojis[cat];
  spots.forEach(spot => {
    const icon = L.divIcon({
      className: '',
      html: `<div style="
        width:34px;height:34px;
        background:${color};
        border:2px solid #fff;
        border-radius:8px;
        display:flex;flex-direction:column;align-items:center;justify-content:center;
        box-shadow:0 3px 10px rgba(0,0,0,0.45);
        gap:0;
      ">
        <span style="font-size:9px;font-family:'Syne',sans-serif;font-weight:800;color:#fff;line-height:1;">#${spot.rank}</span>
        <span style="font-size:12px;line-height:1;">${emoji}</span>
      </div>`,
      iconSize: [34, 34],
      iconAnchor: [17, 17],
      popupAnchor: [0, -20]
    });

    const marker = L.marker([spot.lat, spot.lng], { icon })
      .addTo(map)
      .bindPopup(`
        <div style="min-width:210px;">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
            <span style="
              background:${color};color:#fff;
              font-family:'Syne',sans-serif;font-weight:800;font-size:0.75rem;
              padding:3px 8px;border-radius:6px;
            ">#${spot.rank}</span>
            <span style="font-size:0.7rem;color:#ff2d55;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;">TikTok ${cat === 'chicagoeats' ? 'Chicago Eats' : cat}</span>
          </div>
          <strong style="font-family:'Syne',sans-serif;font-size:0.95rem;color:#fff;">${spot.name}</strong>
          ${detailsHTML(ttSpotInfo[spot.name])}
        </div>
      `);

    markerGroups['tt-' + cat].push(marker);
  });
});

/* ── BRUNCH GRID ──────────────────────────────── */
const brunchSpots = activities.filter(a => a.category === 'brunch');
const brunchGrid = document.getElementById('brunch-grid');

brunchSpots.forEach(spot => {
  const el = document.createElement('div');
  el.className = 'brunch-card';
  el.innerHTML = `
    <img class="brunch-card-img" src="${spot.img}" alt="${spot.name}" loading="lazy" />
    <div class="brunch-card-body">
      <div class="brunch-pills">
        ${spot.blackOwned ? '<span class="brunch-pill black-owned">✊🏾 Black-Owned</span>' : ''}
        ${spot.tags.filter(t => t !== 'Black-Owned').map(t => `<span class="brunch-pill">${t}</span>`).join('')}
      </div>
      <h3>${spot.name}</h3>
      <p class="brunch-hood">📍 ${spot.neighborhood}</p>
      <p>${spot.description}</p>
      <p class="brunch-vibe">${spot.vibe}</p>
    </div>
  `;
  el.addEventListener('click', () => {
    map.flyTo([spot.lat, spot.lng], 15, { duration: 1.2 });
    document.getElementById('map-section').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      const found = markers.find(m => m.act.id === spot.id);
      if (found) found.marker.openPopup();
    }, 1400);
  });
  brunchGrid.appendChild(el);
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

/* ── INTERACTIVE LEGEND ───────────────────────── */
const legendControl = L.control({ position: 'bottomright' });
let legendDiv;
let legendCollapsed = false;

const activityLabels = {
  culture:   { label: 'Culture',   emoji: '🎨' },
  food:      { label: 'Food',      emoji: '🍽️' },
  nightlife: { label: 'Nightlife', emoji: '🎵' },
  outdoors:  { label: 'Outdoors',  emoji: '🌿' },
  shopping:  { label: 'Shopping',  emoji: '🛍️' },
  brunch:    { label: 'Brunch',    emoji: '🥂' },
};

const ttLabels = {
  'tt-brunch':      { label: 'TikTok - Brunch',      color: ttColors.brunch,      emoji: ttEmojis.brunch },
  'tt-nightlife':   { label: 'TikTok - Nightlife',    color: ttColors.nightlife,   emoji: ttEmojis.nightlife },
  'tt-lunch':       { label: 'TikTok - Lunch',        color: ttColors.lunch,       emoji: ttEmojis.lunch },
  'tt-chicagoeats': { label: 'TikTok - Chicago Eats', color: ttColors.chicagoeats, emoji: ttEmojis.chicagoeats },
};

function isMobile() {
  return document.body.classList.contains('mobile-mode');
}

function buildLegendHTML() {
  if (legendCollapsed) {
    return `
      <button data-action="toggle-legend" style="
        display:flex;align-items:center;gap:7px;
        background:none;border:none;cursor:pointer;
        font-family:'Syne',sans-serif;font-weight:700;font-size:0.8rem;
        color:#F5A623;letter-spacing:0.05em;padding:2px 0;white-space:nowrap;
      ">
        <span>🗺️ Layers</span>
        <span style="font-size:0.65rem;color:#9a9080;">▲ show</span>
      </button>`;
  }

  const actRows = Object.entries(activityLabels).map(([key, { label, emoji }]) => {
    const color  = categoryColors[key];
    const dim    = groupVisible[key] ? '' : 'opacity:0.35;';
    const strike = groupVisible[key] ? '' : 'text-decoration:line-through;';
    return `
      <div class="leg-row" data-group="${key}" style="${dim}cursor:pointer;" title="Toggle layer">
        <span style="width:12px;height:12px;background:${color};border-radius:50%;display:inline-block;flex-shrink:0;"></span>
        <span style="${strike}">${emoji} ${label}</span>
      </div>`;
  }).join('');

  const ttRows = Object.entries(ttLabels).map(([key, { label, color, emoji }]) => {
    const dim    = groupVisible[key] ? '' : 'opacity:0.35;';
    const strike = groupVisible[key] ? '' : 'text-decoration:line-through;';
    return `
      <div class="leg-row" data-group="${key}" style="${dim}cursor:pointer;" title="Toggle layer">
        <span style="width:12px;height:12px;background:${color};border-radius:3px;display:inline-block;flex-shrink:0;border:1px solid rgba(255,255,255,0.3);"></span>
        <span style="${strike}">${emoji} ${label}</span>
      </div>`;
  }).join('');

  /* Scrollable inner content — header stays pinned at top */
  return `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;flex-shrink:0;">
      <span style="font-weight:700;color:#F5A623;font-family:'Syne',sans-serif;font-size:0.78rem;letter-spacing:0.05em;">MAP LEGEND</span>
      <button data-action="toggle-legend" style="
        background:rgba(255,255,255,0.07);border:1px solid #2e2e2e;border-radius:6px;
        color:#9a9080;font-size:0.65rem;cursor:pointer;padding:2px 7px;margin-left:10px;
        font-family:'Inter',sans-serif;white-space:nowrap;flex-shrink:0;
      " title="Hide legend">▼ hide</button>
    </div>
    <div style="overflow-y:auto;flex:1;min-height:0;">
      <div style="font-size:0.62rem;color:#9a9080;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:5px;">Activities</div>
      ${actRows}
      <div style="font-size:0.62rem;color:#ff2d55;letter-spacing:0.1em;text-transform:uppercase;margin:8px 0 5px;padding-top:6px;border-top:1px solid #2e2e2e;">TikTok</div>
      ${ttRows}
      <div class="leg-row" style="margin-top:6px;padding-top:6px;border-top:1px solid #2e2e2e;">
        <span style="font-size:12px;">🏠</span>
        <span>Your Stay</span>
      </div>
      <div style="font-size:0.58rem;color:#444;margin-top:6px;">Tap any row to toggle</div>
    </div>
  `;
}

function refreshLegend() {
  if (!legendDiv) return;
  const mobile = isMobile();
  legendDiv.style.padding   = legendCollapsed ? '8px 12px' : (mobile ? '10px 12px' : '14px 16px');
  legendDiv.style.minWidth  = legendCollapsed ? '0'        : (mobile ? '160px'     : '190px');
  legendDiv.style.maxHeight = legendCollapsed ? 'none'     : (mobile ? '200px'     : '420px');
  legendDiv.style.fontSize  = mobile ? '0.72rem' : '0.78rem';
  legendDiv.innerHTML = buildLegendHTML();
}

legendControl.onAdd = function () {
  legendDiv = L.DomUtil.create('div');
  legendDiv.style.cssText = `
    background:#1a1a1a;border:1px solid #2e2e2e;border-radius:12px;
    padding:14px 16px;font-family:'Inter',sans-serif;font-size:0.78rem;color:#e8e3db;
    box-shadow:0 4px 20px rgba(0,0,0,0.6);max-height:420px;min-width:190px;
    display:flex;flex-direction:column;transition:padding 0.15s,max-height 0.2s;
  `;
  legendDiv.innerHTML = buildLegendHTML();

  L.DomEvent.disableClickPropagation(legendDiv);
  L.DomEvent.disableScrollPropagation(legendDiv);

  legendDiv.addEventListener('click', e => {
    /* collapse / expand toggle */
    if (e.target.closest('[data-action="toggle-legend"]')) {
      legendCollapsed = !legendCollapsed;
      refreshLegend();
      return;
    }
    /* layer toggle rows */
    const row = e.target.closest('.leg-row[data-group]');
    if (!row) return;
    const key = row.dataset.group;
    groupVisible[key] = !groupVisible[key];
    markerGroups[key].forEach(m => {
      groupVisible[key] ? m.addTo(map) : m.remove();
    });
    refreshLegend();
  });

  return legendDiv;
};
legendControl.addTo(map);

/* ── AIRBNB MARKER ────────────────────────────── */
const airbnbIcon = L.divIcon({
  className: '',
  html: `<div style="
    width:42px;height:42px;
    background:#FF5A5F;
    border:3px solid #fff;
    border-radius:50%;
    display:flex;align-items:center;justify-content:center;
    box-shadow:0 0 0 4px rgba(255,90,95,0.3), 0 4px 14px rgba(0,0,0,0.5);
    font-size:20px;
  ">🏠</div>`,
  iconSize: [42, 42],
  iconAnchor: [21, 21],
  popupAnchor: [0, -24]
});

L.marker([41.8972, -87.6671], { icon: airbnbIcon })
  .addTo(map)
  .bindPopup(`
    <div style="text-align:center;padding:4px 0;">
      <div style="font-size:1.8rem;margin-bottom:6px;">🏠</div>
      <strong style="font-family:'Syne',sans-serif;font-size:0.95rem;color:#fff;">Your Stay</strong><br/>
      <span style="font-size:0.75rem;color:#9a9080;">Ukrainian Village / West Town</span>
      <div style="margin-top:8px;padding-top:8px;border-top:1px solid #2e2e2e;font-size:0.75rem;color:#9a9080;">
        📍 862 N Ashland Ave, Chicago
      </div>
    </div>
  `)
  .openPopup();

/* ── MOBILE VIEW MODE ─────────────────────────── */
function isMobileUA() {
  return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    || window.innerWidth <= 768;
}

function applyViewMode(mode) {
  if (mode === 'mobile') {
    document.body.classList.add('mobile-mode');
    document.getElementById('view-mode-label').textContent = '🖥️ Desktop View';
    legendCollapsed = true;
  } else {
    document.body.classList.remove('mobile-mode');
    document.getElementById('view-mode-label').textContent = '📱 Mobile View';
    legendCollapsed = false;
  }
  refreshLegend();
  map.invalidateSize();
}

function initViewMode() {
  const stored = localStorage.getItem('chi-view-mode');
  applyViewMode(stored || (isMobileUA() ? 'mobile' : 'desktop'));
}

document.getElementById('view-mode-btn').addEventListener('click', () => {
  const isMobile = document.body.classList.contains('mobile-mode');
  const next = isMobile ? 'desktop' : 'mobile';
  localStorage.setItem('chi-view-mode', next);
  applyViewMode(next);
});

initViewMode();

/* ── BOTTOM NAV ACTIVE STATE ──────────────────── */
const navSections = ['chicago-now','map-section','activities','brunch','events','tiktok'];
const navItems    = document.querySelectorAll('.mob-nav-item');

function updateActiveNav() {
  let current = navSections[0];
  navSections.forEach(id => {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= 100) current = id;
  });
  navItems.forEach(item => {
    item.classList.toggle('active', item.dataset.section === current);
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

/* ── DYNAMIC CONTENT LOADER ───────────────────────── */

function formatNewsDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  if (isNaN(d)) return '';
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function renderChicagoNews(items) {
  const grid = document.getElementById('cn-grid');
  if (!items || !items.length) {
    grid.innerHTML = '<p style="color:var(--text-muted);grid-column:1/-1;text-align:center;padding:24px 0;">No news available right now — check back soon.</p>';
    return;
  }
  grid.innerHTML = items.slice(0, 6).map(item => {
    const thumb = item.thumbnail
      ? `<img class="cn-card-img" src="${item.thumbnail}" alt="" loading="lazy" onerror="this.style.display='none'" />`
      : `<div class="cn-card-img cn-card-img-placeholder"></div>`;
    const date  = formatNewsDate(item.pubDate);
    const desc  = item.description ? item.description.slice(0, 200) + (item.description.length > 200 ? '…' : '') : '';
    return `
      <a class="cn-card" href="${item.link}" target="_blank" rel="noopener noreferrer">
        ${thumb}
        <div class="cn-card-body">
          ${date ? `<span class="cn-card-date">${date}</span>` : ''}
          <h3 class="cn-card-title">${item.title}</h3>
          ${desc ? `<p class="cn-card-desc">${desc}</p>` : ''}
        </div>
        <span class="cn-card-arrow">↗</span>
      </a>`;
  }).join('');
}

async function loadChicagoNews() {
  try {
    const res  = await fetch('data/news.json?v=' + Date.now());
    if (!res.ok) throw new Error('news fetch failed');
    const data = await res.json();
    renderChicagoNews(data.items || []);
  } catch {
    const section = document.getElementById('chicago-now');
    if (section) section.style.display = 'none';
  }
}

async function loadTikTokData() {
  try {
    const res  = await fetch('data/tiktok.json?v=' + Date.now());
    if (!res.ok) throw new Error('tiktok fetch failed');
    const data = await res.json();
    // Override inline fallback with fresh data
    ['brunch', 'nightlife', 'lunch', 'chicagoeats'].forEach(cat => {
      if (data[cat] && data[cat].length) tiktokSpots[cat] = data[cat];
    });
    // Show lastUpdated badge
    if (data.lastUpdated) {
      const el = document.getElementById('tt-last-updated');
      if (el) {
        const d = new Date(data.lastUpdated + 'T12:00:00');
        const label = d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
        el.textContent = '🔄 Rankings verified ' + label;
        el.style.display = 'inline-block';
      }
    }
  } catch {
    // Fall back to inline data silently
  }
  renderTikTok('brunch');
}

async function initDynamicContent() {
  await Promise.all([loadTikTokData(), loadChicagoNews()]);
}

initDynamicContent();
