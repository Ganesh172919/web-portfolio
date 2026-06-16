# Component Documentation

## Component Catalog

### Layout Components

#### `Header.tsx`
**Purpose**: Fixed navigation header with scroll-aware glass effect.

**Features**:
- Scroll detection (glass effect after 50px)
- Active section tracking via IntersectionObserver
- Desktop navigation with animated active indicator
- Mobile hamburger menu with staggered animations
- Command palette hint (Ctrl+K)
- Social links (GitHub, LinkedIn)
- Route-aware navigation (hash links + Next.js routes)

**Props**: None (reads from `resume.ts`)

**State**: `isScrolled`, `isMobileMenuOpen`, `activeSection`

---

#### `Footer.tsx`
**Purpose**: Site footer with brand, links, and social info.

**Features**:
- Three-column grid layout
- Dynamic copyright year
- "Student crafted" badge
- Scroll-to-top button

---

### Section Components

#### `Hero.tsx`
**Purpose**: Full-viewport landing section.

**Features**:
- Profile image with gradient border (next/image)
- Animated gradient name text
- Role badges with staggered entrance
- Rotating focus areas (RotatingText integration)
- Highlighted keywords in description
- CTA buttons (Projects, Research, Resume, Contact)
- Animated stat counters (500+ problems, 4+ projects, 9.33 CGPA, 100+ endpoints)
- Mouse-tracking gradient orb
- Floating decorative icons

**Sub-components**: `AnimatedCounter`, `FloatingIcon`, `RotatingText`

---

#### `About.tsx`
**Purpose**: Identity, philosophy, and education.

**Features**:
- 3-card identity grid (Researcher, Learner, Builder)
- 4-card philosophy grid
- Education timeline with CGPA badges

---

#### `Experience.tsx`
**Purpose**: Technical experience timeline.

**Features**:
- Timeline layout with gradient line
- Technology tags (max 8 with "+N more")
- Highlight bullets
- Open source contributions grid

---

#### `Projects.tsx`
**Purpose**: Filterable project showcase.

**Features**:
- Category filter (All, AI Agents, Full-Stack, Performance)
- Animated filtering with AnimatePresence
- Tech stack tags
- GitHub/Demo/Deep Dive links
- Featured project highlighting

---

#### `Skills.tsx`
**Purpose**: Interactive skills visualization.

**Features**:
- 7 category tabs with animated indicator
- Animated progress bars with shine effect
- Featured skill highlighting
- Hover glow effects

---

#### `Achievements.tsx`
**Purpose**: Competitive programming, hackathons, academic excellence.

**Features**:
- Coding profile cards with external links
- Hackathon cards
- Academic achievement cards
- Summary stats bar

---

#### `Blog.tsx`
**Purpose**: Blog preview section on homepage.

**Features**:
- Data sourced from `resume.ts` (single source of truth)
- Category-specific icons
- Featured badges
- "View All Posts" CTA

---

#### `Contact.tsx`
**Purpose**: Contact methods and form.

**Features**:
- Contact method cards (Email, GitHub, LinkedIn, LeetCode)
- Availability status with pulsing indicator
- Contact form with simulated submission
- Three-state button animation

---

### Interactive Components

#### `CommandPalette.tsx`
**Purpose**: Ctrl+K/Cmd+K command palette overlay.

**Features**:
- Keyboard shortcut (Ctrl+K to toggle, Escape to close)
- Commands grouped by category (Navigation, Projects, Links)
- Search filtering
- Dynamic project commands from `resume.ts`

---

#### `NeuralBackground.tsx`
**Purpose**: Canvas-based particle network animation.

**Features**:
- HTML5 Canvas API (no library)
- Particle density based on screen area
- Mouse interaction (purple connections near cursor)
- Edge bounce physics
- 60fps requestAnimationFrame loop

---

#### `ArchitectureVisualizer.tsx`
**Purpose**: 3D interactive architecture diagram.

**Features**:
- React Three Fiber + Drei
- 3D nodes representing services
- Animated data flow particles
- Click-to-inspect detail panel
- OrbitControls for free camera
- Color-coded by service type
- Legend and instructions overlay

---

#### `SkillsConstellation.tsx`
**Purpose**: 3D star-field skills visualization.

**Features**:
- Skills as glowing stars in 3D space
- Size = proficiency level
- Color = category
- Constellation lines within categories
- Category labels in 3D
- Click for skill details

---

### Learning Components

#### `RAGPipelineVisualizer.tsx`
**Purpose**: Interactive RAG pipeline explainer.

**Features**:
- 6-stage pipeline visualization
- Click each stage for detailed explanations
- What/Why/How/Tradeoffs for each stage
- Tool recommendations
- Real-world project examples
- Example prompt display

---

#### `AgentCommunicationVisualizer.tsx`
**Purpose**: Multi-agent DAG routing animation.

**Features**:
- 5 agent nodes based on Personal Finance Assistant
- 4 routing scenarios (Simple, Parallel, Sequential, Full)
- Play/pause/reset animation controls
- Animated message particles between agents
- Click agents for detailed info
- Message flow log

---

## Utility Functions (`lib/utils.ts`)

| Function | Purpose |
|---|---|
| `cn(...inputs)` | Merge class names with clsx + tailwind-merge |
| `formatDate(date)` | Format date string to "Month Year" |
| `scrollToSection(id)` | Smooth scroll to element by ID |
| `getInitials(name)` | Extract initials from full name |
| `truncateText(text, max)` | Truncate text with ellipsis |

## Data Layer (`data/resume.ts`)

Single source of truth for all portfolio content. Exports:
- `personalInfo` — Name, email, social links, roles, summary
- `education` — Academic entries with CGPA
- `projects` — Project details with architecture info
- `skills` — 7 categories with proficiency levels
- `achievements` — Coding, hackathons, academic, startup
- `technicalExperience` — Work experience entries
- `openSourceContributions` — OSS contributions
- `research` — Current experiments and future roadmap
- `navigation` — Nav links (hash + route)
- `socialLinks` — Social media links
- `blogPreview` — Blog post previews for homepage
