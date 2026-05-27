---
layout: default
title: Lewis NDAMBIRI | Data Science & AI for Competitive Manufacturing
---

<header class="hero">
  <canvas class="hero-canvas" data-hero-canvas aria-hidden="true"></canvas>
  <nav class="top-pill" aria-label="Portfolio navigation">
    <a href="#work">Projects</a>
    <a href="#craft">Intro</a>
    <a href="#education">Education</a>
    <a href="Resume_NDAMBIRI.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
    <a href="mailto:ndambirilewis@gmail.com">Contact</a>
  </nav>
  <div class="hero-intro hero-intro-primary">
    <h1>Lewis NDAMBIRI</h1>
    <h3>Industrial Engineer | AI, Optimization & Industrial Systems | Smart Manufacturing, Digital Twins, & Supply Chain | Operational Excellence</h3> 
  </div>

  <div class="hero-intro hero-intro-secondary">
    <div class="actions" aria-label="Contact and profile links">
      <a class="button primary" href="Resume_NDAMBIRI.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
      <a class="button" href="mailto:ndambirilewis@gmail.com">Email</a>
      <a class="button" href="https://linkedin.com/in/lewisndambiri/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a class="button" href="https://github.com/lewisndambiri" target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
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

<section id="work">
  <div class="section-heading">
    <h2>Selected Projects</h2>
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
        <a href="/projects/offline-cnc-rag-assistant/">Case Study</a>
        <a href="https://github.com/lewisndambiri/offline-cnc-rag-assistant" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </article>

    <article class="project-card">
      <div class="project-media">
        <img src="/projects/demand_planning/demand-forecasting-hero.png" alt="Demand forecasting project preview">
      </div>
      <div class="stack">Python, XGBoost, Pandas, Scikit-learn, Streamlit, Docker</div>
      <h3>Demand Forecasting for Supply Chain Planning</h3>
      <p>Built an end-to-end forecasting pipeline for the Rossmann Store Sales dataset, covering 1,115 stores and 1M+ rows with leakage-conscious feature engineering and recursive future forecasting.</p>
      <p class="result">Result: 9.23% MAPE, 0.914 R², and 55% RMSE reduction versus the best naive baseline.</p>
      <div class="links">
        <a href="/projects/demand_planning/">Case Study</a>
        <a href="https://github.com/lewisndambiri/demand_forecasting" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </article>
    
    <article class="project-card">
      <div class="project-media">
        <img src="/projects/factorypulse/docs/factorypulse-hero-control-room.png" alt="factorypulse preview">
      </div>
      <div class="stack">React, TypeScript, FastAPI, MQTT, Docker, OPC UA, IIoT</div>
      <h3>Real-Time Industrial Production Monitoring & Remote Machine Control</h3>
      <p>Built a real-time industrial monitoring platform with live telemetry, OEE analytics, alarms, audit logging, and secure remote machine control using FastAPI, MQTT, and Docker.</p>
      <p class="result">Result: Real-time MQTT telemetry ingestion, OEE and downtime analytics, role-based machine control, audit logging, and a containerized FastAPI–React stack with InfluxDB and PostgreSQL.</p>
      <div class="links">
        <a href="/projects/factorypulse/">Case Study</a>
        <a href="https://github.com/lewisndambiri/factorypulse" target="_blank" rel="noopener noreferrer">GitHub</a>
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
 </div>
</section>

<section id="work">
  <div class="section-heading">
    <h2>Other Projects</h2>
  </div>

  <div class="project-grid">
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
        <img src="/projects/meet-scheduler/Homepage.jpg" alt="MeetScheduler homepage preview">
      </div>
      <div class="stack">React, Node.js, Express, Google Calendar API, Nodemailer, CSS</div>
      <h3>MeetScheduler AI-Assisted Meeting Scheduler</h3>
      <p>Built a Doodle-inspired meeting scheduler for HackaPrompt AI 2026, with poll creation, availability voting, quorum-based best-slot detection, Google Calendar availability, and email invitations.</p>
      <p class="result">Result:A full-stack scheduling prototype, demonstrating how AI-assisted development accelerates delivery when guided by strong product and engineering judgment.</p>
      <div class="links">
        <a href="/projects/meet-scheduler/">Case Study</a>
        <a href="https://github.com/lewisndambiri/meet-scheduler" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </article>
  </div>
</section>

<section class="tech-stack" aria-labelledby="tech-stack-title">
  <div class="section-heading">
    <h2 id="tech-stack-title">Technology Stack</h2>
  </div>

  <div class="stack-groups">
    <div class="stack-group">
      <h3>AI & Data</h3>
      <div class="tech-badges">
        <span>Python</span>
        <span>Pandas</span>
        <span>NumPy</span>
        <span>Scikit-learn</span>
        <span>XGBoost</span>
        <span>FAISS</span>
        <span>Sentence Transformers</span>
        <span>Mistral</span>
        <span>Ollama</span>
      </div>
    </div>
    <div class="stack-group">
      <h3>Industrial & Operations</h3>
      <div class="tech-badges">
        <span>Optimization</span>
        <span>Forecasting</span>
        <span>Simulation</span>
        <span>Lean Systems</span>
        <span>Predictive Maintenance</span>
        <span>Industry 4.0 / 5.0</span>
      </div>
    </div>
    <div class="stack-group">
      <h3>Systems & Backend</h3>
      <div class="tech-badges">
        <span>PostgreSQL</span>
        <span>Advanced SQL</span>
        <span>Flask</span>
        <span>REST APIs</span>
        <span>Node.js</span>
        <span>Express</span>
        <span>Docker</span>
      </div>
    </div>
    <div class="stack-group">
      <h3>Interfaces & Delivery</h3>
      <div class="tech-badges">
        <span>Streamlit</span>
        <span>Power BI</span>
        <span>React</span>
        <span>Google Calendar API</span>
        <span>Telegram Bot</span>
        <span>Nodemailer</span>
      </div>
    </div>
    <div class="stack-group">
      <h3>Engineering Practice</h3>
      <div class="tech-badges">
        <span>Pytest</span>
        <span>CI</span>
        <span>Linux</span>
        <span>C</span>
        <span>MPI</span>
        <span>OpenMP</span>
        <span>PBS</span>
      </div>
    </div>
  </div>
</section>

<section id="education">
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
