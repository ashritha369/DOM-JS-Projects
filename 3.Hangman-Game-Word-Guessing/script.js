let buttons = document.querySelectorAll(".btn");
console.log(buttons);
let wordSetter = "ASHI";
let wordSetterArray = wordSetter.split("");
let player2SelectionArray = [];
let wrongCount = 0;
let gameOverCount = 10;
let clickedLetter;

/*for (let i = 0; i < buttons.length; i++) {
  function check() {
    // console.log(i);
    buttons[i].addEventListener("click", buttonClick);
    console.log(buttons[i].innerHTML);
    if (wordSetterArray[0] === buttons[i].innerHTML) {
      console.log(`Correct letter`);
    } else {
      console.log(`Wrong Letter`);
    }
  }
}
function buttonClick() {
  check();
}
*/
function check(index) {
  return function () {
    console.log(buttons[index].innerHTML);
    if (wordSetterArray[0] === buttons[index].innerHTML) {
      console.log("Correct letter");
    } else {
      console.log("Wrong letter");
    }
  };
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", check(i));
}
