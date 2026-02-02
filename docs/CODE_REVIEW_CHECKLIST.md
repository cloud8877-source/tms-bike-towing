# Code Review Checklist

## TMS Bike Towing - Astro/Svelte/Tailwind Project

**Version:** 1.0
**Last Updated:** 2026-02-02
**PR/MR Number:** ___________________
**Reviewer:** ___________________
**Author:** ___________________
**Date:** ___________________

---

## Overview

This checklist covers code review standards for the TMS Bike Towing multilingual website built with Astro 5, Svelte 5, and Tailwind CSS 4.

---

## 1. TypeScript

### 1.1 Type Safety

- [ ] All variables have explicit or inferred types
- [ ] No use of `any` type (use `unknown` if needed)
- [ ] Function parameters are properly typed
- [ ] Function return types are defined
- [ ] Interfaces/types are used for complex objects
- [ ] Generic types used appropriately

### 1.2 Type Definitions

- [ ] Custom types are defined in appropriate locations
- [ ] Types are exported when needed by other modules
- [ ] Union types used instead of enums where appropriate
- [ ] Optional properties marked with `?`
- [ ] Readonly properties marked where applicable

### 1.3 Null Safety

- [ ] Null/undefined handled appropriately
- [ ] Optional chaining (`?.`) used correctly
- [ ] Nullish coalescing (`??`) used instead of `||` for defaults
- [ ] No unchecked array/object access

---

## 2. Astro Components

### 2.1 Component Structure

- [ ] Frontmatter section is clean and organized
- [ ] Imports are at the top of frontmatter
- [ ] Props are properly typed using `Astro.props`
- [ ] Logic is separated from template
- [ ] Component is single responsibility

### 2.2 Hydration Strategy

- [ ] Static components use `.astro` (no client JS)
- [ ] `client:load` used only for immediately interactive components
- [ ] `client:visible` used for below-fold interactive components
- [ ] `client:idle` considered for non-critical interactivity
- [ ] No unnecessary hydration directives
- [ ] Hydration choice is documented in comments if non-obvious

### 2.3 Data Fetching

- [ ] Data fetching happens in frontmatter
- [ ] No client-side data fetching unless required
- [ ] `getStaticPaths()` returns all required paths
- [ ] All locales included in static paths

### 2.4 Slots and Composition

- [ ] Named slots used for complex layouts
- [ ] Default slot content provided where appropriate
- [ ] Component composition preferred over prop drilling

---

## 3. Svelte Components

### 3.1 Svelte 5 Runes

- [ ] `$state` used for reactive state
- [ ] `$derived` used for computed values
- [ ] `$effect` used appropriately (not overused)
- [ ] `$props` used for component props
- [ ] No legacy Svelte 4 syntax (`let:`, `$:`, etc.)

### 3.2 Component Design

- [ ] Props have TypeScript types defined
- [ ] Events use Svelte 5 callback props pattern
- [ ] Component is reactive where needed
- [ ] Cleanup logic in `$effect` return function

### 3.3 Client Directive Usage

- [ ] Correct client directive chosen
- [ ] `client:load` - WhatsAppButton, LanguageSwitcher
- [ ] `client:visible` - FAQ, Testimonials
- [ ] Justification for directive choice is clear

---

## 4. i18n (Internationalization)

### 4.1 Translation Keys

- [ ] All user-visible text uses translation function `t()`
- [ ] Translation keys follow naming convention
- [ ] No hardcoded strings in templates
- [ ] Keys are descriptive and consistent

### 4.2 Translation Files

- [ ] Changes added to all 4 locale files (en, ms, zh, th)
- [ ] English translations are complete (fallback language)
- [ ] Translation structure matches across all files
- [ ] No duplicate keys within same file

### 4.3 Fallback Handling

- [ ] English fallback works for missing translations
- [ ] Missing translation keys logged appropriately
- [ ] No visible "key.not.found" strings to users

### 4.4 Locale Utilities

- [ ] `getLocaleFromUrl()` used correctly
- [ ] `Astro.currentLocale` preferred in Astro components
- [ ] WhatsApp URL generator used for links
- [ ] Locale passed correctly to child components

---

## 5. Tailwind CSS

### 5.1 Class Usage

- [ ] Utility classes used appropriately
- [ ] Custom CSS avoided when Tailwind suffices
- [ ] Responsive prefixes used correctly (`sm:`, `md:`, `lg:`)
- [ ] Dark mode classes applied if applicable
- [ ] Brand color CSS variables used for TMS colors

### 5.2 Component Classes

- [ ] Repeated patterns extracted to components
- [ ] `@apply` used sparingly (if at all)
- [ ] Custom utility classes defined in theme
- [ ] TMS brand classes used (`.tms-logo-gradient`, etc.)

### 5.3 Responsive Design

- [ ] Mobile-first approach followed
- [ ] Breakpoints used consistently
- [ ] No arbitrary breakpoint values
- [ ] Tested at all standard breakpoints

---

## 6. Performance

### 6.1 Image Optimization

