---
layout: default
title: About
description: About Jinka Harshavardhan — experience, skills, education, and achievements.
permalink: /about/
---

<div class="container sections-stack">
  <header class="glass-card section-glass card-equal reveal page-header" style="text-align:center">
    <h1 class="section-title">{{ page.title }}</h1>
  </header>

  <section class="section section--tight" style="padding-top:0">
    <div class="glass-card section-glass card-equal reveal">
      <h2 class="section-title">Experience</h2>
      <div class="sections-stack" style="margin-top:1.25rem;gap:1.25rem">
        {% include experience-list.html %}
      </div>
    </div>
  </section>

  <section class="section section--tight" style="padding-top:0">
    <div class="glass-card section-glass card-equal reveal">
      <h2 class="section-title">Technical Skills</h2>
      <div class="skills-grid-uniform" style="margin-top:1.5rem">
        {% for group in site.data.skills %}
        <div class="glass-card card-equal skill-group-card">
          <h3 class="skill-group-card__title">{{ group.group }}</h3>
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
    <div class="glass-card section-glass card-equal reveal">
      <h2 class="section-title">Certifications</h2>
      <ul class="cert-list">
        {% for cert in site.data.certifications %}
        <li>
          <a href="{{ cert.url }}" target="_blank" rel="noopener">{{ cert.name }}</a>
          <span class="cert-list__issuer">— {{ cert.issuer }}</span>
        </li>
        {% endfor %}
      </ul>
    </div>
  </section>

  <section class="section section--tight" style="padding-top:0">
    <div class="glass-card section-glass card-equal reveal">
      <h2 class="section-title">Education</h2>
      <div class="timeline" style="margin-top:1.5rem">
        {% for edu in site.data.education %}
        <div class="timeline-item" style="padding:1.25rem 0 1.25rem 0.5rem">
          <h3>{{ edu.degree }}</h3>
          <p class="meta">{{ edu.school }} · {{ edu.date }}</p>
          <p>{{ edu.detail }}</p>
        </div>
        {% endfor %}
      </div>
    </div>
  </section>

  <section class="section section--tight" style="padding-top:0;padding-bottom:var(--section-gap)">
    <div class="glass-card section-glass card-equal reveal">
      <h2 class="section-title">Achievements</h2>
      <ul class="achievements-list">
        {% for item in site.data.achievements %}
        <li>{{ item }}</li>
        {% endfor %}
      </ul>
    </div>
  </section>
</div>
