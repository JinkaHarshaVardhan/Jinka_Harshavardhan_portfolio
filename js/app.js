/**
 * Shared portfolio interactions: nav, reveals, loader, cursor, typing.
 */
(function () {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Page loader */
  const loader = document.querySelector(".page-loader");
  if (loader) {
    document.body.classList.add("is-loading");
    window.addEventListener("load", () => {
      setTimeout(() => {
        loader.classList.add("is-hidden");
        document.body.classList.remove("is-loading");
      }, prefersReduced ? 0 : 600);
    });
  }

  /* Sticky nav */
  const nav = document.querySelector(".site-nav");
  if (nav) {
    const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* Active nav link */
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a, .mobile-menu a").forEach((a) => {
    const href = a.getAttribute("href");
    if (!href) return;
    const file = href.split("/").pop();
    const isHome = (path === "" || path === "index.html") && (file === "index.html" || file === "" || href === "./");
    const match = file === path || (isHome && (file === "index.html" || href.endsWith("/")));
    if (match) a.classList.add("is-active");
  });

  /* Mobile menu */
  const toggle = document.querySelector(".nav-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  if (toggle && mobileMenu) {
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("is-open");
      mobileMenu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", mobileMenu.classList.contains("is-open"));
    });
    mobileMenu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        toggle.classList.remove("is-open");
        mobileMenu.classList.remove("is-open");
      });
    });
  }

  /* Cursor glow */
  if (!prefersReduced) {
    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    glow.setAttribute("aria-hidden", "true");
    document.body.appendChild(glow);
    let gx = 0,
      gy = 0,
      tx = 0,
      ty = 0;
    window.addEventListener(
      "mousemove",
      (e) => {
        tx = e.clientX;
        ty = e.clientY;
      },
      { passive: true }
    );
    function animateGlow() {
      gx += (tx - gx) * 0.12;
      gy += (ty - gy) * 0.12;
      glow.style.left = gx + "px";
      glow.style.top = gy + "px";
      requestAnimationFrame(animateGlow);
    }
    animateGlow();
  }

  /* Scroll reveal */
  const revealEls = document.querySelectorAll(".reveal, .reveal-stagger");
  if (revealEls.length && !prefersReduced) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* Typing tagline */
  const taglineEl = document.querySelector("[data-typing]");
  if (taglineEl && !prefersReduced) {
    const phrases = JSON.parse(taglineEl.dataset.typing || "[]");
    let pi = 0,
      ci = 0,
      deleting = false;
    function type() {
      const current = phrases[pi] || "";
      if (!deleting) {
        taglineEl.textContent = current.slice(0, ++ci);
        if (ci === current.length) {
          deleting = true;
          setTimeout(type, 2200);
          return;
        }
      } else {
        taglineEl.textContent = current.slice(0, --ci);
        if (ci === 0) {
          deleting = false;
          pi = (pi + 1) % phrases.length;
        }
      }
      setTimeout(type, deleting ? 35 : 55);
    }
    if (phrases.length) {
      taglineEl.classList.add("typing-cursor");
      type();
    }
  }

  /* Magnetic effect disabled — CSS hover lift handles button float */

  /* Smooth anchor scroll */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  /* Project filter (projects hub) */
  const filterBtns = document.querySelectorAll("[data-filter]");
  const projectCards = document.querySelectorAll("[data-category]");
  if (filterBtns.length && projectCards.length) {
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const cat = btn.dataset.filter;
        filterBtns.forEach((b) => b.classList.toggle("is-active", b === btn));
        projectCards.forEach((card) => {
          const show = cat === "all" || card.dataset.category === cat;
          card.style.display = show ? "" : "none";
          if (show) card.classList.remove("is-visible");
        });
        requestAnimationFrame(() => {
          projectCards.forEach((c) => {
            if (c.style.display !== "none") c.classList.add("is-visible");
          });
        });
      });
    });
  }
})();
