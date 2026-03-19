# TanStack Starter

A modern, production-ready starter template for building full-stack React applications with server-side rendering.

## Tech Stack

- **TanStack Start** - Full-stack React framework with SSR
- **React 19** - Latest React with concurrent features
- **TypeScript** - Strict type safety
- **Mantine UI** - Component library with custom theme
- **Tailwind CSS** - Utility-first CSS framework
- **Vite+** - Unified dev, build, lint, format, and test toolchain
- **Oxlint / Oxfmt** - Linting and formatting via `vp check`

## Getting Started

### Requirements

- [Node.js](https://nodejs.org/en) (LTS version recommended)
- [pnpm](https://pnpm.io)
- [Vite+](https://viteplus.dev/)

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

| Command      | Description                             |
| ------------ | --------------------------------------- |
| `pnpm dev`   | Start development server with HMR       |
| `pnpm build` | Build for production with SSR           |
| `pnpm start` | Start production server                 |
| `pnpm check` | Run Vite+ linting and formatting checks |
| `pnpm fix`   | Auto-fix linting and formatting issues  |

## Features

- File-based routing with SSR via TanStack Start and Nitro
- Mantine UI with Tailwind CSS
- Vite+ workflow for dev, build, lint, and format
- Git hooks via `vp staged`
- TypeScript strict mode
