const button = document.querySelector("button");
const output = document.querySelector(".output");
const myName = document.querySelector("input");
button.addEventListener("click", showMessage);

function showMessage() {
  output.innerHTML = "hello " + "welcome " + myName.value;
}
