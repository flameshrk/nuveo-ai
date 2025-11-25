# Nuveo Architecture Overview

This document describes the high-level architecture of the Nuveo Resume Analyzer.  
It explains how the Chrome Extension, backend service, and AI engine interact to generate structured resume feedback.


## High-Level System Diagram

[User Uploads PDF]
↓
[Chrome Extension UI]
↓
Reads PDF client-side (PDF.js)
↓
Sends extracted text → Backend API
↓
[Node.js (Express) Backend]
↓
Constructs prompt → Sends to OpenAI API
↓
Receives structured AI analysis
↓
Returns feedback → Extension Results Page



## Components

### 1. Chrome Extension (Frontend)
- Built using **HTML, CSS, JS** (Manifest V3)
- Handles:
  - PDF upload
  - Text extraction (PDF.js)
  - Displaying loading UI / progress bars
  - Rendering structured results
  - Paywall trigger (production version)

### 2. Backend (Node.js + Express)
- Receives JSON payload containing:
  - Extracted resume text
  - User-selected industry & level
- Loads internal knowledge base (JSON)
- Generates a structured prompt
- Calls OpenAI API using official SDK
- Returns formatted analysis as JSON
- No data is stored (stateless service)

### 3. OpenAI API
- Model used in production: **GPT-4o-mini**
- Generates:
  - Overall suggestions paragraph  
  - ATS-oriented fixes  
  - Improved bullet points  
  - Structured section-by-section review


## Data Flow

1. User selects PDF in popup  
2. Extension extracts text locally (no server upload of the file)  
3. Only **text**, not the file, is sent to backend  
4. Backend enriches data with knowledge-base tips  
5. OpenAI analyzes and formats content  
6. Result returned and displayed in `results.html`  


## Security Considerations

- No resume files are ever uploaded or stored
- No cookies, no analytics
- Only extracted text is temporarily processed
- Backend is stateless
- Paywall uses Gumroad Licensing API (production only, omitted in demo)


## Deployment Architecture (Production)

- Backend deployed on a Node hosting platform
- Extension published to Chrome Web Store
- Domain hosted via Cloudflare
- Frontend website deployed statically

This architecture allows zero-database, low-maintenance operation with high reliability.
