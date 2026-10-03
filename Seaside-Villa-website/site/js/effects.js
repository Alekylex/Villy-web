/* Seaside Villa La Tejita — motion & interaction layer (decorative only) */
(function () {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const html = document.documentElement;

  /* ------------------------------------------------------------------ */
  /* Page-load entrance for the hero                                     */
  /* ------------------------------------------------------------------ */
  function initIntro() {
    if (reduceMotion) { html.classList.add("is-ready"); return; }
    const plan = [
      [".hero-photo", 0, "intro-clip"],
      [".slider", 150, "intro-zoom"],
      [".hero-card .eyebrow", 250],
      [".hero-card h1", 350],
      [".hero-actions", 850]
    ];
    const tagged = [];
    plan.forEach(([sel, delay, extra]) => {
      const el = $(sel);
      if (!el) return;
      el.classList.add("intro");
      if (extra) el.classList.add(extra);
      el.style.setProperty("--d", delay + "ms");
      tagged.push(el);
    });
    $$(".hero-points li").forEach((li, i) => {
      li.classList.add("intro"); li.style.setProperty("--d", 480 + i * 80 + "ms"); tagged.push(li);
    });
    requestAnimationFrame(() => requestAnimationFrame(() => html.classList.add("is-ready")));
    // tidy up once everything has landed, so hover effects own the transforms again
    setTimeout(() => tagged.forEach((el) => el.classList.remove("intro", "intro-clip", "intro-zoom")), 2600);
  }

  /* ------------------------------------------------------------------ */
  /* Magnetic buttons + click ripple                                     */
  /* ------------------------------------------------------------------ */
  function initButtons() {
    $$(".btn").forEach((btn) => {
      btn.addEventListener("pointerdown", (e) => {
        if (reduceMotion) return;
        const r = btn.getBoundingClientRect();
        const dot = document.createElement("span");
        dot.className = "ripple";
        dot.style.left = e.clientX - r.left + "px";
        dot.style.top = e.clientY - r.top + "px";
        btn.appendChild(dot);
        dot.addEventListener("animationend", () => dot.remove());
      });
    });

    if (!finePointer || reduceMotion) return;
    const magnets = [
      [".btn", 0.22, 8],
      [".slider-btn", 0.3, 8],
      [".contact-pill", 0.18, 6],
      [".float-cta", 0.15, 6]
    ];
    magnets.forEach(([sel, strength, max]) => {
      $$(sel).forEach((el) => {
        let frame = 0;
        el.addEventListener("pointermove", (e) => {
          cancelAnimationFrame(frame);
          frame = requestAnimationFrame(() => {
            const r = el.getBoundingClientRect();
            const dx = Math.max(-max, Math.min(max, (e.clientX - (r.left + r.width / 2)) * strength));
            const dy = Math.max(-max, Math.min(max, (e.clientY - (r.top + r.height / 2)) * strength));
            el.style.setProperty("--mx", dx.toFixed(1) + "px");
            el.style.setProperty("--my", dy.toFixed(1) + "px");
          });
        });
        el.addEventListener("pointerleave", () => {
          cancelAnimationFrame(frame);
          el.style.setProperty("--mx", "0px");
          el.style.setProperty("--my", "0px");
        });
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /* Menu: gliding highlight behind the links                            */
  /* ------------------------------------------------------------------ */
  function initNavIndicator() {
    const list = $("#nav-list");
    if (!list) return;
    const links = $$("a", list);
    const pill = document.createElement("span");
    pill.className = "nav-indicator";
    pill.setAttribute("aria-hidden", "true");
    list.prepend(pill);
    let hovered = null;

    // only touch classes that actually change: every class write re-triggers the observer below
    const setClass = (el, name, on) => { if (el.classList.contains(name) !== on) el.classList.toggle(name, on); };
    const place = () => {
      const vertical = getComputedStyle(list).flexDirection === "column";
      setClass(list, "has-indicator", !vertical);
      if (vertical) { pill.style.opacity = "0"; links.forEach((a) => setClass(a, "is-lit", false)); return; }
      const target = hovered || links.find((a) => a.classList.contains("is-active")) || links[0];
      pill.style.opacity = "1";
      pill.style.width = target.offsetWidth + "px";
      pill.style.height = target.offsetHeight + "px";
      pill.style.transform = `translate(${target.offsetLeft}px, ${target.offsetTop}px)`;
      links.forEach((a) => setClass(a, "is-lit", a === target));
    };

    if (finePointer) {
      links.forEach((a) => a.addEventListener("pointerenter", () => { hovered = a; place(); }));
      list.addEventListener("pointerleave", () => { hovered = null; place(); });
    }
    // follow the active section as main.js updates it
    let queued = false;
    new MutationObserver(() => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => { queued = false; place(); });
    }).observe(list, { subtree: true, attributes: true, attributeFilter: ["class"] });
    if ("ResizeObserver" in window) new ResizeObserver(place).observe(list);
    window.addEventListener("resize", place);
    document.fonts && document.fonts.ready.then(place);
    place();
  }

  /* ------------------------------------------------------------------ */
  /* Cards: 3D tilt and a spotlight that follows the mouse               */
  /* ------------------------------------------------------------------ */
  function initTilt() {
    if (!finePointer || reduceMotion) return;
    const cards = $$(".b-card, .time-card, .rules-grid li, .cancel, .season");
    cards.forEach((card) => {
      const tilt = card.matches(".b-card, .time-card");
      card.classList.add("fx-spot");
      if (tilt) card.classList.add("fx-tilt");
      let frame = 0;
      card.addEventListener("pointerenter", () => card.classList.add("is-hover"));
      card.addEventListener("pointermove", (e) => {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          const r = card.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width;
          const py = (e.clientY - r.top) / r.height;
          card.style.setProperty("--gx", (px * 100).toFixed(1) + "%");
          card.style.setProperty("--gy", (py * 100).toFixed(1) + "%");
          if (tilt) {
            const strength = Math.min(1, 520 / Math.max(r.width, r.height)); // big cards tilt less
            card.style.setProperty("--rx", ((0.5 - py) * 7 * strength).toFixed(2) + "deg");
            card.style.setProperty("--ry", ((px - 0.5) * 9 * strength).toFixed(2) + "deg");
          }
        });
      });
      card.addEventListener("pointerleave", () => {
        cancelAnimationFrame(frame);
        card.classList.remove("is-hover");
        card.style.setProperty("--rx", "0deg");
        card.style.setProperty("--ry", "0deg");
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /* Numbers count up when they scroll into view                         */
  /* ------------------------------------------------------------------ */
  function initCounters() {
    const els = $$("[data-count]");
    if (reduceMotion || !("IntersectionObserver" in window)) return;
    const ease = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));
    const run = (el) => {
      const target = Number(el.dataset.count);
      const duration = target > 20 ? 1600 : 1100;
      const t0 = performance.now();
      const tick = (now) => {
        const t = Math.min(1, (now - t0) / duration);
        el.textContent = Math.round(target * ease(t));
        if (t < 1) requestAnimationFrame(tick);
      };
      el.textContent = "0";
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { run(en.target); io.unobserve(en.target); } });
    }, { threshold: 0.6 });
    els.forEach((el) => io.observe(el));
  }

  /* ------------------------------------------------------------------ */
  /* Staggered reveals                                                   */
  /* ------------------------------------------------------------------ */
  function initStagger() {
    $$(".bento").forEach((grid) => {
      Array.from(grid.children).forEach((card, i) => card.style.setProperty("--d", Math.min(i, 6) * 90 + "ms"));
    });
    // once a card has revealed, drop the reveal class so its hover motion is snappy again
    document.addEventListener("transitionend", (e) => {
      const el = e.target;
      if (e.propertyName === "transform" && el.classList && el.classList.contains("reveal") && el.classList.contains("is-in")) {
        el.classList.remove("reveal");
        el.style.removeProperty("--d");
      }
    });
  }

  /* ------------------------------------------------------------------ */
  /* Slider progress bar                                                 */
  /* ------------------------------------------------------------------ */
  function initSliderProgress() {
    const slider = $(".slider");
    const bar = $(".slider-progress span");
    if (!slider || !bar) return;
    if (reduceMotion) { bar.parentElement.hidden = true; return; }
    const restart = () => {
      bar.classList.remove("run");
      void bar.offsetWidth; // restart the CSS animation
      bar.classList.add("run");
    };
    slider.addEventListener("slidechange", restart);
    restart();
  }

  /* ------------------------------------------------------------------ */
  /* Scroll-driven: progress line, floating booking button, footer depth */
  /* ------------------------------------------------------------------ */
  function initScroll() {
    const header = $(".site-header");
    const bar = $(".scroll-progress");
    const hero = $(".hero");
    const cta = $(".float-cta");
    const booking = $("#booking");
    const contact = $("#contact");
    const footerImg = $(".footer-cta > img");
    let ticking = false;

    const inView = (el) => {
      if (!el) return false;
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight * 0.85 && r.bottom > window.innerHeight * 0.15;
    };

    const update = () => {
      ticking = false;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar) bar.style.transform = `scaleX(${max > 0 ? (window.scrollY / max).toFixed(4) : 0})`;

      if (cta) {
        const pastHero = hero ? hero.getBoundingClientRect().bottom < 0 : window.scrollY > 600;
        const show = pastHero && !inView(booking) && !inView(contact);
        cta.classList.toggle("is-visible", show);
        cta.tabIndex = show ? 0 : -1;
      }

      if (footerImg && !reduceMotion) {
        const r = footerImg.parentElement.getBoundingClientRect();
        if (r.bottom > 0 && r.top < window.innerHeight) {
          const offset = (r.top + r.height / 2 - window.innerHeight / 2) * -0.12;
          footerImg.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0) scale(1.15)`;
        }
      }
    };
    // while the page is moving, skip hover effects on cards passing under a resting mouse
    let scrollTimer = 0;
    window.addEventListener("scroll", () => {
      if (!html.classList.contains("is-scrolling")) html.classList.add("is-scrolling");
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => html.classList.remove("is-scrolling"), 160);
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    window.addEventListener("resize", update);
    update();
  }

  /* ------------------------------------------------------------------ */
  /* Pause looping animations that are scrolled out of view              */
  /* ------------------------------------------------------------------ */
  function initOffscreenPause() {
    if (reduceMotion || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => en.target.classList.toggle("fx-paused", !en.isIntersecting));
    }, { rootMargin: "100px 0px" });
    $$(".hero").forEach((el) => io.observe(el));
  }

  /* ------------------------------------------------------------------ */
  /* Cursor dot (after kamezi.villas): follows the mouse a touch behind,  */
  /* inverts what is under it, and swells over anything clickable.        */
  /* Mouse only: touch screens and small windows keep the normal pointer. */
  /* ------------------------------------------------------------------ */
  function initCursor() {
    if (!finePointer) return;
    const dot = document.createElement("div");
    dot.className = "cursor-dot is-hidden";
    dot.setAttribute("aria-hidden", "true");
    document.body.appendChild(dot);

    let x = 0, y = 0, frame = 0;
    document.addEventListener("mousemove", (e) => {
      x = e.clientX; y = e.clientY;
      dot.classList.remove("is-hidden");
      if (!frame) frame = requestAnimationFrame(() => {
        frame = 0;
        dot.style.setProperty("--x", x + "px");
        dot.style.setProperty("--y", y + "px");
      });
    }, { passive: true });
    document.documentElement.addEventListener("mouseleave", () => dot.classList.add("is-hidden"));

    // one listener for the whole page, so calendar days drawn later count too
    const clickable = "a, button:not([disabled]), input, select, textarea, label, summary, .slide";
    document.addEventListener("mouseover", (e) => {
      dot.classList.toggle("is-hover", Boolean(e.target.closest(clickable)));
    });
  }

  /* ------------------------------------------------------------------ */
  /* Finale photo (after supreme-luxury.com): while its frame scrolls in, */
  /* the photo is pinned to the screen and uncovered from the bottom up,  */
  /* so the page seems to slide off it. Phones get a plain photo.         */
  /* ------------------------------------------------------------------ */
  function initFinale() {
    const wrap = $(".finale-wrap");
    const photo = $(".finale-photo");
    if (!wrap || !photo) return;
    const phone = window.matchMedia("(max-width: 769px)");
    let ticking = false;

    const pin = (clip) => {
      photo.style.position = "fixed";
      photo.style.clipPath = clip;
    };
    const update = () => {
      ticking = false;
      if (reduceMotion || phone.matches) { photo.style.position = ""; photo.style.clipPath = ""; return; }
      const top = wrap.getBoundingClientRect().top;
      const vh = window.innerHeight;
      if (top >= vh) pin("inset(100% 0 0 0)");                 // not on screen yet
      else if (top > 0) pin(`inset(${(top / vh) * 100}% 0 0 0)`); // coming in: show only the part under the page
      else { photo.style.position = "absolute"; photo.style.clipPath = "none"; }   // fully in: scrolls normally
    };
    const request = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
    phone.addEventListener("change", request);
    update();
  }

  initIntro();
  initCursor();
  initFinale();
  initButtons();
  initNavIndicator();
  initTilt();
  initCounters();
  initStagger();
  initSliderProgress();
  initScroll();
  initOffscreenPause();
})();
