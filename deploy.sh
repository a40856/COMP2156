#!/bin/bash
set -e  # Exit immediately if a command exits with a non-zero status

# Build the project
npm run build

# Configure Git for the deployment
git config user.name "a40856"
git config user.email "siukwan.kwok@georgebrown.com"

# Add the build directory to the Git staging area
git add -f build

# Commit the changes
git commit -m "Deploy to GitHub Pages"

# Push to the gh-pages branch using the GitHub token
git push --force --quiet "https://${GITHUB_TOKEN}@github.com/a40856/comp2156.git" main:gh-pages
