# Shivam Raj — 3D Portfolio

Interactive portfolio built with **React**, **Vite**, **Three.js**, **React Three Fiber**, **Drei**, **Framer Motion**, and **react-scroll**.

## Prerequisites

- [Node.js](https://nodejs.org/) 20+ recommended

## Install

```bash
npm install
```

## Development

```bash
npm run dev
```

Open the URL shown in the terminal. With `base: '/portfolio/'` in `vite.config.js`, the dev server expects:

`http://localhost:5173/portfolio/`

> **GitHub Pages:** Keep `base: '/portfolio/'` when deploying to `https://<username>.github.io/portfolio/`. For a root-only local URL (`http://localhost:5173/`), temporarily set `base: '/'` in `vite.config.js`.

## Production build

```bash
npm run build
```

Output is written to `dist/`. Preview the production build locally:

```bash
npm run preview
```

When hosted at `https://<username>.github.io/portfolio/`, deploy the contents of `dist` to the branch or folder your Pages site uses (often `gh-pages` or `/docs` from `main`).

## Lint

```bash
npm run lint
```
