const message = document.querySelector(".message");
const output1 = document.querySelector(".output1");
const output2 = document.querySelector(".output2");
const btn = document.querySelector("button");
const myWords = ["my", "love", "for", "javascript", "is", "unbeatable"];
let player = {};

btn.addEventListener("click", function () {
  myWords.sort(function () {
    return 0.5 - Math.random();
  });
  let theWord = myWords.shift();
  console.log(theWord);

  player.solution = theWord.split("");
  console.log(player.solution);
  console.log(player);

  buildBoard();
});

function buildBoard() {
  // hide the button
  btn.style.display = "none";

  // solution letter
  player.solution.forEach(function (letter) {
    console.log(letter);
    //creating  underscores=number of letters
    let div_for_each_underscore = document.createElement("div");
    div_for_each_underscore.classList.add("solution-letter");

    div_for_each_underscore.innerText = "_";
    div_for_each_underscore.myLetter = letter;

    output2.appendChild(div_for_each_underscore);
  });

  //Alphabets 26 letters
  for (let x = 0; x < 26; x++) {
    let temp = String.fromCharCode(65 + x);
    //temp stores single alphabet
    let div_for_each_letter_in_26 = document.createElement("div");
    div_for_each_letter_in_26.classList.add("letter-in-26");

    div_for_each_letter_in_26.myLetter = temp;
    div_for_each_letter_in_26.innerHTML = temp;

    output1.appendChild(div_for_each_letter_in_26);
  }
}
