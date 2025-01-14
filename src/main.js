import './input.css';
import { getComputerChoice } from './gameLogic.js';

// HTML-Elemente verknüpfen
const rulesButton = document.getElementById("rulesbutton");
const rules = document.getElementById("rules");
const closeButton = document.getElementById("closebutton");
const startButton = document.getElementById("startbutton");
const startScreen = document.getElementById("startscreen");
const resultsElement = document.getElementById("results");
const result = document.getElementById("result");
const scoreElement = document.getElementById("score");

// Regelbereich anzeigen
rulesButton.addEventListener("click", () => {
  rules.classList.remove("hidden");
});

// Regelbereich schließen
closeButton.addEventListener("click", () => {
  rules.classList.add("hidden");
});

// Startbildschirm ausblenden
startButton.addEventListener("click", () => {
  startScreen.classList.add("hidden");
});

// Ergebnisse anzeigen
function showResults(winner, userChoice, computerChoice) {
  result.textContent = winner === "user" ? "You Win!" :
                       winner === "computer" ? "You Lose!" : "It's a Draw!";

  document.getElementById("userchoice").innerHTML = `
    <img src="/images/${userChoice}.svg" alt="${userChoice}" class="w-16 h-16">
  `;
  document.getElementById("computerchoice").innerHTML = `
    <img src="/images/${computerChoice}.svg" alt="${computerChoice}" class="w-16 h-16">
  `;

  if (winner === "user") {
    scoreElement.textContent = parseInt(scoreElement.textContent) + 1;
  }

  resultsElement.classList.remove("hidden");
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
  resultsElement.classList.add("hidden");
});
