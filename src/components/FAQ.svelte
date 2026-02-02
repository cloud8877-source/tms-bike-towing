<script lang="ts">
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { ChevronDown } from "lucide-svelte";

  export let items: { question: string; answer: string }[] = [];
  export let title: string = "Frequently Asked Questions";
  export let subtitle: string = "";
  export let ctaText: string = "";
  export let ctaLabel: string = "";
  export let ctaLink: string = "";

  let openIndex: number | null = null;

  function toggle(index: number) {
    openIndex = openIndex === index ? null : index;
  }
</script>

<section class="py-16 md:py-24">
  <div class="mx-auto max-w-5xl px-4 md:px-6">
    <!-- Header -->
    <div class="mx-auto max-w-xl text-center reveal">
      <h2
        class="text-balance text-3xl font-bold md:text-4xl lg:text-5xl text-text-main tracking-tight"
        style="letter-spacing: -0.02em;"
      >
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
      <div class="w-full card-3d-glass px-8 py-3">
        {#each items as item, i}
          <div
            class="border-dashed {i < items.length - 1
              ? 'border-b border-gray-200'
              : ''}"
          >
            <button
              class="w-full flex items-center justify-between py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-inset hover:opacity-80 transition-opacity duration-150 cursor-pointer"
              on:click={() => toggle(i)}
              aria-expanded={openIndex === i}
            >
              <span
                class="font-medium text-text-main text-base leading-relaxed pr-4"
              >
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
              <div transition:slide={{ duration: 300, easing: quintOut }}>
                <div
                  class="pb-4 text-text-secondary text-base leading-relaxed answer-fade"
                >
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
          {ctaText}{" "}
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
