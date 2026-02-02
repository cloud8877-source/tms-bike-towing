<script lang="ts">
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  export let text: string = '';
  export let delay: number = 0;
  export let per: 'word' | 'char' | 'line' = 'word';
  export let duration: number = 600;

  let visible = false;

  onMount(() => {
    const timer = setTimeout(() => {
      visible = true;
    }, delay);
    return () => clearTimeout(timer);
  });

  $: segments = per === 'word'
    ? text.split(' ')
    : per === 'char'
      ? text.split('')
      : [text];
</script>

<span class="inline-flex flex-wrap gap-x-[0.25em]">
  {#each segments as segment, i}
    {#if visible}
      <span
        in:fly={{ y: 20, duration, delay: i * 50 }}
        class="inline-block"
      >
        {segment}{per === 'word' ? '' : ''}
      </span>
    {:else}
      <span class="inline-block opacity-0">{segment}</span>
    {/if}
  {/each}
</span>
