---
layout: page
title: Research
subtitle: Physics-informed deep learning and spatial forecasting for high-impact AI roles.
description: HPSF-Net research and publications.
permalink: /research/
---

## Hybrid Physics-Guided Spatial Earthquake Forecasting (HPSF-Net)

**Primary Research Project**

HPSF-Net is a hybrid deep learning framework that fuses **seismic waveforms**, **earthquake history**, and **spatial region interactions** with physics-guided constraints to deliver short-term probabilistic earthquake forecasts.

[Project Page](/projects/research-projects/#hpsf-net){: .btn .btn--primary}
[GitHub](https://github.com/JinkaHarshaVardhan){: .btn .btn--ghost}
[arXiv (coming soon)](#){: .btn .btn--ghost}

---

### Problem

Earthquake forecasting requires modeling complex spatio-temporal dependencies while respecting physical laws. Pure data-driven models often violate domain constraints; HPSF-Net bridges this gap with hybrid supervision.

### Approach

Multi-branch encoders process waveforms and catalog history; graph-style spatial modules capture regional coupling; physics-guided loss terms regularize predictions toward seismologically plausible outcomes.

### Architecture Overview

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│ Waveform Encoder│     │ History Encoder  │     │ Spatial Graph   │
└────────┬────────┘     └────────┬─────────┘     └────────┬────────┘
         └───────────────────────┼──────────────────────────┘
                                 ▼
                    ┌────────────────────────┐
                    │  Fusion + Physics Loss │
                    └────────────┬───────────┘
                                 ▼
                    Short-term forecast map (per region)
```

### Tech Stack & Data

- PyTorch, NumPy, Pandas
- Seismic waveforms & epicenter catalogs
- Graph-style region interactions
- Physics-informed loss, probabilistic forecasting

Datasets combine instrument recordings, historical epicenter catalogs, and regional segmentation masks.

### Results & Impact

The framework improves spatial consistency of forecasts versus naive deep baselines by embedding domain structure. Suitable for hazard awareness dashboards and research extensions toward operational early-warning pipelines.

---

*Add paper PDFs, arXiv IDs, and demo links here as you publish.*
