const player1 = document.querySelector(".player-1");
const player2 = document.querySelector(".player-2");

const player1Score = document.querySelector(".player-1.score");
const player2Score = document.querySelector(".player-2.score");

const displayWinner = document.querySelector(".display-winner");

const buttonRock = document.getElementById("rock");
const buttonPaper = document.getElementById("paper");
const buttonScissor = document.getElementById("scissor");

const buttons = document.querySelectorAll("button");
console.log(buttons);
const randomArray = ["ROCK", "PAPER", "SCISSOR"];
let playerCount1 = 0;
let playerCount2 = 0;

let clickedButtonValue = "";
let randomValue = "";
//GENRATE RANDOME VALUES
buttonRock.addEventListener("click", handlePlayer2RandomValues);
buttonPaper.addEventListener("click", handlePlayer2RandomValues);
buttonScissor.addEventListener("click", handlePlayer2RandomValues);

function handlePlayer2RandomValues() {
  const randomIndex = Math.floor(Math.random() * randomArray.length);
  const randomOption = randomArray[randomIndex];
  player2.innerHTML = randomOption;
  randomValue = randomOption;
}

buttonRock.addEventListener("click", function () {
  handleButton("ROCK");
});
buttonScissor.addEventListener("click", function () {
  handleButton("SCISSOR");
});
buttonPaper.addEventListener("click", function () {
  handleButton("PAPER");
});

function handleButton(clickedButton) {
  clickedButtonValue = clickedButton;
  console.log("clickedButton", clickedButton);
  console.log("clickedButtonValue", clickedButtonValue);
  player1.innerHTML = clickedButtonValue;
  //NO PLAYER WON
  if (
    (clickedButtonValue === "ROCK" && randomValue === "ROCK") ||
    (clickedButtonValue === "SCISSOR" && randomValue === "SCISSOR") ||
    (clickedButtonValue === "PAPER" && randomValue === "PAPER")
  ) {
    displayWinner.innerHTML = "NO PLAYER WON";
    playerCount1 = playerCount1;
    playerCount2 = playerCount2;
    player1Score.innerHTML = playerCount1;
    player2Score.innerHTML = playerCount2;
  }

  if (
    (clickedButtonValue === "ROCK" || clickedButtonValue === "SCISSOR") &&
    randomValue === "PAPER"
  ) {
    playerCount1 = playerCount1 + 1;
    playerCount2 = playerCount2;
    player1Score.innerHTML = playerCount1;
    player2Score.innerHTML = playerCount2;
    displayWinner.innerHTML = "PLAYER 1 WON";
  }

  if (
    (clickedButtonValue === "PAPER" || clickedButtonValue === "SCISSOR") &&
    randomValue === "SCISSOR"
  ) {
    playerCount1 = playerCount1;
    playerCount2 = playerCount2 + 1;
    player1Score.innerHTML = playerCount1;
    player2Score.innerHTML = playerCount2;
    displayWinner.innerHTML = "PLAYER 2 WON";
  }
}
