(() => {
  document.body.classList.add("js-ready");

  const canvas = document.querySelector("[data-hero-canvas]");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function enhanceStacks() {
    document.querySelectorAll(".stack").forEach((stack) => {
      if (stack.dataset.enhanced) return;
      const items = stack.textContent
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);

      stack.textContent = "";
      stack.dataset.enhanced = "true";
      items.forEach((item) => {
        const chip = document.createElement("span");
        chip.textContent = item;
        stack.appendChild(chip);
      });
    });
  }

  function addInteractiveGlow() {
    document.querySelectorAll(".project-card, .stack-group").forEach((card) => {
      card.addEventListener("pointermove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty("--mx", `${x}%`);
        card.style.setProperty("--my", `${y}%`);
      });
    });
  }

  function addReveal() {
    const targets = document.querySelectorAll(
      ".project-card, .metric, .stack-group, .education article"
    );
    targets.forEach((target) => target.classList.add("reveal"));

    if (!("IntersectionObserver" in window) || prefersReducedMotion) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((target) => observer.observe(target));
  }

  enhanceStacks();
  addInteractiveGlow();
  addReveal();

  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width = 0;
  let height = 0;
  let dpr = 1;
  let frame = 0;
  let particles = [];
  let flowLines = [];

  function makeParticle(index) {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      size: 0.8 + Math.random() * 2.4,
      hue: index % 5,
      phase: Math.random() * Math.PI * 2
    };
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.max(70, Math.floor(width / 16));
    particles = Array.from({ length: count }, (_, index) => makeParticle(index));
    flowLines = Array.from({ length: 8 }, (_, index) => ({
      offset: index * 0.55,
      amp: 22 + index * 8,
      speed: 0.3 + index * 0.03,
      y: height * (0.42 + index * 0.045)
    }));
  }

  function particleColor(type, alpha) {
    const colors = [
      `rgba(64, 214, 194, ${alpha})`,
      `rgba(110, 168, 255, ${alpha})`,
      `rgba(255, 184, 107, ${alpha})`,
      `rgba(255, 111, 145, ${alpha})`,
      `rgba(247, 248, 251, ${alpha})`
    ];
    return colors[type] || colors[0];
  }

  function drawFactorySilhouette() {
    const baseY = height * 0.78;
    ctx.save();
    ctx.globalAlpha = 0.16;
    ctx.strokeStyle = "rgba(219, 227, 242, 0.55)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(width * 0.54, baseY);
    ctx.lineTo(width * 0.6, baseY);
    ctx.lineTo(width * 0.6, baseY - 55);
    ctx.lineTo(width * 0.64, baseY - 55);
    ctx.lineTo(width * 0.64, baseY);
    ctx.lineTo(width * 0.7, baseY);
    ctx.lineTo(width * 0.7, baseY - 90);
    ctx.lineTo(width * 0.74, baseY - 90);
    ctx.lineTo(width * 0.74, baseY);
    ctx.lineTo(width * 0.9, baseY);
    ctx.stroke();

    for (let i = 0; i < 7; i += 1) {
      const x = width * (0.58 + i * 0.045);
      ctx.beginPath();
      ctx.moveTo(x, baseY);
      ctx.lineTo(x, baseY - 36 - (i % 3) * 18);
      ctx.stroke();
    }
    ctx.restore();
  }

  function drawFlowField() {
    flowLines.forEach((line, index) => {
      const gradient = ctx.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0, "rgba(64, 214, 194, 0)");
      gradient.addColorStop(0.35, index % 2 ? "rgba(110, 168, 255, 0.38)" : "rgba(64, 214, 194, 0.42)");
      gradient.addColorStop(0.72, index % 3 ? "rgba(255, 111, 145, 0.28)" : "rgba(255, 184, 107, 0.3)");
      gradient.addColorStop(1, "rgba(64, 214, 194, 0)");

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      for (let x = -20; x <= width + 20; x += 16) {
        const t = x / width;
        const y =
          line.y +
          Math.sin(t * Math.PI * 4 + frame * line.speed + line.offset) * line.amp +
          Math.sin(t * Math.PI * 9 + frame * 0.45) * 6;
        if (x === -20) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    });
  }

  function drawOrbit() {
    const cx = width * 0.72;
    const cy = height * 0.42;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(frame * 0.08);
    for (let i = 0; i < 3; i += 1) {
      ctx.beginPath();
      ctx.ellipse(0, 0, 130 + i * 34, 42 + i * 18, (i * Math.PI) / 3, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${i === 1 ? "110,168,255" : "64,214,194"}, ${0.16 - i * 0.025})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    ctx.restore();
  }

  function drawParticles() {
    particles.forEach((point) => {
      if (!prefersReducedMotion) {
        point.x += point.vx;
        point.y += point.vy;
      }

      if (point.x < -20) point.x = width + 20;
      if (point.x > width + 20) point.x = -20;
      if (point.y < -20) point.y = height + 20;
      if (point.y > height + 20) point.y = -20;

      const pulse = Math.sin(frame * 2.8 + point.phase) * 0.35 + 0.9;
      ctx.beginPath();
      ctx.arc(point.x, point.y, point.size * pulse, 0, Math.PI * 2);
      ctx.fillStyle = particleColor(point.hue, 0.48);
      ctx.fill();
    });

    for (let i = 0; i < particles.length; i += 1) {
      for (let j = i + 1; j < particles.length; j += 1) {
        const a = particles[i];
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 112) {
          ctx.strokeStyle = `rgba(110, 168, 255, ${0.11 * (1 - distance / 112)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
  }

  function drawScan() {
    const scanY = ((Math.sin(frame * 0.55) + 1) / 2) * height;
    const scan = ctx.createLinearGradient(0, scanY - 120, 0, scanY + 120);
    scan.addColorStop(0, "rgba(64, 214, 194, 0)");
    scan.addColorStop(0.5, "rgba(64, 214, 194, 0.12)");
    scan.addColorStop(1, "rgba(64, 214, 194, 0)");
    ctx.fillStyle = scan;
    ctx.fillRect(0, scanY - 120, width, 240);
  }

  function draw() {
    frame += 0.012;
    ctx.clearRect(0, 0, width, height);
    drawScan();
    drawFactorySilhouette();
    drawOrbit();
    drawFlowField();
    drawParticles();

    if (!prefersReducedMotion) {
      requestAnimationFrame(draw);
    }
  }

  resize();
  draw();
  window.addEventListener("resize", resize);
})();
