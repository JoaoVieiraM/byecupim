# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Byecupim** is a premium pest control company website (25 years in business) focused on luxury minimalism branding and portfolio presentation. The site emphasizes authority, sophistication, and engineering excellence rather than direct sales.

## Technology Stack

- **Framework**: React 18+ with Vite
- **Package Manager**: pnpm
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS with custom luxury design system
- **UI Components**: Radix UI primitives
- **Forms**: react-hook-form + Zod validation
- **Icons**: Lucide React (thin line icons for minimalist aesthetic)

## Development Commands

```bash
# Development
pnpm install          # Install dependencies
pnpm dev             # Start dev server (usually localhost:5173)

# Build & Preview
pnpm build           # Create production build in dist/
pnpm preview         # Preview production build locally

# Code Quality
pnpm lint            # Run ESLint
```

## Design System Architecture

### Color Palette Strategy
The color system follows "Organic Grounding" and "Midnight Opulence" trends:

- **Primary Background**: Cream/Sandy Beige (`#F5F5DC` or similar) - reduces visual fatigue, creates sophisticated warmth
- **Accent Color**: Deep Navy Blue (`#0f3460`) - trust, corporate authority (Future Dust/Midnight Opulence)
- **High Contrast**: Charcoal Black/Dark Gray (`#1a1a2e`) - softer than pure black, conveys restrained luxury
- **Success/Alert**: Desaturated Olive Green or Soft Terracotta - used sparingly, maintains "grounded" organic palette

### Typography Hierarchy
- **Display Fonts (Headlines)**: High-contrast serif fonts (Playfair Display, Bodoni) - editorial sophistication, timeless legacy
- **Body Text**: Clean sans-serif (Montserrat, Source Sans Pro) - maximum technical readability
- **Exaggerated Hierarchy**: Colossal titles in Hero sections juxtaposed with micro-text for value propositions

### Spacing System
- **Grid System**: 8-point spacing system for all margins, padding, and spacing
- **Layout**: 24-column broken grid system for controlled asymmetry
- **Macro Whitespace**: >50% of visible screen area should be negative space - communicates opulence and directs cognitive focus

## Content Strategy

### Site Structure
```
Home
├── Hero Section - Authority & Legacy focus
├── Case Studies - Reference projects (architects/builders/property managers)
├── 5-Year Guarantee Seal - Premium quality anchor
└── Footer Form - Minimalist strategic consultation

Sistema ByeCupim (System)
├── Technical Visualizations - 3D renders/vector illustrations
├── Engineering Methodology - Technical but accessible
└── Longevity Proof (15+ years active)

Empresa (Company)
├── 25-year history
└── Engineering expertise positioning

Tipos de Cupins (Termite Types)
└── Educational content

Contato (Contact)
└── Strategic consultation positioning
```

### Navigation Patterns
- **Desktop & Mobile**: Elegant hamburger menu with full-screen overlay
- **Typography**: Editorial style with generous spacing (Macro Whitespace)
- **Footer**: Robust with all secondary links, complete contact info, location map

## Media Asset Guidelines

### Photography
- Focus on architectural details (premium wood, concrete, structures)
- Emphasize textures (Tactile Maximalism)
- Minimal human presence (stylized silhouettes only, e.g., architect inspecting site)
- High saturation reduction for sophistication

### Video
- Subtle looping background video in Hero Section
- Low saturation, slow movements
- Focus on textures (close-ups of treated wood, construction time-lapses)

### Icons
- Thin line icons only (maintaining visual lightness)
- Minimalist, linear style

## Component Architecture Patterns

### Hero Sections
- Colossal typography as primary visual element
- Subtle CTAs ("Discover the ByeCupim System" vs. aggressive sales language)
- Impact imagery (textures, architecture) with overlay

### Forms
- Minimalist, contextual positioning (footer or dedicated section)
- Essential fields only (Name, Email, Phone)
- Copy focus: "Strategic Consultation" not "Contact"
- Micro-animations for tactile feedback

### Case Study Cards
Replace generic service cards with:
- Client reference projects
- Focus on architects/builders/property managers
- Format: "Structural Protection: [Client Building Name]"

### Guarantee Seal
- Treat as premium Quality Seal
- Subtle micro-animation (Tactile Maximalism)
- Dedicated explanation section linking to technology/methodology

## Key Design Principles

1. **Whisper Quality, Don't Shout Status** - Subtle sophistication over aggressive marketing
2. **Intentional Minimalism** - Not absence, but quality and intentionality of assets
3. **Portfolio Over Sales** - Present expertise rather than selling service
4. **Engineering Precision** - Technical accuracy communicated accessibly
5. **Effortless Navigation** - Hide complexity until needed

## Brand Positioning

- **NOT**: Generic pest control service site
- **IS**: Premium engineering protection platform
- **Audience**: High-end architects, construction companies, property administrators
- **Value Proposition**: 25 years of engineering expertise + 5-year guarantee + 15+ years proven system longevity

## Performance Considerations

- Optimize high-quality images (architectural photography can be large)
- Lazy load video backgrounds
- Ensure smooth micro-animations don't impact performance
- Test on mobile for luxury experience consistency
