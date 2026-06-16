# Design System Documentation

## Color Palette

### Backgrounds
| Token | Value | Usage |
|---|---|---|
| `bg-primary` | `#0a0a0f` | Main background |
| `bg-secondary` | `#12121a` | Card backgrounds |
| `bg-tertiary` | `#1a1a24` | Elevated surfaces |

### Accent Colors
| Token | Value | Usage |
|---|---|---|
| `accent-primary` | `#6366f1` (Indigo) | Primary actions, links |
| `accent-secondary` | `#8b5cf6` (Violet) | Secondary accents |
| `accent-purple` | `#a855f7` | Decorative elements |
| `accent-cyan` | `#22d3ee` | Info states |
| `accent-emerald` | `#10b981` | Success states |

### Glass Effects
| Token | Value | Usage |
|---|---|---|
| `glass-light` | `rgba(255,255,255,0.05)` | Subtle glass |
| `glass-medium` | `rgba(255,255,255,0.1)` | Standard glass |

## Typography

### Fonts
- **Sans**: Inter (300-800)
- **Mono**: JetBrains Mono (400-600)

### Scale
| Class | Size | Weight | Usage |
|---|---|---|---|
| `.heading-xl` | 3.5-5rem | 800 | Hero titles |
| `.heading-lg` | 2-3rem | 700 | Section headings |
| `.heading-md` | 1.5-2rem | 600 | Subsection headings |
| `.heading-sm` | 1.25-1.5rem | 600 | Card titles |
| `.body-lg` | 1.125rem | 400 | Lead paragraphs |
| `.body-md` | 1rem | 400 | Body text |
| `.label` | 0.875rem | 500 | Labels, tags |

## Spacing

| Token | Value | Usage |
|---|---|---|
| `--section-padding` | `clamp(4rem, 10vw, 8rem)` | Section vertical padding |
| Container | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` | Content width |

## Components

### Glass Card
```html
<div class="glass-card p-6">
  <!-- Content with glassmorphism effect -->
</div>
```

### Buttons
```html
<button class="btn-primary">Primary Action</button>
<button class="btn-secondary">Secondary Action</button>
<button class="btn-ghost">Ghost Button</button>
```

### Gradient Text
```html
<span class="text-gradient">Gradient Text</span>
```

### Badges
```html
<span class="badge">Default</span>
<span class="badge-success">Success</span>
<span class="badge-warning">Warning</span>
```

## Animations

### Entrance Animations (Framer Motion)
Every section uses consistent entrance animations:
- `whileInView` with `viewport={{ once: true }}`
- Staggered children via `containerVariants`
- Fade up via `itemVariants`

### CSS Animations
| Class | Effect |
|---|---|
| `animate-fade-in` | Fade in |
| `animate-fade-up` | Fade up |
| `animate-slide-up` | Slide up |
| `animate-scale-in` | Scale in |
| `animate-glow-pulse` | Pulsing glow |
| `animate-float` | Floating motion |
| `animate-gradient-shift` | Gradient animation |

### Hover Effects
| Class | Effect |
|---|---|
| `hover-lift` | Translate up + shadow |
| `card-shine` | Shine sweep on hover |
| `link-animated` | Underline animation |

## Responsive Breakpoints

| Breakpoint | Width | Usage |
|---|---|---|
| `sm` | 640px | Small phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Desktop |
| `xl` | 1280px | Large desktop |

## Accessibility

- All interactive elements have focus-visible styles
- Color contrast meets WCAG AA on dark backgrounds
- Touch targets are minimum 44px on mobile
- Reduced motion media query respected
- Print styles hide decorative elements
