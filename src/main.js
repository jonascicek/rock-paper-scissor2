
import './input.css'

const rules = document.getElementById("rules"); // Regelbereich
const closeButton = document.getElementById("closebutton"); // Schließen-Button

// Regeln ausblenden
closeButton.addEventListener("click", () => {
  rules.classList.add("hidden");
});

const startButton = document.getElementById("startbutton");
const startScreen = document.getElementById("startscreen");

// Startbildschirm ausblenden
startButton.addEventListener("click", () => {
  startScreen.classList.add("hidden");
});

// Ergebnisse anzeigen
function showResults(winner, userChoice, computerChoice) {
  const resultsDiv = document.getElementById("results");
  const resultText = document.getElementById("result");
  const userChoiceDiv = document.getElementById("userchoice");
  const computerChoiceDiv = document.getElementById("computerchoice");

  if (winner === "user") {
    resultText.textContent = "You Win!";
    resultText.className = "text-4xl font-extrabold text-green-400 mb-6";
  } else if (winner === "computer") {
    resultText.textContent = "You Lose!";
    resultText.className = "text-4xl font-extrabold text-red-400 mb-6";
  } else {
    resultText.textContent = "It's a Draw!";
    resultText.className = "text-4xl font-extrabold text-gray-400 mb-6";
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










//document.getElementById("startbutton").ad


