const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  {
    text: "Life is what happens when you’re busy making other plans.",
    author: "John Lennon",
  },
  { text: "Get busy living or get busy dying.", author: "Stephen King" },
  {
    text: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
    author: "Brian Tracy",
  },
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  document.getElementById("quote").innerText = `"${quote.text}"`;
  document.getElementById("author").innerText = `- ${quote.author}`;
}

// Generate a quote on page load
document.addEventListener("DOMContentLoaded", generateQuote);

// Breathing Exercise
const breathingInstruction = document.getElementById("breathing-instruction");
const startBreathingButton = document.getElementById("start-breathing");
const stopBreathingButton = document.getElementById("stop-breathing");

let breathingInterval;

startBreathingButton.addEventListener("click", () => {
  breathingInstruction.innerText = "Inhale deeply through your nose...";
  startBreathingButton.style.display = "none";
  stopBreathingButton.style.display = "inline-block";

  breathingInterval = setInterval(() => {
    if (breathingInstruction.innerText.includes("Inhale")) {
      breathingInstruction.innerText = "Hold your breath...";
    } else if (breathingInstruction.innerText.includes("Hold")) {
      breathingInstruction.innerText = "Exhale slowly through your mouth...";
    } else {
      breathingInstruction.innerText = "Inhale deeply through your nose...";
    }
  }, 5000); // Change instruction every 5 seconds
});

stopBreathingButton.addEventListener("click", () => {
  clearInterval(breathingInterval);
  breathingInstruction.innerText = "Breathing exercise stopped.";
  startBreathingButton.style.display = "inline-block";
  stopBreathingButton.style.display = "none";
});

// Meditation Timer
const meditationTimeInput = document.getElementById("meditation-time");
const startTimerButton = document.getElementById("start-timer");
const timerDisplay = document.getElementById("timer-display");

let timerInterval;

startTimerButton.addEventListener("click", () => {
  let time = parseInt(meditationTimeInput.value) * 60;
  timerDisplay.innerText = "00:00";

  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    timerDisplay.innerText = `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
    time--;

    if (time < 0) {
      clearInterval(timerInterval);
      timerDisplay.innerText = "Time's up!";
    }
  }, 1000);
});

// Stress Relief Exercise
const stressReliefText = document.getElementById("stress-relief-text");
const startStretchButton = document.getElementById("start-stretch");

startStretchButton.addEventListener("click", () => {
  stressReliefText.innerText =
    "Take a moment to stretch and relax. Stretch your arms, neck, and legs. Breathe deeply and enjoy the relaxation.";
});

// Show/Hide Guided Exercises Section
const experienceBlissBtn = document.getElementById("experience-bliss-btn");
const guidedExercises = document.getElementById("guided-exercises");

experienceBlissBtn.addEventListener("click", () => {
  if (
    guidedExercises.style.display === "none" ||
    guidedExercises.style.display === ""
  ) {
    guidedExercises.style.display = "block";
  } else {
    guidedExercises.style.display = "none";
  }
});

//Mentalwellness Assessment
document
  .getElementById("assessmentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const anxietyLevel = document.querySelector('select[name="anxiety"]').value;
    const overwhelmedLevel = document.querySelector(
      'select[name="overwhelmed"]'
    ).value;

    const totalScore = parseInt(anxietyLevel) + parseInt(overwhelmedLevel);
    let resultMessage;

    if (totalScore <= 2) {
      resultMessage =
        "You seem to be doing well! Keep maintaining your mental wellness.";
    } else if (totalScore <= 4) {
      resultMessage =
        "It appears you're experiencing some stress. Consider taking small breaks or practicing mindfulness.";
    } else {
      resultMessage =
        "You're feeling quite stressed. It may help to reach out to a friend or professional for support.";
    }

    document.getElementById("result").innerText = resultMessage;
  });
