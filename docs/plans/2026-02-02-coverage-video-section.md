# Coverage Video Section Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the static CoverageRadar component with an immersive full-viewport looping video background showing the Thailand-Malaysia-Singapore route.

**Architecture:** Full-height section with MP4 video background, dark overlay for text readability, centered heading/tagline, and static image fallback on mobile devices.

**Tech Stack:** Astro, Svelte 5, Tailwind CSS 4, native HTML5 video element

---

## Task 1: Set Up Video Assets

**Files:**
- Create: `public/videos/` directory
- Create: `public/videos/coverage-route.mp4` (copy from client-assets)
- Create: `public/videos/coverage-route-poster.jpg` (extract from video)

**Step 1: Create videos directory and copy video file**

```bash
mkdir -p public/videos
cp "client-assets/AQNVcLeKDMvdu7sMBeOkjdlFmKB7b2wfIeiWz_c1JA7O4vfxb69TtxAo-PQGNJHrpaKeVjMxc1wD07d4Z0HhyljBeFuR6rmFLSfO0bH3wuVPfQ.mp4" public/videos/coverage-route.mp4
```

**Step 2: Extract poster image from video (first frame)**

```bash
ffmpeg -i public/videos/coverage-route.mp4 -vframes 1 -q:v 2 public/videos/coverage-route-poster.jpg
```

Note: If ffmpeg is not installed, manually screenshot a good frame from the video and save as `coverage-route-poster.jpg`.

**Step 3: Verify files exist**

```bash
ls -la public/videos/
```

Expected: Both `coverage-route.mp4` (~8MB) and `coverage-route-poster.jpg` exist.

**Step 4: Commit**

```bash
git add public/videos/
git commit -m "assets: add coverage route video and poster image"
```

---

## Task 2: Create CoverageVideo Component

**Files:**
- Create: `src/components/CoverageVideo.svelte`

**Step 1: Create the CoverageVideo component**

```svelte
<script lang="ts">
  interface Props {
    heading?: string;
    tagline?: string;
  }

  let {
    heading = "Coverage Across 3 Nations",
    tagline = "Cross-border motorcycle towing from Thailand to Singapore"
  }: Props = $props();

  let isMobile = $state(false);

  // Check for mobile on mount (client-side only)
  $effect(() => {
    const checkMobile = () => {
      isMobile = window.innerWidth < 768;
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  });

  // Check for reduced motion preference
  let prefersReducedMotion = $state(false);
  $effect(() => {
    prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });
</script>

<section
  class="relative h-screen w-full overflow-hidden"
  id="coverage"
  aria-label="Service coverage area"
>
  <!-- Video Background (hidden on mobile or reduced motion) -->
  {#if !isMobile && !prefersReducedMotion}
    <video
      class="absolute inset-0 h-full w-full object-cover"
      autoplay
      loop
      muted
      playsinline
      poster="/videos/coverage-route-poster.jpg"
      preload="metadata"
    >
      <source src="/videos/coverage-route.mp4" type="video/mp4" />
    </video>
  {:else}
    <!-- Static poster fallback for mobile / reduced motion -->
    <div
      class="absolute inset-0 h-full w-full bg-cover bg-center"
      style="background-image: url('/videos/coverage-route-poster.jpg');"
    ></div>
  {/if}

  <!-- Dark Overlay -->
  <div class="absolute inset-0 bg-black/50"></div>

  <!-- Content -->
  <div class="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
    <h2 class="max-w-2xl text-4xl font-bold text-white drop-shadow-lg md:text-5xl lg:text-6xl">
      {heading}
    </h2>
    <p class="mt-4 max-w-xl text-lg text-gray-200 drop-shadow-md md:text-xl">
      {tagline}
    </p>
  </div>

  <!-- Scroll Indicator -->
  <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
    <svg
      class="h-8 w-8 text-white/70"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
      />
    </svg>
  </div>
</section>
```

**Step 2: Verify file created correctly**

