/* All content sourced from the NEGRONI Aperitivo Bar menu (2026). */

export type Cocktail = {
  name: string;
  ml: number;
  abv: string;
  price: number;
  notes: string;
  ingredients: string;
  imgDesc: string;
  src: string;
};

export const TAP_COCKTAILS: Cocktail[] = [
  {
    name: "Negroni",
    ml: 120,
    abv: "21,1%",
    price: 36,
    notes: "Sweet · Bitter · Boozy · Rich",
    ingredients: "Gin Negroni, Bitter Negroni, Vermut Roșu Dulce, Portocale",
    imgDesc:
      "Cut-out photo: classic Negroni in a rocks glass, one huge clear ice cube, orange wheel — shot top-down on red background like the IG jar shots",
    src: "/images/on-tap/negroni.png"
  },
  {
    name: "Passiocletta",
    ml: 170,
    abv: "14,8%",
    price: 36,
    notes: "Sweet · Bitter · Fruity · Sparkle",
    ingredients:
      "Aperitiv Eleven, Bitter OLD 1919, Chinola Passion Fruit, Spumante, Apă de trandafiri",
    imgDesc:
      "Cut-out photo: tall sparkling orange cocktail with dried orange wheel garnish, condensation drops",
      src: "/images/on-tap/hugo.png"
  },
  {
    name: "Sbagliato",
    ml: 150,
    abv: "14,9%",
    price: 36,
    notes: "Sweet · Bitter · Salty · Sparkle",
    ingredients: "Bitter Negroni, Vermut Roșu Dulce, San Martino Spumante, Măsline",
    imgDesc:
      "Cut-out photo: sbagliato in a stemmed glass with a skewer of green olives resting on the rim",
      src: "/images/on-tap/Sbagliato.png"
  },
  {
    name: "Milanese G&T",
    ml: 150,
    abv: "9,6%",
    price: 36,
    notes: "Sweet · Bitter · Delicate · Sparkle",
    ingredients: "Gin Negroni, Bitter Negroni, Apă Tonică Bona, Lime",
    imgDesc:
      "Cut-out photo: pink-red G&T in a highball, lime wedge, big bubbles visible",
      src: "/images/on-tap/Milanese-G&T.png"
  },
  {
    name: "Rosita",
    ml: 120,
    abv: "26,6%",
    price: 36,
    notes: "Sweet · Bitter · Boozy · Rich",
    ingredients: "Tequila Orendain Blanco, Bitter's mix, Vermut Roșu Dulce, Lime",
    imgDesc:
      "Cut-out photo: amber-red rosita over ice with dehydrated lime wheel",
      src: "/images/on-tap/rosita.png"
  },
  {
    name: "Mi-To",
    ml: 100,
    abv: "19,2%",
    price: 36,
    notes: "Sweet · Bitter · Salty · Light",
    ingredients:
      "Bitter Negroni, Vermut Roșu Dulce, Bitter Fusetti Mare, Vermut Bucci Rosso",
    imgDesc:
      "Cut-out photo: short dark-red Mi-To in a lowball, no garnish, moody light",
      src: "/images/on-tap/Mi-To.png"
  },
  {
    name: "Americano",
    ml: 120,
    abv: "11,6%",
    price: 36,
    notes: "Sweet · Bitter · Citrusy · Light",
    ingredients:
      "Bitter Negroni, Vermut Roșu Dulce, Fusetti Mare, Apă de trandafiri & lămâie, Portocale",
    imgDesc:
      "Cut-out photo: americano highball with soda fizz and orange slice inside the glass",
      src: "/images/on-tap/americano.png"
  },
  {
    name: "Venetian Spritz",
    ml: 175,
    abv: "11%",
    price: 36,
    notes: "Sweet · Bitter · Light · Sparkle",
    ingredients: "Aperitiv Eleven, Montelvini Cuvee Spumante, Măsline",
    imgDesc:
      "Cut-out photo: bright orange spritz in a big wine glass, olive skewer, golden-hour light",
      src: "/images/on-tap/venetiano-spritz.png"
  },
  {
    name: "Negroni Spritz",
    ml: 175,
    abv: "9,6%",
    price: 36,
    notes: "Sweet · Bitter · Delicate · Sparkle",
    ingredients:
      "Bitter's mix, Aperitiv Eleven, Montelvini Cuvee, Apă Tonică Bona, Portocale",
    imgDesc:
      "Cut-out photo: red spritz in a stemmed balloon glass with orange half-moon",
      src: "/images/on-tap/negroni-spritz.png"
  },
  {
    name: "Veneto Spritz",
    ml: 175,
    abv: "13%",
    price: 36,
    notes: "Sweet · Bitter · Light · Sparkle",
    ingredients:
      "Aperitiv Sixteen, Montelvini Cuvee, Apă de trandafiri, Portocală uscată",
    imgDesc:
      "Cut-out photo: deep-orange spritz with dried orange chip standing in the foam",
      src: "/images/on-tap/veneto-spritz.png"
  },
  {
    name: "Hugo",
    ml: 175,
    abv: "11,8%",
    price: 36,
    notes: "Sweet · Floral · Fresh · Sparkle",
    ingredients:
      "Aperitiv Sambuco, Suc de lime, Montelvini Cuvee, Mentă, Lime",
    imgDesc:
      "Cut-out photo: pale green-white Hugo loaded with mint sprigs and lime wheels",
      src: "/images/on-tap/hugo.png"
  },
  {
    name: "Limoncello Spritz",
    ml: 175,
    abv: "15,4%",
    price: 36,
    notes: "Sweet · Bitter · Citrusy · Sparkle",
    ingredients:
      "Limoncello Negroni, Aperitiv Sambuco, Suc de lime, Montelvini Cuvee, Apă spumante",
    imgDesc:
      "Cut-out photo: cloudy yellow limoncello spritz with a fat lemon twist over the rim",
      src: "/images/on-tap/limoncello-spritz.png"
  },
];

