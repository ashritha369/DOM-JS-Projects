# Logic

ROCK-ROCK --> Player-1 : 0, Player-2 : 0

ROCK-PAPER --> Player-1 : 1, Player-2 : 0

ROCK-SCISSOR--> Player-1 : 1, Player-2 : 0

---

PAPER-ROCK --> Player-1 : 0, Player-2 : 1

PAPER-PAPER --> Player-1 : 0, Player-2 : 0

PAPER-SCISSOR--> Player-1 : 0, Player-2 : 1

---

SCISSOR-ROCK --> Player-1 : 0, Player-2 : 1

SCISSOR-PAPER --> Player-1 : 1, Player-2 : 0

SCISSOR-SCISSOR--> Player-1 : 0, Player-2 : 0

---

- The code written in `script.js` is working
- when does `DOM repaints` in js?

- When you change something on a web page, like clicking a button or typing in a form, the web browser needs to redraw the page to show the changes you made. This process is called a `DOM repaint`.

- In JavaScript, the Document Object Model (DOM) repaints whenever there is a change to the layout or visual style of an element on the page. This typically happens in response to a user action, such as scrolling, resizing the browser window, or interacting with a form element.

- When a change is made to the DOM, the browser must recalculate the layout and repaint the affected area of the page. This can be a relatively expensive operation, especially if the change affects a large portion of the page or if the page contains complex elements such as animations or video.

- To optimize performance, it's generally a good idea to minimize the number of repaints that occur on your page. You can do this by using efficient CSS styles and layout techniques, avoiding unnecessary DOM manipulation, and using tools like requestAnimationFrame to batch multiple repaints together.

- `during DOM repainting, do old old values stored in variables recalculates again?`

- During a DOM repaint, the browser will recalculate the layout and visual style of the affected elements on the page based on their current state, which may involve re-evaluating any styles or properties that are applied to them.

- If you have stored old values in variables in your JavaScript code that are used to calculate these styles or properties, then those variables will be accessed and used during the recalculation process. However, the browser may optimize this process by using a cached version of the old values rather than recalculating them from scratch, especially if the values have not changed since the last repaint.

- It's also worth noting that modern browsers use a number of different techniques to optimize DOM performance, including caching and batching of updates, lazy evaluation of styles and layouts, and partial repaints. As a result, the details of exactly how and when variables are accessed and updated during a repaint can be complex and dependent on the specific browser implementation.

- `caching and batching of updates, lazy evaluation of styles and layouts, and partial repaints. can you say about this w.r.t DOM in few words`

- When you look at a web page, your browser uses a special language called HTML to show you the text, images, and buttons on the page. This language creates something called the Document Object Model, or DOM for short.

- When you make a change to the page, like clicking a button or scrolling down, the browser needs to update the DOM to show the new information. This process can be slow, especially if the page has lots of stuff on it.

- To make things faster, the browser does a few things. It might remember some of the things it has already done, so it doesn't have to do them again. It might wait a little bit before doing something, so it can do lots of things all at once instead of one at a time. And it might only update the parts of the page that need to be changed, instead of redoing everything.

- These tricks help the browser make changes to the page quickly and smoothly, so you can enjoy your web browsing experience!

- `lazy evaluation of styles and layouts?`

- When a web page is loaded, the browser needs to calculate how everything on the page should look and where it should be placed. This process is called layout or reflow. It can be slow, especially if the page is complicated.

- One way that browsers make this process faster is by using lazy evaluation. This means that instead of calculating everything all at once, the browser only calculates what is needed right now.

- For example, if you have a big page with lots of images, the browser might only load the images that are visible on the screen right now, and wait to load the others until you scroll down.

- Similarly, if you have a complicated layout with lots of elements, the browser might only calculate the styles and positions of the elements that are visible on the screen right now, and wait to calculate the others until you interact with the page.

- By using lazy evaluation, the browser can make the initial page load faster and improve the performance of the page overall.

# Code Logic

```
const gameRules = {
  ROCK: { beats: ["SCISSOR", "PAPER"], message: " A PLAYER 1 WON" },
  PAPER: { beats: ["ROCK", "SCISSOR"], message: " B PLAYER 2 WON" },
      SCISSOR: { beats: ["PAPER"], message: "C PLAYER 1 WON " },
  SCISSOR: { beats: ["ROCK"], message: "D PLAYER 2 WON" },
};
function getResult(option1, option2) {
  if (option1 === option2) {
    return "DRAW";
  } else if (
    gameRules[option1].beats[0] === option2 ||
    gameRules[option1].beats[1] === option2
  ) {
    console.log(`first statement`,gameRules[option1].message)
    return gameRules[option1].message;
  } else if (gameRules[option1].beats[0] === option2) {
      console.log(`second statement`,gameRules[option1].message)
    return gameRules[option1].message;
  } else {
      console.log(`third statement`,gameRules[option2].message)
    return gameRules[option2].message;
  }
}
getResult("ROCK","PAPER")
getResult("ROCK","SCISSOR")
getResult("PAPER","ROCK")
getResult("PAPER","SCISSOR")
getResult("SCISSOR","PAPER")
getResult("SCISSOR","ROCK")

```

## helper code

```
const gameRules = {
    ROCK: { beats: ["SCISSOR", "PAPER"]},
    PAPER: { beats: ["ROCK", "SCISSOR"]},
    SCISSOR: { beats: ["PAPER"]},
    SCISSOR: { beats: ["ROCK"]}
    MESSAGE1:"PLAYER 1 WON",
    MESSAGE2:"PLAYER 2 WON",

};


```

# Why below code ?

```
buttonRock.addEventListener("click", function () {
  handleButton("ROCK");
});

```

- why not below one?

```
 buttonRock.addEventListener("click",
 handleButton("ROCK");
);


```

- When adding an event listener in JavaScript, you need to pass a function as the second argument to the addEventListener method. In the code you provided, if you write buttonRock.addEventListener("click", handleButton("ROCK"));, it means that the handleButton("ROCK") function will be executed immediately and its return value will be assigned as the event listener. This is not the desired behavior because you want the handleButton function to be called only when the "click" event occurs.

- By wrapping the handleButton function call in an anonymous function, as in buttonRock.addEventListener("click", function () { handleButton("ROCK"); });, you ensure that the handleButton function is not executed immediately but rather when the "click" event happens. The anonymous function acts as a wrapper that allows you to pass the correct reference to handleButton as the event listener.

- In summary, when you want to pass arguments to a function in an event listener, you need to wrap it in an anonymous function to ensure that the function is called at the appropriate time when the event occurs.