```bash
cat src/components/CoverageVideo.svelte | head -20
```

Expected: File starts with `<script lang="ts">` and contains Props interface.

**Step 3: Commit**

```bash
git add src/components/CoverageVideo.svelte
git commit -m "feat: create CoverageVideo component with video background"
```

---

## Task 3: Integrate CoverageVideo into Homepage

**Files:**
- Modify: `src/pages/[lang]/index.astro`

**Step 1: Update imports - replace CoverageRadar with CoverageVideo**

In `src/pages/[lang]/index.astro`, change line 8:

```diff
- import CoverageRadar from "../../components/CoverageRadar.svelte";
+ import CoverageVideo from "../../components/CoverageVideo.svelte";
```

**Step 2: Replace the Coverage Section (lines 42-73)**

Replace the entire `<!-- Coverage Section -->` block with:

```astro
<!-- Coverage Section - Full Viewport Video -->
<CoverageVideo
  client:load
  heading={t(locale, 'coverage.radar_heading')}
  tagline={t(locale, 'coverage.radar_tagline')}
/>

<!-- Country Coverage Cards -->
<section class="bg-white px-4 py-16 dark:bg-gray-900/50 lg:px-8">
  <div class="mx-auto w-full max-w-[1200px]">
    <div class="mx-auto grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-3">
      {coverageAreas.map((area, index) => (
        <div
          class="reveal-left rounded-2xl border border-gray-100 bg-gray-50 p-5 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
          style={`transition-delay: ${index * 80}ms;`}
        >
          <h4 class="mb-1 flex items-center justify-center gap-2 text-lg font-semibold text-text-main dark:text-white">
            <span class="cursor-default text-2xl transition-transform hover:scale-110">{area.flag}</span> {area.country}
          </h4>
          <p class="text-sm text-text-secondary dark:text-gray-400">{area.cities}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

Note: Using `client:load` instead of `client:visible` because the video needs to start immediately.

**Step 3: Verify dev server works**

```bash
npm run dev
```

Expected: Server starts at localhost:4321, no build errors.

**Step 4: Manual test in browser**

1. Open http://localhost:4321/en/
2. Verify video plays and loops
3. Verify heading and tagline display over video
4. Verify scroll indicator shows at bottom
5. Resize to mobile width - verify static image shows instead

**Step 5: Commit**

```bash
git add src/pages/[lang]/index.astro
git commit -m "feat: integrate CoverageVideo component into homepage"
```

---

## Task 4: Clean Up Old Component (Optional)

**Files:**
- Delete: `src/components/CoverageRadar.svelte` (if no longer needed elsewhere)

**Step 1: Check if CoverageRadar is used elsewhere**

```bash
grep -r "CoverageRadar" src/ --include="*.astro" --include="*.svelte"
```

Expected: No matches (already replaced in index.astro).

**Step 2: Delete the old component**

```bash
rm src/components/CoverageRadar.svelte
```

**Step 3: Commit**

```bash
git add -A
git commit -m "chore: remove unused CoverageRadar component"
```

---

## Task 5: Build and Deploy Verification

**Step 1: Run production build**

```bash
npm run build
```

Expected: Build completes successfully, outputs to `dist/`.

**Step 2: Preview production build**

```bash
npm run preview
```

Test the same items from Task 3 Step 4 in preview mode.

**Step 3: Verify video is included in build**

```bash
ls -la dist/videos/
```

Expected: `coverage-route.mp4` and `coverage-route-poster.jpg` present.

---

## Summary

| Task | Description | Files |
|------|-------------|-------|
| 1 | Set up video assets | `public/videos/*` |
| 2 | Create CoverageVideo component | `src/components/CoverageVideo.svelte` |
| 3 | Integrate into homepage | `src/pages/[lang]/index.astro` |
| 4 | Clean up old component | Remove `CoverageRadar.svelte` |
| 5 | Build verification | Verify production build |

**Total estimated commits:** 4-5
