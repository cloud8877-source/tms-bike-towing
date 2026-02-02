<script lang="ts">
  import { whatsappMessages, type Locale } from '../i18n/utils';
  import { t } from '../i18n/translations';
  import { onMount } from 'svelte';

  export let locale: Locale = 'en';

  let isVisible = false;
  let isGettingLocation = false;

  const phoneNumber = '+66968873125';
  const whatsappNumber = '66968873125';

  onMount(() => {
    // 2-second delay before appearing
    setTimeout(() => {
      isVisible = true;
    }, 2000);
  });

  function getCallUrl(): string {
    return `tel:${phoneNumber}`;
  }

  function handleWhatsAppClick() {
    if (isGettingLocation) return;

    const fallbackMessage = whatsappMessages[locale];
    const fallbackUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(fallbackMessage)}`;

    // No geolocation - just open WhatsApp
    if (!('geolocation' in navigator)) {
      window.location.href = fallbackUrl;
      return;
    }

    isGettingLocation = true;

    // Request location with short timeout, then open WhatsApp
    navigator.geolocation.getCurrentPosition(
      // Success - open WhatsApp with location
      (position) => {
        const { latitude, longitude } = position.coords;
        const mapsLink = `https://maps.google.com/?q=${latitude},${longitude}`;
        const locationMessage = t(locale, 'emergency.whatsappWithLocation')
          .replace('{location}', mapsLink);
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(locationMessage)}`;
        window.location.href = url;
        isGettingLocation = false;
      },
      // Error - open WhatsApp without location
      () => {
        window.location.href = fallbackUrl;
        isGettingLocation = false;
      },
      {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 60000
      }
    );
  }
</script>

{#if isVisible}
  <div class="emergency-bar md:hidden">
    <div class="emergency-bar-content">
      <!-- WhatsApp with Location Button -->
      <a
        href="#whatsapp"
        on:click|preventDefault={handleWhatsAppClick}
        class="emergency-btn emergency-btn-whatsapp"
        class:loading={isGettingLocation}
        role="button"
        aria-label={t(locale, 'emergency.whatsappLabel')}
        aria-disabled={isGettingLocation}
      >
        {#if isGettingLocation}
          <svg class="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        {:else}
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        {/if}
        <span class="font-semibold">{t(locale, 'emergency.whatsapp')}</span>
      </a>

      <!-- Call Hotline Button -->
      <a
        href={getCallUrl()}
        class="emergency-btn emergency-btn-call"
        aria-label={t(locale, 'emergency.callLabel')}
      >
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
        <span class="font-semibold">{t(locale, 'emergency.call')}</span>
      </a>
    </div>
  </div>
{/if}

<style>
  .emergency-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 50;
    padding: 0.75rem 1rem;
    padding-bottom: calc(0.75rem + env(safe-area-inset-bottom, 0px));
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    animation: slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }

  @supports (backdrop-filter: blur(12px)) {
    .emergency-bar {
      background: rgba(255, 255, 255, 0.75);
    }
  }

  .emergency-bar-content {
    display: flex;
    gap: 0.75rem;
    max-width: 28rem;
    margin: 0 auto;
  }

  .emergency-btn {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.875rem 1rem;
    border-radius: 0.875rem;
    font-size: 0.9375rem;
    transition: all 0.2s ease;
    text-decoration: none;
    border: none;
    cursor: pointer;
    /* iOS Safari touch fixes */
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
    user-select: none;
    -webkit-user-select: none;
  }

  .emergency-btn-whatsapp {
    background: #25D366;
    color: white;
  }

  .emergency-btn-whatsapp:hover:not(.loading),
  .emergency-btn-whatsapp:active:not(.loading) {
    background: #1fb855;
    transform: scale(1.02);
  }

  .emergency-btn-whatsapp.loading {
    opacity: 0.8;
    cursor: wait;
    pointer-events: none;
  }

  .emergency-btn-call {
    background: var(--color-primary, #1170FF);
    color: white;
  }

  .emergency-btn-call:hover {
    background: var(--color-primary-dark, #211AFF);
    transform: scale(1.02);
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(100%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Respect reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .emergency-bar {
      animation: none;
    }

    .emergency-btn:hover {
      transform: none;
    }
  }
</style>
