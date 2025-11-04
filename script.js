// script.js - extracted JS for dice roll game

document.addEventListener("DOMContentLoaded", () => {
  const dice = document.getElementById("dice");
  const result = document.getElementById("result");
  const rollBtn = document.getElementById("rollBtn");
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;

  if (!dice || !result || !rollBtn || !themeToggle) {
    // If any element is missing, stop silently to avoid runtime errors
    console.warn("Dice game: required DOM elements not found");
    return;
  }

  // Map dice face to rotation
  const faceRotations = {
    1: "rotateX(0deg) rotateY(0deg)",
    2: "rotateX(90deg) rotateY(0deg)",
    3: "rotateX(0deg) rotateY(-90deg)",
    4: "rotateX(0deg) rotateY(90deg)",
    5: "rotateX(-90deg) rotateY(0deg)",
    6: "rotateX(180deg) rotateY(0deg)",
  };

  // Dark mode toggle
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    themeToggle.textContent = body.classList.contains("dark")
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";
  });

  rollBtn.addEventListener("click", () => {
    // Disable button during roll
    rollBtn.disabled = true;
    result.textContent = "Rolling...";

    // Add rolling animation
    dice.classList.add("rolling");
    // apply a big spin that is handled by the .rolling animation for visuals
    dice.style.transform = "rotateX(450deg) rotateY(225deg) rotateZ(150deg)";

    // Random number 1-6
    const randomNum = Math.floor(Math.random() * 6) + 1;

    // After animation, show result and set face rotation
    setTimeout(() => {
      dice.classList.remove("rolling");
      dice.style.transform = faceRotations[randomNum];
      result.textContent = `You rolled: ${randomNum}! 🎉`;
      rollBtn.disabled = false;
    }, 1200);
  });
});
