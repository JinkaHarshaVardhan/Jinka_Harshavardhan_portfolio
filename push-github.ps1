# Push portfolio to GitHub as JinkaHarshaVardhan
# Run this script in PowerShell from resume_builder/code

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

Write-Host "Remote:" -ForegroundColor Cyan
git remote -v

Write-Host ""
Write-Host "Clearing old GitHub login (harshavardhaneros)..." -ForegroundColor Yellow
cmdkey /delete:git:https://github.com 2>$null

Write-Host ""
Write-Host "When Git asks you to sign in:" -ForegroundColor Green
Write-Host "  1. Choose 'Sign in with your browser' OR use a Personal Access Token"
Write-Host "  2. Log in as: JinkaHarshaVardhan (NOT harshavardhaneros)"
Write-Host "  3. Token needs scope: repo (full control of private repositories)"
Write-Host ""
Write-Host "Create token: https://github.com/settings/tokens"
Write-Host ""

git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "Success! Enable Pages:" -ForegroundColor Green
    Write-Host "https://github.com/JinkaHarshaVardhan/Jinka_Harshavardhan_portfolio/settings/pages"
    Write-Host "Source: GitHub Actions"
    Write-Host ""
    Write-Host "Live site (after workflow runs):"
    Write-Host "https://jinkaharshavardhan.github.io/Jinka_Harshavardhan_portfolio/"
}
