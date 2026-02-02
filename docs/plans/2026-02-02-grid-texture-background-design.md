# Grid Texture Background Design

## Summary

Add a full-page grid texture overlay with radial gradient background using CSS pseudo-elements on `<body>`. The gradient radiates from white center to blue-purple edges, with a subtle grid pattern using `mix-blend-overlay`.

## Specifications

| Property | Value |
|----------|-------|
| Gradient type | Radial (ellipse from center) |
| Colors | White → Sky Blue (#01C3FF) → Electric Blue (#1170FF) → Royal Blue (#211AFF) |
| Grid spacing | 50px |
| Grid line width | 1px |
| Grid opacity | 12% (light mode), 8% (dark mode) |
| Blend mode | overlay |

## Implementation

Add to `src/styles/global.css` after the existing `body` styles:

```css
/* -------------------------------------------------------------------------- */
/* GLOBAL BACKGROUND TEXTURE                                                   */
/* -------------------------------------------------------------------------- */

/* Radial gradient background layer */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  z-index: -2;
  background: radial-gradient(
    ellipse at center,
    #ffffff 0%,
    var(--color-logo-gradient-top) 25%,
    var(--color-logo-gradient-mid) 60%,
    var(--color-logo-gradient-bottom) 100%
  );
}

/* Grid texture overlay */
body::after {
  content: '';
  position: fixed;
  inset: 0;
  z-index: -1;
  opacity: 0.12;
  mix-blend-mode: overlay;
  pointer-events: none;
  background-image:
    repeating-linear-gradient(
      to right,
      rgba(255, 255, 255, 0.5) 0px,
      rgba(255, 255, 255, 0.5) 1px,
      transparent 1px,
      transparent 50px
    ),
    repeating-linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.5) 0px,
      rgba(255, 255, 255, 0.5) 1px,
      transparent 1px,
      transparent 50px
    );
}

/* Dark mode adjustments */
html.dark body::before {
  background: radial-gradient(
    ellipse at center,
    var(--color-background-dark) 0%,
    #0a1628 30%,
    #061020 100%
  );
}

html.dark body::after {
  opacity: 0.08;
}
```

## Design Decisions

1. **CSS-only approach** - No JavaScript, no components, no hydration cost
2. **Fixed positioning** - Grid stays stable during scroll
3. **Negative z-index** - Sits behind all content without affecting layout
4. **Uses brand colors** - Leverages existing CSS variables for consistency
5. **Subtle opacity** - 12% provides texture without competing with content

## Files Modified

- `src/styles/global.css` - Add background texture styles
