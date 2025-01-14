import './input.css'
import './gameLogic.js'

const rulesButton = document.getElementById("rulesbutton"); // "Show Rules"-Button
const rules = document.getElementById("rules"); // Regelbereich
const closeButton = document.getElementById("closebutton"); // Schließen-Button
const startButton = document.getElementById("startbutton");
const startScreen = document.getElementById("startscreen");
const resultsDiv = document.getElementById("results");
const resultText = document.getElementById("result");
const userChoiceDiv = document.getElementById("userchoice");
const computerChoiceDiv = document.getElementById("computerchoice");

// Regelbereich anzeigen
rulesButton.addEventListener("click", () => {
  rules.classList.remove("hidden"); // Regelbereich sichtbar machen
});

// Regelbereich schließen
closeButton.addEventListener("click", () => {
  rules.classList.add("hidden"); // Regelbereich ausblenden
});

// Startbildschirm ausblenden
startButton.addEventListener("click", () => {
  startScreen.classList.add("hidden");
});

// Ergebnisse anzeigen
function showResults(winner, userChoice, computerChoice) {

  if (winner === "user") {
    resultText.textContent = "You Win!";
    resultText.className = "text-4xl font-extrabold text-green-400 mb-6 font-metalmania";
  } else if (winner === "computer") {
    resultText.textContent = "You Lose!";
    resultText.className = "text-4xl font-extrabold text-red-400 mb-6 font-metalmania";
  } else {
    resultText.textContent = "It's a Draw!";
    resultText.className = "text-4xl font-extrabold text-gray-400 mb-6 font-metalmania";
  }

  userChoiceDiv.innerHTML = `<img src="/images/${userChoice}.svg" alt="${userChoice}" class="w-16 h-16">`;
  computerChoiceDiv.innerHTML = `<img src="/images/${computerChoice}.svg" alt="${computerChoice}" class="w-16 h-16">`;

  resultsDiv.classList.remove("hidden");
}

// Gewinner bestimmen
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) return "draw";
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    return "user";
  }
  return "computer";
}

// Event-Listener für Buttons
document.querySelectorAll("button[data-choice]").forEach((button) => {
  button.addEventListener("click", () => {
    const userChoice = button.getAttribute("data-choice");
    const computerChoice = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
    const winner = determineWinner(userChoice, computerChoice);
    showResults(winner, userChoice, computerChoice);
  });
});

// Play Again-Button
document.getElementById("playagain").addEventListener("click", () => {
  document.getElementById("results").classList.add("hidden");
});


