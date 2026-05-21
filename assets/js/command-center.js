(() => {
  const canvas = document.querySelector("[data-hero-canvas]");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let width = 0;
  let height = 0;
  let dpr = 1;
  let points = [];
  let frame = 0;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.max(28, Math.floor(width / 34));
    points = Array.from({ length: count }, (_, index) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      size: 1 + Math.random() * 2.2,
      phase: index * 0.45
    }));
  }

  function draw() {
    frame += 0.012;
    ctx.clearRect(0, 0, width, height);

    const scanY = ((Math.sin(frame * 0.8) + 1) / 2) * height;
    const scan = ctx.createLinearGradient(0, scanY - 90, 0, scanY + 90);
    scan.addColorStop(0, "rgba(64, 214, 194, 0)");
    scan.addColorStop(0.5, "rgba(64, 214, 194, 0.16)");
    scan.addColorStop(1, "rgba(64, 214, 194, 0)");
    ctx.fillStyle = scan;
    ctx.fillRect(0, scanY - 90, width, 180);

    points.forEach((point) => {
      if (!prefersReducedMotion) {
        point.x += point.vx;
        point.y += point.vy;
      }

      if (point.x < 0 || point.x > width) point.vx *= -1;
      if (point.y < 0 || point.y > height) point.vy *= -1;

      const pulse = Math.sin(frame * 4 + point.phase) * 0.4 + 0.8;
      ctx.beginPath();
      ctx.arc(point.x, point.y, point.size * pulse, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(247, 248, 251, 0.58)";
      ctx.fill();
    });

    for (let i = 0; i < points.length; i += 1) {
      for (let j = i + 1; j < points.length; j += 1) {
        const a = points[i];
        const b = points[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 138) {
          ctx.strokeStyle = `rgba(110, 168, 255, ${0.18 * (1 - distance / 138)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    if (!prefersReducedMotion) {
      requestAnimationFrame(draw);
    }
  }

  resize();
  draw();
  window.addEventListener("resize", resize);

  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty("--mx", `${x}%`);
      card.style.setProperty("--my", `${y}%`);
    });
  });

  document.querySelectorAll(".stack").forEach((stack) => {
    const items = stack.textContent
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    stack.textContent = "";
    items.forEach((item) => {
      const chip = document.createElement("span");
      chip.textContent = item;
      stack.appendChild(chip);
    });
  });
})();
