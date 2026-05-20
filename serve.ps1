# Local Jekyll preview — run from resume_builder/code
# Requires Ruby (winget: RubyInstallerTeam.RubyWithDevKit.3.3)

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

# Refresh PATH so ruby/bundle are found after a fresh Ruby install
$env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" +
            [System.Environment]::GetEnvironmentVariable("Path", "User")

if (-not (Get-Command ruby -ErrorAction SilentlyContinue)) {
    Write-Host "Ruby is not installed or not on PATH." -ForegroundColor Red
    Write-Host "Install with: winget install RubyInstallerTeam.RubyWithDevKit.3.3"
    Write-Host "Then close this terminal, open a new one, and run: .\serve.ps1"
    exit 1
}

if (-not (Test-Path "Gemfile.lock")) {
    Write-Host "Running bundle install..."
    bundle install
}

Write-Host "Starting Jekyll at http://127.0.0.1:4000 (Ctrl+C to stop)"
bundle exec jekyll serve --livereload
