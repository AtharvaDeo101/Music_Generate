<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>MonkAI — Text → Music · AI Music Generator</title>

  <style>
    :root{
      --bg:#0f1724;
      --card:#0b1220;
      --muted:#94a3b8;
      --accent:#7c3aed;
      --glass: rgba(255,255,255,0.03);
      --maxw:1000px;
      --mono: "SFMono-Regular", Menlo, Monaco, "Roboto Mono", monospace;
      color-scheme: dark;
    }
    html,body{height:100%}
    body{
      margin:0;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
      background: linear-gradient(180deg,#071022 0%, #071025 60%);
      display:flex;
      justify-content:center;
      padding:32px 16px;
      color:#e6eef8;
      -webkit-font-smoothing:antialiased;
      -moz-osx-font-smoothing:grayscale;
    }

    .container{
      width:100%;
      max-width:var(--maxw);
      background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.012));
      border:1px solid rgba(255,255,255,0.03);
      border-radius:12px;
      padding:28px;
      box-shadow: 0 8px 30px rgba(2,6,23,0.7);
    }

    header{display:flex;gap:16px;align-items:center;margin-bottom:18px}
    .logo{
      width:68px;height:68px;border-radius:10px;
      background:linear-gradient(135deg,var(--accent),#0ea5a4);
      display:flex;align-items:center;justify-content:center;font-weight:700;color:white;font-size:20px;
      box-shadow: 0 6px 18px rgba(124,58,237,0.16);
    }
    h1{margin:0;font-size:22px}
    p.lead{margin:6px 0 0;color:var(--muted)}

    .meta {margin-top:16px;display:flex;gap:8px;flex-wrap:wrap}
    .badge {
      background:var(--glass);
      padding:6px 10px;border-radius:999px;font-size:13px;color:var(--muted);
      border:1px solid rgba(255,255,255,0.02)
    }

    section {margin-top:20px;padding-top:8px;border-top:1px dashed rgba(255,255,255,0.03)}
    h2{font-size:16px;margin:0 0 12px}
    ul{margin:8px 0 0 20px;color:var(--muted)}
    li{margin:6px 0}

    table {width:100%;border-collapse:collapse;margin-top:10px;background:transparent}
    th,td {text-align:left;padding:10px;border-bottom:1px dashed rgba(255,255,255,0.02);color:var(--muted)}
    th {color:#cbd5e1;font-weight:600}

    pre {
      background: rgba(2,6,23,0.6);
      padding:12px;border-radius:8px;border:1px solid rgba(255,255,255,0.02);
      overflow:auto;font-family:var(--mono);font-size:13px;color:#dbeafe;margin:12px 0;
    }

    .two-col {display:grid;grid-template-columns:1fr 1fr;gap:18px}
    @media (max-width:820px){ .two-col{grid-template-columns:1fr} }

    .note {background: linear-gradient(90deg, rgba(124,58,237,0.06), rgba(14,165,164,0.03)); padding:12px;border-radius:8px;border:1px solid rgba(255,255,255,0.02); color:var(--muted); font-size:13px}

    footer{margin-top:22px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;color:var(--muted);font-size:13px}
    a {color:var(--accent);text-decoration:none}
    a:hover {text-decoration:underline}
  </style>
</head>
<body>
  <div class="container" role="main" aria-labelledby="title">
    <header>
      <div class="logo" aria-hidden="true">M</div>
      <div>
        <h1 id="title">MonkAI — Text → Music Generator</h1>
        <p class="lead">Generate original music from text prompts using Audiocraft. Includes a curated library of royalty-free tracks and an interactive TypeScript frontend powered by FastAPI.</p>
        <div class="meta">
          <span class="badge">Tech: Python · TypeScript · FastAPI · Audiocraft</span>
          <span class="badge">Features: Text-to-Music · Free library · Interactive UI</span>
        </div>
      </div>
    </header>

    <section aria-labelledby="features">
      <h2 id="features">✨ Features</h2>
      <ul>
        <li><strong>Text-to-Music generation</strong> — Compose music by typing prompts (genre, mood, tempo, instruments).</li>
        <li><strong>Royalty-free Library</strong> — Browse and download pre-generated, copyright-free tracks.</li>
        <li><strong>Interactive Frontend</strong> — Smooth UI built with TypeScript for previewing and editing tracks.</li>
        <li><strong>FastAPI backend</strong> — Lightweight, async endpoints for generation, streaming, and library management.</li>
        <li><strong>Configurable output</strong> — Set duration, style, and quality parameters for each generation request.</li>
      </ul>
    </section>

    <section aria-labelledby="tech">
      <h2 id="tech">🛠 Technology Stack</h2>
      <table>
        <thead>
          <tr><th>Layer</th><th>Technology</th></tr>
        </thead>
        <tbody>
          <tr><td>Frontend</td><td>TypeScript, React (or your preferred framework), Web Audio API</td></tr>
          <tr><td>Backend</td><td>Python, FastAPI, Uvicorn</td></tr>
          <tr><td>AI Engine</td><td>Audiocraft (Facebook AI Research)</td></tr>
          <tr><td>DevOps</td><td>Docker, CI (GitHub Actions), object storage for audio files</td></tr>
        </tbody>
      </table>
    </section>

    <section aria-labelledby="getting-started">
      <h2 id="getting-started">🚀 Getting Started</h2>

      <div class="two-col">
        <div>
          <h3>Prerequisites</h3>
          <ul>
            <li>Node.js (v16+ recommended)</li>
            <li>Python 3.10+</li>
            <li>pip, virtualenv</li>
            <li>Git</li>
            <li>GPU (recommended) for fast generation with Audiocraft — CPU is supported but slower</li>
          </ul>
        </div>

        <div>
          <h3>Quick clone</h3>
          <pre><code>git clone https://github.com/yourusername/monkai.git
cd monkai</code></pre>
        </div>
      </div>

      <h4>Backend setup (FastAPI + Audiocraft)</h4>
      <pre><code># from project root
cd backend
python -m venv venv
# macOS / Linux
source venv/bin/activate
# Windows (PowerShell)
venv\Scripts\Activate.ps1

pip install -r requirements.txt

# run dev server
uvicorn main:app --reload --host 0.0.0.0 --port 8000
</code></pre>

      <h4>Frontend setup (TypeScript)</h4>
      <pre><code>cd frontend
npm install
npm run dev
# open http://localhost:3000 (or the port your dev server uses)</code></pre>

      <div class="note" role="note">
        Note: Replace `requirements.txt` with the Audiocraft and PyTorch versions suitable for your CUDA/PyTorch setup. See Audiocraft docs for compatibility details.
      </div>
    </section>

    <section aria-labelledby="api">
      <h2 id="api">📡 API Endpoints (example)</h2>
      <table>
        <thead>
          <tr><th>Method</th><th>Endpoint</th><th>Description</th></tr>
        </thead>
        <tbody>
          <tr><td>POST</td><td>/api/generate</td><td>Generate a track from a text prompt. Returns metadata & audio file URL or stream.</td></tr>
          <tr><td>GET</td><td>/api/library</td><td>List available royalty-free tracks with metadata (id, title, duration, tags).</td></tr>
          <tr><td>GET</td><td>/api/track/{id}</td><td>Download or stream a specific track.</td></tr>
          <tr><td>POST</td><td>/api/feedback</td><td>Submit feedback about generated audio to improve future models (optional).</td></tr>
        </tbody>
      </table>

      <h4>Example request (JSON)</h4>
      <pre><code>POST /api/generate
Content-Type: application/json

{
  "prompt": "Calm lo-fi piano with soft rain ambience, 90 BPM, 60 seconds",
  "duration_seconds": 60,
  "style": "lofi",
  "seed": 12345
}</code></pre>
    </section>

    <section aria-labelledby="structure">
      <h2 id="structure">📂 Project Structure</h2>
      <pre><code>monkai/
├── backend/
│   ├── main.py               # FastAPI app, route definitions
│   ├── ai/
│   │   ├── audiocraft_wrapper.py
│   │   └── utils.py
│   ├── services/
│   ├── requirements.txt
│   └── Dockerfile
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
├── library/                  # stored royalty-free tracks & metadata (or external blob storage)
└── README.html</code></pre>
    </section>

    <section aria-labelledby="license">
      <h2 id="license">📜 License & Copyright</h2>
      <p style="color:var(--muted)">
        Tracks included in the MonkAI library are provided as <strong>royalty-free</strong> and may be used in commercial and non-commercial projects. You should still attribute if required by your internal policy. Generated tracks by the Audiocraft engine are provided for use under the project's license — verify restrictions if you plan to redistribute models or model weights.
      </p>
    </section>

    <section aria-labelledby="contributing">
      <h2 id="contributing">🤝 Contributing</h2>
      <ul>
        <li>Contributions welcome — open issues to discuss major changes.</li>
        <li>Please follow the repository's code style and test new features thoroughly.</li>
        <li>Include unit tests for backend services where applicable.</li>
      </ul>

      <h4>Suggested workflow</h4>
      <pre><code>git checkout -b feat/your-feature
# implement & test
git commit -am "feat: describe"
git push origin feat/your-feature
# open PR</code></pre>
    </section>

    <section aria-labelledby="security">
      <h2 id="security">🔒 Security & Safety</h2>
      <ul>
        <li>Do not expose model weights or sensitive API keys. Use environment variables and secret stores.</li>
        <li>Consider rate-limiting and auth for generation endpoints to prevent abuse.</li>
        <li>Validate content if running a public library to avoid offensive material (content moderation optional).</li>
      </ul>
    </section>

    <section aria-labelledby="contact">
      <h2 id="contact">📧 Contact</h2>
      <p style="color:var(--muted)">
        Maintainer: <a href="mailto:your.email@example.com">your.email@example.com</a><br>
        Repo: <a href="https://github.com/yourusername/monkai" target="_blank" rel="noopener">github.com/yourusername/monkai</a>
      </p>
    </section>

    <footer>
      <div>Built with ❤️ · Audiocraft · FastAPI · TypeScript</div>
      <div style="text-align:right;color:var(--muted)">© <span id="year"></span> MonkAI — All tracks labeled royalty-free unless otherwise stated</div>
    </footer>
  </div>

  <script>
    // small JS for dynamic year
    document.getElementById('year').textContent = new Date().getFullYear();
  </script>
</body>
</html>
