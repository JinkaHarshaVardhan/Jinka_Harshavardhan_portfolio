/**
 * Interactive fluid-style metaball renderer with palette-driven color mixing.
 * GPU-friendly 2D canvas implementation suitable for static GitHub Pages hosting.
 */
(function () {
  const canvas = document.getElementById("fluid-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const palette = ["#FFFFFF", "#E5F2FA", "#BFDDF0", "#8CC0EB"];
  const blobs = [];
  const particles = [];
  let width, height, dpr;
  let mouse = { x: -9999, y: -9999, down: false };
  let rafId;
  let t = 0;

  function hexToRgb(hex) {
    const n = parseInt(hex.slice(1), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }

  function initBlobs() {
    blobs.length = 0;
    for (let i = 0; i < 7; i++) {
      blobs.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 80 + Math.random() * 120,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        color: hexToRgb(palette[i % palette.length]),
        phase: Math.random() * Math.PI * 2,
      });
    }
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (blobs.length === 0) initBlobs();
  }

  function spawnParticle(x, y) {
    for (let i = 0; i < 3; i++) {
      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        life: 1,
        color: hexToRgb(palette[Math.floor(Math.random() * palette.length)]),
        size: 4 + Math.random() * 8,
      });
    }
    if (particles.length > 400) particles.splice(0, particles.length - 400);
  }

  function drawMetaballField() {
    const imageData = ctx.createImageData(width, height);
    const data = imageData.data;
    const step = 4;

    for (let y = 0; y < height; y += step) {
      for (let x = 0; x < width; x += step) {
        let influence = 0;
        let cr = 0,
          cg = 0,
          cb = 0;

        for (const b of blobs) {
          const dx = x - b.x;
          const dy = y - b.y;
          const distSq = dx * dx + dy * dy;
          const r = b.r + Math.sin(t * 0.002 + b.phase) * 20;
          const f = (r * r) / (distSq + 1);
          if (f > 0.5) {
            const w = Math.min(f * 0.15, 1);
            cr += b.color[0] * w;
            cg += b.color[1] * w;
            cb += b.color[2] * w;
            influence += w;
          }
        }

        if (mouse.x > 0) {
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const f = 18000 / (dx * dx + dy * dy + 400);
          const c = hexToRgb(palette[3]);
          cr += c[0] * f * 0.08;
          cg += c[1] * f * 0.08;
          cb += c[2] * f * 0.08;
          influence += f * 0.05;
        }

        const alpha = Math.min(200, influence * 90);
        const r = Math.min(255, cr / (influence + 0.001));
        const g = Math.min(255, cg / (influence + 0.001));
        const b = Math.min(255, cb / (influence + 0.001));

        for (let py = 0; py < step && y + py < height; py++) {
          for (let px = 0; px < step && x + px < width; px++) {
            const idx = ((y + py) * width + (x + px)) * 4;
            data[idx] = r;
            data[idx + 1] = g;
            data[idx + 2] = b;
            data[idx + 3] = alpha;
          }
        }
      }
    }
    ctx.putImageData(imageData, 0, 0);
  }

  function tick() {
    t++;
    ctx.clearRect(0, 0, width, height);

    for (const b of blobs) {
      b.x += b.vx;
      b.y += b.vy;
      if (b.x < -b.r) b.x = width + b.r;
      if (b.x > width + b.r) b.x = -b.r;
      if (b.y < -b.r) b.y = height + b.r;
      if (b.y > height + b.r) b.y = -b.r;
      b.vx += (Math.random() - 0.5) * 0.02;
      b.vy += (Math.random() - 0.5) * 0.02;
      b.vx *= 0.99;
      b.vy *= 0.99;
    }

    if (mouse.down || (mouse.x > 0 && Math.hypot(mouse.x - width / 2, mouse.y - height / 2) > 0)) {
      if (t % 2 === 0) spawnParticle(mouse.x, mouse.y);
    }

    drawMetaballField();

    ctx.globalCompositeOperation = "lighter";
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life -= 0.015;
      if (p.life <= 0) {
        particles.splice(i, 1);
        continue;
      }
      ctx.beginPath();
      ctx.fillStyle = `rgba(${p.color[0]},${p.color[1]},${p.color[2]},${p.life * 0.5})`;
      ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalCompositeOperation = "source-over";

    rafId = requestAnimationFrame(tick);
  }

  window.addEventListener(
    "mousemove",
    (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    },
    { passive: true }
  );
  window.addEventListener("mousedown", () => (mouse.down = true));
  window.addEventListener("mouseup", () => (mouse.down = false));
  window.addEventListener("mouseleave", () => {
    mouse.x = -9999;
    mouse.down = false;
  });
  window.addEventListener("resize", resize, { passive: true });
  window.addEventListener("visibilitychange", () => {
    if (document.hidden) cancelAnimationFrame(rafId);
    else rafId = requestAnimationFrame(tick);
  });

  resize();
  rafId = requestAnimationFrame(tick);
})();
