/* Full NEGRONI Aperitivo Bar menu (2026), structured for the /menu page.
   Sourced from the printed menu (PDF). Tap cocktails, signatures and merch
   overlap with lib/data.ts (used on the homepage) — kept in sync by hand. */

export type MenuItem = {
  name: string;
  price: string;
  size?: string;
  abv?: string;
  notes?: string;
  ingredients?: string;
  story?: string;
};

export type MenuGroup = {
  heading?: string;
  sub?: string;
  items: MenuItem[];
};

export type MenuCategory = {
  id: string;
  navLabel: string;
  eyebrow: string;
  title: string;
  intro?: string;
  groups: MenuGroup[];
};

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "aperitivo",
    navLabel: "Aperitivo",
    eyebrow: "36 lei · every glass on tap",
    title: "Aperitivo",
    intro:
      "The 12 cocktails that started it all — poured straight from the tap, daily. Ride the Aperitivo Train 18:19–20:19 and get all 12 for 28 lei.",
    groups: [
      {
        heading: "On Tap",
        items: [
          {
            name: "Negroni",
            size: "120 ml",
            abv: "21,1%",
            price: "36 lei",
            notes: "Sweet · Bitter · Boozy · Rich · With Ice",
            ingredients: "Gin Negroni, Bitter Negroni, Vermut Roșu Dulce Negroni, Portocale",
          },
          {
            name: "Passiocletta",
            size: "170 ml",
            abv: "14,8%",
            price: "36 lei",
            notes: "Sweet · Bitter · Fruity · Rich · Light · Sparkle · With Ice",
            ingredients:
              "Aperitiv Eleven Negroni, Bitter Negroni, Bitter OLD 1919 Negroni, Lichior Chinola Passion Fruit, Vin Spumant Montelvini Cuvee, Apă de Trandafiri&Lămâie",
          },
        ],
      },
      {
        heading: "Everyday Cocktails",
        items: [
          {
            name: "Sbagliato",
            size: "150 ml",
            abv: "14,9%",
            price: "36 lei",
            notes: "Sweet · Bitter · Salty · Light · Sparkle · With Ice",
            ingredients: "Bitter Negroni, Vermut Roșu Dulce Negroni, Vin Spumant San Martino, Măsline",
          },
          {
            name: "Milanese G&T",
            size: "150 ml",
            abv: "9,6%",
            price: "36 lei",
            notes: "Sweet · Bitter · Delicate · Sparkle · With Ice",
            ingredients: "Gin Negroni, Bitter Negroni, Apă Tonică Bona, Lime",
          },
          {
            name: "Rosita",
            size: "120 ml",
            abv: "26,6%",
            price: "36 lei",
            notes: "Sweet · Bitter · Boozy · Rich · With Ice",
            ingredients: "Tequila Orendain Blanco, Bitter's mix, Vermut Roșu Dulce Negroni, Lime",
          },
          {
            name: "Mi-To",
            size: "100 ml",
            abv: "19,2%",
            price: "36 lei",
            notes: "Sweet · Bitter · Salty · Light · With Ice",
            ingredients: "Bitter Negroni, Vermut Roșu Dulce Negroni, Bitter Fusetti Mare, Vermut Bucci Rosso",
          },
          {
            name: "Americano",
            size: "120 ml",
            abv: "11,6%",
            price: "36 lei",
            notes: "Sweet · Bitter · Citrusy · Light · With Ice",
            ingredients:
              "Bitter Negroni, Vermut Roșu Dulce Negroni, Bitter Fusetti Mare, Apă de Trandafiri&Lămâie, Portocale",
          },
        ],
      },
      {
        heading: "Spritz",
        items: [
          {
            name: "Venetian Spritz",
            size: "175 ml",
            abv: "11%",
            price: "36 lei",
            notes: "Sweet · Bitter · Light · Sparkle · With Ice",
            ingredients: "Aperitiv Eleven Negroni, Vin Spumant Montelvini Cuvee, Măsline",
          },
          {
            name: "Negroni Spritz",
            size: "175 ml",
            abv: "9,6%",
            price: "36 lei",
            notes: "Sweet · Bitter · Delicate · Sparkle · With Ice",
            ingredients:
              "Bitter's mix, Aperitiv Eleven Negroni, Vin Spumant Montelvini Cuvee, Apă Tonică Bona, Portocale",
          },
          {
            name: "Veneto Spritz",
            size: "175 ml",
            abv: "13%",
            price: "36 lei",
            notes: "Sweet · Bitter · Light · Sparkle · With Ice",
            ingredients:
              "Aperitiv Sixteen Negroni, Vin Spumant Montelvini Cuvee, Apă de Trandafiri, Portocală Uscată",
          },
          {
            name: "Hugo",
            size: "175 ml",
            abv: "11,8%",
            price: "36 lei",
            notes: "Sweet · Floral · Light · Fresh · Sparkle · With Ice",
            ingredients: "Aperitiv Sambuco Negroni, Suc de Lime, Vin Spumant Montelvini Cuvee, Mentă, Lime",
          },
          {
            name: "Limoncello Spritz",
            size: "175 ml",
            abv: "15,4%",
            price: "36 lei",
            notes: "Sweet · Bitter · Citrusy · Light · Sparkle · With Ice",
            ingredients:
              "Limoncello Negroni, Aperitiv Sambuco Negroni, Suc de Lime, Vin Spumant Montelvini Cuvee, Apă Spumante",
          },
        ],
      },
    ],
  },

  {
    id: "drops",
    navLabel: "Summer & Bubbles",
    eyebrow: "Warm-weather pours",
    title: "Summer Drops",
    intro: "Fresh smashes, frozen sips and bubbly G&Ts for golden-hour drinking.",
    groups: [
      {
        heading: "Summer Drops",
        items: [
          {
            name: "Basil Smash",
            size: "90 ml",
            abv: "25%",
            price: "49 lei",
            notes: "Sweet · Sour · Fresh · Citrusy · Boozy · With Ice",
            ingredients: "Basil Gin di Treviso Negroni, Sirop de Mere Verzi, Suc de Lămâie, Sirop",
          },
          {
            name: "Matcha Martini",
            size: "110 ml",
            abv: "20%",
            price: "49 lei",
            notes: "Sweet · Sour · Bitter · Fresh · Citrusy · Umami · Boozy",
            ingredients: "Teapsy Matcha Liquor, Vodka Ven-Ice, Yuzu Sake, Suc de Lămâie, Sirop",
          },
        ],
      },
      {
        heading: "Frozen",
        items: [
          {
            name: "Strawberry Margarita",
            size: "130 ml",
            abv: "14%",
            price: "49 lei",
            notes: "Sweet · Sour · Fruity · Delicate · Creamy",
            ingredients: "Tequila Orendain, Cointreau, Piure de căpșuni homemade, Suc de Lămâie, Sirop",
            story:
              "Hot girl summer attitude in a glass. Tequila blanco gives it confidence, triple sec makes it flirty, fresh lime keeps it sharp — sun-soaked strawberries leave you with a kiss you'll keep coming back for. Frozen, fruity and seductive.",
          },
          {
            name: "Pandan Collada",
            size: "150 ml",
            abv: "6%",
            price: "49 lei",
            notes: "Sweet · Sour · Fruity · Delicate · Creamy",
            ingredients:
              "Lichior de Pandan Bandoeng'22, Rom de Cocos, Suc de Portocale, Suc de Ananas, Lapte Condensat, Sirop de Vanilie",
            story:
              "The summer's Dancing Queen — always the life of the party. Delicate pandan liqueur leads the way, with coconut rum and purée close behind. Golden pineapple and fresh orange swirl in sync as condensed milk glides in. Tropical, creamy, dreamy.",
          },
        ],
      },
      {
        heading: "Bubbles",
        items: [
          {
            name: "Pompelmo G&T",
            size: "180 ml",
            abv: "9,8%",
            price: "43 lei",
            notes: "Sweet · Sour · Citrusy · Delicate · Sparkle · With Ice",
            ingredients: "Gin Kapriol Grapefruit&Hibiscus, Suc de Grepfrut, Apă Tonică cu Lămâie",
          },
          {
            name: "Elderflower G&T",
            size: "180 ml",
            abv: "11,8%",
            price: "43 lei",
            notes: "Sweet · Sour · Citrusy · Floral · Light · Sparkle · With Ice",
            ingredients: "Gin Kapriol Lemon&Bergamot, Aperitiv Sambuco Negroni, Apă Tonică cu Lămâie",
          },
          {
            name: "Farmacia G&T",
            size: "190 ml",
            abv: "13,1%",
            price: "43 lei",
            notes: "Sweet · Sour · Bitter · Citrusy · Herbal · Light · Sparkle · With Ice",
            ingredients:
              "Gin Kapriol Dry, La Gauloise Verte, Lime Cordial, Angostura Bitter, Apă Tonică cu Lămâie, Castraveți",
          },
          {
            name: "Paloma Bianca",
            size: "175 ml",
            abv: "13,7%",
            price: "43 lei",
            notes: "Sweet · Sour · Salty · Fruity · Light · Sparkle · With Ice",
            ingredients: "Tequila Orendain Blanco, Lime Cordial, Three Cents Pink Grapefruit Soda, Sare",
          },
        ],
      },
    ],
  },

  {
    id: "negronis",
    navLabel: "Negronis",
    eyebrow: "Where it all began",
    title: "Negronis",
    intro: "Nine ways to bend the classic — bitter, boozy and unapologetically rich.",
    groups: [
      {
        items: [
          {
            name: "Tiki Negroni",
            size: "150 ml",
            abv: "13,6%",
            price: "46 lei",
            notes: "Sweet · Bitter · Berry · Fruity · Light · Rich · With Ice",
            ingredients:
              "Rom King's Pineapple Punch House, Bitter's mix, Vermut Roșu Dulce Negroni, Vermut Bucci Rosso, Sirop de Zmeură, Spumă de Ananas, Pudră de Zmeură",
          },
          {
            name: "Porno Negroni",
            size: "120 ml",
            abv: "29,4%",
            price: "49 lei",
            notes: "Sweet · Bitter · Fruity · Boozy · Rich",
            ingredients:
              "Gin Kapriol Grapefruit&Hibiscus, Gin Kapriol London Dry, Bitter Negroni, Vermut Roșu Dulce Negroni, Vermut Bucci Rosso, Lichior Chinola Passion Fruit, Sirop de Vanilie, Candurin",
          },
          {
            name: "Negroni Supremo",
            size: "90 ml",
            abv: "28,5%",
            price: "49 lei",
            notes: "Sweet · Bitter · Boozy · Rich · With Ice",
            ingredients:
              "Gin Acva Lvce, Nutmeg Gin Matters, Bitter Gran Classico, Bitter Negroni, Bitter OLD 1919 Negroni, Vermut Antica Formula Carpano Rosso, Vermut Negroni Venegazzu Rosso, Vermut Bucci Rosso, Cireașă",
          },
          {
            name: "Amaretto Negroni",
            size: "110 ml",
            abv: "27,7%",
            price: "49 lei",
            notes: "Sweet · Bitter · Fruity · Nutty · Boozy · Rich · With Ice",
            ingredients:
              "Bitter Gran Classico, Bitter OLD 1919 Negroni, Bitter Negroni, Vermut Antica Formula Carpano Rosso, Vermut Bucci Rosso, Nutmeg Gin Matters, Gin Aqva Lvce V.I.C.E., Lichior Frangelico, Lichior de Pandan Bandoeng'22, Angostura Orange, Pecan",
          },
          {
            name: "6+4",
            size: "90 ml",
            abv: "31,6%",
            price: "46 lei",
            notes: "Sweet · Bitter · Herbal · Floral · Fruity · Boozy · With Ice",
            ingredients: "Basil Gin di Treviso Negroni, Luxardo Bianco Bitter, De Kyeper Peach Tree, Limes",
          },
          {
            name: "Caprese Negroni",
            size: "75 ml",
            abv: "25,6%",
            price: "49 lei",
            notes: "Bitter · Sweet · Salty · Herbal · Umami · Boozy · Rich",
            ingredients:
              "Gin Kapriol Dry, Basil Gin di Treviso Negroni, Lichior Tomato Spirit, Bitter Fusetti Mexico, Bitter Fusetti Mare, Balsamic Gin Alb, Sauvignon Blanc Collio DOC, roșie",
          },
          {
            name: "Bosco Negroni",
            size: "75 ml",
            abv: "27,4%",
            price: "49 lei",
            notes: "Bitter · Sweet · Nutty · Umami · Boozy · With Ice · Rich",
            ingredients:
              "Gin Kapriol London Dry infuzat cu hribi, Bitter Fusetti Cocoa, Bitter Fusetti Mare, Vermut Negroni Venegazzu Bianco",
          },
          {
            name: "Enzoni",
            size: "75 ml",
            abv: "21%",
            price: "43 lei",
            notes: "Bitter · Sweet · Sour · Fruity · Floral · Boozy",
            ingredients: "Gin Negroni, Bitter OLD 1919 Negroni, Verjus, Sirop de Agave, Balsamic Gin Alb, Struguri",
          },
          {
            name: "Yuzu Negroni",
            size: "75 ml",
            abv: "18,3%",
            price: "49 lei",
            notes: "Bitter · Sweet · Fruity · Citrusy · Light · Rich · Fresh",
            ingredients:
              "Yuzu Sake, Gin Kapriol Lemon&Bergamot, Bitter Luxardo Bianco, Vermut Negroni Venegazzu Bianco, Lichior de Bergamot",
          },
        ],
      },
    ],
  },

  {
    id: "signatures",
    navLabel: "Signatures",
    eyebrow: "The Negronied way",
    title: "Signatures",
    intro: "Original creations, built from scratch behind our bar.",
    groups: [
      {
        items: [
          {
            name: "Venetian Sour",
            size: "150 ml",
            abv: "14,4%",
            price: "46 lei",
            notes: "Sweet · Sour · Berry · Citrusy · Light · Rich · Creamy",
            ingredients:
              "Gin Negroni, Aperitiv Eleven Negroni, Lichior de Iaurt, Suc de Lămâie, Sirop de Zmeură, Lime Cordial, Apă de Trandafiri, Vegg White, Pudră de Zmeură",
          },
          {
            name: "Giugiuc Sour",
            size: "125 ml",
            abv: "20%",
            price: "46 lei",
            notes: "Sweet · Sour · Fruity · Citrusy · Floral · Boozy · Rich",
            ingredients:
              "Vodka Absolut Pear, Pater Rachiu de Pere, Sirop de Mere Verzi, Sirop de Miere, Suc de Lămâie, Aloe, Vegg White",
          },
          {
            name: "Drinkita",
            size: "140 ml",
            abv: "21,5%",
            price: "49 lei",
            notes: "Sweet · Sour · Fruity · Citrusy · Boozy",
            ingredients:
              "Mezcal Ojo de Tigre Joven, Lichior Chinola Mango, Lichior La Galouise Jaune, Suc de Lămâie, Sirop de Agave, Vegg White, Mango",
          },
          {
            name: "Sunset Spritz",
            size: "230 ml",
            abv: "12,2%",
            price: "46 lei",
            notes: "Sweet · Sour · Bitter · Berry · Citrusy · Fruity · Light · Sparkle · With Ice",
            ingredients:
              "Lichior de Bergamot, Cynar, De Kyeper Peach Tree, Suc de Grepfrut, Suc de Lămâie, Sirop de Zmeură, Sauvignon Blanc Collio DOC, Apă Spumante",
          },
          {
            name: "Gandoni",
            size: "160 ml",
            abv: "13%",
            price: "49 lei",
            notes: "Sweet · Sour · Fruity · Citrusy · Light · Rich · Sparkle",
            ingredients:
              "Gin Kapriol London Dry, Gin Kapriol Lemon&Bergamot, Aperitiv Eleven Negroni, Lichior Chinola Passion Fruit, Piure de Fructul Pasiunii, Sirop de Vanilie, Vin Spumant San Martino, Spumă de Ananas",
          },
          {
            name: "Vișinată Cola",
            size: "180 ml",
            abv: "8,2%",
            price: "49 lei",
            notes: "Sweet · Sour · Berry · Citrusy · Delicate · With Ice · Creamy",
            ingredients: "Vișinată, Amaro Montenegro, Cola, Limes, Spumă de vanilie și boabe de tonka",
          },
        ],
      },
      {
        heading: "Liquid Luxury",
        items: [
          {
            name: "Dulce & Banana",
            size: "85 ml",
            abv: "26,9%",
            price: "79 lei",
            notes: "Sweet · Fruity · Nutty · Boozy · Rich",
            ingredients:
              "Rum Bumbu, Tempus Fugit Crème de Banane, Rum Aluna Coconut, Rum Plantation Overproof, Sauvignon Blanc Collio DOC, Balsamic Gin Alb, Angostura Orange, Ploscă tip Banană",
            story:
              "We call it a statement piece. Creamy banana, boozy coconut, and a layered rum backbone — rich, fruity, unapologetically luxurious. The real twist? It comes dressed as a banana flask you take with you. Very 'Dulce Vita'.",
          },
        ],
      },
    ],
  },

  {
    id: "classics",
    navLabel: "Classics",
    eyebrow: "Premium classics",
    title: "Classic",
    groups: [
      {
        items: [
          {
            name: "Boulevardier",
            size: "120 ml",
            abv: "25%",
            price: "46 lei",
            notes: "Sweet · Bitter · Nutty · Boozy · Rich · With Ice",
            ingredients: "Bourbon Ezra Brooks 99, Bitter Negroni, Vermut Roșu Dulce Negroni, Portocale",
          },
          {
            name: "Clover Club",
            size: "150 ml",
            abv: "21,7%",
            price: "43 lei",
            notes: "Sweet · Sour · Berry · Citrusy · Boozy · Rich",
            ingredients:
              "Gin Kapriol London Dry, Aperitiv Eleven Negroni, Suc de Lămâie, Sirop de Zmeură, Apă de Trandafiri, Vegg White, Pudră de Zmeură",
          },
          {
            name: "Tommy's Margarita",
            size: "100 ml",
            abv: "22,4%",
            price: "43 lei",
            notes: "Sweet · Sour · Citrusy · Boozy · Rich · Fresh",
            ingredients: "Tequila Batanga Reposado, Suc de Lime, Sirop de Agave, Lime",
          },
          {
            name: "Spicy Margarita",
            size: "100 ml",
            abv: "20%",
            price: "43 lei",
            notes: "Sweet · Sour · Citrusy · Spicy · Boozy",
            ingredients: "Tequila Neurita Picante, Suc de Lime, Sirop de Agave, Lime",
          },
          {
            name: "Gin Sour",
            size: "150 ml",
            abv: "22,2%",
            price: "43 lei",
            notes: "Sweet · Sour · Citrusy · Boozy · Rich · Fresh",
            ingredients: "Gin Negroni, Suc de Lămâie, Castraveți, Sirop, Lămâie",
          },
          {
            name: "Whiskey Sour",
            size: "110 ml",
            abv: "27%",
            price: "43 lei",
            notes: "Sweet · Sour · Citrusy · Boozy · Rich · With Ice",
            ingredients: "Whiskey Rebel Rye, Suc de Lămâie, Sirop, Vegg White, Angostura Bitter",
          },
          {
            name: "Amaretto Sour",
            size: "120 ml",
            abv: "15,9%",
            price: "49 lei",
            notes: "Sweet · Sour · Citrusy · Nutty · Boozy · Rich · Creamy · With Ice",
            ingredients:
              "Bourbon Ezra Brooks 99, Rom Diplomatico Mantuano, Lichior Amaretto Sofia, Lichior de Alună Nocciola, Suc de Lămâie, Lime Cordial, Vegg White",
          },
          {
            name: "Espresso Martini",
            size: "100 ml",
            abv: "24%",
            price: "43 lei",
            notes: "Sweet · Bitter · Boozy · Rich · Creamy",
            ingredients: "Vodka Ven Ice, Lichior de Cafea Ninebar, Espresso",
          },
          {
            name: "Bloody Mary",
            size: "175 ml",
            abv: "10,3%",
            price: "43 lei",
            notes: "Sweet · Sour · Spicy · Smoky · Citrusy · Boozy · Rich · With Ice",
            ingredients:
              "Vodka Ven Ice, Suc de Portocale&Lămâie, Suc de Roșii, Sirop, Mix de Condimente, Sos BBQ, Sos de Kimchi, Măsline",
          },
          {
            name: "Old Fashioned",
            size: "90 ml",
            abv: "32,3%",
            price: "43 lei",
            notes: "Sweet · Bitter · Boozy · Rich · With Ice",
            ingredients: "Bourbon Ezra Brooks 99, Sirop de Trestie, Angostura Bitter",
          },
          {
            name: "Cherry Cuba Libre",
            size: "160 ml",
            abv: "13,3%",
            price: "43 lei",
            notes: "Sweet · Berry · Light · Sparkle · With Ice",
            ingredients: "Rom Marasca Cherry Punch House, Apă Cola Bona, Sirop de Zmeură, Lime",
          },
          {
            name: "Coconut Cuba Libre",
            size: "160 ml",
            abv: "8%",
            price: "43 lei",
            notes: "Sweet · Fruity · Citrusy · Nutty · Delicate · With Ice",
            ingredients: "Rum Aluna Coconut, Apă Cola Bona, Lichior de Pandan Bandoeng'22",
          },
        ],
      },
    ],
  },

  {
    id: "shots",
    navLabel: "Shots",
    eyebrow: "One and done",
    title: "Shots",
    groups: [
      {
        items: [
          {
            name: "Boobs",
            size: "40 ml",
            abv: "24%",
            price: "23 lei",
            notes: "Sweet · Fruity · Boozy",
            ingredients: "Rom Blanco Ciemme, Grappa de Piersici Negroni, Suc de Lime, Lime Cordial, Sirop",
          },
          {
            name: "Green Mexican",
            size: "50 ml",
            abv: "19%",
            price: "23 lei",
            notes: "Sweet · Sour · Fruity · Light",
            ingredients: "Tequila Orendain Blanco, Lichior Pisang Ambon, Suc de Lime",
          },
          { name: "Neurita Tequila Picante", size: "40 ml", abv: "35%", price: "26 lei", notes: "Spicy · Boozy" },
          { name: "Neurita Tequila Citrus", size: "40 ml", abv: "35%", price: "26 lei", notes: "Citrusy · Boozy" },
          { name: "Neurita Tequila Rosa", size: "40 ml", abv: "35%", price: "26 lei", notes: "Floral · Boozy" },
        ],
      },
    ],
  },

  {
    id: "zero",
    navLabel: "Mocktails",
    eyebrow: "0,0% — still bittersweet",
    title: "Mocktails",
    groups: [
      {
        items: [
          {
            name: "Tiki Negroni Zero",
            size: "150 ml",
            abv: "0%",
            price: "33 lei",
            notes: "Sweet · Bitter · Sour · Berry · Fruity · With Ice",
            ingredients:
              "Gin Zero Hanged Man, Bitter Zero Ciemme, Vermouth Zero Mainardo, Suc de Ananas&Lămâie, Sirop de Zmeură, Pudră de Zmeură",
          },
          {
            name: "Venetian Spritz Zero",
            size: "175 ml",
            abv: "0%",
            price: "33 lei",
            notes: "Sweet · Fruity · Sparkle · With Ice",
            ingredients: "Aperitivo Zero Ciemme, Suc de Grapefrut, Apă Tonică Bona, Lime",
          },
          {
            name: "Hugo Zero",
            size: "175 ml",
            abv: "0%",
            price: "33 lei",
            notes: "Sweet · Sour · Floral · Fresh · Sparkle · With Ice",
            ingredients: "Sambuco Zero Ciemme, Suc de Lime, Castraveți, Apă Tonică Bona, Mentă, Lime",
          },
          {
            name: "Limoncello Spritz Zero",
            size: "200 ml",
            abv: "0%",
            price: "33 lei",
            notes: "Sweet · Citrusy · Sparkle · With Ice",
            ingredients:
              "Limoncello Zero IGP Sorrento, Fin Spumant Faber Fără Alcool, Sambuco Zero Ciemme, Apă Minerală Goccia Blu",
          },
          {
            name: "Amaretto Sour Zero",
            size: "130 ml",
            abv: "0%",
            price: "33 lei",
            notes: "Sweet · Sour · Citrusy · Nutty · Creamy",
            ingredients: "Amaretto Zero, Suc de Lămâie, Vegg White",
          },
          {
            name: "Paloma Zero",
            size: "175 ml",
            abv: "0%",
            price: "33 lei",
            notes: "Sweet · Sour · Citrusy · Smoky · With Ice",
            ingredients: "Humo Mezcal Zero, Pink Grapefruit Soda, Suc de Lime",
          },
        ],
      },
    ],
  },

  {
    id: "antipasti",
    navLabel: "Antipasti",
    eyebrow: "Italian snacks",
    title: "Antipasti",
    intro:
      "Allergens: Ouă, Lupin, Gluten, Arahide, Soia, Lapte, Nuci, Țelină, Muștar, Susan, Sulfiți, Pește. Full nutritional data available on request.",
    groups: [
      {
        heading: "Piccoli",
        items: [
          { name: "Formaggio Nachos", size: "160 g", price: "19 lei", ingredients: "și sos la alegere: Salsa / Guacamole / Jalapeños" },
          { name: "Mix de Măsline Italiene", size: "120 g", price: "19 lei", ingredients: "Nocellara & Cerignola" },
          { name: "Mix Arahide", size: "120 g", price: "19 lei", ingredients: "Chilly, Wasabi, Cheese" },
          { name: "Taralli Pizzaio", size: "120 g", price: "19 lei" },
          { name: "Mix de Parmigiano", size: "100 g", price: "29 lei", ingredients: "Vacche Rosse & Vacca Bruna" },
          { name: "Giardiniera", size: "120 g", price: "29 lei", ingredients: "Murături italiene" },
          { name: "Confit de Roșii Cherry", size: "120 g", price: "29 lei" },
          { name: "Roșii Uscate la Soare", size: "100 g", price: "19 lei" },
          { name: "Anghinare la Grătar", size: "100 g", price: "19 lei" },
        ],
      },
      {
        heading: "Grandi",
        items: [
          {
            name: "Antipasti Italiani",
            size: "410 g",
            price: "69 lei",
            ingredients: "Confit de roșii cherry, Giardiniera, Mix de măsline italiene, Crostini",
          },
          {
            name: "Aperitivo Italiano",
            size: "360 g",
            price: "49 lei",
            ingredients: "Roșii uscate la soare, Anghinare la grătar, Mix de măsline italiene, Crostini",
          },
          {
            name: "Platou 'Drunken Cheese'",
            size: "290 g",
            price: "79 lei",
            ingredients:
              "Branza caciotta al tartufo, Branza al barolo, Branza in foglie di castagno, Branza con frutta e grappa di moscato, Branza parmigiano reggiano, Miez de nucă cu miere, Struguri",
          },
          {
            name: "Platou de Carne",
            size: "290 g",
            price: "49 lei",
            ingredients: "Mortadella cu fistic, Salame Napoli, Salami Ventricina Piccante, Capacollo, Mix de măsline italiene, Parmigiano",
          },
          {
            name: "Feta & Nocellara Olives with Basil Oil & Orange Zest",
            size: "295 g",
            price: "49 lei",
            ingredients: "Brânză feta, Nocellara Olives, ulei de măsline infuzat cu busuioc, coajă rasă de portocală",
          },
          {
            name: "Prosciutto with Nachos & Pickles",
            size: "170 g",
            price: "49 lei",
            ingredients: "Nachos, Prosciutto crudo, Castraveți cornichon murați",
          },
          {
            name: "Spiedini della Casa",
            size: "145 g",
            price: "39 lei",
            ingredients: "Parmezan, Pomodori Confit, Roșii cherry, Carciofi Grigliati, Măsline, Pomodori Secchi Artigianali, Castraveți Cornichon murați",
          },
          {
            name: "Crostini della Casa",
            size: "350 g",
            price: "59 lei",
            ingredients:
              "Brânză de capră, Somon afumat, Miere, Mărar · Sos de brânză, Confit de roșii cherry, Pesto de busuioc și fistic · Pastă de anghinare, Feliile de trufe · Anșoa, Miere, Portocale",
          },
          {
            name: "Schiacciata with Prosciutto Cotto, Zucchini & Mozzarella",
            size: "390 g",
            price: "49 lei",
            ingredients: "Mozzarella, Prosciutto cotto, Cremă de anghinare, Ricotta, Ulei de masline, Parmezan, Rucola, Ceapă Murată",
          },
          {
            name: "Schiacciata with Mortadella, Pistachio Cream & Truffle",
            size: "335 g",
            price: "49 lei",
            ingredients: "Mortadella, Cremă de fistic si ricotta, Parmezan, Mozzarella, Rucola, Cremă de oțet balsamic, Cremă de trufe cu miere",
          },
          {
            name: "Schiacciata Veggie Trapanese aka Siciliana",
            size: "400 g",
            price: "49 lei",
            ingredients: "Mozzarella, Ardei capia copt, Zucchini, Pomidori Secchi Artigianali, Ulei de măsline, Parmezan, Pastă de susan cu miere",
          },
          {
            name: "Schiacciata with Chicken Schnitzel aka Ave, Caesar!",
            size: "335 g",
            price: "49 lei",
            ingredients: "Medalion de pui, Stracciatella, Sos Caesar Tahini, Parmezan, Suc de lămâie, sos Worcester, Fulgi de Nachos, Salată romană, ardei jalapeño",
          },
          {
            name: "Schiacciata with Mortadella & Kimchi Salsa",
            size: "345 g",
            price: "49 lei",
            ingredients: "Mortadella, Sos Kimchi cu ardei copti și miere, Rucola, Stracciatella, Ricotta, Cremă de brânză",
          },
        ],
      },
    ],
  },

  {
    id: "2go",
    navLabel: "2Go",
    eyebrow: "Take it with you",
    title: "Menu2Go",
    intro:
      "Amici, use Menu2Go not only for take away, but also for faster service in the bar — to stay negronied together forever.",
    groups: [
      {
        heading: "Cocktails in Cans",
        items: [
          {
            name: "Negroni",
            size: "200 ml",
            abv: "21,1%",
            price: "65 lei",
            ingredients: "Gin Negroni, Bitter Negroni, Vermut Roșu Dulce Negroni",
          },
          {
            name: "Boulevardier",
            size: "200 ml",
            abv: "25%",
            price: "75 lei",
            ingredients: "Whiskey Boulevardier Bourbon, Bitter Negroni, Vermut Roșu Dulce Negroni",
          },
        ],
      },
      {
        heading: "Cocktails in Tubes",
        items: [
          {
            name: "Negroni",
            size: "400 ml",
            abv: "21,1%",
            price: "130 lei",
            ingredients: "Gin Negroni, Bitter Negroni, Vermut Roșu Dulce Negroni",
          },
          {
            name: "Boulevardier",
            size: "400 ml",
            abv: "25%",
            price: "150 lei",
            ingredients: "Whiskey Boulevardier Bourbon, Bitter Negroni, Vermut Roșu Dulce Negroni",
          },
        ],
      },
      {
        heading: "Cocktails in Bottles",
        items: [
          {
            name: "Negroni Antica Distilleria",
            size: "500 ml",
            abv: "26%",
            price: "150 lei",
            ingredients: "Gin, bitter, vermut roșu dulce",
          },
        ],
      },
    ],
  },

  {
    id: "wine",
    navLabel: "Wine",
    eyebrow: "By the glass or bottle",
    title: "Wine & Sparkling",
    groups: [
      {
        heading: "By Glass",
        items: [
          { name: "Vino Frizzante", size: "100 ml", abv: "11%", price: "23 lei" },
          { name: "Sauvignon DOC Collio", size: "150 ml", abv: "14%", price: "36 lei", ingredients: "Vin alb BIO — Ronco Blanchis" },
          { name: "Naiv Fetească Albă", size: "150 ml", abv: "12%", price: "35 lei", ingredients: "Vin alb — Casa de Vinuri Cotnari" },
          { name: "Naiv Busuioacă de Bohotin", size: "150 ml", abv: "13%", price: "35 lei", ingredients: "Vin rose — Casa de Vinuri Cotnari" },
          { name: "Merlot Falconera DOC Montello", size: "150 ml", abv: "14%", price: "36 lei", ingredients: "Vin roșu — Loredan Gasparini" },
          {
            name: "Cabernet Sauvignon Montello Asolo DOC 2020",
            size: "150 ml",
            abv: "12,5%",
            price: "36 lei",
            ingredients: "Vin roșu — Loredan Gasparini",
          },
        ],
      },
      {
        heading: "By Bottle · 750 ml",
        items: [
          { name: "Asolo Prosecco Superiore DOCG Brut", abv: "11%", price: "250 lei", ingredients: "Vin spumant — Loredan Gasparini" },
          { name: "Metodo Classico Brut", abv: "12%", price: "290 lei", ingredients: "Vin spumant — Loredan Gasparini" },
          {
            name: "Prosecco Valdobbiadene Conegliano DOCG Brut Nature",
            abv: "11,5%",
            price: "250 lei",
            ingredients: "Vin spumant — Fondo Due Valli",
          },
          { name: "Carassia Blanc de Blancs", abv: "12%", price: "275 lei", ingredients: "Vin spumant Românesc — Carastelec" },
          { name: "Sauvignon DOC Collio", abv: "14%", price: "175 lei", ingredients: "Vin alb BIO — Ronco Blanchis" },
          { name: "Pinot Grigio DOC Collio", abv: "13,5%", price: "200 lei", ingredients: "Vin alb BIO — Ronco Blanchis" },
          {
            name: "Zghihara de Huși Averesti Diamond Junior",
            abv: "12,5%",
            price: "175 lei",
            ingredients: "Vin alb — Domeniile Averesti",
          },
          { name: "Naiv Fetească Albă", abv: "12%", price: "175 lei", ingredients: "Vin alb — Casa de Vinuri Cotnari" },
          { name: "Naiv Busuioacă de Bohotin", abv: "13%", price: "175 lei", ingredients: "Vin rose — Casa de Vinuri Cotnari" },
          { name: "Merlot Falconera DOC Montello", abv: "14%", price: "175 lei", ingredients: "Vin roșu — Loredan Gasparini" },
          { name: "Malbec IGT Colli Trevigiani", abv: "13,5%", price: "200 lei", ingredients: "Vin roșu — Loredan Gasparini" },
          {
            name: "Cabernet Sauvignon Montello Asolo DOC 2020",
            abv: "12,5%",
            price: "175 lei",
            ingredients: "Vin roșu — Loredan Gasparini",
          },
          {
            name: "Sparkling White Wine Alcohol Free",
            abv: "0,0%",
            price: "99 lei",
            ingredients: "Vin spumant — Fără Alcool — Faber",
          },
        ],
      },
    ],
  },

  {
    id: "spirits",
    navLabel: "Spirits",
    eyebrow: "Neat, 40 ml pours",
    title: "Spirits",
    groups: [
      {
        heading: "American Whiskey",
        items: [
          { name: "Ezra Brooks 99 Proof", size: "40 ml", abv: "49,5%", price: "30 lei" },
          { name: "Rebel Rye", size: "40 ml", abv: "50%", price: "30 lei" },
          { name: "Woodford Reserve", size: "40 ml", abv: "43,2%", price: "39 lei" },
          { name: "Woodford Reserve Rye", size: "40 ml", abv: "45,2%", price: "39 lei" },
        ],
      },
      {
        heading: "Scotch",
        items: [
          { name: "Kapriol Whisky", size: "40 ml", abv: "45,5%", price: "35 lei" },
          { name: "Ballantine's Finest", size: "40 ml", abv: "40%", price: "28 lei" },
          { name: "Talisker 10 YO", size: "40 ml", abv: "45,8%", price: "59 lei" },
          { name: "Laphroaig 10 YO", size: "40 ml", abv: "40%", price: "49 lei" },
        ],
      },
      {
        heading: "Irish",
        items: [{ name: "Jameson Caskmates", size: "40 ml", abv: "40%", price: "30 lei" }],
      },
      {
        heading: "Agave Spirits",
        items: [
          { name: "Orendain Tequila Blanco Jalisco", size: "40 ml", abv: "38%", price: "25 lei" },
          { name: "Batanga Tequila Blanco 100% Agave", size: "40 ml", abv: "38%", price: "30 lei" },
          { name: "Batanga Tequila Reposado 100% Agave", size: "40 ml", abv: "38%", price: "30 lei" },
          { name: "Mezcal Ojo de Tigre Joven", size: "40 ml", abv: "37%", price: "35 lei" },
          { name: "Mezcal Ojo de Tigre Reposado", size: "40 ml", abv: "37%", price: "35 lei" },
          { name: "Bruxo X Mezcal Espadín-Barril Joven", size: "40 ml", abv: "40%", price: "38 lei" },
          { name: "Bruxo No 1 Mezcal Espadín Joven", size: "40 ml", abv: "46%", price: "38 lei" },
          { name: "Bruxo No 2 Mezcal Pechuga Joven", size: "40 ml", abv: "46%", price: "38 lei" },
          { name: "Bruxo No 3 Mezcal Barril Joven", size: "40 ml", abv: "46%", price: "40 lei" },
          { name: "Bruxo No 4 Mezcal Ensamble Joven", size: "40 ml", abv: "43%", price: "45 lei" },
          { name: "Bruxo No 5 Mezcal Tobalá Joven", size: "40 ml", abv: "46%", price: "55 lei" },
          { name: "Santo Cuviso Bacanora Blanco", size: "40 ml", abv: "45%", price: "45 lei" },
          { name: "Sotol Nocheluna by Lenny Kravitz", size: "40 ml", abv: "43%", price: "45 lei" },
        ],
      },
      {
        heading: "Vodka & Rachiu",
        items: [
          { name: "Ven-Ice Italian Vodka", size: "40 ml", abv: "40,7%", price: "25 lei" },
          { name: "Pater Rachiu de Pere", size: "40 ml", abv: "37%", price: "28 lei" },
        ],
      },
      {
        heading: "Gin",
        items: [
          { name: "Aqva Lvce", size: "40 ml", abv: "47%", price: "39 lei" },
          { name: "Aqva Lvce V.I.C.E.", size: "40 ml", abv: "45,7%", price: "35 lei" },
          { name: "Aqva Lvce Navy Strength", size: "40 ml", abv: "57,5%", price: "35 lei" },
          { name: "Taggiasco The Olive Dry Gin", size: "40 ml", abv: "44%", price: "39 lei" },
          { name: "Servaj Papavero", size: "40 ml", abv: "42%", price: "30 lei" },
          { name: "Servaj Iris", size: "40 ml", abv: "44%", price: "30 lei" },
          { name: "Kapriol Italian Dry Gin", size: "40 ml", abv: "41,7%", price: "28 lei" },
          {
            name: "Kapriol Italian Gin",
            size: "40 ml",
            abv: "40,7%",
            price: "28 lei",
            ingredients: "Grapefruit&Hibiscus · Lemon&Bergamot · Blood Orange&Peach",
          },
          { name: "Negroni Gin", size: "40 ml", abv: "40,3%", price: "25 lei" },
          { name: "Negroni Rad Gin", size: "40 ml", abv: "45%", price: "29 lei" },
          { name: "Hendrick's", size: "40 ml", abv: "41,4%", price: "39 lei" },
          {
            name: "Hendrick's — Flavoured",
            size: "40 ml",
            abv: "43,4%",
            price: "45 lei",
            ingredients: "Flora Adora · Neptunia · Cabaret · Amazonia",
          },
          { name: "Moonlight Gin Wolf Pack", size: "40 ml", abv: "40%", price: "33 lei" },
        ],
      },
      {
        heading: "Rum",
        items: [
          { name: "Plantation O.F.T.D. Overproof", size: "40 ml", abv: "69%", price: "35 lei" },
          { name: "Bumbu The Original", size: "40 ml", abv: "40%", price: "32 lei" },
          { name: "Diplomatico Mantuano Extra Anejo", size: "40 ml", abv: "40%", price: "32 lei" },
          { name: "Diplomatico Reserva Exclusiva 12 YO", size: "40 ml", abv: "40%", price: "45 lei" },
          {
            name: "Punch-House Flavoured Rum",
            size: "25 ml",
            abv: "40%",
            price: "27 lei",
            ingredients: "King's Pineapple · Marasca Cherry · Seville Orange",
          },
          { name: "Aluna Coconut Rum", size: "40 ml", abv: "37,5%", price: "27 lei" },
        ],
      },
      {
        heading: "Grappa & Pisco",
        items: [
          { name: "Grappa Capo di Stato", size: "40 ml", abv: "48%", price: "29 lei" },
          { name: "Grappa Prosecco", size: "40 ml", abv: "40%", price: "25 lei" },
          { name: "Grappa di Camomilla", size: "40 ml", abv: "32%", price: "25 lei" },
          { name: "Pisco Barsol Quebranta", size: "40 ml", abv: "41,3%", price: "25 lei" },
        ],
      },
      {
        heading: "Herbal & Liquor",
        items: [
          { name: "Absinthe Mansinthe", size: "40 ml", abv: "66,6%", price: "35 lei" },
          { name: "Absinthe Duplais Blanche", size: "40 ml", abv: "68%", price: "35 lei" },
          { name: "Amaro della Casa", size: "40 ml", abv: "27%", price: "20 lei" },
          { name: "Amaro Montenegro", size: "40 ml", abv: "23%", price: "25 lei" },
          {
            name: "Bitter Fusetti",
            size: "40 ml",
            abv: "34%",
            price: "25 lei",
            ingredients: "Original · Cocoa · Mare · Mexico",
          },
          { name: "Nocino Artigianale", size: "40 ml", abv: "34%", price: "20 lei" },
          { name: "Negroni Fernet", size: "40 ml", abv: "39%", price: "25 lei" },
          { name: "Pandan Liqueur Bandoeng'22", size: "40 ml", abv: "22,2%", price: "25 lei" },
          { name: "Cynar", size: "40 ml", abv: "16,5%", price: "20 lei" },
          {
            name: "Liquore di Limone",
            size: "40 ml",
            abv: "28%",
            price: "25 lei",
            ingredients: "Negroni Antica Distilleria",
          },
        ],
      },
      {
        heading: "Beer",
        items: [
          { name: "Follina Follinetta", size: "330 ml", abv: "5%", price: "29 lei" },
          { name: "Follina Bramosa Tattoo", size: "330 ml", abv: "4,5%", price: "29 lei" },
          { name: "Follina Fiadora", size: "330 ml", abv: "4,5%", price: "29 lei" },
        ],
      },
    ],
  },

  {
    id: "coffee",
    navLabel: "Coffee & Soft",
    eyebrow: "Non-alcoholic",
    title: "Coffee & Soft Drinks",
    groups: [
      {
        heading: "Soft Drinks",
        items: [
          { name: "Goccia Blue", size: "250 ml", price: "16 lei", ingredients: "plată · carbogazoasă" },
          { name: "Goccia Blue", size: "750 ml", price: "32 lei", ingredients: "plată · carbogazoasă" },
          {
            name: "Apa Bona",
            size: "275 ml",
            price: "20 lei",
            ingredients: "Tonica Lemon · Rose & Lemon · Lime & Coco · Arancia Rossa · Ginger Beer · Cola",
          },
          { name: "C-Side Tonic", size: "330 ml", price: "22 lei" },
        ],
      },
      {
        heading: "Coffee",
        items: [
          { name: "Espresso", size: "30 ml", price: "11 lei" },
          { name: "Doppio", size: "60 ml", price: "14 lei" },
          { name: "Long Black", size: "80 ml", price: "14 lei" },
          { name: "Flat White", size: "200 ml", price: "19 lei" },
          { name: "Cappuccino", size: "200 ml", price: "16 lei" },
          { name: "Latte", size: "280 ml", price: "17 lei", ingredients: "Alergeni: lapte" },
        ],
      },
    ],
  },

  {
    id: "merch",
    navLabel: "Merch",
    eyebrow: "2Wear",
    title: "Merch",
    intro: "Available at the bar — 5 Matei Millo St.",
    groups: [
      {
        items: [
          {
            name: "Brățara",
            price: "15 lei",
            ingredients: "Can't Stop Drinking About You · Wanna Drink About It? · My Negroni, Your Lips, Apocalypse · Negronied Together Forever",
          },
          { name: "Șosete", price: "29 lei" },
          { name: "Sticker Pack", price: "29 lei" },
          { name: "Halbă", price: "129 lei" },
          { name: "Pahar", price: "49 lei" },
          { name: "Pin", price: "29 lei" },
          { name: "Tube", price: "15 lei" },
          { name: "Sacoșă Tote", price: "34 lei", ingredients: "Negroni Passport Black" },
          { name: "Sacoșă Tote Limited", price: "39 lei", ingredients: "Negroni Is My Love Language" },
          {
            name: "Tricou",
            price: "250 lei",
            ingredients:
              "Can't Stop Drinking About You · Wanna Drink About It? · My Negroni, Your Lips, Apocalypse · Negroni Passport Black · Negroni Passport White · Porno Negroni · My Negroni Is Your Putere · All I Need Is $500 Billion Dollars And Negroni",
          },
          { name: "Căciulă", price: "250 lei", ingredients: "100% lână de alpaca" },
          { name: "Hanorac", price: "550 lei" },
        ],
      },
    ],
  },
];
