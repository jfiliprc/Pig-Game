'use strict';

// Selecting elements
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const rollDice = document.querySelector('.btn--roll');
const diceEl = document.querySelector('.dice');
const player1 = document.querySelector('player');
const player2 = document.querySelector('player--1');
let scorep1 = document.getElementById('score--0');
let scorep2 = document.getElementById('score--1');
let currentNumpP0 = document.getElementById('current--0');
let currentNumpP1 = document.getElementById('current--1');
let scores = [0, 0];

// Starting conditions
scorep1.textContent = 0;
scorep2.textContent = 0;
let currentScore = 0;
let activePlayer = 0;
diceEl.classList.add('hidden');

rollDice.addEventListener('click', function () {
  const randomNumber = Math.trunc(Math.random() * 6 + 1);
  diceEl.src = `dice-${randomNumber}.png`;
  diceEl.classList.remove('hidden');

  if (randomNumber !== 1) {
    currentScore += randomNumber;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer == 0 ? 1 : 0;
    if (activePlayer == 1) {
      document.querySelector('.player--0').classList.remove('player--active');
      document.querySelector('.player--1').classList.add('player--active');
    } else {
      document.querySelector('.player--1').classList.remove('player--active');
      document.querySelector('.player--0').classList.add('player--active');
    }
  }
});

btnHold.addEventListener('click', function () {
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  if (scores[activePlayer] >= 100) {
    diceEl.classList.add('hidden');
    currentScore = 0;
    scores = [0, 0];
    document.getElementById('score--0').textContent = 0;
    document.getElementById('score--1').textContent = 0;
    activePlayer = 0;
    document.querySelector(`.player--1`).classList.remove('player--active');
    document.querySelector(`.player--0`).classList.add('player--active');
  } else {
    activePlayer = activePlayer == 0 ? 1 : 0;
    if (activePlayer == 1) {
      document.querySelector('.player--0').classList.remove('player--active');
      document.querySelector('.player--1').classList.add('player--active');
    } else {
      document.querySelector('.player--1').classList.remove('player--active');
      document.querySelector('.player--0').classList.add('player--active');
    }
  }
});

btnNew.addEventListener('click', function () {
  if (activePlayer == 1) {
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
  }
  document.querySelector('.player--0').classList.add('player--active');
  diceEl.classList.add('hidden');
  currentScore = 0;
  scores = [0, 0];
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  activePlayer = 0;
});
