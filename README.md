# Web Portfolio (Next.js)

A modern, App Router portfolio site built with Next.js + TypeScript + Tailwind. The app lives in `client/` and is configured for Vercel.

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons

## Highlights

- Interactive “neural” background animation
- Command palette for quick navigation (`Ctrl+K` / `Cmd+K`)
- Modular sections (Hero, About, Projects, Research, Skills, Achievements, Blog, Contact)
- Mobile-first responsive UI

## Local Development

### Prerequisites

- Node.js 18+ (recommended: latest LTS)
- npm

### Install & Run

```bash
cd client
npm install
npm run dev
```

Open http://localhost:3000

### Useful Scripts

From inside `client/`:

```bash
npm run build
npm run start
npm run lint
npm run type-check
```

## Customization

- Portfolio content is centralized in `client/src/data/resume.ts`.
- Page layout and global styling:
	- `client/src/app/page.tsx`
	- `client/src/app/layout.tsx`
	- `client/src/app/globals.css`
- Sections live in `client/src/components/sections/`.
- Interactive components live in `client/src/components/interactive/`.

## Project Structure

```
.
├── README.md
├── vercel.json              # Vercel build config (points to client/)
└── client/
		├── package.json
		├── next.config.js
		├── tailwind.config.js
		├── public/
		└── src/
				├── app/
				├── components/
				│   ├── interactive/
				│   ├── layout/
				│   └── sections/
				├── data/
				└── lib/
```

## Deployment (Vercel)

This repo includes `vercel.json` so Vercel builds the Next.js app from `client/`.

- Import the repo into Vercel.
- Framework preset: Next.js (auto-detected)
- No additional settings required unless you add environment variables.

Optional CLI deploy:

```bash
npm i -g vercel
vercel
```

## License

MIT
