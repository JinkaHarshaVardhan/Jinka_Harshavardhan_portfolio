---
layout: default
title: About
subtitle: From classical ML to deep learning, computer vision, LLMs, and agentic systems.
description: About Jinka Harshavardhan — education, journey, and skills.
permalink: /about/
---

<div class="container sections-stack">
  <header class="glass-card section-glass reveal page-header" style="text-align:center">
    <h1 class="section-title">{{ page.title }}</h1>
    <p class="section-subtitle" style="margin:0.75rem auto 0">{{ page.subtitle }}</p>
  </header>

  <section class="section section--tight" style="padding-top:0">
    <div class="glass-card section-glass reveal markdown-body">
      {{ site.data.profile.summary | markdownify }}
    </div>
  </section>

  <section class="section section--tight" style="padding-top:0">
    <div class="glass-card section-glass reveal">
      <h2 class="section-title">My Journey</h2>
      <div class="journey-path" style="margin-top:1.25rem">
        {% for step in site.data.profile.journey_steps %}
        <span class="step">{{ step }}</span>
        {% unless forloop.last %}<span class="arrow">→</span>{% endunless %}
        {% endfor %}
      </div>
    </div>
  </section>

  <section class="section section--tight" style="padding-top:0">
    <div class="glass-card section-glass reveal">
      <h2 class="section-title">Education</h2>
      <div class="timeline" style="margin-top:1.5rem">
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

  <section class="section section--tight" style="padding-top:0">
    <div class="glass-card section-glass reveal">
      <h2 class="section-title">Technical Skills</h2>
      <div class="grid-2 reveal-stagger" style="margin-top:1.5rem">
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

  <section class="section section--tight" style="padding-top:0">
    <div class="bento-grid">
      <div class="glass-card section-glass span-6 reveal">
        <h2 class="section-title" style="font-size:1.5rem">Interests</h2>
        <ul style="margin-top:1rem;color:var(--ink-soft);line-height:2">
          {% for item in site.data.profile.interests %}
          <li>{{ item }}</li>
          {% endfor %}
        </ul>
      </div>
      <div class="glass-card glass-card--accent section-glass span-6 reveal">
        <h2 class="section-title" style="font-size:1.5rem">Current Work</h2>
        <p style="margin-top:1rem;color:var(--ink-soft);line-height:1.75">{{ site.data.profile.current_work }}</p>
        <a href="{{ '/experience/' | relative_url }}" class="btn btn--primary" style="margin-top:1.5rem">View Experience</a>
      </div>
    </div>
  </section>

  <section class="section section--tight" style="padding-top:0">
    <div class="glass-card section-glass reveal">
      <h2 class="section-title">Certifications</h2>
      <div class="skills-cloud" style="margin-top:1.25rem">
        {% for cert in site.data.certifications %}
        <span class="skill-pill">{{ cert }}</span>
        {% endfor %}
      </div>
    </div>
  </section>

  <section class="section section--tight" style="padding-top:0;padding-bottom:var(--section-gap)">
    <div class="glass-card section-glass reveal markdown-body">
      <h2 class="section-title">Achievements</h2>
      <ul style="margin-top:1rem">
        {% for item in site.data.achievements %}
        <li>{{ item }}</li>
        {% endfor %}
      </ul>
      <p style="margin-top:1rem"><strong>Languages:</strong> {{ site.data.profile.languages | join: ", " }}</p>
    </div>
  </section>
</div>
