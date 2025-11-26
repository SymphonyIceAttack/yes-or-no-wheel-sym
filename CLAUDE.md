# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Yes or No Wheel** decision-making web application built with:
- **Next.js 16** (App Router) with React 19
- **TypeScript 5** with strict mode enabled
- **Tailwind CSS 4** for styling with custom HSL-based theming
- **Cloudflare Workers** deployment via `@opennextjs/cloudflare`
- **Directus SDK** for headless CMS integration
- **Biome** for linting and formatting
- **pnpm** as the package manager

The application is optimized for deployment on Cloudflare's edge network with advanced caching strategies.

## Development Commands

### Essential Commands
```bash
pnpm dev              # Start development server (localhost:3000)
pnpm build            # Build for production (Next.js)
pnpm build:worker     # Build Cloudflare Worker
pnpm lint             # Run Biome linter
pnpm format           # Format code with Biome
```

### Cloudflare Deployment
```bash
pnpm preview          # Build and preview locally with Cloudflare adapter
pnpm deploy           # Deploy to Cloudflare Workers
pnpm upload           # Build and upload to Cloudflare
pnpm cf-typegen       # Generate Cloudflare bindings types
```

## Architecture

### Cloudflare Edge Integration

The project uses OpenNext Cloudflare adapter with sophisticated caching:

**Incremental Cache**: R2 bucket (`NEXT_INC_CACHE_R2_BUCKET`) for storing Next.js ISR/SSG pages
**Queue System**: Durable Objects (`NEXT_CACHE_DO_QUEUE`) for cache revalidation
**Tag Cache**: D1 database (`NEXT_TAG_CACHE_D1`) for on-demand revalidation with `revalidateTag()`

Configuration in `open-next.config.ts`:
```typescript
{
  incrementalCache: r2IncrementalCache,
  queue: doQueue,
  tagCache: d1NextTagCache,
  enableCacheInterception: true
}
```

When working with caching, understand that:
- R2 bucket bindings are defined in `wrangler.jsonc`
- D1 database is required for `revalidateTag()` functionality
- Service bindings (`WORKER_SELF_REFERENCE`) enable worker-to-worker communication

### Internationalization (i18n)

The app supports 4 languages via custom implementation in `lib/translations.ts`:
- English (`en`) - default
- Russian (`ru`)
- Japanese (`ja`)
- Spanish (`es`)

**Pattern**: Dynamic routes with `app/[lang]/` structure. Use the `t(key, lang)` helper function:
```typescript
import { t, type LanguageType } from '@/lib/translations'
const text = t('heroTitle', 'en')
```

Language switching is client-side via the `LanguagesSwitcher` component.

### Styling & Theming

**Theme System**: Uses `next-themes` with `ThemeProvider` in root layout
- Supports light/dark modes via CSS variables
- Theme colors defined in Tailwind config using HSL variables
- Uses shadcn/ui component patterns (Radix UI primitives)

**Important**: The project uses vibrant, prominent colors and gradients. When creating UI elements, reference the existing color scheme in `tailwind.config.ts` and `app/globals.css`.

### Next.js Configuration

**Key settings in `next.config.ts`**:
```typescript
{
  typescript: { ignoreBuildErrors: true },  // Build ignores TS errors
  images: {
    unoptimized: true,                      // Required for Cloudflare
    remotePatterns: [{ hostname: "**" }]    // Allows all HTTPS images
  }
}
```

The development environment automatically initializes Cloudflare adapter via `initOpenNextCloudflareForDev()`.

## Code Standards

### TypeScript
- **Never use `any` type** - define proper interfaces or use `unknown`
- Strict mode enabled in `tsconfig.json`
- Use Zod for runtime validation (already installed)
- Async route parameters must be awaited: `const { lang } = await params`

### Biome Configuration
- 2-space indentation
- Auto-organize imports on save
- Next.js and React domains enabled for framework-specific rules
- Run `pnpm lint` before committing
- Some rules disabled: `noSvgWithoutTitle`, `noStaticElementInteractions`, `noDangerouslySetInnerHtml`

### Component Organization
```
components/
├── ui/              # shadcn/ui primitives (Button, Card, Accordion, etc.)
├── decision-wheel.tsx
├── language-switcher.tsx
├── theme-toggle.tsx
└── faq.tsx

lib/
├── utils.ts         # cn() helper for className merging
├── translations.ts  # i18n translation object and helper
└── schemas.ts       # Zod schemas
```

## Directus Integration

The project includes `@directus/sdk` for headless CMS integration. When working with Directus:
- SDK is installed but implementation patterns should be added in `lib/`
- Consider server-side fetching in RSC (React Server Components)
- Use TypeScript types generated from Directus schema

## SEO & Metadata

Comprehensive metadata in `app/layout.tsx`:
- Open Graph and Twitter Card tags configured
- Multi-language alternate locales defined
- Viewport configuration with theme colors
- Manifest file at `/site.webmanifest`
- Icons: `/icon.svg` and `/apple-icon.png`

When adding new pages, export metadata using Next.js Metadata API.

## Important Notes

### Build Behavior
- TypeScript errors are **ignored during build** (`ignoreBuildErrors: true`)
- Always validate types manually with `tsc --noEmit` if needed
- Images are unoptimized for Cloudflare compatibility

### Cloudflare Bindings
When accessing Cloudflare bindings in runtime code:
```typescript
// Types should be in cloudflare-env.d.ts (generate with pnpm cf-typegen)
interface CloudflareEnv {
  NEXT_INC_CACHE_R2_BUCKET: R2Bucket
  NEXT_CACHE_DO_QUEUE: DurableObjectNamespace
  NEXT_TAG_CACHE_D1: D1Database
  WORKER_SELF_REFERENCE: Fetcher
}
```

### Environment Setup
The project uses `devenv.nix` for Nix-based development environment. If user has Nix installed, they can use:
```bash
devenv up  # Start development environment
```

## Testing & Validation

Before committing:
1. Run `pnpm lint` to check code quality
2. Run `pnpm format` to auto-format
3. Test with `pnpm dev` locally
4. For Cloudflare-specific features, test with `pnpm preview`

## Commit Convention

Based on git history, use conventional commits:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation
- `refactor:` for code refactoring
