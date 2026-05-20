---
layout: default
title: About
subtitle: From classical ML to deep learning, computer vision, LLMs, and agentic systems.
description: About Jinka Harshavardhan — education, journey, and skills.
permalink: /about/
---

<section class="section section--tight">
  <header class="page-header container" style="padding-bottom:0">
    <h1 class="section-title reveal">{{ page.title }}</h1>
    <p class="section-subtitle reveal" style="margin:0 auto">{{ page.subtitle }}</p>
  </header>
</section>

<section class="section section--tight">
  <div class="container">
    <article class="glass-card reveal markdown-body" style="padding:2.5rem;max-width:none">
      {{ site.data.profile.summary | markdownify }}
    </article>
  </div>
</section>

<section class="section section--tight">
  <div class="container reveal">
    <h2 class="section-title">My Journey</h2>
    <div class="journey-path">
      {% for step in site.data.profile.journey_steps %}
      <span class="step">{{ step }}</span>
      {% unless forloop.last %}<span class="arrow">→</span>{% endunless %}
      {% endfor %}
    </div>
  </div>
</section>

<section class="section section--tight">
  <div class="container">
    <h2 class="section-title reveal">Education</h2>
    <div class="timeline reveal" style="margin-top:2rem">
      {% for edu in site.data.education %}
      <div class="timeline-item" style="padding:1.5rem 0 1.5rem 0.5rem">
        <h3>{{ edu.degree }}</h3>
        <p class="meta">{{ edu.school }} · {{ edu.date }}</p>
        <p>{{ edu.detail }}</p>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <h2 class="section-title reveal">Technical Skills</h2>
    <div class="grid-2 reveal-stagger" style="margin-top:2rem">
      {% for group in site.data.skills %}
      <div class="glass-card" style="padding:1.75rem">
        <h3 style="margin-bottom:1rem;font-family:var(--font-display)">{{ group.group }}</h3>
        <div class="skills-cloud">
          {% for item in group.items %}
          <span class="skill-pill">{{ item }}</span>
          {% endfor %}
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<section class="section section--tight">
  <div class="container bento-grid">
    <div class="glass-card span-6 reveal" style="padding:2rem">
      <h2 class="section-title" style="font-size:1.5rem">Interests</h2>
      <ul style="margin-top:1rem;color:var(--ink-soft);line-height:2">
        {% for item in site.data.profile.interests %}
        <li>{{ item }}</li>
        {% endfor %}
      </ul>
    </div>
    <div class="glass-card glass-card--accent span-6 reveal" style="padding:2rem">
      <h2 class="section-title" style="font-size:1.5rem">Current Work</h2>
      <p style="margin-top:1rem;color:var(--ink-soft);line-height:1.75">{{ site.data.profile.current_work }}</p>
      <a href="{{ '/experience/' | relative_url }}" class="btn btn--primary" style="margin-top:1.5rem">View Experience</a>
    </div>
  </div>
</section>

<section class="section section--tight">
  <div class="container reveal">
    <h2 class="section-title">Certifications</h2>
    <div class="skills-cloud" style="margin-top:1.5rem">
      {% for cert in site.data.certifications %}
      <span class="skill-pill">{{ cert }}</span>
      {% endfor %}
    </div>
  </div>
</section>

<section class="section section--tight">
  <div class="container reveal markdown-body">
    <h2 class="section-title">Achievements</h2>
    <ul>
      {% for item in site.data.achievements %}
      <li>{{ item }}</li>
      {% endfor %}
    </ul>
    <p><strong>Languages:</strong> {{ site.data.profile.languages | join: ", " }}</p>
  </div>
</section>
