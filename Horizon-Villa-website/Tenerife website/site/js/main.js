/* Horizont Villa La Tejita — site behaviour */
(function () {
  "use strict";

  const CFG = window.VILLA_CONFIG || {};
  const I18N = window.I18N;
  const t = I18N.t;
  const nights = I18N.nights;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------------------ */
  /* Photos                                                              */
  /* ------------------------------------------------------------------ */
  /* Hero slider photos, in order. Captions and alt texts live in i18n.js ("photo.<file name>"). */
  const PHOTOS = [
    "roof-terrace", "bedroom-sea-view", "bedroom-main", "twin-bedroom", "bathroom",   // balcony & upper floor
    "living-room", "lounge-terrace", "dining", "kitchen", "shower-room",              // ground floor
    "pool", "pool-night", "montana-roja", "beach-sunset-2",                            // pools & views
    "sunset-terrace", "sunset-roof", "sunset-hills", "sunset-coast", "sunset-plane",  // sunsets from the house and around
    "sunset-sky"                                                                       // the pink-and-violet sky closes the gallery
  ].map((name) => ({
    src: name + ".jpg",
    get label() { return t("photo." + name)[0]; },
    get alt() { return t("photo." + name)[1]; }
  }));
  const img = (name) => "images/" + name;
  /* small copies for the thumbnail strips, so a 20-photo gallery stays light */
  const thumb = (name) => "images/thumbs/" + name;

  /* ------------------------------------------------------------------ */
  /* Contact details from config                                         */
  /* ------------------------------------------------------------------ */
  function applyContact() {
    if (CFG.phone) {
      const tel = "tel:" + CFG.phone.replace(/[^\d+]/g, "");
      $$("[data-config-phone]").forEach((a) => {
        a.href = tel;
        const span = a.querySelector("span");
        (span || a).textContent = CFG.phone;
      });
    }
    if (CFG.email) {
      $$("[data-config-email]").forEach((a) => {
        a.href = "mailto:" + CFG.email;
        const span = a.querySelector("span");
        (span || a).textContent = CFG.email;
      });
    }
    if (CFG.whatsapp) {
      $$("[data-config-whatsapp]").forEach((a) => (a.href = "https://wa.me/" + CFG.whatsapp));
    }
    /* Link to our other villa's site.

       index.html already carries a working href, so the button shows with
       JavaScript off. This only improves it, and is deliberately unable to make
       it disappear by accident:
         - a non-empty CFG.sisterUrl replaces the href;
         - an empty or missing one leaves the href from index.html alone, so a
           stale cached config.js can never delete the button;
         - the only removal is a local .html path on a genuinely public site
           (http/https), where that file would not exist. Any other protocol —
           file://, and anything unexpected — keeps the button.
       To drop the button for good, delete the <a class="sister-link"> element. */
    const sisterLinks = $$("[data-sister-link]");
    if (sisterLinks.length) {
      const configured = typeof CFG.sisterUrl === "string" ? CFG.sisterUrl.trim() : "";
      const target = configured || sisterLinks[0].getAttribute("href") || "";
      const isLocalCopy = /\.html?(?:[?#].*)?$/i.test(target);
      // localhost / 127.0.0.1 / home-network IPs (VS Code Live Server, OTEVRIT WEBY.bat) are still a local copy
      const onDevServer = /^(localhost|127\.\d+\.\d+\.\d+|\[::1\]|10\.\d+\.\d+\.\d+|192\.168\.\d+\.\d+|172\.(1[6-9]|2\d|3[01])\.\d+\.\d+)$/i.test(location.hostname);
      const onPublicSite = (location.protocol === "http:" || location.protocol === "https:") && !onDevServer;

      if (isLocalCopy && onPublicSite) {
        sisterLinks.forEach((a) => a.remove());
        console.warn("[villa] sisterUrl still points at a local copy (" + target +
                     "); the link is hidden. Put the real address in js/config.js.");
      } else if (target) {
        const setSisterHref = () => sisterLinks.forEach((a) => {
          let href = target;
          try {
            const u = new URL(target, location.href);
            u.searchParams.set("lang", I18N.lang);
            href = u.toString();
          } catch (e) { /* odd URL in config: use it exactly as typed */ }
          a.href = href;
          a.hidden = false;
        });
        setSisterHref();
        I18N.onChange(setSisterHref);
      }
    }
    $$("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
  }

  /* ------------------------------------------------------------------ */
  /* Navigation                                                          */
  /* ------------------------------------------------------------------ */
  function initNav() {
    const toggle = $(".nav-toggle");
    const list = $("#nav-list");
    const setOpen = (open) => {
      list.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", t(open ? "a11y.closeMenu" : "a11y.openMenu"));
    };
    toggle.addEventListener("click", () => setOpen(!list.classList.contains("is-open")));
    setOpen(false);
    I18N.onChange(() => setOpen(list.classList.contains("is-open")));
    list.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });

    // where the site itself starts, just below the full-screen cover photo
    const pageTop = () => {
      const page = $(".page");
      return page ? page.getBoundingClientRect().top + window.scrollY : 0;
    };

    // "Home" and the logo go back to the top of the site (the menu bar, below the cover)
    $$('a[href="#top"]').forEach((a) => a.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
      history.replaceState(null, "", location.pathname + location.search);
    }));

    // the arrow at the bottom of the full-screen cover glides down to the site itself
    $$("[data-cover-scroll]").forEach((a) => a.addEventListener("click", (e) => {
      e.preventDefault();
      const first = $(".hero") || $(".page");
      const y = first.getBoundingClientRect().top + window.scrollY - 64 - 24;   // slim bar + breathing room
      window.scrollTo({ top: y, behavior: reduceMotion ? "auto" : "smooth" });
    }));

    // the top bar stays pinned and turns into a slim frosted bar once the page moves
    const topBar = $(".cover-bar");
    if (topBar) {
      const setScrolled = () => topBar.classList.toggle("is-scrolled", window.scrollY > 40);
      window.addEventListener("scroll", setScrolled, { passive: true });
      setScrolled();
    }

    // compact menu bar once the page is scrolled (gap between the two thresholds avoids flicker)
    const header = $(".site-header");
    const updateStuck = () => {
      const y = window.scrollY - pageTop();          // measured from below the cover
      if (y > 160) header.classList.add("is-stuck");
      else if (y < 40) header.classList.remove("is-stuck");
    };

    // only in-page anchors: the sister-site link lives in this list too, and its
    // href is a URL, which querySelector below would choke on
    const links = $$('a[href^="#"]', list);
    const targets = links.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
    const setActive = (id) => links.forEach((a) => {
      const on = a.getAttribute("href") === "#" + id;
      a.classList.toggle("is-active", on);
      if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
    });
    // section positions are measured once (and on resize), not on every scroll event
    let tops = [];
    const measure = () => { tops = targets.map((t) => [t.id, t.getBoundingClientRect().top + window.scrollY]); };
    let ticking = false;
    const onScroll = () => {
      ticking = false;
      const y = window.scrollY + window.innerHeight * 0.35;
      let current = "top";
      tops.forEach(([id, top]) => { if (id !== "top" && top <= y) current = id; });
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = "contact";
      setActive(current);
      updateStuck();
    };
    window.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
    window.addEventListener("resize", () => { measure(); onScroll(); });
    window.addEventListener("load", () => { measure(); onScroll(); });
    if ("ResizeObserver" in window) new ResizeObserver(measure).observe(document.body);
    measure();
    onScroll();
  }

  /* ------------------------------------------------------------------ */
  /* Hero slider                                                         */
  /* ------------------------------------------------------------------ */
  function initSlider() {
    const root = $(".slider");
    const viewport = $(".slider-viewport", root);
    const thumbs = $(".slider-thumbs", root);
    const caption = $(".slider-caption", root);
    const photos = PHOTOS;
    let index = 0;
    let timer = null;
    let lastSwipe = 0;
    let hovering = false;

    photos.forEach((p, i) => {
      const fig = document.createElement("figure");
      fig.className = "slide" + (i === 0 ? " is-active" : "");
      fig.setAttribute("role", "group");
      fig.setAttribute("aria-roledescription", "slide");
      fig.innerHTML = `<img src="${img(p.src)}" alt="" ${i > 1 ? 'loading="lazy"' : ""} width="1024" height="768">`;
      fig.addEventListener("click", () => { if (Date.now() - lastSwipe > 400) viewer.open(index); });
      viewport.appendChild(fig);

      const b = document.createElement("button");
      b.className = "thumb";
      b.type = "button";
      b.setAttribute("role", "tab");
      b.setAttribute("aria-selected", i === 0 ? "true" : "false");
      b.innerHTML = `<img src="${thumb(p.src)}" alt="" loading="lazy">`;
      b.addEventListener("click", () => { go(i); restart(); });
      thumbs.appendChild(b);
    });

    const slides = $$(".slide", viewport);
    const thumbBtns = $$(".thumb", thumbs);

    function applyLabels() {
      photos.forEach((p, i) => {
        slides[i].setAttribute("aria-label", t("slider.slide", { i: i + 1, n: photos.length, label: p.label || p.alt }));
        slides[i].querySelector("img").alt = p.alt;
        thumbBtns[i].setAttribute("aria-label", p.label || p.alt);
      });
      caption.textContent = [photos[index].label, `${index + 1}/${photos.length}`].filter(Boolean).join(" · ");
    }
    I18N.onChange(applyLabels);

    function go(i) {
      index = (i + photos.length) % photos.length;
      slides.forEach((s, n) => s.classList.toggle("is-active", n === index));
      thumbBtns.forEach((t, n) => t.setAttribute("aria-selected", n === index ? "true" : "false"));
      caption.textContent = [photos[index].label, `${index + 1}/${photos.length}`].filter(Boolean).join(" · ");
      root.dispatchEvent(new CustomEvent("slidechange", { detail: index }));
      const t = thumbBtns[index];
      thumbs.scrollTo({ left: t.offsetLeft - thumbs.clientWidth / 2 + t.clientWidth / 2, behavior: reduceMotion ? "auto" : "smooth" });
    }
    function start() {
      if (reduceMotion || timer) return;
      timer = setInterval(() => go(index + 1), 6000);
      root.classList.remove("is-paused");
      root.dispatchEvent(new CustomEvent("slidechange", { detail: index }));
    }
    function stop() { clearInterval(timer); timer = null; root.classList.add("is-paused"); }
    function restart() { stop(); start(); }

    $(".prev", root).addEventListener("click", () => { go(index - 1); restart(); });
    $(".next", root).addEventListener("click", () => { go(index + 1); restart(); });
    root.addEventListener("mouseenter", () => { hovering = true; stop(); });
    root.addEventListener("mouseleave", () => { hovering = false; if (!viewer.isOpen()) start(); });
    root.addEventListener("focusin", stop);
    root.addEventListener("focusout", () => { if (!viewer.isOpen()) start(); });
    root.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") { go(index - 1); }
      if (e.key === "ArrowRight") { go(index + 1); }
    });

    // swipe
    let x0 = null;
    root.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; stop(); }, { passive: true });
    root.addEventListener("touchend", (e) => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 40) { go(index + (dx < 0 ? 1 : -1)); lastSwipe = Date.now(); }
      x0 = null; start();
    });

    /* The thumbnail strip can be tucked away so the photo shows in full.
       The choice is remembered for the visitor's next page view. */
    const thumbsToggle = $(".thumbs-toggle", root);
    const THUMBS_KEY = "villa.thumbsHidden";
    function setThumbs(hidden, remember) {
      root.classList.toggle("thumbs-hidden", hidden);
      thumbsToggle.setAttribute("aria-expanded", String(!hidden));
      thumbsToggle.setAttribute("aria-label", t(hidden ? "slider.showThumbs" : "slider.hideThumbs"));
      thumbsToggle.title = thumbsToggle.getAttribute("aria-label");
      thumbs.inert = hidden;
      if (remember) { try { localStorage.setItem(THUMBS_KEY, hidden ? "1" : "0"); } catch (e) { /* storage off: fine */ } }
    }
    if (thumbsToggle) {
      let startHidden = false;
      try { startHidden = localStorage.getItem(THUMBS_KEY) === "1"; } catch (e) { /* storage off: fine */ }
      setThumbs(startHidden, false);
      I18N.onChange(() => setThumbs(root.classList.contains("thumbs-hidden"), false));
      thumbsToggle.addEventListener("click", () => setThumbs(!root.classList.contains("thumbs-hidden"), true));
      // on touch screens: drag the strip down to tuck it away, drag the tab up to bring it back
      let ty = null;
      const onStart = (e) => { ty = e.touches[0].clientY; };
      const onEnd = (e) => {
        if (ty === null) return;
        const dy = e.changedTouches[0].clientY - ty;
        ty = null;
        if (dy > 30) setThumbs(true, true);
        else if (dy < -30) setThumbs(false, true);
      };
      [thumbs, thumbsToggle].forEach((el) => {
        el.addEventListener("touchstart", onStart, { passive: true });
        el.addEventListener("touchend", onEnd);
      });
    }

    // full-screen viewer showing the whole photo; the slider picks up where the viewer left off
    const viewer = initViewer(photos, (last) => {
      go(last);
      if (!hovering) start();
    });
    $(".slider-expand", root).addEventListener("click", () => viewer.open(index));
    root.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && e.target.closest(".slide")) viewer.open(index);
    });
    const openViewer = viewer.open;
    viewer.open = (i) => { stop(); openViewer(i); };

    applyLabels();
    go(0);
    start();
  }

  /* ------------------------------------------------------------------ */
  /* Full-screen photo viewer                                            */
  /* ------------------------------------------------------------------ */
  function initViewer(photos, onClose) {
    const box = document.createElement("div");
    box.className = "viewer";
    box.hidden = true;
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    box.innerHTML = `
      <div class="viewer-top">
        <p class="viewer-caption" aria-live="polite"><span class="viewer-count"></span><span class="viewer-label"></span></p>
        <button class="viewer-close" type="button"><svg class="icon" aria-hidden="true"><use href="#i-close"/></svg></button>
      </div>
      <div class="viewer-stage">
        <button class="viewer-nav prev" type="button"><svg class="icon" aria-hidden="true"><use href="#i-left"/></svg></button>
        <figure class="viewer-figure"><img alt=""></figure>
        <button class="viewer-nav next" type="button"><svg class="icon" aria-hidden="true"><use href="#i-right"/></svg></button>
      </div>
      <div class="viewer-thumbs"></div>`;
    document.body.appendChild(box);

    const imgEl = $(".viewer-figure img", box);
    const figure = $(".viewer-figure", box);
    const countEl = $(".viewer-count", box);
    const labelEl = $(".viewer-label", box);
    const closeBtn = $(".viewer-close", box);
    const prevBtn = $(".viewer-nav.prev", box);
    const nextBtn = $(".viewer-nav.next", box);
    const strip = $(".viewer-thumbs", box);
    const thumbs = photos.map((p, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "viewer-thumb";
      b.innerHTML = `<img src="${thumb(p.src)}" alt="" loading="lazy">`;
      b.addEventListener("click", () => show(i));
      strip.appendChild(b);
      return b;
    });

    let current = 0;
    let returnFocus = null;
    let scrollbarGap = 0;

    function applyLabels() {
      box.setAttribute("aria-label", t("viewer.label"));
      closeBtn.setAttribute("aria-label", t("viewer.close"));
      prevBtn.setAttribute("aria-label", t("slider.prev"));
      nextBtn.setAttribute("aria-label", t("slider.next"));
      thumbs.forEach((b, i) => b.setAttribute("aria-label", photos[i].label || photos[i].alt));
      countEl.textContent = `${current + 1} / ${photos.length}`;
      labelEl.textContent = photos[current].label;
      imgEl.alt = photos[current].alt;
    }
    I18N.onChange(() => { if (!box.hidden) applyLabels(); });

    function show(i, direction = 0) {
      current = (i + photos.length) % photos.length;
      const p = photos[current];
      figure.classList.remove("is-in", "from-left", "from-right");
      void figure.offsetWidth; // restart the entrance animation
      if (direction) figure.classList.add(direction > 0 ? "from-right" : "from-left");
      figure.classList.add("is-in");
      imgEl.src = img(p.src);
      applyLabels();
      thumbs.forEach((b, n) => b.setAttribute("aria-current", String(n === current)));
      const tb = thumbs[current];
      strip.scrollTo({ left: tb.offsetLeft - strip.clientWidth / 2 + tb.clientWidth / 2, behavior: reduceMotion ? "auto" : "smooth" });
      // warm up the neighbours so arrowing feels instant
      [current - 1, current + 1].forEach((n) => { new Image().src = img(photos[(n + photos.length) % photos.length].src); });
    }

    function open(i) {
      returnFocus = document.activeElement;
      scrollbarGap = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.overflow = "hidden";
      if (scrollbarGap) document.body.style.paddingRight = scrollbarGap + "px";
      box.hidden = false;
      requestAnimationFrame(() => box.classList.add("is-open"));
      show(i);
      closeBtn.focus();
    }

    function close() {
      if (box.hidden) return;
      box.classList.remove("is-open");
      box.hidden = true;
      document.documentElement.style.overflow = "";
      document.body.style.paddingRight = "";
      if (returnFocus && returnFocus.focus) returnFocus.focus({ preventScroll: true });
      onClose(current);
    }

    closeBtn.addEventListener("click", close);
    prevBtn.addEventListener("click", () => show(current - 1, -1));
    nextBtn.addEventListener("click", () => show(current + 1, 1));
    $(".viewer-stage", box).addEventListener("click", (e) => { if (e.target === e.currentTarget) close(); });
    box.addEventListener("click", (e) => { if (e.target === box) close(); });

    box.addEventListener("keydown", (e) => {
      if (e.key === "Escape") { e.preventDefault(); close(); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); show(current - 1, -1); }
      else if (e.key === "ArrowRight") { e.preventDefault(); show(current + 1, 1); }
      else if (e.key === "Tab") {                       // keep focus inside the viewer
        const focusables = $$("button", box);
        const first = focusables[0], last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });

    // swipe between photos on touch screens
    let sx = null, sy = null;
    box.addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
    box.addEventListener("touchend", (e) => {
      if (sx === null) return;
      const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) show(current + (dx < 0 ? 1 : -1), dx < 0 ? 1 : -1);
      else if (dy > 90 && Math.abs(dy) > Math.abs(dx)) close();          // swipe down to close
      sx = sy = null;
    });

    return { open, close, isOpen: () => !box.hidden };
  }

  /* ------------------------------------------------------------------ */
  /* Dates helpers (local time, keys as YYYY-MM-DD)                      */
  /* ------------------------------------------------------------------ */
  const pad = (n) => String(n).padStart(2, "0");
  const keyOf = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const parseKey = (k) => { const [y, m, d] = k.split("-").map(Number); return new Date(y, m - 1, d); };
  const addDays = (d, n) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
  const nightsBetween = (a, b) => Math.round((b - a) / 86400000);
  const today = (() => { const t = new Date(); return new Date(t.getFullYear(), t.getMonth(), t.getDate()); })();
  // formatters are cached per language (the calendar formats hundreds of dates)
  const formatCache = {};
  const fmt = () => {
    const loc = I18N.locale;
    if (!formatCache[loc]) {
      const df = (o) => new Intl.DateTimeFormat(loc, o);
      formatCache[loc] = {
        long: df({ weekday: "short", day: "numeric", month: "short", year: "numeric" }),
        aria: df({ weekday: "long", day: "numeric", month: "long", year: "numeric" }),
        month: df({ month: "long" }),
        monthYear: df({ month: "short", year: "numeric" }),
        short: df({ day: "numeric", month: "short" }),
        money: new Intl.NumberFormat(loc, { style: "currency", currency: CFG.currency || "EUR", maximumFractionDigits: 0 })
      };
    }
    return formatCache[loc];
  };
  const cap = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  const money = (v) => fmt().money.format(v);
  const emailDate = new Intl.DateTimeFormat("en-GB", { weekday: "short", day: "numeric", month: "short", year: "numeric" });
  // a season name may be plain text or { en, cs, es }
  const seasonName = (s) => (s.name && typeof s.name === "object" ? s.name[I18N.lang] || s.name.en : s.name);

  function seasonFor(date) {
    const md = `${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
    const list = CFG.seasons || [];
    for (const s of list) {
      const inside = s.from <= s.to ? md >= s.from && md <= s.to : md >= s.from || md <= s.to;
      if (inside) return s;
    }
    return list[list.length - 1] || { name: "", nightly: 0 };
  }

  /* ------------------------------------------------------------------ */
  /* Booking calendar                                                    */
  /* ------------------------------------------------------------------ */
  function initBooking() {
    const cal = $("#calendar");
    const hint = $(".cal-hint");
    const yearLabel = $(".year-label");
    const prevBtn = $('[data-cal="prev"]');
    const nextBtn = $('[data-cal="next"]');
    const out = (name) => $(`[data-out="${name}"]`);
    const MONTHS_AHEAD = 24;   // how far ahead guests can book
    const phone = window.matchMedia("(max-width: 640px)");
    const visibleMonths = () => (phone.matches ? 1 : 2);
    const maxOffset = () => MONTHS_AHEAD - visibleMonths();

    // booked nights (check-out day stays free)
    const bookedNights = new Set();
    const turnover = new Set();
    // made-up bookings relative to today, only while CFG.demoBookings is on (see config.js)
    const demoRanges = () => !CFG.demoBookings ? [] : [[10, 13], [24, 31], [45, 52], [73, 80]]
      .map(([a, b]) => ({ from: keyOf(addDays(today, a)), to: keyOf(addDays(today, b)) }));

    (CFG.booked || []).concat(demoRanges()).forEach(({ from, to }) => {
      const a = parseKey(from), b = parseKey(to);
      for (let d = a; d < b; d = addDays(d, 1)) bookedNights.add(keyOf(d));
      turnover.add(to);
    });

    const state = { offset: 0, checkin: null, checkout: null, hover: null };
    let dayButtons = [];
    let focusKey = null;

    const isFreeNight = (d) => d >= today && !bookedNights.has(keyOf(d));
    const rangeFree = (a, b) => { for (let d = a; d < b; d = addDays(d, 1)) if (!isFreeNight(d)) return false; return true; };
    const minNightsFor = (d) => Math.max(CFG.minNights || 1, seasonFor(d).minNights || 0);

    function render() {
      cal.innerHTML = "";
      const start = new Date(today.getFullYear(), today.getMonth() + state.offset, 1);
      prevBtn.disabled = state.offset <= 0;
      nextBtn.disabled = state.offset >= maxOffset();

      const frag = document.createDocumentFragment();
      cal.style.setProperty("--months", visibleMonths());
      for (let m = 0; m < visibleMonths(); m++) {
        const first = new Date(start.getFullYear(), start.getMonth() + m, 1);
        const month = document.createElement("div");
        month.className = "month";
        month.dataset.idx = m;
        month.innerHTML = `<h4><span class="m-name">${cap(fmt().month.format(first))} ${first.getFullYear()}</span></h4>
          <div class="dow" aria-hidden="true">${t("cal.dow").map((d) => `<span>${d}</span>`).join("")}</div>`;
        const days = document.createElement("div");
        days.className = "days";
        const lead = (first.getDay() + 6) % 7;
        for (let i = 0; i < lead; i++) days.appendChild(document.createElement("span"));
        const count = new Date(first.getFullYear(), first.getMonth() + 1, 0).getDate();
        for (let d = 1; d <= count; d++) {
          const date = new Date(first.getFullYear(), first.getMonth(), d);
          const k = keyOf(date);
          const b = document.createElement("button");
          b.type = "button";
          b.className = "day";
          b.innerHTML = `<span class="d-num">${d}</span><span class="d-price"></span>`;
          b.dataset.key = k;
          b.tabIndex = -1;
          if (date < today) b.classList.add("is-past");
          if (bookedNights.has(k)) {
            b.classList.add("is-booked");
            if (!bookedNights.has(keyOf(addDays(date, -1)))) b.classList.add("b-start");
            if (!bookedNights.has(keyOf(addDays(date, 1)))) b.classList.add("b-end");
          } else if (turnover.has(k) && date >= today) {
            b.classList.add("is-turnover");
          }
          if (k === keyOf(today)) b.classList.add("is-today");
          days.appendChild(b);
        }
        month.appendChild(days);
        frag.appendChild(month);
      }
      cal.appendChild(frag);
      // month arrows sit in the captions: back on the first month, forward on the last
      const caps = $$(".month h4", cal);
      caps[0].prepend(prevBtn);
      caps[caps.length - 1].append(nextBtn);
      dayButtons = $$(".day", cal);
      // nightly price under each night that can still be booked
      dayButtons.forEach((b) => {
        const date = parseKey(b.dataset.key);
        if (date >= today && !bookedNights.has(b.dataset.key)) $(".d-price", b).textContent = seasonFor(date).nightly;
      });
      applyCompact();
      paint();
    }

    /* How many months to show before the guest asks for more. Matched to the grid
       breakpoints in styles.css so the last row is always full and the calendar
       column stays level with the booking form beside it:
         1 column -> 3 months     2 columns -> 4 months     3 columns -> 6 months */
    function updateYearLabel() {   // read out to screen readers when the months change
      const start = new Date(today.getFullYear(), today.getMonth() + state.offset, 1);
      const end = new Date(start.getFullYear(), start.getMonth() + visibleMonths() - 1, 1);
      yearLabel.textContent = visibleMonths() > 1
        ? `${cap(fmt().monthYear.format(start))} – ${cap(fmt().monthYear.format(end))}`
        : cap(fmt().monthYear.format(start));
    }

    function applyCompact() { updateYearLabel(); }

    // Is a given day selectable in the current step?
    function selectable(date) {
      if (date < today) return false;
      if (state.checkin && !state.checkout && date > state.checkin) return rangeFree(state.checkin, date);
      return isFreeNight(date);
    }

    // aria date labels are cached per language: formatting 360 dates on every hover is wasteful
    const ariaCache = new Map();
    function ariaDate(key, date) {
      const id = I18N.lang + key;
      if (!ariaCache.has(id)) ariaCache.set(id, fmt().aria.format(date));
      return ariaCache.get(id);
    }

    function paint() {
      const ci = state.checkin, co = state.checkout;
      const previewEnd = !co && ci && state.hover && state.hover > ci && rangeFree(ci, state.hover) ? state.hover : null;
      let firstFocusable = null;

      dayButtons.forEach((b) => {
        const date = parseKey(b.dataset.key);
        const can = selectable(date);
        b.disabled = !can && !(ci && !co && date.getTime() === ci.getTime());
        b.classList.remove("is-start", "is-end", "in-range", "solo", "is-hover-range");
        if (ci && date.getTime() === ci.getTime()) { b.classList.add("is-start"); if (!co && !previewEnd) b.classList.add("solo"); }
        if (co && date.getTime() === co.getTime()) b.classList.add("is-end");
        if (ci && co && date > ci && date < co) b.classList.add("in-range");
        if (previewEnd && date > ci && date <= previewEnd) b.classList.add("is-hover-range");

        let status = "cal.stAvailable";
        if (date < today) status = "cal.stPast";
        else if (bookedNights.has(b.dataset.key)) status = "cal.stBooked";
        else if (!can) status = "cal.stUnavailable";
        if (b.classList.contains("is-start")) status = "cal.stArrival";
        if (b.classList.contains("is-end")) status = "cal.stDeparture";
        b.setAttribute("aria-label", `${ariaDate(b.dataset.key, date)}, ${t(status)}`);
        b.setAttribute("aria-pressed", String(b.classList.contains("is-start") || b.classList.contains("is-end")));
        if (!b.disabled && !firstFocusable && !b.closest(".month").hidden) firstFocusable = b;
      });

      // roving tabindex: exactly one day in the tab order
      dayButtons.forEach((b) => (b.tabIndex = -1));
      let target = focusKey && dayButtons.find((b) => b.dataset.key === focusKey && !b.closest(".month").hidden);
      if (!target) target = (ci && dayButtons.find((b) => b.dataset.key === keyOf(ci))) || firstFocusable;
      if (target) target.tabIndex = 0;

      updateSummary();
    }

    const confirmBtn = $("[data-cal-confirm]");
    const dayLabel = (d) => {
      const wd = new Intl.DateTimeFormat(I18N.locale, { weekday: "short" }).format(d);
      return `<strong>${fmt().short.format(d)}</strong><small>${cap(wd)} · ${d.getFullYear()}</small>`;
    };
    const guestsLabel = () => {
      const a = Number($("#f-adults").value || 2), c = Number($("#f-children").value || 0);
      return [t("form.adultsOption", { n: a }), c ? t("form.childrenOption", { n: c }) : ""].filter(Boolean).join(", ");
    };

    function updateSummary() {
      const ci = state.checkin, co = state.checkout;
      out("checkin").innerHTML = ci ? dayLabel(ci) : "—";
      out("checkout").innerHTML = co ? dayLabel(co) : "—";
      const box = out("price");
      confirmBtn.disabled = true;

      if (!ci) {
        out("stay").textContent = "—";
        hint.textContent = t("cal.hintArrival");
        box.innerHTML = `<p class="price-empty">${t("price.empty")}</p>`;
        return;
      }
      if (!co) {
        out("stay").textContent = "—";
        hint.textContent = t("cal.hintDeparture", { date: fmt().short.format(ci), nights: nights(minNightsFor(ci)) });
        box.innerHTML = `<p class="price-empty">${t("price.chooseDeparture")}</p>`;
        return;
      }

      const stay = nightsBetween(ci, co);
      let subtotal = 0;
      for (let d = ci; d < co; d = addDays(d, 1)) subtotal += seasonFor(d).nightly;
      const fee = CFG.cleaningFee || 0;
      const total = subtotal + fee;
      const min = minNightsFor(ci);
      out("stay").innerHTML = `<strong>${nights(stay)}</strong><small>${guestsLabel()}</small>`;
      box.innerHTML = `<div class="q-total"><strong>${money(total)}</strong><small>${t("price.total", { nights: nights(stay) })}</small></div>
        <div class="q-night"><strong>${money(Math.round(subtotal / stay))}</strong><small>${t("rates.perNight")}</small></div>${
        fee ? `<p class="q-note">${t("price.cleaning")}: ${money(fee)}</p>` : ""}${
        stay < min ? `<p class="price-warn">${t("price.min", { nights: nights(min) })}</p>` : ""}`;
      confirmBtn.disabled = stay < min;
      hint.textContent = stay < min
        ? t("cal.hintMin", { nights: nights(min) })
        : t("cal.hintSelected", { nights: nights(stay) });
    }

    // "Continue": on to the request form with the dates already set
    confirmBtn.addEventListener("click", () => {
      const panel = $(".booking-panel");
      panel.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      $("#f-name").focus({ preventScroll: true });
    });

    function choose(date) {
      const ci = state.checkin, co = state.checkout;
      if (!ci || co || date <= ci) {
        state.checkin = isFreeNight(date) ? date : null;
        state.checkout = null;
      } else if (rangeFree(ci, date)) {
        state.checkout = date;
      }
      state.hover = null;
      paint();
    }

    cal.addEventListener("click", (e) => {
      const b = e.target.closest(".day");
      if (!b || b.disabled) return;
      focusKey = b.dataset.key;
      choose(parseKey(b.dataset.key));
      const again = dayButtons.find((x) => x.dataset.key === focusKey);
      if (again) again.focus();
    });
    cal.addEventListener("mouseover", (e) => {
      if (!state.checkin || state.checkout) return;
      const b = e.target.closest(".day");
      const d = b ? parseKey(b.dataset.key) : null;
      if ((d && state.hover && d.getTime() === state.hover.getTime()) || (!d && !state.hover)) return;
      state.hover = d; paint();
    });
    cal.addEventListener("mouseleave", () => { if (state.hover) { state.hover = null; paint(); } });

    // keyboard navigation between days
    cal.addEventListener("keydown", (e) => {
      const b = e.target.closest(".day");
      if (!b) return;
      const step = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 }[e.key];
      if (!step) return;
      e.preventDefault();
      const visible = dayButtons.filter((x) => !x.closest(".month").hidden);
      let i = visible.indexOf(b) + step;
      if (i < 0 || i >= visible.length) return;
      b.tabIndex = -1;
      visible[i].tabIndex = 0;
      focusKey = visible[i].dataset.key;
      visible[i].focus();
    });

    prevBtn.addEventListener("click", () => { state.offset = Math.max(0, state.offset - 1); render(); });
    nextBtn.addEventListener("click", () => { state.offset = Math.min(maxOffset(), state.offset + 1); render(); });
    phone.addEventListener("change", () => { state.offset = Math.min(state.offset, maxOffset()); render(); });

    /* Rates list */
    const seasonList = $(".season-list");
    const seasons = (CFG.seasons || []);
    const mdLabel = (md) => { const [m, d] = md.split("-").map(Number); return fmt().short.format(new Date(2000, m - 1, d)); };
    function renderRates() {
      seasonList.innerHTML = "";
      seasons.forEach((s, i) => {
        const isFallback = i === seasons.length - 1 && s.from === "01-01" && s.to === "12-31";
        const el = document.createElement("div");
        el.className = "season";
        el.innerHTML = `<div class="season-name">${seasonName(s)}</div>
          <div class="season-dates">${isFallback ? t("rates.allOther") : `${mdLabel(s.from)} – ${mdLabel(s.to)}`}</div>
          <div class="season-price"><strong>${money(s.nightly)}</strong> ${t("rates.perNight")}${s.minNights ? ` · ${t("rates.min", { nights: nights(s.minNights) })}` : ""}</div>`;
        seasonList.appendChild(el);
      });
      $(".season-note").textContent = [
        t("rates.note", { guests: CFG.maxGuests || 6, nights: nights(CFG.minNights || 1) }),
        CFG.cleaningFee ? t("rates.cleaning", { fee: money(CFG.cleaningFee) }) : "",
        t("rates.included")
      ].filter(Boolean).join(" ");
      const floatPrice = $("[data-float-price]");
      if (floatPrice && seasons.length) floatPrice.textContent = t("float.from", { price: money(Math.min(...seasons.map((x) => x.nightly))) });
    }
    renderRates();

    /* Guests selects */
    const adults = $("#f-adults");
    const children = $("#f-children");
    const maxGuests = CFG.maxGuests || 6;
    function fillGuests() {
      const keepA = adults.value || "2", keepC = children.value || "0";
      adults.innerHTML = ""; children.innerHTML = "";
      for (let g = 1; g <= maxGuests; g++) adults.add(new Option(t("form.adultsOption", { n: g }), g));
      for (let g = 0; g < maxGuests; g++) children.add(new Option(g === 0 ? t("form.noChildren") : t("form.childrenOption", { n: g }), g));
      adults.value = keepA; children.value = keepC;
    }
    fillGuests();
    const agesField = $("[data-children-ages]");
    // keep adults + children within the villa's capacity
    const limitGuests = () => {
      const a = Number(adults.value), c = Number(children.value);
      Array.from(children.options).forEach((o) => (o.disabled = Number(o.value) + a > maxGuests));
      Array.from(adults.options).forEach((o) => (o.disabled = Number(o.value) + c > maxGuests));
      agesField.hidden = c === 0;
    };
    adults.addEventListener("change", () => { limitGuests(); updateSummary(); });
    children.addEventListener("change", () => { limitGuests(); updateSummary(); });
    limitGuests();

    /* Form */
    const form = $(".booking-form");
    const formError = $(".form-error");
    const success = $(".form-success");

    function setFieldError(input, msgShown) {
      const field = input.closest(".field");
      field.classList.toggle("has-error", msgShown);
      $(".field-error", field).hidden = !msgShown;
      input.setAttribute("aria-invalid", String(msgShown));
    }
    const nameInput = $("#f-name"), emailInput = $("#f-email");
    nameInput.addEventListener("blur", () => setFieldError(nameInput, !nameInput.value.trim()));
    emailInput.addEventListener("blur", () => setFieldError(emailInput, !/^\S+@\S+\.\S+$/.test(emailInput.value.trim())));

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      formError.hidden = true;
      const badName = !nameInput.value.trim();
      const badEmail = !/^\S+@\S+\.\S+$/.test(emailInput.value.trim());
      setFieldError(nameInput, badName);
      setFieldError(emailInput, badEmail);

      const ci = state.checkin, co = state.checkout;
      let problem = "";
      if (!ci || !co) problem = t("form.errDates");
      else if (nightsBetween(ci, co) < minNightsFor(ci)) problem = t("price.min", { nights: nights(minNightsFor(ci)) });
      if (problem) { formError.textContent = problem; formError.hidden = false; }
      if (badName) { nameInput.focus(); return; }
      if (badEmail) { emailInput.focus(); return; }
      if (problem) { cal.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" }); return; }

      const data = Object.fromEntries(new FormData(form).entries());
      const total = out("price").querySelector(".q-total strong");
      const payload = {
        ...data,
        arrival: keyOf(ci),
        departure: keyOf(co),
        nights: nightsBetween(ci, co),
        quotedTotal: total ? total.textContent : "",
        language: I18N.lang,
        _subject: `Booking request ${keyOf(ci)} → ${keyOf(co)} · ${data.name}`
      };

      const btn = $('button[type="submit"]', form);
      if (CFG.formEndpoint) {
        btn.disabled = true; btn.querySelector("span").textContent = t("form.sending");
        try {
          const res = await fetch(CFG.formEndpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify(payload)
          });
          if (!res.ok) throw new Error("Request failed");
          form.hidden = true; success.hidden = false; success.focus();
        } catch (err) {
          formError.textContent = t("form.errSend");
          formError.hidden = false;
        } finally {
          btn.disabled = false; btn.querySelector("span").textContent = t("form.submit");
        }
      } else {
        const body = [
          `Name: ${payload.name}`, `Email: ${payload.email}`, `Phone: ${payload.phone || "-"}`,
          `Adults: ${payload.adults}`, `Children: ${payload.children}${payload.children !== "0" ? ` (ages: ${payload.childrenAges || "-"})` : ""}`,
          `Cot needed: ${payload.crib ? "yes" : "no"}`, `Pets: ${payload.pets ? "yes" : "no"}`,
          `Arrival: ${emailDate.format(ci)}`, `Departure: ${emailDate.format(co)}`,
          `Guest language: ${I18N.LANGS[I18N.lang].name}`,
          `Nights: ${payload.nights}`, `Quoted total: ${payload.quotedTotal}`, "", payload.message || ""
        ].join("\n");
        window.location.href = `mailto:${CFG.email}?subject=${encodeURIComponent(payload._subject)}&body=${encodeURIComponent(body)}`;
        form.hidden = true; success.hidden = false; success.focus();
      }
    });

    I18N.onChange(() => {
      formError.hidden = true;
      fillGuests();
      limitGuests();
      renderRates();
      render();
    });

    render();

  }

  /* ------------------------------------------------------------------ */
  /* Scroll reveal                                                       */
  /* ------------------------------------------------------------------ */
  function initReveal() {
    if (reduceMotion || !("IntersectionObserver" in window)) return;
    const els = $$(".villa-head, .bento .b-card, .island-grid li, .rules-times, .rules-grid, .booking-layout, .seasons, .location-grid, .footer-cta");
    els.forEach((el) => el.classList.add("reveal"));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    els.forEach((el) => io.observe(el));
  }

  /* ------------------------------------------------------------------ */
  /* Map loads only when asked (keeps scrolling smooth)                  */
  /* ------------------------------------------------------------------ */
  function initMap() {
    const card = $(".map-card");
    if (!card) return;
    const coords = (CFG.coords || "").trim();
    const zoom = CFG.mapZoom || 18;

    /* A "lat,lng" query pins the map on the house itself rather than the area.
       Without coordinates we fall back to the area search kept in the markup. */
    const embedSrc = () => coords
      ? "https://www.google.com/maps?q=" + encodeURIComponent(coords) +
        "&z=" + zoom + "&hl=" + I18N.lang + "&output=embed"
      : card.dataset.mapSrc;

    if (coords) {
      $$("[data-map-open]").forEach((a) => {
        a.href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(coords);
      });
    }

    $("[data-map-load]", card).addEventListener("click", () => {
      const frame = document.createElement("iframe");
      frame.title = t("loc.mapTitle");
      frame.loading = "lazy";
      frame.referrerPolicy = "no-referrer-when-downgrade";
      frame.src = embedSrc();
      card.replaceChildren(frame);
    });
  }


  /* ------------------------------------------------------------------ */
  /* Day trips: a card opens the full story (content in js/trips.js)     */
  /* ------------------------------------------------------------------ */
  function initTrips() {
    const TRIPS = window.VILLA_TRIPS;
    const buttons = $$("[data-trip]");
    if (!TRIPS || !buttons.length || typeof HTMLDialogElement !== "function") {
      buttons.forEach((b) => b.remove());
      return;
    }

    const dlg = document.createElement("dialog");
    dlg.className = "trip";
    dlg.innerHTML = `
      <figure class="trip-hero">
        <img alt="">
        <figcaption><h3 class="trip-title"></h3><p class="trip-tagline"></p></figcaption>
        <button class="trip-close" type="button"><svg class="icon" aria-hidden="true"><use href="#i-close"/></svg></button>
      </figure>
      <div class="trip-body"></div>`;
    document.body.appendChild(dlg);

    const imgEl = $(".trip-hero img", dlg);
    const closeBtn = $(".trip-close", dlg);
    const body = $(".trip-body", dlg);
    let current = null;
    let returnFocus = null;

    function render() {
      const trip = TRIPS[current];
      const c = trip[I18N.lang] || trip.en;
      const list = (items) => `<ul>${items.map((x) => `<li>${x}</li>`).join("")}</ul>`;
      imgEl.src = img(trip.image);
      imgEl.alt = "";
      $(".trip-title", dlg).textContent = trip.title;
      $(".trip-tagline", dlg).textContent = c.tagline;
      closeBtn.setAttribute("aria-label", t("trip.close"));
      body.innerHTML = `
        <dl class="trip-facts">${c.facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}</dl>
        <div class="trip-story">${c.story.map((p) => `<p>${p}</p>`).join("")}</div>
        <section class="trip-block trip-know"><h4>${t("trip.didYouKnow")}</h4>${list(c.didYouKnow)}</section>
        <section class="trip-block trip-tips"><h4>${t("trip.tips")}</h4>${list(c.tips)}</section>
        <a class="btn btn-primary trip-cta" href="#booking"><span>${t("trip.book")}</span><svg class="icon btn-arrow" aria-hidden="true"><use href="#i-arrow"/></svg></a>`;
      dlg.setAttribute("aria-label", trip.title);
    }

    function open(key) {
      if (!TRIPS[key]) return;
      current = key;
      returnFocus = document.activeElement;
      render();
      document.documentElement.style.overflow = "hidden";
      dlg.showModal();
      dlg.scrollTop = 0;
      closeBtn.focus();
    }
    const close = () => dlg.open && dlg.close();

    dlg.addEventListener("close", () => {
      document.documentElement.style.overflow = "";
      if (returnFocus && returnFocus.focus) returnFocus.focus({ preventScroll: true });
    });
    closeBtn.addEventListener("click", close);
    dlg.addEventListener("click", (e) => {
      if (e.target === dlg) close();                     // click on the dimmed backdrop
      if (e.target.closest(".trip-cta")) close();        // let the anchor scroll to the booking
    });
    I18N.onChange(() => { if (dlg.open) render(); });

    // the whole card opens the story, the button keeps it reachable by keyboard
    buttons.forEach((b) => {
      b.addEventListener("click", (e) => { e.stopPropagation(); open(b.dataset.trip); });
      const card = b.closest("[data-trip-card]");
      if (card) card.addEventListener("click", () => open(b.dataset.trip));
    });
  }

  applyContact();
  initMap();
  initTrips();
  /* ------------------------------------------------------------------ */
  /* Hero points: longest line first, shortest last (a calm staircase).  */
  /* Re-sorted on language change, since every language runs differently. */
  /* ------------------------------------------------------------------ */
  function initHeroPoints() {
    const list = $(".hero-points");
    if (!list) return;
    const order = () => $$("li", list)
      .sort((a, b) => b.textContent.trim().length - a.textContent.trim().length)
      .forEach((li) => list.appendChild(li));
    order();
    I18N.onChange(order);
  }

  initHeroPoints();
  initNav();
  initSlider();
  initBooking();
  initReveal();
})();
