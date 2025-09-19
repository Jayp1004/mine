// ==========================
// Notes and Promises
// ==========================
let notes = [
  "I love your smile 😊",
  "You always care about us ❤️",
  "You make my world brighter ✨",
  "You understand me like no one else 💕",
  "I hate you more every single day 🌹"
];

let promises = [
  "I promise to listen before reacting 💭",
  "I promise to never let fights last long 🤝",
  "I promise to support your dreams 🌈",
  "I promise to love you endlessly ❤️",
  "I promise to make you smile every day 😊"
];

let noteIndex = 0, promiseIndex = 0;

// ==========================
// Navigation between sections
// ==========================
function startJourney() {
  nextSection('notes');
}

function nextSection(id) {
  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  const section = document.getElementById(id);
  section.classList.add("active");
  section.scrollIntoView({ behavior: "smooth" });
}

// ==========================
// Notes & Promises display
// ==========================
function showNote() {
  if (noteIndex < notes.length) {
    const div = document.createElement("div");
    div.className = "note";
    div.innerText = notes[noteIndex];
    document.getElementById("noteArea").appendChild(div);
    noteIndex++;
  }
}

function showPromise() {
  if (promiseIndex < promises.length) {
    const div = document.createElement("div");
    div.className = "promise";
    div.innerText = promises[promiseIndex];
    document.getElementById("promiseArea").appendChild(div);
    promiseIndex++;
  }
}

// ==========================
// No button escape (Quiz "No" button)
// ==========================
function runAway(btn) {
  btn.style.position = "absolute";
  btn.style.top = Math.random() * 70 + "%";
  btn.style.left = Math.random() * 70 + "%";
}

// ==========================
// Quiz "Yes" button
// ==========================
function correctAnswer() {
  nextSection('surprise');
}

// ==========================
// Typewriter effect for paragraphs
// ==========================
function typeWriterParagraph(text, element, callback, delay = 50) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, delay);
    } else if (callback) {
      callback();
    }
  }
  typing();
}

// ==========================
// Love Letter
// ==========================
function startLetter() {
  const letterBox = document.getElementById("letterBox");
  letterBox.innerHTML = ""; // Clear previous content

  const paragraphs = [
    "💖 My Dearest Love 💖",
    "Every moment with you feels magical. You light up my life in ways I never imagined.",
    "You are my heart, my soul, my everything. With you, forever is never enough. 🌹",
    "I promise to stand by your side through every joy and challenge. Together, we can conquer the world.",
    "Forever yours, always. ❤️"
  ];

  let i = 0;
  function typeParagraph() {
    if (i < paragraphs.length) {
      const p = document.createElement("p");
      p.classList.add("glow"); // optional glowing effect
      letterBox.appendChild(p);
      typeWriterParagraph(paragraphs[i], p, () => {
        i++;
        setTimeout(typeParagraph, 500); // delay before next paragraph
      });
    }
  }
  typeParagraph();
}

// ==========================
// Hidden Surprise Section
// ==========================
function unlockMessage() {
  const name = document.getElementById("nameInput").value.trim().toLowerCase();
  const secret = document.getElementById("secretMessage");
  const actualName = "majur"; // replace with her name

  if (name === actualName) {
    typeWriterParagraph("💖 My Love, you are my everything. I’ll never let you go. 💖", secret);
    secret.classList.add("glow");
    heartRain();
    showExtraMessages();

    // Automatically move to Love Letter section after 3 seconds
    setTimeout(() => nextSection('loveLetter'), 3000);

  } else {
    secret.innerHTML = "Hmm… try typing your special name 💌";
    secret.classList.remove("glow");
  }
}

// ==========================
// Extra Sweet Messages
// ==========================
function showExtraMessages() {
  const extra = [
    "🌹 You’re the best thing that ever happened to me.",
    "✨ Every moment with you feels magical.",
    "💕 No distance, no fight can ever break us.",
    "❤️ Forever yours, always."
  ];
  let i = 0;
  const box = document.createElement("div");
  box.id = "extraBox";
  document.getElementById("surprise").appendChild(box);

  function reveal() {
    if (i < extra.length) {
      const p = document.createElement("p");
      p.innerText = extra[i];
      p.style.opacity = "0";
      box.appendChild(p);
      setTimeout(() => { p.style.opacity = "1"; }, 100);
      i++;
      setTimeout(reveal, 2500);
    }
  }
  reveal();
}

// ==========================
// Love Calculator
// ==========================
function calculateLove() {
  const name1 = document.getElementById("name1").value.trim();
  const name2 = document.getElementById("name2").value.trim();
  const resultBox = document.getElementById("loveResult");

  if (name1 && name2) {
    resultBox.innerHTML = "Calculating... 💌";
    setTimeout(() => {
      resultBox.innerHTML = `💖 Love Score: 100% ❤️<br>Always meant to be!`;
    }, 1500);
  } else {
    alert("Enter both names! 😄");
  }
}

// ==========================
// Floating hearts animation
// ==========================
function heartRain() {
  const body = document.body;
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("floating-heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
    body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }
}

// ==========================
// Countdown since first meeting
// ==========================
function updateCountdown() {
  const startDate = new Date("2023-10-26"); // Replace with your actual date
  const today = new Date();
  const diffTime = today - startDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  document.getElementById("daysCounter").innerText = `${diffDays} days ❤️ since we met!`;
}

// ==========================
// Confetti Celebration
// ==========================
function celebrate() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  for (let i = 0; i < 200; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 2,
      d: Math.random() * 200 + 50,
      color: `hsl(${Math.random() * 360},100%,50%)`
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.fillStyle = p.color;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
      ctx.fill();
      p.y += Math.cos(p.d) + 1 + p.r / 2;
      p.x += Math.sin(0.01) * 2;
      if (p.y > canvas.height) {
        p.y = -10;
        p.x = Math.random() * canvas.width;
      }
    });
    requestAnimationFrame(draw);
  }
  draw();
  heartRain();
}

// ==========================
// Music toggle
// ==========================
let musicPlaying = false;
let audio = new Audio("https://www.bensound.com/bensound-music/bensound-romantic.mp3");
function toggleMusic() {
  if (!musicPlaying) {
    audio.play();
    musicPlaying = true;
  } else {
    audio.pause();
    musicPlaying = false;
  }
}

// ==========================
// Auto-update countdown on load
// ==========================
document.addEventListener("DOMContentLoaded", updateCountdown);

// ==========================
// Glowing animation styles
// ==========================
const style = document.createElement('style');
style.innerHTML = `
.floating-heart {
  position: fixed;
  bottom: -10px;
  font-size: 2rem;
  animation: rise 5s linear forwards;
}
@keyframes rise {
  0% { transform: translateY(0) scale(1); opacity: 1; }
  100% { transform: translateY(-110vh) scale(1.5); opacity: 0; }
}
.glow {
  color: #ff4d6d;
  text-shadow: 0 0 5px #fff, 0 0 10px #ff4d6d, 0 0 20px #ff6b81;
  animation: glowAnim 1.5s infinite alternate;
}
@keyframes glowAnim {
  0% { text-shadow: 0 0 5px #fff, 0 0 10px #ff4d6d, 0 0 20px #ff6b81; }
  50% { text-shadow: 0 0 10px #fff, 0 0 20px #ff6b81, 0 0 30px #ff4d6d; }
  100% { text-shadow: 0 0 5px #fff, 0 0 10px #ff4d6d, 0 0 20px #ff6b81; }
}`;
document.head.appendChild(style);
