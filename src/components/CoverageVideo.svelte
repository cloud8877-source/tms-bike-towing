<script lang="ts">
  import { gsap } from "gsap";

  interface Props {
    heading?: string;
    tagline?: string;
  }

  let {
    heading = "Coverage Across 3 Nations",
    tagline = "Cross-border motorcycle towing from Thailand to Singapore",
  }: Props = $props();

  let isHovering = $state(false);
  let prefersReducedMotion = $state(false);
  let isMobile = $state(false);
  let videoElement: HTMLVideoElement | null = $state(null);
  let containerRef: HTMLDivElement | null = $state(null);
  let sectionRef: HTMLElement | null = $state(null);

  // Check for reduced motion preference
  $effect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotion = mediaQuery.matches;

    const handleChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion = e.matches;
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  });

  // Check for mobile viewport
  $effect(() => {
    const checkMobile = () => {
      isMobile = window.innerWidth < 768;
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  });

  // Desktop: Autoplay when section scrolls into view
  $effect(() => {
    if (!sectionRef || isMobile || prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElement?.play().catch(() => {});
          } else {
            videoElement?.pause();
          }
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(sectionRef);
    return () => observer.disconnect();
  });

  // Mobile: Animate container expansion on hover
  $effect(() => {
    if (!containerRef || !isMobile || prefersReducedMotion) return;

    gsap.to(containerRef, {
      maxWidth: isHovering ? "56rem" : "24rem",
      duration: 0.5,
      ease: "power2.out",
    });
  });

  function handleMouseEnter() {
    if (prefersReducedMotion) return;
    isHovering = true;
    videoElement?.play().catch(() => {
      // Play may be blocked, ignore silently
    });
  }

  function handleMouseLeave() {
    if (prefersReducedMotion) return;
    isHovering = false;
    videoElement?.pause();
  }
</script>

<section
  bind:this={sectionRef}
  class="relative w-full overflow-hidden bg-transparent"
  aria-label="Coverage area video showing Thailand, Malaysia, and Singapore route"
>
  <!-- Video/Image Container - hover to expand and play on mobile, always visible on desktop -->
  <div
    bind:this={containerRef}
    class="relative mx-auto w-full overflow-hidden card-3d-glass {isMobile
      ? 'max-w-sm cursor-pointer'
      : 'max-w-4xl'}"
    onmouseenter={isMobile ? handleMouseEnter : undefined}
    onmouseleave={isMobile ? handleMouseLeave : undefined}
    role={isMobile ? "button" : undefined}
    tabindex={isMobile ? 0 : undefined}
    aria-label={isMobile ? "Hover to play coverage route animation" : undefined}
    onfocus={isMobile ? handleMouseEnter : undefined}
    onblur={isMobile ? handleMouseLeave : undefined}
  >
    <!-- Aspect ratio wrapper for square video -->
    <div class="relative aspect-square w-full">
      <!-- Video element - always visible on desktop, fades in on hover for mobile -->
      <video
        bind:this={videoElement}
        loop
        muted
        playsinline
        preload="metadata"
        poster="/videos/coverage-route-poster.webp"
        class="absolute inset-0 h-full w-full object-contain transition-opacity duration-300"
        class:opacity-0={isMobile && !isHovering}
        aria-label="Animated map showing the Thailand to Singapore towing route"
      >
        <source src="/videos/coverage-route.mp4" type="video/mp4" />
      </video>

      <!-- Thumbnail overlay - hidden on desktop, visible on mobile when not hovering -->
      <img
        src="/videos/coverage-route-poster.webp"
        alt="Map showing TMS towing coverage route from Thailand through Malaysia to Singapore"
        class="absolute inset-0 h-full w-full object-contain transition-opacity duration-300"
        class:opacity-0={!isMobile || isHovering}
      />

      <!-- Play indicator - hidden on desktop, visible on mobile when not hovering -->
      <div
        class="pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-300"
        class:hidden={!isMobile}
        class:opacity-0={isHovering}
      >
        <div class="rounded-full bg-white/90 p-4 shadow-lg backdrop-blur-sm">
          <svg
            class="h-8 w-8 text-primary"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      <!-- Frosty gradient overlay for text readability on light theme -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-white/95 via-white/60 to-transparent"
      ></div>

      <!-- Text overlay positioned at bottom -->
      <div
        class="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end pb-8 text-center sm:pb-12"
      >
        <h2
          class="text-balance px-4 text-2xl font-bold tracking-tight text-[#101418] sm:text-3xl md:text-4xl"
        >
          {heading}
        </h2>
        <p
          class="mt-2 max-w-lg px-4 text-sm text-[#64748b] sm:text-base font-medium"
        >
          {tagline}
        </p>
      </div>
    </div>
  </div>
</section>

<style>
  /* Ensure video section has appropriate minimum height on very small screens */
  section {
    min-height: 280px;
  }
</style>
