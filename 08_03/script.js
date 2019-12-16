const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var timer = [0,0,0,0];


// Add leading zero to numbers 9 or below (purely for aesthetics):


// Run a standard minute/second/hundredths timer:
function runTimeer() {
  let currentTime = timer[0] + ":" + timer[1] + ":" + timer[2] + ":"; 
  theTimer.innerHTML = timer;
  timer[3]++;
}


// Match the text entered with the provided text on the page:
function spellCheck() {
  let textEntered = testArea.value;

  console.log(textEntered);
}

// Start the timer:
function start() {
  let textEnterLength = testArea.value.length;
  if (textEnterLength === 0) {
    setInterval(runTimeer, 10);
  }
  console.log(textEnterLength);
}


// Reset everything:
function reset() {
  console.log("Reset button has been pressed!");
}


// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);