- [ ] Images use Astro's `<Image>` component
- [ ] Appropriate image formats specified
- [ ] Width and height attributes provided
- [ ] Loading attribute set (`lazy` for below-fold)
- [ ] Alt text provided for all images

### 6.2 Bundle Size

- [ ] No unnecessary dependencies added
- [ ] Tree-shaking friendly imports used
- [ ] Dynamic imports used for large modules
- [ ] CSS purging works correctly

### 6.3 Runtime Performance

- [ ] No expensive operations in render loops
- [ ] Memoization used where beneficial
- [ ] No memory leaks in effects/subscriptions
- [ ] Cleanup functions provided

---

## 7. Security

### 7.1 XSS Prevention

- [ ] No `set:html` directive with user-provided input
- [ ] User input properly escaped
- [ ] Template literals safe from injection
- [ ] Raw HTML insertion avoided unless content is trusted

### 7.2 Input Validation

- [ ] URL parameters validated
- [ ] Query strings sanitized
- [ ] Locale parameters validated against allowed values
- [ ] No direct use of unvalidated external data

### 7.3 External Resources

- [ ] External scripts use integrity hashes (if applicable)
- [ ] No inline event handlers with external data
- [ ] CDN resources are trusted sources
- [ ] `rel="noopener noreferrer"` on external links

---

## 8. Accessibility

### 8.1 ARIA Attributes

- [ ] ARIA labels provided where needed
- [ ] ARIA roles used correctly
- [ ] Live regions for dynamic content
- [ ] No redundant ARIA (e.g., `role="button"` on `<button>`)

### 8.2 Keyboard Navigation

- [ ] All interactive elements keyboard accessible
- [ ] Custom components have keyboard handlers
- [ ] Focus management implemented correctly
- [ ] Focus visible states styled

### 8.3 Semantic HTML

- [ ] Proper heading hierarchy (h1-h6)
- [ ] Semantic elements used (`<nav>`, `<main>`, `<footer>`)
- [ ] Lists used for list content
- [ ] Tables used for tabular data only

### 8.4 Screen Reader Support

- [ ] Meaningful alt text for images
- [ ] Skip link for main content
- [ ] Form labels properly associated
- [ ] Error messages linked to inputs

---

## 9. Testing

### 9.1 Test Coverage

- [ ] Unit tests added for new utilities
- [ ] Component tests added for new components
- [ ] E2E tests cover new user flows
- [ ] Translation tests include new keys

### 9.2 Test Quality

- [ ] Tests are meaningful (not just for coverage)
- [ ] Edge cases tested
- [ ] Error paths tested
- [ ] Tests are maintainable

### 9.3 Manual Testing

- [ ] Tested in development server
- [ ] Tested across all 4 locales
- [ ] Tested on mobile viewport
- [ ] Cross-browser spot check done

---

## 10. Documentation

### 10.1 Inline Comments

- [ ] Complex logic is commented
- [ ] Non-obvious decisions documented
- [ ] TODO comments include context/ticket numbers
- [ ] No commented-out code without explanation

### 10.2 JSDoc/TSDoc

- [ ] Public functions have JSDoc
- [ ] Parameters documented
- [ ] Return values documented
- [ ] Examples provided for complex functions

### 10.3 Component Documentation

- [ ] Props documented (types serve as documentation)
- [ ] Usage examples in comments if complex
- [ ] Hydration strategy rationale documented

---

## 11. Code Style

### 11.1 Formatting

- [ ] Code passes ESLint/Prettier
- [ ] Consistent indentation (project standard)
- [ ] Line length within limits
- [ ] No trailing whitespace

### 11.2 Naming Conventions

- [ ] Components use PascalCase
- [ ] Functions/variables use camelCase
- [ ] Constants use SCREAMING_SNAKE_CASE
- [ ] Files match component names

### 11.3 Organization

- [ ] Imports are organized (external, internal, types)
- [ ] Related code grouped together
- [ ] File size is reasonable (<300 lines guideline)
- [ ] Dead code removed

---

## 12. Review Summary

### Issues Found

| # | File | Line | Issue | Severity |
|---|------|------|-------|----------|
| 1 |      |      |       |          |
| 2 |      |      |       |          |
| 3 |      |      |       |          |

**Severity Levels:**
- **Blocker:** Must fix before merge
- **Major:** Should fix before merge
- **Minor:** Nice to fix, can defer
- **Suggestion:** Optional improvement

### Questions for Author

1. ___________________________________________________________
2. ___________________________________________________________
3. ___________________________________________________________

---

## 13. Sign-Off

### Reviewer Decision

- [ ] **Approved** - Ready to merge
- [ ] **Approved with Comments** - Minor changes can be addressed post-merge
- [ ] **Changes Requested** - Must address before merge
- [ ] **Needs Discussion** - Requires further conversation

**Reviewer Name:** ___________________
**Date:** ___________________

### Author Confirmation

- [ ] All blocker issues addressed
- [ ] All major issues addressed
- [ ] Minor issues addressed or tracked
- [ ] Ready for re-review

**Author Name:** ___________________
**Date:** ___________________

---

## Notes

_Additional notes or discussion points:_

___________________________________________________________

___________________________________________________________

___________________________________________________________
