<script lang="ts">
  import { onMount } from 'svelte';

  // Audio Context (Singleton)
  let audioCtx: AudioContext | null = null;
  let gainNode: GainNode | null = null;
  
  // Settings
  const VOLUME = 0.05; // Very subtle

  onMount(() => {
    // Initialize on first interaction to respect browser autoplay policies
    const initAudio = () => {
      if (!audioCtx) {
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioContext) {
          audioCtx = new AudioContext();
          gainNode = audioCtx.createGain();
          gainNode.connect(audioCtx.destination);
          gainNode.gain.value = VOLUME;
        }
      }
      window.removeEventListener('click', initAudio);
      window.removeEventListener('keydown', initAudio);
    };

    window.addEventListener('click', initAudio);
    window.addEventListener('keydown', initAudio);

    // Attach listeners to interactive elements
    const attachListeners = () => {
      const interactives = document.querySelectorAll('a, button, input, [role="button"], .glass-panel');
      
      interactives.forEach(el => {
        // Prevent duplicate listeners
        if (el.getAttribute('data-sound-attached') === 'true') return;
        el.setAttribute('data-sound-attached', 'true');

        el.addEventListener('mouseenter', () => playSound('hover'));
        el.addEventListener('mousedown', () => playSound('click'));
      });
    };

    // Run periodically to catch new elements (like hydration results)
    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });
    attachListeners();

    return () => {
      observer.disconnect();
      if (audioCtx && audioCtx.state !== 'closed') {
        audioCtx.close();
      }
    };
  });

  function playSound(type: 'hover' | 'click') {
    if (!audioCtx || !gainNode) return;
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const osc = audioCtx.createOscillator();
    const env = audioCtx.createGain();

    osc.connect(env);
    env.connect(gainNode!);

    const now = audioCtx.currentTime;

    if (type === 'hover') {
      // High pitch, very short "blip"
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(1200, now + 0.05);
      
      env.gain.setValueAtTime(0, now);
      env.gain.linearRampToValueAtTime(0.5, now + 0.01);
      env.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === 'click') {
      // Lower pitch "thud" or "click"
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(300, now);
      osc.frequency.exponentialRampToValueAtTime(50, now + 0.1);
      
      env.gain.setValueAtTime(0, now);
      env.gain.linearRampToValueAtTime(1, now + 0.01);
      env.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      
      osc.start(now);
      osc.stop(now + 0.15);
    }
  }
</script>

<div class="hidden" aria-hidden="true"></div>
