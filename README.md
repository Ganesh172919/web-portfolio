# Ganesh Kumar Reddy - AI Portfolio

A production-grade, research-lab aesthetic portfolio website showcasing AI Architecture and GenAI Engineering expertise.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 🎨 Features

- 🌌 **Neural Network Background** - Interactive canvas-based particle animation
- ⌨️ **Command Palette** - Quick navigation with Ctrl+K
- 🎯 **Interactive Skills Graph** - Category-based skill visualization
- 📊 **Project Case Studies** - Detailed deep-dives into each project
- 🔬 **Research Lab Section** - Current experiments and future roadmap
- 📱 **Fully Responsive** - Mobile-first design approach
- ⚡ **Performance Optimized** - Dynamic imports, lazy loading

## 🏃 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Navigate to client directory
cd client

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the portfolio.

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
client/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with SEO
│   │   ├── page.tsx        # Main homepage
│   │   └── globals.css     # Global styles & design system
│   ├── components/
│   │   ├── layout/         # Header, Footer
│   │   ├── sections/       # Hero, About, Projects, etc.
│   │   └── interactive/    # NeuralBackground, CommandPalette
│   ├── data/
│   │   └── resume.ts       # All portfolio data
│   └── lib/
│       └── utils.ts        # Utility functions
├── tailwind.config.js      # Custom Tailwind theme
└── package.json
```

## 🎯 Sections

1. **Hero** - Animated landing with rotating tags
2. **About** - Philosophy and education timeline
3. **Projects** - Filterable project grid with deep-dives
4. **Research** - Current experiments and future roadmap
5. **Skills** - Interactive category-based visualization
6. **Achievements** - Competitive programming and hackathons
7. **Blog** - Knowledge sharing (coming soon)
8. **Contact** - Form and social links

## 🚀 Deployment

This project is optimized for Vercel deployment:

```bash
# Build and deploy
vercel
```

## 📄 License

MIT License

---

Built with ❤️ by J. Ganesh Kumar Reddy
