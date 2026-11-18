import confetti, { type Options } from 'canvas-confetti';

/** Gold, HCMUS navy, and pearl white. */
const COLORS = ['#D4AF37', '#F3E5AB', '#C5A059', '#1B365D', '#3B82F6', '#FFFFFF'];

const BASE: Options = {
  colors: COLORS,
  shapes: ['circle', 'square', 'star'],
  // canvas-confetti skips the animation when the OS asks for reduced motion.
  disableForReducedMotion: true,
  zIndex: 60,
};

let burstTimer: number | undefined;

const random = (min: number, max: number) => Math.random() * (max - min) + min;

function clearBurstTimer() {
  if (burstTimer !== undefined) {
    window.clearInterval(burstTimer);
    burstTimer = undefined;
  }
}

/**
 * Opening show: one big central burst, then fireworks popping on both sides.
 * The confetti canvas uses `pointer-events: none`, so the book stays clickable.
 */
export function launchOpeningFireworks(durationMs = 2600): void {
  clearBurstTimer();
  const end = Date.now() + durationMs;

  void confetti({ ...BASE, particleCount: 110, spread: 100, startVelocity: 45, origin: { x: 0.5, y: 0.6 } });

  burstTimer = window.setInterval(() => {
    const timeLeft = end - Date.now();
    if (timeLeft <= 0) {
      clearBurstTimer();
      return;
    }
    const particleCount = Math.max(8, Math.round(40 * (timeLeft / durationMs)));
    const shared: Options = { ...BASE, particleCount, spread: 360, startVelocity: 28, ticks: 70, gravity: 0.9 };
    void confetti({ ...shared, origin: { x: random(0.08, 0.3), y: random(0.1, 0.4) } });
    void confetti({ ...shared, origin: { x: random(0.7, 0.92), y: random(0.1, 0.4) } });
  }, 280);
}

/** Two side cannons — used on the Thank-you page and the manual sparkle button. */
export function launchCelebration(): void {
  const shared: Options = { ...BASE, particleCount: 70, spread: 65, startVelocity: 55 };
  void confetti({ ...shared, angle: 60, origin: { x: 0, y: 0.75 } });
  void confetti({ ...shared, angle: 120, origin: { x: 1, y: 0.75 } });
}

/** Stops pending bursts and clears particles (e.g. on unmount). */
export function stopFireworks(): void {
  clearBurstTimer();
  confetti.reset();
}
