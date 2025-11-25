# Backend Overview

This document describes the high-level backend architecture used in the production version of **Nuveo**, an AI-powered resume analysis Chrome Extension.  
The backend code is not included in this public repository because it contains proprietary logic and commercial integrations.


## Purpose of the Backend

The backend acts as a lightweight service responsible for:

- Receiving extracted resume text from the Chrome Extension  
- Selecting best practices from an internal knowledge base  
- Constructing a structured prompt for the AI model  
- Communicating with the OpenAI API  
- Formatting the returned analysis  
- Validating paid user access (production only)

The backend is fully stateless and does not store user data.


## API Design

### `POST /analyze`

This is the main endpoint used by the Chrome Extension.

#### Request Body

```json
{
  "resumeText": "Extracted plaintext from user resume",
  "industry": "finance",
  "level": "junior"
}
```

- `resumeText` — text extracted locally from the PDF  
- `industry` — determines which best practices to load  
- `level` — adjusts tone and expectations in the analysis  

Only plaintext is sent to the server. No files are uploaded.

#### Response

```json
{
  "feedback": "<AI-generated structured Markdown resume analysis>"
}
```

The response always contains a fully formatted report ready for display in the extension.


## OpenAI Integration

The backend uses the official **OpenAI Node SDK** to generate structured resume feedback.

Responsibilities include:

- Constructing the prompt  
- Injecting industry best practices  
- Enforcing formatting rules (Markdown)  
- Limiting hallucinations  
- Keeping outputs ATS-friendly  

The production model is optimized for long-form text and predictable structure.


## Knowledge Base

The backend loads a local JSON knowledge base that contains:

- Industry-specific best practices  
- Level-specific expectations (junior, mid, senior)  

This helps the AI generate highly tailored and consistent advice.


## Licensing (Production Only)

The production backend integrates with **Gumroad Licensing API**:

1. The extension sends a license key.  
2. Backend verifies the key with Gumroad.  
3. If valid → resume analysis proceeds.  
4. If invalid → a paywall response is returned.

All validation happens server-side to prevent tampering.


## Security & Privacy

The backend follows a privacy-first design:

- No resume files are uploaded  
- No data is stored  
- No logs contain personal information  
- The server is stateless  
- HTTPS enforced  
- CORS configured only for extension use  

This ensures user resumes remain private at all times.


## Deployment

The backend is deployed on a cloud Node.js hosting platform with:

- Automatic restarts  
- HTTPS  
- Environment variables for API keys  
- Zero-downtime deploys  
- Minimal operational overhead  

This makes the backend easy to maintain and scale.


## Summary

The backend serves as a secure, stateless bridge between the Chrome Extension and the OpenAI API. It handles all heavy logic—prompt construction, knowledge base injection, AI communication, and optional license verification—while ensuring that no user data is stored at any point.
