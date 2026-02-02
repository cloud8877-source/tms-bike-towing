# TMS Bike Towing

A multilingual brochure website for TMS Bike Towing, a cross-border motorcycle towing and insurance service company operating in Thailand, Malaysia, and Singapore.

![TMS Bike Towing](public/images/tms-logo.webp)

## 🌐 Live Site

[Visit TMS Bike Towing](https://tms-bike-towing.pages.dev)

## ✨ Features

- **Multilingual Support** - 4 languages: English, Bahasa Malaysia, Chinese (中文), Thai (ไทย)
- **Cross-Border Services** - Towing services across Thailand, Malaysia, and Singapore
- **Insurance Packages** - Comprehensive motorcycle insurance with multiple tiers
- **WhatsApp Integration** - One-click emergency contact with location sharing
- **SEO Optimized** - Dynamic landing pages for routes and cities
- **Responsive Design** - Mobile-first with smooth animations
- **Fast Performance** - Static site generation with minimal JavaScript

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [Astro 5](https://astro.build) | Static site framework |
| [Svelte 5](https://svelte.dev) | Interactive components |
| [Tailwind CSS 4](https://tailwindcss.com) | Styling |
| [Cloudflare Pages](https://pages.cloudflare.com) | Hosting & CDN |

## 📁 Project Structure

```
tms-bike-towing/
├── public/
│   ├── images/          # Optimized WebP images
│   └── videos/          # Promotional videos
├── src/
│   ├── components/      # Svelte interactive components
│   ├── i18n/            # Translation JSON files
│   ├── layouts/         # Base layout with SEO
│   ├── pages/
│   │   ├── [lang]/      # Localized pages
│   │   │   ├── index.astro
│   │   │   ├── towing.astro
│   │   │   ├── insurance.astro
│   │   │   ├── about.astro
│   │   │   └── towing/[...slug].astro  # SEO landing pages
│   │   └── index.astro  # Redirect to /en/
│   └── data/            # Location data for SEO pages
└── astro.config.mjs
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/cloud8877-source/tms-bike-towing.git
cd tms-bike-towing

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) to view the site.

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at localhost:4321 |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run check` | Run Astro type checking |

## 🌍 Internationalization

The site supports 4 languages with URL-based routing:

| Language | URL Prefix | Example |
|----------|------------|---------|
| English | `/en/` | `/en/towing` |
| Bahasa Malaysia | `/ms/` | `/ms/towing` |
| Chinese | `/zh/` | `/zh/towing` |
| Thai | `/th/` | `/th/towing` |

Translation files are located in `src/i18n/`:
- `en.json` - English (default/fallback)
- `ms.json` - Bahasa Malaysia
- `zh.json` - Chinese
- `th.json` - Thai

## 🎨 Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Sky Blue | `#01C3FF` | Gradient top, highlights |
| Electric Blue | `#1170FF` | Primary brand color |
| Royal Blue | `#211AFF` | Gradient bottom, accents |
| Midnight Navy | `#06073D` | 3D shadow effect |

## 📱 Key Components

- **WhatsAppButton** - Floating action button with emergency location sharing
- **EmergencyBar** - Quick access emergency contact bar
- **LanguageSwitcher** - Locale selector dropdown
- **FAQ** - Accordion with lazy loading
- **InsurancePricing** - Tabbed pricing tables

## 🚀 Deployment

### Cloudflare Pages (Production)

The site is automatically deployed to Cloudflare Pages on push to `main`.

### Manual Deployment

```bash
# Build the site
npm run build

# Deploy to Cloudflare Pages
npx wrangler pages deploy dist
```

## 📄 Pages

| Page | Description |
|------|-------------|
| **Home** | Hero section, services overview, testimonials |
| **Towing** | Towing services, Thailand packages, route information |
| **Insurance** | Insurance plans with tiered pricing |
| **About** | Company info, contact details, social links |
| **SEO Pages** | Dynamic pages for routes (e.g., Bangkok to Phuket) |

## 🔧 Configuration

### Environment Variables

No environment variables required - the site is fully static.

### Astro Config

Key configuration in `astro.config.mjs`:
- Static output mode
- Svelte integration
- Tailwind CSS integration
- i18n routing with English as default locale

## 📊 Performance

- **Static Generation** - All pages pre-rendered at build time
- **Image Optimization** - WebP format with responsive sizes
- **Lazy Loading** - Components hydrated on visibility
- **Minimal JS** - Only interactive components ship JavaScript

## 📝 License

All rights reserved © TMS Bike Towing

## 📞 Contact

- **WhatsApp**: [Contact TMS](https://wa.me/60123456789)
- **Website**: [tms-bike-towing.pages.dev](https://tms-bike-towing.pages.dev)
