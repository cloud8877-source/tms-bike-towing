# Manual QA Checklist

## TMS Bike Towing Multilingual Website

**Version:** 1.0
**Last Updated:** 2026-02-02
**Tester:** ___________________
**Date Tested:** ___________________
**Environment:** ___________________

---

## 1. Functional Testing

### 1.1 Navigation

- [ ] Main navigation links work correctly
- [ ] Logo links to home page (`/{lang}/`)
- [ ] All navigation items are clickable and route correctly
- [ ] Mobile hamburger menu opens and closes properly
- [ ] Mobile menu links navigate correctly
- [ ] Browser back/forward navigation works as expected
- [ ] Deep links (direct URL access) load correctly

### 1.2 Language Switcher

- [ ] Language switcher displays all 4 languages (EN, MS, ZH, TH)
- [ ] Switching from English to Bahasa Malaysia works
- [ ] Switching from English to Chinese works
- [ ] Switching from English to Thai works
- [ ] Switching between all language combinations works
- [ ] URL updates correctly with new locale prefix
- [ ] Current page context is maintained after switch
- [ ] Current language is visually indicated
- [ ] Language switcher is accessible via keyboard

### 1.3 WhatsApp Buttons

- [ ] Floating WhatsApp button is visible on all pages
- [ ] WhatsApp button opens correct WhatsApp link
- [ ] WhatsApp link includes proper phone number
- [ ] Pre-filled message is correctly encoded (if applicable)
- [ ] Button is positioned correctly on mobile
- [ ] Button does not obstruct content
- [ ] In-page CTA WhatsApp buttons work correctly

### 1.4 Forms & Interactive Elements

- [ ] All clickable elements have hover states
- [ ] FAQ accordions open and close correctly
- [ ] FAQ only one accordion open at a time (if applicable)
- [ ] Testimonial slider/carousel works (if applicable)
- [ ] All external links open in new tab
- [ ] Phone number links trigger phone dialer
- [ ] Email links trigger email client

### 1.5 Page-Specific Functionality

#### Home Page (`/{lang}/`)
- [ ] Hero section displays correctly
- [ ] CTA buttons function properly
- [ ] Service highlights load and display

#### Towing Page (`/{lang}/towing`)
- [ ] Thailand packages display correctly
- [ ] Pricing information is visible
- [ ] Package comparison is clear

#### Insurance Page (`/{lang}/insurance`)
- [ ] Tabbed pricing interface works
- [ ] Tab switching updates content
- [ ] Insurance plan details display correctly

#### About Page (`/{lang}/about`)
- [ ] Contact information displays correctly
- [ ] Map/location information is visible (if applicable)
- [ ] Company information renders properly

---

## 2. Visual Testing

### 2.1 Responsive Design

#### Desktop (1920x1080, 1440x900)
- [ ] Layout displays correctly at 1920x1080
- [ ] Layout displays correctly at 1440x900
- [ ] No horizontal scrolling
- [ ] Content is properly centered/aligned
- [ ] Navigation is fully visible

#### Tablet (768x1024)
- [ ] Layout adapts to tablet viewport
- [ ] Navigation switches to mobile menu
- [ ] Images scale appropriately
- [ ] Text remains readable

#### Mobile (375x667, 390x844)
- [ ] Layout adapts to mobile viewport
- [ ] Mobile navigation is functional
- [ ] Touch targets are adequately sized (min 44x44px)
- [ ] No content overflow
- [ ] Images scale appropriately
- [ ] Text is readable without zooming

### 2.2 Images & Media

- [ ] All images load successfully
- [ ] No broken image placeholders
- [ ] Images have appropriate alt text
- [ ] Logo displays correctly
- [ ] Images are not stretched or distorted
- [ ] Lazy loading works for below-fold images

### 2.3 Typography & Colors

- [ ] Fonts load correctly
- [ ] Font sizes are consistent
- [ ] Line heights are readable
- [ ] Brand colors display correctly
- [ ] TMS logo gradient renders properly
- [ ] Text contrast meets accessibility standards

### 2.4 Animations & Transitions

- [ ] Page transitions are smooth
- [ ] Hover animations work correctly
- [ ] Loading states display properly
- [ ] No janky or stuttering animations
- [ ] Animations respect reduced-motion preference

---

## 3. i18n Testing

### 3.1 English (en)

- [ ] `/en/` - Home page displays in English
- [ ] `/en/towing` - Towing page displays in English
- [ ] `/en/insurance` - Insurance page displays in English
- [ ] `/en/about` - About page displays in English
- [ ] All navigation labels are in English
- [ ] All buttons and CTAs are in English
- [ ] No missing translation keys visible
- [ ] No placeholder text (e.g., "key.missing")

### 3.2 Bahasa Malaysia (ms)

- [ ] `/ms/` - Home page displays in Bahasa Malaysia
- [ ] `/ms/towing` - Towing page displays in Bahasa Malaysia
- [ ] `/ms/insurance` - Insurance page displays in Bahasa Malaysia
- [ ] `/ms/about` - About page displays in Bahasa Malaysia
- [ ] All navigation labels are in Bahasa Malaysia
- [ ] All buttons and CTAs are in Bahasa Malaysia
- [ ] No missing translation keys visible
- [ ] No English fallback text inappropriately shown

### 3.3 Chinese (zh)

- [ ] `/zh/` - Home page displays in Chinese
- [ ] `/zh/towing` - Towing page displays in Chinese
- [ ] `/zh/insurance` - Insurance page displays in Chinese
- [ ] `/zh/about` - About page displays in Chinese
- [ ] All navigation labels are in Chinese
- [ ] All buttons and CTAs are in Chinese
- [ ] Chinese characters render correctly
- [ ] No missing translation keys visible

