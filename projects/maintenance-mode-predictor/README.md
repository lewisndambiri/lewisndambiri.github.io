# 🛠️ Maintenance Mode Prediction with Decision Trees

> **Predicting Machine Operational States (Failure vs. Production) using Sensor & Maintenance Data**  
> *Statistics & Data Analysis Course Project *

![Python](https://img.shields.io/badge/Python-3.8%2B-blue?logo=python)
![Scikit-learn](https://img.shields.io/badge/scikit--learn-1.0%2B-orange)
![Pandas](https://img.shields.io/badge/pandas-1.3%2B-teal)
![License](https://img.shields.io/badge/License-MIT-green)

## 📌 Overview

In industrial systems, unexpected machine failures lead to costly downtime. This project leverages **real-world maintenance logs** to build a **Decision Tree classifier** that predicts whether a machine is in **Failure (0)** or **Production (1)** mode—enabling proactive maintenance strategies.

Developed as part of a **Statistics and Data Analysis** course, this work bridges **Industrial Engineering** (reliability, operations) with **Computer Science** (machine learning, data pipelines).

## 🔍 Problem Statement

Given sensor readings and operational features (e.g., `Age`, `Pressure`, `Run_Hours`, `Sensor5`), **classify the machine’s current operational mode** to support predictive maintenance decisions.

## 📊 Dataset

- **Source**: `Maintenance_St.xlsx` (353 samples, 13 features)
- **Features**:  
  - `Age`, `Machine_Type`, `Pressure`, `Temperature`  
  - `Engine_Problem`, `Run_Hours`, `Maintenance`  
  - Sensor data (`Sensor1`–`Sensor5`)
- **Target**: `Operation_modes` (0 = Failure, 1 = Production)
- **Class Distribution**: ~73% Production, ~27% Failure

## 🧪 Methodology

1. **Data Cleaning**: Removed corrupted rows, handled missing values.
2. **Exploratory Data Analysis (EDA)**:
   - Boxplots & histograms for outlier detection
   - Correlation heatmap (`Sensor5` and `Operation_modes` show strong negative correlation: **-0.81**)
3. **Modeling**:
   - Trained a **Decision Tree Classifier** (`sklearn`)
   - Evaluated with **accuracy, precision, recall, F1-score, confusion matrix**
4. **Optimization**:
   - Hyperparameter tuning via manual refinement → **96% accuracy**
   - Key parameters: `max_depth=3`, `min_samples_leaf=4`, `min_samples_split=2`
5. **Interpretability**:
   - Visualized decision rules
   - Extracted feature importance (`Sensor5`, `Age`, `Sensor2` most influential)

## 📈 Results

| Metric | Score |
|--------|-------|
| **Base Accuracy** | 94.37% |
| **Optimized Accuracy** | **96%** |
| **Failure Recall** | 98% (critical for maintenance!) |
| **Key Features** | `Sensor5`, `Age`, `Sensor2` |

✅ **Prediction for given input**:  
`Age=55, Machine_Type=1, Pressure=140, ..., Sensor5=20` → **Production (1)** ✅

## 🚀 How to Run

1. Clone this repo:
   ```bash
   git clone https://github.com/lewisndambiri/maintenance-mode-predictor.git
   cd maintenance-mode-predictor

2. Install dependencies:
   ```bash
   pip install -r requirements.txt

3. Launch Jupyter and run the notebook:
   ```bash
   jupyter notebook maintenance_analysis.ipynb

  Note: The dataset Maintenance_St.xlsx must be in the same directory.

🛠️ Tech Stack
 - Languages: Python
 - Libraries: pandas, numpy, scikit-learn, matplotlib, seaborn
 - Tools: Jupyter Notebook, Excel

💡 Future Improvements
 - Handle class imbalance with SMOTE or class_weight='balanced'
 - Experiment with Random Forest or XGBoost for higher robustness
 - Deploy as a Flask API for real-time predictions
 - Add SHAP values for deeper interpretability

📄 License
MIT License — see LICENSE for details.

Built by Lewis NDAMBIRI
  
