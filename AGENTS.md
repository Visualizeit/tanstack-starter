## Communication Style

In all interactions and commit messages, be extremely concise and sacrifice grammar for the sake of concision.

## Package Manager

Use **pnpm** exclusively.

## UI Solution

- **Mantine** - Primary component library
- **TailwindCSS** - Utility-first CSS framework

## Coding Style

### Function Declaration

Always use **arrow functions with default exports**.

### Type Definitions

Prefer **interface** over type.

### Variable Naming

Avoid abbreviated variable names. Use descriptive, full names.

### Occam's Razor Principle

If unnecessary, do not add complexity:

- Use component default styles
- Avoid extra style props or className unless required
- Keep implementations simple

### Component Library Priority

Prefer Mantine components and hooks over third-party libraries or native HTML.

### Styling Priority

1. Mantine default styles
2. Mantine style props (use theme system variables like `sm`, `md`, `lg` - avoid hardcoded values)
3. TailwindCSS utilities
4. Custom CSS (last resort)

### Utility Libraries

Prefer utility library es-toolkit over native implementations to simplify logic.

### Assertions

Use **es-toolkit's invariant** (`import { invariant } from 'es-toolkit/util'`) for asserting nullable values.
