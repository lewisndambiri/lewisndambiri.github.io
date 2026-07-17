(() => {
  document.body.classList.add("js-ready");

  const canvas = document.querySelector("[data-hero-canvas]");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const accentColors = [
    "61, 214, 181",
    "110, 168, 255",
    "226, 178, 92",
    "140, 165, 196",
    "245, 247, 242"
  ];

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
    document.querySelectorAll(".flagship, .project-card, .stack-group, .discipline-card, .contact-section").forEach((card) => {
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
      ".flagship, .about-copy, .project-card, .metric, .discipline-card, .stack-group, .education article, .contact-section"
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

  function addActiveNav() {
    const links = Array.from(document.querySelectorAll(".top-pill a[href^='#']"));
    if (!links.length || !("IntersectionObserver" in window)) return;

    const sections = links
      .map((link) => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((link) => {
            link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
          });
        });
      },
      { threshold: 0.28, rootMargin: "-18% 0px -60% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
  }

  function animateMetrics() {
    if (prefersReducedMotion || !("IntersectionObserver" in window)) return;

    const numbers = document.querySelectorAll(".metric strong");
    const parseMetric = (text) => {
      const match = text.trim().match(/^([^\d]*)([\d,.]+)(.*)$/);
      if (!match) return null;

      const value = Number.parseFloat(match[2].replace(/,/g, ""));
      if (Number.isNaN(value)) return null;

      return {
        original: text.trim(),
        prefix: match[1],
        value,
        suffix: match[3],
        decimals: (match[2].split(".")[1] || "").length
      };
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const number = entry.target;
          const metric = parseMetric(number.textContent);
          if (!metric) return;

          const start = performance.now();
          const duration = 880;

          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = metric.value * eased;
            number.textContent = `${metric.prefix}${current.toFixed(metric.decimals)}${metric.suffix}`;

            if (progress < 1) {
              requestAnimationFrame(tick);
            } else {
              number.textContent = metric.original;
            }
          };

          requestAnimationFrame(tick);
          observer.unobserve(number);
        });
      },
      { threshold: 0.6 }
    );

    numbers.forEach((number) => observer.observe(number));
  }

  function addSpinnerMotion() {
    const spinner = document.querySelector("[data-capability-spinner]");
    if (!spinner || prefersReducedMotion) return;

    let pending = false;
    const update = () => {
      spinner.style.setProperty("--spinner-turn", `${window.scrollY * 0.016}deg`);
      pending = false;
    };

    window.addEventListener(
      "scroll",
      () => {
        if (pending) return;
        pending = true;
        requestAnimationFrame(update);
      },
      { passive: true }
    );

    update();
  }

  enhanceStacks();
  addInteractiveGlow();
  addReveal();
  addActiveNav();
  animateMetrics();
  addSpinnerMotion();

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

  function withAlpha(color, alpha) {
    return `rgba(${color}, ${alpha})`;
  }

  function drawFlowField() {
    flowLines.forEach((line, index) => {
      const gradient = ctx.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0, withAlpha(accentColors[0], 0));
      gradient.addColorStop(0.35, withAlpha(accentColors[index % 2 ? 1 : 0], 0.34));
      gradient.addColorStop(0.72, withAlpha(accentColors[index % 3 ? 3 : 2], 0.26));
      gradient.addColorStop(1, withAlpha(accentColors[0], 0));

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
      ctx.strokeStyle = withAlpha(accentColors[i === 1 ? 1 : 0], 0.16 - i * 0.025);
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
      ctx.fillStyle = withAlpha(accentColors[point.hue], 0.48);
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
          ctx.strokeStyle = withAlpha(accentColors[1], 0.11 * (1 - distance / 112));
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
    scan.addColorStop(0, withAlpha(accentColors[0], 0));
    scan.addColorStop(0.5, withAlpha(accentColors[0], 0.1));
    scan.addColorStop(1, withAlpha(accentColors[0], 0));
    ctx.fillStyle = scan;
    ctx.fillRect(0, scanY - 120, width, 240);
  }

  function draw() {
    frame += 0.012;
    ctx.clearRect(0, 0, width, height);
    drawScan();
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
