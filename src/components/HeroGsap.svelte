<script lang="ts">
  import { onMount } from 'svelte';
  import gsap from 'gsap';

  interface Props {
    titleWords: string[];
    subtitle: string;
    carouselLabel: string;
    ctaWhatsapp: string;
    ctaServices: string;
    whatsappUrl: string;
    locale: string;
  }

  let {
    titleWords,
    subtitle,
    carouselLabel,
    ctaWhatsapp,
    ctaServices,
    whatsappUrl,
    locale
  }: Props = $props();

  const flags = [
    { src: '/images/flags/th.svg', alt: 'Thailand', name: 'Thailand' },
    { src: '/images/flags/my.svg', alt: 'Malaysia', name: 'Malaysia' },
    { src: '/images/flags/sg.svg', alt: 'Singapore', name: 'Singapore' },
  ];

  onMount(() => {
    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // Show all elements immediately without animation
      gsap.set('.hero-badge, .hero-word, .hero-logo, .hero-subtitle, .hero-cta, .hero-flags, .hero-flag', {
        opacity: 1,
        y: 0,
        scale: 1,
        clearProps: 'all'
      });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Badge animation - fromTo for explicit start/end
    tl.fromTo('.hero-badge',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 }
    );

    // Headline words - main stagger effect
    tl.fromTo('.hero-word',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.2 },
      '-=0.2'
    );

    // Logo
    tl.fromTo('.hero-logo',
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6 },
      '-=0.3'
    );

    // Subtitle
    tl.fromTo('.hero-subtitle',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 },
      '-=0.3'
    );

    // CTA buttons
    tl.fromTo('.hero-cta',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, stagger: 0.1 },
      '-=0.2'
    );

    // Flags section
    tl.fromTo('.hero-flags',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4 },
      '-=0.2'
    );

    tl.fromTo('.hero-flag',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, stagger: 0.1 },
      '-=0.2'
    );
  });
</script>

<section class="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white">
  <!-- Background decorative elements -->
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl"></div>
    <div class="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary-light/5 blur-3xl"></div>
  </div>

  <!-- Main content -->
  <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
    <div class="flex min-h-screen flex-col items-center justify-center py-20 text-center">

      <!-- Badge / Tagline -->
      <div class="hero-badge mb-8">
        <span class="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
          <span class="flex h-2 w-2">
            <span class="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-primary opacity-75"></span>
            <span class="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
          </span>
          {carouselLabel}
        </span>
      </div>

      <!-- Headline with staggered words -->
      <h1
        class="mb-6 text-4xl font-bold leading-tight tracking-tight text-text-main md:text-5xl lg:text-6xl"
        aria-label={titleWords.join(' ')}
      >
        <span class="flex flex-wrap justify-center gap-x-3">
          {#each titleWords as word}
            <span class="hero-word" aria-hidden="true">{word}</span>
          {/each}
        </span>
        <span class="sr-only">{titleWords.join(' ')}</span>
      </h1>

      <!-- Logo Image - Hero Visual -->
      <div class="hero-logo mb-8">
        <img
          src="/images/hero-logo.png"
          alt="TMS Bike Towing"
          class="h-auto w-full max-w-2xl drop-shadow-2xl"
          width="800"
          height="200"
        />
      </div>

      <!-- Subtitle -->
      <p class="hero-subtitle mb-10 max-w-2xl text-lg leading-relaxed text-text-secondary lg:text-xl">
        {subtitle}
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col items-center gap-4 sm:flex-row">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="hero-cta group inline-flex items-center gap-3 rounded-xl bg-[#25D366] px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#1fb855] hover:shadow-xl hover:scale-[1.02]"
        >
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          {ctaWhatsapp}
        </a>

        <a
          href={`/${locale}/#services`}
          class="hero-cta inline-flex items-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-8 py-4 text-base font-semibold text-text-main transition-all hover:border-primary hover:bg-gray-50"
        >
          {ctaServices}
          <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </a>
      </div>

      <!-- Country Flags Row -->
      <div class="hero-flags mt-16 flex flex-col items-center gap-6">
        <p class="text-sm font-medium text-text-secondary">
          {carouselLabel}
        </p>
        <div class="flex items-center gap-8">
          {#each flags as flag}
            <div class="hero-flag group flex flex-col items-center gap-2">
              <div class="flex h-16 w-16 items-center justify-center rounded-xl bg-white p-2 shadow-md ring-1 ring-gray-100 transition-all group-hover:scale-110 group-hover:shadow-lg">
                <img
                  src={flag.src}
                  alt={flag.alt}
                  class="h-10 w-10 object-contain"
                  width="40"
                  height="40"
                />
              </div>
              <span class="text-xs font-medium text-text-secondary">{flag.name}</span>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  /* Hide animated elements initially to prevent flash before GSAP animates them */
  .hero-badge,
  .hero-word,
  .hero-logo,
  .hero-subtitle,
  .hero-cta,
  .hero-flags,
  .hero-flag {
    opacity: 0;
  }
</style>
