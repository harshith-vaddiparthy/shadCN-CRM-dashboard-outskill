<div align="center">
  <img src="./public/logo.png" alt="Outskill Logo" width="120" style="margin-bottom: 20px;" />
  
  # ShadCN CRM Dashboard Outskill
  
  [![LinkedIn Connect](https://img.shields.io/badge/LinkedIn-Connect-blue?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/harshith-vaddiparthy/)
  
  ### 🚀 An Advanced, Production-Ready CRM Blueprint Built for Modern Web Engineering Learners

  [![React](https://img.shields.io/badge/React-19-blue.svg?logo=react&logoColor=white)](https://react.dev)
  [![Next.js](https://img.shields.io/badge/Next.js-16-black.svg?logo=next.js&logoColor=white)](https://nextjs.org)
  [![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8.svg?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
  [![shadcn/ui](https://img.shields.io/badge/UI_Library-ShadCN-000000.svg)](https://ui.shadcn.com)
  [![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
  
  This repository is an educational resource developed as part of the **AI Catalyst C2 deep dive into Antigravity**. It demonstrates how to orchestrate a high-fidelity, interactive client-side dashboard using next-generation tooling.
  
  [🌐 Live Repository](https://github.com/harshith-vaddiparthy/shadCN-CRM-dashboard-outskill) • [🤝 Connect on LinkedIn](https://www.linkedin.com/in/harshith-vaddiparthy/)
</div>

---

## 📖 Deep-Dive Architecture Guide for Learners

This codebase is structured to teach modern React component orchestration and state synchronization patterns:

```
shadCN-CRM-dashboard-outskill/
├── src/
│   ├── app/
│   │   ├── globals.css          # Unified Tailwind v4 Layer Configuration & Theme Variables
│   │   ├── layout.tsx           # Application Root shell, theme injection, and providers
│   │   └── dashboard/
│   │       └── page.tsx         # Responsive dashboard page layout & chart integrations
│   ├── components/
│   │   ├── app-sidebar.tsx      # Sidebar controller with dataset mapping
│   │   ├── nav-main.tsx         # Collapsible list-item navigation component
│   │   ├── nav-projects.tsx     # Supplemental workspace links list
│   │   ├── nav-user.tsx         # User Profile component containing the Theme Switcher
│   │   ├── team-switcher.tsx    # Sidebar workspace switcher
│   │   └── ui/                  # Atomized base UI primitives (Button, Dropdown, Sidebar, etc.)
│   └── hooks/
│       └── use-mobile.ts        # Sidebar responsiveness listener
```

---

## 🎨 Theme Mechanics: The Claymorphism Spec

Rather than styling with standard solid flat colors, this repository implements a custom **Claymorphism** design system. Learners should inspect [globals.css](file:///Users/harshith-macbook-pro-m3/Desktop/Dashboard/src/app/globals.css) to understand how these CSS custom properties are wired:

### 1. Warm-Gray Backdrop and Indigo Primary Colors
* **Light Mode Background**: `rgb(231, 229, 228)`
* **Light Mode Card**: `rgb(245, 245, 244)`
* **Light Mode Primary Indigo**: `rgb(99, 102, 241)`
* **Dark Mode Background**: `rgb(30, 27, 24)`
* **Dark Mode Card**: `rgb(44, 40, 37)`
* **Dark Mode Primary Indigo**: `rgb(129, 140, 248)`

### 2. Rounded Borders & Tactile Shadow Layering
* Rounding is scaled to `--radius: 1.25rem` globally.
* Custom multi-layered box-shadow values recreate a physical, soft-clay tactile feel:
  ```css
  --shadow-sm: 2px 2px 10px 4px hsl(240 4% 60% / 0.18), 2px 1px 2px 3px hsl(240 4% 60% / 0.18);
  ```

---

## ⚡ Key Coding Patterns to Explore

### 🌗 Client-Side Dark Mode Toggle
We implement a zero-flash hydration-safe theme injector inside [layout.tsx](file:///Users/harshith-macbook-pro-m3/Desktop/Dashboard/src/app/layout.tsx) that checks preferences and local storage prior to rendering:
```html
<script
  dangerouslySetInnerHTML={{
    __html: `
      try {
        if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } catch (_) {}
    `,
  }}
/>
```
And a corresponding toggler is active in [nav-user.tsx](file:///Users/harshith-macbook-pro-m3/Desktop/Dashboard/src/components/nav-user.tsx).

### 🚀 Hardware-Accelerated Animations
To keep transitions feeling crisp, transitions use Tailwind's `transform-gpu` to offload work to the graphics card, paired with snappy `150ms` ease-out curves on the sidebar triggers.

---

## 🏃 Getting Started

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/harshith-vaddiparthy/shadCN-CRM-dashboard-outskill.git
cd shadCN-CRM-dashboard-outskill
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) inside your web browser.

---

## 🤝 Connect and Collaborate

Developed as an educational sandbox. For questions, feedback, or to discuss agentic software development, connect on LinkedIn:

<p align="center">
  <a href="https://www.linkedin.com/in/harshith-vaddiparthy/">
    <img src="https://img.shields.io/badge/LinkedIn-Harshith%20Vaddiparthy-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge" />
  </a>
</p>
