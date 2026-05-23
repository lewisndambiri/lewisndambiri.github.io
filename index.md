---
layout: default
title: Lewis NDAMBIRI | Data Science & AI for Competitive Manufacturing
---

<header class="hero">
  <canvas class="hero-canvas" data-hero-canvas aria-hidden="true"></canvas>
  <div class="topbar">
    <span class="status">AI for competitive manufacturing</span>
    <span>Systems, data, people, flow</span>
  </div>

  <div class="hero-grid">
    <div>
      <p class="eyebrow">EIT Manufacturing Master School</p>
      <h1>
        <span class="title-line">Lewis</span>
        <span class="title-line accent">NDAMBIRI</span>
      </h1>
      <h2>Data science, AI, and optimization for competitive manufacturing.</h2>
      <p class="hero-note">I build practical AI systems for manufacturing, operations, and industrial decision-making.</p>
      <div class="identity-strip" aria-label="Professional focus areas">
        <span>Data Science & AI</span>
        <span>Competitive Manufacturing</span>
        <span>Lean & Operations</span>
        <span>Industry 4.0 / 5.0</span>
      </div>
      <div class="actions" aria-label="Contact and profile links">
        <a class="button primary" href="Resume_NDAMBIRI.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
        <a class="button" href="mailto:ndambirilewis@gmail.com">Email</a>
        <a class="button" href="https://linkedin.com/in/lewisndambiri/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a class="button" href="https://github.com/lewisndambiri" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>

    <aside class="command-panel" aria-label="Profile command panel">
      <div class="panel-head">
        <span>Craft Map</span>
        <span class="panel-code">DSAI-CM</span>
      </div>
      <div class="radar craft-map">
        <div class="sweep"></div>
        <div class="radar-ring"></div>
        <div class="radar-ring"></div>
        <div class="radar-ring"></div>
        <div class="center-node">
          <span>AI</span>
          <span>IE</span>
        </div>
        <div class="domain-node ai" aria-label="Artificial intelligence">
          <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M18 10a7 7 0 0 0-7 7v2a7 7 0 0 0 0 14v1a6 6 0 0 0 11 3 6 6 0 0 0 11-3v-1a7 7 0 0 0 0-14v-2a7 7 0 0 0-12-5 7 7 0 0 0-3-2Z"/><path d="M16 19h16M16 28h16M22 14v24M30 14v24"/></svg>
          <span>AI</span>
        </div>
        <div class="domain-node industry" aria-label="Industrial engineering">
          <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M6 38V22l10 6V18l10 6V12h16v26H6Z"/><path d="M13 34h4M23 34h4M33 34h4M32 18h4"/></svg>
          <span>IE</span>
        </div>
        <div class="domain-node lean" aria-label="Lean management">
          <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 26h22"/><path d="m25 18 8 8-8 8"/><path d="M10 15h12M10 37h22"/></svg>
          <span>Lean</span>
        </div>
        <div class="domain-node i4" aria-label="Industry 4.0">
          <svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="6"/><path d="M24 6v8M24 34v8M6 24h8M34 24h8M11 11l6 6M31 31l6 6M37 11l-6 6M17 31l-6 6"/></svg>
          <span>4.0</span>
        </div>
        <div class="domain-node i5" aria-label="Industry 5.0">
          <svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="15" r="5"/><path d="M14 39c1-8 5-13 10-13s9 5 10 13"/><path d="M9 20c3 5 7 8 12 8M39 20c-3 5-7 8-12 8"/></svg>
          <span>5.0</span>
        </div>
        <div class="domain-node data" aria-label="Data systems">
          <svg viewBox="0 0 48 48" aria-hidden="true"><ellipse cx="24" cy="11" rx="14" ry="5"/><path d="M10 11v24c0 3 6 5 14 5s14-2 14-5V11"/><path d="M10 23c0 3 6 5 14 5s14-2 14-5"/></svg>
          <span>Data</span>
        </div>
      </div>
    </aside>
  </div>

  <div class="metrics" aria-label="Selected outcomes">
    <div class="metric">
      <strong>100%</strong>
      <span>CNC RAG page hit rate@5 on eval set</span>
    </div>
    <div class="metric">
      <strong>839</strong>
      <span>Haas CNC manual chunks indexed locally</span>
    </div>
    <div class="metric">
      <strong>9.23%</strong>
      <span>MAPE on retail demand forecasting</span>
    </div>
    <div class="metric">
      <strong>31.77x</strong>
      <span>HPC speedup using MPI/OpenMP</span>
    </div>
  </div>
