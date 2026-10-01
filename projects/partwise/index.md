---
layout: default
title: Partwise Visual Quality Inspection | Lewis NDAMBIRI
description: A computer vision case study that connects anomaly detection, failure analysis, and industrial review decisions.
---

# Partwise

![Computer Vision](https://img.shields.io/badge/Focus-Computer%20Vision-0F766E)
![Anomaly Detection](https://img.shields.io/badge/Method-Anomaly%20Detection-6D5BD0)
![Python](https://img.shields.io/badge/Python-3.12-3776AB?logo=python&logoColor=white)
![PyTorch](https://img.shields.io/badge/PyTorch-CPU-EE4C2C?logo=pytorch&logoColor=white)
![PatchCore](https://img.shields.io/badge/Model-PatchCore-36454F)
![Streamlit](https://img.shields.io/badge/Streamlit-Local%20Demo-FF4B4B?logo=streamlit&logoColor=white)

![Partwise visual inspection hero](/projects/partwise/hero.png)

Partwise is a computer vision workbench for inspecting manufactured metal nuts. It pairs a reproducible anomaly detection experiment with the industrial decision that follows a model score: **accept the part, flag it for review, or risk rejecting a good part**.

[Code and setup](https://github.com/lewisndambiri/partwise) · [Detailed case study](https://github.com/lewisndambiri/partwise/blob/main/reports/case_study.md) · [Full comparison](https://github.com/lewisndambiri/partwise/blob/main/reports/model_comparison.md)

## The question

A defect detector is useful only if its errors can be understood in the context of the inspection line. Missed defects and false rejects create different costs, and a human review station has finite capacity. This project asks how far a normal-only vision model can get on a public benchmark, where it fails, and what its measured errors might imply under explicit operating assumptions.

## Method

The experiment uses the [MVTec AD metal nut dataset](https://www.mvtec.com/research-teaching/datasets/mvtec-ad). A seeded split gives **176 normal images for fitting** and **44 normal images for threshold calibration**. The official **22 good and 93 defective** test images remain separate until evaluation.

A fixed ResNet18 whole-image feature distance provides a transparent baseline. PatchCore compares local ResNet18 patch features with a compact bank of normal patches and produces anomaly maps. Both decision thresholds are set from normal validation scores, without using defective test labels.

## Measured result

| Held-out test measure | Whole-image baseline | PatchCore |
|---|---:|---:|
| Defects found | 65 / 93 | **86 / 93** |
| Good parts rejected | 4 / 22 | **1 / 22** |
| Image AUROC | 0.793 | **0.988** |
| Pixel AUROC | — | 0.981 |

![Partwise locked-test comparison](/projects/partwise/evaluation.png)

The result is strong on this benchmark, but the good-part estimate is imprecise: PatchCore rejected **1 of only 22** good test images. Its approximate 95% Wilson interval for false-reject rate is **0.8%–21.8%**. That uncertainty is part of the engineering result, not hidden behind the AUROC.

## Inspect the misses

The local Streamlit app shows the original image, anomaly overlay, and ground-truth mask together. PatchCore still missed **seven defects** and flagged **one good image**. A visible hot spot on a missed defect does not necessarily exceed the fixed image-level threshold.

![Detected and missed bent defects in Partwise](/projects/partwise/inspection.png)

<video muted loop playsinline controls preload="metadata" poster="/projects/partwise/hero.png">
  <source src="/projects/partwise/walkthrough.mp4" type="video/mp4">
</video>

*This 20-second clip is a silent tour rendered from saved benchmark outputs. The interactive workbench runs locally using the repository instructions.*

## Connect detection to operations

The Decision studio projects missed defects, good parts rejected, review workload, and illustrative cost as prevalence, review capacity, reviewer accuracy, and cost assumptions change.

![Partwise illustrative decision scenario](/projects/partwise/decision.png)

These projections are **not measured factory savings**. Real deployment would need images from the target camera and part batches, a larger good-part sample, and local prevalence and cost estimates. A separate [synthetic camera-condition check](https://github.com/lewisndambiri/partwise/blob/main/reports/camera_stress_test.md) probes limited brightness and blur changes; it is not camera qualification.

## What this adds to my work

Partwise adds image-based quality inspection to my industrial AI portfolio. Alongside documentation assistance, machine monitoring, and planning models, it shows a different operational signal: the physical part itself. The experiment keeps that signal tied to evidence, uncertainty, and a human review decision.

**Stack:** Python 3.12, PyTorch and torchvision, Anomalib PatchCore, NumPy, Pillow, Streamlit, Altair, scikit-learn, and pytest. The 0.5% patch coreset keeps the model practical on a laptop CPU; the measured batch-1 model-and-score median was **35.7 ms**, excluding image loading and UI work.

**Source and reuse:** Original Partwise code is [MIT licensed](https://github.com/lewisndambiri/partwise/blob/main/LICENSE). The MVTec AD images adapted into these visuals are credited under [CC BY-NC-SA 4.0](https://github.com/lewisndambiri/partwise/blob/main/docs/ASSET_CREDITS.md). Dataset files and fitted weights are not in the repository.
