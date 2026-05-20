# Jinka Harshavardhan — Portfolio (Jekyll)

Fluid-art portfolio powered by **Jekyll**: edit **Markdown** and **YAML**, get HTML on build (inspired by [saisriteja.github.io](https://github.com/saisriteja/saisriteja.github.io)).

**→ See [EDITING.md](EDITING.md) for what file to edit.**

## Palette

White background · `#BFDDF0` (sky) · `#8CC0EB` (ocean)

## Structure

```
_config.yml          Site settings & navigation
_data/*.yml          Structured content (experience, projects, skills, …)
*.md                 Page content (research, about sections, …)
projects/*.md        Project detail pages
_layouts/            HTML shells (fluid background, nav, footer)
_includes/           Reusable fragments
css/  js/  assets/   Static assets
```

## Local dev

**Windows:** If `bundle` is not found, install Ruby (`winget install RubyInstallerTeam.RubyWithDevKit.3.3`), **close and reopen** PowerShell, then:

```powershell
cd resume_builder\code
.\serve.ps1
```

Open http://127.0.0.1:4000

## GitHub Pages

Push to `main`. Action **Deploy portfolio to GitHub Pages** builds with `actions/jekyll-build-pages` and publishes `resume_builder/code`.

Enable **Settings → Pages → Source: GitHub Actions**.

## Add resume PDF

Copy your PDF to `assets/resume.pdf`.
