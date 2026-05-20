# GitHub Pages

**Live site:** https://jinkaharshavardhan.github.io/Jinka_Harshavardhan_portfolio/

## Push failed with 403?

Git was using the wrong account (`harshavardhaneros`). Fix:

```powershell
cmdkey /delete:git:https://github.com
git push -u origin main
```

Sign in as **JinkaHarshaVardhan** when prompted (browser or Personal Access Token).

Or run: `.\push-github.ps1`

## Enable hosting

1. [Repo Settings → Pages](https://github.com/JinkaHarshaVardhan/Jinka_Harshavardhan_portfolio/settings/pages)
2. **Source:** GitHub Actions
3. Wait for **Actions → Deploy GitHub Pages** to finish (green checkmark)

The workflow `.github/workflows/pages.yml` builds Jekyll and deploys automatically.
