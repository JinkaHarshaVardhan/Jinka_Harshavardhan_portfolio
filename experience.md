---
layout: default
title: Experience
subtitle: Industry roles where research meets production-grade AI engineering.
description: Professional experience at Immerso.ai and Mainflow.
permalink: /experience/
---

<header class="page-header container">
  <h1 class="section-title reveal">{{ page.title }}</h1>
  <p class="section-subtitle reveal" style="margin:0 auto">{{ page.subtitle }}</p>
</header>

<section class="section section--tight">
  <div class="container" style="display:flex;flex-direction:column;gap:2rem">
    {% include experience-list.html %}
  </div>
</section>

<section class="section">
  <div class="container reveal" style="max-width:var(--page-max)">
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
