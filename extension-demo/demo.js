// demo.js — simplified, safe frontend without real API

document.addEventListener("DOMContentLoaded", () => {
  const fileInput = document.getElementById("resume-input");
  const analyzeBtn = document.getElementById("analyze-btn");
  const statusEl = document.getElementById("status");
  const resultEl = document.getElementById("result");

  if (!fileInput || !analyzeBtn) return;

  analyzeBtn.addEventListener("click", () => {
    const file = fileInput.files?.[0];

    if (!file) {
      alert("Please upload a resume (PDF).");
      return;
    }

    statusEl.textContent = "Analyzing resume with AI (demo)...";
    resultEl.textContent = "";

    // backend request imitation / OpenAI
    setTimeout(() => {
      statusEl.textContent = "Analysis complete (demo).";

      resultEl.innerHTML = `
        <h3>Demo AI Feedback</h3>
        <ul>
          <li><strong>Overall Score:</strong> 7.8/10</li>
          <li><strong>ATS-friendliness:</strong> Good, but consider adding more keywords from the job description.</li>
          <li><strong>Summary:</strong> Try making your summary more specific and achievement-driven.</li>
          <li><strong>Experience:</strong> Quantify impact (numbers, KPIs, revenue, time saved).</li>
        </ul>
        <p>This is a demo-only version. In production, the extension sends the PDF to a Node.js backend, which processes the text and calls OpenAI API for detailed feedback.</p>
      `;
    }, 1200);
  });
});
