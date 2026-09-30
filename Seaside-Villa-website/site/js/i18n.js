/* =========================================================================
   Seaside Villa La Tejita — translations (English · Čeština · Español)
   To change a text, edit it here in all three languages.
   Plural entries use { one, few, other } and are filled with {n}.
   ========================================================================= */
window.I18N = (function () {
  "use strict";

  const LANGS = {
    cs: { code: "CZ", name: "Čeština", locale: "cs-CZ" },
    en: { code: "EN", name: "English", locale: "en-GB" },
    es: { code: "ES", name: "Español", locale: "es-ES" }
  };
  const DEFAULT = "en";

  const DICT = {
    /* ------------------------------------------------------------------ EN */
    en: {
      "meta.title": "Seaside Villa La Tejita · Holiday house in Tenerife South",
      "meta.description": "Seaside Villa La Tejita — a 150 m² house over three floors with 2 bedrooms, 2 bathrooms and three terraces, 250 m from Playa de la Tejita, Tenerife. Sleeps 4. Book directly with the owners.",
      "a11y.skip": "Skip to content",
      "a11y.mainNav": "Main",
      "a11y.brandHome": "Seaside Villa La Tejita — home",
      "a11y.backTop": "Back to top",
      "a11y.openMenu": "Open menu",
      "a11y.closeMenu": "Close menu",
      "lang.change": "Change language (current: {name})",

      "nav.home": "Home", "nav.villa": "The House", "nav.availability": "Availability",
      "nav.rules": "House rules", "nav.location": "Location", "nav.contact": "Contact",
      "meta.place": "La Tejita, Tenerife South", "meta.beach": "250 m from the beach",
      "meta.map": "On the map", "meta.hours": "Replies daily, 9:00 – 21:00",
      "header.sisterEyebrow": "Our other villa",
      "header.sisterAria": "Go to Horizont Villa La Tejita, our other house",

      "hero.photoAlt": "Fiery sunset over the dark volcanic sand of La Tejita beach",
      "hero.eyebrow": "Holiday house · Canary Islands",
      "hero.p1": "Entire 150 m² house for up to 4 guests, 2 bedrooms & 2 bathrooms",
      "hero.p2": "Three terraces — the top one faces the sunset over the ocean",
      "hero.p3": "Playa de la Tejita just 250 m away",
      "hero.p4": "3 pools & a tennis court on site, garage for two cars",
      "hero.cta": "Check availability", "hero.explore": "Explore the house",
      "slider.label": "House photos", "slider.prev": "Previous photo", "slider.next": "Next photo",
      "slider.choose": "Choose photo", "slider.slide": "{i} of {n}: {label}",
      "slider.hideThumbs": "Hide thumbnails", "slider.showThumbs": "Show thumbnails",
      "viewer.open": "View full photo", "viewer.label": "Photo viewer", "viewer.close": "Close photo viewer",

      "amen.label": "Amenities",
      "amen.pools": "3 pools<br>on site", "amen.wifi": "Free<br>Wi-Fi", "amen.garage": "Garage &amp; free<br>parking",
      "amen.pets": "Pets<br>allowed", "amen.tennis": "Tennis<br>court", "amen.grill": "Outdoor<br>BBQ grill",
      "mq.pools": "3 pools & a tennis court", "mq.beach": "250 m to Playa de la Tejita", "mq.size": "150 m² over three floors",
      "mq.terraces": "Three terraces", "mq.guests": "Up to 4 guests", "mq.sunsets": "Sunset straight over the ocean",

      "villa.eyebrow": "The House", "villa.title": "The whole house, all to yourself",
      "villa.lead": "A 150 m² house on three floors in a quiet corner of La Tejita, a few minutes' walk from the beach. Three terraces: the top one looks straight out over the ocean, the balcony off the living room catches the afternoon shade, and the lower floor sits at garden level.",
      "villa.entire": "Entire house", "villa.keyText": "Two bedrooms and three terraces over three floors, 250 m from Playa de la Tejita.",
      "villa.bedrooms": "Bedrooms", "villa.bathrooms": "Bathrooms", "villa.guests": "Guests",
      "villa.sleeping": "Sleeping arrangements",
      "villa.bedroom1": "Bedroom 1", "villa.bedroom2": "Bedroom 2",
      "floor.upper": "Upper floor", "floor.main": "Main floor", "floor.ground": "Ground floor", "floor.outside": "On site",
      "room.twinBeds": "2 single beds", "room.doubleBed": "1 double bed",
      "room.roofTerrace": "Roof terrace", "room.sunsetView": "Sunset over the ocean",
      "room.double": "Double bedroom", "room.wardrobe": "Wardrobe & fan",
      "room.twin": "Twin bedroom", "room.mainBath": "Main bathroom", "room.bathNote": "Bathtub & shower",
      "room.living": "Living room", "room.tv": "Flat-screen TV", "room.dining": "Dining area", "room.table": "Table for four",
      "room.kitchen": "Kitchen", "room.equipped": "Fully equipped",
      "room.balcony": "Balcony", "room.balconyNote": "Shaded, table & chairs",
      "room.shower": "Shower room", "room.secondBath": "Second bathroom",
      "room.garage": "Garage", "room.twoCars": "Room for two cars",
      "room.utility": "Utility room", "room.washer": "Washing machine",
      "room.patio": "Garden level", "room.lowerTerrace": "The quiet lower terrace",
      "room.hall": "Entrance hall", "room.stairs": "Stairs to all three floors",
      "room.pools": "3 pools", "room.onProperty": "On the property",
      "room.tennis": "Tennis court", "room.grill": "BBQ grill", "room.outdoorDining": "Outdoor dining",
      "room.garden": "Garden", "room.gardenView": "Garden view", "room.parking": "Parking", "room.parkingNote": "Free, on site",
      "room.beach": "Beach", "room.beachWalk": "250 m walk",
      "svc.title": "Included & on request", "svc.wifi": "Free Wi-Fi", "svc.tennis": "Tennis court",
      "svc.grill": "BBQ grill", "svc.bike": "Bike rental", "svc.car": "Car rental", "svc.cot": "Free cot (0–3 yrs)",
      "svc.pets": "Pets on request", "svc.family": "Family rooms", "svc.nonsmoking": "Non-smoking",

      "island.eyebrow": "Day trips", "island.title": "The island beyond the beach",
      "island.teide": "Spain's highest peak at 3,715 m. The road up crosses old lava fields, and a cable car carries you almost to the summit.",
      "island.medano": "The island's kitesurf town, with a long sandy beach and a promenade full of bars. The closest of the three.",
      "island.gigantes": "Cliffs dropping sheer into the Atlantic on the west coast. Boat trips set out from the small harbour below them.",
      "island.teideAlt": "Pico del Teide rising above a sea of clouds at sunset",
      "island.medanoAlt": "Kitesurfers off El Médano with Montaña Roja behind",
      "island.gigantesAlt": "The cliffs of Los Gigantes above the deep-blue Atlantic",
      "trip.more": "Discover more", "trip.didYouKnow": "Did you know?", "trip.tips": "Our tips", "trip.close": "Close", "trip.book": "Check availability",
      "book.eyebrow": "Availability & booking", "book.title": "Plan your stay, book direct",
      "book.lead": "Pick your arrival and departure date on the calendar below. You'll see the price right away, then send us a booking request. We confirm personally within 24 hours, and booking direct means no platform fees.",
      "book.arrival": "Arrival", "book.departure": "Departure",
      "cal.available": "Available", "cal.booked": "Booked", "cal.yourStay": "Your stay",
      "cal.earlier": "Earlier months", "cal.later": "Later months",
      "cal.showAll": "Show all 12 months", "cal.showLess": "Show fewer months",
      "cal.updated": "Availability last updated {date}.",
      "cal.dow": ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
      "cal.hintArrival": "Select your arrival date.",
      "cal.hintDeparture": "Arrival {date}. Now select your departure date (minimum {nights}).",
      "cal.hintMin": "Minimum stay for these dates is {nights}. Please pick a later departure.",
      "cal.hintSelected": "{nights} selected. Fill in the form to send your request.",
      "cal.stAvailable": "available", "cal.stPast": "past date", "cal.stBooked": "booked",
      "cal.stUnavailable": "unavailable for this stay", "cal.stArrival": "selected arrival", "cal.stDeparture": "selected departure",
      "price.empty": "Choose dates to see your price.", "price.chooseDeparture": "Now choose your departure date.",
      "price.cleaning": "Cleaning fee", "price.total": "Total · {nights}", "price.min": "Minimum stay for these dates is {nights}.",
      "nights": { one: "{n} night", other: "{n} nights" },

      "form.name": "Full name", "form.nameError": "Please enter your name.",
      "form.email": "Email", "form.emailError": "Please enter a valid email address.",
      "form.phone": "Phone <span class=\"opt\">(optional)</span>",
      "form.adults": "Adults", "form.children": "Children", "form.ages": "Children's ages",
      "form.agesPlaceholder": "e.g. 2, 7, 12", "form.adultRate": "Guests aged 18 and over are charged as adults.",
      "form.maxGuests": "Maximum 4 guests in total, children included.",
      "form.adultsOption": { one: "{n} adult", other: "{n} adults" },
      "form.childrenOption": { one: "{n} child", other: "{n} children" }, "form.noChildren": "No children",
      "form.extras": "Extras", "form.cot": "Cot for a baby (0–3 years, free)", "form.pet": "Travelling with a pet (on request, for a fee)",
      "form.message": "Message <span class=\"opt\">(optional)</span>",
      "form.messagePlaceholder": "Expected arrival time (check-in 17:00–23:00), questions, requests…",
      "form.submit": "Send booking request", "form.sending": "Sending…",
      "form.note": "No payment now. We'll confirm availability and send you payment details.",
      "form.errDates": "Please choose your arrival and departure dates on the calendar.",
      "form.errSend": "Sorry, something went wrong sending your request. Please try again or email us directly.",
      "form.successTitle": "Request sent, thank you!",
      "form.successText": "We'll reply within 24 hours to confirm your stay at Seaside Villa.",

      "rates.label": "Rates", "rates.title": "Rates", "rates.allOther": "All other dates", "rates.perNight": "/ night",
      "rates.min": "min {nights}",
      "rates.note": "Price for the entire house per night, for up to {guests} guests, including taxes and fees. Minimum stay {nights}.",
      "rates.cleaning": "One-off cleaning fee {fee}.",
      "rates.included": "Free Wi-Fi, parking and the garage are included, as are the pools and the tennis court. Cots for babies are free; pets on request for a fee.",

      "rules.eyebrow": "Good to know", "rules.title": "House rules & policies",
      "rules.checkinNote": "Please let us know your arrival time in advance.",
      "rules.checkoutNote": "Early departures are fine — handy for a morning flight.",
      "rules.childrenTitle": "Children",
      "rules.childrenText": "Children of any age are welcome. Guests aged 18 and over are charged the adult rate. Please tell us the number and ages of children when you request a booking.",
      "rules.cotsTitle": "Cots & extra beds",
      "rules.cotsText": "A cot for children aged 0–3 is free on request, subject to availability. Extra beds are not available.",
      "rules.petsTitle": "Pets", "rules.petsText": "Pets are allowed on request, for a fee. Please mention your pet in your booking request.",
      "rules.smokingTitle": "No smoking", "rules.smokingText": "Smoking is not allowed anywhere inside the house.",
      "rules.partiesTitle": "No parties or events",
      "rules.partiesText": "Parties and events are not permitted, stag and hen celebrations included, so the neighbourhood stays calm for everyone.",
      "rules.guestsText": "The house welcomes a maximum of 4 guests, children included. Guests of all ages are welcome, and the minimum stay is 5 nights.",
      "cancel.title": "Cancellation & payment",
      "cancel.intro": "Prices include taxes and fees. Every booking is on our flexible terms:",
      "cancel.flexible": "Flexible",
      "cancel.flex1": "Free cancellation until the date shown in your booking confirmation",
      "cancel.flex2": "Nothing is charged until shortly before your free-cancellation date",
      "cancel.flex3": "You can change your dates if your plans change",

      "loc.title": "La Tejita, right where the beach begins",
      "loc.lead": "The house sits in a quiet zone beside the largest natural beach in the south, with the red volcanic cone of Montaña Roja at the end of the sand. The airport is 15 minutes away, so you can stay on the beach until the last moment of your holiday.",
      "loc.airport": "Tenerife South Airport (TFS)", "loc.golfKm": "7.7 km",
      "loc.teide": "Teide National Park", "loc.aqualand": "Aqualand water park",
      "loc.note": "Distances are approximate.",
      "loc.mapText": "250 m from Playa de la Tejita · 5 km from Tenerife South Airport",
      "loc.showMap": "Show map", "loc.openMaps": "Open in Google Maps", "loc.mapTitle": "Map of La Tejita, Tenerife",

      "near.title": "Within walking distance",
      "near.market": "The local supermarket plus Indian, Italian, Chinese and vegan restaurants and bars, often with live music.",
      "near.marketWalk": "5 minutes on foot",
      "near.medano": "The island's kitesurf and windsurf town, with surf shops, SUP rental and beach bars along the promenade.",
      "near.medanoWalk": "A short drive or a long walk",
      "near.abrigos": "A small fishing village on the other side, with restaurants serving the best of the day's catch.",
      "near.abrigosWalk": "A short drive along the coast",

      "sister.badge": "Travelling as two families?",
      "sister.title": "Horizont Villa is 25 m up the street",
      "sister.text": "Our second house has 4 bedrooms and 220 m² for up to 6 guests. Book both and your group has two kitchens, six bedrooms and the same beach at the end of the road. Ask us and we'll hold the dates together.",
      "sister.cta": "Ask about both houses",

      "footer.title": "Your evening swim is waiting",
      "footer.text": "Questions before you book? Write or call us — we speak Czech, English, Spanish and Polish.",
      "footer.licence": "Holiday rental licence:",
      "float.label": "Book your stay", "float.title": "Book your stay", "float.from": "from {price} / night",

      "photo.roof-terrace": ["Roof terrace", "Top terrace with a table, chairs and a view over the ocean"],
      "photo.balcony": ["Balcony", "Shaded balcony with a wooden table and four chairs"],
      "photo.balcony-table": ["", "Outdoor dining table on the covered balcony"],
      "photo.living-balcony": ["Living room & balcony", "Living room with sliding doors opening onto the balcony"],
      "photo.living-room": ["Living room", "Living room with a corner sofa, flat-screen TV and the stairs behind"],
      "photo.living-stairs": ["Stairs to the bedrooms", "Wooden staircase leading up from the living room"],
      "photo.dining": ["Dining area", "Dining table for four beside the kitchen"],
      "photo.kitchen": ["Kitchen", "Fully equipped kitchen with oven, dishwasher and fridge-freezer"],
      "photo.kitchen-terrace": ["Kitchen & balcony", "Open kitchen with the balcony doors just beyond"],
      "photo.bedroom-double": ["Double bedroom", "Bedroom with a double bed, a large wardrobe and a fan"],
      "photo.bedroom-detail": ["", "Double bed with a seascape above the headboard"],
      "photo.bedroom-twin": ["Twin bedroom", "Bedroom with two single beds and fresh towels"],
      "photo.bathroom": ["Upstairs bathroom", "Upstairs bathroom with a bathtub and a large mirror"],
      "photo.shower-room": ["Downstairs bathroom", "Downstairs bathroom with a walk-in shower"],
      "photo.patio": ["Garden patio", "The lower terrace with a table, chairs and a palm tree"],
      "photo.stairs": ["", "Wooden stairs connecting the three floors"],
      "photo.garage": ["Garage", "Private garage with room for two cars"],
      "photo.utility": ["Utility room", "Laundry area with a washing machine next to the garage"],
      "photo.beach-sunset": ["", "Fiery sunset over the dark volcanic sand of La Tejita beach"]
    },

    /* ------------------------------------------------------------------ CS */
    cs: {
      "meta.title": "Seaside Villa La Tejita · Prázdninový dům na jihu Tenerife",
      "meta.description": "Seaside Villa La Tejita — dům 150 m² ve třech podlažích se 2 ložnicemi, 2 koupelnami a třemi terasami, 250 m od pláže Playa de la Tejita na Tenerife. Až pro 4 hosty. Rezervujte přímo u majitelů.",
      "a11y.skip": "Přejít na obsah",
      "a11y.mainNav": "Hlavní navigace",
      "a11y.brandHome": "Seaside Villa La Tejita — úvod",
      "a11y.backTop": "Zpět nahoru",
      "a11y.openMenu": "Otevřít menu",
      "a11y.closeMenu": "Zavřít menu",
      "lang.change": "Změnit jazyk (aktuálně: {name})",

      "nav.home": "Domů", "nav.villa": "Dům", "nav.availability": "Dostupnost",
      "nav.rules": "Pravidla", "nav.location": "Poloha", "nav.contact": "Kontakt",
      "meta.place": "La Tejita, jih Tenerife", "meta.beach": "250 m od pláže",
      "meta.map": "Na mapě", "meta.hours": "Odpovídáme denně 9:00–21:00",
      "header.sisterEyebrow": "Naše druhá vila",
      "header.sisterAria": "Přejít na Horizont Villa La Tejita, náš druhý dům",

      "hero.photoAlt": "Ohnivý západ slunce nad tmavým sopečným pískem pláže La Tejita",
      "hero.eyebrow": "Prázdninový dům · Kanárské ostrovy",
      "hero.p1": "Celý dům 150 m² až pro 4 hosty, 2 ložnice a 2 koupelny",
      "hero.p2": "Tři terasy — z horní je výhled na západ slunce nad oceánem",
      "hero.p3": "Pláž Playa de la Tejita jen 250 m",
      "hero.p4": "3 bazény a tenisový kurt v areálu, garáž pro dvě auta",
      "hero.cta": "Ověřit dostupnost", "hero.explore": "Prohlédnout dům",
      "slider.label": "Fotografie domu", "slider.prev": "Předchozí fotka", "slider.next": "Další fotka",
      "slider.choose": "Vybrat fotku", "slider.slide": "{i} z {n}: {label}",
      "slider.hideThumbs": "Skrýt náhledy", "slider.showThumbs": "Zobrazit náhledy",
      "viewer.open": "Zobrazit celou fotku", "viewer.label": "Prohlížeč fotografií", "viewer.close": "Zavřít prohlížeč fotografií",

      "amen.label": "Vybavení",
      "amen.pools": "3 bazény<br>v areálu", "amen.wifi": "Wi-Fi<br>zdarma", "amen.garage": "Garáž a parkování<br>zdarma",
      "amen.pets": "Mazlíčci<br>vítáni", "amen.tennis": "Tenisový<br>kurt", "amen.grill": "Venkovní<br>gril",
      "mq.pools": "3 bazény a tenisový kurt", "mq.beach": "250 m na Playa de la Tejita", "mq.size": "150 m² ve třech podlažích",
      "mq.terraces": "Tři terasy", "mq.guests": "Až 4 hosté", "mq.sunsets": "Západ slunce přímo nad oceánem",

      "villa.eyebrow": "Dům", "villa.title": "Celý dům jen pro vás",
      "villa.lead": "Dům o rozloze 150 m² ve třech podlažích v klidné části La Tejity, pár minut chůze od pláže. Tři terasy: z horní je vidět přímo na oceán, balkon u obýváku drží odpolední stín a spodní patro leží na úrovni zahrady.",
      "villa.entire": "Celý dům", "villa.keyText": "Dvě ložnice a tři terasy ve třech podlažích, 250 m od pláže Playa de la Tejita.",
      "villa.bedrooms": "Ložnice", "villa.bathrooms": "Koupelny", "villa.guests": "Hosté",
      "villa.sleeping": "Uspořádání lůžek",
      "villa.bedroom1": "Ložnice 1", "villa.bedroom2": "Ložnice 2",
      "floor.upper": "Horní patro", "floor.main": "Hlavní patro", "floor.ground": "Přízemí", "floor.outside": "V areálu",
      "room.twinBeds": "2 jednolůžka", "room.doubleBed": "1 manželská postel",
      "room.roofTerrace": "Střešní terasa", "room.sunsetView": "Západ slunce nad oceánem",
      "room.double": "Ložnice s manželskou postelí", "room.wardrobe": "Šatní skříň a ventilátor",
      "room.twin": "Ložnice se 2 lůžky", "room.mainBath": "Hlavní koupelna", "room.bathNote": "Vana a sprcha",
      "room.living": "Obývací pokoj", "room.tv": "TV s plochou obrazovkou", "room.dining": "Jídelní kout", "room.table": "Stůl pro čtyři",
      "room.kitchen": "Kuchyně", "room.equipped": "Plně vybavená",
      "room.balcony": "Balkon", "room.balconyNote": "Ve stínu, stůl a židle",
      "room.shower": "Koupelna se sprchou", "room.secondBath": "Druhá koupelna",
      "room.garage": "Garáž", "room.twoCars": "Místo pro dvě auta",
      "room.utility": "Technická místnost", "room.washer": "Pračka",
      "room.patio": "Zahradní patro", "room.lowerTerrace": "Klidná spodní terasa",
      "room.hall": "Vstupní hala", "room.stairs": "Schody do všech tří pater",
      "room.pools": "3 bazény", "room.onProperty": "V areálu",
      "room.tennis": "Tenisový kurt", "room.grill": "Gril", "room.outdoorDining": "Stolování venku",
      "room.garden": "Zahrada", "room.gardenView": "Výhled do zahrady", "room.parking": "Parkování", "room.parkingNote": "Zdarma, u domu",
      "room.beach": "Pláž", "room.beachWalk": "250 m pěšky",
      "svc.title": "V ceně a na vyžádání", "svc.wifi": "Wi-Fi zdarma", "svc.tennis": "Tenisový kurt",
      "svc.grill": "Gril", "svc.bike": "Půjčení kol", "svc.car": "Půjčení auta", "svc.cot": "Dětská postýlka zdarma (0–3 roky)",
      "svc.pets": "Mazlíčci na vyžádání", "svc.family": "Rodinné pokoje", "svc.nonsmoking": "Nekuřácké",

      "island.eyebrow": "Výlety", "island.title": "Ostrov za pláží",
      "island.teide": "Nejvyšší vrchol Španělska, 3 715 m. Cesta nahoru vede přes stará lávová pole a lanovka vyveze skoro až na vrchol.",
      "island.medano": "Kitesurfové městečko s dlouhou písečnou pláží a promenádou plnou barů. Ze všech tří nejblíž.",
      "island.gigantes": "Útesy padající kolmo do Atlantiku na západním pobřeží. Z přístavu pod nimi vyplouvají lodní výlety.",
      "island.teideAlt": "Pico del Teide nad mořem mraků při západu slunce",
      "island.medanoAlt": "Kitesurfaři u El Médana s Montaña Roja v pozadí",
      "island.gigantesAlt": "Útesy Los Gigantes nad tmavě modrým Atlantikem",
      "trip.more": "Více o výletu", "trip.didYouKnow": "Věděli jste?", "trip.tips": "Naše tipy", "trip.close": "Zavřít", "trip.book": "Ověřit volné termíny",
      "book.eyebrow": "Dostupnost a rezervace", "book.title": "Naplánujte si pobyt a rezervujte přímo",
      "book.lead": "V kalendáři níže vyberte datum příjezdu a odjezdu. Cenu uvidíte hned a pak nám pošlete nezávaznou poptávku. Rezervaci osobně potvrdíme do 24 hodin a při přímé rezervaci neplatíte žádné poplatky rezervačním portálům.",
      "book.arrival": "Příjezd", "book.departure": "Odjezd",
      "cal.available": "Volno", "cal.booked": "Obsazeno", "cal.yourStay": "Váš pobyt",
      "cal.earlier": "Dřívější měsíce", "cal.later": "Pozdější měsíce",
      "cal.showAll": "Zobrazit všech 12 měsíců", "cal.showLess": "Zobrazit méně měsíců",
      "cal.updated": "Dostupnost naposledy aktualizována {date}.",
      "cal.dow": ["Po", "Út", "St", "Čt", "Pá", "So", "Ne"],
      "cal.hintArrival": "Vyberte datum příjezdu.",
      "cal.hintDeparture": "Příjezd {date}. Nyní vyberte datum odjezdu (minimálně {nights}).",
      "cal.hintMin": "Minimální délka pobytu v tomto termínu je {nights}. Vyberte prosím pozdější odjezd.",
      "cal.hintSelected": "Vybráno: {nights}. Vyplňte formulář a odešlete poptávku.",
      "cal.stAvailable": "volno", "cal.stPast": "minulé datum", "cal.stBooked": "obsazeno",
      "cal.stUnavailable": "pro tento pobyt nedostupné", "cal.stArrival": "vybraný příjezd", "cal.stDeparture": "vybraný odjezd",
      "price.empty": "Vyberte termín a uvidíte cenu.", "price.chooseDeparture": "Nyní vyberte datum odjezdu.",
      "price.cleaning": "Poplatek za úklid", "price.total": "Celkem · {nights}", "price.min": "Minimální délka pobytu v tomto termínu je {nights}.",
      "nights": { one: "{n} noc", few: "{n} noci", other: "{n} nocí" },

      "form.name": "Jméno a příjmení", "form.nameError": "Zadejte prosím své jméno.",
      "form.email": "E-mail", "form.emailError": "Zadejte prosím platnou e-mailovou adresu.",
      "form.phone": "Telefon <span class=\"opt\">(nepovinné)</span>",
      "form.adults": "Dospělí", "form.children": "Děti", "form.ages": "Věk dětí",
      "form.agesPlaceholder": "např. 2, 7, 12", "form.adultRate": "Hosté od 18 let platí jako dospělí.",
      "form.maxGuests": "Maximálně 4 hosté celkem, včetně dětí.",
      "form.adultsOption": { one: "{n} dospělý", few: "{n} dospělí", other: "{n} dospělých" },
      "form.childrenOption": { one: "{n} dítě", few: "{n} děti", other: "{n} dětí" }, "form.noChildren": "Bez dětí",
      "form.extras": "Doplňky", "form.cot": "Dětská postýlka (0–3 roky, zdarma)", "form.pet": "Cestuji s mazlíčkem (na vyžádání, za poplatek)",
      "form.message": "Zpráva <span class=\"opt\">(nepovinné)</span>",
      "form.messagePlaceholder": "Předpokládaný čas příjezdu (check-in 17:00–23:00), dotazy, přání…",
      "form.submit": "Odeslat poptávku", "form.sending": "Odesílám…",
      "form.note": "Nic teď neplatíte. Ověříme dostupnost a pošleme vám platební údaje.",
      "form.errDates": "Vyberte prosím v kalendáři datum příjezdu a odjezdu.",
      "form.errSend": "Omlouváme se, poptávku se nepodařilo odeslat. Zkuste to prosím znovu nebo nám napište e-mail.",
      "form.successTitle": "Poptávka odeslána, děkujeme!",
      "form.successText": "Do 24 hodin se ozveme a potvrdíme váš pobyt v Seaside Villa.",

      "rates.label": "Ceník", "rates.title": "Ceník", "rates.allOther": "Všechny ostatní termíny", "rates.perNight": "/ noc",
      "rates.min": "min. {nights}",
      "rates.note": "Cena za celý dům na noc, až pro {guests} hosty, včetně daní a poplatků. Minimální pobyt {nights}.",
      "rates.cleaning": "Jednorázový poplatek za úklid {fee}.",
      "rates.included": "Wi-Fi, parkování i garáž jsou v ceně, stejně jako bazény a tenisový kurt. Dětská postýlka zdarma, mazlíčci na vyžádání za poplatek.",

      "rules.eyebrow": "Dobré vědět", "rules.title": "Domovní řád a podmínky",
      "rules.checkinNote": "Dejte nám prosím předem vědět čas příjezdu.",
      "rules.checkoutNote": "Časný odjezd není problém — hodí se k rannímu letu.",
      "rules.childrenTitle": "Děti",
      "rules.childrenText": "Děti jakéhokoli věku jsou vítány. Hosté od 18 let platí cenu pro dospělé. Při poptávce nám prosím uveďte počet a věk dětí.",
      "rules.cotsTitle": "Dětské postýlky a přistýlky",
      "rules.cotsText": "Dětská postýlka pro děti od 0 do 3 let je na vyžádání zdarma, podle dostupnosti. Přistýlky nejsou k dispozici.",
      "rules.petsTitle": "Domácí mazlíčci", "rules.petsText": "Mazlíčci jsou povoleni na vyžádání za poplatek. Uveďte je prosím v poptávce.",
      "rules.smokingTitle": "Zákaz kouření", "rules.smokingText": "Kouření není uvnitř domu povoleno.",
      "rules.partiesTitle": "Žádné večírky ani akce",
      "rules.partiesText": "Večírky a akce nejsou povoleny, včetně rozlouček se svobodou, aby okolí zůstalo klidné pro všechny.",
      "rules.guestsText": "Dům pojme maximálně 4 hosty včetně dětí. Vítáni jsou hosté všech věkových kategorií a minimální délka pobytu je 5 nocí.",
      "cancel.title": "Storno a platba",
      "cancel.intro": "Ceny zahrnují daně a poplatky. Každá rezervace má flexibilní podmínky:",
      "cancel.flexible": "Flexibilní",
      "cancel.flex1": "Bezplatné storno do data uvedeného v potvrzení rezervace",
      "cancel.flex2": "Nic neplatíte až do doby krátce před koncem bezplatného storna",
      "cancel.flex3": "Termín můžete změnit, pokud se vaše plány změní",

      "loc.title": "La Tejita, přímo tam, kde začíná pláž",
      "loc.lead": "Dům stojí v klidné zóně u největší přírodní pláže na jihu ostrova; na konci písku se zvedá rudý sopečný kužel Montaña Roja. Letiště je 15 minut daleko, takže na pláži můžete zůstat až do poslední chvíle dovolené.",
      "loc.airport": "Letiště Tenerife Jih (TFS)", "loc.golfKm": "7,7 km",
      "loc.teide": "Národní park Teide", "loc.aqualand": "Aquapark Aqualand",
      "loc.note": "Vzdálenosti jsou orientační.",
      "loc.mapText": "250 m od Playa de la Tejita · 5 km od letiště Tenerife Jih",
      "loc.showMap": "Zobrazit mapu", "loc.openMaps": "Otevřít v Mapách Google", "loc.mapTitle": "Mapa La Tejita, Tenerife",

      "near.title": "Kousek pěšky",
      "near.market": "Místní supermarket a k tomu indická, italská, čínská i veganská restaurace a bary, často s živou hudbou.",
      "near.marketWalk": "5 minut pěšky",
      "near.medano": "Kitesurfové a windsurfové městečko ostrova — surf shopy, půjčovna paddleboardů a bary na promenádě.",
      "near.medanoWalk": "Kousek autem nebo delší procházka",
      "near.abrigos": "Malá rybářská vesnice na druhé straně s restauracemi, kde servírují to nejlepší z denního úlovku.",
      "near.abrigosWalk": "Kousek autem podél pobřeží",

      "sister.badge": "Jedete jako dvě rodiny?",
      "sister.title": "Horizont Villa je 25 m po ulici",
      "sister.text": "Náš druhý dům má 4 ložnice a 220 m² až pro 6 hostů. Rezervujte oba a vaše parta má dvě kuchyně, šest ložnic a stejnou pláž na konci cesty. Napište nám a termíny podržíme dohromady.",
      "sister.cta": "Zeptat se na oba domy",

      "footer.title": "Večerní koupání už čeká",
      "footer.text": "Máte před rezervací dotaz? Napište nebo zavolejte — mluvíme česky, anglicky, španělsky i polsky.",
      "footer.licence": "Licence pro turistický pronájem:",
      "float.label": "Rezervovat pobyt", "float.title": "Rezervovat pobyt", "float.from": "od {price} / noc",

      "photo.roof-terrace": ["Střešní terasa", "Horní terasa se stolkem, křeslem a výhledem na oceán"],
      "photo.balcony": ["Balkon", "Zastíněný balkon s dřevěným stolem a čtyřmi židlemi"],
      "photo.balcony-table": ["", "Jídelní stůl na krytém balkoně"],
      "photo.living-balcony": ["Obývák a balkon", "Obývací pokoj s posuvnými dveřmi na balkon"],
      "photo.living-room": ["Obývací pokoj", "Obývací pokoj s rohovou pohovkou, televizí a schody v pozadí"],
      "photo.living-stairs": ["Schody k ložnicím", "Dřevěné schodiště vedoucí z obývacího pokoje nahoru"],
      "photo.dining": ["Jídelní kout", "Jídelní stůl pro čtyři vedle kuchyně"],
      "photo.kitchen": ["Kuchyně", "Plně vybavená kuchyně s troubou, myčkou a kombinovanou lednicí"],
      "photo.kitchen-terrace": ["Kuchyně a balkon", "Otevřená kuchyně s balkonovými dveřmi hned vedle"],
      "photo.bedroom-double": ["Ložnice s manželskou postelí", "Ložnice s manželskou postelí, velkou skříní a ventilátorem"],
      "photo.bedroom-detail": ["", "Manželská postel s obrazem moře nad čelem"],
      "photo.bedroom-twin": ["Ložnice se 2 lůžky", "Ložnice se dvěma jednolůžky a čistými ručníky"],
      "photo.bathroom": ["Horní koupelna", "Horní koupelna s vanou a velkým zrcadlem"],
      "photo.shower-room": ["Dolní koupelna", "Dolní koupelna se sprchovým koutem"],
      "photo.patio": ["Zahradní patio", "Spodní terasa se stolem, židlemi a palmou"],
      "photo.stairs": ["", "Dřevěné schody spojující tři podlaží"],
      "photo.garage": ["Garáž", "Soukromá garáž s místem pro dvě auta"],
      "photo.utility": ["Technická místnost", "Prádelna s pračkou hned vedle garáže"],
      "photo.beach-sunset": ["", "Ohnivý západ slunce nad tmavým sopečným pískem pláže La Tejita"]
    },

    /* ------------------------------------------------------------------ ES */
    es: {
      "meta.title": "Seaside Villa La Tejita · Casa vacacional en el sur de Tenerife",
      "meta.description": "Seaside Villa La Tejita: casa de 150 m² en tres plantas con 2 dormitorios, 2 baños y tres terrazas, a 250 m de la Playa de la Tejita, Tenerife. Hasta 4 huéspedes. Reserva directamente con los propietarios.",
      "a11y.skip": "Saltar al contenido",
      "a11y.mainNav": "Navegación principal",
      "a11y.brandHome": "Seaside Villa La Tejita — inicio",
      "a11y.backTop": "Volver arriba",
      "a11y.openMenu": "Abrir menú",
      "a11y.closeMenu": "Cerrar menú",
      "lang.change": "Cambiar idioma (actual: {name})",

      "nav.home": "Inicio", "nav.villa": "La casa", "nav.availability": "Disponibilidad",
      "nav.rules": "Normas", "nav.location": "Ubicación", "nav.contact": "Contacto",
      "meta.place": "La Tejita, sur de Tenerife", "meta.beach": "A 250 m de la playa",
      "meta.map": "En el mapa", "meta.hours": "Respondemos a diario, 9:00–21:00",
      "header.sisterEyebrow": "Nuestra otra villa",
      "header.sisterAria": "Ir a Horizont Villa La Tejita, nuestra otra casa",

      "hero.photoAlt": "Atardecer encendido sobre la arena volcánica oscura de la playa de La Tejita",
      "hero.eyebrow": "Casa vacacional · Islas Canarias",
      "hero.p1": "Casa entera de 150 m² para hasta 4 huéspedes, 2 dormitorios y 2 baños",
      "hero.p2": "Tres terrazas: la de arriba mira al atardecer sobre el océano",
      "hero.p3": "La Playa de la Tejita a solo 250 m",
      "hero.p4": "3 piscinas y pista de tenis en la propiedad, garaje para dos coches",
      "hero.cta": "Ver disponibilidad", "hero.explore": "Descubrir la casa",
      "slider.label": "Fotos de la casa", "slider.prev": "Foto anterior", "slider.next": "Foto siguiente",
      "slider.choose": "Elegir foto", "slider.slide": "{i} de {n}: {label}",
      "slider.hideThumbs": "Ocultar miniaturas", "slider.showThumbs": "Mostrar miniaturas",
      "viewer.open": "Ver foto completa", "viewer.label": "Visor de fotos", "viewer.close": "Cerrar visor de fotos",

      "amen.label": "Servicios",
      "amen.pools": "3 piscinas<br>en la propiedad", "amen.wifi": "Wi-Fi<br>gratis", "amen.garage": "Garaje y parking<br>gratuito",
      "amen.pets": "Se admiten<br>mascotas", "amen.tennis": "Pista de<br>tenis", "amen.grill": "Barbacoa<br>exterior",
      "mq.pools": "3 piscinas y pista de tenis", "mq.beach": "A 250 m de la Playa de la Tejita", "mq.size": "150 m² en tres plantas",
      "mq.terraces": "Tres terrazas", "mq.guests": "Hasta 4 huéspedes", "mq.sunsets": "El atardecer justo sobre el océano",

      "villa.eyebrow": "La casa", "villa.title": "Toda la casa, solo para ti",
      "villa.lead": "Una casa de 150 m² en tres plantas, en un rincón tranquilo de La Tejita y a pocos minutos a pie de la playa. Tres terrazas: la de arriba mira directamente al océano, el balcón del salón guarda la sombra de la tarde y la planta de abajo queda a nivel del jardín.",
      "villa.entire": "Casa entera", "villa.keyText": "Dos dormitorios y tres terrazas en tres plantas, a 250 m de la Playa de la Tejita.",
      "villa.bedrooms": "Dormitorios", "villa.bathrooms": "Baños", "villa.guests": "Huéspedes",
      "villa.sleeping": "Distribución de camas",
      "villa.bedroom1": "Dormitorio 1", "villa.bedroom2": "Dormitorio 2",
      "floor.upper": "Planta superior", "floor.main": "Planta principal", "floor.ground": "Planta baja", "floor.outside": "En la propiedad",
      "room.twinBeds": "2 camas individuales", "room.doubleBed": "1 cama doble",
      "room.roofTerrace": "Terraza superior", "room.sunsetView": "Atardecer sobre el océano",
      "room.double": "Dormitorio doble", "room.wardrobe": "Armario y ventilador",
      "room.twin": "Dormitorio con dos camas", "room.mainBath": "Baño principal", "room.bathNote": "Bañera y ducha",
      "room.living": "Salón", "room.tv": "TV de pantalla plana", "room.dining": "Comedor", "room.table": "Mesa para cuatro",
      "room.kitchen": "Cocina", "room.equipped": "Totalmente equipada",
      "room.balcony": "Balcón", "room.balconyNote": "A la sombra, mesa y sillas",
      "room.shower": "Baño con ducha", "room.secondBath": "Segundo baño",
      "room.garage": "Garaje", "room.twoCars": "Espacio para dos coches",
      "room.utility": "Cuarto de servicio", "room.washer": "Lavadora",
      "room.patio": "Nivel del jardín", "room.lowerTerrace": "La terraza baja y tranquila",
      "room.hall": "Recibidor", "room.stairs": "Escaleras a las tres plantas",
      "room.pools": "3 piscinas", "room.onProperty": "En la propiedad",
      "room.tennis": "Pista de tenis", "room.grill": "Barbacoa", "room.outdoorDining": "Comedor exterior",
      "room.garden": "Jardín", "room.gardenView": "Vistas al jardín", "room.parking": "Aparcamiento", "room.parkingNote": "Gratis, en la propiedad",
      "room.beach": "Playa", "room.beachWalk": "A 250 m a pie",
      "svc.title": "Incluido y bajo petición", "svc.wifi": "Wi-Fi gratis", "svc.tennis": "Pista de tenis",
      "svc.grill": "Barbacoa", "svc.bike": "Alquiler de bicicletas", "svc.car": "Alquiler de coches", "svc.cot": "Cuna gratis (0–3 años)",
      "svc.pets": "Mascotas bajo petición", "svc.family": "Habitaciones familiares", "svc.nonsmoking": "No fumadores",

      "island.eyebrow": "Excursiones", "island.title": "La isla más allá de la playa",
      "island.teide": "El pico más alto de España, 3.715 m. La carretera sube entre campos de lava y un teleférico llega casi hasta la cima.",
      "island.medano": "El pueblo del kitesurf, con una larga playa de arena y un paseo lleno de bares. El más cercano de los tres.",
      "island.gigantes": "Acantilados que caen a plomo sobre el Atlántico en la costa oeste. Del pequeño puerto salen excursiones en barco.",
      "island.teideAlt": "El Pico del Teide sobre el mar de nubes al atardecer",
      "island.medanoAlt": "Kitesurfistas frente a El Médano con Montaña Roja al fondo",
      "island.gigantesAlt": "Los acantilados de Los Gigantes sobre el Atlántico azul",
      "trip.more": "Descubrir más", "trip.didYouKnow": "¿Sabías que…?", "trip.tips": "Nuestros consejos", "trip.close": "Cerrar", "trip.book": "Ver disponibilidad",
      "book.eyebrow": "Disponibilidad y reservas", "book.title": "Planifica tu estancia y reserva directamente",
      "book.lead": "Elige tus fechas de llegada y salida en el calendario. Verás el precio al instante y después podrás enviarnos tu solicitud de reserva. La confirmamos personalmente en 24 horas y, al reservar directamente, no pagas comisiones de plataformas.",
      "book.arrival": "Llegada", "book.departure": "Salida",
      "cal.available": "Disponible", "cal.booked": "Reservado", "cal.yourStay": "Tu estancia",
      "cal.earlier": "Meses anteriores", "cal.later": "Meses posteriores",
      "cal.showAll": "Ver los 12 meses", "cal.showLess": "Ver menos meses",
      "cal.updated": "Disponibilidad actualizada el {date}.",
      "cal.dow": ["Lu", "Ma", "Mi", "Ju", "Vi", "Sá", "Do"],
      "cal.hintArrival": "Selecciona tu fecha de llegada.",
      "cal.hintDeparture": "Llegada: {date}. Ahora selecciona tu fecha de salida (mínimo {nights}).",
      "cal.hintMin": "La estancia mínima para estas fechas es de {nights}. Elige una fecha de salida posterior.",
      "cal.hintSelected": "Has seleccionado {nights}. Rellena el formulario para enviar tu solicitud.",
      "cal.stAvailable": "disponible", "cal.stPast": "fecha pasada", "cal.stBooked": "reservado",
      "cal.stUnavailable": "no disponible para esta estancia", "cal.stArrival": "llegada seleccionada", "cal.stDeparture": "salida seleccionada",
      "price.empty": "Elige las fechas para ver el precio.", "price.chooseDeparture": "Ahora elige tu fecha de salida.",
      "price.cleaning": "Tarifa de limpieza", "price.total": "Total · {nights}", "price.min": "La estancia mínima para estas fechas es de {nights}.",
      "nights": { one: "{n} noche", other: "{n} noches" },

      "form.name": "Nombre completo", "form.nameError": "Introduce tu nombre.",
      "form.email": "Correo electrónico", "form.emailError": "Introduce un correo electrónico válido.",
      "form.phone": "Teléfono <span class=\"opt\">(opcional)</span>",
      "form.adults": "Adultos", "form.children": "Niños", "form.ages": "Edad de los niños",
      "form.agesPlaceholder": "p. ej. 2, 7, 12", "form.adultRate": "Los huéspedes de 18 años o más pagan tarifa de adulto.",
      "form.maxGuests": "Máximo 4 huéspedes en total, niños incluidos.",
      "form.adultsOption": { one: "{n} adulto", other: "{n} adultos" },
      "form.childrenOption": { one: "{n} niño", other: "{n} niños" }, "form.noChildren": "Sin niños",
      "form.extras": "Extras", "form.cot": "Cuna para bebé (0–3 años, gratis)", "form.pet": "Viajo con mascota (bajo petición, con suplemento)",
      "form.message": "Mensaje <span class=\"opt\">(opcional)</span>",
      "form.messagePlaceholder": "Hora estimada de llegada (check-in 17:00–23:00), preguntas, peticiones…",
      "form.submit": "Enviar solicitud de reserva", "form.sending": "Enviando…",
      "form.note": "No pagas nada ahora. Confirmaremos la disponibilidad y te enviaremos los datos de pago.",
      "form.errDates": "Selecciona en el calendario tus fechas de llegada y salida.",
      "form.errSend": "Lo sentimos, no se ha podido enviar tu solicitud. Inténtalo de nuevo o escríbenos por correo.",
      "form.successTitle": "¡Solicitud enviada, gracias!",
      "form.successText": "Te responderemos en 24 horas para confirmar tu estancia en Seaside Villa.",

      "rates.label": "Tarifas", "rates.title": "Tarifas", "rates.allOther": "Resto de fechas", "rates.perNight": "/ noche",
      "rates.min": "mín. {nights}",
      "rates.note": "Precio por noche para toda la casa, hasta {guests} huéspedes, impuestos y tasas incluidos. Estancia mínima de {nights}.",
      "rates.cleaning": "Tarifa de limpieza única de {fee}.",
      "rates.included": "Wi-Fi, parking y garaje están incluidos, igual que las piscinas y la pista de tenis. Cuna gratis; mascotas bajo petición con suplemento.",

      "rules.eyebrow": "Información útil", "rules.title": "Normas de la casa y condiciones",
      "rules.checkinNote": "Por favor, avísanos con antelación de tu hora de llegada.",
      "rules.checkoutNote": "Las salidas tempranas no son problema: va bien para un vuelo de mañana.",
      "rules.childrenTitle": "Niños",
      "rules.childrenText": "Los niños de cualquier edad son bienvenidos. Los huéspedes de 18 años o más pagan tarifa de adulto. Indícanos el número y la edad de los niños al solicitar la reserva.",
      "rules.cotsTitle": "Cunas y camas supletorias",
      "rules.cotsText": "Cuna gratuita bajo petición para niños de 0 a 3 años, sujeta a disponibilidad. No hay camas supletorias.",
      "rules.petsTitle": "Mascotas", "rules.petsText": "Se admiten mascotas bajo petición y con suplemento. Menciónalo en tu solicitud de reserva.",
      "rules.smokingTitle": "Prohibido fumar", "rules.smokingText": "No está permitido fumar dentro de la casa.",
      "rules.partiesTitle": "No se permiten fiestas ni eventos",
      "rules.partiesText": "No se permiten fiestas ni eventos, despedidas de soltero o soltera incluidas, para que el vecindario siga tranquilo.",
      "rules.guestsText": "La casa admite un máximo de 4 huéspedes, niños incluidos. Son bienvenidos huéspedes de todas las edades y la estancia mínima es de 5 noches.",
      "cancel.title": "Cancelación y pago",
      "cancel.intro": "Los precios incluyen impuestos y tasas. Toda reserva tiene condiciones flexibles:",
      "cancel.flexible": "Flexible",
      "cancel.flex1": "Cancelación gratuita hasta la fecha indicada en la confirmación de la reserva",
      "cancel.flex2": "No se cobra nada hasta poco antes de que termine la cancelación gratuita",
      "cancel.flex3": "Puedes cambiar las fechas si cambian tus planes",

      "loc.title": "La Tejita, justo donde empieza la playa",
      "loc.lead": "La casa está en una zona tranquila junto a la mayor playa natural del sur, con el cono volcánico rojo de Montaña Roja al final de la arena. El aeropuerto queda a 15 minutos, así que puedes quedarte en la playa hasta el último momento de tus vacaciones.",
      "loc.airport": "Aeropuerto Tenerife Sur (TFS)", "loc.golfKm": "7,7 km",
      "loc.teide": "Parque Nacional del Teide", "loc.aqualand": "Parque acuático Aqualand",
      "loc.note": "Las distancias son aproximadas.",
      "loc.mapText": "A 250 m de la Playa de la Tejita · a 5 km del aeropuerto Tenerife Sur",
      "loc.showMap": "Ver mapa", "loc.openMaps": "Abrir en Google Maps", "loc.mapTitle": "Mapa de La Tejita, Tenerife",

      "near.title": "A un paseo de distancia",
      "near.market": "El supermercado del barrio y restaurantes y bares indios, italianos, chinos y veganos, muchas veces con música en directo.",
      "near.marketWalk": "5 minutos a pie",
      "near.medano": "El pueblo del kitesurf y el windsurf de la isla, con tiendas de surf, alquiler de SUP y chiringuitos en el paseo.",
      "near.medanoWalk": "Un trayecto corto en coche o un buen paseo",
      "near.abrigos": "Un pequeño pueblo pesquero al otro lado, con restaurantes que sirven lo mejor de la pesca del día.",
      "near.abrigosWalk": "Un trayecto corto por la costa",

      "sister.badge": "¿Viajáis dos familias?",
      "sister.title": "Horizont Villa está a 25 m calle arriba",
      "sister.text": "Nuestra segunda casa tiene 4 dormitorios y 220 m² para hasta 6 huéspedes. Reservad las dos y el grupo tendrá dos cocinas, seis dormitorios y la misma playa al final del camino. Escríbenos y bloqueamos las fechas a la vez.",
      "sister.cta": "Preguntar por las dos casas",

      "footer.title": "Tu baño nocturno te espera",
      "footer.text": "¿Tienes dudas antes de reservar? Escríbenos o llámanos: hablamos checo, inglés, español y polaco.",
      "footer.licence": "Licencia de vivienda vacacional:",
      "float.label": "Reserva tu estancia", "float.title": "Reserva tu estancia", "float.from": "desde {price} / noche",

      "photo.roof-terrace": ["Terraza superior", "Terraza de arriba con mesa, butaca y vistas al océano"],
      "photo.balcony": ["Balcón", "Balcón a la sombra con mesa de madera y cuatro sillas"],
      "photo.balcony-table": ["", "Mesa para comer al aire libre en el balcón cubierto"],
      "photo.living-balcony": ["Salón y balcón", "Salón con puertas correderas que dan al balcón"],
      "photo.living-room": ["Salón", "Salón con sofá rinconera, televisión y las escaleras al fondo"],
      "photo.living-stairs": ["Escaleras a los dormitorios", "Escalera de madera que sube desde el salón"],
      "photo.dining": ["Comedor", "Mesa de comedor para cuatro junto a la cocina"],
      "photo.kitchen": ["Cocina", "Cocina totalmente equipada con horno, lavavajillas y frigorífico"],
      "photo.kitchen-terrace": ["Cocina y balcón", "Cocina abierta con las puertas del balcón al lado"],
      "photo.bedroom-double": ["Dormitorio doble", "Dormitorio con cama doble, armario grande y ventilador"],
      "photo.bedroom-detail": ["", "Cama doble con un cuadro marino sobre el cabecero"],
      "photo.bedroom-twin": ["Dormitorio con dos camas", "Dormitorio con dos camas individuales y toallas limpias"],
      "photo.bathroom": ["Baño de arriba", "Baño de arriba con bañera y un espejo grande"],
      "photo.shower-room": ["Baño de abajo", "Baño de abajo con plato de ducha"],
      "photo.patio": ["Patio ajardinado", "La terraza baja con mesa, sillas y una palmera"],
      "photo.stairs": ["", "Escaleras de madera que conectan las tres plantas"],
      "photo.garage": ["Garaje", "Garaje privado con espacio para dos coches"],
      "photo.utility": ["Cuarto de servicio", "Zona de lavandería con lavadora junto al garaje"],
      "photo.beach-sunset": ["", "Atardecer encendido sobre la arena volcánica oscura de la playa de La Tejita"]
    }
  };

  /* ---------------------------------------------------------------- engine */
  const STORE_KEY = "seaside-lang";
  const listeners = [];

  function detect() {
    const fromUrl = new URLSearchParams(location.search).get("lang");
    if (fromUrl && LANGS[fromUrl]) return fromUrl;
    try {
      const saved = localStorage.getItem(STORE_KEY);
      if (saved && LANGS[saved]) return saved;
    } catch (e) { /* storage unavailable */ }
    const browser = (navigator.languages || [navigator.language || ""]).map((l) => String(l).slice(0, 2).toLowerCase());
    return browser.find((l) => LANGS[l]) || DEFAULT;
  }

  let lang = detect();

  function raw(key) {
    const own = DICT[lang] && DICT[lang][key];
    return own !== undefined ? own : DICT[DEFAULT][key];
  }

  function fill(text, vars) {
    return String(text).replace(/\{(\w+)\}/g, (m, k) => (vars && vars[k] !== undefined ? vars[k] : m));
  }

  // t("key", { n: 3, ... }) — plural objects pick the right form for the language
  function t(key, vars) {
    let value = raw(key);
    if (value === undefined) return key;
    if (value && typeof value === "object" && !Array.isArray(value)) {
      const n = vars && vars.n !== undefined ? vars.n : 0;
      const form = new Intl.PluralRules(LANGS[lang].locale).select(n);
      value = value[form] || value.other;
    }
    return typeof value === "string" ? fill(value, vars) : value;
  }

  const nights = (n) => t("nights", { n });

  function apply(root) {
    const scope = root || document;
    scope.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    scope.querySelectorAll("[data-i18n-html]").forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
    scope.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      el.dataset.i18nAttr.split("|").forEach((pair) => {
        const [attr, key] = pair.split(":");
        el.setAttribute(attr.trim(), t(key.trim()));
      });
    });
    document.documentElement.lang = lang;
    document.title = t("meta.title");
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t("meta.description"));
  }

  function setLang(next) {
    if (!LANGS[next] || next === lang) return;
    lang = next;
    try { localStorage.setItem(STORE_KEY, lang); } catch (e) { /* storage unavailable */ }
    const url = new URL(location.href);
    url.searchParams.set("lang", lang);
    history.replaceState(null, "", url);
    apply();
    listeners.forEach((fn) => fn(lang));
    window.dispatchEvent(new Event("resize")); // text widths changed: let layouts re-measure
  }

  /* ------------------------------------------------------------- switcher */
  function initSwitcher() {
    const wrap = document.querySelector("[data-lang-switch]");
    if (!wrap) return;
    const btn = wrap.querySelector(".lang-btn");
    const menu = wrap.querySelector(".lang-menu");
    const options = Array.from(menu.querySelectorAll("[data-lang]"));

    const sync = () => {
      wrap.querySelector(".lang-code").textContent = LANGS[lang].code;
      btn.setAttribute("aria-label", t("lang.change", { name: LANGS[lang].name }));
      options.forEach((o) => o.setAttribute("aria-current", String(o.dataset.lang === lang)));
    };
    const open = (show) => {
      menu.hidden = !show;
      btn.setAttribute("aria-expanded", String(show));
      wrap.classList.toggle("is-open", show);
      if (show) (options.find((o) => o.dataset.lang === lang) || options[0]).focus();
    };

    btn.addEventListener("click", () => open(menu.hidden));
    options.forEach((o) => o.addEventListener("click", () => { setLang(o.dataset.lang); open(false); btn.focus(); }));
    document.addEventListener("click", (e) => { if (!wrap.contains(e.target)) open(false); });
    wrap.addEventListener("keydown", (e) => {
      if (e.key === "Escape") { open(false); btn.focus(); }
      if (!menu.hidden && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
        e.preventDefault();
        const i = options.indexOf(document.activeElement);
        const next = (i + (e.key === "ArrowDown" ? 1 : -1) + options.length) % options.length;
        options[next].focus();
      }
    });
    listeners.push(sync);
    sync();
  }

  apply();
  initSwitcher();

  return {
    t, nights, apply, setLang, LANGS,
    get lang() { return lang; },
    get locale() { return LANGS[lang].locale; },
    onChange(fn) { listeners.push(fn); }
  };
})();
