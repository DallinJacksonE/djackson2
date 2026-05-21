# djackson2 - Personal Portfolio

Personal website and developer portfolio built with modern web technologies. This project is designed to be highly maintainable, using MDX as a single source of truth for case studies, and a scalable CSS module architecture.

## Tech Stack

* **Core:** React, TypeScript, Vite
* **Routing:** React Router
* **Content Management:** MDX (Markdown + JSX) compiled by Vite
* **Styling:** CSS Modules
* **Deployment:** Docker & Express deployed to home server via cloudflare tunnel

## ✨ Features

* **Dynamic MDX Engine:** Write project case studies in Markdown while seamlessly injecting custom React components.
* **Automated Project Grid:** Uses Vite's `import.meta.glob` to automatically generate the portfolio grid based on the `.mdx` files present in the content directory. Includes built-in sorting for pinned and chronological ordering.
* **Semantic Theming & Dark Mode:** Fully functional Light/Dark mode toggle leveraging semantic CSS variables.
* **Responsive Design:** Mobile-first navigation with a collapsing hamburger menu and responsive layout structures.
* **Dockerized Deployment:** Production-ready multi-stage Docker build served via a lightweight Express server (configured with Express 5.0 wildcards).

## 📂 Project Structure

```text
djackson2/
├── src/
│   ├── assets/          # Static assets, images, and resume PDF
│   ├── components/      # Reusable UI components (Navbar, MDXRenderer, etc.)
│   ├── content/         # Single source of truth for MDX files
│   │   └── projects/    # .mdx files for project case studies
│   ├── hooks/           # Custom React hooks (e.g., useTheme)
│   ├── views/           # Page components (Home, Projects, About, Resume)
│   ├── App.tsx          # Routing configuration
│   └── main.tsx         # Application entry point & global styles
├── Dockerfile           # Multi-stage Docker build configuration
├── docker-compose.yml   # Docker Compose orchestration
├── server.js            # Express server for production routing
└── vite.config.ts       # Vite & MDX plugin configuration
```

## 🛠️ Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. Open `http://localhost:5173` in your browser.

## 📝 Adding New Projects

To add a new project case study, simply create a new `.mdx` file in the `src/content/projects/` directory. No manual array updates are needed.

Example file structure (`my-new-project.mdx`):
```mdx
export const meta = {
  title: "Project Name",
  description: "A brief description of the project.",
  tags: ["React", "TypeScript", "Vite"],
  date: "2024-05-19",
  is_pinned: 1 // Optional: Pins the project to the top of the grid
};

# Project Overview
Your markdown content goes here. You can use standard markdown alongside React components.

<YourCustomReactComponent />
```

## 🐳 Docker Deployment

This project is configured for easy containerization. The multi-stage build compiles the Vite application and serves the `dist` folder using Express to properly handle React Router's client-side routing.

1. **Build and spin up the container:**
   ```bash
   docker-compose up -d --build
   ```
2. The site will be live at `http://localhost:3000`.
