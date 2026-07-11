# ChatCN CRM Dashboard Outscale

This repository serves as a learner resource for the **AI Catalyst C2 deep dive into Antigravity**.

It features a high-fidelity, interactive CRM/Admin Dashboard built using **Next.js 16**, **Tailwind CSS v4**, **shadcn/ui**, and **Recharts**, customized with a premium **Claymorphism** design system.

---

## 🎨 Claymorphism Styling System

This codebase is configured with a custom-built claymorphic color palette and rounding structure configured inside your global style definitions:

* **Soft Shapes**: Rounding is configured with `--radius: 1.25rem` to give cards and sidebars a friendly, curved clay appearance.
* **Colors**: Premium warm-gray background (`rgb(231, 229, 228)`) paired with elegant indigo primaries (`rgb(99, 102, 241)`).
* **Depth**: Uses multilayered custom shadow variables to produce a physical, tactile clay-extrusion effect.

---

## 🚀 Key Features

* **Collapsible Navigation (`sidebar-07`)**: A space-saving sidebar with smooth transitions that collapses into functional icon triggers.
* **Dark Mode Support**: A built-in theme toggle inside the user profile dropdown to switch between light and dark modes instantly.
* **Interactive Data Visualization**: Area and Pie charts configured with fast `300ms` animations and responsive scaling.
* **Hardware Accelerated Transitions**: Uses GPU rendering (`transform-gpu`) for buttery-smooth animations.

---

## 🛠️ How to Run Locally

First, install the dependencies:

```bash
npm install
```

Then, start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the dashboard in action.
