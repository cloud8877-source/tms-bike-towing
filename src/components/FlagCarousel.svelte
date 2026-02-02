<script lang="ts">
  interface Props {
    dark?: boolean;
  }

  let { dark = false }: Props = $props();
  let paused = $state(false);

  const flags = [
    { src: '/images/flags/th.svg', alt: 'Thailand', name: 'Thailand' },
    { src: '/images/flags/sg.svg', alt: 'Singapore', name: 'Singapore' },
    { src: '/images/flags/my.svg', alt: 'Malaysia', name: 'Malaysia' },
  ];

  // Triple the flags for seamless infinite loop
  const loopedFlags = [...flags, ...flags, ...flags];
</script>

<div
  class="flag-carousel relative w-full overflow-hidden py-4"
  role="region"
  aria-label="Countries we serve"
  onmouseenter={() => (paused = true)}
  onmouseleave={() => (paused = false)}
>
  <!-- Progressive blur - left edge -->
  <div
    class="pointer-events-none absolute left-0 top-0 z-10 h-full w-16"
    class:blur-light={!dark}
    class:blur-dark={dark}
  ></div>

  <!-- Progressive blur - right edge -->
  <div
    class="pointer-events-none absolute right-0 top-0 z-10 h-full w-16"
    class:blur-light-right={!dark}
    class:blur-dark-right={dark}
  ></div>

  <!-- Scrolling track -->
  <div
    class="carousel-track flex items-center gap-10"
    class:paused
  >
    {#each loopedFlags as flag, i}
      <div class="flag-item flex flex-shrink-0 flex-col items-center gap-2">
        <div class="h-10 w-16 overflow-hidden rounded-md shadow-md ring-1 ring-white/10">
          <img
            src={flag.src}
            alt={flag.alt}
            class="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <span class="text-xs font-medium" class:text-gray-400={dark} class:text-text-secondary={!dark}>
          {flag.name}
        </span>
      </div>
    {/each}
  </div>
</div>

<style>
  .carousel-track {
    animation: carousel-scroll 20s linear infinite;
    width: max-content;
  }

  .carousel-track.paused {
    animation-play-state: paused;
  }

  @keyframes carousel-scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-33.333%);
    }
  }

  /* Light mode blur gradients */
  .blur-light {
    background: linear-gradient(to right, white, transparent);
  }
  .blur-light-right {
    background: linear-gradient(to left, white, transparent);
  }

  /* Dark mode blur gradients */
  .blur-dark {
    background: linear-gradient(to right, #0a0a0f, transparent);
  }
  .blur-dark-right {
    background: linear-gradient(to left, #0a0a0f, transparent);
  }

  /* Respect reduced motion preference */
  @media (prefers-reduced-motion: reduce) {
    .carousel-track {
      animation: none;
    }
  }
</style>
