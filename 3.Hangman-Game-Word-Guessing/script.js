let buttons = document.querySelectorAll(".btn");
console.log(buttons);
let wordSetter = "ASHI";

let wordSetterArray = wordSetter.split("");

let player2SelectionArray = [];

let wrongCount = 0;
let gameOverCount = 10;
let clickedLetter;
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", buttonClick);
}
function buttonClick() {
  // console.log(`button clicked ${buttons[i].id}`);
  //this= buttons[i]
  clickedLetter = this.id;
  //   console.log(clickedLetter);
}
console.log(clickedLetter);

for (let i = 0; i < wordSetterArray.length; i++) {
  while (wrongCount < gameOverCount) {
    if (clickedLetter === wordSetterArray[i]) {
      console.log(`Matched letter ${i} with ${clickedLetter}`);
      player2SelectionArray.push(clickedLetter);
    } else {
      console.log("Not Matched try again");
      wrongCount++;
    }
  }
  console.log("GAME OVER");
}
