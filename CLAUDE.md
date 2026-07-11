# Claude Agent Rules

This file guides Claude Code and other Anthropic agents when working in this workspace.

## Development Checklist

- Refer to [AGENTS.md](file:///Users/harshith-macbook-pro-m3/Desktop/Dashboard/AGENTS.md) for root system constraints and styling rules.
- Maintain strict TypeScript type definitions. Avoid using `any` at all costs.
- Prefer Next.js Server Components for data fetching where possible, and Client Components (`"use client"`) only for user interaction boundaries.
- When generating UI elements, ensure theme variables (`bg-background`, `bg-card`, `border-border`) are used exclusively.
- Verify any changes by triggering a compilation check: `npm run build`.
