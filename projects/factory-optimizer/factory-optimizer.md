# 🏭 Smart Factory Workflow Optimizer

> **Reduced average production cycle time by 89%—from 492 minutes to just 54 minutes—by aligning input rate with bottleneck capacity.**  
> A dual-discipline project blending **Industrial Engineering** (process modeling, Little’s Law, bottleneck analysis) and **Computer Science** (discrete-event simulation, Python, algorithmic design).

[![Cycle Time Comparison](factory_simulation_results.png)](factory_simulation_results.png)

## 🎯 Problem
In high-mix manufacturing environments—such as semiconductor or electronics assembly—production lines often operate with **unbalanced workstations**. When input rates exceed the capacity of the slowest station (the bottleneck), **work-in-process (WIP) inventory piles up**, leading to:
- Extremely long cycle times (hours or days)
- Poor on-time delivery
- Hidden inefficiencies masked by local station utilization

Traditional "push" production systems worsen this by ignoring system-wide constraints.

## 🔧 Approach
I built a **discrete-event simulation** of a 5-station production line using **Python** and **SimPy**, modeling each station as a **single-server queue** (capacity = 1 machine). The system was run for **24 hours** under two policies:

| Scenario      | Inter-Arrival Time | Input Rate | Rationale |
|---------------|--------------------|------------|----------|
| **Baseline**  | 3.0 minutes        | 20 parts/hour | Aggressive "push" system—common in practice but unstable |
| **Optimized** | 10.0 minutes       | 6 parts/hour  | Matches the bottleneck station’s theoretical capacity (10 min/part) |

### Key Modeling Details
- **Bottleneck station**: Station 3 (mean processing time = 10 min, ±2 min variability)
- **Stochastic arrivals**: Exponential inter-arrival times (Poisson process)
- **Resource-constrained stations**: Each station = 1 machine → parts **queue** if busy
- **Metrics tracked**: Cycle time, throughput, completion count

## 📈 Results

| Metric                | Baseline | Optimized | Improvement |
|-----------------------|----------|-----------|-------------|
| Avg. Cycle Time       | 492 min  | 54 min    | **↓ 89%**   |
| Parts Completed (24h) | 140      | 123       | —           |
| Throughput            | 5.8 /h   | 5.1 /h    | —           |

> 💡 **Insight**: Despite a slight drop in throughput (5.8 → 5.1 parts/hour), **cycle time plummeted by 89%**—turning an 8+ hour wait into under 1 hour. This validates **Little’s Law** (*WIP = Throughput × Cycle Time*): by reducing WIP through controlled input, cycle time collapses without sacrificing system efficiency.

![Cycle Time per Workpiece](factory_simulation_results.png)

## 🛠️ Tools & Technologies
- **Python**: Core simulation logic
- **SimPy**: Discrete-event simulation framework (with `Resource` for queuing)
- **Pandas & NumPy**: Data processing and analysis
- **Matplotlib**: Visualization of cycle time dynamics
- **Jupyter Notebook**: Interactive development and documentation