</header>

<section>
  <div class="section-heading">
    <h2>Selected Projects</h2>
    <p>Offline industrial AI, forecasting, manufacturing intelligence, analytics engineering, service architecture, high-performance computing, and AI-assisted product development.</p>
  </div>

  <div class="project-grid">
    <article class="project-card">
      <div class="project-media">
        <img src="/assets/img/cnc-rag-assistant-hero.jpg" alt="Offline CNC RAG Assistant project preview">
      </div>
      <div class="stack">Python, FAISS, Sentence Transformers, Ollama, Mistral, Streamlit, Pytest</div>
      <h3>Offline CNC RAG Assistant</h3>
      <p>Built a local retrieval-augmented generation assistant for CNC machine operation and maintenance documentation, using a Haas Mill NGC manual as a realistic manufacturing corpus.</p>
      <p class="result">Result: 839 indexed manual chunks, hybrid retrieval, cited local answers, Streamlit UI, and 100% page hit rate@5 on the evaluation set.</p>
      <div class="links">
        <a href="https://github.com/lewisndambiri/cnc-rag-assistant" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </article>

    <article class="project-card">
      <div class="project-media">
        <img src="/projects/demand_planning/demand-forecasting-hero.png" alt="Demand forecasting project preview">
      </div>
      <div class="stack">Python, XGBoost, Pandas, Scikit-learn, Streamlit, Docker</div>
      <h3>Demand Forecasting for Retail Stores</h3>
      <p>Built an end-to-end forecasting pipeline for the Rossmann Store Sales dataset, covering 1,115 stores and 1M+ rows with leakage-conscious feature engineering and recursive future forecasting.</p>
      <p class="result">Result: 9.23% MAPE, 0.914 R², and 55% RMSE reduction versus the best naive baseline.</p>
      <div class="links">
        <a href="/projects/demand_planning/">Case Study</a>
        <a href="https://github.com/lewisndambiri/demand_planning" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </article>

    <article class="project-card">
      <div class="project-media">
        <img src="/projects/maintenance-mode-predictor/preview.jpg" alt="Maintenance mode predictor preview">
      </div>
      <div class="stack">Python, Scikit-learn, Pandas, Statistics</div>
      <h3>Maintenance Mode Prediction</h3>
      <p>Built a decision tree classifier to predict industrial machine operational states using sensor and maintenance data, with tuned hyperparameters and interpretable feature importance.</p>
      <p class="result">Result: 96% accuracy with key predictors including Sensor5, Age, and Sensor2.</p>
      <div class="links">
        <a href="/projects/maintenance-mode-predictor/">Case Study</a>
        <a href="https://github.com/lewisndambiri/maintenance-mode-predictor" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </article>

    <article class="project-card">
      <div class="project-media">
        <img src="/projects/retail-analytics-sql/retail_analytics.png" alt="Retail analytics dashboard preview">
      </div>
      <div class="stack">PostgreSQL, Python ETL, Advanced SQL, Power BI</div>
      <h3>End-to-End Retail Analytics Engine</h3>
      <p>Designed a complete analytics pipeline from synthetic data generation to star-schema modeling, SQL analysis, and an executive Power BI dashboard.</p>
      <p class="result">Result: delivered cohort retention, RFM segmentation, sales KPIs, and product profitability analysis.</p>
      <div class="links">
        <a href="/projects/retail-analytics-sql/">Case Study</a>
        <a href="https://github.com/lewisndambiri/retail-analytics-sql" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </article>

    <article class="project-card">
      <div class="project-media">
        <img src="/projects/Industrial-AI-Challenge/Fedrigoni.avif" alt="Fedrigoni industrial AI challenge preview">
      </div>
      <div class="stack">Python, Pandas, NumPy, XGBoost, Matplotlib, Seaborn</div>
      <h3>Fedrigoni Industrial AI Challenge</h3>
      <p>Analyzed and modeled the slitting process at Fedrigoni's Arco plant to support predictive production planning and improve manufacturing decision-making.</p>
      <p class="result">Result: forecasted daily slitting output and helped shift planning from reactive to predictive management.</p>
      <div class="links">
        <a href="/projects/Industrial-AI-Challenge/">Case Study</a>
        <a href="/projects/Industrial-AI-Challenge/Certificate.png" target="_blank" rel="noopener noreferrer">Certificate</a>
      </div>
    </article>

    <article class="project-card">
      <div class="project-media">
        <img src="/projects/romberg-hpc4ds/hpc.jpg" alt="HPC cluster preview">
      </div>
      <div class="stack">C, MPI, OpenMP, PBS, Linux HPC Cluster</div>
      <h3>Parallel Numerical Integration Using Romberg's Method</h3>
      <p>Parallelized a high-accuracy numerical method across MPI, OpenMP, and hybrid configurations, then benchmarked scaling behavior across cluster placements.</p>
      <p class="result">Result: 31.77x speedup on 32 cores with 99.3% efficiency.</p>
      <div class="links">
        <a href="/projects/romberg-hpc4ds/">Case Study</a>
        <a href="https://github.com/lewisndambiri/romberg-hpc4ds" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </article>

    <article class="project-card">
      <div class="project-media">
        <img src="/projects/UrbanPulse/urbanpulse.PNG" alt="UrbanPulse system preview">
      </div>
      <div class="stack">Python, Flask, PostgreSQL, Docker, REST, Telegram Bot</div>
      <h3>UrbanPulse Event & Logistics Planner</h3>
      <p>Built a process-centric, four-layer service-oriented architecture that helps users discover events and receive weather-aware transport recommendations through a Telegram chatbot.</p>
      <p class="result">Result: integrated event, weather, and routing APIs into a containerized event planning workflow.</p>
      <div class="links">
        <a href="/projects/UrbanPulse/">Case Study</a>
        <a href="https://github.com/lewisndambiri/UrbanPulse" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </article>

    <article class="project-card">
      <div class="project-media">
        <img src="/projects/meet-scheduler/Homepage.jpg" alt="MeetScheduler homepage preview">
      </div>
      <div class="stack">React, Node.js, Express, Google Calendar API, Nodemailer, CSS</div>
      <h3>MeetScheduler AI-Assisted Meeting Scheduler</h3>
      <p>Built a Doodle-inspired meeting scheduler for HackaPrompt AI 2026, with poll creation, availability voting, quorum-based best-slot detection, Google Calendar availability, and email invitations.</p>
      <p class="result">Result: delivered a working full-stack scheduling prototype while documenting how AI assistance can accelerate development when paired with clear product judgement.</p>
      <div class="links">
        <a href="/projects/meet-scheduler/">Case Study</a>
        <a href="https://github.com/lewisndambiri/meet-scheduler" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </article>
  </div>