### 3.4 Thai (th)

- [ ] `/th/` - Home page displays in Thai
- [ ] `/th/towing` - Towing page displays in Thai
- [ ] `/th/insurance` - Insurance page displays in Thai
- [ ] `/th/about` - About page displays in Thai
- [ ] All navigation labels are in Thai
- [ ] All buttons and CTAs are in Thai
- [ ] Thai characters render correctly
- [ ] No missing translation keys visible

### 3.5 Cross-Language Consistency

- [ ] Layout remains consistent across all languages
- [ ] No text overflow in any language
- [ ] Buttons accommodate longer translations
- [ ] Date/number formats are appropriate per locale

---

## 4. SEO Spot Checks

### 4.1 Meta Tags

- [ ] Page title is present and descriptive
- [ ] Meta description is present
- [ ] Meta description is under 160 characters
- [ ] Open Graph title is present
- [ ] Open Graph description is present
- [ ] Open Graph image is present
- [ ] Twitter card meta tags are present

### 4.2 Canonical URLs

- [ ] Canonical URL is present on each page
- [ ] Canonical URL is absolute (not relative)
- [ ] Canonical URL matches the current page URL
- [ ] No duplicate canonical tags

### 4.3 hreflang Tags

- [ ] hreflang tags present for all 4 languages
- [ ] `hreflang="en"` points to `/en/` variant
- [ ] `hreflang="ms"` points to `/ms/` variant
- [ ] `hreflang="zh"` points to `/zh/` variant
- [ ] `hreflang="th"` points to `/th/` variant
- [ ] `x-default` hreflang is present
- [ ] All hreflang URLs are absolute

### 4.4 Structured Data

- [ ] JSON-LD schema is present (if applicable)
- [ ] Schema validates without errors
- [ ] Organization schema includes correct information

---

## 5. Performance Testing

### 5.1 Page Load

- [ ] Home page loads in under 3 seconds
- [ ] Towing page loads in under 3 seconds
- [ ] Insurance page loads in under 3 seconds
- [ ] About page loads in under 3 seconds
- [ ] No console errors during load
- [ ] No network request failures

### 5.2 Image Optimization

- [ ] Images are properly sized for display
- [ ] Images use modern formats (WebP where supported)
- [ ] Images are appropriately compressed
- [ ] No images over 500KB
- [ ] Lazy loading is implemented

### 5.3 JavaScript Performance

- [ ] No JavaScript errors in console
- [ ] Svelte components hydrate without delay
- [ ] Interactive elements respond immediately
- [ ] No memory leaks observed

---

## 6. Cross-Browser Testing

### 6.1 Chrome (Desktop)

- [ ] All features work correctly
- [ ] Layout displays correctly
- [ ] No console errors
- [ ] DevTools shows no issues

### 6.2 Safari (Desktop)

- [ ] All features work correctly
- [ ] Layout displays correctly
- [ ] No console errors
- [ ] Fonts render correctly

### 6.3 Firefox (Desktop)

- [ ] All features work correctly
- [ ] Layout displays correctly
- [ ] No console errors
- [ ] CSS features work correctly

### 6.4 Chrome (Mobile - Android)

- [ ] All features work correctly
- [ ] Touch interactions work
- [ ] Mobile navigation functions
- [ ] WhatsApp link opens correctly

### 6.5 Safari (Mobile - iOS)

- [ ] All features work correctly
- [ ] Touch interactions work
- [ ] Mobile navigation functions
- [ ] WhatsApp link opens correctly
- [ ] Safe area insets respected

### 6.6 Samsung Internet

- [ ] All features work correctly
- [ ] Layout displays correctly
- [ ] No critical issues

---

## 7. Accessibility Spot Checks

### 7.1 Keyboard Navigation

- [ ] All interactive elements are keyboard accessible
- [ ] Focus order is logical
- [ ] Focus states are visible
- [ ] Skip to content link works (if applicable)
- [ ] Modal/dropdown can be closed with Escape

### 7.2 Screen Reader Basics

- [ ] Page headings are properly structured (h1, h2, etc.)
- [ ] Images have alt text
- [ ] Links have descriptive text
- [ ] Buttons have accessible names
- [ ] Language attribute is set correctly

### 7.3 Color & Contrast

- [ ] Text has sufficient contrast (4.5:1 minimum)
- [ ] Interactive elements have sufficient contrast
- [ ] Information is not conveyed by color alone

---

## 8. Issues Found

| # | Page | Issue Description | Severity | Screenshot |
|---|------|-------------------|----------|------------|
| 1 |      |                   |          |            |
| 2 |      |                   |          |            |
| 3 |      |                   |          |            |
| 4 |      |                   |          |            |
| 5 |      |                   |          |            |

**Severity Levels:**
- **Critical:** Blocks core functionality
- **High:** Major feature broken
- **Medium:** Feature works but has issues
- **Low:** Minor cosmetic issue

---

## 9. Sign-Off

### QA Tester Sign-Off

- [ ] All critical tests passed
- [ ] All high-priority issues documented
- [ ] Testing completed for all 4 locales
- [ ] Cross-browser testing completed

**Tester Name:** ___________________
**Signature:** ___________________
**Date:** ___________________

### Developer Sign-Off

- [ ] All critical issues resolved
- [ ] All high-priority issues resolved or deferred
- [ ] Ready for deployment

**Developer Name:** ___________________
**Signature:** ___________________
**Date:** ___________________

### Product Owner Sign-Off

- [ ] QA results reviewed
- [ ] Deferred issues acceptable
- [ ] Approved for release

**Product Owner Name:** ___________________
**Signature:** ___________________
**Date:** ___________________

---

## Notes

_Additional notes or observations:_

___________________________________________________________

___________________________________________________________

___________________________________________________________
