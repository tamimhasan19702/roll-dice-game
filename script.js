'use strict';


const score1El = document.querySelector("#score-0");
const score2El = document.querySelector("#score-1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn-new");
const btnRoll = document.querySelector(".btn-roll");
const btnHold = document.querySelector(".btn-hold");
const currentEl = document.querySelector("#current-score-0")
const currentE2 = document.querySelector("#current-score-1")
const playerE1 = document.querySelector(".player-0");
const playerE2 = document.querySelector(".player-1");


const scores = [0 , 0];
let currentScore = 0;
let activePlayer = 0;


score1El.textContent = 0;
score2El.textContent = 0;
diceEl.classList.add('hidden');

btnRoll.addEventListener('click',()=>{
  const dice = Math.trunc(Math.random()*6) + 1;
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  if(dice !== 1){
    currentScore += dice;
    document.querySelector(`#current-score-${activePlayer}`).textContent = currentScore;
  }else{
    document.querySelector(`#current-score-${activePlayer}`).textContent = 0;
    currentScore = 0;
   activePlayer = activePlayer === 0 ? 1 : 0;
   playerE1.classList.toggle('player-active');
   playerE2.classList.toggle('player-active');
  }
})