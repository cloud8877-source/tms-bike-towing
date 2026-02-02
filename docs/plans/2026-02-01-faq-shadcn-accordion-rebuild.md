# FAQ Shadcn-Style Accordion Rebuild

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rebuild FAQ.svelte as a clean shadcn-style accordion with rounded card container, dashed borders between items, improved typography, and modern styling while preserving i18n integration.

**Architecture:** Replace current FAQ component with a shadcn-inspired design featuring a contained card wrapper with ring decoration, collapsible accordion items with dashed separators, ChevronDown rotation animation, and improved visual hierarchy matching the reference React component.

**Tech Stack:** Svelte 5, Tailwind CSS 4, Lucide Svelte (ChevronDown icon)

---

## Task 1: Update FAQ.svelte Component

**Files:**
- Modify: `src/components/FAQ.svelte`

**Step 1: Read current FAQ.svelte**

Verify current implementation structure before modifying.

**Step 2: Rewrite FAQ.svelte with shadcn-style design**

Replace entire component with:

```svelte
<script lang="ts">
  import { slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { ChevronDown } from 'lucide-svelte';

  export let items: { question: string; answer: string }[] = [];
  export let title: string = 'Frequently Asked Questions';
  export let subtitle: string = '';
  export let ctaText: string = '';
  export let ctaLabel: string = '';
  export let ctaLink: string = '';

  let openIndex: number | null = null;

  function toggle(index: number) {
    openIndex = openIndex === index ? null : index;
  }
</script>

<section class="py-16 md:py-24">
  <div class="mx-auto max-w-5xl px-4 md:px-6">
    <!-- Header -->
    <div class="mx-auto max-w-xl text-center reveal">
      <h2 class="text-balance text-3xl font-bold md:text-4xl lg:text-5xl text-text-main tracking-tight" style="letter-spacing: -0.02em;">
        {title}
      </h2>
      {#if subtitle}
        <p class="text-text-secondary mt-4 text-balance">
          {subtitle}
        </p>
      {/if}
    </div>

    <!-- Accordion Container -->
    <div class="mx-auto mt-12 max-w-xl stagger-children">
      <div class="bg-white w-full rounded-2xl border border-gray-200 px-8 py-3 shadow-sm ring-4 ring-gray-100/50">
        {#each items as item, i}
          <div
            class="border-dashed {i < items.length - 1 ? 'border-b border-gray-200' : ''}"
          >
            <button
              class="w-full flex items-center justify-between py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-inset hover:opacity-80 transition-opacity duration-150 cursor-pointer"
              on:click={() => toggle(i)}
              aria-expanded={openIndex === i}
            >
              <span class="font-medium text-text-main text-base leading-relaxed pr-4">
                {item.question}
              </span>
              <span
                class="flex-shrink-0 transition-transform duration-300"
                class:rotate-180={openIndex === i}
              >
                <ChevronDown class="w-5 h-5 text-text-secondary" />
              </span>
            </button>

            {#if openIndex === i}
              <div
                transition:slide={{ duration: 300, easing: quintOut }}
              >
                <div class="pb-4 text-text-secondary text-base leading-relaxed answer-fade">
                  {@html item.answer}
                </div>
              </div>
            {/if}
          </div>
        {/each}
      </div>

      <!-- Contact CTA -->
      {#if ctaText && ctaLink}
        <p class="text-text-secondary mt-6 px-8 text-center reveal">
          {ctaText}{' '}
          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            class="text-primary font-medium hover:underline"
          >
            {ctaLabel}
          </a>
        </p>
      {/if}
    </div>
  </div>
</section>

<style>
  .rotate-180 {
    transform: rotate(180deg);
  }

  /* Answer fade-in effect */
  .answer-fade {
    animation: answer-appear 0.2s ease-out 0.05s both;
  }

  @keyframes answer-appear {
    from {
      opacity: 0;
      transform: translateY(-4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Respect reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .answer-fade {
      animation: none;
    }
    .rotate-180 {
      transition: none;
    }
  }
</style>
```

**Step 3: Run build to verify no errors**

Run: `npm run build`
Expected: Build succeeds with no TypeScript or Svelte errors

**Step 4: Commit**

