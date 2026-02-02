# Replace Coverage Section Flags Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace rectangular flag SVGs with circular badge-style flag icons and increase their display size in the CoverageRadar component

**Architecture:** Two-part change: (1) Replace existing rectangular flag SVG files (`public/images/flags/*.svg`) with new circular badge-style versions, (2) Update CoverageRadar.svelte to display flags at larger size.

**Tech Stack:** SVG files, Svelte 5 component, Tailwind CSS

---

## Task 1: Replace Singapore Flag

**Files:**
- Modify: `public/images/flags/sg.svg`

**Step 1: Replace sg.svg content**

Replace the entire file content with:

```svg
<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g clip-path="url(#SG_svg__a)">
        <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"
            fill="#F0F0F0" />
        <path d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12" fill="#D80027" />
        <path
            d="M7.304 6.261a3.653 3.653 0 0 1 2.87-3.567 3.652 3.652 0 1 0 0 7.135 3.653 3.653 0 0 1-2.87-3.568ZM12 2.87l.258.797h.839l-.678.493.259.797-.679-.493-.678.493.26-.797-.679-.493h.839l.258-.797Z"
            fill="#F0F0F0"
        />
        <path
            d="m9.966 4.435.26.797h.837l-.678.492.26.798-.679-.493-.678.493.26-.798-.679-.492h.838l.26-.797Zm4.067 0 .259.797h.838l-.678.492.259.798-.678-.493-.678.493.259-.798-.679-.492h.839l.259-.797Zm-.783 2.348.26.798h.838l-.679.492.26.797-.678-.492-.679.492.26-.797-.679-.492h.838l.26-.798Zm-2.501 0 .259.798h.838l-.678.492.259.797-.678-.492-.679.492.26-.797-.679-.492h.838l.26-.798Z"
            fill="#F0F0F0"
        />
    </g>
    <defs>
        <clipPath id="SG_svg__a">
            <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
    </defs>
</svg>
```

**Step 2: Verify file saved**

Run: `cat public/images/flags/sg.svg | head -5`
Expected: Should show new circular SVG starting with `<svg width="24" height="24"`

**Step 3: Commit**

```bash
git add public/images/flags/sg.svg
git commit -m "feat: replace Singapore flag with circular badge style"
```

---

## Task 2: Replace Malaysia Flag

**Files:**
- Modify: `public/images/flags/my.svg`

**Step 1: Replace my.svg content**

Replace the entire file content with:

```svg
<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g clip-path="url(#MY_svg__a)">
        <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"
            fill="#F0F0F0" />
        <path
            d="M11.479 12H24a12.01 12.01 0 0 0-.413-3.13H11.479V12Zm0-6.261h10.76a12.063 12.063 0 0 0-2.769-3.13h-7.99v3.13ZM12.001 24c2.824 0 5.42-.976 7.47-2.608H4.531A11.95 11.95 0 0 0 12.001 24ZM1.762 18.26h20.477a11.933 11.933 0 0 0 1.348-3.13H.414a11.89 11.89 0 0 0 1.348 3.13Z"
            fill="#D80027"
        />
        <path d="M12 12V0C5.373 0 0 5.373 0 12h12Z" fill="#0052B4" />
        <path
            d="M7.98 10.27a2.967 2.967 0 1 1 1.412-5.577 3.652 3.652 0 1 0 0 5.221 2.95 2.95 0 0 1-1.412.357Z"
            fill="#FFDA44"
        />
        <path
            d="m8.816 5.217.527 1.102 1.19-.275L10 7.143l.957.759-1.191.268.003 1.221-.953-.764-.952.764.003-1.22-1.191-.27.957-.758L7.1 6.044l1.19.275.526-1.102Z"
            fill="#FFDA44"
        />
    </g>
    <defs>
        <clipPath id="MY_svg__a">
            <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
    </defs>
</svg>
```

**Step 2: Verify file saved**

Run: `cat public/images/flags/my.svg | head -5`
Expected: Should show new circular SVG starting with `<svg width="24" height="24"`

**Step 3: Commit**

```bash
git add public/images/flags/my.svg
git commit -m "feat: replace Malaysia flag with circular badge style"
```

---

## Task 3: Replace Thailand Flag

**Files:**
- Modify: `public/images/flags/th.svg`

**Step 1: Replace th.svg content**

Replace the entire file content with:

```svg
<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g clip-path="url(#TH_svg__a)">
        <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"
            fill="#F0F0F0" />
        <path
            d="M23.254 7.826H.746A11.973 11.973 0 0 0 0 12c0 1.468.264 2.874.746 4.174h22.508c.482-1.3.746-2.706.746-4.174 0-1.468-.264-2.874-.746-4.174Z"
            fill="#0052B4"
        />
        <path
            d="M12 0a11.972 11.972 0 0 0-9.096 4.173h18.194A11.972 11.972 0 0 0 12 0Zm9.096 19.826H2.903A11.972 11.972 0 0 0 12 24c3.637 0 6.896-1.618 9.096-4.174Z"
            fill="#D80027"
        />
    </g>
    <defs>
        <clipPath id="TH_svg__a">
            <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
    </defs>
</svg>
```

**Step 2: Verify file saved**

Run: `cat public/images/flags/th.svg | head -5`
Expected: Should show new circular SVG starting with `<svg width="24" height="24"`

**Step 3: Commit**

```bash
git add public/images/flags/th.svg
git commit -m "feat: replace Thailand flag with circular badge style"
```

---

## Task 4: Increase Flag Display Size in CoverageRadar

**Files:**
- Modify: `src/components/CoverageRadar.svelte:35-46`

**Step 1: Update flag card container and image sizes**

In CoverageRadar.svelte, change the flag card div (line 35-36) from:
```svelte
class="flag-card absolute z-10 flex size-12 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md transition-transform duration-300 hover:scale-110 dark:border-gray-700 dark:bg-gray-800 sm:size-14"
```

To:
```svelte
class="flag-card absolute z-10 flex size-16 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md transition-transform duration-300 hover:scale-110 dark:border-gray-700 dark:bg-gray-800 sm:size-20"
```

**Step 2: Update img element size**

Change the img element (line 43) from:
```svelte
class="size-8 rounded-sm object-cover sm:size-9"
```

To:
```svelte
class="size-12 rounded-full object-cover sm:size-16"
```

Note: Changed `rounded-sm` to `rounded-full` since the new SVGs are circular badge style.

**Step 3: Verify build passes**

Run: `npm run build`
Expected: Build completes without errors

**Step 4: Commit**

```bash
git add src/components/CoverageRadar.svelte
git commit -m "feat: increase flag display size in coverage section"
```

---

## Task 5: Visual Verification

**Step 1: Start dev server**

Run: `npm run dev`
Expected: Server starts at localhost:4321

**Step 2: Verify flags display correctly**

Navigate to: `http://localhost:4321/en/`
Scroll to Coverage section
Expected:
- All three flags should appear as circular badges (larger than before)
- Singapore: Red top half, white bottom, crescent moon and stars
- Malaysia: Red/white stripes with blue canton, yellow crescent/star
- Thailand: Red/white/blue horizontal stripes in circular shape
- Flag containers: 64px on mobile (size-16), 80px on desktop (size-20)
- Flag images: 48px on mobile (size-12), 64px on desktop (size-16)

**Step 3: Check responsive behavior**

Resize browser to mobile width (~375px)
Expected: Flags should scale down proportionally but remain clearly visible

**Step 4: Final commit (if any adjustments needed)**

```bash
git add -A
git commit -m "chore: finalize coverage section flag updates"
```
