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

let scores,currentScore,activePlayer,playing;


const switchFunction = ()=> {
  document.querySelector(`#current-score-${activePlayer}`).textContent = 0;
    currentScore = 0;
   activePlayer = activePlayer === 0 ? 1 : 0;
   playerE1.classList.toggle('player-active');
   playerE2.classList.toggle('player-active');
}

const init = () =>{  

scores = [0 , 0];
currentScore = 0;
activePlayer = 0;
playing = true;

score1El.textContent = 0;
score2El.textContent = 0;
currentE2.textContent = 0;
currentEl.textContent = 0;

playerE1.classList.remove('player-winner');
playerE2.classList.remove('player-winner');
playerE1.classList.add('player-active');
playerE2.classList.remove('player-active');
diceEl.classList.add('hidden');

}

init();

btnRoll.addEventListener('click',()=>{
  if( playing){
  const dice = Math.trunc(Math.random()*6) + 1;
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  if(dice !== 1){
    currentScore += dice;
    document.querySelector(`#current-score-${activePlayer}`).textContent = currentScore;
  }else{
    switchFunction()
  }
}
})

btnHold.addEventListener('click',()=>{
  if(playing){
  scores[activePlayer] += currentScore;
  console.log(scores[activePlayer]);
  document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];


 if(scores[activePlayer] >= 100){
   
   document.querySelector(`.player-${activePlayer}`).classList.add(`player-winner`);
   document.querySelector(`.player-${activePlayer}`).classList.remove(`playe-active`);
   playing = false;
   diceEl.classList.add('hidden');
   
 }

else{
  switchFunction();
}
}
})

btnNew.addEventListener('click',init)