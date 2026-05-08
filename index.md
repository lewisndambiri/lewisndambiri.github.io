---
layout: default
---

# My Portfolio
Hi, I'm Lewis NDAMBIRI 👋

I bridge systems optimization with scalable software to solve real-world inefficiencies.

🔍 **I focus on**:  
- Process optimization & simulation  
- Data-driven decision systems  
- Automation & algorithmic efficiency  
- Human-centered system design

<a href="mailto:ndambirilewis@gmail.com">📧 Email me</a> |
<a href="https://linkedin.com/in/lewisndambiri/" target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a> |
<a href="https://github.com/lewisndambiri" target="_blank" rel="noopener noreferrer">💻 GitHub</a> |
<a href="Resume_NDAMBIRI.pdf" target="_blank" rel="noopener noreferrer">📥 View My Resume</a>


---

## 🚀 Featured Projects

### 1. Maintenance Mode Prediction
*Statistics & Data Analysis | Python, Scikit-learn, Pandas*  
![Maintenance Mode Predictor preview](/projects/maintenance-mode-predictor/preview.jpg){: .project-preview }

Built a Decision Tree classifier to predict industrial machine operational states (**Failure** vs. **Production**) using sensor and maintenance data. Achieved **96% accuracy** after hyperparameter tuning. 
Key predictors: `Sensor5`, `Age`, and `Sensor2`.  

→ [Case Study](/projects/maintenance-mode-predictor/)
→ <a href="https://github.com/lewisndambiri/maintenance-mode-predictor" target="_blank" rel="noopener noreferrer">View on GitHub</a>

## 2. Demand Forecasting for Retail Stores
Time Series Forecasting | Python, XGBoost, Pandas, Scikit‑learn, Streamlit, Docker  
![Demand Forecasting preview](/projects/demand_planning/demand-forecasting-hero.png){: .project-preview }

End‑to‑end forecasting pipeline using XGBoost with leakage‑conscious feature engineering (lag, rolling means, calendar, business features), time‑based holdout validation, and a recursive forecast loop for future unseen dates. Built on the Rossmann Store Sales dataset (1,115 stores, 1.0M+ rows). Achieved 9.23% MAPE, 0.914 R², and a 55% RMSE reduction compared to the best naive baseline. Includes a Streamlit dashboard, Docker support, unit tests, and CI. The model chooses between XGBoost and scikit‑learn fallback automatically.

→ [Case Study](/projects/demand_planning/)
→ <a href="https://github.com/lewisndambiri/demand_planning" target="_blank" rel="noopener noreferrer">View on GitHub</a>
→ <a href="https://github.com/lewisndambiri/demand_planning/docs/RESULTS.md" target="_blank" rel="noopener noreferrer">Results</a>

### 3. UrbanPulse – Event & Logistics Planner  
*Service-Oriented Architecture (SOA) | Python, Flask, PostgreSQL, Docker, REST, Telegram Bot*  
![UrbanPulse](/projects/UrbanPulse/urbanpulse.PNG){: .project-preview }

Built a **process-centric, 4-layer SOA system** that enables users to discover events and receive **weather-aware transport recommendations** via a Telegram chatbot. Implemented **two orchestration services** to manage event discovery and commitment workflows, integrating real-world APIs for events, weather, and routing.

- **Architecture:** Strict 4-layer SOA with independent microservices  
- **Integrations:** Ticketmaster, OpenWeatherMap, OpenRouteService  
- **Highlights:** Preference-based ranking, transport optimization, fully containerized system  

It provides a **seamless, end-to-end event planning experience** from discovery to logistics for users in real-time.  

→ [Case Study](/projects/UrbanPulse)  → <a href="https://github.com/lewisndambiri/UrbanPulse" target="_blank" rel="noopener noreferrer">View on GitHub</a>

