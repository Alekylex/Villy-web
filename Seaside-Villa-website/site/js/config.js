/* =========================================================================
   SEASIDE VILLA LA TEJITA — OWNER SETTINGS
   This is the only file you need to edit day to day.
   Anything marked  TODO  is a placeholder waiting for your real details.
   ========================================================================= */

window.VILLA_CONFIG = {

  /* ---- Contact ---------------------------------------------------------- */
  email: "info@seasidevilla-latejita.com",        // TODO real email
  phone: "+34 600 000 000",                       // TODO real phone
  whatsapp: "34600000000",                        // TODO digits only, with country code

  /* ---- Our other villa ---------------------------------------------------
     The address of the Horizont Villa website. This puts a button in the header
     that jumps straight there, and Horizont's site has the same button pointing
     back here. Leave it empty and the button simply does not appear.

     Right now this is a relative path to your local copy, so the two sites can
     be clicked through while you work on them, straight from the Desktop folder.

     >>> BEFORE GOING LIVE, replace it with the real address, e.g.
     >>>   sisterUrl: "https://horizonvilla-latejita.com",
     A path ending in .html is treated as a local working copy and the button is
     hidden automatically on a real (http/https) site, so a half-finished setting
     can never show visitors a broken link. */
  sisterUrl: "../../Horizon-Villa-website/Tenerife%20website/site/index.html",   // TODO real domain

  /* Booking requests are sent here. Create a free form at https://formspree.io,
     paste its endpoint below (e.g. "https://formspree.io/f/abcdwxyz").
     While empty, the form opens the guest's email app with everything filled in. */
  formEndpoint: "",

  /* ---- Where the house is ------------------------------------------------
     Exact position, as "latitude,longitude". The map on the page drops its pin
     here, and the "Open in Google Maps" button leads to the same spot.
     To check or change it: open Google Maps, right-click the roof of the house
     and click the coordinates at the top of the menu — that copies them.
     Taken from the Booking.com listing (Calle El Cano 13 R2); please confirm
     it lands on the right roof and adjust if not. */
  coords: "28.03248549,-16.56551578",
  mapZoom: 18,                                    // 18 shows the individual house

  /* ---- Pricing (EUR) ---------------------------------------------------- */
  currency: "EUR",
  cleaningFee: 0,           // one-off per stay (0 = not shown)
  minNights: 5,             // minimum stay
  maxGuests: 4,             // adults + children together

  /* Nightly price. To add seasons later, put extra lines ABOVE the "All year" line,
     e.g. { name: { en: "Christmas", cs: "Vánoce", es: "Navidad" }, from: "12-20", to: "01-06", nightly: 210, minNights: 7 },
     Dates are month-day ("MM-DD"). The first matching line wins. */
  seasons: [
    { name: { en: "All year", cs: "Celý rok", es: "Todo el año" }, from: "01-01", to: "12-31", nightly: 150 }
  ],

  /* ---- Booked dates ----------------------------------------------------- */
  /* Add one line per confirmed booking: check-in date and check-out date (YYYY-MM-DD).
     The check-out day stays available for the next guest's arrival.
     TODO replace the sample lines below with your real bookings. */
  booked: [
    { from: "2026-10-03", to: "2026-10-12" },
    { from: "2026-11-14", to: "2026-11-21" },
    { from: "2026-12-19", to: "2027-01-02" },
    { from: "2027-02-20", to: "2027-03-06" },
    { from: "2027-04-10", to: "2027-04-17" },
    { from: "2027-06-05", to: "2027-06-19" }
  ]
};
