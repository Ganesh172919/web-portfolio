# Architecture Documentation

## System Overview

This is a **Next.js 15 App Router** portfolio website for J. Ganesh Kumar Reddy, a Generative AI Engineer. The site serves as both a professional portfolio and an interactive learning platform for AI engineering concepts.

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 15.1.12 |
| Language | TypeScript | ^5.7.3 |
| UI Library | React | ^19.0.0 |
| Styling | Tailwind CSS | ^3.4.17 |
| Animation | Framer Motion | ^11.15.0 |
| 3D Rendering | Three.js + React Three Fiber | Latest |
| Animation Engine | GSAP | Latest |
| Data Visualization | D3.js | Latest |
| Icons | Lucide React | ^0.469.0 |
| Markdown | react-markdown + remark-gfm | ^10.1.0 |
| Deployment | Vercel | — |

## Directory Structure

```
client/src/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (Server Component)
│   ├── page.tsx                  # Homepage (Client Component)
│   ├── globals.css               # Global styles + design tokens
│   ├── error.tsx                 # Global error boundary
│   ├── not-found.tsx             # Custom 404 page
│   ├── loading.tsx               # Root loading state
│   ├── sitemap.ts                # Dynamic sitemap generation
│   ├── robots.ts                 # Robots.txt generation
│   ├── blog/
│   │   ├── layout.tsx            # Blog sub-layout
│   │   ├── page.tsx              # Blog listing (Server Component)
│   │   ├── BlogListClient.tsx    # Blog list interactivity
│   │   ├── error.tsx             # Blog error boundary
│   │   ├── loading.tsx           # Blog loading skeleton
│   │   └── [slug]/
│   │       ├── page.tsx          # Individual post (SSG)
│   │       └── BlogPostClient.tsx # Post rendering
│   └── learn/
│       ├── layout.tsx            # Learning platform layout
│       └── page.tsx              # Learning hub with interactive demos
├── components/
│   ├── layout/
│   │   ├── Header.tsx            # Fixed navigation header
│   │   └── Footer.tsx            # Site footer
│   ├── sections/
│   │   ├── Hero.tsx              # Landing section
│   │   ├── About.tsx             # About/philosophy
│   │   ├── Experience.tsx        # Work experience timeline
│   │   ├── Projects.tsx          # Filterable project showcase
│   │   ├── Research.tsx          # Research experiments
│   │   ├── Skills.tsx            # Skills visualization
│   │   ├── Achievements.tsx      # Achievements & awards
│   │   ├── Blog.tsx              # Blog preview section
│   │   └── Contact.tsx           # Contact form
│   ├── interactive/
│   │   ├── CommandPalette.tsx    # Ctrl+K command palette
│   │   ├── NeuralBackground.tsx  # Canvas particle animation
│   │   ├── RotatingText.tsx      # Auto-cycling text
│   │   ├── ArchitectureVisualizer.tsx  # 3D architecture diagram
│   │   └── SkillsConstellation.tsx     # 3D skills star-field
│   └── learn/
│       ├── RAGPipelineVisualizer.tsx       # RAG pipeline explainer
│       └── AgentCommunicationVisualizer.tsx # Multi-agent visualizer
├── data/
│   └── resume.ts                 # Centralized portfolio data
├── lib/
│   ├── utils.ts                  # Utility functions
│   └── blog.ts                   # Blog data layer (filesystem)
└── content/
    └── posts/                    # Markdown blog posts
```

## Data Flow

### Homepage Data Flow

```
resume.ts (single source of truth)
    │
    ├──→ page.tsx (imports all section components)
    ├──→ Header.tsx (navigation, personalInfo)
    ├──→ Footer.tsx (personalInfo, navigation)
    ├──→ CommandPalette.tsx (projects, personalInfo)
    ├──→ Hero.tsx (personalInfo, rotatingTags)
    ├──→ About.tsx (personalInfo, education)
    ├──→ Experience.tsx (technicalExperience, openSourceContributions)
    ├──→ Projects.tsx (projects)
    ├──→ Research.tsx (research)
    ├──→ Skills.tsx (skills)
    ├──→ Achievements.tsx (achievements)
    ├──→ Blog.tsx (blogPreview)
    └──→ Contact.tsx (personalInfo)
```

### Blog Data Flow (Server → Client)

```
Markdown files (src/content/posts/)
    │
    ├──→ lib/blog.ts (fs read + gray-matter parse)
    │       │
    │       ├──→ app/blog/page.tsx (Server Component)
    │       │       └──→ BlogListClient.tsx (Client Component)
    │       │
    │       └──→ app/blog/[slug]/page.tsx (Server Component, SSG)
    │               └──→ BlogPostClient.tsx (Client Component)
```

## Component Architecture Patterns

### Server/Client Component Split

- **Server Components**: Data fetching, metadata generation, SSG
- **Client Components**: Interactivity, animations, browser APIs

### Code Splitting

- All below-fold sections use `next/dynamic` with skeleton loading
- `NeuralBackground` and `CommandPalette` load with `ssr: false`
- 3D components are lazy-loaded to avoid bloating the main bundle

### Animation Pattern

Every section uses a consistent Framer Motion pattern:
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
```

### Design System

The glassmorphism design system is defined in `globals.css`:
- `.glass` — backdrop blur + semi-transparent background
- `.glass-card` — glass effect with border and padding
- `.btn-primary` / `.btn-secondary` — gradient buttons
- `.text-gradient` — gradient text effect
- `.section` / `.container-custom` — layout containers

## Performance Optimizations

1. **Image Optimization**: AVIF/WebP via Next.js `<Image>`
2. **Package Import Optimization**: Tree-shaking for lucide-react and framer-motion
3. **Static Asset Caching**: 1-year immutable cache for images/fonts
4. **Code Splitting**: Dynamic imports for all non-critical components
5. **Console Removal**: Production builds strip console.log
6. **SSG**: Blog posts pre-rendered at build time

## Security

- **Security Headers**: X-Content-Type-Options, X-Frame-Options, X-XSS-Protection
- **No Secrets**: Fully client-side, no API keys in code
- **Markdown Sanitization**: react-markdown handles XSS in blog content
