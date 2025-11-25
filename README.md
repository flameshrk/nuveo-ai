# nuveo-ai
AI-powered Chrome extension demo for resume analysis (frontend + UX, backend omitted)

This repository contains a **frontend demo** of **Nuveo** – an AI-powered Chrome extension that analyzes resumes and provides structured, ATS-oriented feedback.

The production version of Nuveo is a fully functional product that includes:
- A Node.js (Express) backend
- OpenAI API integration
- License-based paywall (Gumroad)
- Deployed proxy server and domain

Those parts are **intentionally not included** here, because the full product is being sold as a commercial digital asset.


## What this demo shows

- Chrome Extension UI (Manifest v3)
- Resume upload flow (PDF)
- Basic client-side logic for triggering “analysis”
- Example of how AI feedback is rendered to the user
- Clean, production-style HTML/CSS/JS structure

The goal is to demonstrate:
- My ability to design and build UX for an AI tool
- My experience with Chrome Extensions
- My approach to structuring frontend logic for SaaS-like products


## Tech stack (demo)

- HTML5, CSS3, JavaScript (ES6+)
- Chrome Extensions (Manifest v3)
- Basic client-side file handling (PDF upload)
- Mocked AI logic (no real API calls in this repo)

The production version additionally uses:

- Node.js + Express
- OpenAI API (GPT-based analysis)
- Gumroad Licensing API (paywall)
- Deployed backend on a Node hosting platform


## Project structure

```text
extension-demo/
  manifest.json       # simplified Manifest v3 config
  popup.html          # main UI for upload
  popup.css
  results.html        # view with structured feedback
  results.css
  demo.js             # mocked client-side "AI" logic

screenshots/
  popup.png
  results.png
  flow.png

docs/
  architecture.md
  product-overview.md
