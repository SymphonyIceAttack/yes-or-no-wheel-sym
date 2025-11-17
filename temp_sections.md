
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

