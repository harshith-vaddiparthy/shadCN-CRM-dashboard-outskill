# Agent Workspace Rules

This repository is optimized for Next.js 16, Tailwind CSS v4, shadcn/ui components, and Supabase database interactions. AI agents must follow these rules without exception.

## Technical Stack & Architecture

- **Framework**: Next.js 16.2.10 (using App Router, Turbopack for compilation)
- **React**: React 19.2.4
- **CSS Engine**: Tailwind CSS v4 (configured inline in `src/app/globals.css`)
- **UI Base**: shadcn/ui components mapped to base-nova style configuration
- **Charts**: Recharts
- **Database Backend**: Supabase (via `@supabase/supabase-js` and client/server CLI schemas)

## Core Styling Conventions

1. **Strict Theme Adherence**:
   - Never use direct tailwind neutral colors (`bg-white`, `bg-zinc-50`, `text-slate-800`, etc.) in layouts or custom components.
   - Always use the semantic CSS variables (`bg-background`, `bg-card`, `text-foreground`, `text-muted-foreground`, `border-border`, etc.).

2. **Animation Controls**:
   - All transition animations must be responsive and fast (150ms to 100ms timings).
   - Use `ease-out` transitions rather than linear.
   - Use `transform-gpu` to offload rendering to the device hardware.

3. **Claymorphic Specs**:
   - Respect the custom `--radius: 1.25rem` variables and the tactile shadows (`shadow-sm`, `shadow-md`, `shadow-lg`) configured in `globals.css`.

## Development Commands

- Run Development Server: `npm run dev`
- Build Package: `npm run build`
- Run Linter: `npm run lint`
- Create DB Migration: `npx supabase migration new <migration_name>`
