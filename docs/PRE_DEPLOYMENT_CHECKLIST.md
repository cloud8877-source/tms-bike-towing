# Pre-Deployment Checklist

## TMS Bike Towing - Cloudflare Pages Deployment

**Version:** 1.0
**Last Updated:** 2026-02-02
**Release Version:** ___________________
**Deployment Date:** ___________________
**Deployer:** ___________________

---

## 1. Code Quality Gates

### 1.1 Test Suite

- [ ] All unit tests pass (`npm run test`)
- [ ] All component tests pass
- [ ] All E2E tests pass (`npm run test:e2e`)
- [ ] Test coverage meets minimum threshold
- [ ] No skipped tests without documented reason

### 1.2 Linting & Formatting

- [ ] ESLint passes with no errors (`npm run lint`)
- [ ] No ESLint warnings (or documented exceptions)
- [ ] Prettier formatting applied
- [ ] TypeScript compilation succeeds (`tsc --noEmit`)
- [ ] No TypeScript errors

### 1.3 Code Review

- [ ] All PRs approved by required reviewers
- [ ] No unresolved review comments
- [ ] Code review checklist completed

---

## 2. Build Verification

### 2.1 Build Process

- [ ] Build completes successfully (`npm run build`)
- [ ] No build warnings
- [ ] Build time is reasonable (<2 minutes)
- [ ] No deprecated dependency warnings

### 2.2 Output Structure

- [ ] `dist/` directory created
- [ ] 74 HTML files generated (17 pages x 4 locales + redirect pages + sitemap pages)
- [ ] Expected directory structure present:
  - [ ] `dist/en/` - English pages
  - [ ] `dist/ms/` - Bahasa Malaysia pages
  - [ ] `dist/zh/` - Chinese pages
  - [ ] `dist/th/` - Thai pages
  - [ ] `dist/index.html` - Redirect to `/en/`

### 2.3 Static Assets

- [ ] All assets copied to `dist/`
- [ ] Images present in output
- [ ] Fonts present (if self-hosted)
- [ ] Favicon files present
- [ ] CSS files generated and minified
- [ ] JS files generated and minified

---

## 3. i18n Verification

### 3.1 All Locales Present

- [ ] English (en) pages built
- [ ] Bahasa Malaysia (ms) pages built
- [ ] Chinese (zh) pages built
- [ ] Thai (th) pages built

### 3.2 Translation Completeness

- [ ] No missing translation keys in build output
- [ ] Translation key validation passes
- [ ] All locale JSON files are valid JSON
- [ ] No console warnings about missing translations

### 3.3 Locale Pages

For each locale, verify these pages exist:

**English (`/en/`):**
- [ ] `/en/index.html`
- [ ] `/en/towing/index.html`
- [ ] `/en/insurance/index.html`
- [ ] `/en/about/index.html`

**Bahasa Malaysia (`/ms/`):**
- [ ] `/ms/index.html`
- [ ] `/ms/towing/index.html`
- [ ] `/ms/insurance/index.html`
- [ ] `/ms/about/index.html`

**Chinese (`/zh/`):**
- [ ] `/zh/index.html`
- [ ] `/zh/towing/index.html`
- [ ] `/zh/insurance/index.html`
- [ ] `/zh/about/index.html`

**Thai (`/th/`):**
- [ ] `/th/index.html`
- [ ] `/th/towing/index.html`
- [ ] `/th/insurance/index.html`
- [ ] `/th/about/index.html`

---

## 4. SEO Verification

### 4.1 Sitemap

- [ ] `sitemap.xml` generated
- [ ] Sitemap includes all pages
- [ ] Sitemap URLs are absolute
- [ ] Sitemap validates (XML schema valid)
- [ ] All 4 locale variations included

### 4.2 robots.txt

- [ ] `robots.txt` present
- [ ] Allows indexing of main pages
- [ ] Points to sitemap location
- [ ] No accidental disallow rules

### 4.3 Meta Tags (Sample Check)

- [ ] Home page has unique title per locale
- [ ] All pages have meta descriptions
- [ ] Open Graph tags present
- [ ] hreflang tags correctly implemented
- [ ] Canonical URLs are absolute

---

## 5. Link Verification

### 5.1 Internal Links

- [ ] Link checker passes (no broken internal links)
- [ ] All navigation links work
- [ ] All CTA buttons link correctly
- [ ] Footer links work

### 5.2 External Links

- [ ] WhatsApp links are correct
- [ ] Phone number links formatted correctly
- [ ] Email links formatted correctly
- [ ] All external links open in new tab

### 5.3 Asset Links

- [ ] No broken image links
- [ ] No broken CSS imports
- [ ] No broken JS imports
- [ ] Font links resolve

---

## 6. Performance Verification

### 6.1 Lighthouse Scores

Run Lighthouse on production build preview:

**Home Page (`/en/`):**
- [ ] Performance: >= 90
- [ ] Accessibility: >= 90
- [ ] Best Practices: >= 90
- [ ] SEO: >= 90

**Towing Page (`/en/towing`):**
- [ ] Performance: >= 90
- [ ] Accessibility: >= 90
- [ ] Best Practices: >= 90
- [ ] SEO: >= 90

### 6.2 Core Web Vitals

- [ ] LCP (Largest Contentful Paint): < 2.5s
- [ ] FID (First Input Delay): < 100ms
- [ ] CLS (Cumulative Layout Shift): < 0.1
- [ ] TTFB (Time to First Byte): < 800ms

