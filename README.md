<h1>MonkAI 🎵🤖</h1>
<b>AI-powered Text-to-Music Generator with a Free Music Library</b>

MonkAI is a web application that transforms your text prompts into original music using the Audiocraft library. Whether you need background scores, instrumental tracks, or creative soundscapes, MonkAI lets you generate music instantly or browse through a curated library of copyright-free music for any project.

<hr>

<h3>✨ Features</h3>
1.🎼 Text-to-Music Generation – Describe your idea in words, and MonkAI will compose it into audio using AI.

2.📚 Royalty-Free Music Library – Access a collection of pre-generated, high-quality, copyright-free tracks for commercial or personal use.

3.⚡ Fast & Scalable Backend – Powered by FastAPI and Python for quick processing and API integration.

4.🖥 Interactive Frontend – Built with TypeScript for a responsive and intuitive user experience.

5.🔒 Copyright-Safe – All music generated and provided is free from licensing restrictions.

<hr>

<h3>🛠 Tech Stack</h3>

1.Frontend	- TypeScript, React (or your frontend framework)

2.Backend	- Python, FastAPI

3.AI Engine	- Audiocraft (Facebook AI Research)

<hr>

<h3>📂 Project Structure</h3><br>

├── README.md<br>
├── requirements.txt<br>
├── backend/<br>
│ └── src/<br>
│ ├── app.py<br>
│ ├── music_generator.py<br>
│ ├── test_model.py<br>
│ └── utils/<br>
│ ├── save_medium.py<br>
│ ├── save_small.py<br>
│ └── try.py<br>
└── frontend/<br>
├── README.md<br>
├── middleware.ts<br>
├── next.config.js<br>
├── package.json<br>
├── postcss.config.js<br>
├── tailwind.config.js<br>
├── tsconfig.json<br>
├── .eslintrc.json<br>
├── app/<br>
│ ├── globals.css<br>
│ ├── layout.tsx<br>
│ ├── page.tsx<br>
│ ├── api/<br>
│ │ └── radios/<br>
│ │ └── route.ts<br>
│ ├── dashboard/<br>
│ │ └── page.tsx<br>
│ ├── generate/<br>
│ │ └── page.tsx<br>
│ ├── login/<br>
│ │ └── page.tsx<br>
│ ├── signup/<br>
│ │ └── page.tsx<br>
│ └── tracks/<br>
│ ├── client.tsx<br>
│ ├── loading.tsx<br>
│ └── page.tsx<br>
├── components/<br>
│ ├── dashboard-slideshow.tsx<br>
│ ├── music-visualizer.tsx<br>
│ ├── ProtectedRoute.tsx<br>
│ ├── kokonutui/<br>
│ │ └── hero-geometric.tsx<br>
│ ├── layout/<br>
│ │ └── header.tsx<br>
│ └── ui/<br>
│ ├── badge.tsx<br>
│ ├── button.tsx<br>
│ ├── card.tsx<br>
│ ├── input.tsx<br>
│ ├── label.tsx<br>
│ ├── separator.tsx<br>
│ ├── slider.tsx<br>
│ └── textarea.tsx<br>
├── contexts/<br>
│ └── AuthContext.tsx<br>
├── hooks/<br>
│ ├── use-mobile.tsx<br>
│ └── useAuth.ts<br>
├── lib/<br>
│ ├── auth.ts<br>
│ ├── firebase.ts<br>
│ └── utils.ts<br>
└── pages/<br>
└── api/<br>
└── tracks.ts<br>

<hr>
