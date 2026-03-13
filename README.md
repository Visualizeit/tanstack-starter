# TanStack Starter

A modern, production-ready starter template for building full-stack React applications with server-side rendering.

## Tech Stack

- **TanStack Start** - Full-stack React framework with SSR
- **React 19** - Latest React with concurrent features
- **TypeScript** - Strict type safety
- **Mantine UI** - Component library with custom theme
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Next-generation build tool
- **Biome** - Fast linting and formatting

## Getting Started

### Requirements

- [Node.js](https://nodejs.org/en) (LTS version recommended)
- [pnpm](https://pnpm.io)

### Installation

1. Clone the repository:

```sh
git clone https://github.com/Visualizeit/tanstack-starter
cd tanstack-starter
```

2. Install dependencies:

```sh
pnpm install
```

3. Start the development server:

```sh
pnpm dev
```

## Available Scripts

| Command      | Description                            |
| ------------ | -------------------------------------- |
| `pnpm dev`   | Start development server with HMR      |
| `pnpm build` | Build for production with SSR          |
| `pnpm start` | Start production server                |
| `pnpm check` | Run linter and formatter checks        |
| `pnpm fix`   | Auto-fix linting and formatting issues |

## Project Structure

```
src/
├── routes/              # File-based routing
├── components/          # React components
├── configs/             # Theme and configuration files
├── router.ts            # Router setup
└── app.css              # Global styles
```

## Features

- File-based routing with type-safe navigation
- Server-side rendering (SSR) via Nitro
- Custom Mantine theme with Tailwind integration
- Hot Module Replacement (HMR)
- Git hooks for code quality (auto-format on commit)
- Path aliases (`@/*` imports)
- TypeScript strict mode

## Customization

- **Theme**: Modify `src/configs/mantineTheme.ts`
- **Colors**: Update brand colors in the theme configuration
- **Layout**: Edit `src/components/layout/MainLayout.tsx`
