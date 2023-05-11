// Get DOM elements
const player1 = document.querySelector(".player-1");
const player2 = document.querySelector(".player-2");
const player1Score = document.querySelector(".player-1.score");
const player2Score = document.querySelector(".player-2.score");
const displayWinner = document.querySelector(".display-winner");
const buttonRock = document.getElementById("rock");
const buttonPaper = document.getElementById("paper");
const buttonScissor = document.getElementById("scissor");

// Define game logic
const gameRules = {
  ROCK: { beats: ["SCISSOR", "PAPER"], message: "PLAYER 1 WON" },
  PAPER: { beats: ["ROCK", "SCISSOR"], message: "PLAYER 2 WON" },
  SCISSOR: { beats: ["PAPER"], message: "PLAYER 1 WON" },
  SCISSOR: { beats: ["ROCK"], message: "PLAYER 2 WON" },
};

// Initialize game state
let playerCount1 = 0;
let playerCount2 = 0;

// Handle player 2's random values
function handlePlayer2RandomValues() {
  const randomOption = getRandomOption();
  player2.textContent = randomOption;
  randomValue = randomOption;
}

// Handle player 1's button clicks
function handleButton(clickedButton) {
  clickedButtonValue = clickedButton;
  player1.textContent = clickedButtonValue;

  const result = getResult(clickedButtonValue, randomValue);
  if (result === "DRAW") {
    displayWinner.textContent = "NO PLAYER WON";
  } else {
    if (result === "PLAYER 1 WON") {
      playerCount1++;
      player1Score.textContent = playerCount1;
    } else {
      playerCount2++;
      player2Score.textContent = playerCount2;
    }
    displayWinner.textContent = result;
  }
}

// Helper functions
function getRandomOption() {
  const randomIndex = Math.floor(Math.random() * randomArray.length);
  return randomArray[randomIndex];
}

function getResult(option1, option2) {
  if (option1 === option2) {
    return "DRAW";
  } else if (gameRules[option1].beats === option2) {
    return gameRules[option1].message;
  } else {
    return gameRules[option2].message;
  }
}

// Add event listeners
const randomArray = ["ROCK", "PAPER", "SCISSOR"];
let clickedButtonValue = "";
let randomValue = "";

buttonRock.addEventListener("click", handlePlayer2RandomValues);
buttonPaper.addEventListener("click", handlePlayer2RandomValues);
buttonScissor.addEventListener("click", handlePlayer2RandomValues);

buttonRock.addEventListener("click", function () {
  handleButton("ROCK");
});
buttonScissor.addEventListener("click", function () {
  handleButton("SCISSOR");
});
buttonPaper.addEventListener("click", function () {
  handleButton("PAPER");
});
