---
layout: default
title: Experience
subtitle: Industry roles where research meets production-grade AI engineering.
description: Professional experience at Immerso.ai and Mainflow.
permalink: /experience/
---

<div class="container sections-stack">
  <header class="glass-card section-glass reveal page-header" style="text-align:center">
    <h1 class="section-title">{{ page.title }}</h1>
    <p class="section-subtitle" style="margin:0.75rem auto 0">{{ page.subtitle }}</p>
  </header>

  <section class="section section--tight" style="padding-top:0">
    <div class="sections-stack">
      {% include experience-list.html %}
    </div>
  </section>

  <section class="section section--tight" style="padding-top:0;padding-bottom:var(--section-gap)">
    <div class="glass-card section-glass reveal">
      <h2 class="section-title">Resume PDF</h2>
      <p class="section-subtitle" style="margin:1rem 0 1.5rem">Place your exported resume at <code>assets/resume.pdf</code> to enable download and preview.</p>
      <div style="display:flex;gap:1rem;flex-wrap:wrap;margin-bottom:2rem">
        <a href="{{ site.resume_pdf | relative_url }}" class="btn btn--primary" download>Download PDF</a>
        <a href="{{ site.resume_pdf | relative_url }}" class="btn btn--ghost" target="_blank">Open in new tab</a>
      </div>
      <div class="glass-card" style="padding:0.5rem;overflow:hidden">
        <object data="{{ site.resume_pdf | relative_url }}" type="application/pdf" class="pdf-embed" title="Resume PDF">
          <p style="padding:2rem;text-align:center;color:var(--ink-muted)">
            PDF preview unavailable. Add <code>assets/resume.pdf</code> to the repo.
          </p>
        </object>
      </div>
    </div>
  </section>
</div>