```bash
git add src/components/FAQ.svelte
git commit -m "refactor(faq): rebuild as shadcn-style accordion

- Add rounded card container with ring decoration
- Replace Material icons with Lucide ChevronDown
- Use dashed border separators between items
- Improve typography with text-balance
- Add optional subtitle prop
- Make CTA section configurable with props
- Maintain i18n support and HTML answer rendering

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

---

## Task 2: Update i18n Translation Files

**Files:**
- Modify: `src/i18n/en.json`
- Modify: `src/i18n/ms.json`
- Modify: `src/i18n/zh.json`
- Modify: `src/i18n/th.json`

**Step 1: Add new FAQ translation keys to en.json**

Add these keys inside the `"faq"` object:

```json
"subtitle": "Discover quick and comprehensive answers to common questions about our services.",
"ctaText": "Can't find what you're looking for? Contact our",
"ctaLabel": "customer support team",
"ctaLink": "https://wa.me/66968873125"
```

**Step 2: Add translation keys to ms.json**

```json
"subtitle": "Temui jawapan pantas dan komprehensif kepada soalan lazim tentang perkhidmatan kami.",
"ctaText": "Tidak jumpa apa yang anda cari? Hubungi",
"ctaLabel": "pasukan sokongan pelanggan kami",
"ctaLink": "https://wa.me/66968873125"
```

**Step 3: Add translation keys to zh.json**

```json
"subtitle": "快速全面地了解我们服务的常见问题答案。",
"ctaText": "找不到您需要的答案？联系我们的",
"ctaLabel": "客服团队",
"ctaLink": "https://wa.me/66968873125"
```

**Step 4: Add translation keys to th.json**

```json
"subtitle": "ค้นหาคำตอบที่รวดเร็วและครอบคลุมสำหรับคำถามที่พบบ่อยเกี่ยวกับบริการของเรา",
"ctaText": "หาไม่เจอสิ่งที่คุณต้องการ? ติดต่อ",
"ctaLabel": "ทีมสนับสนุนลูกค้าของเรา",
"ctaLink": "https://wa.me/66968873125"
```

**Step 5: Commit**

```bash
git add src/i18n/*.json
git commit -m "feat(i18n): add FAQ subtitle and CTA translations

- Add subtitle for all 4 locales (en, ms, zh, th)
- Add configurable CTA text, label, and link
- WhatsApp contact link for customer support

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

---

## Task 3: Update Landing Page FAQ Integration

**Files:**
- Modify: `src/pages/[lang]/index.astro`

**Step 1: Read current index.astro FAQ section**

Locate the FAQ component usage (around line 77).

**Step 2: Update FAQ props to include new values**

Replace the FAQ component call:

```astro
<FAQ
  client:visible
  items={faqItems}
  title={t(locale, 'faq.title')}
  subtitle={t(locale, 'faq.subtitle')}
  ctaText={t(locale, 'faq.ctaText')}
  ctaLabel={t(locale, 'faq.ctaLabel')}
  ctaLink={t(locale, 'faq.ctaLink')}
/>
```

**Step 3: Run dev server and verify**

Run: `npm run dev`
Expected: FAQ renders with new shadcn-style design at http://localhost:4321/en/

**Step 4: Commit**

```bash
git add src/pages/[lang]/index.astro
git commit -m "feat(landing): pass new FAQ props for enhanced UX

- Add subtitle for better context
- Configure CTA with i18n support
- Maintain client:visible hydration strategy

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

---

## Task 4: Visual Verification

**Step 1: Start dev server**

Run: `npm run dev`

**Step 2: Test all locales visually**

Open each URL and verify accordion works:
- http://localhost:4321/en/
- http://localhost:4321/ms/
- http://localhost:4321/zh/
- http://localhost:4321/th/

**Expected behavior:**
- Rounded card container with subtle ring shadow
- Dashed separators between FAQ items
- ChevronDown icon rotates 180° on expand
- Smooth slide animation (300ms)
- Answer fade-in effect
- CTA section displays below accordion
- Responsive on mobile/desktop

**Step 3: Test accessibility**

- Tab through accordion items
- Verify focus ring visibility
- Test with keyboard (Enter/Space to toggle)
- Check `aria-expanded` attribute updates

**Step 4: Run production build**

Run: `npm run build`
Expected: Build succeeds, outputs to dist/

---

## Summary

| Task | Description | Files |
|------|-------------|-------|
| 1 | Rebuild FAQ.svelte with shadcn-style | `src/components/FAQ.svelte` |
| 2 | Add i18n translations | `src/i18n/{en,ms,zh,th}.json` |
| 3 | Update landing page props | `src/pages/[lang]/index.astro` |
| 4 | Visual and accessibility verification | — |

**Total commits:** 3
**New dependencies:** None (lucide-svelte already installed)
