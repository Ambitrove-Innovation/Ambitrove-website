# Ambitrove Innovation ™Pty Ltd – Company Website

This repository contains the official **company website** for **Ambitrove Innovation Pty Ltd**, a South African-founded technology startup.
Our website is built with modern tools to reflect our mission of delivering impactful digital solutions, showcasing our services, portfolio, and innovation culture.

---

## 📌 Tech Stack

Our website is built using the following technologies:

- **[TypeScript](https://www.typescriptlang.org/)** → Strict typing for safer, scalable code.
- **[React](https://react.dev/)** → Frontend library for building interactive UIs.
- **[Vite](https://vitejs.dev/)** → Lightning-fast build tool and dev server.
- **[React Router DOM](https://reactrouter.com/)** → Client-side routing for seamless navigation.
- **[ShadCN/UI](https://ui.shadcn.com/)** → Beautiful, accessible, and customizable UI components.
- **[KokonutUI](https://kokonutui.com/)** (select components) → Tailwind-based UI collection for design engineers.
- **[OriginUI](https://originui.com/)** (optional components) → Extra high-quality prebuilt UI blocks.
- **[GSAP](https://greensock.com/gsap/)** → Motion library for stunning animations.
- **[Tailwind CSS](https://tailwindcss.com/)** → Utility-first CSS framework for styling.

---

## 🎯 Project Scope

The company website will serve as:

1. **Digital Identity**
   - Showcase Ambitrove’s mission, vision, and services.
   - Build trust with potential clients and partners.

2. **Services Overview**
   - Custom Software Development
   - SaaS Product Development
   - Web3 & Emerging Tech
   - Business Technology Consulting
   - Ongoing Support & Maintenance

3. **Portfolio & Projects**
   - Highlight our in-house and client projects.
   - Demonstrate technical expertise (e.g., ATS Resume Helper with AI feedback).

4. **Team & Careers**
   - Introduce Ambitrove leadership & co-founders.
   - Display open roles and collaboration opportunities.

5. **Client Acquisition & Marketing**
   - Contact forms and call-to-actions to convert visitors into leads.
   - Integrated with company LinkedIn, GitHub, and social media.

## 🌿Branching Strategy

To keep our workflow clean and consistent, we follow these branch naming conventions:

## Main Branch

- **`main`** → The production-ready branch. Always stable.
  - Only merge tested and reviewed code here.
  - Deployments are triggered from this branch.

## Working Branches

- **`fix/...`** → Fixes for specific issues.  
  Example: `fix/layout`, `fix/navbar`.

- **`hotFix`** → Urgent fixes that must go directly into production.  
  Use only when critical.

- **`feature/...`** → New features or major updates.  
  Example: `feature/contact-form`.

- **`code/fix`** → General branch for ongoing code updates, refactors, or maintenance.  
  Ideal for small improvements not tied to a feature.
- **`update/...`** → Updates to business content, configuration, or displayed values without changing application behaviour.  
   Example: `update/pricing`, `update/plan-details`, `update/homepage-copy`.

- **`refactor/...`** → Code restructuring or optimization that improves readability, performance, or maintainability without changing functionality.  
  Example: `refactor/auth-logic`, `refactor/api-structure`.

- **`chore/...`** → Repository maintenance, tooling updates, dependency upgrades, or environment configuration changes.  
  Example: `chore/update-dependencies`, `chore/eslint-config`.

- **`docs/...`** → Documentation additions or improvements.  
  Example: `docs/readme-update`, `docs/api-guide`.

- **`test/...`** → Adding or improving automated tests without modifying application logic.  
  Example: `test/auth-flow`, `test/payment-validation`.

- **`style/...`** → UI, layout, design, or visual presentation changes that do not affect application logic or functionality.  
  Example: `style/button-spacing`, `style/landing-page-theme`, `style/navbar-animation`.

## Team Guidelines

- Always branch from `main` before starting new work.
- Push new branches to the remote so the team can see them:

```
git push -u origin branch-name

```

`Main` → LIVE SITE (customers see this)
`Dev` → Pre-release testing lab

# Clean Professional Workflow For Ambitrove

## Flow should be:

`feature → PR → dev → PR → main`

## Not:

`feature → main directly`

Goal is syncing timelines:
`git switch dev → git pull origin dev`
`git merge main → git push origin dev`

## 🗿About Branch Explosion → When a feature is merged fully:

🙏Delete the feature branch locally AND remotely e.g:
`git branch -d update/pricing`
`git push origin --delete update/pricing`

## FINAL GOAL📝

Make `dev` contain everything `main` has that’s it, timeline synchronization.

## ✅Method 1 (Merge Approach Most Explicit + Team Friendly)

```
git switch dev
git pull origin dev
git merge origin/main
git push origin dev
```

## ✅Method 2 (Pull Main Directly Into Dev)

```
git switch dev
git pull origin main
git push origin dev
```

## Why Method 1 Is Cleaner - Method 1 forces you to:

`Update dev first
Then merge main intentionally`
This avoids weird situations where:

- Your dev branch is outdated locally
- Merge conflicts become chaotic
- History gets messy

---

## 🛠 Development Setup

Clone the repository and install dependencies:

```bash
# Clone repo
git clone git@github.com:Ambitrove-Innovation/ambitrove-web.git

# Navigate into project folder
cd ambitrove-web

# Install dependencies
npm install

# Start development server
npm run dev



🏗 Codebase Structure

We follow a clean and scalable project structure:

src/
 │    ├── components/    #Shared components.
 │    │    ├── ui/
 │    │    │    ├── Navbar.tsx
 │    │    ├── Navbar.tsx              # Root app setup (routing, providers, etc.
 ├── features/
 │    ├── about/         # About page
 │    │    └── aboutPage.tsx
 │    └── contact/       # Contact page
 │         └── contactPage.tsx
 │    ├── home/          # Homepage
 │    │    ├── components/
 │    │    │    ├── Footer.tsx
 │    │    │    ├── HeroSection.tsx
 │    │    │    └── ProjectShowCase.tsx
 │    │    │    ├── ServiceCardOffers.tsx
 │    │    │    ├── Whychoose.tsx
 │    │    ├── homePage.tsx
 ├── lib/             # Reusable across features
 │    ├── components/
 │    │    └── utils.ts
 ├── types/
 │    └── index.d.ts
 ├── App.tsx
 ├── index.css
 ├── main.tsx
 ├── routes.tsx
 ├── vite-env.d.ts
 ├── gitignore.tsx


🌍 Deployment

Netlify → Quick deployment & free tier for prototypes.


Each push to the main branch will trigger an automated build & deployment.

👥 Team
Kamogelo Enoch Mogasoa – Founder & CEO
Dean Christopher Meyer – Co-Founder, CTO & Strategic Shareholder

Leadership Team – CIO, Executives & Strategic Shareholders
📈 Roadmap
✅ Design prototype in Figma
✅ Create GitHub Organization & repo
✅ Develop MVP website (React + TS + ShadCN + GSAP)
✅ Launch website (linked to company domain)
✅ Add company portfolio & projects
✅ Integrate marketing (LinkedIn, TikTok, GitHub showcases)
```
