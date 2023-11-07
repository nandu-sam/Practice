'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent); */

//Generating random number for our game 😉

const secretNumber = Math.trunc(Math.random() * 20) + 1;

/* 👇 Decreasing the scope if the number is too low 
or too high and just printing the value in the console */

let score = 20;
let highscore = 0;

/*this below 👇 function contains event handler and event listener  */

document.querySelector('.check').addEventListener('click', function () {
  /* again this is used to convert the string to number because by default 
  the output will be shown as
   string by the js engine and to show number input as a number output
    we use number operator for converting process*/

  const guess = Number(document.querySelector('.guess').value);

  // to check if the number is not present to guess the number

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';

    //when the player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    //changing the color of bg color and width

    document.querySelector('body').style.backgroundColor = '#299c05';
    document.querySelector('.number').style.width = '30rem';

    //setting highscore value

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '💥 Haiiyaaa You lost the game!';
    }
  }

  /*violates DRY rule DONT REPEAT YOURSELF FROM LINE 48 TO 68 */
  /*else if (guess > secretNumber) {
    if (score > 0) {
      //when the guess is too high and low

      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '💥 Haiiyaaa You lost the game!';
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '💥 Haiiyaaa You lost the game!';
    }
  }*/
});
//Adding functionality to again button

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  let secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
