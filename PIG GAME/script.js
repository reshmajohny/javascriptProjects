'use strict';
//selecting elements
const player1 = document.querySelector('.player--1');
const player2 = document.querySelector('.player--2');
const score1 = document.getElementById('score--1');
const score2 = document.getElementById('score--2');
const dice = document.querySelector('.dice');
const diceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newBtn = document.querySelector('.btn--new');

const currentScore1 = document.getElementById('current--1');
const currentScore2 = document.getElementById('current--2');

//initiallzing elements

let totalScore = [0, 0];
let currentScore = 0;
let activePlayer = 1;
score1.textContent = 0;
score2.textContent = 0;
dice.classList.add('hidden');

//switchplayer function(
const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  console.log(currentScore);

  activePlayer = activePlayer === 1 ? 2 : 1;
  console.log(activePlayer);
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

//roll dice
diceBtn.addEventListener('click', function () {
  dice.classList.remove('hidden');
  let diceRoll = Math.trunc(Math.random() * 6) + 1;
  dice.src = `dice-${diceRoll}.png`;
  //if dice  not 1 then add score
  if (diceRoll !== 1) {
    console.log('>>>>>' + activePlayer);

    currentScore = currentScore + diceRoll;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    //currentScore1.textContent = currentScore;
  } else {
    //switching player
    switchPlayer();
  }
});

holdBtn.addEventListener('click', function () {
  //store current score to totalScore
  totalScore[activePlayer - 1] = totalScore[activePlayer - 1] + currentScore;

  document.getElementById(`score--${activePlayer}`).textContent =
    totalScore[activePlayer - 1];

  if (totalScore[activePlayer - 1] >= 100) {
    //alert(`PLAYER ${activePlayer} WINS!!`);
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document.getElementById(`current--${activePlayer}`).textContent = 'WINS!';
    dice.classList.add('hidden');
    diceBtn.classList.add('hidden');
    holdBtn.classList.add('hidden');
  } else {
    //switch player
    switchPlayer();
  }
});

newBtn.addEventListener('click', function () {
  totalScore = [0, 0];
  currentScore = 0;
  score1.textContent = 0;
  score2.textContent = 0;
  dice.classList.add('hidden');
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  diceBtn.classList.remove('hidden');
  holdBtn.classList.remove('hidden');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
});
