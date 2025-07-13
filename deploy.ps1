# Deploy script for GitHub Pages
Write-Host "Preparing for GitHub Pages deployment..."

# Add homepage field for GitHub Pages
$packageJson = Get-Content "package.json" -Raw
$packageJson = $packageJson -replace '"private": true,', '"private": true,`n  "homepage": "https://oscarwika.github.io/test",'
Set-Content "package.json" $packageJson

Write-Host "Building and deploying..."
npm run deploy

# Remove homepage field for local development
$packageJson = Get-Content "package.json" -Raw
$packageJson = $packageJson -replace '`n  "homepage": "https://oscarwika.github.io/test",', ''
Set-Content "package.json" $packageJson

Write-Host "Deployment complete! Homepage field removed for local development." 