---
name: shadcn
description: Guidelines and instructions for writing, refactoring, and maintaining components built on shadcn/ui.
---

# shadcn/ui Component Skill Definition

This skill details the patterns, structures, and coding standards for all shadcn/ui components used within this project.

## Core Component Principles

1. **Design System Integration**:
   - Never use hardcoded colors (e.g. `bg-zinc-50` or `text-neutral-900`) inside components.
   - Always map to the appropriate CSS variable theme utility classes:
     - Backdrop: `bg-background`
     - Card Surfaces: `bg-card`
     - Primary Color: `bg-primary`, `text-primary-foreground`
     - Borders: `border-border`
     - Text colors: `text-foreground` or `text-muted-foreground`
     - Secondary/Action states: `bg-accent`, `hover:bg-accent`, `text-accent-foreground`

2. **Claymorphic spec adaptation**:
   - Use `--radius` variable mappings: `rounded-lg` translates to `calc(var(--radius) - 4px)` and `rounded-xl` to `calc(var(--radius) - 2px)`.
   - Apply shadow classes (`shadow-sm`, `shadow-md`, `shadow-lg`) which map to the custom clay shadow properties defined in `globals.css`.

3. **Accessibility**:
   - All interactive elements must have clear focus rings (`focus-visible:ring-3 focus-visible:ring-ring/50`).
   - Use correct ARIA roles and keyboard activation defaults where appropriate.

## CLI Usage Reference

Always use the CLI to add elements rather than copy-pasting from online components:
```bash
npx shadcn@latest add <component_name>
```
If you need to check alignment or differences against the default registry:
```bash
npx shadcn@latest diff
```