### 6.3 Bundle Analysis

- [ ] Total page weight < 1MB (first load)
- [ ] JavaScript bundle < 200KB (gzipped)
- [ ] CSS bundle < 50KB (gzipped)
- [ ] No unexpectedly large assets

---

## 7. Accessibility Verification

### 7.1 WCAG 2.1 AA Compliance

- [ ] Automated accessibility scan passes (axe, WAVE)
- [ ] Color contrast meets AA standards
- [ ] Keyboard navigation works throughout
- [ ] Focus indicators visible

### 7.2 Screen Reader Testing

- [ ] Page title announced correctly
- [ ] Navigation is accessible
- [ ] Images have alt text
- [ ] Forms are labeled

### 7.3 Motion and Animation

- [ ] Animations respect `prefers-reduced-motion`
- [ ] No auto-playing videos with sound
- [ ] No flashing content (>3 flashes/second)

---

## 8. Asset Verification

### 8.1 Images

- [ ] All images optimized (WebP or compressed)
- [ ] No images over 500KB
- [ ] Images have width/height attributes
- [ ] Responsive images implemented

### 8.2 Favicons

- [ ] favicon.ico present
- [ ] Apple touch icon present
- [ ] Android icons present
- [ ] Favicon displays correctly in browser tab

### 8.3 Fonts

- [ ] Fonts load correctly
- [ ] Font fallbacks defined
- [ ] Font display set to `swap`
- [ ] No FOUT/FOIT issues

---

## 9. Security Verification

### 9.1 Headers (Post-Deploy Check)

- [ ] Security headers configured in Cloudflare
- [ ] Content-Security-Policy appropriate
- [ ] X-Frame-Options set
- [ ] X-Content-Type-Options: nosniff

### 9.2 HTTPS

- [ ] HTTPS enforced
- [ ] No mixed content warnings
- [ ] SSL certificate valid

---

## 10. Deployment Steps

### 10.1 Pre-Deployment

- [ ] Notify team of upcoming deployment
- [ ] Verify Cloudflare Pages access
- [ ] Check current production is stable
- [ ] Document current production version (for rollback)

**Current Production Version:** ___________________
**Current Commit SHA:** ___________________

### 10.2 Deployment

- [ ] Build production bundle:
  ```bash
  npm run build
  ```

- [ ] Deploy to Cloudflare Pages:
  ```bash
  npx wrangler pages deploy dist
  ```

- [ ] Verify deployment URL returned
- [ ] Wait for deployment propagation (~2-5 minutes)

**Deployment URL:** ___________________
**Deploy Commit SHA:** ___________________
**Deploy Timestamp:** ___________________

### 10.3 Cloudflare Dashboard Verification

- [ ] Deployment shows as "Success" in Cloudflare Dashboard
- [ ] No build errors in logs
- [ ] Correct branch deployed
- [ ] Preview URL accessible

---

## 11. Post-Deployment Verification

### 11.1 Smoke Tests

- [ ] Home page loads (`/en/`)
- [ ] All 4 locales accessible
- [ ] Navigation works
- [ ] Images display
- [ ] WhatsApp button works
- [ ] Language switcher works

### 11.2 Functionality Spot Checks

- [ ] Towing page displays correctly
- [ ] Insurance page tabs work
- [ ] About page contact info visible
- [ ] Mobile navigation works
- [ ] No console errors

### 11.3 Monitoring

- [ ] No spike in error rates
- [ ] Page load times normal
- [ ] No 404 errors for expected pages
- [ ] No 500 errors

---

## 12. Rollback Plan

### 12.1 Rollback Decision Criteria

Initiate rollback if:
- [ ] Critical functionality broken
- [ ] Site completely inaccessible
- [ ] Major security vulnerability discovered
- [ ] Significant performance degradation

### 12.2 Rollback Steps

1. **Via Cloudflare Dashboard:**
   - Navigate to Pages > Project > Deployments
   - Find previous stable deployment
   - Click "Rollback to this deployment"

2. **Via CLI (if needed):**
   ```bash
   # Checkout previous version
   git checkout <previous-commit-sha>

   # Rebuild
   npm run build

   # Redeploy
   npx wrangler pages deploy dist
   ```

3. **Verify rollback:**
   - [ ] Previous version restored
   - [ ] Critical functionality works
   - [ ] Notify team of rollback

### 12.3 Rollback Completed

- [ ] Rollback successful
- [ ] Incident documented
- [ ] Post-mortem scheduled

**Rollback Timestamp:** ___________________
**Rollback Reason:** ___________________

---

## 13. Sign-Off

### Pre-Deployment Approval

- [ ] All code quality gates passed
- [ ] All verification checks completed
- [ ] Deployment window approved
- [ ] Rollback plan reviewed

**Approved By:** ___________________
**Date:** ___________________

### Post-Deployment Confirmation

- [ ] Smoke tests passed
- [ ] No critical issues found
- [ ] Deployment successful

**Verified By:** ___________________
**Date:** ___________________

### Release Notes

**Version:** ___________________
**Changes Included:**

1. ___________________________________________________________
2. ___________________________________________________________
3. ___________________________________________________________

**Known Issues:**

1. ___________________________________________________________
2. ___________________________________________________________

---

## Notes

_Additional deployment notes:_

___________________________________________________________

___________________________________________________________

___________________________________________________________
