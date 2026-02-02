<script lang="ts">
  import { localeNames, localeFlagEmoji, type Locale } from '../i18n/utils';

  export let locale: Locale;
  export let currentPath: string = '/';

  const locales: Locale[] = ['en', 'ms', 'zh', 'th'];
  let isOpen = false;
  let dropdownEl: HTMLElement;

  function getLocalizedPath(targetLocale: Locale): string {
    const pathWithoutLocale = currentPath.replace(/^\/(en|ms|zh|th)/, '');
    return `/${targetLocale}${pathWithoutLocale || '/'}`;
  }

  function toggleDropdown() {
    isOpen = !isOpen;
  }

  function handleClickOutside(e: MouseEvent) {
    if (dropdownEl && !dropdownEl.contains(e.target as Node)) {
      isOpen = false;
    }
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      isOpen = false;
    }
  }
</script>

<svelte:window on:click={handleClickOutside} on:keydown={handleKeydown} />

<div class="relative" bind:this={dropdownEl}>
  <button
    on:click|stopPropagation={toggleDropdown}
    class="flex items-center gap-2 pl-3 pr-2 py-1.5 rounded-full bg-gray-50 dark:bg-white/10 border border-gray-200 dark:border-white/10 hover:border-primary/30 hover:bg-white transition-all duration-200 group"
    aria-label="Select language"
    aria-expanded={isOpen}
    aria-haspopup="listbox"
  >
    <span class="text-lg leading-none">{localeFlagEmoji[locale]}</span>
    <span class="hidden lg:inline text-xs font-semibold uppercase tracking-wide text-text-secondary dark:text-gray-300 group-hover:text-primary">
      {locale}
    </span>
    <span class="material-symbols-outlined text-[16px] text-text-secondary group-hover:text-primary transition-transform duration-200" class:rotate-180={isOpen}>
      expand_more
    </span>
  </button>

  {#if isOpen}
    <div
      class="dropdown-menu absolute right-0 mt-3 w-40 bg-white dark:bg-gray-900 rounded-2xl shadow-soft-lg py-1.5 z-50 border border-gray-100 dark:border-gray-800 overflow-hidden ring-1 ring-black/5"
      role="listbox"
      aria-label="Select language"
      on:click|stopPropagation
    >
      {#each locales as loc}
        <a
          href={getLocalizedPath(loc)}
          class="flex items-center gap-3 px-4 py-2.5 transition-all duration-200 hover:bg-primary/5 hover:text-primary"
          class:text-primary={loc === locale}
          class:font-bold={loc === locale}
          class:text-text-secondary={loc !== locale}
          class:dark:text-gray-300={loc !== locale}
          role="option"
          aria-selected={loc === locale}
        >
          <span class="text-xl">{localeFlagEmoji[loc]}</span>
          <span class="text-sm font-medium">{localeNames[loc]}</span>
          {#if loc === locale}
            <span class="material-symbols-outlined text-[16px] ml-auto text-primary font-bold">check</span>
          {/if}
        </a>
      {/each}
    </div>
  {/if}
</div>

<style>
  @keyframes dropdownIn {
    from {
      opacity: 0;
      transform: translateY(-8px) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  .dropdown-menu {
    animation: dropdownIn 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    transform-origin: top right;
  }

  .rotate-180 {
    transform: rotate(180deg);
  }
</style>