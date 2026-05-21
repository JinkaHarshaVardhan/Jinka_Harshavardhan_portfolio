# Editing your portfolio (Markdown + YAML)

This site uses **Jekyll** (same idea as `saisriteja.github.io`): you edit Markdown and YAML, GitHub builds HTML automatically.

## What to edit

| What you want to change | Edit this file |
|-------------------------|----------------|
| Name, hero text, taglines, stats, journey, interests | `_data/profile.yml` |
| Skills groups | `_data/skills.yml` |
| Education | `_data/education.yml` |
| Jobs / internships | `_data/experience.yml` |
| Project cards on Projects page | `_data/projects.yml` |
| Certifications | `_data/certifications.yml` |
| Achievements | `_data/achievements.yml` |
| Social links (GitHub, LinkedIn, etc.) | `_data/social.yml` |
| Site email, phone, GitHub username | `_config.yml` |
| Research page body | `research.md` |
| CV project details | `projects/cv.md` |
| LLM project details | `projects/llm.md` |
| Agentic AI details | `projects/agentic-ai.md` |
| Research projects details | `projects/research-projects.md` |
| Extra home page notes | `index.md` |
| Profile photo | Replace `assets/images/1000146738.jpg` (or change path in `_config.yml` → `profile_image`) |
| Resume PDF | Replace `assets/resume.pdf` (path set in `_config.yml` → `resume_pdf`) |

You do **not** need to edit HTML. Layouts in `_layouts/` and `_includes/` wrap your content with the fluid-art design.

## Local preview (Windows)

**Ruby is required.** If `bundle` is not recognized, install Ruby then **open a new terminal**:

```powershell
winget install RubyInstallerTeam.RubyWithDevKit.3.3
```

Then from `resume_builder/code`:

```powershell
.\serve.ps1
```

Or manually:

```powershell
cd D:\calculator-demo\resume_builder\code
bundle install
bundle exec jekyll serve
```

Open **http://127.0.0.1:4000**. After editing Markdown/YAML, refresh the browser (Jekyll auto-rebuilds when `serve` is running).

## Deploy

Push to GitHub. The workflow `.github/workflows/portfolio-pages.yml` runs Jekyll and publishes `_site` to GitHub Pages.

## Adding a new project

1. Add an entry to `_data/projects.yml` (`id`, `title`, `category`, `summary`, `detail_url`, …).
2. Create `projects/my-project.md` with front matter (`layout: project`, `title`, `permalink`, …) and Markdown body.
3. Optionally add a hub link under `project_categories` in `_config.yml`.

## Markdown tips

- Use `## Heading` for sections (Problem, Tech Stack, Results).
- Code blocks use triple backticks.
- Links: `[text](url)` or Kramdown attributes: `[GitHub](url){: .btn .btn--primary}`
