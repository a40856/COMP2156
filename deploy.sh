#!/bin/bash
set -e
npm run build
git config user.name "a40856"
git config user.email "siukwan.kwok@georgebrown.com"
git add -f build
git commit -m "Deploy to GitHub Pages"
git push --force --quiet "https://${GITHUB_TOKEN}@github.com/a40856/comp2156.git" main:gh-pages
