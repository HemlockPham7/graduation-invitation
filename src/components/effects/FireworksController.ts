import confetti, { type CreateTypes, type Options } from 'canvas-confetti';

/** Gold, bright royal blue, and pearl white for high contrast over the dark navy background. */
const COLORS = ['#D4AF37', '#F3E5AB', '#C5A059', '#3B82F6', '#60A5FA', '#FFFFFF'];

const BASE: Options = {
  colors: COLORS,
  shapes: ['circle', 'square', 'star'],
  // Always show fireworks even when the OS has "reduced motion" enabled.
  disableForReducedMotion: false,
  zIndex: 9999,
};

let cannon: CreateTypes | null = null;
let burstTimer: number | undefined;

const random = (min: number, max: number) => Math.random() * (max - min) + min;

function getCannon(): (options?: Options) => unknown {
  if (!cannon && typeof document !== 'undefined') {
    cannon = confetti.create(undefined, {
      resize: true,
      useWorker: false,
    });
  }
  return cannon ?? confetti;
}

function clearBurstTimer() {
  if (burstTimer !== undefined) {
    window.clearInterval(burstTimer);
    burstTimer = undefined;
  }
}

/**
 * Opening show: one big central burst, then fireworks popping across the sky.
 * Triggered immediately when the invitation app opens and when flipping open the cover.
 */
export function launchOpeningFireworks(durationMs = 2800): void {
  clearBurstTimer();
  const fire = getCannon();
  const end = Date.now() + durationMs;

  void fire({
    ...BASE,
    particleCount: 120,
    spread: 110,
    startVelocity: 48,
    origin: { x: 0.5, y: 0.55 },
  });

  burstTimer = window.setInterval(() => {
    const timeLeft = end - Date.now();
    if (timeLeft <= 0) {
      clearBurstTimer();
      return;
    }
    const particleCount = Math.max(14, Math.round(45 * (timeLeft / durationMs)));
    const shared: Options = {
      ...BASE,
      particleCount,
      spread: 360,
      startVelocity: 32,
      ticks: 80,
      gravity: 0.85,
    };
    void fire({ ...shared, origin: { x: random(0.12, 0.38), y: random(0.15, 0.45) } });
    void fire({ ...shared, origin: { x: random(0.62, 0.88), y: random(0.15, 0.45) } });
  }, 280);
}

/** Multi-cannon celebration burst — used on the manual fireworks buttons and Thank-you page. */
export function launchCelebration(): void {
  const fire = getCannon();
  const side: Options = { ...BASE, particleCount: 75, spread: 70, startVelocity: 55 };
  void fire({ ...side, angle: 60, origin: { x: 0.02, y: 0.75 } });
  void fire({ ...side, angle: 120, origin: { x: 0.98, y: 0.75 } });
  void fire({
    ...BASE,
    particleCount: 90,
    spread: 120,
    startVelocity: 45,
    origin: { x: 0.5, y: 0.45 },
  });
}

/** Stops pending bursts and clears particles on unmount. */
export function stopFireworks(): void {
  clearBurstTimer();
  cannon?.reset();
}
