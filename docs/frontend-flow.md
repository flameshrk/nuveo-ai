# Frontend Flow — Chrome Extension

This document describes the UI/UX flow inside the Nuveo Chrome Extension.


## Files

- `popup.html` — Upload screen  
- `results.html` — Feedback view  
- `popup.css` / `results.css` — styling  
- `demo.js` — mocked JS logic (demo version)  


## UI Flow

### 1. User opens popup
- Sees upload drag-and-drop area
- Uploads PDF resume

### 2. Client-side processing
- PDF.js extracts text
- Shows loading state

### 3. Simulated “AI Analysis” (demo)
- Status: "Analyzing resume…"
- Displays structured output

### 4. Results page
- Overall suggestions  
- Section-by-section improvements  
- Clean layout with well-organized feedback  


## Visual Flow

![Popup](../screenshots/popup.png)  
![Results](../screenshots/payment.png)


## UX Design Principles

- Minimal clicks (upload → result)  
- Calm color palette  
- Clear hierarchy of information  
- Strong readability for long AI outputs  
- Mobile-responsive layout  

The interface is designed to feel like a lightweight SaaS product inside the browser.
