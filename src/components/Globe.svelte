<script lang="ts">
  import { onMount } from 'svelte';

  let canvas: HTMLCanvasElement;
  let width = 0;
  let height = 0;

  // Globe configuration
  const CONFIG = {
    particleCount: 400,
    particleSize: 1.5,
    radius: 200,
    rotationSpeed: 0.002,
    colors: ['#0052cc', '#003dad', '#d4af37'], // Electric Blue, Deep Electric, Gold
    connectionDistance: 50
  };

  onMount(() => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: any[] = [];
    let angleY = 0;
    let angleX = 0.2; // Tilt

    // Initialize particles on a sphere
    function init() {
      particles = [];
      const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

      for (let i = 0; i < CONFIG.particleCount; i++) {
        const y = 1 - (i / (CONFIG.particleCount - 1)) * 2; // y goes from 1 to -1
        const radiusAtY = Math.sqrt(1 - y * y); // radius at y
        
        const theta = phi * i; // Golden angle increment
        
        const x = Math.cos(theta) * radiusAtY;
        const z = Math.sin(theta) * radiusAtY;

        particles.push({
          x: x * CONFIG.radius,
          y: y * CONFIG.radius,
          z: z * CONFIG.radius,
          color: CONFIG.colors[Math.floor(Math.random() * CONFIG.colors.length)],
          size: Math.random() * CONFIG.particleSize + 0.5
        });
      }
    }

    function animate() {
      if (!ctx || !canvas) return;
      
      // Resize handling
      if (width !== canvas.clientWidth || height !== canvas.clientHeight) {
        width = canvas.clientWidth;
        height = canvas.clientHeight;
        canvas.width = width;
        canvas.height = height;
        CONFIG.radius = Math.min(width, height) * 0.35;
        init();
      }

      ctx.clearRect(0, 0, width, height);
      
      // Center the globe
      const cx = width / 2;
      const cy = height / 2;

      // Rotate
      angleY += CONFIG.rotationSpeed;

      // Sort particles by Z depth (painter's algorithm)
      const projectedParticles = particles.map(p => {
        // Rotation Matrix Y
        let x = p.x * Math.cos(angleY) - p.z * Math.sin(angleY);
        let z = p.z * Math.cos(angleY) + p.x * Math.sin(angleY);
        let y = p.y;

        // Rotation Matrix X (Tilt)
        let y2 = y * Math.cos(angleX) - z * Math.sin(angleX);
        let z2 = z * Math.cos(angleX) + y * Math.sin(angleX);

        // Perspective projection
        const scale = 400 / (400 - z2);
        const x2d = x * scale + cx;
        const y2d = y2 * scale + cy;

        return { x: x2d, y: y2d, z: z2, color: p.color, size: p.size * scale, alpha: scale };
      });

      projectedParticles.sort((a, b) => b.z - a.z);

      // Draw connections
      ctx.lineWidth = 0.5;
      projectedParticles.forEach((p, i) => {
        // Only connect some particles to avoid clutter
        if (i % 10 !== 0) return;

        projectedParticles.forEach((p2, j) => {
           if (i === j) return;
           const dx = p.x - p2.x;
           const dy = p.y - p2.y;
           const dist = Math.sqrt(dx*dx + dy*dy);

           if (dist < CONFIG.connectionDistance) {
             const alpha = (1 - dist / CONFIG.connectionDistance) * 0.2;
             ctx.strokeStyle = `rgba(0, 82, 204, ${alpha})`; // Electric Blue connections
             ctx.beginPath();
             ctx.moveTo(p.x, p.y);
             ctx.lineTo(p2.x, p2.y);
             ctx.stroke();
           }
        });
      });

      // Draw particles
      projectedParticles.forEach(p => {
        const alpha = Math.max(0.1, (p.z + CONFIG.radius) / (2 * CONFIG.radius)); // Fade back particles
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      requestAnimationFrame(animate);
    }

    init();
    animate();
  });
</script>

<div class="w-full h-[400px] md:h-[500px] flex items-center justify-center relative overflow-hidden bg-surface-off rounded-3xl border border-line-strong">
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,82,204,0.05),transparent_70%)] pointer-events-none"></div>
  
  <!-- Overlay Text -->
  <div class="absolute bottom-8 left-0 right-0 text-center z-10 pointer-events-none">
    <p class="text-xs font-mono text-primary uppercase tracking-[0.3em] mb-2 animate-pulse">Global Network Active</p>
    <h3 class="text-2xl font-bold text-ink-black">Cross-Border Coverage</h3>
  </div>

  <canvas
    bind:this={canvas}
    class="w-full h-full"
  ></canvas>
</div>
