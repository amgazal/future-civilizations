// Countdown to April 18, 2026 (local time)
const target = new Date(2026, 3, 18, 0, 0, 0); // 3 = April

const elDays = document.getElementById("cdDays");
const elHours = document.getElementById("cdHours");
const elMinutes = document.getElementById("cdMinutes");
const elSeconds = document.getElementById("cdSeconds");
const elStatus = document.getElementById("cdStatus");

function pad(n){ return String(n).padStart(2, "0"); }

function tick(){
  if (!elDays) return; // safe if section removed later

  const now = new Date();
  let diff = target - now;

  if (diff <= 0){
    elDays.textContent = "00";
    elHours.textContent = "00";
    elMinutes.textContent = "00";
    elSeconds.textContent = "00";
    if (elStatus) elStatus.textContent = "The conference day is here!";
    return;
  }

  const sec = Math.floor(diff / 1000);
  const days = Math.floor(sec / (3600 * 24));
  const hours = Math.floor((sec % (3600 * 24)) / 3600);
  const minutes = Math.floor((sec % 3600) / 60);
  const seconds = sec % 60;

  elDays.textContent = String(days);
  elHours.textContent = pad(hours);
  elMinutes.textContent = pad(minutes);
  elSeconds.textContent = pad(seconds);
  if (elStatus) elStatus.textContent = "";
}

tick();
setInterval(tick, 1000);

// Mobile hamburger toggle
const hamburger = document.getElementById("hamburger");
const navlinks = document.getElementById("navlinks");

if (hamburger && navlinks) {
  hamburger.addEventListener("click", () => {
    const isOpen = navlinks.classList.toggle("open");
    hamburger.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu after clicking a link (nice on mobile)
  navlinks.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      navlinks.classList.remove("open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });
}