</section>

<section class="fit">
  <div class="fit-visual">
    <img src="/assets/img/industry-5-human-cobot.png" alt="Human engineer collaborating with a cobot in an Industry 5.0 setting">
  </div>

  <div class="fit-content">
    <div>
      <h2>How I Work</h2>
      <p class="lead">Industrial systems thinking, software execution, and human-centered AI.</p>
    </div>

    <div class="fit-list">
      <div class="fit-item">
        <strong>Operational thinking</strong>
        <span>Optimization, simulation, logistics, production systems, and process improvement.</span>
      </div>
      <div class="fit-item">
        <strong>Data product execution</strong>
        <span>ETL, modeling, validation, dashboards, APIs, tests, Docker, and CI.</span>
      </div>
      <div class="fit-item">
        <strong>Business translation</strong>
        <span>Projects framed around decisions, KPIs, accuracy, efficiency, and user workflows.</span>
      </div>
      <div class="fit-item">
        <strong>Technical range</strong>
        <span>Python, SQL, ML, HPC, service-oriented systems, and full-stack prototypes.</span>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="section-heading">
    <h2>Education</h2>
  </div>

  <div class="education">
    <article class="education-main">
      <h3>Data Science and AI for Competitive Manufacturing</h3>
      <p>EIT Manufacturing Master School, 2026. A double-degree program combining data science, artificial intelligence, industrial engineering, and manufacturing innovation.</p>
    </article>
    <article>
      <h3>M.Sc. Industrial Engineering</h3>
      <p>Centrale Nantes, 2026. Operations research, enterprise modeling, simulation, innovation engineering, and industrial project management.</p>
    </article>
    <article>
      <h3>M.Sc. Computer Science</h3>
      <p>Università degli studi di Trento, 2026. HPC for data science, AI and innovation, service design, and ICT entrepreneurship.</p>
    </article>
  </div>
</section>

<footer>
  <span>© 2026 Lewis NDAMBIRI</span>
  <span>Open to roles in industrial AI, data science, manufacturing analytics, and operations technology.</span>
</footer>
