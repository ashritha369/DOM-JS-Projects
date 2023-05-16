// Get DOM elements
const player1 = document.querySelector(".player-1");
const player2 = document.querySelector(".player-2");
const player1Score = document.querySelector(".player-1.score");
const player2Score = document.querySelector(".player-2.score");
const displayWinner = document.querySelector(".display-winner");
const buttonRock = document.getElementById("rock");
const buttonPaper = document.getElementById("paper");
const buttonScissor = document.getElementById("scissor");

// Initialize game state
let playerCount1 = 0;
let playerCount2;

// Add event listeners
const randomArray = ["ROCK", "PAPER", "SCISSOR"];
let player1Value = "";
let computerValue = "";

function checkWinner(player1value, computerValue) {
  if (player1value === computerValue) {
    return "DRAW";
  }

  if (player1Value === "ROCK") {
    if (computerValue === "PAPER") {
      return "PLAYER 1 WINS!";
    } else {
      return "COMPUTER(PLAYER 2) WINS!";
    }
  }

  if (player1Value === "PAPER") {
    if (computerValue === "SCISSOR") {
      return "COMPUTER(PLAYER 2) WINS!";
    } else {
      return "PLAYER 1 WINS!";
    }
  }

  if (player1Value === "SCISSOR") {
    if (computerValue === "PAPER") {
      return "PLAYER 1 WINS!";
    } else {
      return "COMPUTER(PLAYER 2) WINS!";
    }
  }
}
// Handle player 1's button clicks
function playGame(player1Value) {
  player1.textContent = player1Value;

  handlePlayer2ComputercomputerValues();
  // Handle player 2's - Computer  random values
  function handlePlayer2ComputercomputerValues() {
    const randomOption = getRandomOption();
    // Helper functions
    function getRandomOption() {
      const randomIndex = Math.floor(Math.random() * randomArray.length);
      return randomArray[randomIndex];
    }
    player2.textContent = randomOption;
    computerValue = randomOption;
  }

  const result = checkWinner(player1Value, computerValue);

  if (result === "DRAW") {
    displayWinner.textContent = "NO PLAYER WON";
  } else {
    if (result === "PLAYER 1 WINS!") {
      playerCount1++;
      player1Score.textContent = playerCount1;
    } else {
      playerCount2++;
      player2Score.textContent = playerCount2;
    }
    displayWinner.textContent = result;
  }
}

buttonRock.addEventListener("click", function () {
  playGame("ROCK");
});
buttonPaper.addEventListener("click", function () {
  playGame("PAPER");
});
buttonScissor.addEventListener("click", function () {
  playGame("SCISSOR");
});
