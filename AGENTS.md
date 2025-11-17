# Repository Guidelines

Welcome to the `yes-or-no-wheel` project! This guide will help you get started with development, understand our project structure, and contribute effectively.

## Project Overview

This is a [Next.js 15](https://nextjs.org/) application using the App Router architecture, configured for deployment to [Cloudflare Workers](https://workers.cloudflare.com/) via the [opennextjs-cloudflare](https://open-next.js.org/) adapter. The project uses TypeScript, [Biome](https://biomejs.dev/) for linting and formatting, and [Tailwind CSS](https://tailwindcss.com/) for styling.

## Project Structure

```
yes-or-no-wheel/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── lib/                   # Utility libraries
│   └── utils.ts           # Shared utilities (cn function)
├── public/                # Static assets
├── biome.json            # Biome configuration
├── wrangler.jsonc        # Cloudflare Workers configuration
├── package.json          # Dependencies and scripts
└── tsconfig.json         # TypeScript configuration
```

## Development Setup

### Prerequisites
- **Node.js** 18.0+ (check with `node --version`)
- **pnpm** package manager (install with `npm install -g pnpm`)

### Initial Setup
1. Clone and enter the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Start development server:
   ```bash
   pnpm dev
   ```
4. Visit `http://localhost:3000` to see your application

## Available Commands

| Command | Purpose |
|---------|----------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run Biome linter |
| `pnpm format` | Format code with Biome |
| `pnpm preview` | Preview Cloudflare deployment |
| `pnpm deploy` | Deploy to Cloudflare Workers |
| `pnpm upload` | Build and upload to Cloudflare |
| `pnpm cf-typegen` | Generate Cloudflare type definitions |

## Code Style & Conventions

### Formatting & Linting
- **Biome** handles formatting and linting (configured in `biome.json`)
- 2-space indentation
- Standard conventions for TypeScript and React
- Run `pnpm format` before committing to auto-format
- Run `pnpm lint` to check for issues

### File Organization
- Use **PascalCase** for React components (`MyComponent.tsx`)
- Use **camelCase** for variables and functions
- Place reusable utilities in `/lib`
- Keep UI components in appropriate subdirectories

### TypeScript
- Strict mode enabled in `tsconfig.json`
- Define proper types for all components and functions
- Use modern React patterns (hooks, functional components)

## Deployment

### Cloudflare Workers
The project uses the opennextjs-cloudflare adapter for deployment:

```bash
# Preview deployment locally
pnpm preview

# Deploy to production
pnpm deploy

# Build and upload (two-step process)
pnpm upload
```

Configuration is managed through `wrangler.jsonc`. The deployment process handles:
- Static asset optimization
- Edge runtime compatibility
- Node.js compatibility polyfills

## Testing Guidelines

**Note**: Currently no testing framework is configured.

When adding tests, follow these conventions:
- Install a testing framework (Vitest, Jest, or Cypress)
- Place tests in `__tests__/` directories or alongside source files
- Use `.test.ts` or `.spec.ts` file extensions
- Maintain test coverage for critical functionality

## Pull Request Guidelines

### Commit Messages
Use conventional commit format based on the project's Git history:
- `feat: add new component` - New features
- `fix: resolve navigation issue` - Bug fixes
- `docs: update installation guide` - Documentation
- `refactor: simplify utility function` - Code refactoring

### Code Quality
- Ensure all code passes Biome linting (`pnpm lint`)
- Format code before committing (`pnpm format`)
- Test changes locally with `pnpm dev`
- Update documentation if needed

### Development Workflow
1. Create feature branch from `main`
2. Make your changes following project conventions
3. Run quality checks (`pnpm lint`, `pnpm format`)
4. Test locally (`pnpm dev`)
5. Commit with conventional messages
6. Create pull request with clear description

## Environment & Configuration

### Key Dependencies
- **Next.js 15.2.4** - React framework with App Router
- **React 19.2.0** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Styling
- **Biome 2.2.4** - Linting and formatting
- **@opennextjs/cloudflare** - Cloudflare deployment adapter

### Configuration Files
- `biome.json` - Linting and formatting rules
- `wrangler.jsonc` - Cloudflare Workers configuration
- `tsconfig.json` - TypeScript compiler options
- `package.json` - Scripts and dependencies

## Troubleshooting

### Common Issues

**Build Errors**
- Clear `.next` and reinstall: `rm -rf .next && pnpm install`
- Check Node.js version compatibility

**Cloudflare Deployment Issues**
- Ensure `wrangler.jsonc` is properly configured
- Verify Cloudflare credentials are set up
- Check compatibility flags in the configuration

**Development Server Won't Start**
- Check port 3000 isn't in use
- Verify all dependencies are installed: `pnpm install`

---

Questions or need help? Check the [Next.js documentation](https://nextjs.org/docs) or explore the existing code for patterns. Happy coding! 🎉

## Development Optimization Guidelines

This section outlines key optimization areas and development standards for the project.

### UI/UX Standards

**Color Scheme & Theming**
- Use prominent, vibrant colors for better visual impact
- Implement background gradients that are sufficiently prominent
- Support automatic light/dark mode switching
- Ensure active states for interactive buttons
- Maintain consistent theming across components

**Favicon & Manifest**
- Generate and maintain `favicon.ico` in the `public/` directory
- Create `site.webmanifest` in `public/` for PWA support
- Ensure proper metadata configuration for SEO

### TypeScript Best Practices

**Type Validation Requirements**
- **Never use `any` type** in any files
- Define proper interfaces for all data structures
- Use strict typing for all component props and state
- Leverage Zod for runtime type validation (zod is already installed)

### Routing & Navigation

**Route Parameter Handling**
```tsx
// Use these hooks for route parameters
import { useParams, useSearchParams } from 'next/navigation'

// Example usage
const params = useParams()
const searchParams = useSearchParams()
```

**Available Routing Libraries**
- `hono` - Lightweight routing framework
- `@hono/zod-validator` - Schema validation for routes
- `hono/vercel` - Vercel deployment support

### SEO & Metadata

**Metadata Generation**
- Generate metadata information in `app/layout.tsx`
- Include proper Open Graph and Twitter Card meta tags
- Implement structured data where appropriate
- Optimize for search engine visibility

### Internationalization

**Multi-language Support**
The project should support multiple languages:
- **English** (default)
- **Russian**
- **Japanese** 
- **Spanish**

When implementing i18n:
- Use Next.js internationalization features
- Ensure proper text direction support
- Test with different character sets

### Code Quality Standards

**Biome Linting**
- Meet all Biome syntax checking requirements
- Run `pnpm lint` before committing
- Use `pnpm format` to auto-fix formatting issues
- Address all warnings and errors

**Component Structure**
- Organize related components in subdirectories
- Use consistent naming patterns
- Implement proper TypeScript interfaces
- Follow React best practices

### FAQ Implementation

**Homepage Requirements**
- Create a comprehensive FAQ section on the homepage
- Use expandable/collapsible components
- Organize FAQs by category
- Ensure accessibility compliance

### Common Development Issues

**Route Parameter Acquisition**
- Always use Next.js built-in hooks for parameters
- Handle async route loading properly
- Implement proper error boundaries for route errors

**Performance Considerations**
- Use Next.js Image component for optimized images
- Implement proper caching strategies
- Minimize bundle size through code splitting
- Optimize for Core Web Vitals

---


## Development Optimization Guidelines

This section outlines key optimization areas and development standards for the project, based on the project's optimization requirements.

### UI Guidelines

**Visual Design Requirements**
- Use more prominent colors for better visual impact
- Implement background gradients with vibrant colors that are sufficiently prominent
- Support automatic light/dark mode switching
- Ensure active states for interactive buttons
- Maintain consistent theming across all components

**Static Assets**
- Generate and maintain `favicon.ico` in the `app/` directory
- Create `site.webmanifest` in `public/` for PWA support
- Ensure proper metadata configuration for SEO

### Development Best Practices

**Type Validation**
- **Never use `any` type** in any TypeScript files
- Define proper interfaces for all data structures
- Use strict typing for all component props and state
- Leverage Zod for runtime type validation (zod is already installed)

**SEO Optimization**
- Generate metadata information in `app/layout.tsx`
- Include proper Open Graph and Twitter Card meta tags
- Implement structured data where appropriate
- Optimize for search engine visibility

### Route Development

**Route Parameter Acquisition**
```tsx
// Use these hooks for route parameters
import { useParams, useSearchParams } from 'next/navigation'

// Example usage
const params = useParams()
const searchParams = useSearchParams()
```

**Available Routing Libraries**
- `hono` - Lightweight routing framework
- `@hono/zod-validator` - Schema validation for routes
- `hono/vercel` - Vercel deployment support

### Content Requirements

**FAQ Implementation**
- Homepage needs a comprehensive FAQ section
- Use expandable/collapsible components for better UX
- Organize FAQs by category for easier navigation
- Ensure accessibility compliance

**Multi-language Support**
The project should support multiple languages:
- **English** (default)
- **Russian**
- **Japanese** 
- **Spanish**

When implementing internationalization:
- Use Next.js internationalization features
- Ensure proper text direction support
- Test with different character sets
- Consider cultural differences in UI/UX

### Code Quality Standards

**Biome Linting Requirements**
- Meet all Biome syntax checking requirements
- Run `pnpm lint` before committing
- Use `pnpm format` to auto-fix formatting issues
- Address all warnings and errors
- Follow Biome's recommended rulesets

---


## Development Optimization Guidelines

This section outlines key optimization areas and development standards for the project.

### UI Guidelines

**Visual Design Requirements**
- Use more prominent colors for better visual impact
- Implement background gradients with vibrant colors that are sufficiently prominent
- Support automatic light/dark mode switching
- Ensure active states for interactive buttons
- Maintain consistent theming across all components

**Static Assets**
- Generate and maintain `favicon.ico` in the `app/` directory
- Create `site.webmanifest` in `public/` for PWA support
- Ensure proper metadata configuration for SEO

### Development Best Practices

**Type Validation**
- **Never use `any` type** in any TypeScript files
- Define proper interfaces for all data structures
- Use strict typing for all component props and state
- Leverage Zod for runtime type validation (zod is already installed)

**SEO Optimization**
- Generate metadata information in `app/layout.tsx`
- Include proper Open Graph and Twitter Card meta tags
- Implement structured data where appropriate
- Optimize for search engine visibility

### Route Development

**Route Parameter Acquisition**
```tsx
// Use these hooks for route parameters
import { useParams, useSearchParams } from 'next/navigation'

// Example usage
const params = useParams()
const searchParams = useSearchParams()
```

**Available Routing Libraries**
- `hono` - Lightweight routing framework
- `@hono/zod-validator` - Schema validation for routes
- `hono/vercel` - Vercel deployment support

### Content Requirements

**FAQ Implementation**
- Homepage needs a comprehensive FAQ section
- Use expandable/collapsible components for better UX
- Organize FAQs by category for easier navigation
- Ensure accessibility compliance

**Multi-language Support**
The project should support multiple languages:
- **English** (default)
- **Russian**
- **Japanese** 
- **Spanish**

When implementing internationalization:
- Use Next.js internationalization features
- Ensure proper text direction support
- Test with different character sets
- Consider cultural differences in UI/UX

### Code Quality Standards

**Biome Linting Requirements**
- Meet all Biome syntax checking requirements
- Run `pnpm lint` before committing
- Use `pnpm format` to auto-fix formatting issues
- Address all warnings and errors
- Follow Biome's recommended rulesets

