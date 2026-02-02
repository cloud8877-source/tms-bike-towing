<script lang="ts">
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";

  interface ServiceItem {
    id: string;
    icon: string;
    title: string;
    description: string;
    image: string;
    class?: string;
  }

  interface Props {
    services: ServiceItem[];
    sectionSubtitle: string;
  }

  let { services, sectionSubtitle }: Props = $props();

  let visible = $state(false);
  let containerRef: HTMLElement | undefined = $state();

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          visible = true;
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (containerRef) {
      observer.observe(containerRef);
    }

    return () => observer.disconnect();
  });
</script>

<section id="services" class="py-24 bg-transparent relative overflow-hidden">
  <div
    class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10"
    bind:this={containerRef}
  >
    <!-- Section Header -->
    <div class="mb-16 text-center max-w-2xl mx-auto">
      {#if visible}
        <div in:fly={{ y: 20, duration: 600, delay: 0 }}>
          <span
            class="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-4"
          >
            Our Expertise
          </span>
          <h2
            class="text-4xl md:text-5xl font-bold text-text-main mb-6 tracking-tight"
          >
            Premium Roadside Services
          </h2>
          <p class="text-lg text-text-secondary leading-relaxed">
            {sectionSubtitle}
          </p>
        </div>
      {/if}
    </div>

    <!-- Bento Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
      {#each services as service, i}
        {#if visible}
          <div
            class="group relative overflow-hidden card-3d-glass {service.class ||
              ''}"
            in:fly={{ y: 30, duration: 800, delay: 200 + i * 100 }}
          >
            <!-- Content -->
            <div class="relative p-8 h-full flex flex-col justify-start">
              <!-- Jewel Icon -->
              <div
                class="mb-6 h-14 w-14 flex items-center justify-center icon-jewel text-[#1170FF] transform transition-transform duration-300 group-hover:-translate-y-2"
              >
                {#if service.icon === "truck"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    ><path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    /></svg
                  >
                {:else if service.icon === "shield"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    ><path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    /></svg
                  >
                {:else if service.icon === "map"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    ><path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0121 18.382V7.618a1 1 0 01-.806-.984A10 10 0 0020.1 7m-11.1 13l5.447-2.724A1 1 0 0115 16.382V5.618a1 1 0 011.553-.894L21 7M9 7h12"
                    /></svg
                  >
                {:else}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    ><path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    /></svg
                  >
                {/if}
              </div>

              <!-- Text -->
              <h3
                class="text-2xl font-bold mb-3 text-[#101418] transform transition-transform duration-300 group-hover:-translate-y-1"
              >
                {service.title}
              </h3>
              <p
                class="text-[#64748b] leading-relaxed text-sm opacity-90 transform transition-transform duration-300 group-hover:-translate-y-1"
              >
                {service.description}
              </p>

              <!-- Action Arrow (Visible on hover) -->
              <div
                class="absolute bottom-8 right-8 opacity-0 transform translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
              >
                <div
                  class="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    ><path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    /></svg
                  >
                </div>
              </div>
            </div>
          </div>
        {/if}
      {/each}
    </div>
  </div>
</section>