export type Signature = {
  name: string;
  ml: number;
  abv: string;
  price: number;
  notes: string;
  imgDesc: string;
  src: string;
};

export const SIGNATURES: Signature[] = [
  {
    name: "Tiki Negroni",
    ml: 150,
    abv: "13,6%",
    price: 46,
    notes: "Pineapple foam, raspberry dust — the Negroni goes on holiday",
    imgDesc:
      "Photo: tiki negroni crowned with white pineapple foam and red raspberry powder, tropical props blurred behind",
      src: "/images/signatures/tiki-negroni.png"
  },
  {
    name: "Porno Negroni",
    ml: 120,
    abv: "29,4%",
    price: 49,
    notes: "Two gins, passion fruit, shimmer of candurin — explicit content",
    imgDesc:
      "Photo: glittering shimmering red negroni (candurin swirl visible), shot macro, dark background",
      src: "/images/signatures/porno-negroni.png"
  },
  {
    name: "Negroni Supremo",
    ml: 90,
    abv: "28,5%",
    price: 49,
    notes: "Eight bottles deep. One cherry on top. The boss",
    imgDesc:
      "Photo: dark garnet negroni in crystal lowball with single glossy cherry, dramatic side light",
      src: "/images/signatures/negroni-supremo.png"
  },
  {
    name: "Drinkita",
    ml: 140,
    abv: "21,5%",
    price: 49,
    notes: "Mezcal, mango, La Gauloise — smoky sunshine with a kick",
    imgDesc:
      "Photo: golden-yellow drinkita with mango slice fan and chili-salt rim, halftone collage treatment like the DRINKITA event poster",
            src: "/images/signatures/drinkita.png"
  },
  {
    name: "Vișinată Cola",
    ml: 180,
    abv: "8,2%",
    price: 49,
    notes: "Grandma's vișinată meets cola, tonka & vanilla foam",
    imgDesc:
      "Photo: dark cherry-cola drink in a tall glass, vanilla foam layer, sour cherries on skewer",
      src: "/images/signatures/tiki-negroni.png"
  },
  {
    name: "Sunset Spritz",
    ml: 230,
    abv: "12,2%",
    price: 46,
    notes: "Bergamot, Cynar, peach & grapefruit — golden hour in a glass",
    imgDesc:
      "Photo: gradient orange-pink spritz backlit by sunset, like the SUNSET SPRITZ event artwork",
            src: "/images/signatures/sunset-spritz.png"
  },
];

export const DULCE_BANANA = {
  name: "Dulce & Banana",
  ml: 85,
  abv: "26,9%",
  price: 79,
  copy:
    "We call it a statement piece. Creamy banana, boozy coconut, and a layered rum backbone. Rich, fruity, unapologetically luxurious. The real twist? It comes dressed as a banana flask you take with you — part cocktail, part accessory. Very ‘Dulce Vita’.",
  imgDesc:
    "Cut-out photo: the actual banana-shaped flask cocktail vessel, studio-lit on ink-black background, slight glossy reflection",
    src: "/images/hands-clicking.png"
    
};

