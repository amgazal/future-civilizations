// Shared utilities
(() => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();


(() => {
  const timerEl = document.getElementById("timer");
  if (!timerEl) return;

  // Countdown to April 18, 2026 09:00:00 local time
  const targetDate = new Date("April 18, 2026 09:00:00").getTime();

  const tick = () => {
    const now = Date.now();
    const distance = targetDate - now;

    if (distance <= 0) {
      timerEl.textContent = "CONFERENCE IN SESSION";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const pad = (n) => String(n).padStart(2, "0");
    timerEl.textContent = `${days}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;
  };

  tick();
  setInterval(tick, 1000);
})();