### 4. Fedrigoni Industrial AI Challenge - Team 3
*Industrial AI for Predictive Manufacturing | Python, Pandas, NumPy, XGBoost, Matplotlib, Seaborn*
![Fedrigoni](/projects/Industrial-AI-Challenge/Fedrigoni.avif){: .project-preview }
- **Project Overview**: This project is part of University of Trento's AI and Innovation course where we focused on improving the slitting process in paper manufacturing at **Fedrigoni’s Arco plant**. By leveraging **predictive AI models** and **data analytics**, we aimed to predict daily slitting output and optimize production management to improve operational efficiency and customer satisfaction.
- **Technologies Used**: Python, Pandas, NumPy, XGBoost, Matplotlib, Seaborn
- **Key Results**: Achieved 95% accuracy in forecasting daily slitting output, improved operational efficiency, and helped shift from reactive to predictive production management.
- **AI Challenge Provider**: The project was part of the [**Industrial AI Challenge**](https://www.trentinoinnovation.eu/innova/strumenti-per-innovazione/ai-challenge/), a platform designed to foster innovation in industrial AI applications. Learn more about the challenge and its initiatives.

→ [Case Study](/projects/Industrial-AI-Challenge)
→ <a href="/projects/Industrial-AI-Challenge/Certificate.png" target="_blank">Certificate of Attendance</a>

### 5. End-to-End Retail Analytics Engine 
*PostgreSQL, Python ETL, Advanced SQL, Power BI*  
![Retail Analytics Dashboard](/projects/retail-analytics-sql/retail_analytics.png){: .project-preview }

Designed a complete analytics pipeline - from synthetic data generation in Python to a star-schema data model in PostgreSQL, advanced SQL analysis (cohort retention, RFM segmentation, window functions), and an interactive Power BI dashboard. 
Answers key business questions: *Which products drive profit? How do customers behave? Are we hitting targets?* 

→ [Case Study](/projects/retail-analytics-sql)
→ <a href="https://github.com/lewisndambiri/retail-analytics-sql" target="_blank" rel="noopener noreferrer">View on GitHub</a>


### 6. Parallel Numerical Integration using Romberg’s Method
*High-Performance Computing (HPC) | C, MPI, OPENMP, PBS, Linux HPC Cluster*
![Parallel Numerical Integration](/projects/romberg-hpc4ds/hpc.jpg){: .project-preview }

Parallelized Romberg integration - a high-accuracy numerical method - using MPI, OpenMP, and hybrid MPI+OpenMP on a 6,092-core cluster using a computationally heavy integrand (sin(x)·e⁻ˣ²) with 1,000,000 artificial iterations to emulate real-world HPC workloads. Evaluated strong/weak scaling, PBS placement strategies (pack, scatter, :excl) and:
- Achieved 31.77× speedup on 32 cores with 99.3% efficiency (near-perfect scaling!)
- Analyzed 50+ benchmark configurations across multiple problem sizes
- Validated theoretical limits using Amdahl's Law (4.8% serial fraction)

→ [Case Study](/projects/romberg-hpc4ds)
→ <a href="https://github.com/lewisndambiri/romberg-hpc4ds" target="_blank" rel="noopener noreferrer">View on GitHub</a>

### 7. MeetScheduler – AI‑Assisted Meeting Scheduler  
*Full Stack, AI Challenge | React, Node.js, Express, Google Calendar API, Nodemailer, CSS*
![MeetScheduker](/projects/meet-scheduler/HackapromptAI.png){: .project-preview }

Built for **HackaPrompt AI 2026** at the University of Trento – a Doodle‑inspired meeting scheduler developed **entirely with AI assistance**. Users create time‑slot polls, vote on availability, and automatically detect the best slot via a quorum. Integrates **Google Calendar** to show the creator’s busy times and sends **email invitations** with Nodemailer.  
The project doubles as a **critical examination of AI programming**: where LLMs excel, where they fall short, and what still requires human judgement.  

→ [Case Study](/projects/meet-scheduler)  → <a href="https://github.com/lewisndambiri/meet-scheduler" target="_blank" rel="noopener noreferrer">View on GitHub</a>

---

## 📚 Education

**M.S. in Industrial Engineering**  
Centrale Nantes, 2026  
Focus: Operations Research, Enterprise Modeling, Discrete Event Simulation, Product Management, Innovation Engineering, Finance & Economics for Engineering, Project Management.

**M.S. in Computer Science**  
Università degli studi di Trento, 2026  
Focus: HPC for Data Science, AI & Innovation, Service Design & Engineering, Innovation & Entrepreneurship studies in ICT. 

---

© 2025 Lewis. Built with ❤️ and GitHub Pages.