export const EVENTS = [
  {
    tag: "Monthly",
    title: "Guest Bartendings",
    copy:
      "Powered by Negroni Trading, the bar becomes a global playground for award-winning mixologists, brand ambassadors and cocktail visionaries. Masterclasses included.",
    imgDesc:
      "Halftone collage poster in brand style: black&white cutout portraits of two bartenders over red circles and orange drink, like the DRINKITA 22&23 MAY poster",
      src: "/images/events/bartendings.png"
  },
  {
    tag: "Seasonly",
    title: "Negronied Train Parties",
    copy:
      "Closed-door parties soundtracked by the world's finest in dark disco, indie dance and post-punk. Cocktails, music and bittersweet community collide.",
    imgDesc:
      "Photo: packed bar at night, red neon 'NEGRONIED' sign glowing over the crowd, motion blur dancing",
      src: "/images/events/parties.png"
  },
  {
    tag: "Members",
    title: "The Negroni Passport",
    copy:
      "Our most devoted amici carry NEGRONI Passports — exclusive cocktail perks and access to the closed-door parties. Ask a manager how to apply for yours.",
    imgDesc:
      "Photo: burgundy 'PASSAPORTO' booklet with wax-sealed envelope and negroni glass on black croc leather, like the IG passport shot",
      src: "/images/events/passport.png"
  },
];

export const MERCH = [
  { name: "Tricou", price: "250 lei", imgDesc: "Photo: white tee with orange 'MY NEGRONI IS YOUR PUTERE' print, worn from the back like the IG shot" , src: "/images/merch/tshirt.png"}, 
  { name: "Hanorac", price: "550 lei", imgDesc: "Photo: black hoodie with blurred 'WANNA DRINK ABOUT IT?' orange print" , src: "/images/merch/multiple-merch.png"},
  { name: "Căciulă Alpaca", price: "250 lei", imgDesc: "Photo: red 100% alpaca beanie folded, embroidered logo patch" , src: "/images/merch/beanie.png"},
  { name: "Sacoșă Tote", price: "34 lei", imgDesc: "Photo: cream tote bag with red 'Negroni Is My Love Language' print, filled with cocktail jars" , src: "/images/merch/tshirt.png"},
  { name: "Halbă", price: "129 lei", imgDesc: "Photo: heavy glass mug with red NEGRONI roundel logo, filled with ice" , src: "/images/merch/tshirt.png"},
  { name: "Pahar", price: "49 lei", imgDesc: "Photo: branded rocks glass with red logo, single big ice cube" , src: "/images/merch/beanie.png"},
  { name: "Șosete", price: "29 lei", imgDesc: "Photo: pair of red-cream checkered socks, flat lay" , src: "/images/merch/tshirt-v2.png"},
  { name: "Sticker Pack", price: "29 lei", imgDesc: "Photo: scattered die-cut stickers — logo roundel, 'negronied', banana flask" , src: "/images/merch/beanie.png"},
  { name: "Brățară", price: "15 lei", imgDesc: "Photo: woven festival bracelets with woven-in slogans, stacked on a wrist holding a negroni" , src: "/images/merch/multiple-merch.png"},
  { name: "Pin", price: "29 lei", imgDesc: "Photo: enamel pin of the red NEGRONI roundel on denim" , src: "/images/merch/beanie.png"},
];

export const SLOGANS = [
  "Can't stop drinking about you",
  "Wanna drink about it?",
  // "My Negroni, your lips, apocalypse",
  "Negronied together forever",
  "My Negroni is your putere",
];

export const INFO = {
  address: "5 Matei Millo St, Bucharest",
  mapsUrl: "https://maps.app.goo.gl/JDXs7FD39UBBuofCA",
  instagram: "https://www.instagram.com/negroni.ro",
  instagramHandle: "@negroni.ro",
  tripadvisor:
    "https://www.tripadvisor.co.uk/Attraction_Review-g294458-d32822690-Reviews-Negroni_Aperitivo_Bar-Bucharest.html",
  menuPdf: "https://l.ead.me/negronicatalogue",
  hours: [
    { days: "Fri – Sat", time: "18:19 – 03:19" },
    { days: "Sun – Thu", time: "18:19 – 02:19" },
  ],
  trainPrice: 28,
  trainTime: "18:19 – 20:19",
};
