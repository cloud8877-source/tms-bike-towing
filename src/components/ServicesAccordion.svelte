<script lang="ts">
  import { fade } from 'svelte/transition';
  import { slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { Truck, Shield, Clock } from 'lucide-svelte';

  type ServiceItem = {
    id: string;
    icon: 'truck' | 'shield' | 'clock';
    title: string;
    description: string;
    image: string;
  };

  export let services: ServiceItem[] = [];
  export let sectionSubtitle: string = '';

  let activeItem: string = services[0]?.id || 'item-1';

  function toggle(id: string) {
    activeItem = id;
  }

  function getIcon(icon: string) {
    switch (icon) {
      case 'truck': return Truck;
      case 'shield': return Shield;
      case 'clock': return Clock;
      default: return Truck;
    }
  }

  $: activeService = services.find(s => s.id === activeItem) || services[0];
</script>

<section class="px-4 lg:px-8 py-20 max-w-[1200px] mx-auto w-full" id="services">
  <!-- Header -->
  <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 reveal">
    <div class="max-w-2xl">
      <p class="text-primary font-semibold uppercase tracking-wider text-sm mb-3">Service Excellence</p>
      <h2 class="text-3xl lg:text-4xl font-bold text-text-main dark:text-white tracking-tight" style="letter-spacing: -0.02em;">
        Why Riders Trust TMS
      </h2>
      <p class="text-text-secondary dark:text-gray-400 text-lg mt-4 leading-relaxed">
        {sectionSubtitle}
      </p>
    </div>
  </div>

  <!-- Two Column Layout -->
  <div class="grid gap-8 lg:gap-12 md:grid-cols-2">

    <!-- Image Panel (top on mobile, right on desktop) -->
    <div class="order-1 md:order-2">
      <div class="border-beam-container relative bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-2">
        <!-- Decorative stripe pattern -->
        <div class="w-16 absolute inset-y-0 right-0 border-l border-gray-100 dark:border-gray-700 bg-[repeating-linear-gradient(-45deg,transparent,transparent_7px,rgba(0,0,0,0.02)_7px,rgba(0,0,0,0.02)_8px)]"></div>

        <!-- Image container -->
        <div class="relative aspect-[4/3] w-[calc(100%-3rem)] rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-900">
          {#key activeItem}
            <img
              src={activeService?.image}
              alt={activeService?.title}
              class="w-full h-full object-cover"
              in:fade={{ duration: 300, easing: quintOut }}
            />
          {/key}
        </div>

        <!-- Border beam effect -->
        <div class="border-beam"></div>
      </div>
    </div>

    <!-- Accordion (bottom on mobile, left on desktop) -->
    <div class="order-2 md:order-1 space-y-3">
      {#each services as service, i}
        <div
          class="rounded-2xl border overflow-hidden transition-all duration-200 {activeItem === service.id ? 'border-primary/30 bg-white dark:bg-gray-800 shadow-sm' : 'border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900'}"
        >
          <button
            class="w-full flex items-center gap-4 p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-inset transition-colors duration-150"
            on:click={() => toggle(service.id)}
            aria-expanded={activeItem === service.id}
          >
            <!-- Icon -->
            <div class="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 {activeItem === service.id ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}">
              <svelte:component this={getIcon(service.icon)} class="w-5 h-5" />
            </div>

            <!-- Title -->
            <span class="font-semibold text-lg leading-tight transition-colors duration-150 {activeItem === service.id ? 'text-primary' : 'text-text-main dark:text-white'}">
              {service.title}
            </span>

            <!-- Chevron -->
            <span
              class="ml-auto flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 {activeItem === service.id ? 'bg-primary/10 rotate-180' : 'bg-gray-100 dark:bg-gray-700'}"
            >
              <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>

          {#if activeItem === service.id}
            <div transition:slide={{ duration: 300, easing: quintOut }}>
              <div class="px-5 pb-5 text-text-secondary dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-gray-700 pt-4 ml-14 answer-fade">
                {service.description}
              </div>
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .rotate-180 {
    transform: rotate(180deg);
  }

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

  @media (prefers-reduced-motion: reduce) {
    .answer-fade {
      animation: none;
    }
  }
</style>
