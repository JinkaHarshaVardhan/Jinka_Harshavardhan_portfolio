---
layout: project
title: Computer Vision
subtitle: Real-time perception, safety systems, and visual understanding.
parent_hub: /projects/
parent_label: All Projects
permalink: /projects/cv/
tag: Deep Learning · Real-time
github: https://github.com/JinkaHarshaVardhan
---

## AI-Driven Drowsiness Detection System {#drowsiness}

### Problem

Driver fatigue causes delayed reaction times and accidents. A system must detect drowsiness early from subtle facial and ocular cues in real time.

### Solution

Deep learning models analyze eye aspect ratio, blink dynamics, head pose, and facial expressions from a live camera feed to trigger timely alerts.

### Tech Stack

- PyTorch / TensorFlow
- OpenCV
- CNN, facial landmarks
- Real-time inference

### Architecture

```
Webcam → Face Detector → Landmark Model → Feature Extractor → Fatigue Classifier → Alert UI
```

### Dataset

Trained on labeled frames with eye-closure and yawning states; augmented for lighting and pose variation.

### Results

Reliable alert latency under normal cabin lighting; suitable for driver monitoring prototypes and lab demos.
