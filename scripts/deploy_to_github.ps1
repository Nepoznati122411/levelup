<#
deploy_to_github.ps1

Usage: Run from project root in PowerShell:
  pwsh -ExecutionPolicy Bypass -File .\scripts\deploy_to_github.ps1

This script will:
 - Optionally move src/assets/videolevelup.mp4 -> public/videos/hero.mp4
 - Initialize git (if needed), add files, commit
 - If `gh` CLI is installed: prompt for GitHub username and create repo then push
 - Otherwise: prompt for GitHub repo URL and set remote then push
#>

param(
    [switch]$MoveVideo = $true,
    [string]$RepoName = "levelup",
    [switch]$Public = $true
)

function Ensure-Dir {
    param($p)
    if (-not (Test-Path $p)) { New-Item -ItemType Directory -Path $p | Out-Null }
}

# Move video to public/videos if requested
if ($MoveVideo) {
    $src = Join-Path -Path $PSScriptRoot -ChildPath "..\src\assets\videolevelup.mp4" | Resolve-Path -ErrorAction SilentlyContinue
    if ($src) {
        $destDir = Join-Path -Path $PSScriptRoot -ChildPath "..\public\videos"
        Ensure-Dir $destDir
        $dest = Join-Path $destDir -ChildPath "hero.mp4"
        try {
            Move-Item -Path $src -Destination $dest -Force
            Write-Host "Moved video to public/videos/hero.mp4"
        } catch {
            Write-Warning "Failed to move video: $_"
        }
    } else {
        Write-Host "No local src/assets/videolevelup.mp4 found — skipping move."
    }
}

# Create .gitignore if missing (basic)
$gitignorePath = Join-Path -Path $PSScriptRoot -ChildPath "..\.gitignore"
if (-not (Test-Path $gitignorePath)) {
    @"
node_modules
dist
.vscode
.env
*.log
"@ | Out-File -FilePath $gitignorePath -Encoding UTF8
    Write-Host "Created .gitignore"
}

Push-Location (Join-Path $PSScriptRoot '..')

# init git if needed
if (-not (Test-Path ".git")) { git init }

# commit
git add .
try {
    git commit -m "Initial commit: project for LevelUp studio" -q
} catch {
    Write-Host "No changes to commit or commit failed: $_"
}

# Use gh if available
if (Get-Command gh -ErrorAction SilentlyContinue) {
    $username = Read-Host "Enter your GitHub username (used for repo path)")
    $visibility = if ($Public) { "--public" } else { "--private" }
    Write-Host "Creating repo via gh..."
    gh repo create "$username/$RepoName" $visibility --source=. --push
    if ($LASTEXITCODE -eq 0) { Write-Host "Repo created and pushed via gh." } else { Write-Warning "gh repo create failed." }
} else {
    Write-Host "gh CLI not found.\nPlease create a repository on GitHub (https://github.com/new) named '$RepoName' and paste the HTTPS remote URL below."
    $remote = Read-Host "Enter remote URL (HTTPS), e.g. https://github.com/USERNAME/$RepoName.git"
    if ($remote) {
        try {
            git remote remove origin 2>$null
        } catch {}
        git remote add origin $remote
        git branch -M main
        Write-Host "Pushing to remote..."
        git push -u origin main
    } else {
        Write-Warning "No remote provided — aborting push."
    }
}

Pop-Location

Write-Host "Done. If any step failed, please inspect output and try manually."
