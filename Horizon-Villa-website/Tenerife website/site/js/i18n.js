/* =========================================================================
   Horizont Villa La Tejita — translations (English · Čeština · Español)
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
      "meta.title": "Horizont Villa La Tejita · Holiday villa in Tenerife South",
      "meta.description": "Horizont Villa La Tejita — a 220 m² 4-bedroom holiday home with 3 private pools, 300 m from Playa de la Tejita, Tenerife. Sleeps 6. Book directly with the owners.",
      "a11y.skip": "Skip to content",
      "a11y.mainNav": "Main",
      "a11y.brandHome": "Horizont Villa La Tejita — home",
      "a11y.backTop": "Back to top",
      "a11y.openMenu": "Open menu",
      "a11y.closeMenu": "Close menu",
      "lang.change": "Change language (current: {name})",

      "nav.home": "Home", "nav.villa": "The Villa", "nav.availability": "Availability",
      "nav.rules": "House rules", "nav.location": "Location", "nav.contact": "Contact",
      "meta.place": "La Tejita, Tenerife South", "meta.beach": "300 m from the beach",
      "meta.map": "On the map", "meta.hours": "Replies daily, 9:00 – 21:00",
      "header.sisterEyebrow": "Our other villa",
      "header.sisterAria": "Go to Seaside Villa La Tejita, our other house",

      "hero.photoAlt": "Golden sunset over the dark volcanic sand of La Tejita beach",
      "hero.eyebrow": "Holiday villa · Canary Islands",
      "hero.p1": "Entire 220 m² home for up to 6 guests, 4 bedrooms & 2 bathrooms",
      "hero.p2": "3 private pools, terrace, balcony & garden view",
      "hero.p3": "Playa de la Tejita just 300 m away",
      "hero.p4": "Free parking, free Wi-Fi & pets welcome",
      "hero.cta": "Check availability", "cover.scroll": "Scroll", "cover.book": "Book",
      "cal.stay": "Stay", "cal.confirm": "Continue", "cal.priceNote": "Prices in EUR per night for the whole villa", "form.title": "Your details",
      "cover.f1": "220 m²", "cover.f2": "4 bedrooms",
      "cover.f3": "300 m to the beach", "cover.f4": "3 private pools", "hero.explore": "Explore the villa",
      "slider.label": "Villa photos", "slider.prev": "Previous photo", "slider.next": "Next photo",
      "slider.choose": "Choose photo", "slider.slide": "{i} of {n}: {label}",
      "slider.hideThumbs": "Hide thumbnails", "slider.showThumbs": "Show thumbnails",
      "viewer.open": "View full photo", "viewer.label": "Photo viewer", "viewer.close": "Close photo viewer",

      "amen.label": "Amenities",
      "amen.pools": "3 private<br>pools", "amen.wifi": "Free<br>Wi-Fi", "amen.parking": "Free on-site<br>parking",
      "amen.pets": "Pets<br>allowed", "amen.family": "Family<br>rooms", "amen.shuttle": "Shuttle<br>service",
      "mq.pools": "3 private pools", "mq.beach": "300 m to Playa de la Tejita", "mq.size": "220 m² all to yourself",
      "mq.balcony": "Balcony with ocean view", "mq.guests": "Up to 6 guests", "mq.sunsets": "Golden-hour sunsets",

      "villa.eyebrow": "The Villa", "villa.title": "The entire place, all to yourself",
      "villa.lead": "A 220 m² holiday home by the beach in La Tejita, with a balcony facing the ocean, 3 private pools and free parking. Bike and car rental can be arranged, so you can explore the coast and nearby cycling routes.",
      "villa.entire": "Entire home", "villa.keyText": "Four bedrooms over two floors, just 300 m from Playa de la Tejita.",
      "villa.bedrooms": "Bedrooms", "villa.bathrooms": "Bathrooms", "villa.guests": "Guests",
      "villa.sleeping": "Sleeping arrangements",
      "villa.bedroom1": "Bedroom 1", "villa.bedroom2": "Bedroom 2", "villa.bedroom3": "Bedroom 3", "villa.bedroom4": "Bedroom 4",
      "floor.upper": "Upper floor", "floor.ground": "Ground floor", "floor.lower": "Garage & basement", "floor.outside": "Outside",
      "room.twinBeds": "2 single beds", "room.doubleBed": "1 double bed",
      "room.balcony": "Balcony", "room.balconyNote": "Lounge sofa & sea view",
      "room.double": "Double bedroom", "room.opensBalcony": "Opens onto the balcony", "room.sloped": "Sloped ceiling",
      "room.twin": "Twin bedroom", "room.mainBath": "Main bathroom", "room.bathNote": "Bathtub & shower",
      "room.living": "Living room", "room.tv": "Flat-screen TV", "room.dining": "Dining area", "room.table": "Table for six",
      "room.kitchen": "Kitchen", "room.equipped": "Fully equipped", "room.shower": "Shower room", "room.secondBath": "Second bathroom",
      "room.garage": "Garage", "room.lowerLevel": "Lower level", "room.basement": "Basement", "room.laundryArea": "Laundry area",
      "room.washer": "Washing machine", "room.sink": "With utility sink",
      "room.onProperty": "On the property", "room.terrace": "Terrace & patio", "room.outdoorDining": "Outdoor dining",
      "room.garden": "Garden", "room.gardenView": "Garden view", "room.parking": "Parking", "room.parkingNote": "Free, on site",
      "room.beach": "Beach", "room.beachWalk": "300 m walk",
      "svc.title": "Included & on request", "svc.wifi": "Free Wi-Fi", "svc.shuttle": "Shuttle service",
      "svc.bike": "Bike rental", "svc.car": "Car rental", "svc.cot": "Free cot (0–3 yrs)",
      "svc.pets": "Pets on request", "svc.family": "Family rooms", "svc.nonsmoking": "Non-smoking",

      "island.eyebrow": "Day trips", "island.title": "The island beyond the beach",
      "island.teide": "Spain's highest peak at 3,715 m. The road up crosses old lava fields, and a cable car carries you almost to the summit.",
      "island.santaCruz": "The island's capital, with Calatrava's wave-shaped auditorium on the waterfront and a carnival that fills the streets for a fortnight every February.",
      "island.masca": "A handful of houses on a ridge deep in the Teno mountains, at the end of one of the most spectacular roads on the island.",
      "island.teideAlt": "Sunset over the sea of clouds seen from the pine forests below Teide",
      "island.santaCruzAlt": "Las Teresitas beach and the village of San Andrés at dusk",
      "island.mascaAlt": "The village of Masca on its ridge in the Teno mountains",
      "trip.more": "Discover more", "trip.didYouKnow": "Did you know?", "trip.tips": "Our tips", "trip.close": "Close", "trip.book": "Check availability",
      "book.eyebrow": "Availability & booking", "book.title": "Plan your stay, book direct",
      "book.lead": "Pick your arrival and departure date on the calendar below. You'll see the price right away, then send us a booking request. We confirm personally within 24 hours, and booking direct means no platform fees.",
      "book.arrival": "Arrival", "book.departure": "Departure",
      "cal.available": "Available", "cal.booked": "Booked", "cal.yourStay": "Your stay",
      "cal.earlier": "Earlier months", "cal.later": "Later months",
      "cal.showAll": "Show all 12 months", "cal.showLess": "Show fewer months",
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
      "form.maxGuests": "Maximum 6 guests in total, children included.",
      "form.adultsOption": { one: "{n} adult", other: "{n} adults" },
      "form.childrenOption": { one: "{n} child", other: "{n} children" }, "form.noChildren": "No children",
      "form.extras": "Extras", "form.cot": "Cot for a baby (0–3 years, free)", "form.pet": "Travelling with a pet (on request, for a fee)",
      "form.message": "Message <span class=\"opt\">(optional)</span>",
      "form.messagePlaceholder": "Expected arrival time (check-in 17:00–22:00), questions, requests…",
      "form.submit": "Send booking request", "form.sending": "Sending…",
      "form.note": "No payment now. We'll confirm availability and send you payment details.",
      "form.errDates": "Please choose your arrival and departure dates on the calendar.",
      "form.errSend": "Sorry, something went wrong sending your request. Please try again or email us directly.",
      "form.successTitle": "Request sent, thank you!",
      "form.successText": "We'll reply within 24 hours to confirm your stay at Horizont Villa.",

      "rates.label": "Rates", "rates.title": "Rates", "rates.allOther": "All other dates", "rates.perNight": "/ night",
      "rates.min": "min {nights}",
      "rates.note": "Price for the entire villa per night, for up to {guests} guests, including taxes and fees. Minimum stay {nights}.",
      "rates.cleaning": "One-off cleaning fee {fee}.",
      "rates.included": "Free Wi-Fi and parking included. Cots for babies are free; pets on request for a fee.",

      "rules.eyebrow": "Good to know", "rules.title": "House rules & policies",
      "rules.checkinNote": "Please let us know your arrival time in advance.",
      "rules.checkoutNote": "Please check out by 11:00 at the latest.",
      "rules.childrenTitle": "Children",
      "rules.childrenText": "Children of any age are welcome. Guests aged 18 and over are charged the adult rate. Please tell us the number and ages of children when you request a booking.",
      "rules.cotsTitle": "Cots & extra beds",
      "rules.cotsText": "A cot for children aged 0–3 is free on request, subject to availability. Extra beds are not available.",
      "rules.petsTitle": "Pets", "rules.petsText": "Pets are allowed on request, for a fee. Please mention your pet in your booking request.",
      "rules.smokingTitle": "No smoking", "rules.smokingText": "Smoking is not allowed anywhere inside the villa.",
      "rules.partiesTitle": "No parties or events",
      "rules.partiesText": "Parties and events are not permitted, so the neighbourhood stays calm for everyone.",
      "rules.guestsText": "The villa welcomes a maximum of 6 guests, children included. Guests of all ages are welcome, and the minimum stay is 6 nights.",
      "cancel.title": "Cancellation & payment",
      "cancel.intro": "Prices include taxes and fees. Every booking is on our flexible terms:",
      "cancel.flexible": "Flexible",
      "cancel.flex1": "Free cancellation until the date shown in your booking confirmation",
      "cancel.flex2": "Nothing is charged until shortly before your free-cancellation date",
      "cancel.flex3": "You can change your dates if your plans change",

      "loc.title": "La Tejita, the wild side of the south",
      "loc.lead": "The villa sits by the beach in La Tejita, with a natural sandy beach and the red volcanic cone of Montaña Roja on the doorstep. The airport, golf and the island's big attractions are all a short drive away.",
      "loc.airport": "Tenerife South Airport (TFS)", "loc.golfKm": "7.8 km", "loc.aqualand": "Aqualand water park",
      "loc.note": "Distances are approximate.",
      "loc.mapText": "300 m from Playa de la Tejita · 5 km from Tenerife South Airport",
      "loc.showMap": "Show map", "loc.openMaps": "Open in Google Maps", "loc.mapTitle": "Map of La Tejita, Tenerife",

      "footer.title": "Your sunset is waiting",
      "footer.text": "Questions before you book? Write or call us. We're happy to help.",
      "footer.licence": "Holiday rental licence:",
      "float.label": "Book your stay", "float.title": "Book your stay", "float.from": "from {price} / night",

      "photo.roof-terrace": ["Upper terrace", "Balcony with lounge sofa and a view of the ocean"],
      "photo.bedroom-sea-view": ["Upstairs bedroom 1", "Upstairs double bedroom opening onto the balcony"],
      "photo.bedroom-main": ["Upstairs bedroom 2", "Upstairs double bedroom with sloped ceiling"],
      "photo.twin-bedroom": ["Upstairs twin bedroom", "Upstairs bedroom with two single beds"],
      "photo.bathroom": ["Upstairs bathroom", "Large bathroom with bathtub and shower"],
      "photo.living-room": ["Living room", "Bright living room with white sofa and ceiling fan"],
      "photo.lounge-terrace": ["Lounge & terrace", "Living room with sliding doors to the terrace"],
      "photo.dining": ["Dining nook", "Glass dining table for six next to the kitchen"],
      "photo.kitchen": ["Kitchen", "Fully equipped kitchen with oven and dishwasher"],
      "photo.shower-room": ["Downstairs bathroom", "Smaller shower room with glass-block wall"],
      "photo.pool": ["", "One of the three private pools on a sunny day"],
      "photo.pool-night": ["", "Private pool lit up in blue at night"],
      "photo.montana-roja": ["Montaña Roja", "Waves on La Tejita beach below the red volcano Montaña Roja"],
      "photo.beach-sunset-2": ["", "Sun setting over the ocean seen from the beach"],
      "photo.sunset-sky": ["", "Pink and violet sky over the Atlantic at dusk"],
      "photo.sunset-terrace": ["", "Lounge sofa on the terrace as the sun goes down"],
      "photo.sunset-roof": ["", "The sun setting behind the hills, seen from the house"],
      "photo.sunset-hills": ["", "Orange sky and the sun sinking over the hills"],
      "photo.sunset-coast": ["", "The sun setting behind the seafront buildings"],
      "photo.sunset-plane": ["", "A plane crossing the evening sun near the coast"]
    },

    /* ------------------------------------------------------------------ CS */
    cs: {
      "meta.title": "Horizont Villa La Tejita · Prázdninová vila na jihu Tenerife",
      "meta.description": "Horizont Villa La Tejita — prázdninový dům 220 m² se 4 ložnicemi a 3 soukromými bazény, 300 m od pláže Playa de la Tejita na Tenerife. Až pro 6 hostů. Rezervujte přímo u majitelů.",
      "a11y.skip": "Přejít na obsah",
      "a11y.mainNav": "Hlavní navigace",
      "a11y.brandHome": "Horizont Villa La Tejita — úvod",
      "a11y.backTop": "Zpět nahoru",
      "a11y.openMenu": "Otevřít menu",
      "a11y.closeMenu": "Zavřít menu",
      "lang.change": "Změnit jazyk (aktuálně: {name})",

      "nav.home": "Domů", "nav.villa": "Vila", "nav.availability": "Dostupnost",
      "nav.rules": "Pravidla", "nav.location": "Poloha", "nav.contact": "Kontakt",
      "meta.place": "La Tejita, jih Tenerife", "meta.beach": "300 m od pláže",
      "meta.map": "Na mapě", "meta.hours": "Odpovídáme denně 9:00–21:00",
      "header.sisterEyebrow": "Naše druhá vila",
      "header.sisterAria": "Přejít na Seaside Villa La Tejita, náš druhý dům",

      "hero.photoAlt": "Zlatý západ slunce nad tmavým sopečným pískem pláže La Tejita",
      "hero.eyebrow": "Prázdninová vila · Kanárské ostrovy",
      "hero.p1": "Celý dům 220 m² až pro 6 hostů, 4 ložnice a 2 koupelny",
      "hero.p2": "3 soukromé bazény, terasa, balkon a výhled do zahrady",
      "hero.p3": "Pláž Playa de la Tejita jen 300 m",
      "hero.p4": "Parkování i Wi-Fi zdarma, domácí mazlíčci vítáni",
      "hero.cta": "Ověřit dostupnost", "cover.scroll": "Dolů", "cover.book": "Rezervovat",
      "cal.stay": "Pobyt", "cal.confirm": "Pokračovat", "cal.priceNote": "Ceny v EUR za noc za celou vilu", "form.title": "Vaše údaje",
      "cover.f1": "220 m²", "cover.f2": "4 ložnice",
      "cover.f3": "300 m od pláže", "cover.f4": "3 soukromé bazény", "hero.explore": "Prohlédnout vilu",
      "slider.label": "Fotografie vily", "slider.prev": "Předchozí fotka", "slider.next": "Další fotka",
      "slider.choose": "Vybrat fotku", "slider.slide": "{i} z {n}: {label}",
      "slider.hideThumbs": "Skrýt náhledy", "slider.showThumbs": "Zobrazit náhledy",
      "viewer.open": "Zobrazit celou fotku", "viewer.label": "Prohlížeč fotografií", "viewer.close": "Zavřít prohlížeč fotografií",

      "amen.label": "Vybavení",
      "amen.pools": "3 soukromé<br>bazény", "amen.wifi": "Wi-Fi<br>zdarma", "amen.parking": "Parkování<br>zdarma",
      "amen.pets": "Mazlíčci<br>vítáni", "amen.family": "Rodinné<br>pokoje", "amen.shuttle": "Kyvadlová<br>doprava",
      "mq.pools": "3 soukromé bazény", "mq.beach": "300 m na Playa de la Tejita", "mq.size": "220 m² jen pro vás",
      "mq.balcony": "Balkon s výhledem na oceán", "mq.guests": "Až 6 hostů", "mq.sunsets": "Zlaté západy slunce",

      "villa.eyebrow": "Vila", "villa.title": "Celá vila jen pro vás",
      "villa.lead": "Prázdninový dům o rozloze 220 m² u pláže v La Tejitě s balkonem s výhledem na oceán, 3 soukromými bazény a parkováním zdarma. Rádi zajistíme půjčení kola i auta, abyste mohli poznat pobřeží a okolní cyklotrasy.",
      "villa.entire": "Celý dům", "villa.keyText": "Čtyři ložnice ve dvou patrech, jen 300 m od pláže Playa de la Tejita.",
      "villa.bedrooms": "Ložnice", "villa.bathrooms": "Koupelny", "villa.guests": "Hosté",
      "villa.sleeping": "Uspořádání lůžek",
      "villa.bedroom1": "Ložnice 1", "villa.bedroom2": "Ložnice 2", "villa.bedroom3": "Ložnice 3", "villa.bedroom4": "Ložnice 4",
      "floor.upper": "Horní patro", "floor.ground": "Přízemí", "floor.lower": "Garáž a sklep", "floor.outside": "Venku",
      "room.twinBeds": "2 jednolůžka", "room.doubleBed": "1 manželská postel",
      "room.balcony": "Balkon", "room.balconyNote": "Sedačka a výhled na moře",
      "room.double": "Ložnice s manželskou postelí", "room.opensBalcony": "Východ na balkon", "room.sloped": "Šikmý strop",
      "room.twin": "Ložnice se 2 lůžky", "room.mainBath": "Hlavní koupelna", "room.bathNote": "Vana a sprcha",
      "room.living": "Obývací pokoj", "room.tv": "TV s plochou obrazovkou", "room.dining": "Jídelní kout", "room.table": "Stůl pro šest",
      "room.kitchen": "Kuchyně", "room.equipped": "Plně vybavená", "room.shower": "Koupelna se sprchou", "room.secondBath": "Druhá koupelna",
      "room.garage": "Garáž", "room.lowerLevel": "Spodní podlaží", "room.basement": "Sklep", "room.laundryArea": "Prádelna",
      "room.washer": "Pračka", "room.sink": "S výlevkou",
      "room.onProperty": "Na pozemku", "room.terrace": "Terasa a patio", "room.outdoorDining": "Stolování venku",
      "room.garden": "Zahrada", "room.gardenView": "Výhled do zahrady", "room.parking": "Parkování", "room.parkingNote": "Zdarma, u domu",
      "room.beach": "Pláž", "room.beachWalk": "300 m pěšky",
      "svc.title": "V ceně a na vyžádání", "svc.wifi": "Wi-Fi zdarma", "svc.shuttle": "Kyvadlová doprava",
      "svc.bike": "Půjčení kol", "svc.car": "Půjčení auta", "svc.cot": "Dětská postýlka zdarma (0–3 roky)",
      "svc.pets": "Mazlíčci na vyžádání", "svc.family": "Rodinné pokoje", "svc.nonsmoking": "Nekuřácké",

      "island.eyebrow": "Výlety", "island.title": "Ostrov za pláží",
      "island.teide": "Nejvyšší vrchol Španělska, 3 715 m. Cesta nahoru vede přes stará lávová pole a lanovka vyveze skoro až na vrchol.",
      "island.santaCruz": "Hlavní město ostrova. Na nábřeží stojí Calatravovo auditorium ve tvaru vlny a v únoru se ulice na dva týdny promění v karneval.",
      "island.masca": "Hrstka domů na hřebeni hluboko v pohoří Teno, na konci jedné z nejdramatičtějších silnic na ostrově.",
      "island.teideAlt": "Západ slunce nad mořem mraků z borovicových lesů pod Teide",
      "island.santaCruzAlt": "Pláž Las Teresitas a vesnice San Andrés za soumraku",
      "island.mascaAlt": "Vesnice Masca na hřebeni v pohoří Teno",
      "trip.more": "Více o výletu", "trip.didYouKnow": "Věděli jste?", "trip.tips": "Naše tipy", "trip.close": "Zavřít", "trip.book": "Ověřit volné termíny",
      "book.eyebrow": "Dostupnost a rezervace", "book.title": "Naplánujte si pobyt a rezervujte přímo",
      "book.lead": "V kalendáři níže vyberte datum příjezdu a odjezdu. Cenu uvidíte hned a pak nám pošlete nezávaznou poptávku. Rezervaci osobně potvrdíme do 24 hodin a při přímé rezervaci neplatíte žádné poplatky rezervačním portálům.",
      "book.arrival": "Příjezd", "book.departure": "Odjezd",
      "cal.available": "Volno", "cal.booked": "Obsazeno", "cal.yourStay": "Váš pobyt",
      "cal.earlier": "Dřívější měsíce", "cal.later": "Pozdější měsíce",
      "cal.showAll": "Zobrazit všech 12 měsíců", "cal.showLess": "Zobrazit méně měsíců",
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
      "form.maxGuests": "Maximálně 6 hostů celkem, včetně dětí.",
      "form.adultsOption": { one: "{n} dospělý", few: "{n} dospělí", other: "{n} dospělých" },
      "form.childrenOption": { one: "{n} dítě", few: "{n} děti", other: "{n} dětí" }, "form.noChildren": "Bez dětí",
      "form.extras": "Doplňky", "form.cot": "Dětská postýlka (0–3 roky, zdarma)", "form.pet": "Cestuji s mazlíčkem (na vyžádání, za poplatek)",
      "form.message": "Zpráva <span class=\"opt\">(nepovinné)</span>",
      "form.messagePlaceholder": "Předpokládaný čas příjezdu (check-in 17:00–22:00), dotazy, přání…",
      "form.submit": "Odeslat poptávku", "form.sending": "Odesílám…",
      "form.note": "Nic teď neplatíte. Ověříme dostupnost a pošleme vám platební údaje.",
      "form.errDates": "Vyberte prosím v kalendáři datum příjezdu a odjezdu.",
      "form.errSend": "Omlouváme se, poptávku se nepodařilo odeslat. Zkuste to prosím znovu nebo nám napište e-mail.",
      "form.successTitle": "Poptávka odeslána, děkujeme!",
      "form.successText": "Do 24 hodin se ozveme a potvrdíme váš pobyt v Horizont Villa.",

      "rates.label": "Ceník", "rates.title": "Ceník", "rates.allOther": "Všechny ostatní termíny", "rates.perNight": "/ noc",
      "rates.min": "min. {nights}",
      "rates.note": "Cena za celou vilu na noc, až pro {guests} hostů, včetně daní a poplatků. Minimální pobyt {nights}.",
      "rates.cleaning": "Jednorázový poplatek za úklid {fee}.",
      "rates.included": "Wi-Fi a parkování zdarma. Dětská postýlka zdarma, mazlíčci na vyžádání za poplatek.",

      "rules.eyebrow": "Dobré vědět", "rules.title": "Domovní řád a podmínky",
      "rules.checkinNote": "Dejte nám prosím předem vědět čas příjezdu.",
      "rules.checkoutNote": "Odjezd prosím nejpozději do 11:00.",
      "rules.childrenTitle": "Děti",
      "rules.childrenText": "Děti jakéhokoli věku jsou vítány. Hosté od 18 let platí cenu pro dospělé. Při poptávce nám prosím uveďte počet a věk dětí.",
      "rules.cotsTitle": "Dětské postýlky a přistýlky",
      "rules.cotsText": "Dětská postýlka pro děti od 0 do 3 let je na vyžádání zdarma, podle dostupnosti. Přistýlky nejsou k dispozici.",
      "rules.petsTitle": "Domácí mazlíčci", "rules.petsText": "Mazlíčci jsou povoleni na vyžádání za poplatek. Uveďte je prosím v poptávce.",
      "rules.smokingTitle": "Zákaz kouření", "rules.smokingText": "Kouření není uvnitř vily povoleno.",
      "rules.partiesTitle": "Žádné večírky ani akce",
      "rules.partiesText": "Večírky a akce nejsou povoleny, aby okolí zůstalo klidné pro všechny.",
      "rules.guestsText": "Vila pojme maximálně 6 hostů včetně dětí. Vítáni jsou hosté všech věkových kategorií a minimální délka pobytu je 6 nocí.",
      "cancel.title": "Storno a platba",
      "cancel.intro": "Ceny zahrnují daně a poplatky. Každá rezervace má flexibilní podmínky:",
      "cancel.flexible": "Flexibilní",
      "cancel.flex1": "Bezplatné storno do data uvedeného v potvrzení rezervace",
      "cancel.flex2": "Nic neplatíte až do doby krátce před koncem bezplatného storna",
      "cancel.flex3": "Termín můžete změnit, pokud se vaše plány změní",

      "loc.title": "La Tejita, divoká strana jihu",
      "loc.lead": "Vila leží u pláže v La Tejitě – přírodní písečná pláž a rudý sopečný kužel Montaña Roja jsou hned za dveřmi. Letiště, golf i hlavní atrakce ostrova jsou kousek autem.",
      "loc.airport": "Letiště Tenerife Jih (TFS)", "loc.golfKm": "7,8 km", "loc.aqualand": "Aquapark Aqualand",
      "loc.note": "Vzdálenosti jsou orientační.",
      "loc.mapText": "300 m od Playa de la Tejita · 5 km od letiště Tenerife Jih",
      "loc.showMap": "Zobrazit mapu", "loc.openMaps": "Otevřít v Mapách Google", "loc.mapTitle": "Mapa La Tejita, Tenerife",

      "footer.title": "Váš západ slunce už čeká",
      "footer.text": "Máte před rezervací dotaz? Napište nebo zavolejte, rádi pomůžeme.",
      "footer.licence": "Licence pro turistický pronájem:",
      "float.label": "Rezervovat pobyt", "float.title": "Rezervovat pobyt", "float.from": "od {price} / noc",

      "photo.roof-terrace": ["Horní terasa", "Balkon se sedačkou a výhledem na oceán"],
      "photo.bedroom-sea-view": ["Horní ložnice 1", "Ložnice s manželskou postelí v horním patře s východem na balkon"],
      "photo.bedroom-main": ["Horní ložnice 2", "Ložnice v horním patře se šikmým stropem"],
      "photo.twin-bedroom": ["Horní ložnice se dvěma lůžky", "Ložnice v horním patře se dvěma jednolůžky"],
      "photo.bathroom": ["Horní koupelna", "Velká koupelna s vanou a sprchou"],
      "photo.living-room": ["Obývací pokoj", "Světlý obývací pokoj s bílou pohovkou a stropním ventilátorem"],
      "photo.lounge-terrace": ["Obývák a terasa", "Obývací pokoj s posuvnými dveřmi na terasu"],
      "photo.dining": ["Jídelní koutek", "Skleněný jídelní stůl pro šest osob vedle kuchyně"],
      "photo.kitchen": ["Kuchyně", "Plně vybavená kuchyně s troubou a myčkou"],
      "photo.shower-room": ["Spodní koupelna", "Menší koupelna se sprchou a stěnou ze skleněných tvárnic"],
      "photo.pool": ["", "Jeden ze tří soukromých bazénů za slunečného dne"],
      "photo.pool-night": ["", "Soukromý bazén v noci osvětlený modře"],
      "photo.montana-roja": ["Montaña Roja", "Vlny na pláži La Tejita pod rudou sopkou Montaña Roja"],
      "photo.beach-sunset-2": ["", "Slunce zapadající nad oceánem, pohled z pláže"],
      "photo.sunset-sky": ["", "Růžová a fialová obloha nad Atlantikem za soumraku"],
      "photo.sunset-terrace": ["", "Sedačka na terase při západu slunce"],
      "photo.sunset-roof": ["", "Slunce zapadající za kopce, pohled z domu"],
      "photo.sunset-hills": ["", "Oranžová obloha a slunce klesající nad kopci"],
      "photo.sunset-coast": ["", "Slunce zapadající za domy na nábřeží"],
      "photo.sunset-plane": ["", "Letadlo přelétající večerní slunce u pobřeží"]
    },

    /* ------------------------------------------------------------------ ES */
    es: {
      "meta.title": "Horizont Villa La Tejita · Villa vacacional en el sur de Tenerife",
      "meta.description": "Horizont Villa La Tejita: casa vacacional de 220 m² con 4 dormitorios y 3 piscinas privadas, a 300 m de la Playa de la Tejita, Tenerife. Hasta 6 huéspedes. Reserva directamente con los propietarios.",
      "a11y.skip": "Saltar al contenido",
      "a11y.mainNav": "Navegación principal",
      "a11y.brandHome": "Horizont Villa La Tejita — inicio",
      "a11y.backTop": "Volver arriba",
      "a11y.openMenu": "Abrir menú",
      "a11y.closeMenu": "Cerrar menú",
      "lang.change": "Cambiar idioma (actual: {name})",

      "nav.home": "Inicio", "nav.villa": "La villa", "nav.availability": "Disponibilidad",
      "nav.rules": "Normas", "nav.location": "Ubicación", "nav.contact": "Contacto",
      "meta.place": "La Tejita, sur de Tenerife", "meta.beach": "A 300 m de la playa",
      "meta.map": "En el mapa", "meta.hours": "Respondemos a diario, 9:00–21:00",
      "header.sisterEyebrow": "Nuestra otra villa",
      "header.sisterAria": "Ir a Seaside Villa La Tejita, nuestra otra casa",

      "hero.photoAlt": "Atardecer dorado sobre la arena volcánica oscura de la playa de La Tejita",
      "hero.eyebrow": "Villa vacacional · Islas Canarias",
      "hero.p1": "Casa entera de 220 m² para hasta 6 huéspedes, 4 dormitorios y 2 baños",
      "hero.p2": "3 piscinas privadas, terraza, balcón y vistas al jardín",
      "hero.p3": "La Playa de la Tejita a solo 300 m",
      "hero.p4": "Parking y Wi-Fi gratis, se admiten mascotas",
      "hero.cta": "Ver disponibilidad", "cover.scroll": "Desliza", "cover.book": "Reservar",
      "cal.stay": "Estancia", "cal.confirm": "Continuar", "cal.priceNote": "Precios en EUR por noche para toda la villa", "form.title": "Tus datos",
      "cover.f1": "220 m²", "cover.f2": "4 dormitorios",
      "cover.f3": "Playa a 300 m", "cover.f4": "3 piscinas privadas", "hero.explore": "Descubrir la villa",
      "slider.label": "Fotos de la villa", "slider.prev": "Foto anterior", "slider.next": "Foto siguiente",
      "slider.choose": "Elegir foto", "slider.slide": "{i} de {n}: {label}",
      "slider.hideThumbs": "Ocultar miniaturas", "slider.showThumbs": "Mostrar miniaturas",
      "viewer.open": "Ver foto completa", "viewer.label": "Visor de fotos", "viewer.close": "Cerrar visor de fotos",

      "amen.label": "Servicios",
      "amen.pools": "3 piscinas<br>privadas", "amen.wifi": "Wi-Fi<br>gratis", "amen.parking": "Parking<br>gratuito",
      "amen.pets": "Se admiten<br>mascotas", "amen.family": "Habitaciones<br>familiares", "amen.shuttle": "Servicio de<br>traslado",
      "mq.pools": "3 piscinas privadas", "mq.beach": "A 300 m de la Playa de la Tejita", "mq.size": "220 m² solo para ti",
      "mq.balcony": "Balcón con vistas al océano", "mq.guests": "Hasta 6 huéspedes", "mq.sunsets": "Atardeceres dorados",

      "villa.eyebrow": "La villa", "villa.title": "Toda la casa, solo para ti",
      "villa.lead": "Una casa vacacional de 220 m² junto a la playa en La Tejita, con balcón frente al océano, 3 piscinas privadas y parking gratuito. Podemos organizar el alquiler de bicicletas y coches para que explores la costa y las rutas ciclistas cercanas.",
      "villa.entire": "Casa entera", "villa.keyText": "Cuatro dormitorios en dos plantas, a solo 300 m de la Playa de la Tejita.",
      "villa.bedrooms": "Dormitorios", "villa.bathrooms": "Baños", "villa.guests": "Huéspedes",
      "villa.sleeping": "Distribución de camas",
      "villa.bedroom1": "Dormitorio 1", "villa.bedroom2": "Dormitorio 2", "villa.bedroom3": "Dormitorio 3", "villa.bedroom4": "Dormitorio 4",
      "floor.upper": "Planta superior", "floor.ground": "Planta baja", "floor.lower": "Garaje y sótano", "floor.outside": "Exterior",
      "room.twinBeds": "2 camas individuales", "room.doubleBed": "1 cama doble",
      "room.balcony": "Balcón", "room.balconyNote": "Sofá y vistas al mar",
      "room.double": "Dormitorio doble", "room.opensBalcony": "Con salida al balcón", "room.sloped": "Techo abuhardillado",
      "room.twin": "Dormitorio con dos camas", "room.mainBath": "Baño principal", "room.bathNote": "Bañera y ducha",
      "room.living": "Salón", "room.tv": "TV de pantalla plana", "room.dining": "Comedor", "room.table": "Mesa para seis",
      "room.kitchen": "Cocina", "room.equipped": "Totalmente equipada", "room.shower": "Baño con ducha", "room.secondBath": "Segundo baño",
      "room.garage": "Garaje", "room.lowerLevel": "Nivel inferior", "room.basement": "Sótano", "room.laundryArea": "Zona de lavandería",
      "room.washer": "Lavadora", "room.sink": "Con fregadero",
      "room.onProperty": "En la propiedad", "room.terrace": "Terraza y patio", "room.outdoorDining": "Comedor exterior",
      "room.garden": "Jardín", "room.gardenView": "Vistas al jardín", "room.parking": "Aparcamiento", "room.parkingNote": "Gratis, en la propiedad",
      "room.beach": "Playa", "room.beachWalk": "A 300 m a pie",
      "svc.title": "Incluido y bajo petición", "svc.wifi": "Wi-Fi gratis", "svc.shuttle": "Servicio de traslado",
      "svc.bike": "Alquiler de bicicletas", "svc.car": "Alquiler de coches", "svc.cot": "Cuna gratis (0–3 años)",
      "svc.pets": "Mascotas bajo petición", "svc.family": "Habitaciones familiares", "svc.nonsmoking": "No fumadores",

      "island.eyebrow": "Excursiones", "island.title": "La isla más allá de la playa",
      "island.teide": "El pico más alto de España, 3.715 m. La carretera sube entre campos de lava y un teleférico llega casi hasta la cima.",
      "island.santaCruz": "La capital de la isla, con el auditorio en forma de ola de Calatrava frente al mar y un carnaval que cada febrero llena las calles durante dos semanas.",
      "island.masca": "Un puñado de casas sobre una cresta en lo hondo del macizo de Teno, al final de una de las carreteras más espectaculares de la isla.",
      "island.teideAlt": "Puesta de sol sobre el mar de nubes desde los pinares bajo el Teide",
      "island.santaCruzAlt": "La playa de Las Teresitas y el pueblo de San Andrés al anochecer",
      "island.mascaAlt": "El pueblo de Masca sobre su cresta en el macizo de Teno",
      "trip.more": "Descubrir más", "trip.didYouKnow": "¿Sabías que…?", "trip.tips": "Nuestros consejos", "trip.close": "Cerrar", "trip.book": "Ver disponibilidad",
      "book.eyebrow": "Disponibilidad y reservas", "book.title": "Planifica tu estancia y reserva directamente",
      "book.lead": "Elige tus fechas de llegada y salida en el calendario. Verás el precio al instante y después podrás enviarnos tu solicitud de reserva. La confirmamos personalmente en 24 horas y, al reservar directamente, no pagas comisiones de plataformas.",
      "book.arrival": "Llegada", "book.departure": "Salida",
      "cal.available": "Disponible", "cal.booked": "Reservado", "cal.yourStay": "Tu estancia",
      "cal.earlier": "Meses anteriores", "cal.later": "Meses posteriores",
      "cal.showAll": "Ver los 12 meses", "cal.showLess": "Ver menos meses",
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
      "form.maxGuests": "Máximo 6 huéspedes en total, niños incluidos.",
      "form.adultsOption": { one: "{n} adulto", other: "{n} adultos" },
      "form.childrenOption": { one: "{n} niño", other: "{n} niños" }, "form.noChildren": "Sin niños",
      "form.extras": "Extras", "form.cot": "Cuna para bebé (0–3 años, gratis)", "form.pet": "Viajo con mascota (bajo petición, con suplemento)",
      "form.message": "Mensaje <span class=\"opt\">(opcional)</span>",
      "form.messagePlaceholder": "Hora estimada de llegada (check-in 17:00–22:00), preguntas, peticiones…",
      "form.submit": "Enviar solicitud de reserva", "form.sending": "Enviando…",
      "form.note": "No pagas nada ahora. Confirmaremos la disponibilidad y te enviaremos los datos de pago.",
      "form.errDates": "Selecciona en el calendario tus fechas de llegada y salida.",
      "form.errSend": "Lo sentimos, no se ha podido enviar tu solicitud. Inténtalo de nuevo o escríbenos por correo.",
      "form.successTitle": "¡Solicitud enviada, gracias!",
      "form.successText": "Te responderemos en 24 horas para confirmar tu estancia en Horizont Villa.",

      "rates.label": "Tarifas", "rates.title": "Tarifas", "rates.allOther": "Resto de fechas", "rates.perNight": "/ noche",
      "rates.min": "mín. {nights}",
      "rates.note": "Precio por noche para toda la villa, hasta {guests} huéspedes, impuestos y tasas incluidos. Estancia mínima de {nights}.",
      "rates.cleaning": "Tarifa de limpieza única de {fee}.",
      "rates.included": "Wi-Fi y parking gratis. Cuna gratis; mascotas bajo petición con suplemento.",

      "rules.eyebrow": "Información útil", "rules.title": "Normas de la casa y condiciones",
      "rules.checkinNote": "Por favor, avísanos con antelación de tu hora de llegada.",
      "rules.checkoutNote": "Por favor, deja la casa como muy tarde a las 11:00.",
      "rules.childrenTitle": "Niños",
      "rules.childrenText": "Los niños de cualquier edad son bienvenidos. Los huéspedes de 18 años o más pagan tarifa de adulto. Indícanos el número y la edad de los niños al solicitar la reserva.",
      "rules.cotsTitle": "Cunas y camas supletorias",
      "rules.cotsText": "Cuna gratuita bajo petición para niños de 0 a 3 años, sujeta a disponibilidad. No hay camas supletorias.",
      "rules.petsTitle": "Mascotas", "rules.petsText": "Se admiten mascotas bajo petición y con suplemento. Menciónalo en tu solicitud de reserva.",
      "rules.smokingTitle": "Prohibido fumar", "rules.smokingText": "No está permitido fumar dentro de la villa.",
      "rules.partiesTitle": "No se permiten fiestas ni eventos",
      "rules.partiesText": "No se permiten fiestas ni eventos, para que el vecindario siga tranquilo.",
      "rules.guestsText": "La villa admite un máximo de 6 huéspedes, niños incluidos. Son bienvenidos huéspedes de todas las edades y la estancia mínima es de 6 noches.",
      "cancel.title": "Cancelación y pago",
      "cancel.intro": "Los precios incluyen impuestos y tasas. Toda reserva tiene condiciones flexibles:",
      "cancel.flexible": "Flexible",
      "cancel.flex1": "Cancelación gratuita hasta la fecha indicada en la confirmación de la reserva",
      "cancel.flex2": "No se cobra nada hasta poco antes de que termine la cancelación gratuita",
      "cancel.flex3": "Puedes cambiar las fechas si cambian tus planes",

      "loc.title": "La Tejita, el lado salvaje del sur",
      "loc.lead": "La villa está junto a la playa en La Tejita, con una playa natural de arena y el cono volcánico rojo de Montaña Roja a un paso. El aeropuerto, el golf y las grandes atracciones de la isla están a pocos minutos en coche.",
      "loc.airport": "Aeropuerto Tenerife Sur (TFS)", "loc.golfKm": "7,8 km", "loc.aqualand": "Parque acuático Aqualand",
      "loc.note": "Las distancias son aproximadas.",
      "loc.mapText": "A 300 m de la Playa de la Tejita · a 5 km del aeropuerto Tenerife Sur",
      "loc.showMap": "Ver mapa", "loc.openMaps": "Abrir en Google Maps", "loc.mapTitle": "Mapa de La Tejita, Tenerife",

      "footer.title": "Tu atardecer te espera",
      "footer.text": "¿Tienes dudas antes de reservar? Escríbenos o llámanos, estaremos encantados de ayudarte.",
      "footer.licence": "Licencia de vivienda vacacional:",
      "float.label": "Reserva tu estancia", "float.title": "Reserva tu estancia", "float.from": "desde {price} / noche",

      "photo.roof-terrace": ["Terraza superior", "Balcón con sofá y vistas al océano"],
      "photo.bedroom-sea-view": ["Dormitorio superior 1", "Dormitorio doble en la planta superior con salida al balcón"],
      "photo.bedroom-main": ["Dormitorio superior 2", "Dormitorio doble en la planta superior con techo abuhardillado"],
      "photo.twin-bedroom": ["Dormitorio superior con dos camas", "Dormitorio en la planta superior con dos camas individuales"],
      "photo.bathroom": ["Baño de arriba", "Baño amplio con bañera y ducha"],
      "photo.living-room": ["Salón", "Salón luminoso con sofá blanco y ventilador de techo"],
      "photo.lounge-terrace": ["Salón y terraza", "Salón con puertas correderas a la terraza"],
      "photo.dining": ["Rincón comedor", "Mesa de comedor de cristal para seis junto a la cocina"],
      "photo.kitchen": ["Cocina", "Cocina totalmente equipada con horno y lavavajillas"],
      "photo.shower-room": ["Baño de abajo", "Baño pequeño con ducha y pared de pavés"],
      "photo.pool": ["", "Una de las tres piscinas privadas en un día soleado"],
      "photo.pool-night": ["", "Piscina privada iluminada de azul por la noche"],
      "photo.montana-roja": ["Montaña Roja", "Olas en la playa de La Tejita bajo el volcán rojo Montaña Roja"],
      "photo.beach-sunset-2": ["", "El sol poniéndose sobre el océano visto desde la playa"],
      "photo.sunset-sky": ["", "Cielo rosa y violeta sobre el Atlántico al anochecer"],
      "photo.sunset-terrace": ["", "Sofá en la terraza mientras se pone el sol"],
      "photo.sunset-roof": ["", "El sol poniéndose tras las colinas, visto desde la casa"],
      "photo.sunset-hills": ["", "Cielo naranja y el sol bajando sobre las colinas"],
      "photo.sunset-coast": ["", "El sol poniéndose tras los edificios del paseo marítimo"],
      "photo.sunset-plane": ["", "Un avión cruzando el sol de la tarde junto a la costa"]
    }
  };

  /* ---------------------------------------------------------------- engine */
  const STORE_KEY = "horizont-lang";
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
    // the header and the cover photo each have one
    document.querySelectorAll("[data-lang-switch]").forEach(initOneSwitcher);
  }
  function initOneSwitcher(wrap) {
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
