📌 Ambitrove Innovation Website

Official website for Ambitrove Innovation (Pty) Ltd, a South African technology company building SaaS platforms, mobile & web apps, and digital solutions.
This repository contains the source code for the public-facing company website.

🚀 Tech Stack

Framework & Language: React

- TypeScript

Bundler/Dev Server: Vite

UI Components:

shadcn/ui
→ core UI system

KokonutUI
→ selected components (tables, forms, etc.)

OriginUI
→ extended creative components (gradients, hero sections, modals)

Styling: Tailwind CSS
(utility-first CSS framework)

Animations: GSAP
for scroll + motion effects

Icons: lucide-react

Routing: React Router

```
📂 Project Structure
src/
├── app/ # Root app setup (routing, providers, etc.)
│ ├── App.tsx
│ └── routes.tsx
├── features/
│ ├── home/
│ │ ├── index.tsx
│ │ ├── components/
│ │ │ ├── Navbar.tsx
│ │ │ ├── Sidebar.tsx
│ │ │ └── HeroSection.tsx
│ │ └── hooks/
│ ├── about/
│ │ └── index.tsx
│ └── contact/
│ └── index.tsx
├── shared/ # Reusable across features
│ ├── components/
│ │ └── Button.tsx
│ └── utils/
├── types/
│ └── index.d.ts
├── styles/
│ └── index.css
└── index.tsx
```

🌐Pages
Home → Hero section, services, call-to-action
About Us → Company story, mission & vision, leadership
Services → SaaS, custom apps, Web3 solutions, consulting
Projects / Case Studies → Showcase internal & client builds
Careers → Future job postings, internships, collaboration invites
Contact → Form, email, LinkedIn, location

⚡ Getting Started

Clone the repo

git clone git@github.com:Ambitrove-Innovation/ambitrove-web.git
cd ambitrove-web

Install dependencies

npm install

Start development server

npm run dev

Build for production

npm run build

Preview production build

npm run preview

🎨 UI/UX Guidelines

Light & Dark mode support

Minimalist grid-based layouts with soft shadows & rounded corners

Gradient/Geometric hero section with motion effects

Consistency across shadcn, KokonutUI, and OriginUI

Responsive design → Mobile-first

🧑‍💻 Contribution

Use feature branches: feature/your-feature-name

Open PRs into main after review

Keep commits clean and descriptive

📦 Deployment

Prototype hosting: Netlify

Production hosting: TBD (options: Netlify, Vercel, or custom server)

🛠 Roadmap

Implement full landing page with animations

Add services & portfolio pages

Hook contact form to backend/email service

Deploy MVP to production domain (ambitrove.com)

Add blog/resources section (long-term)

```

```
