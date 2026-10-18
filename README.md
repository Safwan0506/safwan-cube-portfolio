# Cube Portfolio

**An interactive 3D cube-based portfolio website with AI chatbot assistant.**

![Screenshot](./public/screenshot.png)

## Overview

Cube Portfolio is a creative developer portfolio built around a 3D rotating cube as the primary navigation element. Visitors click on cube faces to explore different sections -- Accueil, A Propos & CV, Projets, and Contact -- while an orbital ring and floating particles bring the scene to life. The site ships with a bilingual FR/EN toggle and an AI chatbot sidebar named **Orion** for conversational interaction.

## Features

- **3D Cube Navigation** -- Click on cube faces to navigate between sections, powered by Three.js and React Three Fiber
- **Orbital Ring & Particles** -- Animated ring and star-field background surrounding the cube
- **4 Portfolio Sections** -- Accueil (Home), A Propos & CV (About & Resume), Projets (Projects), Contact
- **AI Chatbot "Orion"** -- Conversational sidebar assistant with a sleek panel interface
- **Bilingual Support** -- FR/EN language toggle throughout the site
- **Animated Loading Screen** -- Typewriter effect intro sequence
- **Skill Progress Bars** -- Visual percentage indicators for technical skills
- **ROOM//XX Project Gallery** -- Styled project showcase cards
- **Warm Cream Palette** -- `#f5f0e8` background tones for internal pages with Playfair Display serif headings
- **Smooth Animations** -- Page transitions and micro-interactions via Framer Motion

## Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-0.186-black?style=flat-square&logo=three.js)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-14-FF0050?style=flat-square&logo=framer&logoColor=white)

| Category | Technologies |
|---|---|
| Framework | Next.js 16 (App Router), React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| 3D Engine | Three.js, React Three Fiber, Drei |
| Animation | Framer Motion, react-type-animation |
| Particles | tsparticles, @tsparticles/react |
| Icons | react-icons |

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn / pnpm / bun)

### Installation

```bash
# Clone the repository
git clone https://github.com/safwan-djazouli/safwan-cube-portfolio.git
cd safwan-cube-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
safwan-cube-portfolio/
├── public/                     # Static assets
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Entry page
│   │   └── globals.css         # Global styles
│   └── components/
│       ├── chatbot/
│       │   └── Orion.tsx       # AI chatbot sidebar
│       ├── cube/
│       │   └── CubeView.tsx    # 3D cube scene & navigation
│       ├── pages/
│       │   ├── AccueilPage.tsx  # Home section
│       │   ├── AProposPage.tsx  # About & CV section
│       │   ├── ProjetsPage.tsx  # Projects gallery
│       │   └── ContactPage.tsx  # Contact form
│       └── ui/
│           ├── LoadingScreen.tsx # Animated loading intro
│           ├── Navbar.tsx        # Top navigation bar
│           └── StarsBackground.tsx # Star-field particles
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Author

**Safwan Djazouli** -- Full-Stack & AI Developer

Student at KEYCE Informatique Douala

- GitHub: [github.com/safwan-djazouli](https://github.com/safwan-djazouli)
- LinkedIn: [linkedin.com/in/safwan-djazouli](https://linkedin.com/in/safwan-djazouli)

## License

This project is licensed under the [MIT License](LICENSE).
