/*
GAME FUNCTIONS
Player must quess a number between a min and max
player gets a certain amount of quesses
notify players the guesses remaining
notify player the correct number when looses
let player choose to play again
*/

let min = 1;
max = 10;
winningNum = getRandomNum(min, max);
guessesLeft = 3;

// UI element
const game = document.querySelector("#game");
minNum = document.querySelector(".min-num");
maxNum = document.querySelector(".max-num");
guessBtn = document.querySelector("#guess-btn");
guessInput = document.querySelector("#guess-input");
message = document.querySelector(".message");

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// play again

game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

// listen for guess
guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  console.log(guess);
  //   we need to validate the input
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please a number between ${min} and ${max}`, "red");
  }

  if (guess === winningNum) {
    // gameover you won
    // //   disable input
    // guessInput.disabled = true;
    // // set a bordercolor
    // guessInput.style.borderColor = "green";
    // setMessage(`${winningNum} is correct, YOU WIN !!`, "green");
    gameOver(true, `${winningNum} is correct, you have won!!`);
  } else {
    // wrong number
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      // gameover lost
      //   disable input
      // guessInput.disabled = true;
      // // set a bordercolor
      // guessInput.style.borderColor = "red";
      // setMessage(
      //   ` Game Over, you lost !!. The correct number was ${winningNum}`,
      //   "red"
      // );
      gameOver(
        false,
        ` Game Over, you lost !!. The correct number was ${winningNum}`
      );
    } else {
      // game continues - answer wrong
      // change border number
      guessInput.style.borderColor = "red";

      // clear input
      guessInput.value = "";
      setMessage(`${guess} is not correct, ${guessesLeft} guess left`, "red");
    }
  }
});

function gameOver(won, msg) {
  let color;

  // if won is equal to true, then we want thata color to be equal to green else we want that color to be equal to red
  won === true ? (color = "green") : (color = "red");
  //   disable input
  guessInput.disabled = true;
  // set a bordercolor
  guessInput.style.borderColor = color;
  message.style.color = color;
  setMessage(msg);

  // play again
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
}

// get random num

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
