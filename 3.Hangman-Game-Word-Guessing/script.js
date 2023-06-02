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
/*
["A","S","H","I"]

YES CONDITION
-> i=0, first position check for A wordseter with  CLICKED ONE
A==B?
no;
wrong count increase;
if wrong count==gameover count
game over
go back and check for 1st postion only until wrong count==gameover count


NO CONDITION
--> for i=0;
A==A?
yes;
push the clicked one to new Array;
i++;

  */
function buttonClick() {
  clickedLetter = this.id; //this= buttons[i]
  check(clickedLetter);

  if (wordSetterArray[i] === clickedLetter) {
  }

  if (wordSetterArray[i] !== clickedLetter) {
  }
}

function check(clickedLetter) {}
